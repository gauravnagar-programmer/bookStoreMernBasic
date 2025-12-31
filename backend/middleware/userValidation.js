import Joi from "joi"

export const signupValidation =(req,res,next)=>{
  
  const Schema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    email : Joi.string().email().required(),
    password : Joi.string().min(4).max(50).required()
  })

  const {error} = Schema.validate(req.body,{
    abortEarly : true
  })

  if(error) return res.status(400).json({message : error.details[0].message})

    next()
}

export const loginValidation =(req,res,next)=>{
  
  const Schema = Joi.object({
   
    email : Joi.string().email().required(),
    password : Joi.string().min(4).max(50).required()
  })

  const {error} = Schema.validate(req.body,{
    abortEarly : true
  })

  if(error) return res.status(400).json({message : error.details[0].message})

    next()
}


