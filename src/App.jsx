
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/auth/Login'
import Home from './components/Home/Homes'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css'

function App() {


  return (
    <>
   <BrowserRouter>
   <ToastContainer position='bottom-center'/>
   <Routes>
   <Route path='/login'  element={<Login/>}/>
   <Route path='/'  element={<Home/>}/>

   </Routes>
   
   
   </BrowserRouter>

    </>
  )
}

export default App
