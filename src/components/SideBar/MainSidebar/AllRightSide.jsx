import HomeRight from "../HomeBothSide/HomeRight";




const AllRightSide = ({icon}) => {
    console.log(icon)
    return (
        <>
           {
      icon===1 &&(
       <HomeRight/>
      )
    }
        </>
    );
};

export default AllRightSide;