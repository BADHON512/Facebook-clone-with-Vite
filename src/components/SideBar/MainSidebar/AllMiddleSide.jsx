import React from 'react';
import VideoRight from '../VideoBothSide/VideoRight';
import MarketRight from '../MarketPlace/MarketRight';
import HomeMid from '../HomeBothSide/HomeMid';

const AllMiddleSide = ({number}) => {
    return (
        <div className=' '>
             {
            number===1&&(
                < HomeMid/>
            )
         } 
         {
            number===2&&(
                < VideoRight/>
            )
         } 
         <div className=''>
         {
            number===3&&(
                < MarketRight/>
            )
         } 
            </div> 
          
         
        </div>
    );
};

export default AllMiddleSide;