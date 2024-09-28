import React from 'react'

function Experiance() {
  const experianceArray=[
    {
      id:1,
      imageUrl:"https://banner2.cleanpng.com/20180425/jrw/ave9tlfdy.webp",
      name:"NodeJs"
    },
    {
      id:2,
      imageUrl:"https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png",
      name:"MongoDb"
    },
    {
      id:3,
      imageUrl:"https://cdn.worldvectorlogo.com/logos/css-3.svg",
      name:"CSS-3"
    },
    {
      id:4,
      imageUrl:"https://thumbs.dreamstime.com/b/javascript-icon-logo-javascript-often-abbreviated-as-js-programming-language-conforms-to-ecmascript-specification-204759326.jpg",
      name:"JavaScript"
    },
    {
      id:5,
      imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s",
      name:"Tailwind CSS"
    },
    {
      id:6,
      imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnDneBGnQL7E9hZDwztRO1GfQcCj1FqRrhBw&s",
      name:"ExpressJs"
    },
    {
      id:7,
      imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSTVjZgtLF2vqZV3Nh6VdLV5HEZ3xOyVCRuw&s",
      name:"HTML-5"
    },
    {
      id:8,
      imageUrl:"https://cdn.worldvectorlogo.com/logos/react-1.svg",
      name:"ReactJs"
    }
  ]
  return (
    <div name="Experience" className='p-4 border border-b-green-600 mb-4'>
       <h1 className="text-xl font-bold my-2">Experiance</h1>
       <div>
         <p className="text-xl md:text-lg font-semibold">I've more then 1 years of experiance in bleow technologies.</p>
         <div className="w-full flex justify-evenly items-center flex-wrap gap-4 p-4">
            {
              experianceArray.map((item,index)=>( 
                <div key={item.id} className=''>
                  <div className='md:max-w-[250px] grid justify-center shadow shadow-green-600 p-4 md:rounded-md rounded-t-3xl rounded-b-3xl'>
                    <img src={item.imageUrl} alt={item.name} className='md:w-[300px] md:h-[200px] w-64 h-52 mix-blend-multiply' /> 
                    <p className='text-lg font-bold text-center text-slate-400 p-2'>{item.name}</p>   
                  </div>
                </div>
              ))
            }
         </div>
       </div>
    </div>
  )
}

export default Experiance