import React from 'react'
import './navbar.css'
import { useState } from 'react'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import logo from '../../assets/logo.svg'


const Menu= ()=>{
  return(
  <>
         <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">What is NexusAI</a></p>
          <p><a href="#possibility">Nexus AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
  </>
  )     
}

export default function Navbar() {

const [toggleMenu, setToggleMenu]=useState(false);

  return (
    <nav className='nexuAI__navbar'>
      <div className='nexuAI__navbar-links'>
        <div className='nexuAI__navbar-links-logo'>
          <img src={logo} alt="logo" />
        </div>

        <div className='nexuAI__navbar-links_container'>
        <Menu />
        </div>
      </div>
      <div className='nexuAI__navbar-sign'>
        <p><a href="/">Sign in </a></p>
        <button type='button'>Sign up</button>
      </div>
      <div className='nexuAI__navbar-menu'>
        {
          toggleMenu ?
           <RiCloseLine color='#fff' size={27} onClick={()=>setToggleMenu(false)}/> 
          : <RiMenu3Line color= '#fff' size={27} onClick={()=>setToggleMenu(true)}/>
        }
        {
          toggleMenu && (
            <div className='nexuAI__navbar-menu_container scale-up-center'>
              <div className='nexuAI__navbar-menu_container-links'>
                <Menu/>
              </div>
              <div className='nexuAI__navbar-menu_container-sign'>
        <p><a href="/">Sign in </a></p>
        <button type='button'>Sign up</button>
      </div>
            </div>
          )
        }
      </div>
    </nav>
  )
}
