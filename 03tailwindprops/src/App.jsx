import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "tailwindcss";
import Card from './components/card'

function App() {
  let myobj = {
    name : "bhanu",
    age :20
  }
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>TailWind Test </h1>
      <Card name="bhanu udhay"  titletxt="hello"/>
      <Card name="udhay singh"  />
    </>
  )
}

export default App
