import {createSlice,nanoid} from '@reduxjs/toolkit'



//Slices are the small partsvof the stores  jo different features ke liye separatly bnaye jate h and umke andr ke reducers ko add kraya jata h stores me


const initialState={
    todos: [{id:1 ,text:"hello world"}]
}


// Slice ka structure 
/*      name,
        initialstate
        reducers
*/

//  yehi difference h context Api aur redux me
        // context api  me only container me function declartaion mention krte the 
        // here in redux  pura function definition provide krte h

//  state and action as argument 
//      state-> current state passs hoti h 
//      action-> jo dispatch hota at event handeling  jisme data pass hota h



export const todoSlice=createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, actions)=>{
            const todo={
                id: nanoid(),
                text: actions.payload
            }
            state.todos.push[todo]
        },
        removeTodo: (state,action)=>{
                // kisko remove krna h jiski id provide ki gyi hogi

                state.todos=state.todos.filter((todo)=>(todo.id != actions.payload))
        }

    }
})

export const {removeTodo,addTodo}=todoSlice.actions  // aur ye isliye taki hm directly use kr paye 
export default todoSlice.reducer  // kyuki hm sare reducers apne store me dalne h
