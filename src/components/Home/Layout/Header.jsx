import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { AiOutlineHome } from 'react-icons/ai'
import { MdOutlineOndemandVideo } from 'react-icons/md'
import { SiHomeassistantcommunitystore } from 'react-icons/si'
import { HiUserGroup } from 'react-icons/hi'
import { FaGamepad } from 'react-icons/fa'
import { CgMenuGridR, CgProfile } from 'react-icons/cg'
import { RiMessengerFill } from 'react-icons/ri'
import { IoMdNotifications } from 'react-icons/io'
import { useState } from 'react'





const Header = ({ move, setMove, open, setOpen, iconBorder, setIconBorder }) => {
    const[grid ,setGrid]=useState(false)

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
                                <div className='h-[40px] w-[40px] rounded-full bg-[#4E4F4F] flex items-center justify-center cursor-pointer'>
                                    <CgMenuGridR onClick={()=>setGrid(!grid)} color='#C5C6CA' size={27} />
                                </div>

                                <div className='h-[40px] w-[40px] rounded-full bg-[#4E4F4F] flex items-center justify-center cursor-pointer'>
                                    <RiMessengerFill color='#C5C6CA' size={27} />
                                </div>
                                <div className='h-[40px] w-[40px] rounded-full bg-[#4E4F4F] flex items-center justify-center cursor-pointer'>
                                    <IoMdNotifications color='#C5C6CA' size={27} />
                                </div>
                                <div className='h-[40px] w-[40px] rounded-full flex items-center justify-center cursor-pointer'>
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
                grid&&(
                    <div className='h-[90vh] w-[45vw] bg-[#242526] fixed right-0 text-white z-10 top-[8%] '>
                    <div className='p-3 h-full'>
                          <h1 className='font-sans font-bold text-[30px]'>Menu</h1> 

                          <div className='flex h-full justify-between w-full'>

                            <div className='w-[60%] h-[83vh] p-3 bg-[#18191A] rounded-md'>


                            </div>

                            <div className='w-[38%] h-[83vh] p-3 bg-[#18191A] rounded-md'>

                                
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