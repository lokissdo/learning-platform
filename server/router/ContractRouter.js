



// router.use(authMiddleware.isAdmin)

const router = require("express").Router();
const contractController = require("../controller/ContractController");
const { authorizeUser } = require("../middleware/AuthMiddleware");



router.use(authorizeUser)


router.get('/get_courses',contractController.getTotalCourses);
router.get('/add_course',contractController.addCourse);
router.get('/mint_NFT',contractController.mintNFT);
router.get('/show_funds',contractController.showFunds);
router.get('/buy_course',contractController.buyCourse);
router.get('/reward_item',contractController.rewardItem);
router.get('/mint_batch',contractController.mintBatch);
router.get('/get_course',contractController.getCourse);
router.get('/get_all_courseIDs',contractController.getCourseIDs);
router.get('/check_owner',contractController.ownsNFTForCourse)
router.get('/fund_contract',contractController.fundContract)
router.get('/withdraw_contract',contractController.withDrawContract)
router.get('/get_tokenURI',contractController.getURIToken)
router.get('/get_questions/:courseID',contractController.get_data_for_game)
router.get('/mint_cert/:courseID',contractController.mintCert)
router.post('/set_uri',contractController.setURIToken)
router.post('/transaction_hash',contractController.getEventData)

module.exports = router
