import React from 'react'
import { Element } from 'react-scroll'
function About() {
  return (
    <Element name="About" className='w-full p-2 border border-b-green-600 pb-2'>
     <h1 className='text-xl font-bold p-2'>About</h1>
         <div className='p-4 text-justify'>
            <p className='text-xl font-semibold md:text-lg'>
                Hello,I'm Mahtab Husain Web developer with a keen eye for MERN Stack. with a background in IT,I strive to create impectful and visually stunning software solutios that leave a lasting impression.
            </p>
         </div>
         <div className='p-4'>
            <h1 className='text-2xl font-bold text-green-600'>Education & Training</h1>
            <p className='text-xl font-semibold md:text-lg'>BCA, Manipal University, 3rd Semester</p>
         </div>
         <div className='p-4'>
            <h1 className='text-2xl font-bold text-green-600'>Skills & Experties</h1>
            <p className='text-xl font-semibold md:text-lg'>Proficient in JavaScript Experienced with MERN-STACK Excellent problem-solving skills Effective communication and callaborator</p>
         </div>
         <div className='p-4'>
            <h1 className='text-2xl font-bold text-green-600'>Professional Experience</h1>
            <p className='text-xl font-semibold md:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quia ex eos, non et eveniet optio expedita facere earum natus.</p>
         </div>
         <div className='p-4'>
            <h1 className='text-2xl font-bold text-green-600'>Mission Statement</h1>
            <p className='text-xl font-semibold md:text-lg'>My mission is to leverage my skills and creativity to deliver innovative Full-Stack solution that exceed client expectations and contribute positively to the digital landscope. I am committed to continuous learning and growth,always seeking new challenges and opportunities to expand to expand my horizons.</p>
         </div>
    </Element>
  )
}

export default About