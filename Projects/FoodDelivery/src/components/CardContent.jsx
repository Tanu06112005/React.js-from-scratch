import React from 'react'
import image1 from '../assets/image1.avif'
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { IncrementQty, RemoveItem, DecrementQty } from '../redux/CartSlice';

const CardContent = ({name,price,id,image,qty}) => {

    const dispatch =useDispatch()
  return (
    <div className='w-full h-[100px]  p-2 shadow-lg rounded-sm flex justify-between '>
     <div className='w-[60%] h-full  flex gap-5'>
        <div className='w-[60%] h-full overflow-hidden rounded-lg'><img src={image} alt="" className='object-cover ' /></div>
        <div className='w-[40%] h-full flex flex-col  gap-2'>
            <div className='text-[15px] font-semibold text-gray-600 '>{name}</div>
            <div className='w-[80px] h-[35px] bg-slate-400 flex rounded-lg overflow-hidden shadow-lg text-green-400 font-semibold border-2 border-green-400 text-xl'>
                <button onClick={()=>{
                    qty>1?dispatch(DecrementQty(id)):qty}} 
                    className='w-[30%] h-full bg-white flex justify-center items-center text-green-400 hover:bg-gray-200'>-</button>
                <span  className='w-[40%] h-full bg-slate-200 flex justify-center items-center '>{qty}</span>
                <button onClick={()=>dispatch(IncrementQty(id))} className='w-[30%] h-full bg-white flex justify-center items-center text-green-400 hover:bg-gray-200'>+</button>
            </div>
        </div>
     </div>

     <div className='flex flex-col justify-start items-end gap-6'>
        <span className='text-green-400 text-xl font-semibold'>Rs {price}/-</span>
        <RiDeleteBin6Line className='text-red-400 w-[50px] h-[20px] cursor-pointer' 
            onClick={()=>dispatch(RemoveItem(id))}
        />

     </div>

    </div>
  )
}

export default CardContent
