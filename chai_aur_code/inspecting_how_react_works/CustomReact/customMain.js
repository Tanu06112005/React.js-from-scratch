// video 4. of chai aur code is very very important 


// main.jsx me virtual DOM create hota h 
// rendering means adding HTML element to the virtual DOM of the document (pura procedure apply hota is process me  creating element se leke properties define krna and appendChild tk)

const ReactElement={
    type:'a',
    props: {
        href:'https://google.com',
        target: '_blank'
    },
    children:'click me to visit google'
}

function customRender(ReactElement,container){
    // ab muje ek htmls element bnana pdega 
    /*
    const domElement=document.createElement(ReactElement.type)
    domElement.innerHTML=ReactElement.children
    domElement.setAttribute('href',ReactElement.props.href)
    domElement.setAttribute('target',ReactElement.props.target)

    container.appendChild(domElement)
    */
   const domElement=document.createElement(ReactElement.type)
   domElement.innerHTML=ReactElement.children
   const props=ReactElement.props
   for(const prop in props){
    domElement.setAttribute(prop,props[prop])// key pass kr diya taki uski value as attribute set ho jaye
   }
container.appendChild(domElement)

}




const root_mainContainer=(document.getElementById('root'))
customRender(ReactElement,root_mainContainer)




// kuch isi trh hi react apps me inject hote h components and elements  inside the browser or the DOM

 
/*
     custom react me hmne dekha ki
        1.) kaise hmne root ko select kiya ( jo ki container ki trh act kr rha h jisme hm apne sare element ko render( add ) krenge)
        2.) kaise hmne render function create kiya h 
        3.) ab render fun do parameters le rha tha
            i.) ReactElement
            ii.) container(root)
        4.) ReactElement ko use krne ke liye hme use create krna pdega(as an object)
*/
