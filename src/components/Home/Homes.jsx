import { createContext, useEffect, useRef, useState } from 'react';
import Header from './Layout/Header';
import AllLeftSidebar from './../SideBar/MainSidebar/AllLeftSidebar';
import AllRightSide from '../SideBar/MainSidebar/AllRightSide';
import AllMiddleSide from '../SideBar/MainSidebar/AllMiddleSide';
import { RxCross1 } from 'react-icons/rx';
import { CgMenuGridR, CgProfile } from 'react-icons/cg';
import { RiMessengerFill } from 'react-icons/ri';
import { IoMdNotifications } from 'react-icons/io';
import { PiFilmReelDuotone } from 'react-icons/pi';
import { AiFillEdit, AiFillLike, AiFillStar, AiOutlineComment, AiOutlineShareAlt } from 'react-icons/ai';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';


import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { ImEarth } from 'react-icons/im';
import SingleVideoPlayer from '../Video';

export const ReelsContext = createContext()

const Home = () => {
    const [move, setMove] = useState(false)
    const [iconBorder, setIconBorder] = useState(1)
    const [menu, setMenu] = useState(0)
    const [open, setOpen] = useState(false)
    const [reels, setReels] = useState(false)


    // useEffect(() => {
        
    //     // Function to handle window resize
    //     const handleResize = () => {
    //       if (window.innerWidth <= 800) {
    //         setOpen(false);
    //       } else {
    //         setOpen(true);
    //       }
    //     };

    //     // Add event listener for window resize
    //     window.addEventListener('resize', handleResize);

    //     // Initial check and state update
    //     handleResize();

    //     // Cleanup the event listener when the component unmounts
    //     return () => {
    //       window.removeEventListener('resize', handleResize);
    //     };
    //   }, []);

    useEffect(() => {
        const badhon = () => {
            if (window.innerWidth <= 800) {
                setOpen(false)
            }
        }


        window.addEventListener('resize', badhon)
        badhon()
        return () => {
            window.removeEventListener('resize', badhon)
        }

    }, [])

    const videoRef = [
        "/reels/1.mp4",
        "/reels/2.mp4",
        "/reels/3.mp4",
        "/reels/4.mp4",
        "/reels/5.mp4",
        "/reels/6.mp4",
        "/reels/7.mp4",
        "/reels/8.mp4",
        "/reels/9.mp4",
        "/reels/10.mp4",
        "/reels/11.mp4",
        "/reels/12.mp4",
        "/reels/13.mp4"
    ]



    return (
        <div className=' bg-[#18191A]'>

            <ReelsContext.Provider value={{ reels, setReels }}>
                <div className={` ${reels ? 'hidden' : ' h-[8vh]'}`}>
                    <Header move={move} setMove={setMove} iconBorder={iconBorder} menu={menu} setMenu={setMenu} setIconBorder={setIconBorder} open={open} setOpen={setOpen} />
                </div>

                <div className={`${reels ? 'hidden' : null} w-full min-h-screen flex flex-col 800px:flex-row 800px:justify-between`} >


                    <div className='w-[25vw] '>
                        <AllLeftSidebar iconBorder={iconBorder} />
                    </div>

                    <div className={`${iconBorder === 2 || iconBorder === 3 || iconBorder === 5 ? ' w-full 800px:w-[75vw]' : null} ${iconBorder === 1 || iconBorder === 4 ? 'w-full 800px:w-[50vw]' : null} w-[50vw]`}>
                        <AllMiddleSide number={iconBorder} />
                    </div>

                    <div className={`${iconBorder === 2 || iconBorder === 3 || iconBorder === 5 ? 'hidden' : null} w-[25vw]`}>
                        <AllRightSide icon={iconBorder} />
                    </div>


                </div>

                {/* popup all things here start */}
                {
                    reels && (
                        <div className='h-full w-full fixed top-0 bg-[#000000]   p-5 text-white'>

                            <div className='flex justify-between '>
                              <div className='hidden 800px:block'>
                              <div className='flex gap-x-2 items-center h-[5vh] 800px:w-[35vw]'>
                                    <RxCross1 onClick={() => setReels(false)} size={30} className='cursor-pointer' />
                                    <img src='/img/facebook-logo.png' className='h-[40px] w-[50px] hidden 800px:block ' alt='img' />
                                    <h1 className='text-[30px] hidden 800px:block text-[#f3f0f0e7] font-semibold'>Reels</h1>
                                </div>
                              </div>

                                <div className='h-[96vh] w-full 800px:w-[35vw] bg-[#c4c1c123] rounded-md flex items-center relative'>

                                    <div className='flex gap-x-3 items-center justify-between absolute top-4 left-3 z-20 w-full '>
                                     <div className='flex gap-x-3'>
                                     <div className='h-[50px] w-[50px]'>
                                            <img src="/img/badhon.jpg" alt="" className='w-full h-full rounded-full' />
                                        </div>
                                      
                                        <div>
                                            <div className='flex gap-x-2'>
                                                <h1 className='text-[#4b531e]' >badhon</h1>
                                                <h1 className='text-blue-400 font-semibold'>Follow</h1>
                                            </div>

                                            <div className='flex gap-x-2 text-sm items-center'>
                                                <h1>1h</h1>
                                                <ImEarth size={15} />
                                            </div>


                                        </div>
                                       
                                     </div>
                                     <RxCross1 onClick={() => setReels(false)} size={30} className='mr-5  800px:hidden' />
                                    </div>
                                    <Swiper
                                        // install Swiper modules
                                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                                        spaceBetween={50}
                                        slidesPerView={1}
                                        navigation
                                        pagination={{ clickable: true }}
                                        scrollbar={{ draggable: true }}

                                    >
                                        {
                                            videoRef.map((v)=>(
                                                <>
                                                <SwiperSlide key={v}> <div  className='h-[95vh] w-full rounded-md '>
                                            <SingleVideoPlayer videoUrl={v}/></div></SwiperSlide>   
                                                </>
                                            ))
                                        }
                                      
                                        ...
                                    </Swiper>


                                </div>


                                <div className=' w-[15vw] 800px:w-[35vw] h-screen hidden 800px:block'>
                                    <div className='flex flex-col items-end w-full'>
                                        <div className='flex items-center gap-x-3 '>
                                            <div className='h-[40px] w-[40px] rounded-full bg-[#4E4F4F] flex items-center justify-center cursor-pointer' >
                                                <CgMenuGridR color={`'#C5C6CA'}`} size={27} />
                                            </div>

                                            <div className='h-[40px] w-[40px] rounded-full bg-[#4E4F4F] flex items-center justify-center cursor-pointer' >
                                                <RiMessengerFill color={`'#C5C6CA'`} size={27} />
                                            </div>
                                            <div className='h-[40px] w-[40px] rounded-full bg-[#4E4F4F] flex items-center justify-center cursor-pointer' >
                                                <IoMdNotifications color={`'#C5C6CA'`} size={27} />
                                            </div>
                                            <div className='h-[40px] w-[40px] rounded-full flex items-center justify-center cursor-pointer'>
                                                <CgProfile size={35} className='cursor-pointer' />
                                            </div>

                                        </div>
                                        <div className='h-[40px] w-[130px] bg-[gray] flex rounded-3xl mt-3 items-center  justify-center'>
                                            <h1 className='flex font-semibold  gap-x-1'><PiFilmReelDuotone size={25} /> Create Reel</h1>
                                        </div>
                                    </div>

                                    <div className='h-[87vh] w-full '>
                                        <div className='h-full w-full flex items-end'>
                                            <div className='flex justify-between w-full items-end p-5'>
                                                <div className='space-y-3'>





                                                    <div>
                                                        <div className='h-[45px] w-[45px] bg-[#a5a3a365] rounded-full flex justify-center items-center cursor-pointer'>
                                                            <AiFillStar size={25} />
                                                        </div>
                                                        <h1 className='text-[#f7f7f7c4]   font-semibold text-center'>Give!</h1>
                                                    </div>

                                                    <div>
                                                        <div className='h-[45px] w-[45px] bg-[#a5a3a365] rounded-full flex justify-center items-center cursor-pointer'>
                                                            <AiFillLike size={25} />
                                                        </div>
                                                        <h1 className='text-[#f7f7f7c4]  text-center font-semibold'>41.1k</h1>
                                                    </div>

                                                    <div>
                                                        <div className='h-[45px] w-[45px] bg-[#a5a3a365] rounded-full flex justify-center items-center cursor-pointer'>
                                                            <AiOutlineComment size={25} />
                                                        </div>
                                                        <h1 className='text-[#f7f7f7c4]  text-center font-semibold'>365</h1>
                                                    </div>

                                                    <div>
                                                        <div className='h-[45px] w-[45px] bg-[#a5a3a365] rounded-full flex justify-center items-center cursor-pointer'>
                                                            <AiOutlineShareAlt size={25} />
                                                        </div>
                                                        <h1 className='text-[#f7f7f7c4]  text-center font-semibold'>6k</h1>
                                                    </div>

                                                </div>
                                                <div className='h-[45px] w-[45px] bg-[#a5a3a365] rounded-full flex justify-center items-center cursor-pointer'><AiFillEdit size={25} /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                }

                {/* popup all things here end */}


            </ReelsContext.Provider>




        </div>
    );
};

export default Home;