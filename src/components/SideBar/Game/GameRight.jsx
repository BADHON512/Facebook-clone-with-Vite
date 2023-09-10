import React from 'react';

const GameRight = () => {
    return (
        <div className='w-full min-h-screen p-5 text-white '>
            <div >
                <h1 className='text-[25px] font-bold text-[#ffffffd5]'>Recently Played</h1>

                <div className='h-[15vh] w-[10vw] bg-red-400 mt-2 relative rounded-md'>
                    <img src="/public/img/badhon.jpg" className='h-full w-full rounded-md' alt="" />

                    <h1 className='font-bold  absolute bottom-3 left-2'>AHA</h1>
                </div>


                <div className='mt-8 w-full'>
                <h1 className='text-[25px] font-bold text-[#ffffffd5]'>Recently Played</h1>

                <div className='flex gap-x-2 h-[20vh] w-[15vw] mt-5 bg-red-400 
                rounded-lg relative'>
                    <img src="/public/img/badhon.jpg" className='h-full w-full rounded-lg' alt="" />

                    <div className='h-[7vh] w-full bg-bl'></div>
                </div>
                </div>


            </div>
      
        </div>
    );
};

export default GameRight;