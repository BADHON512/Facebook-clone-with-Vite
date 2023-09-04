import HomeLeft from "../HomeBothSide/HomeLeft";
import MarketLeft from "../MarketPlace/MarketLeft";
import VideoLeft from "../VideoBothSide/VideoLeft";


const AllLeftSidebar = ({ iconBorder }) => {


  return (
    < >
      {
        iconBorder === 1 && (
          <HomeLeft />
        )
      }

      {
        iconBorder === 2 && (
          <VideoLeft />
        )
      }
     <div className="fixed w-[27%] ">
     {
        iconBorder === 3 && (
          <MarketLeft />
        )
      }

     </div>
    </>

  );
};

export default AllLeftSidebar;