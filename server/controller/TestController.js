const Transaction = require("../Helper/Transaction");
const Question = require("../model/Question");
const CourseController = require("./CourseController");
const NFTController = require("./NFTController");
const QuestionController = require("./QuestionController");

class TestController {
    async getTotalCourses(req, res, next) {
        const totalCourses = await Transaction.runReadingFunction('getTotalCourses', []);
        res.json({
            message: 'Invalid user to change into partner',
            totalCourses: Number(totalCourses),
            success: false
        })
        return;
    }

    async addCourse(req, res, next) {
        // const isValidCourse = CourseController.addCourse(req,res,next);
        // if(!isValidCourse) return;
        const course = {
            courseID: Number(125),
            price: Number(3000), // Example price in wei (1 ether)
        };

        var result = await Transaction.runWritingFunction("addCourse", [course])
        console.log(result)
        if (!result) return;
        // NFTController.addNFT(req,res,next);
        res.json({
            message: 'Invalid user to change into partner',
            res: result,
            success: true
        })

        return;
    }

    async mintNFT(req, res, next) {

        const functionName = 'mintNFT'; // Replace with the name of the function you want to call
        const functionArguments = ['0x301d50321d084e9457ec42E6723694EdA6A6eC55', 123]; // Replace with the arguments for the function
        let result = await Transaction.runWritingFunction(functionName, functionArguments)
        result = JSON.parse(JSON.stringify(result, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
        ));
        res.json({
            message: '....',
            res: result,
            success: true
        })
        return;

        // metadataJson={}
        // .get("abcccccccccc",metadataJson)
    }
    async get_data_for_game(req, res, next) {


        // const functionName = 'ownsNFTForCourse'; // Replace with the name of the function you want to call
        // const functionArguments = [req.user.address, req.params.courseID]; // Replace with the arguments for the function

        // let isAllowedToLearn = await Transaction.runReadingFunction(functionName, functionArguments)
        // isAllowedToLearn = JSON.parse(JSON.stringify(isAllowedToLearn, (key, value) =>
        //     typeof value === "bigint" ? value.toString() : value
        // ));
        // if (!isAllowedToLearn) {
        //     res.json({
        //         message: 'Not permission to learn this course',
        //         res: result,
        //         success: false
        //     })
        //     return
        // }

        console.log(req.params)
        let questions = await QuestionController.getRandomQuestions(req.params.courseID, 20)
        res.json({
            message: '....',
            res: questions,
            success: true
        })
    }

    async buyCourse(req, res, next) {

        const functionName = 'buyCourse'; // Replace with the name of the function you want to call
        const functionArguments = [125]; // Replace with the arguments for the function
        console.log('hwre')
        let result = await Transaction.runWritingFunction(functionName, functionArguments, 3000)
        res.json({
            message: '....',
            res: result,
            success: true
        })
    }

    async fundContract(req, res, next) {

        const functionName = 'fundContract'; // Replace with the name of the function you want to call
        const functionArguments = []; // Replace with the arguments for the function
        console.log('hwre')
        let result = await Transaction.runWritingFunction(functionName, functionArguments, 100)
        res.json({
            message: '....',
            res: result,
            success: true
        })
    }

    async withDrawContract(req, res, next) {

        const functionName = 'withDrawFunds'; // Replace with the name of the function you want to call
        const functionArguments = [100]; // Replace with the arguments for the function
        console.log('hwre')
        let result = await Transaction.runWritingFunction(functionName, functionArguments)
        res.json({
            message: '....',
            res: result,
            success: true
        })
    }
    async getCourse(req, res, next) {

        const functionName = 'getCourseDetails'; // Replace with the name of the function you want to call
        const functionArguments = [125]; // Replace with the arguments for the function

        let result = await Transaction.runReadingFunction(functionName, functionArguments)
        res.json({
            message: '....',
            res: result,
            success: true
        })
    }

    async getCourseIDs(req, res, next) {

        const functionName = 'getAllCourseIDs'; // Replace with the name of the function you want to call
        const functionArguments = []; // Replace with the arguments for the function

        let result = await Transaction.runReadingFunction(functionName, functionArguments)
        res.json({
            message: '....',
            res: result,
            success: true
        })
    }
    async showFunds(req, res, next) {

        const functionName = 'showFunds'; // Replace with the name of the function you want to call
        const functionArguments = []; // Replace with the arguments for the function

        let result = await Transaction.runReadingFunction(functionName, functionArguments)
        result = JSON.parse(JSON.stringify(result, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
        ));
        res.json({
            message: '....',
            res: result,
            success: true
        })
    }

    async mintBatch(req, res, next) {

        const functionName = 'mintBatch'; // Replace with the name of the function you want to call
        const functionArguments = [10]; // Replace with the arguments for the function
        console.log('hwre')
        let result = await Transaction.runWritingFunction(functionName, functionArguments)
        res.json({
            message: '....',
            res: result,
            success: true
        })
    }

    async rewardItem(req, res, next) {

        const functionName = 'rewardItem'; // Replace with the name of the function you want to call
        const functionArguments = ['0x301d50321d084e9457ec42E6723694EdA6A6eC55']; // Replace with the arguments for the function
        console.log('hwre')
        let result = await Transaction.runWritingFunction(functionName, functionArguments)
        res.json({
            message: '....',
            res: result,
            success: true
        })
    }
    async ownsNFTForCourse(req, res, next) {
        const functionName = 'ownsNFTForCourse'; // Replace with the name of the function you want to call
        const functionArguments = ['0x2d89266fCf02dD5ac8387fBcb3A786eFcE0F48E9', 125]; // Replace with the arguments for the function

        let result = await Transaction.runReadingFunction(functionName, functionArguments)
        result = JSON.parse(JSON.stringify(result, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
        ));
        res.json({
            message: '....',
            res: result,
            success: true
        })
    }
    async getURIToken(req, res, next) {
        const functionName = 'tokenURI'; // Replace with the name of the function you want to call
        const functionArguments = [1]; // Replace with the arguments for the function

        let result = await Transaction.runReadingFunction(functionName, functionArguments)
        result = JSON.parse(JSON.stringify(result, (key, value) =>
            typeof value === "bigint" ? value.toString() : value
        ));
        res.json({
            message: '....',
            res: result,
            success: true
        })
    }
}

module.exports = new TestController;