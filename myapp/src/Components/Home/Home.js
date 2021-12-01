import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import img from '../Images/option1.png'
import './home.css'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <>
      <Navbar/>
      <div className="Container row">
        <div className="image col-md-7">
          <img src={img}></img> 
          </div>
        <div class="buttons col-md-3">
          <Link to="/accountdetails" class="btn btn-primary  col-sm-10 mb-3" type="button">Account Details</Link>

          <Link to="/transfer" class="btn btn-primary  col-sm-10 mb-3" type="button">Transfer Money</Link>

          <Link to="/ministate" class="btn btn-primary  col-sm-10 mb-3" type="button">Get Mini Statements</Link>

          <Link to="/deposit" class="btn btn-primary  col-sm-10 mb-3" type="button">Deposit Money</Link>
        </div>
      </div>
      </>

    )
  }
}
