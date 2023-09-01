
import  { useState } from 'react';

import { SiGooglenews, SiCoinmarketcap } from 'react-icons/si'

import { HiSpeakerphone } from 'react-icons/hi'
import { VscGraph } from 'react-icons/vsc'
import { FaUserFriends, FaGamepad, FaHeart } from 'react-icons/fa'
import { MdEmojiEvents, MdGroups, MdVideoLibrary, MdCrisisAlert, MdBloodtype } from 'react-icons/md'
import { RiSecurePaymentFill, RiMessengerFill, RiMemoriesFill } from 'react-icons/ri'
import { BsFillFlagFill } from 'react-icons/bs'
import { TbActivity } from 'react-icons/tb'
import { IoIosSave, IoLogoGameControllerB, IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io'
import { BsFillTreeFill, } from 'react-icons/bs'

const AllLeftSidebar = () => {

  const [hight, setHight] = useState(false)
  return (
    <div className='h-[92vh] w-full bg-[#18191A] text-white overflow-y-scroll'>
       
      <div className='p-5 '>
        <div className='flex flex-col gap-y-3'>
          <div className='flex gap-1 items-center hover:bg-[#e7e6e650] py-2 rounded-md cursor-pointer'>
            <img src='/img/facebook-logo.png'  alt='img' className='h-[40px] w-[50px] rounded-full' />
            <h2>Muhammad badhon</h2>
          </div>


          <div className='flex pl-2 gap-x-3 items-center hover:bg-[#e7e6e650] py-2 rounded-md cursor-pointer'>

            < FaUserFriends size={35} color='#318FF6' />
            <h2>Friends</h2>
          </div>

          <div className='flex gap-x-3 pl-2 items-center hover:bg-[#e7e6e650] py-2 rounded-md cursor-pointer'>
            < SiGooglenews size={35} color='#5CD7C7' />
            <h2>Feeds</h2>
          </div>

          <div className='flex gap-x-3 pl-2 items-center hover:bg-[#e7e6e650] py-2 rounded-md cursor-pointer'>
            < MdGroups size={35} color='#40B8E1' />
            <h2>Groups</h2>
          </div>

          <div className='flex gap-x-3 pl-2 items-center hover:bg-[#e7e6e650] py-2 rounded-md cursor-pointer'>
            < SiCoinmarketcap size={35} color='#338EEE' />
            <h2>Marketplace</h2>
          </div>

          <div className='flex gap-x-3 pl-2 items-center hover:bg-[#e7e6e650] py-2 rounded-md cursor-pointer'>
            < TbActivity size={35} color='#338EEE' />
            <h2>Video</h2>
          </div>

          {
            hight && (
              <>
                <div className='flex gap-x-3 pl-2 items-center hover:bg-[#e7e6e650] py-2 rounded-md cursor-pointer'>
                  < MdVideoLibrary size={35} color='' />
                  <h2>Marketplace</h2>
                </div>

                <div className='flex gap-x-3 pl-2 items-center hover:bg-[#e7e6e650] py-2 rounded-md cursor-pointer'>
                  < HiSpeakerphone size={35} color='#338EEE' />
                  <h2>Ad center</h2>
                </div>



                <div className='flex gap-x-3 pl-2 items-center hover:bg-[#e7e6e650] py-2 rounded-md cursor-pointer'>
                  < VscGraph size={35} color='' />
                  <h2>Ads Manager</h2>
                </div>

                <div className='flex gap-x-3 pl-2 items-center hover:bg-[#e7e6e650] py-2 rounded-md cursor-pointer'>
                  < MdBloodtype size={35} color='#F45F78' />
                  <h2>Blood Donations</h2>
                </div>

                <div className='flex gap-x-3 pl-2 items-center hover:bg-[#e7e6e650] py-2 rounded-md cursor-pointer'>
                  < BsFillTreeFill size={35} color='#4BCE6C' />
                  <h2>Climate Science Center</h2>
                </div>

                <div className='flex gap-x-3 pl-2 items-center hover:bg-[#e7e6e650] py-2 rounded-md cursor-pointer'>
                  < MdCrisisAlert size={35} color='#6EC0FB' />
                  <h2>Crisis Response</h2>
                </div>


                <div className='flex gap-x-3 pl-2 items-center hover:bg-[#e7e6e650] py-2 rounded-md cursor-pointer'>
                  < MdEmojiEvents size={35} color='#EE4F6B' />
                  <h2>Events</h2>
                </div>

                <div className='flex gap-x-3 pl-2 items-center hover:bg-[#e7e6e650] py-2 rounded-md cursor-pointer'>
                  < FaHeart size={35} color='#F7C547' />
                  <h2>Fundraisers</h2>
                </div>

                <div className='flex gap-x-3 pl-2 items-center hover:bg-[#e7e6e650] py-2 rounded-md cursor-pointer'>
                  < IoLogoGameControllerB size={35} color='#3183DD' />
                  <h2>Gaming Video</h2>
                </div>

                <div className='flex gap-x-3 pl-2 items-center hover:bg-[#e7e6e650] py-2 rounded-md cursor-pointer'>
                  < RiMemoriesFill size={35} color='white' />
                  <h2>Memories</h2>
                </div>

                <div className='flex gap-x-3 pl-2 items-center hover:bg-[#e7e6e650] py-2 rounded-md cursor-pointer'>
                  < RiMessengerFill size={35} color='#DE58B9' />
                  <h2>Messenger</h2>
                </div>

                <div className='flex gap-x-3 pl-2 items-center hover:bg-[#e7e6e650] py-2 rounded-md cursor-pointer'>
                  < RiMessengerFill size={35} color='#A6DD80' />
                  <h2>Messenger Kids</h2>
                </div>

                <div className='flex gap-x-3 pl-2 items-center hover:bg-[#e7e6e650] py-2 rounded-md cursor-pointer'>
                  < RiSecurePaymentFill size={35} color='#1C3050' />
                  <h2>Orders and payments</h2>
                </div>

                <div className='flex gap-x-3 pl-2 items-center hover:bg-[#e7e6e650] py-2 rounded-md cursor-pointer'>
                  < BsFillFlagFill size={35} color='#ED6A40' />
                  <h2>Pages</h2>
                </div>


                <div className='flex gap-x-3 pl-2 items-center hover:bg-[#e7e6e650] py-2 rounded-md cursor-pointer'>
                  < FaGamepad size={35} color='#3085F3' />
                  <h2>Play Games</h2>
                </div>

                <div className='flex gap-x-3 pl-2 items-center hover:bg-[#e7e6e650] py-2 rounded-md cursor-pointer'>
                  < TbActivity size={35} color='#3085F3' />
                  <h2>Recent ad activity</h2>
                </div>

                <div className='flex gap-x-3 pl-2 items-center hover:bg-[#e7e6e650] py-2 rounded-md cursor-pointer'>
                  < IoIosSave size={35} color='#B85FD9' />
                  <h2>Saved</h2>
                </div> </>
            )
          }
          <div className='flex gap-x-3 pl-2 items-center cursor-pointer'onClick={() => setHight(!hight)} >
            <div className="h-[30px] w-[30px] rounded-full bg-[#7e7a7a] flex items-center justify-center cursor-pointer">
              {
                hight ? (< IoMdArrowDropup  size={30} color='white' />) : (
                  < IoMdArrowDropdown  size={30} color='white' />
                )
              }

            </div>

            <h2>See more</h2>
          </div>
          <div className='border-b-2  border-gray-100 w-[90%]'></div>

        </div>
        <div className=' mt-5 p-3'>
           <div className='flex flex-col gap-y-3'>
              <div className='flex justify-between'>
                <h1 className='text-sm font-semibold'>Your shortcuts</h1>
                <h4 className='text-sm font-semibold text-blue-500'>Edit</h4>
              </div>

              <div className='flex gap-x-2 items-center'>
                <img  src={'/public/img/raja.jpg'} alt='img' className='h-[40px] w-[40px] rounded-lg'/>

              <h1>fiver.com </h1>
              </div>
            
            </div>
        </div>
        
      </div>

    </div>

  );
};

export default AllLeftSidebar;