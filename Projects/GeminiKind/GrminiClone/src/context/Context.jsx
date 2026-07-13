import { createContext,useEffect, useState } from "react";
import runGemini from "../config/gemini";

export const Context=createContext()

const ContextProvider =({children})=>{

    const [input,setInput]=useState("")
    const [recentPrompt,setRecentPrompt]=useState("")
    const [prevPrompts,setPrevPrompts]=useState([])
    const [showResult,setShowResult]=useState(false)
    const [loading,setLoading]=useState(false)
    const [resultData,setResultData]=useState("")
   

    const delayPara=(index,nextWord)=>{
            setTimeout(function(){
                setResultData(prev=>prev+nextWord)
            },74*index)
    }

    const newChat=()=>{
        setLoading(false)
        setShowResult(false)
    }
    const onSent = async (prompt) => {

        setResultData("")
        setLoading(true)
        setShowResult(true)
        let response;
        if(prompt !== undefined){
            // when we are selecting it from history
             response = await runGemini(prompt);
            setRecentPrompt(prompt)
        }
        else{
            // when we are inputting
            setPrevPrompts(prev=>[...prev,input])
            setRecentPrompt(input)
             response = await runGemini(input);

        }
        
        // Response ko console me print kara ke test karein
        let responseArray=response.split('**')
        let newResponse="";
        for(let i=0;i<responseArray.length;i++){
            if(i=== 0 || i%2!==1){
                newResponse+=responseArray[i];
            }
            else{
                newResponse+= "<b>"+responseArray[i]+"</b>"
            }
        }
        let newResponse2=newResponse.split("*").join("</br>")
        // setResultData(newResponse2)

        // for typing effect
        let newResponseArray=newResponse2.split(" ")
        for(let i=0;i<newResponseArray.length;i++){
            const nextWord=newResponseArray[i]
            delayPara(i,nextWord+" ")
        }
        // console.log("Gemini Response:", response); 
        // setResultData(response)
        setLoading(false)
        setInput("")

    }

    // // ✅ Sahi tareeka: Ye sirf ek baar chalega jab page pehli baar load hoga
    // useEffect(() => {
    //     onSent(input);
    // }, []); // Empty array [] ka matlab hai ki sirf 1 baar chalana hai

    const contextValue={
        prevPrompts,
        setPrevPrompts,
        onSent,
        recentPrompt,
        setRecentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        newChat
    }
    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider


// import { createContext, useState } from "react";
// import runGemini from "../config/gemini"; // Apna folder path check kar lena

// export const Context = createContext();

// const ContextProvider = ({children}) => {
//     // API se aane wale result ko store karne ke liye
//     const [resultData, setResultData] = useState("");

//     const onSent = async (prompt) => {
//         // Agar prompt khali hai toh kuch mat karo
//         if (!prompt) return; 

//         console.log("Loading response...");
        
//         // Pura response ek sath aayega (wait karega)
//         const responseText = await runGemini(prompt); 
        
//         // Response aane ke baad state update kar do
//         if (responseText) {
//             setResultData(responseText);
//         }
//     }

//     const contextValue = {
//         onSent,
//         resultData
//     }

//     return (
//         <Context.Provider value={contextValue}>
//             {children}
//         </Context.Provider>
//     )
// }

// export default ContextProvider;