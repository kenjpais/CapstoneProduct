// const express = require('express');
import express from 'express';
import AccountDetails from '../Schemamodels/AccountDetailsSchema.js';
import User from '../Schemamodels/userSchema.js';
import TransactionDetails from '../Schemamodels/TransactionSchema.js';

const router = express.Router();
router.get('/login', (req,res)=> {
    User.find({},(err,data)=>{
        return res.send(data)
    })
})

router.get('/accdetails/:id', (req,res)=> {
    let accid=req.params.id
   
    AccountDetails.find({AccountId:accid},(err,data)=>{
        console.log(data)
        return res.send(data)
    })
})

router.get('/accdetails/', (req,res)=> {
    let accid=req.params.id
    AccountDetails.find({},(err,data)=>{
        console.log(data)
        return res.send(data)
    })
})

router.put('/deposit/',(req,res)=> {
    let accid=req.body.AccountId
    let amount=req.body.Amount
    amount=parseFloat(amount)
    let [Senderid,Receiverid,Amount,Desc]=["Appbank",accid,amount,"hey...."]
        AccountDetails.findOne({ AccountId: accid},(err,adetails)=>{
            if(err){
                res.send(err)
            }
          let tb=adetails.TotalBalance
            adetails.TotalBalance=tb + amount
            console.log(adetails.TotalBalance)
                adetails.save((err)=>{
                   if (err)
                    res.send(err);
                res.json({ message: 'details updated!' });
        })
              
   })
   console.log(Senderid,Receiverid,Amount,Desc)
  TransactionDetails({
    Senderid,Receiverid,Amount,Desc
      }).save()

})

//parsing it to double
router.get('/transdetails/:id',(req,res)=>{
    let accid = req.params.id
    var arr=[]
    TransactionDetails.find({$or:[{Senderid: accid},{Receiverid:accid}]},(err,data)=>{
        // console.log(data)
        arr.push(data)

    })

// arr.slice(0,4)
//  arr.length=4

        setTimeout(()=>{
            res.send(arr)},2000)
     
    //    console.log(arr)
})



router.post('/transfer',async(req,res)=>{   
    const{ Senderid, Receiverid,Amount,Desc} = req.body
     
    const get_sender = await AccountDetails.findOne({AccountId
        : Senderid})
    const get_receiver = await AccountDetails.findOne({AccountId
        : Receiverid })
    if(!get_sender || !get_receiver){
        res.json({error : 'invaliduser'})
    }else{
        let sender_bal = get_sender.TotalBalance;
        let receiver_bal = get_receiver.TotalBalance;
        // sender_bal=parseInt(sender_bal)
        // receiver_bal=parseInt(receiver_bal)
        // Amount=parseInt(Amount)
        if(sender_bal>=Amount){
            let total_sen_bal = sender_bal-Amount;
            let total_rec_bal = (receiver_bal)+parseFloat(Amount)

            const filter1 = { AccountId: Senderid };
            const update1 = { TotalBalance : total_sen_bal};
            // const update_e = { effective_Bal : total_sen_bal};
            // console.log(update1)
            // console.log(update_e)


            const filter2 = { AccountId: Receiverid}
            const update2 = { TotalBalance : total_rec_bal};
            // const update_e1 = { effective_Bal : total_rec_bal};

            console.log(update2)
            // console.log(update_e1)

            await AccountDetails.findOneAndUpdate(filter1,update1)
            // await AccountDetails.findOneAndUpdate(filter1,update_e)

            await AccountDetails.findOneAndUpdate(filter2,update2)
            // await AccountDetails.findOneAndUpdate(filter2,update_e1)

            const save_data = new TransactionDetails({
                Senderid,Receiverid,Amount,Desc
            })
            save_data.save((err)=>{
                if(err){
                    res.json({error : err})
                }else{
                    res.json({message: "success"})
                }
            })
        }else{
            res.json({message : "insufficient"})
        }
        
    }
    
}) 




















// router.get('/accdetails/:id', (req,res)=> {

//     let accid=req.params.id

   

//     AccountDetails.find({AccountId:accid},(err,data)=>{

//         console.log(data)

//         return res.send(data)

//     })

// })










// // // router.post('/accountdetails',(req,res)=>{
// //     // var temp = new User({
// //     //     name : req.body.AccountId,
// //     //     password : req.body.Password
// //     // })
// //     let Account = req.body.AccountId
// //     let password = req.body.Password
// //     console.log(Account,password)
    

// //     User.find({Account,password},(err,result)=>{
// //      console.log(result)
// //    let data
// //        if(result){
// //              data = {status:'true'};
// //          } else{
// //               data = {status:'false'};
// //          }
// //        res.send(data);
      
// //     })
// // })

export default router;