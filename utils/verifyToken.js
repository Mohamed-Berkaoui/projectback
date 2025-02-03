const user = require("../models/user")
const appFail = require("./appFail")
const jwt=require('jsonwebtoken')
function verifytoken(...roles){
return async (req,res,next)=>{
    token=req.headers.authorization || req.headers.Authorization 
    if(!token){
       return  res.json(new appFail('403 not access'))
    } 
    token=token.replace('Bearer ','')
    let decode 
    try{
        decode=jwt.verify(token,process.env.jwtPassword)
    }
    catch(err){
       return res.json(new appFail('unauthorized'))
    }
    const existUser=await user.findById(decode.user)
    if(!existUser){
       return res.json(new appFail('unauthorized'))
        
    }
    if(!roles.includes(existUser.role)){
       return res.json(new appFail('unauthorized'))

    }
    delete existUser.password 
    req.user=existUser
    next()
}

}
module.exports=verifytoken