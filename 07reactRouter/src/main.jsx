import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact.jsx'
import Github, { getGithubInfo } from './components/Github/Github.jsx'
import User from './components/User/User.jsx'


// const router  = createBrowserRouter([
//   {
//     path: '/',
//     element : <Layout/>,
//     children : [
//       {
//         path : "",
//         element :<Home />
//       },
//       {
//         path:'about',
//         element : <About />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout />} >
      <Route path='' element = {<Home />}/>
      <Route path='About' element = {<About />}/>
      <Route path='Contact' element = {<Contact />} />
      <Route path='User/:userId' element = {<User />} />
      <Route 
      loader ={getGithubInfo}
      path='Github' 
      element = {<Github />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={router}/>
  </StrictMode>,
)
