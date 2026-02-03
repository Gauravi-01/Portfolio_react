import React from 'react'

function About() {
  return (
    /* 1. Remove mr-72 (this was pushing it from the right) */
    /* 2. Keep mx-auto to center the wrapper, but the text inside will be left-aligned */
    <div name='About' className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-10'>
       
        {/* ---------------------------------------- */}
       <div className='flex'>
         <h1 className='text-3xl font-bold mb-5'>About</h1>
        
        </div> 
        <div>
            <p className='text-justify'>
             Eager to join a reputed organization and actively contribute to company growth through my observational skills,
             dedication to continual learning and upskilling 
        </p> </div> 
        <br />
         {/* ---------------------------------------- */}

        <div className='flex'>
            <h1 className='text-green-700 font-semibold text-2xl'>SKILLS</h1>
        </div> 
        <div className='text-justify'>
             MySQL, React , JavaScript , Power BI, Core java, Time Management, Organizational Skills
        </div> <br />
        {/* ----------------------------------------------------------------- */}
        
        <div>
            <div className='flex'>
            <h1 className='text-green-700 font-semibold text-2xl'>EDUCATION</h1> 
        </div>
        <br />
            
           <div>
             <p className='text-justify'>
                 Master of Computer Applications (MCA)
                <br />
                SIES College of Management Studies | 2024 – 2026 (Ongoing) <br />
                Percentage: 67.42%
                <br />

                <br />

                Bachelor of Banking & Insurance (Commerce) <br />
                SIES College of Arts, Science & Commerce | 2020 – 2023 <br />
                CGPA: 9.22 / 10
                <br />
                <br />

                Higher Secondary (12th) <br />
T               ilak College of Science & Commerce | 2020 <br />
                Percentage: 76.92%
                <br /> <br />

                Secondary (10th) <br />
                S.B.O.A Public School, Navi Mumbai | 2018 <br />
                Percentage: 80.40%

            </p>
           </div>
        </div> <br /> <br />

    {/* ------------------------------------------------------------------------------------------------------------- */}
    <div className='flex'>
            <h1 className='text-green-700 font-semibold text-2xl'>CERTIFICATIONS</h1>
        </div> 
        <div className='text-justify'>
            •	Google Data Analytics – Coursera <br />
            •	Data Analytics Job Simulation – Deloitte <br />
            •	Cloud Computing – NPTEL <br />
            •	Privacy and Security in Online Social Media – NPTEL <br />

        </div> <br /> <br />
    

    {/* ------------------------------------------------------------------------------------------------------------- */}
     <div className='flex'>
            <h1 className='text-green-700 font-semibold text-2xl'>CO-CURRICULAR & EXTRACURRICULAR ACTIVITIES</h1>
        </div> 
        <div className='text-justify'>
            •	Member, Cultural Committee – PIXEL <br />
            •	Participant, Nukkad Natak & IKYAM (Annual College Event) <br />
            •	Organizing Committee Member – DRD | Rotaract Club <br />


        </div> <br /> <br />
        {/* ------------------------------------------------------------------------------------------------------------- */}

         <div className='flex'>
            <h1 className='text-green-700 font-semibold text-2xl'>ACHIEVEMENTS</h1>
        </div> 
        <div className='text-justify'>
              •	Runner-up, District Level Group Dance Competition   <br />


        </div> <br /> <br />
         {/* ------------------------------------------------------------------------------------------------------------- */}
         <div className='flex'>
            <h1 className='text-green-700 font-semibold text-2xl'> INTERESTS </h1>
        </div> 
        <div className='text-justify'>
             Dancing | Journaling | Crocheting   <br />


        </div> <br />
        <hr />

    </div>
  )
}

export default About