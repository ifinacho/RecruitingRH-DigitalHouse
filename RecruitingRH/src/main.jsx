import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Postulation from './pages/Postulation.jsx'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route} from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={ <App /> } />
      <Route path='/postulation' element={ <Postulation /> } />
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
