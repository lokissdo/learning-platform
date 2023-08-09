const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { User } = require("./User");

const Course = new Schema({
    _id: mongoose.Types.ObjectId,
    courseName: String,
    lecturer: {
        type: [mongoose.Types.ObjectId],
        ref: "User",
        validate: {
            validator: async function(value) {
                for (const id of value) {
                    if (!await User.isLecturer(id)) {
                        return false;
                    }
                }
                return true;
            }
        }
    },
    price: {
        type: Number,
        default: 1
    },
    rating: {
        point: {
            type: Number,
            default: 0
        },
        ratedBy: {
            type: Number,
            default: 0
        }
    }    
});

module.exports = { Course };