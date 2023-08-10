const mongoose = require("mongoose");
const Question = require("../model/Question");

const QuestionController = {
    addQuestion: async (req, res, next) => {
        if (!req.body.courseId || !req.body.question || !req.body.answer || !req.body.difficulty) {
            next({
                invalidFields: true,
                message: "Missing fields."
            });
            return;
        }

        const newQuestion = new Question({
            _id: new mongoose.Types.ObjectId,
            courseId: req.body.courseId,
            question: req.body.question,
            answer: req.body.answer,
            difficulty: req.body.difficulty
        })
        if (req.body.externalResources) {
            newQuestion.externalResources = req.body.externalResources;
        }

        try {
            await newQuestion.save();
        } catch (err) {
            next({
                success: false,
                message: "Question insertion failed.",
                error: err
            });
            return;
        }
        res.send({
            success: true,
            message: "successfully",
            course: newQuestion
        });
    },

    getQuestionsByDifficulty: async (req, res, next) => {
        if (!req.body.courseId || !req.body.difficulty) {
            next({
                invalidFields: true,
                message: "Missing difficulty."
            });
        }

        try {
            const questions = await Question.find({
                courseId: req.body.courseId,
                difficulty: req.body.difficulty
            });
            res.status(200).json({
                success: true,
                questions: questions
            });
        } catch (err) {
            next({
                success: true,
                message: `No questions available at difficulty ${req.body.difficulty}`
            });
            return;
        }
    }
}

module.exports = QuestionController;