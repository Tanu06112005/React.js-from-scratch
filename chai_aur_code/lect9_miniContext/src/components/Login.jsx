import React, { useContext,useState} from 'react'
import UserContext from '../Context/UserContext'


// our goal is to login component ke through jo iput krwat rhe h user se usko lake container me add krna (data load/ provide krana)
const Login = () => {

    const [userName,setUserName]=useState('')
    const [password,setPassword]=useState('')

    //now nontainer se user name leke aao taki usko aage send kiya ja ske set kene ke liye
    // so we have extracted setUser from the container and uski value fun ke through set kr di
    const {setUser}=useContext(UserContext)

    const handleSubmit=(e)=>{
        e.preventDefault();
        setUser({userName,password})
    }

  return (
    <div>
        <h2 className='text-white'>Login</h2>

        <input type="text"
        className='bg-white rounded'
            value={userName}
            placeholder='username'
            onChange={(e)=>setUserName(e.target.value)}
        />
        {"     "}
        <input type="password"
        className='bg-white rounded'
            value={password}
            placeholder='password'
            onChange={(e)=>setPassword(e.target.value)}
        />

        <button onClick={handleSubmit} className='text-white'>Submit</button>
    </div>
  )
}

export default Login