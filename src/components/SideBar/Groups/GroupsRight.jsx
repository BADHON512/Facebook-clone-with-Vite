import React, { useState } from "react";
import { BiSolidCommentDetail } from "react-icons/bi";
import { BsFillChatDotsFill } from "react-icons/bs";
import { FcCloseUpMode } from "react-icons/fc";
import { PiHandTapFill } from "react-icons/pi";

const GroupsRight = () => {
  const [view, setView] = useState(0);
  return (
    <div className="w-full h-[90vh] text-white">
      <div className="w-[23vw] mx-auto  min-h-[40vh] bg-[#242526] rounded-md">
        <div className="p-3">
          <h1 className="text-[18px] text-[#eceaea]">Chats you should join</h1>

          <div className="mt-2">
            <div className="w-full mt-3 space-y-2">
              <div className="flex gap-x-3 items-center cursor-pointer px-1 py-2 rounded-md hover:bg-[#dfd9d954]">
                <div className="relative">
                  <img
                    src={
                      "https://res.cloudinary.com/djo5r2a5z/image/upload/v1690736701/pf/362250096_646584860746302_8393201739586327565_n_cy1bbd.jpg"
                    }
                    alt="img"
                    className="h-[40px] w-[40px] rounded-lg"
                  />
                  <div className="absolute -bottom-3 -left-2 h-[30px] w-[30px] rounded-full flex items-center justify-center">
                    {" "}
                    <div className="h-[35px] w-[35px] rounded-full bg-gray-300 flex items-center justify-center">
                      <BsFillChatDotsFill color="#0fc709" size={25} />
                    </div>
                  </div>
                </div>

                <div className=" ">
                  <h1> General chat </h1>
                  <p className="text-sm text-[#d1cbcbc7]">Click to join </p>
                </div>
              </div>
              <div className="flex gap-x-3 items-center cursor-pointer px-1 py-2 rounded-md hover:bg-[#dfd9d954]">
                <div className="relative">
                  <img
                    src={
                      "https://res.cloudinary.com/djo5r2a5z/image/upload/v1690301049/cld-sample-4.jpg"
                    }
                    alt="img"
                    className="h-[40px] w-[40px] rounded-lg"
                  />
                  <div className="absolute -bottom-3 -left-2 h-[30px] w-[30px] rounded-full flex items-center justify-center">
                    <div className="h-[35px] w-[35px] rounded-full bg-gray-300 flex items-center justify-center">
                      <FcCloseUpMode color="#0fc709" size={25} />
                    </div>
                  </div>
                </div>

                <div className=" ">
                  <h1> Frontend Developer </h1>
                  <p className="text-sm text-[#d1cbcbc7]"> Click to join </p>
                </div>
              </div>
              <div className="flex gap-x-3 items-center cursor-pointer px-1 py-2 rounded-md hover:bg-[#dfd9d954]">
                <div className="relative">
                  <img
                    src={
                      "https://scontent.fdac24-3.fna.fbcdn.net/v/t39.30808-6/322396619_517587937101035_7998529692593856681_n.jpg?stp=dst-jpg_p118x118&_nc_cat=104&ccb=1-7&_nc_sid=4c1e7d&_nc_ohc=57rRW0XV_JkAX_amwhB&_nc_ht=scontent.fdac24-3.fna&oh=00_AfBzdOw3i5ZIsd2d_RanDgbkpgFWsbgpYUCHFhxvklODsw&oe=6500E8A7"
                    }
                    alt="img"
                    className="h-[40px] w-[40px] rounded-lg"
                  />
                  <div className="absolute -bottom-3 -left-2 h-[30px] w-[30px] rounded-full flex items-center justify-center">
                    <div className="h-[35px] w-[35px] rounded-full bg-gray-300 flex items-center justify-center">
                      <PiHandTapFill color="#0fc709" size={25} />
                    </div>
                  </div>
                </div>

                <div className=" ">
                  <h1> Free Upwork course </h1>
                  <p className="text-sm text-[#d1cbcbc7]">Click to join </p>
                </div>
              </div>

              <div className="flex gap-x-3 items-center cursor-pointer px-1 py-2 rounded-md hover:bg-[#dfd9d954]">
                <div className="relative">
                  <img
                    src={
                      "https://res.cloudinary.com/djo5r2a5z/image/upload/v1690301014/sample.jpg"
                    }
                    alt="img"
                    className="h-[40px] w-[40px] rounded-lg"
                  />
                  <div className="absolute -bottom-3 -left-2 h-[30px] w-[30px] rounded-full flex items-center justify-center">
                    <div className="h-[35px] w-[35px] rounded-full bg-gray-300 flex items-center justify-center">
                      <BsFillChatDotsFill color="black" size={25} />
                    </div>
                  </div>
                </div>

                <div className=" ">
                  <h1> Mern stack developer </h1>
                  <p className="text-sm text-[#d1cbcbc7]">Click to join </p>
                </div>
              </div>
              {/* hidden element */}

              <div className={`${view === 1 ? "block" : "hidden"}`}>
                <div className="flex gap-x-3 items-center cursor-pointer px-1 py-2 rounded-md hover:bg-[#dfd9d954]">
                  <div className="relative">
                    <img
                      src={
                        "https://res.cloudinary.com/djo5r2a5z/image/upload/v1690304930/pf/javascript_f2hhu8.png"
                      }
                      alt="img"
                      className="h-[40px] w-[40px] rounded-lg"
                    />
                    <div className="absolute -bottom-3 -left-2 h-[30px] w-[30px] rounded-full flex items-center justify-center">
                      <div className="h-[35px] w-[35px] rounded-full bg-gray-300 flex items-center justify-center">
                        <BsFillChatDotsFill color="#0fc709" size={25} />
                      </div>
                    </div>
                  </div>

                  <div className=" ">
                    <h1> Full Stack developer </h1>
                    <p className="text-sm text-[#d1cbcbc7]">Click to join </p>
                  </div>
                </div>

                <div className="flex gap-x-3 items-center cursor-pointer px-1 py-2 rounded-md hover:bg-[#dfd9d954]">
                  <div className="relative">
                    <img
                      src={
                        "https://res.cloudinary.com/djo5r2a5z/image/upload/v1690301048/cld-sample-2.jpg"
                      }
                      alt="img"
                      className="h-[40px] w-[40px] rounded-lg"
                    />
                    <div className="absolute -bottom-3 -left-2 h-[30px] w-[30px] rounded-full flex items-center justify-center">
                      <div className="h-[35px] w-[35px] rounded-full bg-gray-300 flex items-center justify-center">
                        <BsFillChatDotsFill color="gray" size={25} />
                      </div>
                    </div>
                  </div>

                  <div className=" ">
                    <h1> Free Fiverr course </h1>
                    <p className="text-sm text-[#d1cbcbc7]">Click to join </p>
                  </div>
                </div>

                <div className="flex gap-x-3 items-center cursor-pointer px-1 py-2 rounded-md hover:bg-[#dfd9d954]">
                  <div className="relative">
                    <img
                      src={
                        "https://res.cloudinary.com/djo5r2a5z/image/upload/v1690301048/cld-sample-3.jpg"
                      }
                      alt="img"
                      className="h-[40px] w-[40px] rounded-lg"
                    />
                    <div className="absolute -bottom-3 -left-2 h-[30px] w-[30px] rounded-full flex items-center justify-center">
                      <div className="h-[35px] w-[35px] rounded-full bg-gray-300 flex items-center justify-center">
                        <PiHandTapFill color="red" size={25} />
                      </div>
                    </div>
                  </div>

                  <div className=" ">
                    <h1> Nagarpur News </h1>
                    <p className="text-sm text-[#d1cbcbc7]">Click to join </p>
                  </div>
                </div>
                <div className="flex gap-x-3 items-center cursor-pointer px-1 py-2 rounded-md hover:bg-[#dfd9d954]">
                  <div className="relative">
                    <img
                      src={
                        "https://res.cloudinary.com/djo5r2a5z/image/upload/v1690304930/pf/mongodb_vnokxn.png"
                      }
                      alt="img"
                      className="h-[40px] w-[40px] rounded-lg"
                    />
                    <div className="absolute -bottom-3 -left-2 h-[30px] w-[30px] rounded-full flex items-center justify-center">
                      <div className="h-[35px] w-[35px] rounded-full bg-gray-300 flex items-center justify-center">
                        <BsFillChatDotsFill color="red" size={25} />
                      </div>
                    </div>
                  </div>

                  <div className=" ">
                    <h1> Free mongoodb course </h1>
                    <p className="text-sm text-[#d1cbcbc7]">Click to join </p>
                  </div>
                </div>
                <div className="flex gap-x-3 items-center cursor-pointer px-1 py-2 rounded-md hover:bg-[#dfd9d954]">
                  <div className="relative">
                    <img
                      src={
                        "https://res.cloudinary.com/djo5r2a5z/image/upload/v1690304929/pf/redux_dgzz9f.png"
                      }
                      alt="img"
                      className="h-[40px] w-[40px] rounded-lg"
                    />
                    <div className="absolute -bottom-3 -left-2 h-[30px] w-[30px] rounded-full flex items-center justify-center">
                      <div className="h-[35px] w-[35px] rounded-full bg-gray-300 flex items-center justify-center">
                        <BsFillChatDotsFill color="orange" size={25} />
                      </div>
                    </div>
                  </div>

                  <div className=" ">
                    <h1> Free Redux course </h1>
                    <p className="text-sm text-[#d1cbcbc7]">Click to join </p>
                  </div>
                </div>
                <div className="flex gap-x-3 items-center cursor-pointer px-1 py-2 rounded-md hover:bg-[#dfd9d954]">
                  <div className="relative">
                    <img
                      src={
                        "https://res.cloudinary.com/djo5r2a5z/image/upload/v1690304930/pf/reactjs_qw5x9d.png"
                      }
                      alt="img"
                      className="h-[40px] w-[40px] rounded-lg"
                    />
                    <div className="absolute -bottom-3 -left-2 h-[30px] w-[30px] rounded-full flex items-center justify-center">
                      <div className="h-[35px] w-[35px] rounded-full bg-gray-300 flex items-center justify-center">
                        <PiHandTapFill color="red" size={25} />
                      </div>
                    </div>
                  </div>

                  <div className=" ">
                    <h1> Free react course </h1>
                    <p className="text-sm text-[#d1cbcbc7]">Click to join </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${view === 1 ? "hidden" : "w-[21vw]  mt-5 h-[40px]"}`}
            >
              <button
                onClick={() => setView(1)}
                className="h-full w-[18vw] mx-auto block rounded-md bg-[#84848bd8] font-semibold text-[20px]"
              >
                See more{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupsRight;
