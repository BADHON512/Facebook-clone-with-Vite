import { AiFillSetting, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import { IoIosArrowRoundBack, IoLogoGameControllerB,IoIosArrowForward } from 'react-icons/io'
import { AiOutlineHome } from 'react-icons/ai'
import { MdBloodtype, MdCrisisAlert, MdEmojiEmotions, MdEmojiEvents, MdGroups, MdOutlineOndemandVideo } from 'react-icons/md'
import { SiCoinmarketcap, SiHomeassistantcommunitystore } from 'react-icons/si'
import { HiSpeakerphone, HiUserGroup } from 'react-icons/hi'
import { FaCloudMeatball, FaGamepad, FaHeart, FaUserFriends  } from 'react-icons/fa'
import { CgMenuGridR, CgProfile } from 'react-icons/cg'
import { RiFeedbackFill, RiLogoutCircleRLine, RiMemoriesFill, RiMessengerFill, RiSecurePaymentFill } from 'react-icons/ri'
import { IoMdNotifications } from 'react-icons/io'
import { useState } from 'react'
import { BsArrowUpRight, BsBookHalf, BsFillEmojiLaughingFill, BsFillFlagFill, BsFillTreeFill, BsGrid, BsMoonFill, BsThreeDots } from 'react-icons/bs'
import { TbActivity } from 'react-icons/tb'
import { BiEdit, BiSolidHelpCircle, BiSolidVideoPlus, BiSolidVideos } from 'react-icons/bi'
import { PiFilmReelDuotone } from 'react-icons/pi'

import { RxUpdate } from 'react-icons/rx'
import { FaMeta } from 'react-icons/fa6'







const Header = ({ move, setMove, open, setOpen, iconBorder, setIconBorder }) => {
    const [grid, setGrid] = useState(0)
    const toggleTab = (tab) => {
        if (grid === tab) {
            setGrid(0)
        } else { setGrid(tab) }
    }


    return (
        <div className=''>
            <div className='z-10 h-[8vh] fixed bg-[#242526] w-full text-white  shadow-lg border-b border-[#393A3B]'>
                <div className='p-2 h-full'>
                    <div className='h-full w-full flex items-center justify-between'>
                        {/* icon and search */}
                        <div className='w-[18%] '>
                            <div className={`${move ? "hidden" : null} flex items-center gap-x-2`}>
                                <img src='/img/facebook-logo.png' className='h-[40px] w-[50px] ' alt='img' />
                                <AiOutlineSearch onClick={() => setMove(true)} color='white' size={25} className='cursor-pointer' />
                            </div>
                            {
                                move && (
                                    <div className='flex gap-x-3 items-center'>
                                        <IoIosArrowRoundBack size={35} onClick={() => setMove(false)} className='cursor-pointer' />
                                        <div>
                                            <input type="text" 
                                            placeholder='Search your word'
                                            className='appearance-none h-[35px] w-full outline-none rounded-2xl bg-[#686666a1] p-2  ' />
                                        </div>
                                    </div>
                                )
                            }


                        </div>


                        {/* header middle icon */}

                        <div>
                            <div className=' hidden 800px:flex 800px:items-center 800px:gap-x-20 '>
                                <div className='h-[8vh] flex items-center justify-center  w-[30%] relative cursor-pointer' onClick={() => setIconBorder(1)} >
                                    <AiOutlineHome color={`${iconBorder === 1 ? "#2374E1" : '#B8BBBF'}`} size={30}
                                    />
                                    <div className={`${iconBorder === 1 ? 'h-1 w-20 bg-[#2374E1] absolute bottom-0  rounded-lg' : null}`}></div>
                                </div>



                                <div className='h-[8vh] flex items-center justify-center w-[30%] relative cursor-pointer' onClick={() => setIconBorder(2)}>
                                    <MdOutlineOndemandVideo color={`${iconBorder === 2 ? "#2374E1" : '#B8BBBF'}`} size={30}
                                    />
                                    <div className={`${iconBorder === 2 ? 'h-1 w-20 bg-[#2374E1] absolute bottom-0  rounded-lg' : null}`}></div>
                                </div>
                                <div className='h-[8vh] flex items-center justify-center w-[30%] relative cursor-pointer' onClick={() => setIconBorder(3)}>
                                    <SiHomeassistantcommunitystore color={`${iconBorder === 3 ? "#2374E1" : '#B8BBBF'}`} size={30}
                                    />
                                    <div className={`${iconBorder === 3 ? 'h-1 w-20 bg-[#2374E1] absolute bottom-0  rounded-lg' : null}`}></div>
                                </div>
                                <div className='h-[8vh] flex items-center justify-center w-[30%] relative cursor-pointer' onClick={() => setIconBorder(4)}>
                                    <HiUserGroup color={`${iconBorder === 4 ? "#2374E1" : '#B8BBBF'}`} size={30}
                                    />
                                    <div className={`${iconBorder === 4 ? 'h-1 w-20 bg-[#2374E1] absolute bottom-0  rounded-lg' : null}`}></div>
                                </div>
                                <div className='h-[8vh] flex items-center justify-center  w-[30%] relative cursor-pointer' onClick={() => setIconBorder(5)}>
                                    <FaGamepad color={`${iconBorder === 5 ? "#2374E1" : '#B8BBBF'}`} size={30}
                                    />
                                    <div className={`${iconBorder === 5 ? 'h-1 w-20 bg-[#2374E1] absolute bottom-0  rounded-lg' : null}`}></div>
                                </div>

                            </div>

                            <div className={`800px:hidden`}>


                                <AiOutlineMenu color={`${iconBorder === 6 ? "#2374E1" : '#B8BBBF'}`} size={30}
                                    className='cursor-pointer '
                                    onClick={() => {
                                        setOpen(!open)


                                    }} />


                            </div>
                        </div>



                        {/* header last icon */}

                        <div>
                            <div className='flex items-center gap-x-3'>
                                <div className='h-[40px] w-[40px] rounded-full bg-[#4E4F4F] flex items-center justify-center cursor-pointer' onClick={() => toggleTab(1)}>
                                    <CgMenuGridR color={`${grid===1?'blue':'#C5C6CA'}`} size={27} />
                                </div>

                                <div className='h-[40px] w-[40px] rounded-full bg-[#4E4F4F] flex items-center justify-center cursor-pointer' onClick={() => toggleTab(2)}>
                                    <RiMessengerFill color={`${grid===2?'blue':'#C5C6CA'}`} size={27} />
                                </div>
                                <div className='h-[40px] w-[40px] rounded-full bg-[#4E4F4F] flex items-center justify-center cursor-pointer' onClick={() => toggleTab(3)}>
                                    <IoMdNotifications color={`${grid===3?'blue':'#C5C6CA'}`} size={27} />
                                </div>
                                <div className='h-[40px] w-[40px] rounded-full flex items-center justify-center cursor-pointer' onClick={() => toggleTab(4)}>
                                    <CgProfile  size={35} className='cursor-pointer' />
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
            {/* for mobile side bar */}
            {
                open && (
                    <div className='z-50 800px:hidden min-h-[50vh] fixed top-[59px] w-[100px] bg-[#242526] rounded-b-md '>

                        <div className='h-full w-full pt-4 flex flex-col gap-5 items-center justify-center'>

                            <AiOutlineHome color={`${iconBorder === 1 ? "#2374E1" : '#B8BBBF'}`} size={30} className='cursor-pointer '
                                onClick={() => {
                                    setIconBorder(1)
                                    setOpen(false)
                                }} />

                            <MdOutlineOndemandVideo color={`${iconBorder === 2 ? "#2374E1" : '#B8BBBF'}`} size={30}
                                className='cursor-pointer '
                                onClick={() => {
                                    setIconBorder(2)
                                    setOpen(false)
                                }} />

                            <SiHomeassistantcommunitystore color={`${iconBorder === 3 ? "#2374E1" : '#B8BBBF'}`} size={30}
                                className='cursor-pointer '
                                onClick={() => {
                                    setIconBorder(3)
                                    setOpen(false)
                                }} />

                            <HiUserGroup color={`${iconBorder === 4 ? "#2374E1" : '#B8BBBF'}`} size={30}
                                className='cursor-pointer '
                                onClick={() => {
                                    setIconBorder(4)
                                    setOpen(false)
                                }} />

                            <FaGamepad color={`${iconBorder === 5 ? "#2374E1" : '#B8BBBF'}`} size={30}
                                className='cursor-pointer '
                                onClick={() => {
                                    setIconBorder(5)
                                    setOpen(false)
                                }} />


                        </div>
                    </div>
                )
            }


            {/* header grid side bar */}

            {
                grid === 1 && (
                    <div className='h-[90vh] w-full 500px:w-[60vw] 800px:w-[45vw] bg-[#242526] fixed right-0 text-white z-10 top-[8%] rounded-md '>
                        <div className='p-3 h-full'>
                            <h1 className='font-sans font-bold text-[30px]'>Menu</h1>

                            <div className='flex h-full justify-between w-full'>

                                <div className='w-[60%] min-h-[83vh] p-5 bg-[#18191A] rounded-md overflow-y-scroll'>

                                    <div className='relative'>
                                        <input type="text" className='w-[97%] py-1 pl-12 h-[40px] bg-[#3A3B3C] rounded-3xl' placeholder='Search menu' />
                                        <AiOutlineSearch className='absolute top-2 left-4' size={25} />
                                    </div>

                                    <div className='mt-3'>
                                        <h1 className='text-[#f5f8ff] font-bold text-[20px] font-sans'>Social</h1>
                                    </div>

                                    <div>

                                        <div className='flex gap-x-1  items-center hover:bg-[#3A3B3C] py-1 rounded-md cursor-pointer'>
                                            <div className='h-[50px] w-[50px] flex justify-center items-center '>
                                                < MdEmojiEvents size={35} color='#EE4F6B' />
                                            </div>
                                            <div>
                                                <h2 className='text-[#f8faff]'>Events</h2>
                                                <p className='text-sm text-[#AEB0B4] p-[2px] '>organize of rind events and other things to do online and nearby</p>
                                            </div>

                                        </div>
                                        <div className='flex  gap-x-1 items-center hover:bg-[#e7e6e650] py-1 rounded-md cursor-pointer'>
                                            <div className='h-[50px] w-[50px] flex justify-center items-center '>
                                                < FaUserFriends size={35} color='#318FF6' />
                                            </div>

                                            <div className=''>
                                                <h2 className='text-[#f4f8ff]'>Friends</h2>
                                                <p className='text-sm text-[#AEB0B4] p-[2px] '>Search fo friends or people you may know.</p>
                                            </div>
                                        </div>

                                        <div className='flex gap-x-1  items-center hover:bg-[#e7e6e650] py-1 rounded-md cursor-pointer'>
                                            <div className='h-[50px] w-[50px] flex justify-center items-center '>
                                                < MdGroups size={35} color='#40B8E1' />
                                            </div>


                                            <div className=''>
                                                <h2 className='text-[#f6f9ff]'>Groups</h2>
                                                <p className='text-sm text-[#AEB0B4] p-[2px] '>Connect with people who share your interests</p>
                                            </div>

                                        </div>

                                        <div className='flex gap-x-1  items-center hover:bg-[#e7e6e650] py-1 rounded-md cursor-pointer'>

                                            <div className='h-[50px] w-[50px] flex justify-center items-center '>
                                                < SiCoinmarketcap size={35} color='#338EEE' />
                                            </div>




                                            <div className=''>
                                                <h2 className='text-[#f5f8ff]'>Market</h2>
                                                <p className='text-sm text-[#AEB0B4] p-[2px] '>Connect with people who share your interests</p>
                                            </div>
                                        </div>


                                        <div className='flex gap-x-3 pl-2 items-center hover:bg-[#e7e6e650] py-2 rounded-md cursor-pointer'>
                                            < BsFillFlagFill size={35} color='#ED6A40' />

                                            <div className=''>
                                                <h2 className='text-[#f5f8ff]'>Market</h2>
                                                <p className='text-sm text-[#AEB0B4] p-[2px] '>Discover and connect with businesses on facebook</p>
                                            </div>
                                        </div>

                                    </div>


                                    <div className='w-full border-b-[1px] border-[#3E4042] my-3 '></div>

                                    <div className=''>
                                        <h1 className='text-[#f5fbff] font-semibold'>Entertainment</h1>

                                        <div className='mt-2'>

                                            <div className='flex gap-x-3 pl-2 items-center hover:bg-[#e7e6e650] py-2 rounded-md cursor-pointer'>
                                                < TbActivity size={35} color='#338EEE' />

                                                <div className=''>
                                                    <h2 className='text-[#f6f9ff]'>Video</h2>
                                                    <p className='text-sm text-[#AEB0B4] p-[2px] '>Watch and connect with your favorite games and streamers</p>
                                                </div>
                                            </div>

                                            <div className='flex gap-x-3 pl-2 items-center hover:bg-[#e7e6e650] py-2 rounded-md cursor-pointer'>
                                                < IoLogoGameControllerB size={35} color='red' />

                                                <div className=''>
                                                    <h2 className='text-[#fafcff]'>Gaming video</h2>
                                                    <p className='text-sm text-[#AEB0B4] p-[2px] '>a video destination personalized to you interests and connections</p>
                                                </div>
                                            </div>

                                            <div className='flex gap-x-3 pl-2 items-center hover:bg-[#e7e6e650] py-2 rounded-md cursor-pointer'>
                                                < FaGamepad size={35} color='orange' />


                                                <div className=''>
                                                    <h2 className='text-[#f7f9ff]'>Play Games</h2>
                                                    <p className='text-sm text-[#AEB0B4] p-[2px] '>Play your favorite games.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='w-full border-b-[1px] border-[#3E4042] my-3 '></div>

                                        <div className='mt-2'>
                                            <h1 className='text-[hsl(210,8%,74%)] font-semibold mb-3'> Shopping</h1>

                                            <div className='flex gap-x-1  items-center hover:bg-[#e7e6e650] py-1 rounded-md cursor-pointer'>

                                                <div className='h-[50px] w-[50px] flex justify-center items-center '>
                                                    < RiSecurePaymentFill size={35} color='blue' />
                                                </div>
                                                <div className=''>
                                                    <h2 className='text-[#f8faff]'>Orders and payment</h2>
                                                    <p className='text-sm text-[#AEB0B4] p-[2px] '>A seamless secure way to pay on the apps you already use</p>
                                                </div>
                                            </div>

                                            <div className='flex gap-x-1  items-center hover:bg-[#e7e6e650] py-1 rounded-md cursor-pointer'>

                                                <div className='h-[50px] w-[50px] flex justify-center items-center '>
                                                    < SiCoinmarketcap size={35} color='#338EEE' />
                                                </div>




                                                <div className=''>
                                                    <h2 className='text-[#e9f0fd]'>Marketplace</h2>
                                                    <p className='text-sm text-[#AEB0B4] p-[2px] '>Buy and sell in your community</p>
                                                </div>
                                            </div>




                                        </div>

                                        <div className='w-full border-b-[1px] border-[#3E4042] my-3'></div>

                                        <div className='mt-3'>
                                            <h1 className='text-[hsl(210,8%,74%)] font-semibold'> Community Resources</h1>
                                        </div>

                                        <div className='mt-2'>


                                            <div className='flex gap-x-1  items-center hover:bg-[#e7e6e650] py-1 rounded-md cursor-pointer'>

                                                <div className='h-[50px] w-[50px] flex justify-center items-center '>
                                                    < MdBloodtype size={35} color='red' />
                                                </div>
                                                <div className=''>
                                                    <h2 className='text-[#e9f0fd]'>Blood Donations</h2>
                                                    <p className='text-sm text-[#AEB0B4] p-[2px] '>Get updates donations</p>
                                                </div>
                                            </div>


                                            <div className='flex gap-x-1  items-center hover:bg-[#e7e6e650] py-1 rounded-md cursor-pointer'>

                                                <div className='h-[50px] w-[50px] flex justify-center items-center '>
                                                    < BsFillTreeFill size={35} color='#4BCE6C' />
                                                </div>
                                                <div className=''>
                                                    <h2 className='text-[#e9f0fd]'>Climate science Center</h2>
                                                    <p className='text-sm text-[#AEB0B4] p-[2px] '>Learn about climate change and its effects</p>
                                                </div>
                                            </div>


                                            <div className='flex px-2 gap-x-1  items-center hover:bg-[#e7e6e650] py-1 rounded-md cursor-pointer'>

                                                <div className='h-[50px] w-[50px] flex justify-center items-center '>
                                                    < MdCrisisAlert size={35} color='#6EC0FB' />
                                                </div>
                                                <div className=''>
                                                    <h2 className='text-[#e9f0fd]'>Crisis response</h2>
                                                    <p className='text-sm text-[#AEB0B4] p-[2px] '>Find the latest updates for recent crises hapening around the world</p>
                                                </div>
                                            </div>


                                            <div className='flex px-2 gap-x-1  items-center hover:bg-[#e7e6e650] py-1 rounded-md cursor-pointer'>

                                                <div className='h-[50px] w-[50px] flex justify-center items-center '>
                                                    < FaHeart size={35} color='#F7C547' />
                                                </div>
                                                <div className=''>
                                                    <h2 className='text-[#e9f0fd]'>Fundraisers</h2>
                                                    <p className='text-sm text-[#AEB0B4] p-[2px] '>Donate and raise money for nonprofits and personal causes</p>
                                                </div>
                                            </div>






                                        </div>


                                    </div>

                                </div>
                                <div className='w-[38%] min-h-[75vh] p-3 bg-[#18191A] rounded-md'>
                                    <h1 className='font-sans font-bold text-[25px]'>Create</h1>

                                    <div className='mt-3'>
                                        <div className='flex gap-x-3 pl-2 items-center hover:bg-[#e7e6e650] py-2 rounded-md cursor-pointer'>
                                            <div className='h-[50px] w-[50px] bg-[#faf7f74b] rounded-full flex items-center justify-center'>
                                                < BiEdit size={30} color='#F7C547' />       </div>
                                            <h2>Post</h2>
                                        </div>

                                        <div className='flex gap-x-3 pl-2 items-center hover:bg-[#e7e6e650] py-2 rounded-md cursor-pointer'>
                                            <div className='h-[50px] w-[50px] bg-[#faf7f74b] rounded-full flex items-center justify-center'>
                                                < BsBookHalf size={30} color='#3183DD' /></div>
                                            <h2>Story</h2>
                                        </div>

                                        <div className='flex gap-x-3 pl-2 items-center hover:bg-[#e7e6e650] py-2 rounded-md cursor-pointer'>
                                            <div className='h-[50px] w-[50px] bg-[#faf7f74b] rounded-full flex items-center justify-center'>
                                                < PiFilmReelDuotone size={30} color='white' />       </div>
                                            <h2>Reel</h2>
                                        </div>

                                        <div className='flex gap-x-3 pl-2 items-center hover:bg-[#e7e6e650] py-2 rounded-md cursor-pointer'>
                                            <div className='h-[50px] w-[50px] bg-[#faf7f74b] rounded-full flex items-center justify-center'>
                                                < BiSolidVideoPlus size={30} color='#DE58B9' />       </div>
                                            <h2>Room</h2>
                                        </div>

                                        <div className='w-full border-b-[1px] border-[#3E4042] my-3 '></div>



                                        <div className='flex gap-x-3 pl-2 items-center hover:bg-[#e7e6e650] py-2 rounded-md cursor-pointer'>
                                            <div className='h-[50px] w-[50px] bg-[#faf7f74b] rounded-full flex items-center justify-center'>
                                                < BsFillFlagFill size={30} color='#ED6A40' /></div>
                                            <h2>Pages</h2>
                                        </div>

                                        <div className='flex gap-x-3 pl-2 items-center hover:bg-[#e7e6e650] py-2 rounded-md cursor-pointer'>
                                            <div className='h-[50px] w-[50px] bg-[#faf7f74b] rounded-full flex items-center justify-center'>
                                                < HiSpeakerphone size={30} color='#338EEE' /> </div>
                                            <h2>Ad center</h2>
                                        </div>

                                        <div className='flex gap-x-3 pl-2 items-center hover:bg-[#e7e6e650] py-2 rounded-md cursor-pointer'>
                                            <div className='h-[50px] w-[50px] bg-[#faf7f74b] rounded-full flex items-center justify-center'>
                                                < MdGroups size={30} color='#40B8E1' />
                                            </div>
                                            <h2>Groups</h2>
                                        </div>

                                        <div className='flex gap-x-3 pl-2 items-center hover:bg-[#e7e6e650] py-2 rounded-md cursor-pointer'>
                                            <div className='h-[50px] w-[50px] bg-[#faf7f74b] rounded-full flex items-center justify-center'>
                                                < MdEmojiEvents size={30} color='#EE4F6B' />
                                            </div>
                                            <h2>Events</h2>
                                        </div>

                                        <div className='flex gap-x-3 pl-2 items-center hover:bg-[#e7e6e650] py-2 rounded-md cursor-pointer'>
                                            <div className='h-[50px] w-[50px] bg-[#faf7f74b] rounded-full flex items-center justify-center'>
                                                < SiCoinmarketcap size={30} color='#338EEE' />
                                            </div>

                                            <div>
                                                <h2>Marketplace</h2>
                                                <p className='text-sm'>Listing</p>
                                            </div>

                                        </div>


                                    </div>

                                </div>
                            </div>


                        </div>
                    </div>
                )
            }

            {/* header message side bar */}

            {
                grid === 2 && (
                    <div className='h-[90vh] w-[25vw] bg-[#242526] fixed right-0 text-white z-10 top-[8%] '>
                        <div className='p-3 h-full'>
                            <div className='flex justify-between items-center'>
                                <h1 className='font-semibold text-[25px]'>Chats</h1>



                                <div className='flex justify-between gap-x-8'>
                                    <BsThreeDots size={25} className='cursor-pointer'  />
                                    <BsGrid size={25}  className='cursor-pointer'/>
                                    <BiEdit size={25}  className='cursor-pointer'/>
                                </div>
                            </div>

                            <div className='relative my-4'>
                                <input type="text" className='w-[97%] py-1 pl-12 h-[40px] bg-[#3A3B3C] rounded-3xl' placeholder='Search menu' />
                                <AiOutlineSearch className='absolute top-2 left-4' size={25} />
                            </div>

                            <div className='mt-3 flex gap-x-7'>
                                <h1 className='h-[45px] w-[80px] rounded-3xl flex items-center justify-center text-[20px] bg-[#6e7cff83] cursor-pointer' >Inbox</h1>
                                <h1 className='h-[45px] cursor-pointer w-[180px] rounded-3xl flex items-center justify-center text-[20px] bg-[#6e7cff83]'>Communities</h1>
                            </div>
                            <div className='mt-3 p-3 space-y-3'>
                                <div className='flex justify-between items-end'>
                                    <div className='flex gap-x-3  items-center' >
                                        <div className='w-[60px] h-[60px] relative'>
                                            <img src="/public/prifilepic/2.jpg" alt="" className='rounded-full h-full w-full ' />
                                            <div className='w-4 h-4 rounded-full absolute bottom-0 right-1 border border-black bg-green-500'></div>
                                        </div>
                                        <div className='cursor-pointer'>
                                            <h1>Md Raja</h1>
                                            <p className='text-sm text-[#e7e0e0b6]'> you: sent a photo .1d</p>
                                        </div>
                                    </div>
                                    <div className='h-3 w-3 rounded-full object-cover'>
                                        <img src="/public/img/raja.jpg" alt="" className='rounded-full h-full w-full ' />
                                    </div>
                                </div>

                                <div className='flex justify-between items-end'>
                                    <div className='flex gap-x-3  items-center' >
                                        <div className='w-[60px] h-[60px] relative'>
                                            <img src="https://scontent.fdac24-4.fna.fbcdn.net/v/t1.6435-1/144591699_2102006686596299_8739680933563269307_n.jpg?stp=c36.0.100.100a_dst-jpg_p100x100&_nc_cat=109&ccb=1-7&_nc_sid=f67be1&_nc_ohc=tD5NRUyfOwMAX9d31Ar&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdac24-4.fna&oh=00_AfAQdtcbKvpOL7w63eOy5mvV1AKNifZVq4TsrWRqgRJ8zA&oe=6520F537" alt="" className='rounded-full h-full w-full ' />
                                            <div className='w-4 h-4 rounded-full absolute bottom-0 right-1 border border-black bg-green-500'></div>
                                        </div>
                                        <div className='cursor-pointer'>
                                            <h1>Ruhul Amin Hridoy</h1>
                                            <p className='text-sm text-[#e7e0e0b6]'> you: sent a 😋🤩 photo .1d</p>
                                        </div>
                                    </div>
                                    <div className='h-3 w-3 rounded-full object-cover'>
                                        <img src="/public/img/raja.jpg" alt="" className='rounded-full h-full w-full ' />
                                    </div>


                                </div>


                                <div className='flex justify-between items-end'>
                                    <div className='flex gap-x-3  items-center' >
                                        <div className='w-[60px] h-[60px] relative'>
                                            <img src="/public/prifilepic/1.jpg" alt="" className='rounded-full h-full w-full ' />
                                            <div className='w-4 h-4 rounded-full absolute bottom-0 right-1 border border-black bg-green-500'></div>
                                        </div>
                                        <div className='cursor-pointer'>
                                            <h1>Sirazul Monir</h1>
                                            <p className='text-sm text-[#e7e0e0b6]'> you: sent a photo .1d</p>
                                        </div>
                                    </div>
                                    <div className='h-3 w-3 rounded-full object-cover'>
                                        <img src="/public/img/raja.jpg" alt="" className='rounded-full h-full w-full ' />
                                    </div>
                                </div>


                                <div className='flex justify-between items-end'>
                                    <div className='flex gap-x-3  items-center' >
                                        <div className='w-[60px] h-[60px] relative'>
                                            <img src="/public/prifilepic/3.jpg" alt="" className='rounded-full h-full w-full ' />

                                        </div>
                                        <div className='cursor-pointer'>
                                            <h1>Sirazul Monir</h1>
                                            <p className='text-sm text-[#e7e0e0b6]'> you: hi  .1d</p>
                                        </div>
                                    </div>

                                </div>

                                <div className='flex justify-between items-end'>
                                    <div className='flex gap-x-3  items-center' >
                                        <div className='w-[60px] h-[60px] relative'>
                                            <img src="/public/prifilepic/4.jpg" alt="" className='rounded-full h-full w-full ' />

                                        </div>
                                        <div className='cursor-pointer'>
                                            <h1>Anabi anika</h1>
                                            <p className='text-sm text-[#e7e0e0b6]'> আমি ঘুমে ছিলাম,  ডাটা অন ছিল,
                                                .1d</p>
                                        </div>
                                    </div>

                                </div>





                            </div>



                        </div>
                    </div>
                )
            }

            {/* header notification side bar */}

            {
                grid === 3 && (
                    <div className='h-[90vh] w-[25vw] bg-[#242526] fixed right-0 text-white z-10 top-[8%] overflow-y-scroll '>
                        <div className='p-3 h-full'>
                            <div className='flex justify-between items-center'>
                                <h1 className='font-semibold text-[25px]'>Notification</h1>
                                <div className='cursor-pointer'>
                                    <BsThreeDots size={25} />

                                </div>
                            </div>


                            <div className='mt-3 flex gap-x-7'>
                                <h1 className='h-[40px] w-[60px] rounded-3xl flex items-center justify-center  bg-[#6e7cff83] cursor-pointer' >All</h1>
                                <h1 className='h-[40px] cursor-pointer w-[100px] rounded-3xl flex items-center justify-center  bg-[#6e7cff83]'>Unread</h1>
                            </div>


                            <div className=' mt-3 flex justify-between items-center'>
                                <h1>New</h1>
                                <h1 className='text-blue-400'>See all</h1>
                            </div>



                            <div className='mt-2 space-y-3'>


                                <div className='flex justify-between items-end'>
                                    <div className='flex gap-x-3  items-center' >
                                        <div className='w-[60px] h-[60px] relative'>
                                            <img src="https://scontent.fdac24-3.fna.fbcdn.net/v/t39.30808-6/315100994_10209906491094779_654405519663392346_n.jpg?stp=c0.14.206.206a_dst-jpg_p206x206&_nc_cat=104&ccb=1-7&_nc_sid=0df3a7&_nc_ohc=jBLQGLyXJHgAX-Xwn7R&_nc_ht=scontent.fdac24-3.fna&oh=00_AfAtZQ9PdFKPxcmqhnRMYrIwyJ-eyz-VBbAAf-yBBhR_rA&oe=64FE928A" alt="" className='rounded-full h-full w-full ' />
                                            <div className='flex items-center justify-center w-8 h-8 rounded-full absolute -bottom-2 -right-2 border border-black bg-blue-600'>
                                                <BiSolidVideos size={20} />
                                            </div>
                                        </div>
                                        <div className='cursor-pointer w-[75%]'>

                                            <h1>Sirazul Monir <span className='text-sm'>mentioned you and other in a comment in Only argentina And messi Fans</span> </h1>
                                            <p className='text-sm text-blue-500'>1 hour ago</p>

                                        </div>
                                    </div>
                                    <div className='h-3 w-6   rounded-full bg-blue-600'>

                                    </div>
                                </div>

                                <div className='flex justify-between items-end'>
                                    <div className='flex gap-x-3  items-center' >
                                        <div className='w-[60px] h-[60px] relative'>
                                            <img src="https://scontent.fdac24-3.fna.fbcdn.net/v/t39.30808-6/362250096_646584860746302_8393201739586327565_n.jpg?stp=dst-jpg_p206x206&_nc_cat=106&ccb=1-7&_nc_sid=0df3a7&_nc_ohc=j0vb23yXhIYAX-lWlHD&_nc_ht=scontent.fdac24-3.fna&oh=00_AfCIYJQuMhl57gseo_I55D8Y7r5A6jwlqPj6B3RZMQxR8Q&oe=64FE5CFE" alt="" className='rounded-full h-full w-full ' />
                                            <div className='flex items-center justify-center w-8 h-8 rounded-full absolute -bottom-2 -right-2 border border-black bg-blue-600'>
                                                <MdGroups size={20} />
                                            </div>
                                        </div>
                                        <div className='cursor-pointer w-[75%]'>

                                            <h1> Md Raja <span className='text-sm'>mentioned you and other in a comment in Only argentina And messi Fans</span> </h1>
                                            <p className='text-sm text-blue-500'>1 hour ago</p>

                                        </div>
                                    </div>
                                    <div className='h-3 w-6   rounded-full bg-blue-600'>

                                    </div>
                                </div>

                                <div className='flex justify-between items-end'>
                                    <div className='flex gap-x-3  items-center' >
                                        <div className='w-[60px] h-[60px] relative'>
                                            <img src="/public/img/badhon.jpg" alt="" className='rounded-full h-full w-full object-cover' />
                                            <div className='flex items-center justify-center w-8 h-8 rounded-full absolute -bottom-2 -right-2 border border-black bg-red-600'>
                                                <BiSolidVideoPlus size={20} />
                                            </div>
                                        </div>
                                        <div className='cursor-pointer w-[75%]'>

                                            <h1> Muhammad badhon <span className='text-sm'>mentioned you and other in a comment in Only argentina And messi Fans</span></h1>
                                            <p className='text-sm text-blue-500'>1 hour ago</p>

                                        </div>
                                    </div>
                                    <div className='h-3 w-6   rounded-full bg-blue-600'>

                                    </div>
                                </div>

                                <div className='flex justify-between items-end'>
                                    <div className='flex gap-x-3  items-center' >
                                        <div className='w-[60px] h-[60px] relative'>
                                            <img src="https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/343650456_1499176367276407_6662264061293599157_n.jpg?stp=c55.0.206.206a_dst-jpg_p206x206&_nc_cat=111&ccb=1-7&_nc_sid=0df3a7&_nc_ohc=hkHoF9s093MAX9Es0hM&_nc_ht=scontent.fdac24-2.fna&oh=00_AfCnSHp9wUghd-3I57_KWjRZ6FqGWnocd1knUYFlWyO1dQ&oe=64FE97E8" alt="" className='rounded-full h-full w-full object-cover' />
                                            <div className='flex items-center justify-center w-8 h-8 rounded-full absolute -bottom-2 -right-2 border border-black '>
                                                <BsFillEmojiLaughingFill size={25} color='yellow' />
                                            </div>
                                        </div>
                                        <div className='cursor-pointer w-[75%]'>

                                            <h1> Ruhul Amin Hridoy <span className='text-sm'>reacted to a video you shared </span></h1>
                                            <p className='text-sm text-blue-500'>5 day ago</p>

                                        </div>
                                    </div>
                                    <div className='h-3 w-3   rounded-full bg-blue-600'>

                                    </div>
                                </div>

                                <div className='flex justify-between items-end'>
                                    <div className='flex gap-x-3  items-center' >
                                        <div className='w-[60px] h-[60px] relative'>
                                            <img src="https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-6/371847524_308054315102906_2095238230201194737_n.jpg?stp=dst-jpg_p206x206&_nc_cat=110&ccb=1-7&_nc_sid=0df3a7&_nc_ohc=t0bAG7kHK1UAX8n7QtX&_nc_ht=scontent.fdac24-1.fna&oh=00_AfBkCbgIz5nyXDegsh0cmzLD8Bv51uCpTo3r9VWQZ3um0g&oe=64FE1B30" alt="" className='rounded-full h-full w-full object-cover' />
                                            <div className='flex items-center justify-center w-8 h-8 rounded-full absolute -bottom-2 -right-2 border border-black '>
                                                <MdEmojiEmotions size={30} color='fuchsia' className='z-10' />
                                            </div>
                                        </div>
                                        <div className='cursor-pointer w-[75%]'>

                                            <h1> Shamej Bin Khalak<span className='text-sm'>reacted to a video you shared </span></h1>
                                            <p className='text-sm text-blue-500'>5 day ago</p>

                                        </div>
                                    </div>
                                    <div className='h-3 w-3   rounded-full bg-blue-600'>

                                    </div>
                                </div>




                                {/* last */}
                            </div>

                            <div className='my-4 border-b w-full  border-[#cac3c36b] '></div>
                            <div className=' my-3 flex justify-between items-center'>
                                <h1 className='text-[#f1ecec]'>Friend request</h1>
                                <h1 className='text-blue-400'>See all</h1>
                            </div>

                            <div className='space-y-3'>
                                <div className='mt-2'>
                                    <div className='flex gap-x-2'>
                                        <img src={'/img/raja.jpg'} alt='img' className='h-[50px] w-[60px] rounded-full object-fill' />

                                        <div className='w-full'>
                                            <div className='flex justify-between w-full'>
                                                <h1 className='text-[#dbe3f1]
                                font-semibold text-[20px]'>Md Raja king</h1>
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

                                <div className='mt-2'>
                                    <div className='flex gap-x-2'>
                                        <img src={'/img/badhon.jpg'} alt='img' className='h-[50px] w-[60px] rounded-full object-cover' />

                                        <div className='w-full'>
                                            <div className='flex justify-between w-full'>
                                                <h1 className='text-[#dbe3f1]
                                font-semibold text-[20px]'>Muhammad badhon</h1>
                                                <h1 className='text-[#cbd5e7]'>4d</h1>
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



                        </div>
                    </div>
                )
            }

            {/* header profile side bar */}

            {
                grid === 4 && (
                    <div className='min-h-[50vh] w-[25vw] bg-[#242526] fixed right-0 text-white z-10 top-[8%]  shadow-2xl'>
                        <div className='p-3 h-full'>

                            <div className='h-[14vh] w-full bg-[#282a2b] shadow-2xl rounded-md'>
                                <div className='flex justify-between p-3 items-center hover:bg-[#66666688] rounded-sm'>
                                    <div className='flex items-center gap-x-4'>
                                        <img src="/public/img/badhon.jpg" alt="img" className='h-[50px] w-[50px] rounded-full object-cover' />
                                        <h1 className='text-[#d6d6d6e7] cursor-pointer text-[20px]'>Muhammad badhon</h1>
                                    </div>
                                    <RxUpdate  size={28} color='' className='cursor-pointer'/>
                                </div>
                                
                            <div className='border-b border-[gray] w-[95%] mx-auto'></div>

                            <div className='flex justify-between p-3 hover:bg-[#66666688] rounded-md cursor-pointer mt-1'>
                                <h1 className='text-blue-500 cursor-pointer'> See all profiles</h1>

                                <h1 className='h-[28px] w-[50px]  flex items-center justify-center bg-red-600 rounded-3xl cursor-pointer'>69+</h1>
                            </div>

                            </div>

                            <div className=' mt-3 p-1 py-2 rounded-md flex justify-between hover:bg-[#8d898962] cursor-pointer items-center'>
                                <div className='flex gap-x-2 cursor-pointer items-center'>
                                    <div className='h-[40px] w-[40px] bg-[#bbb3b3a2] rounded-full flex items-center justify-center'><FaMeta size={25} className=''/></div>
                                    
                                    <h1>Meta Business Suite</h1>
                                </div>

                                <BsArrowUpRight size={25} className='cursor-pointer'/>

                            </div>

                            <div className=' mt-1 p-1 py-2 rounded-md flex justify-between hover:bg-[#8d898962] cursor-pointer items-center'>
                                <div className='flex gap-x-2 cursor-pointer items-center'>
                                    <div className='h-[40px] w-[40px] bg-[#bbb3b3a2] rounded-full flex items-center justify-center'><AiFillSetting size={25} className=''/></div>
                                    
                                    <h1>Settings & privacy</h1>
                                </div>

                                <IoIosArrowForward size={25} className='cursor-pointer'/>

                            </div>


                            <div className=' mt-1 p-1 py-2 rounded-md flex justify-between hover:bg-[#8d898962] cursor-pointer items-center'>
                                <div className='flex gap-x-2 cursor-pointer items-center'>
                                    <div className='h-[40px] w-[40px] bg-[#bbb3b3a2] rounded-full flex items-center justify-center'><BiSolidHelpCircle size={25} className=''/></div>
                                    
                                    <h1>Help & support</h1>
                                </div>

                                <IoIosArrowForward size={25} className='cursor-pointer'/>

                            </div>

                            <div className=' mt-1 p-1 py-2 rounded-md flex justify-between hover:bg-[#8d898962] cursor-pointer items-center'>
                                <div className='flex gap-x-2 cursor-pointer items-center'>
                                    <div className='h-[40px] w-[40px] bg-[#bbb3b3a2] rounded-full flex items-center justify-center'><BsMoonFill size={25} className=''/></div>
                                    
                                    <h1>Display & accessibility</h1>
                                </div>

                                <IoIosArrowForward size={25} className='cursor-pointer'/>

                            </div>

                            <div className=' mt-1 p-1 py-2 rounded-md flex justify-between hover:bg-[#8d898962] cursor-pointer items-center'>
                                <div className='flex gap-x-2 cursor-pointer items-center'>
                                    <div className='h-[40px] w-[40px] bg-[#bbb3b3a2] rounded-full flex items-center justify-center'><RiFeedbackFill size={25} className=''/></div>
                                    
                                    <h1>Give Feedback</h1>
                                </div>

                           

                            </div>


                            <div className=' mt-1 p-1 py-2 rounded-md flex justify-between hover:bg-[#8d898962] cursor-pointer items-center'>
                                <div className='flex gap-x-2 cursor-pointer items-center'>
                                    <div className='h-[40px] w-[40px] bg-[#bbb3b3a2] rounded-full flex items-center justify-center'><RiLogoutCircleRLine size={25} className=''/></div>
                                    
                                    <h1>Log Out</h1>
                                </div>

                          

                            </div>
                            





                        </div>
                    </div>
                )
            }
        </div>

    );
};

export default Header;