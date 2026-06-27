import React, { useState } from 'react'
import { useTodo } from '../Context'

const Todoform = () => {
// for the todo msg entered in the input
    const [todo,setTodo] =useState("")
    
    //calling addTodo function
    const {addTodo}=useTodo();

    const add=(e)=>{
        e.preventDefault()

        if(!todo) return

        addTodo({todo,completed:false})

        setTodo("")
    }



    return (

  <form onSubmit={add}  className="flex">
          <input
              type="text"
              placeholder="Write Todo..."
              className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
              Add
          </button>
      </form>
    );
}

export default Todoform




// purpose:
// what all information was necessary this section extracted it fron the container and used it 


// we noticed that ham todo task ko ek todo msg enter krake add kr rhe h