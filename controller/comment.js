
const comments = require('../models/comments')
const user=require('../models/user')
const appFail = require('../utils/appFail')
const appSuccess = require('../utils/appSuccess')
module.exports={
    getAllComments:async(req,res,next)=>{
        const commentData=await comments.find({productId:req.params.id})
        if(!commentData.length){
         return    res.json(new appFail('cant find comments'))
        }
        res.json(new appSuccess(commentData))
    },
    addComments:async(req,res,next)=>{
        const AddedComment=new comments({comment:req.body.comment,userId:req.user._id,productId:req.params.id}) 
        await AddedComment.save()
        res.json(new appSuccess(AddedComment))
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