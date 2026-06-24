import React from 'react'
import Card from './components/card.jsx'
const App = () => {
  return (
    <>
      <h1><center>Learning props Basics</center></h1>

   <div className='parent'>
    <Card  img='https://plus.unsplash.com/premium_photo-1668896122554-2a4456667f65?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmVtYWxlfGVufDB8fDB8fHww' user='Ms. Emmeli' age={20} proff='Software Engineer'/>
    <Card   img='https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9jdG9yfGVufDB8fDB8fHww' user=' Dr.John' age={39} proff='Doctor'/>
    <Card   img='https://images.unsplash.com/photo-1581093804475-577d72e38aa0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c29mdHdhcmUlMjBlbmdpbmVlciUyMG1hbGUlMjBwZXJzb258ZW58MHx8MHx8fDA%3D' user='Eg. Mahesh Tiwari' age={42} proff='Engineer'/>
    <Card   img='https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmVtYWxlfGVufDB8fDB8fHww' user='Rupali Bisht' age={22} proff='Designer'/>
    <Card   img='https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bXVzaWNpYW58ZW58MHx8MHx8fDA%3D' user='Shankar Mahadevan' age={56} proff='Music Composer'/>
      <Card   img='https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bXVzaWNpYW58ZW58MHx8MHx8fDA%3D' user='Shankar Mahadevan' age={56} proff='Music Composer'/>

  </div> 
</> )
}

export default App