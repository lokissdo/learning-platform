



// router.use(authMiddleware.isAdmin)

const router = require("express").Router();
const testController = require("../controller/TestController");

router.get('/get_courses',testController.getTotalCourses);
router.get('/add_course',testController.addCourse);
router.get('/mint_NFT',testController.mintNFT);
router.get('/show_funds',testController.showFunds);
router.get('/buy_course',testController.buyCourse);
router.get('/reward_item',testController.rewardItem);
router.get('/mint_batch',testController.mintBatch);
router.get('/get_course',testController.getCourse);
router.get('/get_all_courseIDs',testController.getCourseIDs);
router.get('/check_owner',testController.ownsNFTForCourse)
router.get('/fund_contract',testController.fundContract)
router.get('/withdraw_contract',testController.withDrawContract)
router.get('/get_tokenURI',testController.getURIToken)
router.get('/get_questions/:courseID',testController.get_data_for_game)
router.get('/mint_cert/:courseID',testController.mintCert)
router.post('/set_uri',testController.setURIToken)


module.exports = router
