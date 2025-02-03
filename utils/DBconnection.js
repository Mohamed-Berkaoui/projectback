const mongoose=require('mongoose')


const connectDB=function(){
    mongoose.connect(process.env.mongoDB,{dbName:"ecomm"})
    .then(()=>console.log('database connected!!'))
    .catch(()=>console.log('cant connect to databse'))

}
module.exports=connectDB