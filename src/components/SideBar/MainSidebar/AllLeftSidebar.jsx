import HomeLeft from "../HomeBothSide/HomeLeft";
import MarketLeft from "../MarketPlace/MarketLeft";
import VideoLeft from "../VideoBothSide/VideoLeft";


const AllLeftSidebar = ({ iconBorder }) => {


  return (
    <div className="fixed w-[27vw] ">

      {
        iconBorder === 1 && (
          <HomeLeft />
        )
      }
      <div className="w-[100vw] 800px:w-[27vw]   ">
        {
          iconBorder === 2 && (
            <VideoLeft />
          )
        }
      </div>
      <div className=" w-[100vw] 800px:w-[27vw] ">
        {
          iconBorder === 3 && (
            <MarketLeft />
          )
        }

      </div>
    </div>

  );
};

export default AllLeftSidebar;