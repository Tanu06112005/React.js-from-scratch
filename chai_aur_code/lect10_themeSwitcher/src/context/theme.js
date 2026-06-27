import { useState, createContext, useContext } from "react";


// initially values set kr rhe h apne empty container me so that the site do not crash
export const ThemeContext=createContext({
    themeMode: "light",
    darkTheme: ()=>{},
    lightTheme: ()=>{}
})

// yaha pr bs variables declace kiye ja rhe h 
// and methods ke liye bs btaya ja rha h ki aap function ho 
// ffun definition define honge App.jsx me

// provider
export const ThemeProvider=ThemeContext.Provider 


// custom hook ke throught returning the useContext

export default function useTheme(){
    return useContext(ThemeContext)
} 




/*
    step 1: create context
            export provide 
            export useContext using a custom hook 

    step 2: wrap App around exported provide
            variables and methods create kro
            ye btao ki methods actually kr kya rhe h 
            pass the values

    step 3: components ctrate kro 
            card
            button
    
    step 4: ThemeButtons me value ko extract krke use kro


*/