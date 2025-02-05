
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

    deletedcomment:async(req,res,next)=>{
const singleComment=await comments.findById(req.params.id)
        if(!singleComment){
            return res.json(new appFail('params is fault'))
        }
        if(singleComment.userId.toString()!=req.user._id.toString()){
            return res.json(new appFail('not authorized!!!!!'))
        }
        const deletedcomment= await comments.findByIdAndDelete(req.params.id)

        res.json(new appSuccess(deletedcomment))
    },
    updatcomment:async(req,res,next)=>{
const singleComment=await comments.findById(req.params.id)

        if(!singleComment){
            return res.json(new appFail('params is fault'))
        }
        if(singleComment.userId.toString()!=req.user._id.toString()){
            return res.json(new appFail('not authorized!!!!!'))
        }
        const updatedComment=await comments.findByIdAndUpdate
        (req.params.id,{comment:req.body.comment},{returnDocument:"after"})

        res.json(new appSuccess(updatedComment))
    }
}