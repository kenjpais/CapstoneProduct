import mongoose from "mongoose";
import  randToken from "rand-token";

// function rtnDate(){

//     let x=new Date()
//     return x.toISOString().slice(0,10);
// }

const TransactionSchema = new mongoose.Schema({
    Senderid : {
        type : String,
        required: true,
        unique: true
    },
    Receiverid : {
        type : String,
        required: true,
        unique: true
    },
    TransactionReferenceNo:
    {
        type: String,
        default: function() {
            return randToken.generate(16);
        }
    },
    Amount :{
        type : Number,
        required : true,
    },
    Desc : {
        type : String,
        required : true
    },
    Date : {
        type : Date,
        default : Date.now()
    }
})

// TransactionSchema.pre('save', function preSave(next){
//     var something = this;
//     something.Date(Date.now());
//     next();
//   });

const TransactionDetails = mongoose.model('transaction_details', TransactionSchema)
export default TransactionDetails;

