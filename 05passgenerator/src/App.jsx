import { useState , useCallback } from 'react'
import './App.css'


function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [pass , setPass] = useState("")

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefgnhijklmnopqrstuvwxyz"
    if(numAllowed) str+= "0123456789"
    if(charAllowed) str+= "!@#$%^&*()_+"
    for (let i = 1; i < array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass = str.charAt(char)
    }
      setPass(pass);
  }, [numAllowed,charAllowed,length,setPass])

  return (
    <>
      <div className= 'w-full  max-w-md  mx-auto  rounded-lg px-4  my-8 text-orange-500 bg-gray-800' >
        <div className='flex shadow rounded-lg mnnnnb-4 overflow-hidden'>
          <input type="text"  value={pass} className = 'outline-none w-full py-1 px-3' placeholder='password' />
        </div>
      </div>
    </>
  )
}

export default App
