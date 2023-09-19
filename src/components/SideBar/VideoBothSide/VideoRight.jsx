

import { ImEarth } from 'react-icons/im'
import { BsThreeDots } from 'react-icons/bs'
import { useState } from 'react';
import { AiOutlineComment, AiOutlineLike, AiOutlineShareAlt } from 'react-icons/ai';
import SingleVideoPlayer from '../../Video';

const VideoRight = () => {
    const [showMore, setShowMore] = useState(false)

    const title = 'অতিরিক্ত তৈল মারলে এমনই হয় 😂😂 অসামাজিক রাজনৈতিক ভিডিও পার্ট ৩'

    return (
        <div className=' w-full mt-[40px] 800px:mt-0 800px:w-[75vw] text-white p-7 -z-30 '>
            <div className='p-5  bg-[#242526] rounded-md  mx-auto mt-5 min-h-[80vh]'>
                {/* head section start */}
                <div className='flex justify-between items-center'>
                    <div className='flex gap-x-3 items-center'>
                        <div className='h-[50px] w-[50px]'>
                            <img src="/public/img/raja.jpg" alt="" className='w-full h-full rounded-full' />
                        </div>
                        <div>
                            <div className='flex gap-x-2'>
                                <h1>Raja king</h1>
                                <h1 className='text-blue-400 font-semibold'>Follow</h1>
                            </div>

                            <div className='flex gap-x-2 text-sm items-center'>
                                <h1>August 29 at 6:36 PM</h1>
                                <ImEarth size={15} />
                            </div>


                        </div>
                    </div>

                    <BsThreeDots size={25} className='cursor-pointer' />

                </div>

                <div className='mt-2'>
                    {
                        showMore ? title : title.slice(0, 100)
                    }
                    {' '}
                    <button onClick={() => setShowMore(!showMore)}>{
                        showMore ? 'Show Less' : 'Show more'
                    }</button>
                </div>
                {/* head section end */}

                {/* video player start */}
                <div className='h-[60vh] w-full relative bg-black py-1 mt-2 -z-12'>


                    <div className=' '>
                        <SingleVideoPlayer videoUrl={'/public/reels/11.mp4'}></SingleVideoPlayer>
                    </div>

                </div>
                {/* video player end */}

                {/* last part like comment share start */}


                <div className='p-1 mt-3  items-center '>

                    <div className='flex justify-center 500px:justify-between'>

                        <div className='flex gap-x-20 500px:gap-x-10 800px:gap-x-5'>
                            <div className='flex gap-x-2 items-center'>
                                <AiOutlineLike size={30} />
                                <h1 className='text-sm text-[#d3d3d3] hidden 800px:block'>Like</h1>
                            </div>

                            <div className='flex gap-x-2 items-center'>
                                <AiOutlineComment size={30} />
                                <h1 className='text-sm text-[#d3d3d3] hidden 800px:block'>Comment</h1>
                            </div>

                            <div className='flex gap-x-2 items-center'>
                                <AiOutlineShareAlt size={30} />
                                <h1 className='text-sm text-[#d3d3d3] hidden 800px:block'>Share</h1>
                            </div>
                        </div>
                        <div className='hidden 500px:flex gap-x-3 items-center 400px:flex-col 800px:flex-col 1000px:flex-row '>
                            <div className='flex'>
                                <h1 className='text-sm text-[#d3d3d3] flex' ><span className=' hidden 800px:block '>you sk Shakil and </span>105k others .</h1>
                            </div>  

                            <div className='flex gap-x-3' >
                                <h1 className='text-sm text-[#d3d3d3]'>2.4k comment .</h1>
                                <h1 className='text-sm text-[#d3d3d3]'>815k views</h1>
                            </div>  
                         
                              
                           
                        </div>
                    </div>
                </div>
                {/* last part like comment share end*/}

            </div>

            <div className='p-5  bg-[#242526] rounded-md  mx-auto mt-5 min-h-[80vh]'>
                {/* head section start */}
                <div className='flex justify-between items-center'>
                    <div className='flex gap-x-3 items-center'>
                        <div className='h-[50px] w-[50px]'>
                            <img src="/public/img/raja.jpg" alt="" className='w-full h-full rounded-full' />
                        </div>
                        <div>
                            <div className='flex gap-x-2'>
                                <h1>Raja king</h1>
                                <h1 className='text-blue-400 font-semibold'>Follow</h1>
                            </div>

                            <div className='flex gap-x-2 text-sm items-center'>
                                <h1>August 29 at 6:36 PM</h1>
                                <ImEarth size={15} />
                            </div>


                        </div>
                    </div>

                    <BsThreeDots size={25} className='cursor-pointer' />

                </div>

                <div className='mt-2'>
                    {
                        showMore ? title : title.slice(0, 100)
                    }
                    {' '}
                    <button onClick={() => setShowMore(!showMore)}>{
                        showMore ? 'Show Less' : 'Show more'
                    }</button>
                </div>
                {/* head section end */}

                {/* video player start */}
                <div className='h-[60vh] w-full relative bg-black py-1 mt-2'>


                        <div className='h-[60vh] w-full absolute top-0 '>
                        <SingleVideoPlayer videoUrl={"/public/video/k.mp4"}/>
                        </div>
                   

                </div>
                {/* video player end */}

                {/* last part like comment share start */}


                <div className='p-1 mt-3  items-center '>

                    <div className='flex justify-center 500px:justify-between'>

                        <div className='flex gap-x-20 500px:gap-x-10 800px:gap-x-5'>
                            <div className='flex gap-x-2 items-center'>
                                <AiOutlineLike size={30} />
                                <h1 className='text-sm text-[#d3d3d3] hidden 800px:block'>Like</h1>
                            </div>

                            <div className='flex gap-x-2 items-center'>
                                <AiOutlineComment size={30} />
                                <h1 className='text-sm text-[#d3d3d3] hidden 800px:block'>Comment</h1>
                            </div>

                            <div className='flex gap-x-2 items-center'>
                                <AiOutlineShareAlt size={30} />
                                <h1 className='text-sm text-[#d3d3d3] hidden 800px:block'>Share</h1>
                            </div>
                        </div>
                        <div className='hidden 500px:flex gap-x-3 items-center 400px:flex-col 800px:flex-col 1000px:flex-row '>
                            <div className='flex'>
                                <h1 className='text-sm text-[#d3d3d3] flex' ><span className=' hidden 800px:block '>you sk Shakil and </span>105k others .</h1>
                            </div>  

                            <div className='flex gap-x-3' >
                                <h1 className='text-sm text-[#d3d3d3]'>2.4k comment .</h1>
                                <h1 className='text-sm text-[#d3d3d3]'>815k views</h1>
                            </div>  
                         
                              
                           
                        </div>
                    </div>
                </div>
                {/* last part like comment share end*/}

            </div>

        </div>
    );
};

export default VideoRight;