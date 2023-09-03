import React from 'react';

const MarketRight = () => {
    return (
        <div className='p-5 w-full text-white'>
            <div className='bg-[#ffffff21] h-[15vh] w-full rounded-md '>
                 
                <div className='h-full flex justify-between px-3 items-center'>
                   <div className='flex gap-x-3 items-center'>
                  
                   <div>
                     <h1>New for you</h1>
                     <img src="/public/img/raja.jpg" alt="" className='h-[60px] w-[60px] rounded-2xl'  />
                   </div>
                 
                    <div>
                             <h1 className='text-sm'>40+ items were just added to you buy and sell groups</h1>
                             <p className='text-blue-600'>3w</p>
                    </div>
                
                   </div>

                   <div className='flex gap-x-3 items-center'>
                    <img src="/public/img/badhon.jpg" alt="" className='h-[60px] w-[60px] rounded-2xl object-cover'  />
                    <div>
                             <h1 className='text-sm'>40+ items were just added to you buy and sell groups</h1>
                             <p className='text-blue-600'>3w</p>
                    </div>
                
                   </div>

                </div>

            </div>
         
        </div>
    );
};

export default MarketRight;