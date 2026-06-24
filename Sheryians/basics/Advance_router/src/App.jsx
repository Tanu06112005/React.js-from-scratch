import React from 'react'
import { Route,Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Mens from './pages/Mens'
import Womens from './pages/Womens'
import Courses from './pages/Courses'
import CourseDetails from './pages/CourseDetails'
import Navigation from './components/Navigation'
const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <NavBar />
      <Navigation />
      <Routes>
        {/* Actual tareeka for nested routing  */}
        <Route path='/' element={<Home />}>
            <Route path='/home/mens' element={<Mens />} />
            <Route path='/home/womens' element={<Womens />} />

        </Route>
        
        
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>

        {/* dynamic routing  */}
          <Route path='/courses' element={<Courses />}/>
          <Route path='/courses/:id' element={<CourseDetails />}/>


        <Route path='/login' element={<Login />}/>

        {/*   simple treeka for nested routes:-

         <Route path='/home/mens' element={<Mens/>} />
        <Route path='/home/womens' element={<Womens/>} /> */}



        {/*when the user write an route that does not exists we use path as '*' that lands on the page not found page*/ }
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App