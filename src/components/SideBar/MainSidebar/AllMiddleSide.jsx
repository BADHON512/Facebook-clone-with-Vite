import React from 'react';
import VideoRight from '../VideoBothSide/VideoRight';

const AllMiddleSide = ({number}) => {
    return (
        <>
         {
            number===2&&(
                < VideoRight/>
            )
         }  
         
        </>
    );
};

export default AllMiddleSide;