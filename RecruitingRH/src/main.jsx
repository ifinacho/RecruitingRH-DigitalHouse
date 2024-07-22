import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Postulation from './pages/Postulation.jsx'
import Applicants from './pages/Applicants.jsx'


import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route} from 'react-router-dom'
import Professions from './pages/Professions.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={ <App /> } />
      <Route path='/postulation' element={ <Postulation /> } />
      <Route path='/applicants' element={ <Applicants /> } />
      <Route path='/professions' element={<Professions />} />
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
