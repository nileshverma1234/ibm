const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require('../config/generateToken');

const registerUser = asyncHandler(async (req,res)=>{
    const {name,email,password}= req.body;

    if(!email || !name || !password){
        res.send(400);
        throw new Error("Please enter all Fields");
    }

    const userExists = await User.findOne({email});

    if(userExists){
        res.send(400);
        throw new Error("User Already exist");
    }

    const user = await User.create({
        name,
        email,
        password,
    });

    if(user){
        res.status(201).json({
            _id:user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        });
    }
    else{
        res.status(400);
        throw new Error("Failed to create the user");
    }
});



const authUser =asyncHandler(async (req,res)=>{
    const { email, password}=req.body;

    const user = await User.findOne({email});

    if(user && (await User.matchPassword(password))){
        res.json({
            _id:user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        });
    }
    else{
        res.status(400);
        throw new Error("Failed to create the user");
    }
})

module.exports = registerUser;