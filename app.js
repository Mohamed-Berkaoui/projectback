const express=require('express')
const Db=require('./utils/DBconnection')
const appFail = require('./utils/appFail')
const Productrouter = require('./router/Product')
const Authrouter = require('./router/auth')
const commentRouter = require('./router/comment')
require('dotenv').config()
const app=express()

app.use(express.json())

app.use('/api/product',Productrouter)
app.use('/api/auth',Authrouter)
app.use('/api/comment',commentRouter)

app.all('*',(req,res,next)=>{
res.json(new appFail('404 Error'))
})
app.use((err,req,res,next)=>{
    res.json(new appFail(err.message))
    })
    

app.listen(process.env.port,function(){
    Db()
    console.log('app running')
})