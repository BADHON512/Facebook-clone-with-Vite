import { useEffect, useState } from 'react';
import Header from './Layout/Header';
import AllLeftSidebar from './../SideBar/MainSidebar/AllLeftSidebar';
import AllRightSide from '../SideBar/MainSidebar/AllRightSide';
import AllMiddleSide from '../SideBar/MainSidebar/AllMiddleSide';

const Home = () => {
    const [move, setMove] = useState(false)
    const [iconBorder, setIconBorder] = useState(1)
    const [menu, setMenu] = useState(0)

    const [open, setOpen] = useState(false)


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
            <div className='h-[8vh]'>
                <Header move={move} setMove={setMove} iconBorder={iconBorder} menu={menu} setMenu={setMenu} setIconBorder={setIconBorder} open={open} setOpen={setOpen} />
            </div>


            <div className='w-full min-h-screen flex flex-col 800px:flex-row 800px:justify-between '>

                <div className='w-[27vw] '>
                    <AllLeftSidebar iconBorder={iconBorder} />
                </div>

                <div className={`${iconBorder === 2 || iconBorder === 3 ? ' w-full 800px:w-[73vw]' : null} w-[46vw]`}>
                    <AllMiddleSide number={iconBorder} />
                </div>

                <div className={`${iconBorder === 2 ? 'hidden' : null} ${iconBorder === 3 ? 'hidden' : null} w-[27vw]`}>
                    <AllRightSide icon={iconBorder} />
                </div>
            </div>

        </div>
    );
};

export default Home;