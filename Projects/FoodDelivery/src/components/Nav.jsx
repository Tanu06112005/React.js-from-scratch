import React, { useContext, useEffect } from 'react'
import { MdFastfood } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { dataContext } from '../context/UserContext';
import { food_items } from '../food';
import { useSelector } from 'react-redux';

const Nav = () => {
let {input,setInput,arr,setArr,showCart,setShowCart}=useContext(dataContext)

  useEffect(()=>{
    const newList=food_items.filter((item)=>(item.food_name.includes(input) || item.food_name.toLowerCase().includes(input)))
    setArr(newList)
  },[input])

  let itemCount=useSelector(state=>state.cart)
  console.log(itemCount)
  return (
    <div className='w-full h-[100px]  flex justify-between items-center px-8' >
      
      <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl'>
        <MdFastfood  className='w-[30px] h-[30px] text-green-500'/>
      </div>

      <form  onSubmit={(e)=>e.preventDefautlt()} 
          className='flex  items-center gap-5 bg-white w-[50%] md:w-[70%] h-[60px] px-5 rounded-md shadow-md'>
         <IoMdSearch className='text-green-500 w-[25px] h-[25px]' />
          <input type="text" placeholder='Search items...' 
                  className='w-[100%] outline-0 text-[16px] md:text-[20px]' 
                  onChange={(e)=>setInput(e.target.value)}
                  />
      </form>

      <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative'>
        <FaShoppingCart onClick={()=>setShowCart(true)} className='w-[30px] h-[30px] text-green-500 cursor-pointer'/>
        <span className='text-green-500 absolute top-0 right-2 font-semibold cursor-pointer'>{itemCount.length}</span>
      </div>
    </div>
  )
}

export default Nav
