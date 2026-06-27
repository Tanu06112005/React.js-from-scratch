
import React, { useState, useEffect } from 'react'
import { TodoProvider } from './Context'
import TodoForm from './components/Todoform'
import TodoItem from './components/TodoItem'

const App = () => {
const [todos,setTodos]=useState([])


// but ab kyuki i want ki sare todos jo hmne add kiye h vo sare retain rhe, re-render hone pr previous wale chale n jaye
// for that interview video wala concept will be used
const addTodo=(todo)=>{
  setTodos((prev)=>[...prev,{id:Date.now(), ...todo}])
}
// todo is mesg
// yaha pe map k use hua filter k nhi kyuki hme remove nhi krna tha bs modify krna tha
const updateTodo=(id,todo)=>{
  setTodos((prev)=>prev.map((individualTodo)=>(individualTodo.id===id?todo:individualTodo)))
}

//filterout krna h only vo hi todo jiski id do not match
const deleteTodo=(id)=>{
  setTodos((prev)=>prev.filter((individualTodo)=>(individualTodo.id!=id)))
}

const toggleCompleted=(id)=>{
  setTodos((prev)=>
    prev.map((individualTodo)=>
      (individualTodo.id===id? {...individualTodo, completed:!individualTodo.completed} : individualTodo )))
}


// if local memory me already todos exist kr rhi h to ui ke first render hone ke baad use add kr do waha se lakr
// string values fetch hoti h usko json me parse kro
useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])  // ye kisi cheez pe dependent nhi h kyuki ise independently execute hons hi pdega 
  

  // todos set hone pr values logal storage me save krwana h 
  // array ko as a string store krana hota h
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])




  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleCompleted}}>

            <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        
                        {todos.map((todo) =>(
                          <div key={todo.id}
                          className='w-full'>
                            <TodoItem todo={todo} />
                          </div>
                        ))}

                    </div>
                </div>
            </div> 

      </TodoProvider>
         )
}

export default App