import React from 'react'
import NavBar from './navBar.jsx'
import Page1content from './page1content.jsx'

const Section1 = (props) => {
// console.log(props)
// jo bhi user send hua h react use unternally esa bna deta h props={users=[{},{}....]}
// hence we need to pass this
// console.log(props.user)
  return (
    <div className="w-full h-screen ">
      <NavBar />
      <Page1content  user={props.user}/>
    </div>
  )
}

export default Section1