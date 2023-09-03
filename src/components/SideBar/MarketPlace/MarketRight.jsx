
const MarketRight = () => {
    return (
        <div className='p-5 w-full text-white'>
            <div className='hidden 500px:block bg-[#ffffff21] min-h-[15vh] w-full rounded-md p-5'>
                 
                <div className='h-full flex gap-y-3 flex-col 800px:flex-row 800px:justify-between px-3 items-center'>

                    <div className="flex flex-col">
                    <h1 className="px-1 pb-3">New for you</h1>

                    <div className='flex gap-x-3 items-center'>
                  
                  <div>
                    
                    <img src="/public/img/raja.jpg" alt="" className='h-[60px] w-[60px] rounded-2xl'  />
                  </div>
                
                   <div>
                            <h1 className='text-sm'>40+ items were just added to you buy and sell groups</h1>
                            <p className='text-blue-600'>3w</p>
                   </div>
               
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