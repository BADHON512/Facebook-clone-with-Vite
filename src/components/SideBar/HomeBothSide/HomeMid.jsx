import { useState } from "react";
import { AiFillLike, AiOutlineComment, AiOutlineLike, AiOutlineShareAlt } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { ImEarth } from "react-icons/im";
import { RxCross1, RxPlusCircled } from "react-icons/rx"

const HomeMid = () => {
    const title = "hi this is my first post"
    const [showMore, setShowMore] = useState()
    const [like,setLike]=useState(1)

    return (
        <div className=' min-h-[300vh]  w-full  text-white '>

            <div className="p-3  ">


                <div className=" flex  w-full justify-center gap-x-2 overflow-x-scroll ">

                    <div className="h-[280px] w-[160px] bg-[#242526] rounded-md">
                        <div className="relative w-full h-[220px]">
                            <img src="/public/img/badhon.jpg" className="h-full object-cover rounded-t-md" alt="" />
                            <div className="absolute h-[45px] w-[45px] rounded-full bg-[#242526] -bottom-6 right-[35%] flex justify-center items-center"> <RxPlusCircled size={35} /></div>
                        </div>
                        <h1 className="mt-5 z-50 text-center">Create story</h1>
                    </div>
                    <Story name={'Badhon'} pro={'/public/img/badhon.jpg'} bg={'/public/img/raja.jpg'} />
                    <Story name={'Badhon'} pro={'/public/img/badhon.jpg'} bg={'/public/img/raja.jpg'} />
                    <Story name={'Badhon'} pro={'/public/img/badhon.jpg'} bg={'/public/img/raja.jpg'} />
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

                        <div className='p-1 mt-3  items-center '>

                            <div className='flex justify-center 500px:justify-between'>

                                <div className='flex gap-x-20 500px:gap-x-10 800px:gap-x-5'>
                                    <div className='flex gap-x-2 items-center cursor-pointer'>
                                        <AiFillLike className="text-blue-400" size={30} />
                                        <h1 className='text-sm text-[#d3d3d3] hidden 800px:block'>Like</h1>
                                    </div>

                                    <div className='flex gap-x-2 items-center cursor-pointer'>
                                        <AiOutlineComment size={30} />
                                        <h1 className='text-sm text-[#d3d3d3] hidden 800px:block'>Comment</h1>
                                    </div>

                                    <div className='flex gap-x-2 items-center cursor-pointer'>
                                        <AiOutlineShareAlt size={30} />
                                        <h1 className='text-sm text-[#d3d3d3] hidden 800px:block'>Share</h1>
                                    </div>
                                </div>
                                <div className='hidden 500px:flex gap-x-3 items-center 400px:flex-col 800px:flex-col 1000px:flex-row '>
                                    <div className='flex cursor-pointer'>
                                        <h1 className='text-sm text-[#d3d3d3] flex' ><span className=' hidden 800px:block '>you sk Shakil and </span>105k others .</h1>
                                    </div>

                                    <div className='flex gap-x-3 cursor-pointer' >
                                        <h1 className='text-sm text-[#d3d3d3]'>2.4k comment .</h1>
                                        <h1 className='text-sm text-[#d3d3d3]'>815k views</h1>
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