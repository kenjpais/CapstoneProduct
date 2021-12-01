import React from 'react'
import { Navigate } from 'react-router'

export default function Logout() {
    if(localStorage.getItem('user')){
        localStorage.clear()
    }
    return (
        <div>
            <Navigate to="/"/>
        </div>
    )
}
