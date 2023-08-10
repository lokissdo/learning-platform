const router=require('express').Router();
const databaseTestRouter = require("./UserRouter");

router.use('/user', databaseTestRouter);

router.use((err, req, res, next) => {
    if (err) res.status(400).send(err)
})
router.use('/', (req, res, next) => {
    res.status(404).send({error:"Page not found."})
})



module.exports = router