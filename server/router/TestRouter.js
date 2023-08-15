const router=require('express').Router();
const testController = require('../controller/TestController')




// router.use(authMiddleware.isAdmin)


router.get('/get_courses',testController.getTotalCourses);
router.get('/add_course',testController.addCourse);
router.get('/mint_NFT',testController.mintNFT);
router.get('/show_funds',testController.showFunds);
router.get('/buy_course',testController.buyCourse);
router.get('/get_course',testController.getCourse);
router.get('/get_all_courseIDs',testController.getCourseIDs);
router.get('/check_owner',testController.ownsNFTForCourse)
router.get('/fund_contract',testController.fundContract)
router.get('/withDraw_contract',testController.withDrawContract)
// router.post('/delete-partner',adminController.deletePartner);
// router.post('/auth/google',AuthController.verifyGoogleLogin);

module.exports = router