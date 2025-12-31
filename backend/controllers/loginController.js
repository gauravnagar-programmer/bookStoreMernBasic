import jwt from "jsonwebtoken"
import userModel from "../Model/userModel.js";
import bcrypt from "bcrypt"
export const login = async (req,res) =>{
  try {

    const {email,password} = req.body

    const user = await userModel.findOne({email})
    const errorMessage = "email or password is wrong !"

    if(!user){
      return res.status(403).json({message : errorMessage ,success : false})
    }

    const isMatch = await bcrypt.compare(password,user.password)

    if(!isMatch){
      return res.status(403).json({message : errorMessage, success : false})
    }


    const jwtToken = jwt.sign(
      {
        email : user.email,
        userid : user._id
      },
      process.env.JWT_SECRET,
      {expiresIn : "24h"}

    )

    res.status(200)
    .json({
      message : "Login Successfully",
      success : true,
      jwtToken,
      email,
      username : user.name
    })



    
    
    
  } catch (error) {
      res.status(500).json({message : "internal server error" })
  }
}