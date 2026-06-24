import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


function MyApp(){
  return (
    <div>
      <h1>Custom App</h1>
    </div>
  )
}
// this function internally by the react gets converted into the object form like
const ReactElement={
    type:'a',
    props: {
        href:'https://google.com',
        target: '_blank'
    },
    children:'click me to visit google'
}
// iska ye mtlb hua ki agr hm directly ise render kre to to execute ho jana chahiye 
// but esa nhi hota h iska reason hki :
//ki react is a library it have pre defined function and objects etc 
// jiski vjh se 
  // render function bhi pre written h and hence ye ek pre defined format of argument hi lega custom argument of the type given above will not be accepted 
// (syntax shi nhi h)




  // accepted wala format for accepting an object into the rendering part is 
  const anotherElement=(
    <a href="https:google.com" target='_blank'>visit google</a>
  )

// react ke hisab se correct syntax is:
  const reactElement= React.createElement(
    'a',// parameter 1: tag
    {href:'https://google.com',target:'_blank'}, // objet of properties 
    'click me to visit google'
  )
  // isse ye pta chala ki react hme khud ke mn se kuch bhi krne nhi de erha h 


  createRoot(document.getElementById('root')).render(
    <MyApp />, // it will work
    
    // <ReactElement /> , // ye wrong h logically it is not a function instead it is an object 
    // ReactElement() , // function nhi h
    
    anotherElement,   // ye chal jayega 
    // note ki ye another element ek object me conver ho jayega islie ise <anotherElement /> ye fir anotherElement()  ki trh nhi likha h 

    
    reactElement,
    <App />   
  
)


// render me jo bhi h vo function h , iska mtlb hm yaha pe custom function bhi add kr skte h
