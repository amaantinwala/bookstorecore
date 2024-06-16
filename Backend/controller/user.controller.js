const User = require("../model/user.model.js");
const bcrypt = require("bcryptjs");

const createUser = async(req,res)=>{
    // const fullname = req.body.name;
    // const email = req.body.email;
    // const password = req.body.password;
    try{
    const {fullname,email,password} = req.body;

    const user = await User.findOne({email});

    if(user){
        return (res.status(404).json("User Already exist"));
    }
        
    const salt = bcrypt.genSaltSync(10);
    const hash  = bcrypt.hashSync(password,salt);
    
    const createdUser =  new User({
            fullname,
            email,
            password:hash
        })

    await createdUser.save();
        
 
    res.status(201).json({message:"User Created Successfully",userDetails: {
        fullname:fullname,
        email:email,
        password:hash
    }})
 
     }catch(error){
        console.log(error);
        res.status(404).json("Some Error Occurred");
     }
    
}

const login = async(req,res)=>{
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email})
        const isMatched = bcrypt.compare(password, user.password)

        if(!user || !isMatched){
            return res.status(404).json({message:"Wrong Credentials"})
        }else{

            res.status(200).json({message:"Login successful...",userDetails:{
                _id:user._id,
                name:user.fullname,
                email:user.email,
                password:user.password,
            }})
        }

    }catch(error){
        console.log(error);
        res.status(500).json({message:"Internal Server Error"})
    }
}

module.exports = {createUser,login};