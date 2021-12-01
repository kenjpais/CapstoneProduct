import React, { Component, useState } from 'react'
import { NavLink,Link, Navigate } from 'react-router-dom'
import './nav.css'


export default function Navbar() {

    return (
        <div>
                <nav class="navbar navbar-collapse navbar-light">
                    <div class="navbar">
                                         
                        <NavLink  exact className="link" activeClassName="active" to='/home' >Home</NavLink>
                        <NavLink exact className="link" activeClassName="active" to='/about'>About</NavLink>
                        <NavLink exact className="link" activeClassName="active" to='/contact'>Contact Us</NavLink>
                        <NavLink exact className="link" activeClassName="active" to="/logout">LogOut</NavLink>
                       
                    </div>    
                     
</nav>
              
        </div>
    )
}

