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
      <Route path='/applicants' element={ <ApplicantsPage /> } />
      <Route path='/professions' element={ <ProfessionsPage /> } />
      <Route path='/professions/:professionId' element={ <ProfessionDetailPage /> } />
      <Route path='/applicants/:applicantId' element={ <ApplicantDetailPage /> } />
      <Route path='*' element={ <NotFound /> } />
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
