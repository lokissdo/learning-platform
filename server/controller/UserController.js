const mongoose = require("mongoose");

const User = require("../model/User.js");

const UserController = {
    async addUser(req, res, next) {
        const userName = req.body.userName;

        // Check required fields
        if (!req.body.email || !req.body.walletAccount) {
            next({
                invalidFields: true,
                message: "Missing fields"
            })
            return;
        }

        // Check existing user name
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
            walletAccount: req.body.walletAccount
        })
        
        try {
            await newUser.save();
        } catch (err) {
            next({
                success: false,
                isDuplicated: true,
                message: "User insertion failed.",
                error: err,
            });
            return;
        }
        res.send({
            success: true,
            message: "successfully",
            user: newUser
        });
    }
}

module.exports = UserController;