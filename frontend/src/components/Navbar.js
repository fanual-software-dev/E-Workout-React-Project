import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
      <Link to='/'>Home</Link>
      <Link to='/'>About</Link>
      <Link to='/'>Workouts</Link>
      <Link to='/'>Apparatus</Link>
      <Link to='/'>Contact</Link>
    </header>
  )
}

export default Navbar
