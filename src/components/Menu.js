import React, { useState } from 'react'
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const Menu = () => {


  const navigate  = useNavigate()
  function handleClick() {
    navigate('/'); 
  }

  


    let Links =[
      {name:"HOME",link:"/"},
      {name:"SERVICE",link:"/"},
      {name:"ABOUT",link:"/"},
      {name:"BLOG'S",link:"/"},
      {name:"CONTACT",link:"/"},
    ];
    let [open,setOpen]=useState(false);
  return (
    <div className='fixed top-0 left-0 w-full rounded-sm shadow-md'>
      <div className='items-center justify-between py-4 bg-white md:flex md:px-10 px-7'>
      <div 
          onClick={handleClick} 
          className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'
        >
          <span className='pt-2 mr-1 text-3xl text-indigo-600'>
            <ion-icon name="logo-ionic"></ion-icon>
          </span>
          Government of India
        </div>
      
      <div onClick={()=>setOpen(!open)} className='absolute text-3xl cursor-pointer right-8 top-6 md:hidden'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='text-xl md:ml-8 md:my-0 my-7'>
              <a href={link.link} className='text-gray-800 duration-500 hover:text-gray-400'>{link.name}</a>
            </li>
          ))
        }
        <Button onClick={handleClick}>
          Login
        </Button>
      </ul>
      </div>
    </div>
  )
}

export default Menu;