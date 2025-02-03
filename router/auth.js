const Authrouter=require('express').Router()
const authController=require('../controller/auth')
const asynchandler = require('../utils/asyncHandler')

Authrouter.post('/signUp',asynchandler(authController.register))
Authrouter.post('/login',asynchandler(authController.login))


module.exports=Authrouter

