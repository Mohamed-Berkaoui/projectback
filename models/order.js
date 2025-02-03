const mongoose=require('mongoose')

const orderSchema= new mongoose.Schema({
   userId:{type:mongoose.Types.ObjectId,ref:'User',required:true},
   order:[{productId:{type:mongoose.Types.ObjectId,ref:"Product",required:true},qty:{type:Number,required:true}}]
})
module.exports=Order=mongoose.model('Order', orderSchema)
