const commentRouter=require('express').Router()
const commentcontroller=require('../controller/comment')
const asynchandler = require('../utils/asyncHandler')
const verifytoken = require('../utils/verifyToken')

// commentRouter.use(verifytoken())
commentRouter.get('/:id',asynchandler(commentcontroller.getAllComments))
commentRouter.post('/product/:id',verifytoken('customer','admin'),asynchandler(commentcontroller.addComments))
// commentRouter.get('/:id',asynchandler(commentcontroller.getSingleproduct))
// commentRouter.delete('/:id',asynchandler(commentcontroller.deletedProduct))
// commentRouter.put('/:id',asynchandler(commentcontroller.updatProduct))

module.exports=commentRouter