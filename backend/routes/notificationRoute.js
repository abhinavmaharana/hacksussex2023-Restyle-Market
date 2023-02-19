const router = require('express').Router();
const notificationController = require('../controllers/notificationController');

router.post('/send-otp', notificationController.sendOtp);

module.exports = router;