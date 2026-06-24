import React from 'react'
import { useState } from 'react'
const App = () => {

  const [title1,setTitle1]=useState('');// for input1
  const [title2,setTitle2]=useState('');// for input 2

  const [task,setTask]=useState([]);  // hme isli need isliye pdi kyuki hme previous wale values ko bhi store krke rkhna tha 
  // i case ypu want to delete the record tb need pdegi previous wale notes ki


const submitHandler=(e)=>{
  e.preventDefault();

  const copyTask=[...task]   // cpoy krenge taki phle wale values bhi rhe 
  copyTask.push({title1,title2})
// console.log(copyTask)
  setTask(copyTask)
  setTitle1('')
  setTitle2('')
  // console.log('form submitted')
  // console.log(title1,"\n",title2)
}
const deleteNote=(indx)=>{
  const copyTask=[...task]
  // kitne delete krne h iske index ke according splice kr do : splice original array ko modify krta h
  copyTask.splice(indx,1)
  // console.log(copyTask)
  setTask(copyTask)

}

  return (
    <div className='h-screen lg:flex bg-black text-white p-10'>
        <form onSubmit={(e)=>{
          submitHandler(e)
          }} className='flex gap-2 p-10 w-1/2' >

          <div className='flex flex-col gap-4 w-full p-10 ml-14'>
            <h1 className='text-3xl font-bold'>Add Notes</h1><br />
// input 1
             <input 
             type="text"
             placeholder='Enter Notes Heading'
             className='px-15 w-[90%] h-20 font-medium py-2 border-2 rounded ml-14 '
             value={title1}
             onChange={(e)=>{
                setTitle1(e.target.value)
             }}
            />
// input 2            
             <textarea
             type="text"
            placeholder='Enter Details'
            className='px-5 w-[90%] h-40 font-medium py-2 border-2 rounded ml-14'
            value={title2}
            onChange={(e)=>{
              setTitle2(e.target.value)
            }}
              />
             <button className='bg-white w-[90%] h-12 text-black px-5 py-2 rounded ml-14' >Add Notes</button>
          </div>
        </form>

        <div className='p-10 lg:w-1/2'>
          <h1 className='text-3xl font-bold'>Your Notes</h1><br />
          <div className='flex flex-wrap gap-2 '>
            {task.map(function(elem,indx){
              return ( <div key={indx} className=' flex flex-col justify-center relative items-center h-50 w-60 pt-10 text-2xl text-black bg-cover font-bold bg-[url("https://cdn.pixabay.com/photo/2013/07/13/11/55/notes-158958_1280.png")] '>
                    <h2>{elem.title1}</h2>
                    <p className='text-gray-600'>{elem.title2}</p>
                    <button onClick={()=>{deleteNote(indx)}}className='absolute py-1 ml-2 bottom-0 left-2 h-10 w-[90%] bg-red-500 text-xl text-white font-bold rounded'> Delete</button>

                    
              </div>)
              // my biggest mistake 
                    // i was doing  onClick={(indx)=>{deleteNote(indx)}}
                    // his is wrong 1st wale me hmesha event pass hota h n ki koi aur parameter  onClick={(e)=>{deleteNote(indx)}}
                    // correct one is onClick={()=>{deleteNote(indx)}}

            })}
            {/* <div className='h-50 w-50 bg-white rounded-2xl '></div>
            <div className='h-50 w-50 bg-white rounded-2xl '></div>
            <div className='h-50 w-00 bg-white rounded-2xl '></div> */}
          </div>
          
        </div>

    </div>
  )
}

export default App