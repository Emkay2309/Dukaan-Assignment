import React from 'react'
import NavbarTop from './NavbarTop'
import NavbarBottom  from './NavbarBottom'
import '.././index.css'

function Navbar() {
  return (
    <div className='text-[white]  w-[224px] h-[882px] bg-indigo-dark '>
        <NavbarTop/>
        <NavbarBottom  />
    </div>
  )
}

export default Navbar