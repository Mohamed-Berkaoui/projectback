const orderrouter=require('express').Router()
const orderController=require('../controller/order')
const asynchandler = require('../utils/asyncHandler')
const verifytoken = require('../utils/verifyToken')

orderrouter
.use(verifytoken('admin'))
.get('/',asynchandler(orderController.getAllOrder))
.put('/',asynchandler(orderController.completOrder))
orderrouter
.use(verifytoken('admin','costumer'))
.post('/',asynchandler(orderController.addOrder))
.get('/:id',asynchandler(orderController.findSingleOrder))
.put('/:id',asynchandler(orderController.cancelOrder))
// orderrouter.get('/',verifytoken('admin'),asynchandler(orderController.getAllOrder))



// orderrouter.post('/login',asynchandler(orderController.login))


module.exports=orderrouter

