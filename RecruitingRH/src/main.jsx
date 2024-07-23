import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Postulation from './pages/Postulation.jsx'
import Applicants from './pages/Applicants.jsx'
import ApplicantsByProfessions from './components/Applicants/ApplicantsByProfession.jsx'
import DetalleAspirante from './pages/ApplicantsDetail.jsx'

import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'
import Professions from './pages/Professions.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<App />} />
      <Route path='/postulation' element={<Postulation />} />
      <Route path='/applicants' element={<Applicants />} />
      <Route path='/professions' element={<Professions />} />
      <Route path='/professions/:name' element={<ApplicantsByProfessions />} />
      <Route path="/applicants/:id" element={<DetalleAspirante />} />
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
