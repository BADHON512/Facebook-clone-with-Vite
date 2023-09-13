import { useEffect, useState } from "react";
import { AiOutlineComment, AiOutlineShareAlt, AiTwotoneLike } from "react-icons/ai";
import { BsEmojiLaughing, BsThreeDots } from "react-icons/bs";
import { ImEarth, ImImages } from "react-icons/im";

import { RxCross1, RxPlusCircled } from "react-icons/rx"
import { BiLike, BiSolidHeart, BiSolidVideoPlus } from "react-icons/bi";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const HomeMid = () => {

    const title = "hi this is my first post"
    const [showMore, setShowMore] = useState()
    const [emoji, setEmoji] = useState(1)
    const [lcm, setLcm] = useState(false)
    const [isHovered, setIsHovered] = useState(false);

      
    useEffect(()=>{
       const badhon=()=>{
        if(window.innerWidth<=900){
            setIsHovered(true)
        }else{
            setIsHovered(false)
        }}
        
        window.addEventListener("resize",badhon)

        badhon()

        return()=>{
            window.removeEventListener('resize',badhon)
        }
        
       
    },[])



    return (
        
        <div className=' min-h-[250vh]  w-full  text-white '>
            

            <div className="p-3  ">


                <div className=" flex  justify-center my-3  w-full">

                    <Swiper
                        
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={10}
                        slidesPerView={isHovered?3:4}
                        navigation
                        pagination={{ clickable: true }}
                    >


                        <SwiperSlide>
                            <div className="h-[280px] w-[160px] bg-[#242526] rounded-md">
                                <div className="relative w-full h-[220px]">
                                    <img src="/public/img/badhon.jpg" className="h-full object-cover rounded-t-md" alt="" />
                                    <div className="absolute h-[45px] w-[45px] rounded-full bg-[#242526] -bottom-6 right-[35%] flex justify-center items-center"> <RxPlusCircled size={35} color="" /></div>
                                </div>
                                <h1 className="mt-5 z-50 text-center">Create story</h1>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>   <Story name={'Rony Ahmmad...'} pro={'https://scontent.fdac24-3.fna.fbcdn.net/v/t39.30808-6/375972112_142302548947717_596915734567510480_n.jpg?stp=dst-jpg_s206x206&_nc_cat=106&ccb=1-7&_nc_sid=0df3a7&_nc_ohc=Eq_47GLlMY4AX--dUFe&_nc_ht=scontent.fdac24-3.fna&oh=00_AfAW-ObeR6eVEJS252s0cRYSoaQfYVgOiLepKcSeQ9_eAw&oe=650365E7'} bg={'https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-6/376915087_142302798947692_3598951661042790503_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=fe3215&_nc_ohc=MXjhTFXkbWIAX-VOhjR&_nc_ht=scontent.fdac24-1.fna&oh=00_AfAJo4jW7RfAbWEFKI6nQURYKfd7EK3b--cmxdzSFISC3Q&oe=6502233E'} /></SwiperSlide>
                        <SwiperSlide><Story name={'Alo'} pro={'https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/363309959_781137177140082_8556437414141393592_n.jpg?stp=dst-jpg_p206x206&_nc_cat=108&ccb=1-7&_nc_sid=0df3a7&_nc_ohc=OHHokdGGYZ8AX_n3NzO&_nc_ht=scontent.fdac24-2.fna&oh=00_AfDmwI76oKDrlawo2vevr8ly27r0WluHU5-nuXtnzmp_3A&oe=6503A954'} bg={'https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/376751232_806614431259023_2387917054158197577_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=fe3215&_nc_ohc=zYJNexYPdIQAX_ROj44&_nc_ht=scontent.fdac24-2.fna&oh=00_AfCPkffbqH1iZrmPEzik0U-sW2E0H3fl7P6gH_hD0QlVgQ&oe=65025BE8'} /></SwiperSlide>
                        <SwiperSlide><Story name={'Badhon'} pro={'/public/img/badhon.jpg'} bg={'https://scontent.fdac24-3.fna.fbcdn.net/v/t39.30808-6/375863122_10224322151780654_3516452607410389827_n.jpg?stp=dst-jpg_s640x640&_nc_cat=1&ccb=1-7&_nc_sid=5614bc&_nc_ohc=LAw0_XGMvqsAX9j5bir&_nc_ht=scontent.fdac24-3.fna&oh=00_AfCG9-eQRe3DBi_C8K2e8i-6kt3nRNV50gPB4VFXIXuVgw&oe=65022DE6'} /></SwiperSlide><SwiperSlide><Story name={'Badhon'} pro={'/public/img/badhon.jpg'} bg={'/public/img/raja.jpg'} /></SwiperSlide>
                    </Swiper>



                </div>

                <div className="min-h-[15vh] w-full bg-[#242526] mb-4 rounded-md">
                    <div className="p-3 w-full ">
                        <div className=" flex gap-x-2 items-center ">
                            <img src="/public/img/badhon.jpg" className="h-[50px] w-[50px] rounded-full cursor-pointer" alt="" />
                            <div className="w-full">
                                <input type="text" className="appearance-none p-2 pl-5 w-full outline-none bg-[#c9c5c538] rounded-3xl" placeholder="What's on your mind, Muhammad?" name="" id="" />
                            </div>
                        </div>
                        <div className=" border-b border-[#dad3d34d] w-full my-3"></div>

                        <div className="flex justify-evenly">
                            <div className="flex gap-x-2 hover:bg-[#ddd4d433] w-[12vw] py-1 justify-center rounded-md cursor-pointer items-center ">
                                <BiSolidVideoPlus size={30} color="#F13D5B" />
                                <h1 className="font-semibold hidden 800px:block">Live video</h1>

                            </div>

                            <div className="flex gap-x-2 hover:bg-[#ddd4d433] w-[12vw] py-1 justify-center rounded-md cursor-pointer items-center ">
                                <ImImages size={30} color="#58C472" />
                                <h1 className="font-semibold hidden 800px:block">Photo/video</h1>

                            </div>


                            <div className="flex gap-x-2 hover:bg-[#ddd4d433] w-[12vw] py-1 justify-center rounded-md cursor-pointer items-center ">
                                <BsEmojiLaughing size={30} color="#BA943D" />
                                <h1 className="font-semibold hidden 800px:block">Feeling/activity</h1>

                            </div>


                        </div>

                    </div>
                </div>


                <div className="w-full min-h-[70vh] bg-[#242526] rounded-sm">
                    <div className="p-3">
                        <div className="flex justify-between">
                            <div className="flex gap-x-2">
                                <img src="/public/img/badhon.jpg" className="h-[50px] w-[50px] rounded-full" alt="" />
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
                            <h1 className="text-[18px]"> This is my first post on facebook</h1>
                        </div>

                        <div className="h-[70vh] w-full bg-red-300">
                            <div className="h-full">
                                <img src="/public/img/badhon.jpg" className="h-full w-full object-cover" alt="" />
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
                                                }} className="h-[7vh] w-[5vw] flex justify-center items-center cursor-pointer "><img src="https://th.bing.com/th/id/R.b07072338a16f91b8c68ab0e4e7187a7?rik=Q8yKIox4GRWwhw&riu=http%3a%2f%2fthebakerwanderer.com%2fwp-content%2fplugins%2fdaftplug-facebook-reactions%2fpublic%2fassets%2fimg%2freactions%2f3d%2ficon-haha.gif&ehk=FFs%2fPuE5%2bRI7FiKYX1xHfq24ttxnKxEUwVGfxOIgs04%3d&risl=&pid=ImgRaw&r=0" alt="img" className="rounded-full object-cover w-full h-full" /></div>

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

const Story = ({ name, pro, bg }) => {

    return (
        <div className="h-[280px] w-[160px] bg-red-500 rounded-md">
            <div className="relative w-full h-[280px]">
                <img src={bg} className="h-full object-cover  rounded-md " alt="" />

                <div className="absolute top-2 left-2 h-[48px] w-[48px] rounded-full ">
                    <img src={pro} alt="" className="h-full w-full rounded-full border border-blue-500" />
                </div>

                <h1 className="absolute bottom-2 font-semibold text-center mx-auto px-1" >{name}</h1>


            </div>
        </div>
    )
}

export default HomeMid;