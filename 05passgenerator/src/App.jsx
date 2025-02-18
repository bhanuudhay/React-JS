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
        <h1 className='text-black text-center text-3xl font-semibold mb-6'>Password Generator</h1>
    <div className='w-full max-w-md mx-auto rounded-lg p-6 my-8 text-orange-500 bg-gray-800 shadow-lg'>
      <div className='flex items-center shadow-md rounded-lg overflow-hidden'>
        <input
          type="text"
          value={pass}
          className='outline-none w-full py-3 px-4 text-white bg-gray-700 placeholder-gray-400 rounded-l-lg'
          placeholder='Password'
          readOnly
        />
        <button className='outline-none bg-blue-700 text-white px-5 py-2 rounded-r-lg hover:bg-blue-600 transition-colors'>
          Copy
        </button>
      </div>
    </div>
    <div className='flex  text-sm  gap-x-2'></div>

    </>
  )
}

export default App
