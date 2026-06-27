import { useContext,createContext } from "react";


// creating a container with initial values
export const TodoContext=createContext({
    todos:[
        {
            id:1,
            todo:"Todo msg",
            completed: false
        }
    ],
    addTodo: (todo)=>{},
    updateTodo: (id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleCompleted: (id)=>{}
})


// provider
export const TodoProvider=TodoContext.Provider


// consuming through custom hook
export const useTodo=()=>{
    return useContext(TodoContext)
}


// iske baad componets bnao and App.jsx ko wrap kr do provider se
