import React, { Component, useState, useHistory,useEffect } from 'react'
import img from '../Images/Login.png'
import Avatar from '../Images/avatar.png'
import './Sign.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function SignIn(props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLog, setLog] = useState(false)
  const [data,setData]=useState([])
  const headers = {
    'Content-Type': 'application/json'
  }

  useEffect(()=>{

    axios.get('http://localhost:5000/login',{headers:headers})
        .then(response => setData(response.data));

  },[])

  const handleSubmit = (e) => {
    
    console.log(data)
    let isl=data.find((x)=>{
      if(x.AccountId===username && x.Password===password)return true;
      return false
    })
  
    if(username==="" || password===""){
      if(username===""){
        toast('AccountID Is Empty')
      }
      else {
        toast('Password Is Empty')
      }
    }
    else{
    if(isl) {
      toast("Wow , You Successfully Logedin")
      localStorage.setItem('user', username)
    
      window.location = '/home';
    }
    else {
      toast("Wrong AccountId or Password")
      
    }
  }
  }
  return (
    <div className="Container row">
      <div className="fContainer col-md-8">
        <img src={img} style={{ width: "85%", height: "80%" }}>

        </img>
      </div>
 
    <div className="sConatiner col-md-4">
        <img src={Avatar} className="avatar col-sm-4" />
        <form >
          <div class="form-group row">
            <div class="col-sm-8">
              <input type="text" class="form-control  mb-3" value={username} required onChange={e => setUsername(e.target.value)}  placeholder="Account ID" />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-8">
              <input type="password" class="form-control mb-3" value={password} required  onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-8">
              <button type="button" class="btn btn-primary" onClick={handleSubmit}>Sign in</button>
            </div>
          </div>
        </form>

      </div>
      <ToastContainer/>
    </div>
  )
}

