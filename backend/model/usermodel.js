const mongoose = require('mongoose')
const {Schema} = mongoose

const userSchema = new Schema({
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        reqrired: true
    },
    isVendor: {
        type: Boolean,
        default: false
    }

})


const Userman = mongoose.model('Users', userSchema)
module.exports = Userman