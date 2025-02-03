const Productrouter=require('express').Router()
const productController=require('../controller/products')
const asynchandler = require('../utils/asyncHandler')

Productrouter.get('/',asynchandler(productController.getAllproduct))
Productrouter.post('/',asynchandler(productController.addproduct))
Productrouter.get('/:id',asynchandler(productController.getSingleproduct))
Productrouter.delete('/:id',asynchandler(productController.deletedProduct))
Productrouter.put('/:id',asynchandler(productController.updatProduct))

module.exports=Productrouter