import React, { useContext } from 'react'
import './ChatSection.css'
import Darkmode from '../Darkmode/Darkmode'
import { FaArrowUp } from "react-icons/fa6";
import { dataContext } from '../../context/UserContext';

const ChatSection = () => {

    let {send,input,setInput,result}=useContext(dataContext)
  return (
    <div className='chatsection'>
      <div className="topsection">
        {!result?
            <div className="heading">
                <span>Hello There!</span>
                <span>I'm Your Own Assistant</span>
                <span>How can I help You...</span>
            </div>: <p>hello</p>
        }
      </div>

      <div className="bottomsection">
        <input type="text"
        placeholder='Enter a prompt' 
        value={input}
        onChange={(e)=>setInput(e.target.value)} />
        <FaArrowUp id='sendbtn' onClick={()=>{send(input)}}/>

        <Darkmode />
      </div>
      
      
    </div>
  )
}

export default ChatSection
