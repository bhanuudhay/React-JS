import React, { useEffect , useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData() 
    // const [data,setData] = useState([])
    // useEffect(()=>
    // {
    //     fetch("https://api.github.com/users/bhanuudhay")
    //     .then(res=>res.json())
    //     .then(data =>{
    //         console.log(data)
    //         setData(data)
    //     })

    // },[])
  return (
    <div className='text-center m-4 bg-gray-400 text-white p-4 '> Github follower : {data.followers} <br/>
    Github Repo : {data.public_repos}
    <img  src = {data.avatar_url} width={300}/>
    </div>

  )
}

export default Github

export const getGithubInfo =  async ()=>
{
   const res =  await fetch("https://api.github.com/users/bhanuudhay")
   return res.json();
}