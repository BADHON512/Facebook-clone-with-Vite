
import { useState } from 'react';
import { AiOutlineSearch, AiOutlineSetting } from 'react-icons/ai';
import { ImYoutube} from 'react-icons/im';
import { RiLiveLine} from 'react-icons/ri';
import { BiSolidVideos,BiSolidSave} from 'react-icons/bi';
import { TbSlideshow} from 'react-icons/tb';
import { BsFillRocketTakeoffFill} from 'react-icons/bs';


const VideoLeft = () => {
    const [color,setColor]=useState(1)
    return (
        <div className='w-full h-[10vh] pb-[20px]  800px:h-screen text-white shadow-lg bg-[#242526]'>
           <div className='p-3 flex flex-row  h-full 800px:flex-col items-center overflow-x-scroll '>
           <div className='hidden 800px:block w-full '>
           <div className='  flex justify-between  items-center w-full'>
                <h1 className='text-[25px] text-[#d8d5d5] 
                font-semibold'>Video</h1>
                <AiOutlineSetting size={25} className='cursor-pointer'/>
             </div>
           </div>

             <div className='hidden 800px:block mt-4 relative  w-full'>
                <input type="text"  className='w-[90%] bg-[#9695953d] pl-11 py-2 rounded-3xl placeholder:text-white placeholder:ml-5 outline-none ' placeholder='Search videos'  />
                <AiOutlineSearch className='absolute top-2 left-4' size={25}   />
             </div>


             <div className={`p-2 mt-3 cursor-pointer w-full hover:bg-[#d3d1d144] ${color===1?'bg-[#d3d1d144]':null} rounded-md`} onClick={()=>setColor(1)}>
            <div className='flex gap-x-3 items-center '>
                <div className={`flex justify-center items-center h-[45px] w-[45px] rounded-full ${color===1?'bg-[#1877F2]':'bg-[#cecbcb60]'} `}>
                <ImYoutube size={30}/>
                </div>
                <h1>Home</h1>
            </div>
           </div>



           <div className={`p-2 mt-3 cursor-pointer w-full hover:bg-[#d3d1d144] ${color===2?'bg-[#d3d1d144]':null} rounded-md`} onClick={()=>setColor(2)}>
            <div className='flex gap-x-3 items-center'>
                <div className={`flex justify-center items-center h-[45px] w-[45px] rounded-full ${color===2?'bg-[#ff1925]':'bg-[#cecbcb60]'} `}>
                <RiLiveLine size={30}/>
                </div>
                <h1>Live</h1>
            </div>
           </div>

           <div className={`p-2 mt-3 cursor-pointer w-full hover:bg-[#d3d1d144] ${color===3?'bg-[#d3d1d144]':null} rounded-md`} onClick={()=>setColor(3)}>
            <div className='flex gap-x-3 items-center'>
                <div className={`flex justify-center items-center h-[45px] w-[45px] rounded-full ${color===3?'bg-[#1877F2]':'bg-[#cecbcb60]'} `}>
                <BiSolidVideos size={30}/>
                </div>
                <h1>Reels</h1>
            </div>
           </div>

           <div className={`p-2 mt-3 cursor-pointer w-full hover:bg-[#d3d1d144] ${color===4?'bg-[#d3d1d144]':null} rounded-md`} onClick={()=>setColor(4)}>
            <div className='flex gap-x-3 items-center'>
                <div className={`flex justify-center items-center h-[45px] w-[45px] rounded-full ${color===4?'bg-[#2ABBA7]':'bg-[#cecbcb60]'} `}>
                <TbSlideshow size={30}/>
                </div>
                <h1>Shows</h1>
            </div>
           </div>


           <div className={`p-2 mt-3 cursor-pointer w-full hover:bg-[#d3d1d144] ${color===5?'bg-[#d3d1d144]':null} rounded-md`} onClick={()=>setColor(5)}>
            <div className='flex gap-x-3 items-center'>
                <div className={`flex justify-center items-center h-[45px] w-[45px] rounded-full ${color===5?'bg-[#9360F7]':'bg-[#cecbcb60]'} `}>
                <BsFillRocketTakeoffFill size={30}/>
                </div>
                <h1>Explore</h1>
            </div>
           </div>

           <div className={`p-2 mt-3 cursor-pointer w-full hover:bg-[#d3d1d144] ${color===6?'bg-[#d3d1d144]':null} rounded-md`} onClick={()=>setColor(6)}>
            <div className='flex gap-x-3 items-center'>
                <div className={`flex justify-center items-center h-[45px] w-[45px] rounded-full ${color===6?'bg-[#9360F7]':'bg-[#cecbcb60]'} `}>
                <BiSolidSave size={30}/>
                </div>
                <h1>Saved</h1>
            </div>
           </div>

            </div> 
        </div>
    );
};

export default VideoLeft;