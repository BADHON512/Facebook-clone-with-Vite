import { AiOutlineSearch } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { PiUserSwitchFill } from "react-icons/pi";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { AiFillGift } from "react-icons/ai";
import React, { useEffect } from "react";
import { toast } from "react-toastify";

const HomeRight = () => {
  const [Hide, setHide] = React.useState({
    A: false,
    B: false,
    C: false,
    D: false,
  });

  if (Hide.A || Hide.B) {
    toast.success("Friend request accepted");
  }

  if (Hide.C || Hide.D) {
    toast.error("Friend request deleted successfully");
  }

  return (
    <div className=" hidden 800px:block  shadow-2xl h-[92vh] w-full bg-[#242526] text-white overflow-y-scroll">
      <div className=" p-5">
        <div className="flex justify-between ">
          <h1 className="text-sm">Your Pages and profiles</h1>
          <BsThreeDots size={20} />
        </div>

        <div className="p-5 space-y-3">
          <div className="flex gap-x-3">
            <PiUserSwitchFill size={25} />
            <h1 className="text-sm text-[#ADB0B5]">Switch into Page</h1>
          </div>

          <div className="flex gap-x-3">
            <HiOutlineSpeakerphone size={25} />
            <h2 className="text-sm text-[#ADB0B5]">Crate promotion</h2>
          </div>
        </div>
        <div className="border-b-2 my-3 border-gray-100 w-[90%]"></div>

        <div className="">
          <div className="flex justify-between">
            <h1 className="text-[#ADB0B5] ">Friend Requests</h1>
            <h1 className="text-blue-400 cursor-pointer">See all</h1>
          </div>

          {Hide.A ||
            (Hide.C && (
              <div className="mt-3">
                <h1>Request is empty</h1>
              </div>
            ))}

          <div className={`${Hide.A || Hide.C ? "hidden" : null} mt-2`}>
            <div className="flex gap-x-2">
              <img
                src={"/img/raja.jpg"}
                alt="img"
                className="h-[50px] w-[50px] rounded-full object-fill"
              />

              <div>
                <div className="flex justify-between">
                  <h1
                    className="text-[#dbe3f1]
                                font-semibold text-[20px]"
                  >
                    raja king
                  </h1>
                  <h1 className="text-[#cbd5e7]">2d</h1>
                </div>
                <div
                  className="flex relative items-center
                         gap-x-3 mt-1"
                >
                  <div>
                    <img
                      src={"/img/raja.jpg"}
                      alt="img"
                      className="h-[20px] w-[20px] rounded-full absolute top-0"
                    />
                  </div>

                  <div>
                    <img
                      src={"/img/badhon.jpg"}
                      alt="img"
                      className="h-[20px] w-[20px] rounded-full"
                    />
                  </div>

                  <h1 className="text-[#ADB0B5] text-sm">69 mutual friends</h1>
                </div>

                <div className="flex gap-x-3 mt-4">
                  <button
                    onClick={() => setHide({ ...Hide, A: true })}
                    className="p-2 bg-blue-500  w-[100px] rounded-md"
                  >
                    confirm
                  </button>
                  <button
                    onClick={() => setHide({ ...Hide, C: true })}
                    className="p-2 bg-[#444546] rounded-md w-[100px]"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className={`${Hide.B || Hide.D ? "hidden" : null} mt-2`}>
            <div className="flex gap-x-2">
              <img
                src={"/game/1.png"}
                alt="img"
                className="h-[50px] w-[50px] rounded-full object-fill"
              />

              <div>
                <div className="flex justify-between">
                  <h1
                    className="text-[#dbe3f1]
                                font-semibold text-[20px]"
                  >
                    Robin khan
                  </h1>
                  <h1 className="text-[#cbd5e7]">2d</h1>
                </div>
                <div
                  className="flex relative items-center
                         gap-x-3 mt-1"
                >
                  <div>
                    <img
                      src={"/img/raja.jpg"}
                      alt="img"
                      className="h-[20px] w-[20px] rounded-full absolute top-0"
                    />
                  </div>

                  <div>
                    <img
                      src={"/game/10.png"}
                      alt="img"
                      className="h-[20px] w-[20px] rounded-full"
                    />
                  </div>

                  <h1 className="text-[#ADB0B5] text-sm">69 mutual friends</h1>
                </div>

                <div className="flex gap-x-3 mt-4">
                  <button
                    onClick={() => setHide({ ...Hide, B: true })}
                    className="p-2 bg-blue-500  w-[100px] rounded-md"
                  >
                    confirm
                  </button>
                  <button
                    onClick={() => setHide({ ...Hide, D: true })}
                    className="p-2 bg-[#444546] rounded-md w-[100px]"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b-2 my-5 border-gray-100 w-[90%]"></div>

        <div className="flex gap-x-2">
          <AiFillGift size={40} color="green" />
          <h1>md jahid and 5 others have birthdays today</h1>
        </div>
        <div className="border-b-2 my-3 border-gray-100 w-[90%]"></div>

        <div className="flex justify-between mt-4 items-center">
          <h1 className="text-[#a8a8a8]">Contacts</h1>

          <div className="flex gap-x-5">
            <AiOutlineSearch size={20} className="cursor-pointer" />
            <BsThreeDots size={20} className="cursor-pointer" />
          </div>
        </div>

        <div className="space-y-5 mt-4">
          <div className="flex gap-x-3  items-center">
            <div className="w-[50px] h-[50px] relative">
              <img
                src="/img/badhon.jpg"
                alt=""
                className="rounded-full h-full w-full object-cover cursor-pointe"
              />
              <div className="w-3 h-3 rounded-full absolute bottom-0 right-1 border border-black bg-green-500"></div>
            </div>
            <h1 className="cursor-pointer">Md badhon</h1>
          </div>

          <div className="flex gap-x-3  items-center">
            <div className="w-[50px] h-[50px] relative">
              <img
                src="/game/8.png"
                alt=""
                className="rounded-full h-full w-full cursor-pointer "
              />
              <div className="w-3 h-3 rounded-full absolute bottom-0 right-1 border border-black bg-green-500"></div>
            </div>
            <h1 className="cursor-pointer">raja</h1>
          </div>

          <div className="flex gap-x-3  items-center">
            <div className="w-[50px] h-[50px] relative">
              <img
                src="/game/5.png"
                alt=""
                className="rounded-full h-full w-full cursor-pointer "
              />
              <div className="w-3 h-3 rounded-full absolute bottom-0 right-1 border border-black bg-green-500"></div>
            </div>
            <h1 className="cursor-pointer">badsha</h1>
          </div>

          <div className="flex gap-x-3  items-center">
            <div className="w-[50px] h-[50px] relative">
              <img
                src="/game/4.png"
                alt=""
                className="rounded-full h-full w-full cursor-pointer "
              />
              <div className="w-3 h-3 rounded-full absolute bottom-0 right-1 border border-black bg-green-500"></div>
            </div>
            <h1 className="cursor-pointer">Demo</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeRight;
