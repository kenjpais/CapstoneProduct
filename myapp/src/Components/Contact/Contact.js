import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import './Contact.css'
export default class Contact extends Component {
  render() {
    return (
      <div>
        <Navbar />
         <div  style={{  margin: " 3%  43%" }}> 
           <h3>Our Team</h3>
        </div> 
        <div className="box">
          <div className="lblock">     
            <div className="container">
              <h4>Rahul Pawar</h4>
              <p class="title">rahul.pawar@edgeverve.com</p>
            </div>
            <div className="container">
              <h4>Ken Pais</h4>
              <p class="title">kenjonathan.pais@edgeverve.com</p>
            </div>
            <div className="container">
              <h4>Rohit Patil</h4>
              <p class="title">rohit.patil@edgeverve.com</p>
            </div>

            </div>
            
         
            <div className="rblock">
            <div className="container">
              <h4>Abhijeet Parashar</h4>
              <p class="title">abhijeet.parashar@edgeverve.com</p>
            </div>
            <div className="container">
              <h4>Dinesh Sahoo</h4>
              <p class="title">dinesh.Sahoo@edgeverve.com</p>
            </div>
            <div className="container">
              <h4>Vignan Putakarapu </h4>
              <p class="title">vignan.putakarapu@edgeverve.com</p>
            </div>
            </div>
        </div>
      </div>
    )
  }
}
