import React, { useState } from 'react';
import { AiOutlineComment, AiOutlineShareAlt, AiTwotoneLike } from 'react-icons/ai';
import { BiLike, BiSolidHeart } from 'react-icons/bi';
import { BsThreeDots } from 'react-icons/bs';
import { ImEarth } from 'react-icons/im';
import { RxCross1 } from 'react-icons/rx';

const GroupsMid = () => {
    const title = "hi this is my first post"
    const [showMore, setShowMore] = useState()
    const [emoji, setEmoji] = useState(1)
    const [lcm, setLcm] = useState(false)
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className='min-h-[200vh] w-full text-white'>
            <div className='p-3'>
           
            <div className="w-full min-h-[70vh] bg-[#242526] rounded-sm">
                    <div className="p-3">
                        <div className="flex justify-between">
                            <div className="flex gap-x-2">
                                <img src="/img/badhon.jpg" className="h-[50px] w-[50px] rounded-full" alt="" />
                                <div className="">
                                    <h1 className="text-[#f5f2f2] ">Muhammad Badhon</h1>

                                    <p className="flex items-center gap-x-1 text-[#e7ddddd3]">1h . <ImEarth /></p>
                                </div>

                            </div>

                            <div className="flex gap-x-4 items-center cursor-pointer">
                                <BsThreeDots size={20} />
                                <RxCross1 size={20} />
                            </div>



                        </div>

                        <div className="p-1">
                            <h1 className="text-[18px]"> recently watched movie</h1>
                        </div>

                        <div className="h-[70vh] w-full bg-red-300">
                            <div className="h-full">
                                <img src="/img/cinema.png" className="h-full w-full object-cover" alt="" />
                            </div>
                        </div>


                        <div className='p-1  items-center '>

                            <div className=" my-2 px-6 800px:px-8 flex justify-between ">
                                <div className="flex items-center relative" >
                                    {
                                        lcm ? (<div className="h-[25px] w-[25px] "></div>) : (
                                            <>
                                                <div className="h-[25px] w-[25px] rounded-full flex items-center justify-center bg-[#0981EB] cursor-pointer">
                                                    <AiTwotoneLike color="" />
                                                </div>

                                                <div className="h-[25px] w-[25px] rounded-full flex items-center justify-center bg-[red] cursor-pointer">
                                                    <BiSolidHeart color="" size={20} /></div>
                                                <h1 className="pl-2  font-semibold text-[#b6afafd7]">23</h1>
                                            </>
                                        )
                                    }
                                    {lcm && (
                                        <div
                                            onMouseEnter={() => setLcm(true)}
                                            onMouseLeave={() => setLcm(false)}
                                            className={` absolute   left-0 w-[20vw] h-[8vh] flex justify-between items-center `}
                                        >
                                            <div onClick={() => {
                                                setEmoji(1)
                                                setLcm(false)
                                            }} className="h-[7vh] w-[5vw] flex justify-center items-center cursor-pointer "><img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/e4299734559659.56d57de04bda4.gif" alt="img" className="rounded-full object-cover w-full h-full" /></div>

                                            <div onClick={() => {
                                                setEmoji(2)
                                                setLcm(false)
                                            }} className="h-[7vh] w-[5vw] flex justify-center items-center cursor-pointer "><img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/65ea2034559659.56d57de06cea2.gif" alt="img" className="rounded-full object-cover w-full h-full" /></div>

                                            <div
                                                onClick={() => {
                                                    setEmoji(3)
                                                    setLcm(false)
                                                }}
                                                className="h-[5vh] w-[4vw] flex justify-center items-center cursor-pointer image-container"><img src="https://3.bp.blogspot.com/-e1XZARSWmQc/Vtz13x2JrkI/AAAAAAAALp8/PWQfmrcSidY/s320/wow.png" alt="img" className="rounded-full object-right-bottom w-full h-full" /></div>

                                            <div
                                                onClick={() => {
                                                    setEmoji(4)
                                                    setLcm(false)
                                                }} className="h-[7vh] w-[5vw] flex justify-center items-center cursor-pointer "><img src="https://th.bing.com/th/id/R.b07072338a16f91b8c68ab0e4e7187a7?rik=Q8yKIox4GRWwhw&riu=http%3a%2f%2fthebakerwanderer.com%2fwp-content%2fplugins%2fdaftplug-facebook-reactions%2%2fassets%2fimg%2freactions%2f3d%2ficon-haha.gif&ehk=FFs%2fPuE5%2bRI7FiKYX1xHfq24ttxnKxEUwVGfxOIgs04%3d&risl=&pid=ImgRaw&r=0" alt="img" className="rounded-full object-cover w-full h-full" /></div>

                                            <div onClick={() => {
                                                setEmoji(5)
                                                setLcm(false)
                                            }} className="h-[5vh] w-[4vw] flex justify-center items-center cursor-pointer "><img src="https://c.tenor.com/Zg16oq2L2CIAAAAM/angry-emoji.gif" alt="img" className="rounded-full object-cover w-full h-full" /></div>



                                        </div>
                                    )}
                                </div>

                                <div className="cursor-pointer">
                                    <h1 className="text-sm">3 Comment</h1>
                                </div>

                            </div>


                            <div className='flex justify-center 500px:justify-between border-b border-[#554f4fe0] border-t py-2 '>

                                <div className='flex justify-evenly w-full'>
                                    <div className='flex gap-x-2 items-center cursor-pointer  hover:bg-[#ddd4d433] w-[12vw] py-1 justify-center rounded-md'>
                                        {
                                            emoji === 1 && (<>
                                                <BiLike onMouseEnter={() => {
                                                    setTimeout(() => {
                                                        setLcm(true)
                                                    }, 1000)

                                                }}
                                                    onMouseLeave={() => setLcm(false)}
                                                    className="text-blue-400 transition delay-700 duration-300 " size={30} />
                                                <h1 className='text-sm text-[#d3d3d3] hidden 800px:block'>Like</h1>

                                            </>) || emoji === 2 && (<>
                                                <div
                                                    onMouseEnter={() => {
                                                        setTimeout(() => {
                                                            setLcm(true)
                                                        }, 1000)

                                                    }}
                                                    onMouseLeave={() => setLcm(false)}
                                                    className="flex gap-x-2">
                                                    <img src="https://th.bing.com/th/id/OIP.DfYt9u9HcJNcBdJVpzDcCwHaHa?pid=ImgDet&w=362&h=362&rs=1" className="h-[3vh] w-[2vw] rounded-full" alt="" />
                                                </div>
                                                <h1 className="text-red-300">Love</h1>
                                            </>) || emoji === 3 && (<>
                                                <div
                                                    onMouseEnter={() => {
                                                        setTimeout(() => {
                                                            setLcm(true)
                                                        }, 1000)

                                                    }}
                                                    onMouseLeave={() => setLcm(false)}
                                                    className="flex gap-x-2">
                                                    <img src="https://3.bp.blogspot.com/-e1XZARSWmQc/Vtz13x2JrkI/AAAAAAAALp8/PWQfmrcSidY/s320/wow.png" className="h-[3vh] w-[2vw] rounded-full" alt="" />
                                                </div>
                                                <h1 className="">Wow</h1>
                                            </>) || emoji === 4 && (<>
                                                <div
                                                    onMouseEnter={() => {
                                                        setTimeout(() => {
                                                            setLcm(true)
                                                        }, 1000)

                                                    }}
                                                    onMouseLeave={() => setLcm(false)}
                                                    className="flex gap-x-2">
                                                    <img src="https://www.pngfind.com/pngs/m/690-6902138_facebook-like-button-emoji-emoticon-facebook-haha-reaction.png" className="h-[3vh] w-[2vw] rounded-full flex items-center justify-center" alt="" />
                                                </div>
                                                <h1 className="">Haha</h1>
                                            </>) || emoji === 5 && (<>
                                                <div
                                                    onMouseEnter={() => {
                                                        setTimeout(() => {
                                                            setLcm(true)
                                                        }, 1000)

                                                    }}
                                                    onMouseLeave={() => setLcm(false)}
                                                    className="flex gap-x-2  ">
                                                    <img src="https://th.bing.com/th/id/R.aa53a8eb2f160456ef9cf85e79368d2a?rik=QztXm203P1g7qQ&pid=ImgRaw&r=0" className="h-[3vh] w-[2vw] rounded-full" alt="" />

                                                </div>
                                                <h1 className="text-red-500">Angry</h1>
                                            </>)
                                        }

                                    </div>

                                    <div className='flex gap-x-2 items-center cursor-pointer hover:bg-[#ddd4d433] w-[12vw] py-1 justify-center rounded-md'>
                                        <AiOutlineComment size={30} className="" />
                                        <h1 className='text-sm text-[#d3d3d3] hidden 800px:block'>Comment</h1>
                                    </div>

                                    <div className='flex gap-x-2 items-center cursor-pointer hover:bg-[#ddd4d433] w-[12vw] py-1 justify-center rounded-md'>
                                        <AiOutlineShareAlt size={30} />
                                        <h1 className='text-sm text-[#d3d3d3] hidden 800px:block'>Share</h1>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>



                </div>
           
            </div>

        </div>
    );
};

export default GroupsMid;