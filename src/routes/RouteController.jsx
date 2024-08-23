import { Route, Routes } from 'react-router-dom'
import { Suspense, lazy } from 'react'
const Home = lazy(() => import('../routes/Home/Home'))
const Login = lazy(() => import('../routes/Login/Login'))
const Single = lazy(() => import('../routes/Single/Single'))
const Collection = lazy(() => import('../routes/Collection/Collection'))
import Nav from '../components/Nav/Nav'


const RouteController = () => {
  return (
   <>
    <Nav />
      <Routes>
      <Route path='/' element={<Suspense fallback={<div>Loading...</div>}><Home /></Suspense> } />
      <Route path='/login' element={<Suspense fallback={<div>Loading...</div>}><Login /></Suspense>} />
      <Route path='/single/:id' element={<Suspense fallback={<div>Loading...</div>}><Single /></Suspense>} />
      <Route path='/collection' element={<Suspense fallback={<div>Loading...</div>}><Collection/></Suspense>} />
    </Routes>
   </>
  )
}

export default RouteController