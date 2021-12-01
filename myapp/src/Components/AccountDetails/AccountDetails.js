import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { toast,ToastContainer } from 'react-toastify'
import img from '../Images/info1.png'
import Navbar from '../Navbar/Navbar'


export default function AccountDetails() {
  const [rdata,setRData]=useState([])
  const headers = {
    'Content-Type': 'application/json'
  }
 
  useEffect(()=>{
    let accid=localStorage.getItem('user')
    axios.get(`http://localhost:5000/accdetails/${accid}`,{headers:headers})
        .then(response =>{ setRData(response.data[0])
            if(rdata.TotalBalance < 1000){
              toast("Your AccountBalance is less than 1000 , Deposit Some amout...")
            }
        });

  
    
     
  },[])

  return (
        <> 
        <Navbar />
      
        <div className="Container row">
        <div className="image col-md-6">
          <img src={img}></img> 
          </div>
        <div className="dContainer col-md-6">
            {
              <table className="table text-center">
               <tbody>
               <tr>
                 <th>Account ID</th>
                 <th>Total Balance </th>
                 <th>Lein Amount</th>
                 <th>Limit Amount</th>
               </tr>
               {
                 <tr >
                   <td>{rdata.AccountId}</td>
                   <td>{rdata.TotalBalance} INR</td>
                   <td>{rdata.LeinAmount} INR</td>
                   <td>{rdata.LimitAmount} INR</td>
                 </tr>
               }
         </tbody>
         </table>
      
            } 
               <ToastContainer/>
        </div>
          </div>
          </>
   
  )
}

