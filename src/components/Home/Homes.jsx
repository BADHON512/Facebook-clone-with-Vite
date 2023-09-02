import {useState} from 'react';
import Header from './Layout/Header';
import AllLeftSidebar from './../SideBar/MainSidebar/AllLeftSidebar';
import AllRightSide from '../SideBar/MainSidebar/AllRightSide';
import AllMiddleSide from '../SideBar/MainSidebar/AllMiddleSide';

const Home = () => {
    const [move, setMove] = useState(false)
    const [iconBorder, setIconBorder] = useState(1)
    console.log(iconBorder)
    const [open, setOpen] = useState(false)
    return (
        <div className='bg-[#18191A]'>
            <Header move={move} setMove={setMove} iconBorder={iconBorder} setIconBorder={setIconBorder} open={open} setOpen={setOpen}/>

            <div className='h-full w-full flex justify-between'>
                <div className='w-[27vw]'>
                   < AllLeftSidebar iconBorder={iconBorder}/>
                </div>

                <div className={`${iconBorder===2?'w-[73vw]':'w-[46vw]'}`}>
                   < AllMiddleSide number={iconBorder}/>
                </div>

                <div className={` ${iconBorder===2?'hidden':'w-[27vw]'} `}>
                   < AllRightSide icon={iconBorder} />
                </div>
            </div>
        </div>
    );
};

export default Home;