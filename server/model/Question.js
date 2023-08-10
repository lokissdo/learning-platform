const mongoose = require("mongoose");
const { Course } = require("./Course");

const CourseQuestion = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    courseId: {
        type: mongoose.Types.ObjectId,
        validate: {
            validator: async function(value) {
                if (!await Course.isExistingCourse(value)) {
                    return false;
                }
                return true;
            }
        }
    },
    question: {
        type: String
    },
    externalResources: {
        type: [String]
    },
    answer: {
        type: String
    },
    difficulty: {
        type: Number,
        default: 0
    }
});

module.exports = { CourseQuestion };