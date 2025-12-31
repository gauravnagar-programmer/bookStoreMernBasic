import userModel from "../Model/userModel.js";
import bcrypt from "bcrypt"
export const signup = async (req,res) =>{
  try {

    const {name,email,password} = req.body

    const findUser = await userModel.findOne({email})

    if(findUser){
      return res.status(409).json({message : "user already exists ! , please login" ,success : false})
    }

    const createUser = userModel({
      name,
      email,
      password
    })

    createUser.password = await bcrypt.hash(password,10)


    await createUser.save()
    res.status(201).json({message : "signup successfully" , success : true})
    
  } catch (error) {
      res.status(500).json({message : "internal server error" })
  }
}