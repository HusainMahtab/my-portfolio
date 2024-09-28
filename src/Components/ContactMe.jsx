import React from 'react'
import { Element } from 'react-scroll'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function ContactMe() {
    const message=()=>toast("message send to mahtab successfully")
  return (
    <Element name="Contact" className='p-4'>
        <h1 className="text-lg font-bold">Contact Me</h1>
        <div className="w-full flex justify-center items-center p-2">
            <form className="w-[500px] shadow shadow-green-600 p-4">
                <div className='grid gap-2 p-2'>
                    <label htmlFor="name" className='p-2'>Name:</label>
                    <input type="text" id='name' placeholder='Enter Name' required className='p-2 bg-slate-200'/>
                </div>
                <div className='grid gap-2 p-2'>
                    <label htmlFor="email" className='p-2'>Email:</label>
                    <input type="email" id='email' placeholder='Enter Email' required className='p-2 bg-slate-200'/>   
                </div>
                <div className='grid gap-2 p-2'>
                    <label htmlFor="message" className='p-2'>Message:</label>
                    <input type="text" id='message' placeholder='Enter Your Message' required className='p-2 bg-slate-200'/>
                </div>
                <div className='p-2'>
                  <button className='w-full p-2 bg-green-600 text-white hover:bg-green-700 font-bold rounded-lg mt-2'>Send</button>
                  <ToastContainer/>
                </div>
            </form>
        </div>
    </Element>
  )
}

export default ContactMe