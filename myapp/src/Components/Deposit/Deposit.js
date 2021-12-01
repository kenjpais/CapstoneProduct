import axios from 'axios'
import React, { Component, useState } from 'react'
import img from '../Images/deposit.png'
import Navbar from '../Navbar/Navbar'
import { ToastContainer, toast } from 'react-toastify';
export default function Deposit() {
  
const [amount ,setAmount]=useState(0)
const[msg,setMsg]=useState('')
const headers = {
  'Content-Type': 'application/json'
}
let accid=localStorage.getItem('user')

const submithandler=()=>{
if(amount<=0){
  toast('please give amount greater than zero...')
  setAmount(0)
}
else{
  axios.put(`http://localhost:5000/deposit/`,{"AccountId":accid,"Amount":amount},{headers:headers}).then((res)=>{
    console.log(res.data.message)
        setMsg(res.data.message)
  })
   if(msg){
     toast("Money successfully added to your account....")
   }
}
 
}
  return (
    <div>
      <Navbar/>
        <div className="Container row">
        <div className="fContainer col-md-7">
          <img src={img} style={{ width: "100%", height: "100%" }}></img>
        </div>
        <div className="sContainer col-md-4">
          <form >
            <div class="form-group row">
              <label  class="col-sm-6 col-form-label">Total Amount (In INR)</label>
              <div class="col-sm-6 mb-3">
                <input type="number"  class="form-control" required value={amount} onChange={(e)=>{setAmount(e.target.value)}} placeholder="Amount in INR" />
              </div>
            </div>
            <div class="form-group row">
              <div class="col-sm-10">
                <button type="button" class="btn btn-primary col-sm-6" onClick={submithandler}>Deposit</button>
              </div>
            </div>
            </form>
            </div>
            </div>
            <ToastContainer/>
          </div>
            
   
  )
}
