const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const User = require("../models/userModel")
const crypto = require("crypto");

// Register a user
exports.registerUser = catchAsyncErrors(async(req,res,next)=> {

})