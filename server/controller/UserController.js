const mongoose = require("mongoose");
const User = require("../model/User.js");
const { UserRoleEnum, UserStatusEnum } = require("../constants/Enum.js");
const Signature = require("../Helper/Signature.js");
const jwt = require('jsonwebtoken')
const UserController = {
    // Add a user to database
    addUser: async (req, res, next) => {
        const userName = req.body.userName;

        if (!req.body.userName || !req.body.email || !req.body.walletAccount) {
            next({
                invalidFields: true,
                message: "Missing fields"
            })
            return;
        }

        const existing = await User.findOne({ userName: userName });
        if (existing) {
            res.status(401);
            res.json({
                message: "User name already exists",
                inValid: true,
                success: false
            })
            return;
        }

        const newUser = new User({
            _id: new mongoose.Types.ObjectId,
            userName: userName,
            email: req.body.email,
            walletAccount: req.body.walletAccount,
            createdDate: new Date(),
            role: UserRoleEnum.member,
            status: UserStatusEnum.active
        });

        try {
            await newUser.save();
        } catch (err) {
            next({
                success: false,
                isDuplicated: true,
                message: "User insertion failed.",
                error: err
            });
            return;
        }
        res.send({
            success: true,
            message: "successfully",
            user: newUser
        });
    },

    // Get details from query
    getDetails: async (req, res, next) => {
        if (req.body.email || walletAccount) {
            next({
                invalidFields: true,
                message: "Querying user details by email or MetaMask address is prohibited."
            })
            return;
        }

        try {
            const details = await User.find(req.body).select("userName createdDate role status -_id");
            res.status(200).json({
                success: true,
                accountDetails: details
            })
        } catch (err) {
            next({
                success: false,
                message: "Couldn't find user name",
                error: err
            });
            return;
        };
    },

    getUserNameFromId: async (req, res, next) => {
        if (!req.body.id) {
            next({
                invalidFields: true,
                message: "Missing ID"
            });
        }

        try {
            const userName = await User.findOne({ _id: req.body.id }).select("userName");
            res.status(200).json({
                success: true,
                userName: userName
            });
        } catch (err) {
            next({
                success: false,
                message: "Couldn't find user name",
                error: err
            })
            return;
        }
    },

    // async login(req, res, next) {
    //     if (!req.body.address || !req.body.message || !req.body.signature) {
    //         next({
    //             success: false,
    //             message: "Invalid fields",
    //             invalidFields: true
    //         })
    //         return;
    //     }
    //     if (!Signature.verify(req.body.address, req.body.message, req.body.signature)) {
    //         next({
    //             success: false,
    //             message: "Signature not valid",
    //         })
    //         return;
    //     }
    //     const user = await User.findOne({ walletAccount: req.body.address })

    //     console.log(user);
    //     if (!user) {
    //         res.send({ success: false, message: "You need to signup first" });
    //         return
    //     }
    //     try {
    //         const token = jwt.sign({
    //             user: {
    //                 email: user.email,
    //                 userId: user._id,
    //                 address: user.walletAccount,
    //                 role: user.role
    //             },
    //         },
    //             process.env.SECRET_KEY_TOKEN,
    //             {
    //                 expiresIn: "80h"
    //             }
    //         );
    //         res.cookie('token', token, {
    //             expires: new Date(Date.now() + 80 * 3600)
    //         })
    //         res.send({
    //             success: true,
    //             message: "sucessfully",
    //             user: user
    //         })
    //     } catch (err) {
    //         next(err);
    //     }
    //     return;
    // }
    async login(req, res, next) {
        console.log(req.body)
        if (!req.body.address || !req.body.message || !req.body.signature) {
            next({
                success: false,
                message: "Invalid fields",
                invalidFields: true
            })
            return;
        }
        if (!Signature.verify( req.body.message, req.body.signature,req.body.address)) {
            next({
                success: false,
                message: "Signature not valid",
            })
            return;
        }

        try{
            const token = jwt.sign({
                user: {
                    address: req.body.address,
                },
            },
                process.env.SECRET_KEY_TOKEN,
                {
                    expiresIn: "80h"
                }
            );
            res.cookie('token', token, {
                expires: new Date(Date.now() + 80 * 360000)
            })
            res.send({
                success: true,
                message: "sucessfully",
            })
        } catch (err) {
            console.log(err)
            next(err);
        }
        return;
    }
}

module.exports = UserController;