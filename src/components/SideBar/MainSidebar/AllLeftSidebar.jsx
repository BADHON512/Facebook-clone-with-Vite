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
       {
        iconBorder === 3 && (
          <MarketLeft />
        )
      }
    </>

  );
};

export default AllLeftSidebar;