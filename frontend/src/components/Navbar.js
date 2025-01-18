import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {

  

  const Logout = ()=>{
    
    localStorage.removeItem("UserData")
  }

  return (
    <div className='nav-div'>
      <p className='p'>Work-out App</p>
      <header>
        
        <Link to='/'>LOG IN</Link>
        <Link to='/signup' >SIGN UP</Link>
        <Link to='/' onClick={Logout}>LOG OUT</Link>
      </header>
    </div>
  )
}

export default Navbar
