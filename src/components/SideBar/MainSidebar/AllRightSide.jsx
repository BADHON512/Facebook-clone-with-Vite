import GroupsRight from "../Groups/GroupsRight";
import HomeRight from "../HomeBothSide/HomeRight";

const AllRightSide = ({ icon }) => {
  console.log(icon);
  return (
    <div className="fixed w-[25vw]">
      {icon === 1 && <HomeRight />}

      {icon === 4 && <GroupsRight />}
    </div>
  );
};

export default AllRightSide;
