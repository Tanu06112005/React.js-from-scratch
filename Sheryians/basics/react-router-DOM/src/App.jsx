import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from './components/Contact.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Nav from './components/nav.jsx'

// helps in creating SPA(single page application)
// <a> tag se loading hoti h 
// isliye Routes provide krte h <Link  to=''>  jiske help se loading nhi hoti h fir 
      // url and content to change hota h but it builds a single page application 

//<Routes>   : is a Container   that contains all the routes 
// <Route /> : handles a single route 
const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route   path='/' element={<Home />}/>
        <Route   path='/about' element={<About />} />
        <Route   path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App