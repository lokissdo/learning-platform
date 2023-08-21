const router = require('express').Router();
const userRouter = require("./UserRouter");
const courseRouter = require("./CourseRouter");
const questionRouter = require("./QuestionRouter");
const nftRouter = require("./NFTRouter");
const contractRouter =  require("./ContractRouter");



router.use("/user", userRouter);
router.use("/course", courseRouter);
router.use("/question", questionRouter);
router.use("/nft", nftRouter);
router.use("/contract", contractRouter);


module.exports = router;