import React, { useState } from 'react'
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-scroll'
//import pic from "C:\Users\snigd\my-portfolio\public\gauri formals pic - Copy.jpg"

function Navbar() {
    const [menu,setMenu]=useState(false)
    const navItems=[
        {
        id:1,
        text:'Home'
         },
         {
        id:2,
        text:'About'
         },
         {
        id:3,
        text:'Portfolio'
         },
         {
        id:1,
        text:'Contact'
         },
]
  return (
    <>
    <div className= "max-w-screen-2xl container mx-auto px-4 md:px-20 h-15 items-center shadow-md ">
        <div className='flex justify-between h-16'>
            <div className = "flex space-x-2">
                <img src="/formal_gauripic.jpeg" className ="h-12 w-12 rounded-full" alt="Profile" />
            {/* <img src ={pic} alt=""/> */}
            <h1 className="font-semibold text-2xl cursor-pointer" >Gauravi <span className="text-green-500 text">More</span>
            <p className='text-sm'>Fresher</p>
            {/* //DESKTOP NAVBAR */}
             </h1>
             </div>
             <div>
                <ul className='hidden md:flex space-x-10 font-sans text-xl'>
                {
                    navItems.map(({id,text})=>(
                        <li className='hover:scale-105 duration-200 font-semibold cursor-pointer' key={id}>
                            <Link to={text}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            activeClass='active'
                            >{text}</Link>
                            
                            </li>
                    ))
                }
            </ul>
            <div onClick={()=>setMenu(!menu)}className='md:hidden'>
                {menu? < IoClose  size={24} />:< TiThMenu size={24} />}
            </div>
             </div> 
             </div>

            {/* //MOBILE navbar */}
            {menu && (
        <div className='bg-white'>
         <ul className="md:hidden flex flex-col h-screen items-center justify-center fixed top-0 left-0 right-0 space-y-3 text-xl">
                 {
                    navItems.map(({id,text})=>(
                        <li className='hover:scale-105 duration-200 font-semibold cursor-pointer' key={id}>
                            <Link 
                            onClick={()=>setMenu(!menu)}
                            to={text}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            activeClass='active'
                            >{text}</Link></li>
                    ))
                }
         </ul>
        </div>
        )}
        
    </div>
    </>
  )
}

export default Navbar