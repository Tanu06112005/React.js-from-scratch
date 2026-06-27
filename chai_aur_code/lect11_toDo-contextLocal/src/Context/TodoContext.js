import { createContext, useContext} from 'react'
// create kiya container
export const TodoContext=createContext({})

// jo bhi data add kiya hoga hmne vo return kr rhe h
export const UseTodo=()=>{
    return useContext(TodoContext)
}

export const TodoProvider=TodoContext.Provider