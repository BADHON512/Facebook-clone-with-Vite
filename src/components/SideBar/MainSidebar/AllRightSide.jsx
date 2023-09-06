import HomeRight from "../HomeBothSide/HomeRight";




const AllRightSide = ({icon}) => {
    console.log(icon)
    return (
        <div className="fixed w-[27vw]">
           {
      icon===1 &&(
       <HomeRight/>
      )
    }
        </div>
    );
};

export default AllRightSide;