import React, { Component,useEffect,useState } from 'react'
import Navbar from '../Navbar/Navbar'
import './mini.css'
import axios  from 'axios'
export default function Ministatement() {
const [data,setData]=useState()
const headers = {
    'Content-Type': 'application/json'
}
useEffect(()=>{
 
  let accountid=localStorage.getItem('user')
  console.log(accountid)
  axios.get(`http://localhost:5000/transdetails/${accountid}`,{headers:headers})
      .then(response => {
        let dres=response.data[0]
        dres.sort(function(a,b){
          var dateA = new Date(a.Date), dateB = new Date(b.Date)
          return dateB + dateA
        });
   
    
        
      dres=dres.reverse()
      if(dres.length>10){
        dres.length=10
       }
      setData(dres)
     
      console.log(dres)
      })
},[])
  return (
  <>
    <Navbar/>
      
       {data?
      <div className="mini">
   
       
        <table class="table table-responsive  text-center">
          <thead>
            <tr>
              <th>Date</th>
              <th>Transaction Reference No.</th>
              <th>Sender Id</th>
              <th>Receiver Id</th>
              <th>Amount</th>
              <th>
              </th>
            </tr>
          </thead>
          <tbody>
         
            
            {
              
                data?.map((item) => (
                    <tr key={item._id}>
                        <td>{new Date(item.Date).toLocaleString()}</td>
                        <td>{item.TransactionReferenceNo}</td>
                        <td>{item.Senderid}</td>
                        <td>{item.Receiverid}</td>
                        <td>{item.Amount}</td>
                        <td/>
                    </tr>
                 
                ))
            
            }
  
           
          </tbody>
        </table>
      
      </div>
     : <div className="load text-center">
       <p>Please wait while we are loading you data.....</p>
       </div>}
      </>
          
  
  )
}
