const mongoose=require('mongoose')

const orderSchema= new mongoose.Schema({
   userId:{type:mongoose.Types.ObjectId,ref:'User',required:true},
   status:{type:String,enum:['pending','done','canceled'],deafult:'pending'},
   order:[{productId:{type:mongoose.Types.ObjectId,ref:"Product",required:true},
   qty:{type:Number,required:true}}]
},{timestamps:true,versionKey:false})
module.exports=Order=mongoose.model('Order', orderSchema)
