import React from 'react'

function Portfolio() {
  return (
    
   <div name='Portfolio' className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-10'>
       
        {/* ---------------------------------------- */}
       <div className='flex'>
         <h1 className='text-3xl font-bold mb-5'>Portfolio</h1>
        
        </div>
        <div>
            <p className='text-justify underline'>Projects</p>
            <br />
            <br />
           <div className='flex items-center grid grid-cols-1 md:grid-cols-3 gap-30 '>
             
            <div className='md:w-[300px] md:h-[200px] border-2px text-red-800 font-bold rounded-lg shadow-lg cursor-pointer hover:scale-110-duration:-300'>
                Netflix Data Analysis | MySQL
                <p className='text-black font-normal '>Performed Netflix data analysis using MySQL, applying SQL queries for data extraction,
                     cleaning, and trend analysis to generate insights supporting content strategy decisions</p>
                
                </div>
{/* ---------------------------------------------------------------------------------- */}
                <div className='md:w-[300px] md:h-[200px] border-2px text-red-800 font-bold rounded-lg shadow-lg cursor-pointer hover:scale-110-duration:-300'>
                Society management Project | JavaScript, HTML, CSS
                <p className='text-black font-normal '>Built a full-stack Society Management System using HTML, CSS, 
                    JavaScript with backend support for residents to pay bills and register complaints</p>
                
                </div>
                 
               {/* ----------------------------------------------------------------------------------------------------- */}
                <div className='md:w-[300px] md:h-[200px] border-2px text-red-800 font-bold rounded-lg shadow-lg cursor-pointer hover:scale-110-duration:-300'>
                Pizza Sales Dashboard | Power BI
                <p className='text-black font-normal '>Created an interactive Power BI Pizza Sales Dashboard visualizing KPIs (revenue, orders), sales by category/size/time, 
                    and top & bottom products to support data-driven business decisions.</p>
                
                </div>


                <div className=' md:w-[300px] md:h-[200px] border-2px text-red-800 font-bold rounded-lg shadow-lg cursor-pointer hover:scale-110-duration:-300'>
                Pizza Sales Dashboard | Power BI
                <p className='text-black font-normal '>Created an interactive Power BI Pizza Sales Dashboard visualizing KPIs (revenue, orders), sales by category/size/time, 
                    and top & bottom products to support data-driven business decisions.</p>
                
                </div>



                <div className=' md:w-[300px] md:h-[200px] border-2px text-red-800 font-bold rounded-lg shadow-lg cursor-pointer hover:scale-110-duration:-300'>
                E-Commerce Website – Tassel Hustle | HTML, CSS, JavaScript
                <p className='text-black font-normal '>Performed Netflix data analysis using MySQL, applying SQL queries for data extraction, 
                    cleaning, and trend analysis to generate insights supporting content strategy decisions.</p>
                
                </div>
          
           {/* ---------------------------------------------------------------------------------- */}
            </div>
           </div > 
           <br />
           <br />
<hr />
        </div>
        
        
  )
}

export default Portfolio