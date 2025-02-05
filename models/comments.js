const mongoose=require('mongoose')

const CommentSchema= new mongoose.Schema({
    comment:{type:String},
    userId:{type:mongoose.Types.ObjectId,ref:"User"},
    productId:{type:mongoose.Types.ObjectId,red:"Product"},
},{timestamps:true,versionKey:false})
module.exports=Comment=mongoose.model('Comment',CommentSchema)
