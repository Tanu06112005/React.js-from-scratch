import React from 'react'
import {Bookmark} from 'lucide-react'

const card = (props) => {
  return (
    <div className='card'>
        <div className='div1'>
            <div id='ci'><img className='companyicon' src={props.img}  /></div>
            
            <button id='save'>Save  <Bookmark size={13} strokeWidth={1.25} /></button>
        </div>

        <div className='div2'>
            <h4>{props.company}</h4>
            <h2>{props.jobRole}</h2>
            <div className='t'>
                <div className='time'>{props.t1}</div>
                <div className='time'>{props.t2}</div>         
            </div>
        </div>
        {/* <div id='line'></div> */}

        <div className='div3'>
            <div className='div3a'>
                <h3>{props.sal}</h3>
                <p>{props.desig}</p>
            </div>
            
                <buttton className='Apply'>Apply now</buttton>
            
        </div>
    </div>
    
  )
}

export default card