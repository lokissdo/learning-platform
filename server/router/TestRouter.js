const router=require('express').Router();
const testController = require('../controller/TestController')




// router.use(authMiddleware.isAdmin)


router.get('/get_courses',testController.getTotalCourses);
router.get('/add_course',testController.addCourse);
router.get('/mint_NFT',testController.mintNFT);
router.get('/show_funds',testController.showFunds);
// router.post('/delete-partner',adminController.deletePartner);
// router.post('/auth/google',AuthController.verifyGoogleLogin);

module.exports = router