
import {AiOutlineSearch} from 'react-icons/ai'
import { BsThreeDots } from 'react-icons/bs'
import { PiUserSwitchFill } from 'react-icons/pi'
import { HiOutlineSpeakerphone } from 'react-icons/hi'
import { AiFillGift } from 'react-icons/ai';



const AllRightSide = () => {
    return (
        <div className='h-[92vh] w-full bg-[#18191A] text-white overflow-y-scroll'>
            <div className='p-5'>

                <div className='flex justify-between '>
                    <h1 className='text-sm'>Your Pages and profiles</h1>
                    <BsThreeDots size={20} />

                </div>

                <div className='p-5 space-y-3'>

                    <div className='flex gap-x-3'>
                        <PiUserSwitchFill size={25} />
                        <h1 className='text-sm text-[#ADB0B5]'>Switch into Page</h1>
                    </div>

                    <div className='flex gap-x-3'>
                        < HiOutlineSpeakerphone size={25} />
                        <h2 className='text-sm text-[#ADB0B5]'>Crate promotion</h2>
                    </div>

                </div>
                <div className='border-b-2 my-3 border-gray-100 w-[90%]'></div>

                <div className=''>
                    <div className='flex justify-between'>
                        <h1 className='text-[#ADB0B5] '>Friend Requests</h1>
                        <h1 className='text-blue-400'>See all</h1>
                    </div>

                    <div className='mt-2'>
                        <div className='flex gap-x-2'>
                            <img src={'/img/raja.jpg'} alt='img' className='h-[50px] w-[50px] rounded-full object-fill' />

                            <div>
                                <div className='flex justify-between'>
                                    <h1 className='text-[#dbe3f1]
                                    font-semibold text-[20px]'>raja king</h1>
                                    <h1 className='text-[#cbd5e7]'>2d</h1>
                                </div>
                                <div className='flex relative items-center
                             gap-x-3 mt-1'>
                                    <div>
                                        <img src={'/img/raja.jpg'} alt='img' className='h-[20px] w-[20px] rounded-full absolute top-0' />
                                    </div>

                                    <div>
                                        <img src={'/img/badhon.jpg'} alt='img' className='h-[20px] w-[20px] rounded-full' />
                                    </div>


                                    <h1 className='text-[#ADB0B5] text-sm'>69 mutual friends</h1>

                                </div>

                                <div className='flex gap-x-3 mt-4'>
                                    <button className='p-2 bg-blue-500  w-[100px] rounded-md'>confirm</button>
                                    <button className='p-2 bg-[#444546] rounded-md w-[100px]'>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border-b-2 my-5 border-gray-100 w-[90%]'></div>

                <div className='flex gap-x-2'>
                      <AiFillGift size={40} color='green'/> 
                      <h1>md jahid and 5 others have birthdays today</h1>

                </div>
                <div className='border-b-2 my-3 border-gray-100 w-[90%]'></div>

                <div className='flex justify-between mt-4 items-center'>
                    <h1 className='text-[#a8a8a8]'>Contacts</h1>

                    <div className='flex gap-x-5'>
                        <AiOutlineSearch size={20}/>
                        <BsThreeDots size={20} />
                    </div>
                </div>

                <div className='flex flex-col gap-y-5'>
                    <div></div>

                </div>


            </div>
        </div>
    );
};

export default AllRightSide;