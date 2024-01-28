import { useState } from "react";
import { AiOutlineSearch, AiOutlineSetting } from "react-icons/ai";
import { ImYoutube } from "react-icons/im";
import { RiLiveLine } from "react-icons/ri";
import { BiSolidVideos } from "react-icons/bi";

const GameLeft = () => {
  const [color, setColor] = useState(1);
  return (
    <div className="w-full h-[10vh]  800px:min-h-screen text-white shadow-lg bg-[#242526] overflow-y-auto">
      <div className="p-1 800px:p-3 flex flex-row  h-full 800px:flex-col items-center overflow-x-scroll ">
        <div className="hidden 800px:block w-full ">
          <div className="  flex justify-between  items-center w-full">
            <h1
              className="text-[25px] text-[#d8d5d5] 
                font-semibold"
            >
              Gaming
            </h1>
            <AiOutlineSetting size={25} className="cursor-pointer" />
          </div>
        </div>

        <div className="hidden 800px:block mt-4 relative  w-full">
          <input
            type="text"
            className="w-[90%] bg-[#9695953d] pl-11 py-2 rounded-3xl placeholder:text-white placeholder:ml-5 outline-none "
            placeholder="Search videos"
          />
          <AiOutlineSearch className="absolute top-2 left-4" size={25} />
        </div>

        <div
          className={`p-1 800px:p-2 mt-3 cursor-pointer w-full hover:bg-[#d3d1d144] ${
            color === 1 ? "bg-[#d3d1d144]" : null
          } rounded-md`}
          onClick={() => setColor(1)}
        >
          <div className="flex gap-x-3 items-center justify-center 800px:justify-normal">
            <div
              className={`flex justify-center items-center h-[45px] w-[45px] rounded-full ${
                color === 1 ? "bg-[#1877F2]" : "bg-[#cecbcb60]"
              } `}
            >
              <ImYoutube size={30} />
            </div>
            <h1 className="hidden 800px:block font-semibold">Play Games</h1>
          </div>
        </div>

        <div
          className={`p-1 800px:p-2 mt-3 cursor-pointer w-full hover:bg-[#d3d1d144] ${
            color === 2 ? "bg-[#d3d1d144]" : null
          } rounded-md`}
          onClick={() => setColor(2)}
        >
          <div className="flex gap-x-3 items-center justify-center 800px:justify-normal">
            <div
              className={`flex justify-center items-center h-[45px] w-[45px] rounded-full ${
                color === 2 ? "bg-[#ff1925]" : "bg-[#cecbcb60]"
              } `}
            >
              <RiLiveLine size={30} />
            </div>
            <h1 className="hidden 800px:block font-semibold">
              Gaming Activity
            </h1>
          </div>
        </div>

        <div
          className={`p-1 800px:p-2 mt-3 cursor-pointer w-full hover:bg-[#d3d1d144] ${
            color === 3 ? "bg-[#d3d1d144]" : null
          } rounded-md`}
          onClick={() => setColor(3)}
        >
          <div className="flex gap-x-3 items-center justify-center 800px:justify-normal">
            <div
              className={`flex justify-center items-center h-[45px] w-[45px] rounded-full ${
                color === 3 ? "bg-[#1877F2]" : "bg-[#cecbcb60]"
              } `}
            >
              <BiSolidVideos size={30} />
            </div>
            <h1 className="hidden 800px:block font-semibold">Notifications</h1>
          </div>
        </div>

        <div className="my-3 border-b hidden 800px:block border-[#808080] w-full"></div>

        <div className="w-full flex justify-between p-1">
          <h1 className=" font-semibold text-[#e4e2e2] text-[18px]">
            Your games
          </h1>
          <h1 className="font-semibold text-blue-400 cursor-pointer ">
            See all
          </h1>
        </div>

        <div
          className={`p-1 800px:p-2  mt-2 cursor-pointer w-full hover:bg-[#d3d1d144] ${
            color === 4 ? "bg-[#d3d1d144]" : null
          } rounded-md`}
          onClick={() => setColor(4)}
        >
          <div className="flex gap-x-3 items-center justify-center 800px:justify-normal">
            <div
              className={`flex justify-center items-center h-[45px] w-[45px] rounded-md  `}
            >
              <img
                src="/img/badhon.jpg"
                className="h-full w-full rounded-md object-cover"
                alt=""
              />
            </div>
            <h1 className="hidden 800px:block font-semibold">Angry Balls 3D</h1>
          </div>
        </div>

        <div
          className={`p-1 800px:p-2 mt-1 cursor-pointer w-full hover:bg-[#d3d1d144] ${
            color === 5 ? "bg-[#d3d1d144]" : null
          } rounded-md`}
          onClick={() => setColor(5)}
        >
          <div className="flex gap-x-3 items-center justify-center 800px:justify-normal">
            <div
              className={`flex justify-center items-center h-[45px] w-[45px] rounded-full ${
                color === 5 ? "bg-[#1877F2]" : "bg-[#cecbcb60]"
              } `}
            >
              <BiSolidVideos size={30} />
            </div>
            <h1 className="hidden 800px:block font-semibold">Notifications</h1>
          </div>
        </div>

        <div className="my-3 border-b hidden 800px:block border-[#808080] w-full"></div>

        <h1 className="font-semibold text-[#e4e2e2] w-full p-1 text-[18px]">
          Categories
        </h1>

        <div className="w-full space-y-3 h-full">
          <div
            className={` w-[70%] p-1 800px:p-1 mt-1 cursor-pointer  hover:bg-[#d3d1d144] ${
              color === 6 ? "bg-[#d3d1d144]" : null
            } rounded-md`}
            onClick={() => setColor(6)}
          >
            <div className="flex gap-x-3 items-center justify-center 800px:justify-normal">
              <div
                className={`flex justify-center items-center h-[35px] w-[35px] rounded-full ${
                  color === 6 ? "bg-[#1877F2]" : "bg-[#cecbcb60]"
                } `}
              >
                <BiSolidVideos size={20} />
              </div>
              <h1 className="hidden 800px:block font-semibold">
                Notifications
              </h1>
            </div>
          </div>
          <div
            className={` w-[70%] p-1 800px:p-1 mt-1 cursor-pointer  hover:bg-[#d3d1d144] ${
              color === 7 ? "bg-[#d3d1d144]" : null
            } rounded-md`}
            onClick={() => setColor(7)}
          >
            <div className="flex gap-x-3 items-center justify-center 800px:justify-normal">
              <div
                className={`flex justify-center items-center h-[35px] w-[35px] rounded-full ${
                  color === 7 ? "bg-[#1877F2]" : "bg-[#cecbcb60]"
                } `}
              >
                <BiSolidVideos size={20} />
              </div>
              <h1 className="hidden 800px:block font-semibold">
                Notifications
              </h1>
            </div>
          </div>
          <div
            className={` w-[70%] p-1 800px:p-1 mt-1 cursor-pointer  hover:bg-[#d3d1d144] ${
              color === 8 ? "bg-[#d3d1d144]" : null
            } rounded-md`}
            onClick={() => setColor(8)}
          >
            <div className="flex gap-x-3 items-center justify-center 800px:justify-normal">
              <div
                className={`flex justify-center items-center h-[35px] w-[35px] rounded-full ${
                  color === 8 ? "bg-[#1877F2]" : "bg-[#cecbcb60]"
                } `}
              >
                <BiSolidVideos size={20} />
              </div>
              <h1 className="hidden 800px:block font-semibold">Nations</h1>
            </div>
          </div>
          <div
            className={` w-[70%] p-1 800px:p-1 mt-1 cursor-pointer  hover:bg-[#d3d1d144] ${
              color === 9 ? "bg-[#d3d1d144]" : null
            } rounded-md`}
            onClick={() => setColor(9)}
          >
            <div className="flex gap-x-3 items-center justify-center 800px:justify-normal">
              <div
                className={`flex justify-center items-center h-[35px] w-[35px] rounded-full ${
                  color === 9 ? "bg-[#1877F2]" : "bg-[#cecbcb60]"
                } `}
              >
                <BiSolidVideos size={20} />
              </div>
              <h1 className="hidden 800px:block font-semibold">
                Notifications
              </h1>
            </div>
          </div>
          <div
            className={` w-[70%] p-1 800px:p-1 mt-1 cursor-pointer  hover:bg-[#d3d1d144] ${
              color === 10 ? "bg-[#d3d1d144]" : null
            } rounded-md`}
            onClick={() => setColor(10)}
          >
            <div className="flex gap-x-3 items-center justify-center 800px:justify-normal">
              <div
                className={`flex justify-center items-center h-[35px] w-[35px] rounded-full ${
                  color === 10 ? "bg-[#1877F2]" : "bg-[#cecbcb60]"
                } `}
              >
                <BiSolidVideos size={20} />
              </div>
              <h1 className="hidden 800px:block font-semibold">ications</h1>
            </div>
          </div>
          <div
            className={` w-[70%] p-1 800px:p-1 mt-1 cursor-pointer  hover:bg-[#d3d1d144] ${
              color === 11 ? "bg-[#d3d1d144]" : null
            } rounded-md`}
            onClick={() => setColor(11)}
          >
            <div className="flex gap-x-3 items-center justify-center 800px:justify-normal">
              <div
                className={`flex justify-center items-center h-[35px] w-[35px] rounded-full ${
                  color === 11 ? "bg-[#1877F2]" : "bg-[#cecbcb60]"
                } `}
              >
                <BiSolidVideos size={20} />
              </div>
              <h1 className="hidden 800px:block font-semibold">Ntions</h1>
            </div>
          </div>
          <div
            className={` w-[70%] p-1 800px:p-1 mt-1 cursor-pointer  hover:bg-[#d3d1d144] ${
              color === 12 ? "bg-[#d3d1d144]" : null
            } rounded-md`}
            onClick={() => setColor(12)}
          >
            <div className="flex gap-x-3 items-center justify-center 800px:justify-normal">
              <div
                className={`flex justify-center items-center h-[35px] w-[35px] rounded-full ${
                  color === 12 ? "bg-[#1877F2]" : "bg-[#cecbcb60]"
                } `}
              >
                <BiSolidVideos size={20} />
              </div>
              <h1 className="hidden 800px:block font-semibold">ications</h1>
            </div>
          </div>
          <div
            className={` w-[70%] p-1 800px:p-1 mt-1 cursor-pointer  hover:bg-[#d3d1d144] ${
              color === 13 ? "bg-[#d3d1d144]" : null
            } rounded-md`}
            onClick={() => setColor(13)}
          >
            <div className="flex gap-x-3 items-center justify-center 800px:justify-normal">
              <div
                className={`flex justify-center items-center h-[35px] w-[35px] rounded-full ${
                  color === 13 ? "bg-[#1877F2]" : "bg-[#ad1b1b60]"
                } `}
              >
                <BiSolidVideos size={20} />
              </div>
              <h1 className="hidden 800px:block font-semibold">tions</h1>
            </div>
          </div>

          <div
            className={` w-[70%] p-1 800px:p-1 mt-1 cursor-pointer  hover:bg-[#d3d1d144] ${
              color === 14 ? "bg-[#d3d1d144]" : null
            } rounded-md`}
            onClick={() => setColor(14)}
          >
            <div className="flex gap-x-3 items-center justify-center 800px:justify-normal">
              <div
                className={`flex justify-center items-center h-[35px] w-[35px] rounded-full ${
                  color === 14 ? "bg-[#1877F2]" : "bg-[#ad1b1b60]"
                } `}
              >
                <BiSolidVideos size={20} />
              </div>
              <h1 className="hidden 800px:block font-semibold">badhon</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameLeft;
