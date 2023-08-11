const jwt = require("jsonwebtoken")
const dataJWT = require('./dataJWT')
// tạo mã token
let make = (user)=>{
    return new Promise(function(resolve,reject){
        jwt.sign({data:user},dataJWT.ACCESS_TOKEN,dataJWT.TOKEN_TIME_LIFE,
            {algorithm:"HS256",
        expiresIn:dataJWT.TOKEN_TIME_LIFE
        },function(err,token){
            if(err){
                return reject(err)
            }else{
                resolve(token)
            }
        })
    })
}
module.exports = {
    make:make
}