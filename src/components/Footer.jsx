import React from 'react'
import { FaLinkedin , FaInstagram } from "react-icons/fa";



function Footer() {
  return (
<>

<footer name='Footer' className='py-12'>
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
        <div className='flex flex-col items-center'>
            <div className='flex space-x-4'>
                
                    <FaLinkedin size={24}/>
                     <FaInstagram size={24}/>
                </div>
                <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col items-center'>
                    <p className='text-sm'>
                       © 2026 Your Company Name. All Rights Reserved
                    </p>
                </div>
            </div>
    </div>
</footer>
</>
  )
}

export default Footer