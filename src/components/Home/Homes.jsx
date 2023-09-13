import { createContext, useEffect, useState } from 'react';
import Header from './Layout/Header';
import AllLeftSidebar from './../SideBar/MainSidebar/AllLeftSidebar';
import AllRightSide from '../SideBar/MainSidebar/AllRightSide';
import AllMiddleSide from '../SideBar/MainSidebar/AllMiddleSide';
import { RxCross1 } from 'react-icons/rx';

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

    return (
        <div className=' bg-[#18191A]'>

            <ReelsContext.Provider value={{ reels, setReels }}>
            <div className={` h-[8vh]`}>
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
                        <div className='h-full w-full absolute top-[8%] bg-red-400 '>
                            <RxCross1 onClick={() => setReels(false)} size={30} />
                        </div>
                    )
                }

                {/* popup all things here end */}


            </ReelsContext.Provider>




        </div>
    );
};

export default Home;