/* eslint-disable react/no-unescaped-entities */

import { ImLocation2 } from 'react-icons/im';
const MarketRight = () => {
    return (
        <div className=' p-5 w-full min-h-[100vh] text-white overflow-scroll'>
            {/* first section  start */}
            <div className='hidden 500px:block bg-[#ffffff21] min-h-[15vh] w-full rounded-md p-5'>

                <div className='h-full flex gap-y-3 flex-col 800px:flex-row 800px:justify-between px-3 items-center'>

                    <div className="flex flex-col">
                        <h1 className="px-1 pb-3">New for you</h1>

                        <div className='flex gap-x-3 items-center'>

                            <div>

                                <img src="/public/img/raja.jpg" alt="" className='h-[60px] w-[60px] rounded-2xl' />
                            </div>

                            <div>
                                <h1 className='text-sm'>40+ items were just added to you buy and sell groups</h1>
                                <p className='text-blue-600'>3w</p>
                            </div>

                        </div>
                    </div>


                    <div className='flex gap-x-3 items-center'>
                        <img src="/public/img/badhon.jpg" alt="" className='h-[60px] w-[60px] rounded-2xl object-cover' />
                        <div>
                            <h1 className='text-sm'>40+ items were just added to you buy and sell groups</h1>
                            <p className='text-blue-600'>3w</p>
                        </div>

                    </div>

                </div>

            </div>
            {/* first section end */}

            {/* second section start */}
            <div className="flex 800px:justify-between p-2 py-3 ">
                <h1 className='text-[20px]'>Today's picks</h1>
                <h1 className='flex items-center gap-x-2 text-blue-400 font-semibold'><ImLocation2 /> gazipur . 65 km</h1>
            </div>
            {/* second section end */}


            {/* third section start */}

            <div className='flex flex-wrap gap-2 justify-center'>
                <Present img={"https://scontent.fdac24-4.fna.fbcdn.net/v/t45.5328-4/370495294_6407601072695122_6648105525054572633_n.jpg?stp=c43.0.260.260a_dst-jpg_p261x260&_nc_cat=101&ccb=1-7&_nc_sid=1a0e84&_nc_ohc=-CYkA1_fD-QAX8i1duP&_nc_ht=scontent.fdac24-4.fna&oh=00_AfCibNzfDoPqNYaqmgVZPkjoSk6_klJD-8_yq4RVFOFsAg&oe=64FBE512"} />
                <Present img={'https://scontent.fdac24-4.fna.fbcdn.net/v/t45.5328-4/338913206_24382218664698657_5844723192171643362_n.jpg?stp=c0.3.261.261a_dst-jpg_p261x260&_nc_cat=101&ccb=1-7&_nc_sid=1a0e84&_nc_ohc=B-4zazuenosAX__9Lnb&_nc_ht=scontent.fdac24-4.fna&oh=00_AfBdd37tZhN4Og6mFWPuwSbiOMhtKpUpFiTp4xiVGXvbZw&oe=64FA9A22'} />
                <Present img={'https://scontent.fdac24-1.fna.fbcdn.net/v/t45.5328-4/372363353_10055274141212378_7233538342295323817_n.jpg?stp=c43.0.260.260a_dst-jpg_p261x260&_nc_cat=102&ccb=1-7&_nc_sid=1a0e84&_nc_ohc=ULq7h2zrmZgAX8kFOgS&_nc_ht=scontent.fdac24-1.fna&oh=00_AfCcQijbWCAkK-dmSFZkvVrWRRRqB_3gPy9Co2se6K-Y_g&oe=64FB81AC'}/>
                <Present img={'https://scontent.fdac24-2.fna.fbcdn.net/v/t45.5328-4/333789684_5957066181074362_6144935654074563963_n.jpg?stp=c43.0.260.260a_dst-jpg_p261x260&_nc_cat=111&ccb=1-7&_nc_sid=1a0e84&_nc_ohc=BHVRY8uaS70AX_dq4yC&_nc_ht=scontent.fdac24-2.fna&oh=00_AfAUvWEaXdyhh_L-ABQbdG36efuBHXdKoqdyZtZrADVXtw&oe=64FB4AE3'}/>
                <Present img={'https://scontent.fdac24-1.fna.fbcdn.net/v/t45.5328-4/369578506_6915754788436134_4960911750235988748_n.jpg?stp=c0.43.261.261a_dst-jpg_p261x260&_nc_cat=102&ccb=1-7&_nc_sid=1a0e84&_nc_ohc=tntvVEBVuTwAX9t5viD&_nc_ht=scontent.fdac24-1.fna&oh=00_AfB-fmOr1cimRYfrkNLuCw_-EOLPqk7-jUbTS1oWfQ00Ww&oe=64FA63C4'}/>
                <Present img={'https://scontent.fdac24-3.fna.fbcdn.net/v/t45.5328-4/370491883_10074790572593293_7535134361425189079_n.jpg?stp=c0.4.261.261a_dst-jpg_p261x260&_nc_cat=104&ccb=1-7&_nc_sid=1a0e84&_nc_ohc=3MdWDEaKMygAX8lAkuX&_nc_ht=scontent.fdac24-3.fna&oh=00_AfAotip7ltI3XIaRB0MNjNIyaJx_g9-0lIMaJVq1jHqvng&oe=64FB7802'}/>
                <Present img={'https://scontent.fdac24-4.fna.fbcdn.net/v/t45.5328-4/368566752_9744184388989259_9158266134030782721_n.jpg?stp=c43.0.260.260a_dst-jpg_p261x260&_nc_cat=109&ccb=1-7&_nc_sid=1a0e84&_nc_ohc=cH1Es-GVT4gAX8080_Q&_nc_ht=scontent.fdac24-4.fna&oh=00_AfAg1cRfZKivbDqg12BmlR7qENjmpwPasXANiyTZVH7lTg&oe=64FBD043'}/>
                <Present img={'https://scontent.fdac24-4.fna.fbcdn.net/v/t45.5328-4/370310294_6420310914731758_1200425493194735826_n.jpg?stp=c0.43.261.261a_dst-jpg_p261x260&_nc_cat=101&ccb=1-7&_nc_sid=1a0e84&_nc_ohc=8vX-1HX0K18AX_5ZzJR&_nc_ht=scontent.fdac24-4.fna&oh=00_AfCSELrgAxxbAI0vc9QFEJFD0w3E6ZZJBHBKJ65rdhe9AQ&oe=64FAA361'}/>
            </div>
            {/* third section end */}




        </div>
    );
};

const Present = ({img}) => {
    return (
        <div className='h-[350px] w-[250px'>
            <div className='h-[270px] w-[270px'>
                <img src={img} alt="" className='h-[270px] w-[270px rounded-md' />
            </div>
            <div className='mt-1'>
                <h1 >$ 3990</h1>
                <h1>new border less laptop</h1>
                <h1>Nagarpur Tangail</h1>
            </div>


        </div>
    )
}

export default MarketRight;