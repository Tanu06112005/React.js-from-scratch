import React, { useContext, useState } from 'react'
import Nav from '../components/Nav'
import { categories } from '../Category'
import Card from '../components/Card'
import { food_items } from '../food'
import { dataContext } from '../context/UserContext'
import { RxCross2 } from "react-icons/rx";
import CardContent from '../components/CardContent'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
const Home = () => {
  let {arr,setArr,input,setInput,showCart,setShowCart}=useContext(dataContext)
  function filter(category){
    if(category==="All"){
      setArr(food_items)
    }else{
      const newArr= food_items.filter((item)=>(item.food_category===category))
      // console.log(newArr)
      setArr(newArr)
    }
  }


  const itemforCart=useSelector(state=>state.cart)
  let subtotal=itemforCart.reduce((totalprice,item)=>totalprice + item.qty*item.price ,0)
  let deliveryFee=20
  let taxes=subtotal*(0.5/100) 
  let total=Math.floor(subtotal+deliveryFee+taxes) 

  return (
    <div className='bg-slate-200 w-full min-h-[100vh]'>
      <Nav />
      {input===""?<div className='flex flex-wrap justify-center items-center gap-4 w-[100%]'>
        {categories.map((item,indx)=>{
          return(
            <div key={indx} className='w-[120px] h-[120px] bg-white flex  flex-col items-center gap-2 p-2 font-semibold text-[18px] text-gray-500 rounded-lg shadow-xl hover:bg-green-200 cursor-pointer transition-all duration-200'
                onClick={()=>filter(item.name)}>
              {item.icon}
              {item.name}
            </div>
          )
          
        })}
      </div>:null}

      <div className='w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8'>
        {arr.length>0?
          arr.map((item,indx)=>(
            <Card key={indx} name={item.food_name} image={item.food_image} price={item.price} id={item.id} type={item.food_type} />
          )) :
              <div className='text-2xl'>no dish found</div>}
      </div>

      <div className={` w-full md:w-[70vh] h-[100%] fixed top-0 right-0 bg-white shadow-[-8px_0_10px_-3px_rgba(0,0,0,0.2)] p-6 transition-all duration-500 overflow-auto  ${showCart?"translate-x-0":"translate-x-full"} flex flex-col  items-center `}>
          <header className='w-full flex justify-between items-center '>
          <span className='text-green-400 font-semibold text-xl'>Ordered Items</span>
          <span onClick={()=>setShowCart(false)} 
              className='w-[30px] h-[30px] cursor-pointer hover:text-green-700 text-green-400 font-semibold text-xl'>
                <RxCross2 />
          </span>
        </header>
        
    {itemforCart.length>0?
    <>
        <div className='w-full mt-8 flex flex-col gap-5'>
          {itemforCart.map((item,indx)=>(
            <CardContent name={item.name} price={item.price} id={item.id} image={item.image} qty={item.qty} />
          ))}
        </div>
        {/* <CardContent /> */}

        <div className='w-full border-b-2 border-t-2 border-gray-400 mt-7 flex flex-col gap-3 p-7'>
          <div className='flex justify-between items-center text-green-400'><span className='text-gray-600 font-semibold'>Subtotal</span><span>Rs {subtotal}/-</span></div>
          <div  className='flex justify-between items-center text-green-400'><span className='text-gray-600 font-semibold'>Delivery Fee</span><span>Rs {deliveryFee}/-</span></div>
          <div  className='flex justify-between items-center text-green-400'><span className='text-gray-600 font-semibold'>Taxes</span><span>Rs {taxes}/-</span></div>
        </div>

          <div className='w-full flex justify-between items-center text-green-400 text-xl p-9' >
            <span className='text-gray-600 font-semibold'>Total</span>
            <span>Rs {total}/-</span>
            </div>

        <button className='w-[80%] px-4 py-2 bg-green-400 rounded-lg text-white hover:bg-green-300 transition-all cursor-pointer'
          onClick={()=>toast.success("Order Placed")}
        >Place Order</button>
      </>:
          <div className='text-center text-green-400 text-2xl font-semibold mt-7 '>Empty Card</div>
    }

      </div>
    </div>

    
  )
}

export default Home
