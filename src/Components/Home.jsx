import React from 'react'
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import image from "../assets/my-image.jpg"
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div name="Home" className='w-full md:flex justify-between gap-20 items-center p-8 py-12 border border-b-green-600 pb-2'>
       <div className="w-full flex justify-center md:hidden">
             <img src={image} alt="my-image" className='rounded-full w-[400px]'/>
        </div>
        <div className="w-full grid gap-3 p-2 ">
            <p className='font-semibold'>Welcome in My Feed</p>
            <h1 className='text-lg font-bold'>Hello,I'm a 
            <TypeAnimation
               sequence={[
              // Same substring at the start will only be typed out once, initially
             "Programmer",
             1000, // wait 1s before replacing "Mice" with "Hamsters"
             "Developer",
             1000,
             "MERN Developer",
             1000,
             ]}
            wrapper="span"
            speed={30}
            style={{ fontSize: '1.5em', display: 'inline-block',color:'green' }}
            repeat={Infinity}
          />
            </h1>
            <p className='text-justify text-lg md:text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolore maiores necessitatibus rerum, inventore tempora vel est quasi praesentium cumque error magni eaque autem deleniti enim illum tempore excepturi quas!</p>
            <div className='w-full grid md:flex justify-between items-center p-4 gap-8'>
                <div>
                    <p className='font-semibold font-sans p-2 text-xl md:text-lg text-center'>Available on</p>
                    <div className='w-full flex justify-between gap-8 items-center text-4xl md:text-2xl'>
                        <Link onClick={()=>window.open("https://github.com/HusainMahtab?tab=repositories","_blank",'noopener,noreferrer')}><FaSquareGithub className='cursor-pointer hover:scale-125 duration-500'/></Link>
                        <Link onClick={()=>window.open("https://www.linkedin.com/in/mahtab-husain-a4a4b1270/","_blank",'noopener,noreferrer')}><FaLinkedin className='cursor-pointer hover:scale-125 duration-500'/></Link>
                        <Link onClick={()=>window.open("https://www.instagram.com/mahtab.husain.1401/","_blank",'noopener,noreferrer')}><FaInstagramSquare className='cursor-pointer hover:scale-125 duration-500'/></Link>
                        <Link onClick={()=>window.open("https://www.facebook.com/mahtab.husain.1401/","_blank",'noopener,noreferrer')}><FaFacebookSquare className='cursor-pointer hover:scale-125 duration-500'/></Link>
                    </div>
                </div>
                <div>
                    <p className='font-semibold font-sans p-2 text-xl md:text-lg text-center'>Currently working on</p>
                    <div className='w-full flex justify-between items-center gap-8 text-5xl md:text-2xl'>
                      <SiMongodb className=''/>
                      <SiExpress className=''/>
                      <FaReact className=''/>
                      <FaNodeJs className=''/>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full hidden md:block">
             <img src={image} alt="my-image" className='rounded-full w-[350px] hover:scale-105 duration-700 transition-all'/>
        </div>
    </div>
  )
}

export default Home