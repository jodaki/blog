import React from 'react'
import {Link}  from 'react-router-dom'


export default function Navbar() {
  var isAute = localStorage.getItem('isAute')
  return (
    <div>
        
        <ul>
          <Link to='/'>
            <li>home</li>
          </Link>
          {isAute && <Link to='/login'><li>login</li></Link>}
          
        </ul>
    
        
    </div>
  )
}
