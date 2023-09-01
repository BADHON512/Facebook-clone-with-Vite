
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/auth/Login'
import Home from './components/Home/Homes'

import './App.css'

function App() {


  return (
    <>
   <BrowserRouter>
   <Routes>
   <Route path='/login'  element={<Login/>}/>
   <Route path='/'  element={<Home/>}/>

   </Routes>
   
   
   </BrowserRouter>

    </>
  )
}

export default App
