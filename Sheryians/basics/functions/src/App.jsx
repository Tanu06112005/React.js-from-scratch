import React from 'react'



// methods to call a function when working with the EVENTS
// 1.) defing a function inself inside the {}  after calling the event type
// 2.) only passing function reference inside {}   like {inputChanging}
          // dont do this {inputChanging()}  kyuki ye immediately execute kr dega function ko bu twe want ki evevnt ke occur hone ke baad execute ho function 
// 3.) using a function (arrow/ normal function)  to call the main function we want to execute 


const App = () => {

  function inputChanging(){
    console.log("user is typing in the input field")
  }
  // return (
  //   <input type='text' placeholder='enter you name'
  //       onChange={function(elem){
  //         console.log(elem.target.value)
  //       }}
  //   />
  // )


  // return (
  //   <input type='text' placeholder='enter you name'
  //       onChange={function(elem){
  //         inputChanging()
  //       }}
  //   />
  // )


  //   return (
  //   <input type='text' placeholder='enter you name'
  //       onChange={inputChanging}
  //   />
  // )


  return  (
    <div>
      <div className='box'
       onMouseMove={()=>{
        console.log("user moving cursor on the box")
       }}>move cursor on me and check the console</div>
    </div>
  )

}

export default App