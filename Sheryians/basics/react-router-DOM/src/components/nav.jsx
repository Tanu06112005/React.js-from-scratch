import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <div  className='nav'> 
          <div>Website</div>
          {/*   <a> tag se loading ho jati h but single page application me loading nhi honi chahiye */}
          {/* <div className='list'>
            <a href="/">Home</a>
            <a href="/About">About</a>
            <a href="Contact">Contact</a>
          </div> */}

          {/* isliye Routes <Link></Link> provide krta h jo loading ko remove kr deta h*/}
          <div className='list'>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Contact">Contact</Link>
          </div>

      </div>
    </div>
  )
}

export default Nav