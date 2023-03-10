const otpService = require('../services/otp-service');
const hashService = require('../services/hash-service')

class NotificationController {
    async sendOtp(req,res){
        const { phone } = req.body;
        if (!phone) {
            res.status(400).json({message: 'Phone field is required'})
        }

        const otp = await otpService.generateOtp();

        // Hashing
        const ttl = 1000 * 60 * 2; // 2 mins
        const expires = Date.now() + ttl;
        const data = `${phone}.${otp}.${expires}`;
        const hash = hashService.hashOtp(data);

        // send OTP
        try {
            await otpService.sendBySms(phone,otp);
            res.json({
                hash: `${hash}.${expires}`,
                phone,
            })
        } catch(err) {
           console.log(err);
           res.status(500).json({message: 'message sending failed'})
        }
    }
}

module.exports = new NotificationController();