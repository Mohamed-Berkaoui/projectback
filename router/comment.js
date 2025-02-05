const commentRouter=require('express').Router()
const commentcontroller=require('../controller/comment')
const asynchandler = require('../utils/asyncHandler')
const verifytoken = require('../utils/verifyToken')

// commentRouter.use(verifytoken())
/**
 * @endpoint /api
 * @access visitor
 * 
 */
commentRouter.get('/:id',asynchandler(commentcontroller.getAllComments))
commentRouter.use(verifytoken('customer','admin'))
commentRouter.post('/product/:id',asynchandler(commentcontroller.addComments))
commentRouter.put('/:id',asynchandler(commentcontroller.updatcomment))
commentRouter.delete('/:id',asynchandler(commentcontroller.deletedcomment))

module.exports=commentRouter