import React from 'react'
import { Link } from 'react-router-dom'
import { Element } from 'react-scroll'
import ecommerce from "../assets/ecommerce.png"
import crypto from "../assets/crypto.png"
import school from "../assets/school.png"
import todo from "../assets/todo.png"
function Portfolio() {
    const projectArray=[
        {
            id:1,
            imageUrl:ecommerce,
            name:"EcommerceApp",
            projectLink:"https://fullstackecommercewebapp-1-front-end.onrender.com/",
            githubLink:"https://github.com/HusainMahtab/fullStackEcommerceWebApp"
        },
        {
            id:2,
            imageUrl:school,
            name:"SchoolApp",
            projectLink:"https://school-website-theta-three.vercel.app/",
             githubLink:"https://github.com/HusainMahtab/school-website"
        },
        {
            id:3,
            imageUrl:todo,
            name:"ToDo",
            projectLink:"https://todowithmahtab.netlify.app/",
             githubLink:"https://github.com/HusainMahtab/to-do-LoacalStorage"
        },
        {
            id:4,
            imageUrl:crypto,
            name:"CryptoApp",
            projectLink:"https://crypto-currency-app-bay-nine.vercel.app/coins",
             githubLink:"https://github.com/HusainMahtab/CryptoCurrencyApp"
        },
    ]
  return (
    <Element name="Portfolio" className='w-full border border-b-green-600 p-4'>
    <h1 className='p-2 text-xl font-bold'>Projects</h1>
        <div className='grid justify-evenly items-center md:flex md:flex-wrap space-x-1 gap-4 p-4'>
            {
                projectArray.map((project,index)=>(
                    <div className='w-full grid md:w-1/5 justify-center items-center gap-2 p-4 rounded-lg shadow-green-600 shadow hover:scale-105 duration-700' key={project.id}>
                       <img src={project.imageUrl} alt={project.name} className='w-[400px] h-[200px] rounded'/>
                       <h1 className='text-slate-500 font-bold'>{project.name}</h1>
                       <div className='w-full flex gap-2 items-center justify-between'>
                         <Link className='w-full bg-blue-600 hover:bg-blue-700 text-white font-bold p-2 text-center rounded-md' onClick={()=>window.open(project.projectLink,"_blank",'noopener,noreferrer')}>Live</Link>
                         <Link className='w-full bg-green-600 hover:bg-green-700 text-white font-bold p-2 text-center rounded-md' onClick={()=>window.open(project.githubLink,"_blank",'noopener,noreferrer')}>source code</Link>
                       </div>
                    </div>
                ))
            }
        </div> 
    </Element>
  )
}

export default Portfolio