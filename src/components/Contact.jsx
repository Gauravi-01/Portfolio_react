import React from 'react'
import { IoIosCall } from "react-icons/io";
import { SiGmail } from "react-icons/si";

function Contact() {
  return (
    <>
        <div name='Contact' className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
        <h1 className=' flex text-3xl font-bold mb-4 '> Contact Me</h1>
        <span className='flex mb-5'>Please contact on below details </span>
        <div className='flex '> 

            <IoIosCall size={24}/>
        <p className=''> - 8291604258</p>
        </div>
            
        <div className='flex flex-row mt-4'>
            <SiGmail size={19} />
            <p className='underline ml-4'>    gauravi.s.2002@gmail.com</p>
            
        </div>
        {/* <div className='flex flex-col items-center justify-center mt-5'> 
            <form action="" className='bg-slate-200 w-96 py-5 px-6 rounded-2xl'>
            <h1 className='font-bold mb-4'>Send your Message</h1>

            <div className='flex flex-col mb-6'>
                <label className=' flex block text-gray-700'>Full Name</label>
                <input
                className='shadow-appearance-none border rounded-lg py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline'
                id='name'
                type="text" 
                placeholder='Enter your fullname'/>
            </div>

            <div className='flex flex-col mb-4'>
                <label className=' flex block text-gray-700'>Email address</label>
                <input
                className='shadow-appearance-none border rounded-lg py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline'
                id='name'
                type="text" 
                placeholder='Enter your email address'/>
            </div>

             <div className='flex flex-col mb-4'>
                <label className=' flex block text-gray-700'>Message</label>
                <textarea
                className='shadow-appearance-none border rounded-lg py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline'
                id='name'
                type="text" 
                placeholder='Enter your message'/>
            </div>
            <button className='bg-black text-white rounded-xl px-2 py-2 hover:bg-slate-700 duration-300'>send</button>
            </form>
        </div> */}

        </div>
    </>
  )
}

export default Contact