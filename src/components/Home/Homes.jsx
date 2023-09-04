import {useState} from 'react';
import Header from './Layout/Header';
import AllLeftSidebar from './../SideBar/MainSidebar/AllLeftSidebar';
import AllRightSide from '../SideBar/MainSidebar/AllRightSide';
import AllMiddleSide from '../SideBar/MainSidebar/AllMiddleSide';

const Home = () => {
    const [move, setMove] = useState(false)
    const [iconBorder, setIconBorder] = useState(1)

    const [open, setOpen] = useState(false)
    return (
        <div className='bg-[#18191A]'>
           <div className='fixed w-full top-0'>
           <Header move={move} setMove={setMove} iconBorder={iconBorder} setIconBorder={setIconBorder} open={open} setOpen={setOpen}/>
           </div>

            <div className=' mt-[70px] w-[100vw] flex 800px:justify-between justify-center'>
                <div className=' hidden 800px:block 800px:w-[27vw]'>
                   < AllLeftSidebar iconBorder={iconBorder}/>
                </div>

                <div className={`${iconBorder===2?'w-[100vw] 800px:w-[73vw]':'  800px:w-[46vw]'} ${iconBorder===3?'w-[100vw] 800px:w-[73vw]':'  800px:w-[46vw]'}`}>
                   < AllMiddleSide number={iconBorder}/>
                </div>

                <div className={` ${iconBorder===2?'hidden':' 800px:w-[27vw]  '} ${iconBorder===3?'hidden':' 800px:w-[27vw]  '}`}>
                   < AllRightSide icon={iconBorder} />
                </div>
            </div>
        </div>
    );
};

export default Home;