import mongoose from "mongoose";
const AccountDetailsSchema = new mongoose.Schema({
    AccountId : {
        type : String,
        required : true
    },
    TotalBalance : {
        type : Number,
        required : true
    },
    LeinAmount : {
        type : Number,
        required : true
    },
    LimitAmount : {
        type : Number,
        required : true
    }
   
})


const AccountDetails=mongoose.model('Accountdetails',AccountDetailsSchema)
export default AccountDetails;