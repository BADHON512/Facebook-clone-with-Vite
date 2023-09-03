import React from 'react';
import VideoRight from '../VideoBothSide/VideoRight';
import MarketRight from '../MarketPlace/MarketRight';

const AllMiddleSide = ({number}) => {
    return (
        <>
         {
            number===2&&(
                < VideoRight/>
            )
         } 
             {
            number===3&&(
                < MarketRight/>
            )
         }  
          
         
        </>
    );
};

export default AllMiddleSide;