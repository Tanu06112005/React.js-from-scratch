import React from 'react'

const Cards = (props) => {
  return (
    <div>
          <a href={props.elem.url}>
            <div className= 'h-40 w-44 bg-white overflow-hidden rounded-xl'>
                <img  className='h-full w-full object-cover ' src={props.elem.download_url} alt="" />
            </div>
            <h2 className='font-bold text-xl pd-20 md-20'>{props.elem.author}</h2>
          </a>
    </div>
  )
}

export default Cards