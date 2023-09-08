import GroupsLeft from "../Groups/GroupsLeft";
import HomeLeft from "../HomeBothSide/HomeLeft";
import MarketLeft from "../MarketPlace/MarketLeft";
import VideoLeft from "../VideoBothSide/VideoLeft";


const AllLeftSidebar = ({ iconBorder }) => {


  return (
    <div className="fixed w-[25vw] ">

      {
        iconBorder === 1 && (
          <HomeLeft />
        )
      }
      <div className="w-[100vw] 800px:w-[25vw]   ">
        {
          iconBorder === 2 && (
            <VideoLeft />
          )
        }
      </div>
      <div className=" w-[100vw] 800px:w-[25vw] ">
        {
          iconBorder === 3 && (
            <MarketLeft />
          )
        }

      </div>
      <div className=" w-[100vw] 800px:w-[25vw] ">
        {
          iconBorder === 4 && (
            <GroupsLeft />
          )
        }

      </div>
    </div>

  );
};

export default AllLeftSidebar;