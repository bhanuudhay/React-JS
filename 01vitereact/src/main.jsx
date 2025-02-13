import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

///
function MyApp()
{
  return(
    <div>
      <h1> hello chai pi lo</h1>
    </div>
  )
}

const anotheruser  = "bhanu"
const element = (
  <a href="https://google.com" target = '_blank'> Visited google</a>
)

const element2 = React.createElement(
  'a',{href : 'http://google.com'}, 'click me to visit google',anotheruser
)
createRoot(document.getElementById('root')).render(
  <App/>
)
