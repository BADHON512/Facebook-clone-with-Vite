import { useState } from "react";
import { AiOutlineSearch, AiOutlineSetting } from "react-icons/ai";
import { PiFilmReelDuotone } from "react-icons/pi";
import { FaFeatherPointed } from "react-icons/fa6";
import { MdGroups2 } from "react-icons/md";
import { RxPlus } from "react-icons/rx";

const GroupsLeft = () => {
  const [color, setColor] = useState(1);
  return (
    <div className="w-full min-h-[10vh] pb-[20px]  800px:h-screen text-white shadow-lg bg-[#242526] z-30">
      <div className="p-3 flex flex-row  h-full 800px:flex-col items-center overflow-x-scroll ">
        <div className="hidden 800px:block w-full ">
          <div className="  flex justify-between  items-center w-full">
            <h1
              className="text-[25px] text-[#d8d5d5] 
                font-semibold"
            >
              Groups
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
          className={`p-2 mt-3 cursor-pointer w-full hover:bg-[#d3d1d144] ${
            color === 1 ? "bg-[#d3d1d144]" : null
          } rounded-md`}
          onClick={() => setColor(1)}
        >
          <div className="flex gap-x-3 items-center ">
            <div
              className={`flex justify-center items-center h-[45px] w-[45px] rounded-full ${
                color === 1 ? "bg-[#1877F2]" : "bg-[#cecbcb60]"
              } `}
            >
              <PiFilmReelDuotone size={30} />
            </div>
            <h1>Your reels</h1>
          </div>
        </div>

        <div
          className={`p-2 mt-3 cursor-pointer w-full hover:bg-[#d3d1d144] ${
            color === 2 ? "bg-[#d3d1d144]" : null
          } rounded-md`}
          onClick={() => setColor(2)}
        >
          <div className="flex gap-x-3 items-center">
            <div
              className={`flex justify-center items-center h-[45px] w-[45px] rounded-full ${
                color === 2 ? "bg-[#ff1925]" : "bg-[#cecbcb60]"
              } `}
            >
              <FaFeatherPointed size={30} />
            </div>
            <h1>Discover</h1>
          </div>
        </div>

        <div
          className={`p-2 mt-3 cursor-pointer w-full hover:bg-[#d3d1d144] ${
            color === 3 ? "bg-[#d3d1d144]" : null
          } rounded-md`}
          onClick={() => setColor(3)}
        >
          <div className="flex gap-x-3 items-center">
            <div
              className={`flex justify-center items-center h-[45px] w-[45px] rounded-full ${
                color === 3 ? "bg-[#1877F2]" : "bg-[#cecbcb60]"
              } `}
            >
              <MdGroups2 size={30} />
            </div>
            <h1>Your groups</h1>
          </div>
        </div>

        <div className="hidden 800px:block">
          <div
            className={`p-2 mt-1 cursor-pointer w-[50%] 800px:w-full hover:bg-[#64d0f1bb]  bg-[#17179298] flex items-center justify-center py-3 rounded-md `}
          >
            <h1 className="font-semibold flex gap-x-2">
              {" "}
              <RxPlus size={25} /> Create new Groupe{" "}
            </h1>
          </div>
        </div>

        <div className="hidden 800px:block mt-5 w-full border-b border-[#e7e3e3ad]"></div>

        <div className="w-full mt-2 hidden 800px:block">
          <h1 className="text-[20px] text-[#dfd3d3d8] text-left">
            Groups you manage
          </h1>

          <div className="w-full mt-3 space-y-3">
            <div className="flex gap-x-3 items-center cursor-pointer px-1 py-2 rounded-md hover:bg-[#dfd9d954]">
              <img
                src={
                  "https://scontent.fdac24-3.fna.fbcdn.net/v/t39.30808-6/322396619_517587937101035_7998529692593856681_n.jpg?stp=dst-jpg_p118x118&_nc_cat=104&ccb=1-7&_nc_sid=4c1e7d&_nc_ohc=57rRW0XV_JkAX_amwhB&_nc_ht=scontent.fdac24-3.fna&oh=00_AfBzdOw3i5ZIsd2d_RanDgbkpgFWsbgpYUCHFhxvklODsw&oe=6500E8A7"
                }
                alt="img"
                className="h-[40px] w-[40px] rounded-lg"
              />

              <div className=" ">
                <h1> Free fiver course </h1>
                <p className="text-sm text-[#d1cbcbc7]">
                  {" "}
                  Last Active 6 days ago{" "}
                </p>
              </div>
            </div>

            <div className="flex gap-x-3 items-center cursor-pointer px-1 py-2 rounded-md hover:bg-[#dfd9d954]">
              <img
                src={
                  "https://scontent.fdac24-3.fna.fbcdn.net/v/t39.30808-6/326666981_3357156431195233_4249400484894537936_n.jpg?stp=dst-jpg_p118x118&_nc_cat=106&ccb=1-7&_nc_sid=4c1e7d&_nc_ohc=FvsqjSwi4HUAX-cvhwB&_nc_ht=scontent.fdac24-3.fna&oh=00_AfAM5yis4VSz-LuOwLzfvysym_fj03LRs7Xx8vHHMm9aGg&oe=64FF2EA9"
                }
                alt="img"
                className="h-[40px] w-[40px] rounded-lg"
              />

              <div className=" ">
                <h1> Powerplay program(HSC -2022)</h1>
                <p className="text-sm text-[#d1cbcbc7]">
                  {" "}
                  Last Active 6 days ago{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupsLeft;
