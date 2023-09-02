import HomeLeft from "../HomeBothSide/HomeLeft";
import VideoLeft from "../VideoBothSide/VideoLeft";


const AllLeftSidebar = ({iconBorder}) => {


  return (
    < >
    {
      iconBorder===1 &&(
       <HomeLeft/>
      )
    }

{
      iconBorder===2 &&(
       <VideoLeft/>
      )
    }
    </>

  );
};

export default AllLeftSidebar;