const mongoose = require('mongoose')



const userSchema = mongoose.Schema({
    userName: {
    type:String,
    maxlength: 50
},
easyPassword: {
    type : String,
    maxlength: 15
},
role: {
    type: Number,
    default: 0
},
token:{
    type:String
}


})


const User = mongoose.model('User', userSchema)

module.exports = {User}