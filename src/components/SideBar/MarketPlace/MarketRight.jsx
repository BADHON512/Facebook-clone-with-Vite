/* eslint-disable react/no-unescaped-entities */

import { ImLocation2 } from "react-icons/im";
const MarketRight = () => {
  return (
    <div className=" p-5 w-full min-h-[100vh] mt-[100px] 800px:mt-0 text-white overflow-y-scroll   ">
      {/* first section  start */}
      <div className="hidden 500px:block bg-[#ffffff21] min-h-[15vh] w-full rounded-md p-5">
        <div className="h-full flex gap-y-3 flex-col 800px:flex-row 800px:justify-between px-3 items-center">
          <div className="flex flex-col">
            <h1 className="px-1 pb-3">New for you</h1>

            <div className="flex gap-x-3 items-center">
              <div>
                <img
                  src="/img/raja.jpg"
                  alt=""
                  className="h-[60px] w-[60px] rounded-2xl"
                />
              </div>

              <div>
                <h1 className="text-sm">
                  40+ items were just added to you buy and sell groups
                </h1>
                <p className="text-blue-600">3w</p>
              </div>
            </div>
          </div>

          <div className="flex gap-x-3 items-center">
            <img
              src="/img/badhon.jpg"
              alt=""
              className="h-[60px] w-[60px] rounded-2xl object-cover"
            />
            <div>
              <h1 className="text-sm">
                40+ items were just added to you buy and sell groups
              </h1>
              <p className="text-blue-600">3w</p>
            </div>
          </div>
        </div>
      </div>
      {/* first section end */}

      {/* second section start */}
      <div className="flex 800px:justify-between p-2 py-3 ">
        <h1 className="text-[20px]">Today's picks</h1>
        <h1 className="flex items-center gap-x-2 text-blue-400 font-semibold">
          <ImLocation2 /> gazipur . 65 km
        </h1>
      </div>
      {/* second section end */}

      {/* third section start */}

      <div className="flex flex-wrap gap-2 justify-center">
        <Present img={"/marketp/1.png"} />
        <Present img={"/marketp/2.png"} />
        <Present img={"/marketp/3.png"} />
        <Present img={"/marketp/4.png"} />
        <Present img={"/marketp/5.png"} />
        <Present img={"/marketp/6.png"} />
        <Present img={"/marketp/7.png"} />
        <Present img={"/marketp/8.png"} />
        <Present img={"/marketp/5.png"} />
      </div>
      {/* third section end */}
    </div>
  );
};

const Present = ({ img }) => {
  return (
    <div className="h-[350px] w-[250px">
      <div className="h-[270px] w-[270px">
        <img src={img} alt="" className="h-[250px] w-[250px rounded-md" />
      </div>
      <div className="mt-1">
        <h1>$ 3990</h1>
        <h1>new border less laptop</h1>
        <h1>Nagarpur Tangail</h1>
      </div>
    </div>
  );
};

export default MarketRight;
