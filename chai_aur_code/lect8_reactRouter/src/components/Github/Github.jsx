import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

// useLoaderData() React Router ka hook hai jo loader function se aaya hua data directly component me use karne deta hai.
// Simple Language
// Socho:
// Page khulne se pehle data fetch karo.
// Data ready ho jaye tab page render ho.
// Ye kaam loader karta hai.
// Aur component ke andar us data ko lene ke liye:


function Github() {
    
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/hiteshchoudhary')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])


    const data = useLoaderData()
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}