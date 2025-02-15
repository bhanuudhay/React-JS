import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  let [color,setColor] = useState("darkblue");
  return (
      <div className="w-full h-screen bg-cover bg-center"
      style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12  inset-x-0 px-2 '>
          <div className='flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-xl'>
            <button onClick={()=> setColor("red")} className='outline-none px-4 px-1 rounded-full text-white ' style={{backgroundColor:"red"}}>red</button>
            <button onClick={()=> setColor("green")} className='outline-none px-4 px-1 rounded-full text-white ' style={{backgroundColor:"green"}}>green</button>
            <button onClick={()=> setColor("blue")} className='outline-none px-4 px-1 rounded-full text-white ' style={{backgroundColor:"blue"}}>blue</button>
            <button onClick={()=> setColor("orange")} className='outline-none px-4 px-1 rounded-full text-white ' style={{backgroundColor:"orange"}}>orange</button>
            <button onClick={()=> setColor("olive")} className='outline-none px-4 px-1 rounded-full text-white ' style={{backgroundColor:"olive"}}>olive</button>
            <button  onClick={()=> setColor("grey")}className='outline-none px-4 px-1 rounded-full text-white ' style={{backgroundColor:"grey"}}>grey</button>
          </div>
        </div>
      </div>
  )
}

export default App
