const jwt=require('jsonwebtoken')

function generatToken(id){
    const token=jwt.sign({user:id},process.env.jwtPassword,{expiresIn:'3h'})
    return token
}
module.exports=generatToken