import React from 'react';
import { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';
import {login,logout} from './store/authSlice.js'
import authService from './appwrite/auth';
import { Header } from './components/index.js';
import {Footer} from './components/index.js'
import { Outlet } from 'react-router-dom';

function App() {

  // we want ki jb tk user k account show na ho ya data n aaya ho, tb tk loading show ho
  const [loading,setLoading]=useState(true);
  const dispatch=useDispatch();

  // we want ki jaise hi ui render ho vaise hi ye function chale vo user ko dekhe ki login hua h ki nhi , if yes to uska data fetch kre 
  // for that we know useEffect is used

  // if user login h to user ka data sent krdo store me 
  useEffect(()=>{
    authService.getCurrentUser()
    .then(userData=>{
      if(userData){
        // user data store me send krdo
        dispatch(login(userData))
      } else {
        dispatch(logout())
      }
    })
    .finally(()=>setLoading(false))
  
  },[])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
        TODO: 
         <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App;


/*
User clicks Login

↓

auth.js

↓

Appwrite

↓

Login Success

↓

Current User

↓

dispatch(login(userData))

↓

authSlice.js

↓

Redux Store Updated

↓

Navbar changes

↓

Profile page updates

↓

Whole app knows user is logged in

*/