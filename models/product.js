const mongoose=require('mongoose')

const ProductSchema= new mongoose.Schema({
    title:{type:String,required:true},
    category:{type:String,enum:['electronics','home','beauty','sport','intertament'],required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    image:{type:String,required:true}
})
module.exports=Product=mongoose.model('Product',ProductSchema)