
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/auth/Login'
import Home from './components/Home/Homes'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css'
import Header from './components/Home/Layout/Header';

function App() {


  return (
    <>
   <BrowserRouter>

   <ToastContainer position='bottom-center'/>
   <Routes>
   <Route path='/login'  element={<Login/>}/>
   <Route path='/'  element={<Home/>}/>
   <Route path='/r'  element={<Badhon/>}/>

   </Routes>
   
   
   </BrowserRouter>

    </>
  )
}

const Badhon=()=>{
  return(
    <div className='flex h  w-[100vw] gap-3 overflow-y-scroll justify-center'>
    <div className='h-[20vh] w-[50vw] bg-red-500'></div><div className='h-[200vh] w-[10vw] bg-red-500'></div><div c
className='h-[200vh] w-[10vw] bg-red-500'></div><div className='h-[20vh] w-[50vw] bg-red-500'></div><div className='h-[20vh] w-[50vw] bg-red-500'></div><div className='h-[20vh] w-[50vw] bg-red-500'></div><div className='h-[20vh] w-[50vw] bg-red-500'></div>
    <div className='h-[20vh] w-[50vw] bg-red-500'></div><div className='h-[200vh] w-[10vw] bg-red-500'></div><div className='h-[20vh] w-[50vw] bg-red-500'></div><div className='h-[20vh] w-[50vw] bg-red-500'></div><div className='h-[20vh] w-[50vw] bg-red-500'></div><div className='h-[20vh] w-[50vw] bg-red-500'></div>
    </div>
  )
}

export default App
