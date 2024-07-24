import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Postulation from './pages/Postulation.jsx'
import Applicants from './pages/Applicants.jsx'
import DetalleAspirante from './components/Applicants/DetalleAspirante.jsx'
import Professions from './components/Main/Professions.jsx'
import ApplicantsFilter from './pages/ApplicantsFilter.jsx'

import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<App />} />
      <Route path='/postulation' element={<Postulation />} />
      <Route path='/applicants' element={<Applicants />} />
      <Route path='/professions' element={<Professions />} />
      <Route path='/professions/:name' element={<ApplicantsFilter />} />
      <Route path="/applicants/:id" element={<DetalleAspirante />} />
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
