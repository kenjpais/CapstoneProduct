import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import './About.css'

export default class About extends Component {
  render() {
    return (
      <>
      <Navbar />
      <div className="SContainer">
        <div class="about-section">
          <div style={{ fontWeight:"bold",fontSize:"20px",marginBottom:"10px"}}>
            A simple one stop point web app to monitor your finances and accounts.
          </div>
          <div >
            <h3> Features </h3>
          </div>
          <div style={{fontWeight:"bold",fontSize:"large"}}>
           <p>Login to your account
            </p>  
             <p>
             View Account balance
            </p>  
             <p>   
         Perform transactions 
            </p>  
            <p>
            View mini statement
            </p>
        </div>
        </div>
      </div>
      </>
    )
  }
}
