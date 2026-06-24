import React from 'react'
import { useState } from 'react'

// form Hamdling:
              // refers to preventing the default behaviour of the form(form submission)
              
// two way binding :   

const App = () => {

  const [title,setTitle]=useState('');
  
  function inputName(e){
    console.log("inputting...")
    console.log(e.target.value)
    
  }
  function handleSubmit(e){
   e.preventDefault();
  //  console.log(e.target.value)
    console.log("submitted by", title)
    // setTitle('') // iski vjh se input field baar baar empty ho rha isliue ye mt smjna ki page reload ho rha h 
  }

  return (
    <>
    <form onSubmit={(e)=>{handleSubmit(e)}} >
         <input type='text' placeholder='enter you name' 
            // onChange={inputName} />
            value={title}
            onChange={(e)=>{setTitle(e.target.value)}} />
         <button>Submit</button>
    </form>
     
    </>
  )
}

export default App