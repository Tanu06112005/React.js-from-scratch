import React from 'react'
import image1 from '../assets/image1.avif'
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { AddItem } from '../redux/CartSlice';
import { toast } from 'react-toastify';


const Card = ({id, name,price,image, type}) => {
  const dispatch=useDispatch()
  
    return (
    <div className='w-[250px] h-[350px] bg-white p-3 rounded-lg flex flex-col gap-[8px] shadow-lg hover:border-2 border-green-300'>
      <div className='w-[100%] h-[60%] overflow-hidden rounded-lg'>
        <img src={image} alt="" className='object-cover' />
      </div>
      <div className='text-xl font-semibold'>{name}</div>
      <div className='w-full flex justify-between items-center'>
        <div className='text-green-500 text-[15px] font-bold '>Rs {price} /-</div>
        <div className='flex justify-center items-center gap-2 text-green-500 text-[15px] font-semibold'>{type==="Veg"?<LuLeafyGreen />:<GiChickenOven />}<span>{type}</span></div>
      </div>
      <div>
        <button className='w-full px-4 py-2 bg-green-400 rounded-lg text-white hover:bg-green-300 transition-all cursor-pointer'
                onClick={()=>{
                    dispatch(AddItem({id:id,name:name,price:price,image:image,qty:1}))
                    toast.success("Item Added")
                }}
        >
            Add to Dish</button>
      </div>
    </div>
  )
}

export default Card
