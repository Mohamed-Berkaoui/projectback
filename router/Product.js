const Productrouter=require('express').Router()
const productController=require('../controller/products')
const asynchandler = require('../utils/asyncHandler')
const verifytoken = require('../utils/verifyToken')

Productrouter.get('/',asynchandler(productController.getAllproduct))

Productrouter.get('/:id',asynchandler(productController.getSingleproduct))
Productrouter.use(verifytoken('admin'))
Productrouter.post('/',asynchandler(productController.addproduct))
Productrouter.delete('/:id',asynchandler(productController.deletedProduct))
Productrouter.put('/:id',asynchandler(productController.updatProduct))

module.exports=Productrouter