const router = require('express').Router();
const userRouter = require("./UserRouter");
const courseRouter = require("./CourseRouter");
const questionRouter = require("./QuestionRouter");
const nftRouter = require("./NFTRouter");

router.use("/user", userRouter);
router.use("/course", courseRouter);
router.use("/question", questionRouter);
router.use("/nft", nftRouter);

router.use((err, req, res, next) => {
    if (err) res.status(400).send(err)
});

router.use('/', (req, res, next) => {
    res.status(404).send({error:"Page not found."})
});

module.exports = router;