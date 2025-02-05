

const order=require('../models/order')
const appFail = require('../utils/appFail')
const appSuccess = require('../utils/appSuccess')
const product = require('../models/product')

module.exports={
    getAllOrder:async(req,res,next)=>{
        const orderData=await order.find().populate({path:"order",populate:'productId'})
        if(!orderData.length){
         return    res.json(new appFail('cant find comments'))
        }
        if(req.user.role != "admin"){
            return res.json(new appFail("not autorized"))
        }
        res.json(new appSuccess(orderData))
    },
    addOrder:async(req,res,next)=>{
        const cart=req.body.cart
        if(!cart.length){
            return res.json(new appFail('cart is empty!!'))
        }
     for(let i=0;i<cart.length;i++){
        let prod=await product.findById(cart[i].productId)
        if(!prod||!cart[i].qty){
            return res.json(new appFail('verify order'))
        }
     }
        const AddedOrder=new order({userId:req.user._id,order:cart,status:'pending'}) 
        await AddedOrder.save()
        res.json(new appSuccess(AddedOrder))
    },

    cancelOrder:async(req,res,next)=>{
        const singleOrder= await order.findById(req.params.id)
        if(!singleOrder){
            return res.json(new appFail('params is fault'))
        }
        if(singleOrder.userId.toString()!=req.user._id.toString()){
            return res.json(new appFail('not authorized!!!!!'))
        }
        const updatedOrder= await order.findByIdAndUpdate(req.params.id,{status:'cancled'},{returnDocument:"after"})
        res.json(new appSuccess(updatedOrder))
    },
    completOrder:async(req,res,next)=>{
        const updatedOrder= await order.findByIdAndUpdate(req.params.id,{status:'done'},{returnDocument:"after"})
        if(!updatedOrder){
            return res.json(new appFail('params is fault'))
        }
        res.json(new appSuccess(updatedOrder))
    },
    findSingleOrder:async(req,res,next)=>{
        const singleOrder=await comments.findById(req.params.id)
        if(!singleOrder){
            return res.json(new appFail('params is fault'))
        }
        if(singleOrder.userId!=req.user._id || req.user.role!='admin'){
            return res.json(new appFail('not authorized'))

        }
        res.json(new appSuccess(singleOrder))
    }
}