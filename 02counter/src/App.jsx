import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let  [counter , setCounter ] = useState(15)

  //let counter = 5
  let removeVal = ()=>
  {
    if(counter > 0)
    setCounter(counter-1)
  }
  const addValue = ()=>
  {
    console.log("value added" ,  counter);
    //counter = counter + 1
    if(counter < 20)
    setCounter(counter => counter +1)    // use state ke setter ke ander callback hota hai 
    setCounter(counter=>counter +1)  
    setCounter(counter => counter  +1)  

  }
  return (
    <>
    <h1>Chai aur react</h1>
    <h2>counter value : {counter} </h2>

    <button
    onClick={addValue}>
      add value {counter}</button>
    <br></br>
    <button
    onClick={removeVal}
    >remove value {counter}</button>
    <p>footer :  {counter}</p>
    </>
  )
}

export default App
