import React, { useState } from 'react'
import {Link} from "react-scroll"
import { IoMenuOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
function Navbar() {
    const [showMobileNav,setShowMobileNav]=useState(false)
  return (
    <>
    <div className='w-full flex justify-between items-center p-4 px-12 border-b-2 border-b-green-600 '>
      <div className='flex gap-1 cursor-pointer animate-bounce capitalize'>
         <div className='w-10 h-8'>
            <img src="data:image/png;base64,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" alt="logo" className='mix-blend-multiple'/>
         </div>
         <div className='grid font-bold text-md'>
           <p>Mahta<span className='text-green-600'>b</span></p>
           <p>we<span className='text-green-600'>b</span> develope<span className='text-green-600'>r</span></p>
         </div>
      </div>
      <div className='hidden lg:block'>
         <div className='flex gap-2 font-semibold text-lg'> 
         <ul className='hidden md:flex gap-8 text-lg'>
                    <li className='p-3 hover:bg-green-600 hover:text-white cursor-pointer'>
                        <Link to="Home" smooth={true} duration={500}>Home</Link>
                    </li>
                    <li className='p-3 hover:bg-green-600 hover:text-white cursor-pointer'>
                        <Link to="About" smooth={true} duration={500}>About</Link>
                    </li>
                    <li className='p-3 hover:bg-green-600 hover:text-white cursor-pointer'>
                        <Link to="Experiance" smooth={true} duration={500}>Experiance</Link>
                    </li>
                    <li className='p-3 hover:bg-green-600 hover:text-white cursor-pointer'>
                        <Link to="Portfolio" smooth={true} duration={500}>Portfolio</Link>
                    </li>
                    <li className='p-3 hover:bg-green-600 hover:text-white cursor-pointer'>
                        <Link to="Contact" smooth={true} duration={500}>Contact</Link>
                    </li>
                </ul>
         </div>
      </div>
        <div className=' lg:hidden font-bold text-4xl text-green-600' onClick={()=>setShowMobileNav(!showMobileNav)}>
          {
             showMobileNav ? (<IoMenuOutline/>) : (<IoClose/>)
          } 
        </div>
    </div>
     {
        !showMobileNav &&(
         <div className='lg:hidden flex flex-col h-screen items-center justify-center text-green-600 gap-6 font-bold text-2xl'>
         <ul className='flex flex-col items-center p-4'>
                    <li className='py-2'>
                        <Link to="Home" smooth={true} duration={500} onClick={() => setShowMobileNav(false)}>Home</Link>
                    </li>
                    <li className='py-2'>
                        <Link to="About" smooth={true} duration={500} onClick={() => setShowMobileNav(false)}>About</Link>
                    </li>
                    <li className='py-2'>
                        <Link to="Portfolio" smooth={true} duration={500} onClick={() => setShowMobileNav(false)}>Portfolio</Link>
                    </li>
                    <li className='py-2'>
                        <Link to="Experiance" smooth={true} duration={500} onClick={() => setShowMobileNav(false)}>Experiance</Link>
                    </li>
                    <li className='py-2'>
                        <Link to="Contact" smooth={true} duration={500} onClick={() => setShowMobileNav(false)}>Contact</Link>
                    </li>
                </ul>
         </div>
        )
     }
    <div>
      
    </div>
    </>
  )
}

export default Navbar