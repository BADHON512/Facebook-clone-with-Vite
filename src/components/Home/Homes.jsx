import {useState} from 'react';
import Header from './Layout/Header';
import AllLeftSidebar from './../SideBar/MainSidebar/AllLeftSidebar';
import AllRightSide from '../SideBar/MainSidebar/AllRightSide';
import AllMiddleSide from '../SideBar/MainSidebar/AllMiddleSide';

const Home = () => {
    const [move, setMove] = useState(false)
    const [iconBorder, setIconBorder] = useState(0)
    const [open, setOpen] = useState(false)
    return (
        <div>
            <Header move={move} setMove={setMove} iconBorder={iconBorder} setIconBorder={setIconBorder} open={open} setOpen={setOpen}/>

            <div className='h-full w-full flex justify-between'>
                <div className='w-[27vw]'>
                   < AllLeftSidebar/>
                </div>

                <div className='w-[46vw]'>
                   < AllMiddleSide/>
                </div>

                <div className='w-[27vw]'>
                   < AllRightSide/>
                </div>
            </div>
        </div>
    );
};

export default Home;