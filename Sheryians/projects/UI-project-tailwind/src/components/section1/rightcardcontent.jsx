import React from 'react'

const Rightcardcontent = (props) => {
  return (
    <>

    <div className='absolute top-0 left-0 h-full w-full  p-5 flex flex-col justify-between '>
            <h1 className='bg-white text-2xl font-semibold rounded-full h-12 w-12 flex justify-center items-center'>{props.id+1}</h1>
            <div>
                <p className='text-sm leading-relaxed mb-14 text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis pariatur repudiandae, suscipit adipisci dolore ab magni quisquam nisi rem nobis?</p>
                <div className='flex justify-between'>
                <button className='bg-blue-600 text-white fornt-medium px-7 py-2 rounded-full '>{props.tag}</button>
                <button className='bg-blue-600 text-white fornt-medium px-4 py-2 rounded-full '><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>   
                
    </div>
           
    </>
  )
}

export default Rightcardcontent