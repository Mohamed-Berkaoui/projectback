const Product=require('../models/product')
const appFail = require('../utils/appFail')
const appSuccess = require('../utils/appSuccess')
module.exports={
    getAllproduct:async(req,res,next)=>{
        const ProductData=await Product.find()
        if(!ProductData.length){
         return    res.json(new appFail('cant find products'))
        }
        res.json(new appSuccess(ProductData))
    },
    addproduct:async(req,res,next)=>{
        const Addedproduct=new Product(req.body)
        await Addedproduct.save()
        res.json(new appSuccess(Addedproduct))
    },
    getSingleproduct:async(req,res,next)=>{
        const singleproduct= await Product.findById(req.params.id)
        if(!singleproduct){
            return res.json(new appFail('params is fault'))
        }
        res.json(new appSuccess(singleproduct))
    },
    deletedProduct:async(req,res,next)=>{
        const singleproduct= await Product.findByIdAndDelete(req.params.id)
        if(!singleproduct){
            return res.json(new appFail('params is fault'))
        }
        res.json(new appSuccess(singleproduct))

    },
    updatProduct:async(req,res,next)=>{
        const singleproduct=await Product.findByIdAndUpdate
        (req.params.id,req.body,{returnDocument:"after"})
        if(!singleproduct){
            return res.json(new appFail('params is fault'))
        }
        res.json(new appSuccess(singleproduct))
    }
}