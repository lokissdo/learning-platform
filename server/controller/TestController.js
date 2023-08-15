const Transaction = require("../Helper/Transaction");

class TestController {
    async getTotalCourses(req, res, next) {
        const totalCourses = await Transaction.runReadingFunction('getTotalCourses',[]);
        res.json({
            message: 'Invalid user to change into partner',
            totalCourses: Number(totalCourses),
            success: false
        })
        return;
    }

    async addCourse(req, res, next) {

        const course = {
            courseID: Number(123),
            price: Number(5), // Example price in wei (1 ether)
            name: 'Course Name',
            description: 'Course Description',
            external_uri: 'https://example.com',
            image: 'https://example.com/image.png'
        };
        var result = await Transaction.runWritingFunction("addCourse",[course])
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
        const functionArguments = [account.address, 123]; // Replace with the arguments for the function

        Transaction.runWritingFunction(functionName, functionArguments)
    }
    async showFunds(req, res, next) {

        const functionName = 'showFunds'; // Replace with the name of the function you want to call
        const functionArguments = []; // Replace with the arguments for the function

        Transaction.runReadingFunction(functionName, functionArguments)
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

}

module.exports = new TestController;