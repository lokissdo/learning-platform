const mongoose = require("mongoose");
const Course = require("../model/Course");
const userController = require("./UserController");

const CourseController = {
    addCourse: async (req, res, next) => {
        if (!req.body.courseName || !req.body.lecturer || !req.body.price) {
            next({
                invalidFields: true,
                message: "Missing fields."
            });
            return;
        }

        const newCourse = new Course({
            _id: new mongoose.Types.ObjectId,
            courseName: req.body.courseName,
            lecturer: req.body.lecturer,
            price: req.body.price
        });

        try {
            await newCourse.save();
        } catch (err) {
            next({
                success: false,
                message: "Course insertion failed.",
                error: err
            });
            return;
        }
        res.send({
            success: true,
            message: "successfully",
            course: newCourse
        });
    },

    getDetails: async (req, res, next) => {
        try {
            const courseDetails = await Course.find(req.body);
            res.status(200).json({
                success: true,
                courseDetails: courseDetails
            });
        } catch (err) {
            next({
                success: false,
                message: "Couldn't find user name",
                error: err
            });
            return;
        }
    }
}

module.exports = CourseController;