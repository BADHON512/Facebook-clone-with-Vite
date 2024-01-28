import React from "react";
import VideoRight from "../VideoBothSide/VideoRight";
import MarketRight from "../MarketPlace/MarketRight";
import HomeMid from "../HomeBothSide/HomeMid";
import GroupsMid from "../Groups/GroupsMid";
import GameRight from "../Game/GameRight";

const AllMiddleSide = ({ number }) => {
  console.log(number);
  return (
    <div className="  ">
      <div className="w-full">{number === 1 && <HomeMid />}</div>

      {number === 2 && <VideoRight />}
      <div className="">{number === 3 && <MarketRight />}</div>

      <div className="">{number === 4 && <GroupsMid />}</div>

      <div className="">{number === 5 && <GameRight />}</div>
    </div>
  );
};

export default AllMiddleSide;
