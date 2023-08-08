const { json } = require("body-parser");
const Bill = require("../model/Bill")
const Campaign = require("../model/Campaign");
const PartnerQueue = require('../model/PartnerQueue');
const { UserRoleEnum, CategoriesRubbish } = require('../constants/Enum')
const mongoose = require('mongoose')
const ContributorController = {


    //createBill
   


    // requestPartnerRole: async (req, res, next) => {
    //     if (req.user.role == UserRoleEnum.contributor) {
    //         const newPartnerQueue = new PartnerQueue({
    //             user: new mongoose.Types.ObjectId(req.user.userId)
    //         })
    //         try {
    //             await newPartnerQueue.save();
    //         } catch (e) {
    //             res.status(500).json({
    //                 success: false,
    //                 error: e
    //             })
    //             console.log(e);
    //             return;

    //         }

    //         res.status(200).json({
    //             success: true,
    //             message: 'Sucessfully'
    //         })
    //         return;
    //     }

    //     res.status(401).json({
    //         success: false,
    //         invalidUser: true,
    //         message: 'Invalid user.'
    //     })
    // },

    // //viewMyBill
    // viewMyBill: async (req, res) => {
    //     try {
    //         const myBill = await Bill.find({ userId: req.user.userId }).all();
    //         res.status(200).json({
    //             success: true,
    //             bills: myBill
    //         })

    //     } catch (error) {
    //         res.status(500).json({
    //             success: false,
    //             error: error
    //         })
    //     }
    // }
}

module.exports = ContributorController;