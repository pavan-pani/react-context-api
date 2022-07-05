import React from 'react'
import { Link } from 'react-router-dom'


function heading() {
  return (
    <nav>
        <Link to='/'>Home</Link>
        <Link to='/add'>Add user</Link>
    </nav>
  )
}

export default heading