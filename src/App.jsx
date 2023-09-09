
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/auth/Login'
import Home from './components/Home/Homes'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css'
import Header from './components/Home/Layout/Header';
import { BiLike } from 'react-icons/bi';
import { useState } from 'react';

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
  const [lcm, setLcm] = useState(false);

  return (
    <div className='relative inline-block'>
      <div
        className='flex gap-x-2 items-center cursor-pointer'
        onMouseEnter={() => {
          setLcm(true);
        }}
        onMouseLeave={() => {
          setLcm(false);
        }}
      >
        <BiLike className='text-blue-400' size={30} />
        <h1 className='text-sm text-[#d3d3d3] hidden 800px:block'>Like</h1>
      </div>
      {lcm && (
        <div
          className={`absolute transition-transform duration-300 delay-500 transform scale-110 left-0 bg-red-400 w-1/4 h-[8vh]`}
        >
          badhon
        </div>
      )}
    </div>
  );
}

export default App
