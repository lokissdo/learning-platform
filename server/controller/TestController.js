const Transaction = require("../Helper/Transaction");

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
    async setBase(req, res, next) {
        const totalCourses = await Transaction.runReadingFunction('getTotalCourses', []);
        res.json({
            message: 'Invalid user to change into partner',
            totalCourses: Number(totalCourses),
            success: false
        })
        return;
    }

    async addCourse(req, res, next) {

        const course = {
            courseID: Number(124),
            price: Number(3000), // Example price in wei (1 ether)
        };
        var result = await Transaction.runWritingFunction("addCourse", [course])
        console.log(result)
        res.json({
            message: 'Invalid user to change into partner',
            res: result,
            success: true
        })
        return;
    }

    // async buyCourse(courseID, value) {
    //     const result = await contract.methods.buyCourse(courseID).send({ from: account.address, value: value });
    //     return result;
    // }


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
    async buyCourse(req, res, next) {

        const functionName = 'buyCourse'; // Replace with the name of the function you want to call
        const functionArguments = [124]; // Replace with the arguments for the function
        console.log('hwre')
        let result = await Transaction.runWritingFunction(functionName, functionArguments)
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
        let result = await Transaction.runWritingFunction(functionName, functionArguments)
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
        const functionArguments = [123]; // Replace with the arguments for the function

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

    // // Call the mintBatch function
    // async mintBatch(number) {
    //     try {
    //         const result = await contract.methods.mintBatch(number).send({ from: account.address });
    //         console.log('Mint Batch Transaction Hash:', result.transactionHash);
    //     } catch (error) {
    //         console.error('Error minting batch:', error);
    //     }
    // }

    // // Call the rewardItem function
    // async rewardItem(toAddress) {
    //     try {
    //         const result = await contract.methods.rewardItem(toAddress).send({ from: account.address });
    //         console.log('Reward Item Transaction Hash:', result.transactionHash);
    //     } catch (error) {
    //         console.error('Error rewarding item:', error);
    //     }
    // }
    async ownsNFTForCourse(req, res, next) {
        const functionName = 'ownsNFTForCourse'; // Replace with the name of the function you want to call
        const functionArguments = ['0x2d89266fCf02dD5ac8387fBcb3A786eFcE0F48E9',123]; // Replace with the arguments for the function

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