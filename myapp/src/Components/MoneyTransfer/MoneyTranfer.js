import React, { Component } from 'react'
import img from '../Images/home.png'
import Navbar from '../Navbar/Navbar'
import './Money.css'
import axios from 'axios'
import { Navigate } from 'react-router'
import { toast, ToastContainer } from 'react-toastify'
export default class MoneyTranfer extends Component {

constructor(props){
  super(props)
  this.state={
    accid:localStorage.getItem('user'),
    receiver:'',
    amount:0,
    desc:''
  }
}
changeHandler=(e)=>{
//   this.setState({
//     [e.target.name]: e.target.value
// })
this.setState({
    receiver:e.target.value,
    amount:e.target.value,
    desc:e.target.value
  })
}
handleSubmit=(e)=>{
 
  const headers = {
    'Content-Type': 'application/json'
  }
  let accid=localStorage.getItem('user')
  let data={
      "Senderid":accid,
      "Receiverid":this.state.receiver,
      "Amount":this.state.amount,
      "Desc":this.state.desc
  }
console.log(this.state)



if(this.state.amount<0){
  toast("please give amount in positive...")
  this.setState({
    amount:'',
  });
}
else{
  axios.post(`http://localhost:5000/transfer/`,data,{headers:headers}).then((res)=>{
  console.log(res.data)
  let msg=res.data.message
  if(res.data.message==='success'){
    toast("Money tranfered successfully....")
  }
  else if(msg==='insufficient'){
    toast('Insufficient money in your Account...')
  }
  else if(res.data.error){
    toast('Invalid User......')
  }
})
this.setState({
  receiver:'',
  amount:'',
  desc:''
});

}



}
  render() {
    return (
      <><Navbar/>
      <div className="Container row">
        <div className="fContainer col-md-7">
          <img src={img} style={{ width: "90%", height: "90%" }}></img>
        </div>
        <div className="sContainer col-md-4">
          <form >
            <div class="form-group row">
              <label for="accid" class="col-sm-6 col-form-label">Senders AccountId</label>
              <div class="col-sm-6 mb-3">
                <input type="text" readOnly class="form-control" id="accid" value={this.state.accid} placeholder="Accountid" />
              </div>
            </div>
            <div class="form-group row">
              <label for="receiver" class="col-sm-6 col-form-label">Receiver AccountId</label>
              <div class="col-sm-6 mb-3">
                <input type="text" class="form-control" id="receiver" required value={this.state.receiver} onChange={(e)=>{this.setState({receiver:e.target.value})}} placeholder="Receiver AccountId" />
              </div>
            </div>
            <div class="form-group row">
              <label for="amount" class="col-sm-6 col-form-label">Amount</label>
              <div class="col-sm-6 mb-3">
                <input type="number" class="form-control" id="amount" required value={this.state.amount} onChange={(e)=>{this.setState({amount:e.target.value})}} placeholder="Amount" />
              </div>
            </div>
            <div class="form-group row mb-3">
              <label for="desc" class="col-sm-6 col-form-label">Description</label>
              <div class="col-sm-6">
                <textarea class="form-control" id="desc" required onChange={(e)=>{this.setState({desc:e.target.value})}} value={this.state.desc}placeholder="Note for Receiver" />
              </div>
            </div>
            <div class="form-group row">
              <div class="col-sm-10">
                <button type="button" class="btn btn-primary col-sm-6" onClick={this.handleSubmit}>Transfer</button>
              </div>
            </div>
          </form>
        </div>
        <ToastContainer/>
      </div>
      </>
    )
  }
}
