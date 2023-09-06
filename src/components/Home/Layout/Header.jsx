import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import { IoIosArrowRoundBack, IoLogoGameControllerB } from 'react-icons/io'
import { AiOutlineHome } from 'react-icons/ai'
import { MdBloodtype, MdCrisisAlert, MdEmojiEvents, MdGroups, MdOutlineOndemandVideo } from 'react-icons/md'
import { SiCoinmarketcap,  SiHomeassistantcommunitystore } from 'react-icons/si'
import { HiSpeakerphone, HiUserGroup } from 'react-icons/hi'
import { FaGamepad, FaHeart, FaUserFriends } from 'react-icons/fa'
import { CgMenuGridR, CgProfile } from 'react-icons/cg'
import { RiMemoriesFill, RiMessengerFill, RiSecurePaymentFill } from 'react-icons/ri'
import { IoMdNotifications } from 'react-icons/io'
import { useState } from 'react'
import { BsBookHalf, BsFillFlagFill, BsFillTreeFill, BsGrid, BsThreeDots } from 'react-icons/bs'
import { TbActivity } from 'react-icons/tb'
import { BiEdit, BiSolidVideoPlus } from 'react-icons/bi'
import { PiFilmReelDuotone } from 'react-icons/pi'





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
                        <div className='w-[15%]'>
                            <div className={`${move ? "hidden" : null} flex items-center gap-x-2`}>
                                <img src='/img/facebook-logo.png' className='h-[40px] w-[50px] ' alt='img' />
                                <AiOutlineSearch onClick={() => setMove(true)} color='white' size={25} className='cursor-pointer' />
                            </div>
                            {
                                move && (
                                    <div className='flex gap-x-3 items-center'>
                                        <IoIosArrowRoundBack size={25} onClick={() => setMove(false)} className='cursor-pointer' />
                                        <div>
                                            <input type="text" className='appearance-none h-[30px] w-[160px] outline-none rounded-2xl bg-[#686666a1] p-2  ' />
                                        </div>
                                    </div>
                                )
                            }


                        </div>


                        {/* header middle icon */}

                        <div>
                            <div className=' hidden 800px:flex 800px:items-center 800px:gap-x-14 '>
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
                                    <CgMenuGridR color='#C5C6CA' size={27} />
                                </div>

                                <div className='h-[40px] w-[40px] rounded-full bg-[#4E4F4F] flex items-center justify-center cursor-pointer' onClick={() => toggleTab(2)}>
                                    <RiMessengerFill color='#C5C6CA' size={27} />
                                </div>
                                <div className='h-[40px] w-[40px] rounded-full bg-[#4E4F4F] flex items-center justify-center cursor-pointer' onClick={() => toggleTab(3)}>
                                    <IoMdNotifications color='#C5C6CA' size={27} />
                                </div>
                                <div className='h-[40px] w-[40px] rounded-full flex items-center justify-center cursor-pointer' onClick={() => toggleTab(4)}>
                                    <CgProfile size={35} className='cursor-pointer' />
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
                                            < BiEdit size={35} color='#F7C547' />       </div>
                                            <h2>Post</h2>
                                        </div>

                                        <div className='flex gap-x-3 pl-2 items-center hover:bg-[#e7e6e650] py-2 rounded-md cursor-pointer'>
                                        <div className='h-[50px] w-[50px] bg-[#faf7f74b] rounded-full flex items-center justify-center'>
                                            < BsBookHalf size={35} color='#3183DD' /></div>
                                            <h2>Story</h2>       
                                        </div>

                                        <div className='flex gap-x-3 pl-2 items-center hover:bg-[#e7e6e650] py-2 rounded-md cursor-pointer'>
                                        <div className='h-[50px] w-[50px] bg-[#faf7f74b] rounded-full flex items-center justify-center'>
                                            < PiFilmReelDuotone size={35} color='white' />       </div>
                                            <h2>Reel</h2>
                                        </div>

                                        <div className='flex gap-x-3 pl-2 items-center hover:bg-[#e7e6e650] py-2 rounded-md cursor-pointer'>
                                        <div className='h-[50px] w-[50px] bg-[#faf7f74b] rounded-full flex items-center justify-center'>
                                            < BiSolidVideoPlus size={35} color='#DE58B9' />       </div>
                                            <h2>Room</h2>
                                        </div>

                                        <div className='w-full border-b-[1px] border-[#3E4042] my-3 '></div>



                                        <div className='flex gap-x-3 pl-2 items-center hover:bg-[#e7e6e650] py-2 rounded-md cursor-pointer'>
                                        <div className='h-[50px] w-[50px] bg-[#faf7f74b] rounded-full flex items-center justify-center'>
                                            < BsFillFlagFill size={35} color='#ED6A40' /></div>
                                            <h2>Pages</h2>
                                        </div>

                                        <div className='flex gap-x-3 pl-2 items-center hover:bg-[#e7e6e650] py-2 rounded-md cursor-pointer'>
                                        <div className='h-[50px] w-[50px] bg-[#faf7f74b] rounded-full flex items-center justify-center'>
                                            < HiSpeakerphone size={35} color='#338EEE' /> </div>
                                            <h2>Ad center</h2>
                                        </div>

                                        <div className='flex gap-x-3 pl-2 items-center hover:bg-[#e7e6e650] py-2 rounded-md cursor-pointer'>
                                        <div className='h-[50px] w-[50px] bg-[#faf7f74b] rounded-full flex items-center justify-center'>
                                            < MdGroups size={35} color='#40B8E1' />
                                            </div>
                                            <h2>Groups</h2>
                                        </div>

                                        <div className='flex gap-x-3 pl-2 items-center hover:bg-[#e7e6e650] py-2 rounded-md cursor-pointer'>
                                        <div className='h-[50px] w-[50px] bg-[#faf7f74b] rounded-full flex items-center justify-center'>
                                            < MdEmojiEvents size={35} color='#EE4F6B' />
                                            </div>
                                            <h2>Events</h2>
                                        </div>

                                        <div className='flex gap-x-3 pl-2 items-center hover:bg-[#e7e6e650] py-2 rounded-md cursor-pointer'>
                                            <div className='h-[50px] w-[50px] bg-[#faf7f74b] rounded-full flex items-center justify-center'>
                                                < SiCoinmarketcap size={35} color='#338EEE' />
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
                                    <BsThreeDots size={25}/>
                                    <BsGrid size={25}/>
                                    <BiEdit size={25}/>
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



                        </div>
                    </div>
                )
            }

            {/* header notification side bar */}

            {
                grid === 3 && (
                    <div className='h-[90vh] w-[25vw] bg-[#242526] fixed right-0 text-white z-10 top-[8%] '>
                        <div className='p-3 h-full'>
                              <h1>notification</h1>


                        </div>
                    </div>
                )
            }

            {/* header profile side bar */}

            {
                grid === 4 && (
                    <div className='h-[90vh] w-[25vw] bg-[#242526] fixed right-0 text-white z-10 top-[8%] '>
                        <div className='p-3 h-full'>
                            profile


                        </div>
                    </div>
                )
            }
        </div>

    );
};

export default Header;