import React from 'react'
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

import { ReactTyped } from "react-typed";


function Home() {
  return (
    <>
    <div name='Home' className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
     <div className='flex flex-col md:flex-row'> 


        <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
       <span className='flex'>Welcome to my Feed</span>
       <div className='flex space-x-1 text-4xl'>
        <h1>Hello, I'am a</h1>
       {/* <span className='text-red-700 font-bold'> Developer</span> */}

       <ReactTyped
       className='text-red-700 font-bold'
          strings={["Developer","Programmer" , "Data analyst"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />

       </div>
       <br />
       <p className='flex text-sm md:text-md text-justify'>Eager to join a reputed organization and actively contribute to company growth through my observational skills, dedication to continual learning and upskilling.</p>
       <br />

       <div className='items-center flex flex-col md:flex-row justify-between space-y-6 md:space-y-0'>
        {/* social median icons */}
       <div>

       <h1 className='flex font-semibold'>Available on</h1>
       <ul className='flex space-x-5'>
        <li>
            <a href="gauravi.s.2002@gmail.com">
            <BiLogoGmail className='text-2xl cursor-pointer'/>
            </a>
        </li>

       <li>
        <a href="https://linkedin.com/in/gauravi-more01">
        <FaLinkedin className='text-2xl cursor-pointer' />
        </a>
        </li>

       <li>
        <a href="https://github.com/Gauravi-01">
        <AiFillGithub className='text-2xl cursor-pointer'/>
        </a>
        </li>
         </ul>
         </div>
       


        {/* working on section */}
        <div className=' md:space-y-2'>
        <h1 className='flex font-semibold'>Currently working on</h1>
       <ul className=' items-center flex space-x-5'>
        <li><FaReact  className='text-xl md:text-2xl hover:scale-110 duration-200 rounded-full border-[2px]'/></li>
       <li><SiMongodb className='text-xl md:text-2xl hover:scale-110 duration-200 rounded-full border-[2px]' /></li>
         </ul>
         </div>
       
       </div>


         </div>
        <div className='md:w-1/2 md:ml-48 md:mt-13  order-1'>
           <img src="/formal_gauripic.jpeg" className =" h-80 w-80 md:h-80 w-80 rounded-full" alt="Profile" />
        </div>
     </div>


    </div>
    
    <hr />
    </>
  )
}

export default Home