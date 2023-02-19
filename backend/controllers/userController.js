const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const User = require("../models/userModel")
const crypto = require("crypto");
const sendToken = require("../utils/jwtToken");

// Register a user
exports.registerUser = catchAsyncErrors(async(req,res,next)=> {
    const {username, firstname, lastname,email,password} = req.body;

    const user = await User.create({
        username, firstname, lastname,email,password
    });

    sendToken(user,201,res);
});

// Login User
exports.loginUser = catchAsyncErrors(async (req,res,next) => {
    const {email,password} = req.body;

    // checking if user has given password and email both

    if(!email || !password){
        return next(new ErrorHandler("Please Enter Email & Password", 400))
    }

    const user = User.findOne({email}).select("+password");

    if(!user){
        return next(new ErrorHandler("Invalid email or password"));
    }

    const isPasswordMatched = user.comparePassword();

    if(!isPasswordMatched){
        return next(new ErrorHandler("Invalid email or password",401));
    }

    sendToken(user,200,res);
})

// Logout User
exports.logout = catchAsyncErrors(async(req,res,next)=> {

    req.cookie("token",null,{
        expires: new Date(Date.now()),
        httpOnly: true,
    });

    res.status(200).json({
        success: true,
        message: "Logged Out"
    });
});

// Get User Detail
exports.getUserDetails = catchAsyncErrors(async (req,res,next) => {
    const user = await User.findById(req.user.id);

    res.status(200).json({
        success: true,
        user,
    });
});

// Get all users (admin)
exports.getAllUser = catchAsyncErrors(async (req,res,next) => {
    const users = await User.find();

    res.status(200).json({
        success: true,
        users,
    });
});

// Get single user (Admin)
exports.getSingleUser = catchAsyncErrors(async (req,res,next) => {
    const user = await User.findById(req.params.id);

    if (!user) {
        return next(
            new ErrorHandler(`User does not exist with Id: ${req.params.id}`)
        );
    }

    res.status(200).json({
        success: true,
        user,
    });
});

// Update User Role -- Admin
exports.updateUserRole = catchAsyncErrors(async (req, res, next) => {
    const newUserData = {
      name: req.body.name,
      email: req.body.email,
      role: req.body.role,
    };
  
    await User.findByIdAndUpdate(req.params.id, newUserData, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
  
    res.status(200).json({
      success: true,
    });
});
