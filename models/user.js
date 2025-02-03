const mongoose=require('mongoose')
const { validate } = require('./product')

const userSchema= new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,unique:true,required:true,
        validate:{
            validator:(value)=>{return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)}}},
     password:{type:String,required:true},
     role:{type:String,enum:["admin","customer"],default:"customer"}
})

module.exports=User=mongoose.model('User',userSchema)