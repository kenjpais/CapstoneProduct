import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    AccountId : {
        type : String,
        required : true
    },
    Password : {
        type : String,
        required : true
    }
})

const User = mongoose.model('User_login',userSchema)

export default User;