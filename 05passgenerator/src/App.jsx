import { useState , useCallback, useEffect, useRef } from 'react'
import './App.css'


function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [pass , setPass] = useState("")

  //ref hook

  const passref  = useRef()

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefgnhijklmnopqrstuvwxyz"
    if(numAllowed) str+= "0123456789"
    if(charAllowed) str+= "!@#$%^&*()_+"
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
      setPass(pass);
  }, [numAllowed,charAllowed,length,setPass])

  const copyPass = useCallback(()=> {
    window.navigator.clipboard.writeText(pass);
  }, [pass])

  useEffect(()=>{
    passwordGenerator();
  } ,[length,numAllowed,charAllowed,passwordGenerator])
  
  return (
    <>
      <h1 className='text-black text-center text-3xl font-semibold mb-8'>Password Generator</h1>
<div className='w-full max-w-md mx-auto rounded-lg p-6 my-8 text-orange-500 bg-gray-800 shadow-xl'>
  <div className='flex flex-col gap-3'>
    <div className='flex items-center shadow-lg rounded-lg overflow-hidden'>
      <input
        type="text"
        value={pass}
        className='outline-none w-full py-3 px-4 text-white bg-gray-700 placeholder-gray-400 rounded-l-lg focus:ring-2 focus:ring-blue-500'
        placeholder='Password'
        readOnly
        ref= {passref}
      />
      <button onClick ={copyPass} className='outline-none bg-blue-700 text-white px-5 py-2 rounded-r-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 transition-all'>
        Copy
      </button>
    </div>
    <div className='flex items-center justify-between text-sm text-white'>
      <label htmlFor="length">Length: {length}</label>
      <input
        type="range"
        id="length"
        min={6}
        max={100}
        value={length}
        onChange={e => setLength(e.target.value)}
        className='cursor-pointer w-full bg-gray-600 rounded-lg'
      />
      <div className='flex items-center gap-x-1'> 
      <input type='checkbox'
        defaultChecked= {numAllowed}
        id="numberInput"
        onChange={()=>
          setNumAllowed((prev) => !prev)
        }
      />
      <label htmlFor='numberInput'>Numbers</label>
    </div>
    <div className='flex items-center gap-x-1'> 
      <input type='checkbox'
        defaultChecked= {charAllowed}
        id="charInput"
        onChange={()=>
          setCharAllowed((prev) => !prev)
        }
      />
      <label htmlFor='charInput'>Characters</label>
    </div>
    </div>
  </div>
</div>

    </>
  )
}

export default App
