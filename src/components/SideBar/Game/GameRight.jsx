import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const GameRight = () => {
  const by = 2 !== 2;
  console.log(by);
  return (
    <div className="w-full min-h-screen p-5 text-white ">
      <div className="w-full">
        <h1 className="text-[25px] font-bold text-[#ffffffd5]">
          Recently Played
        </h1>

        <div className="h-[15vh] w-[10vw] bg-red-400 mt-2 relative rounded-md">
          <img src="/game/1.png" className="h-full w-full rounded-md" alt="" />

          <h1 className="font-bold  absolute bottom-3 left-2">AHA</h1>
        </div>

        <div className="mt-8 w-full">
          <h1 className="text-[25px] font-bold text-[#ffffffd5]">
            Game we love
          </h1>

          <div className="flex gap-x-1  ">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={0}
              slidesPerView={4}
              navigation
              pagination={{ clickable: true }}
            >
              <SwiperSlide>
                <div
                  className="flex  h-[20vh] w-[15vw] mt-5 bg-red-400 
                          rounded-lg relative"
                >
                  <img
                    src="/game/2.png"
                    className="h-full w-full rounded-lg"
                    alt=""
                  />

                  <div className="h-[10vh] w-full  backdrop-blur-md  absolute bottom-0 p-2">
                    <h1 className="mt-1 text-[#fdfdfdd2] font-semibold text-[18px]">
                      Collect Em All
                    </h1>
                    <h1 className="mt-1 text-[#fdfdfdd2] pl-3">631k player</h1>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div
                  className="flex
                                 h-[20vh] w-[15vw] mt-5 bg-red-400 
                          rounded-lg relative"
                >
                  <img
                    src="/game/3.png"
                    className="h-full w-full rounded-lg"
                    alt=""
                  />

                  <div className="h-[10vh] w-full  backdrop-blur-md  absolute bottom-0 p-2">
                    <h1 className="mt-1 text-[#fdfdfdd2] font-semibold text-[18px]">
                      Collect Em All
                    </h1>
                    <h1 className="mt-1 text-[#fdfdfdd2] pl-3">631k player</h1>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div
                  className="flex gap-x-2 h-[20vh] w-[15vw] mt-5 bg-red-400 
                          rounded-lg relative"
                >
                  <img
                    src="/game/4.png"
                    className="h-full w-full rounded-lg"
                    alt=""
                  />

                  <div className="h-[10vh] w-full  backdrop-blur-md  absolute bottom-0 p-2">
                    <h1 className="mt-1 text-[#fdfdfdd2] font-semibold text-[18px]">
                      Collect Em All
                    </h1>
                    <h1 className="mt-1 text-[#fdfdfdd2] pl-3">631k player</h1>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div
                  className="flex gap-x-2 h-[20vh] w-[15vw] mt-5 bg-red-400 
                          rounded-lg relative"
                >
                  <img
                    src="/game/5.png"
                    className="h-full w-full rounded-lg"
                    alt=""
                  />

                  <div className="h-[10vh] w-full  backdrop-blur-md  absolute bottom-0 p-2">
                    <h1 className="mt-1 text-[#fdfdfdd2] font-semibold text-[18px]">
                      Collect Em All
                    </h1>
                    <h1 className="mt-1 text-[#fdfdfdd2] pl-3">631k player</h1>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div
                  className="flex gap-x-2 h-[20vh] w-[15vw] mt-5 bg-red-400 
                          rounded-lg relative"
                >
                  <img
                    src="/game/6.png"
                    className="h-full w-full rounded-lg"
                    alt=""
                  />

                  <div className="h-[10vh] w-full  backdrop-blur-md  absolute bottom-0 p-2">
                    <h1 className="mt-1 text-[#fdfdfdd2] font-semibold text-[18px]">
                      Collect Em All
                    </h1>
                    <h1 className="mt-1 text-[#fdfdfdd2] pl-3">631k player</h1>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div
                  className="flex gap-x-2 h-[20vh] w-[15vw] mt-5 bg-red-400 
                          rounded-lg relative"
                >
                  <img
                    src="/game/7.png"
                    className="h-full w-full rounded-lg"
                    alt=""
                  />

                  <div className="h-[10vh] w-full  backdrop-blur-md  absolute bottom-0 p-2">
                    <h1 className="mt-1 text-[#fdfdfdd2] font-semibold text-[18px]">
                      Collect Em All
                    </h1>
                    <h1 className="mt-1 text-[#fdfdfdd2] pl-3">631k player</h1>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="mt-8 w-full">
          <h1 className="text-[25px] font-bold text-[#ffffffd5]">
            More games like AHA
          </h1>

          <div className="flex gap-x-4 flex-wrap justify-center">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={0}
              slidesPerView={6}
              navigation
              pagination={{ clickable: true }}
            >
              <SwiperSlide>
                <div
                  className="flex gap-x-2 h-[20vh] w-[10vw] mt-5 bg-red-400 
                          rounded-lg relative"
                >
                  <img
                    src="/game/8.png"
                    className="h-full w-full rounded-lg"
                    alt="not fund"
                  />

                  <div className="h-[7vh] w-full  backdrop-blur-md  absolute bottom-0 p-2">
                    <h1 className="mt-1 text-[#fdfdfdd2] font-semibold text-[18px]">
                      Collect Em All
                    </h1>
                    <h1 className="mt-1 text-[#fdfdfdd2] pl-3">631k player</h1>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div
                  className="flex gap-x-2 h-[20vh] w-[10vw] mt-5 bg-red-400 
                          rounded-lg relative"
                >
                  <img
                    src="/game/9.png"
                    className="h-full w-full rounded-lg"
                    alt=""
                  />

                  <div className="h-[7vh] w-full  backdrop-blur-md  absolute bottom-0 p-2">
                    <h1 className="mt-1 text-[#fdfdfdd2] font-semibold text-[18px]">
                      Collect Em All
                    </h1>
                    <h1 className="mt-1 text-[#fdfdfdd2] pl-3">631k player</h1>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div
                  className="flex gap-x-2 h-[20vh] w-[10vw] mt-5 bg-red-400 
                          rounded-lg relative"
                >
                  <img
                    src="/game/10.png"
                    className="h-full w-full rounded-lg"
                    alt=""
                  />

                  <div className="h-[7vh] w-full  backdrop-blur-md  absolute bottom-0 p-2">
                    <h1 className="mt-1 text-[#fdfdfdd2] font-semibold text-[18px]">
                      Collect Em All
                    </h1>
                    <h1 className="mt-1 text-[#fdfdfdd2] pl-3">631k player</h1>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div
                  className="flex gap-x-2 h-[20vh] w-[10vw] mt-5 bg-red-400 
                          rounded-lg relative"
                >
                  <img
                    src="/game/11.png"
                    className="h-full w-full rounded-lg"
                    alt=""
                  />

                  <div className="h-[7vh] w-full  backdrop-blur-md  absolute bottom-0 p-2">
                    <h1 className="mt-1 text-[#fdfdfdd2] font-semibold text-[18px]">
                      Collect Em All
                    </h1>
                    <h1 className="mt-1 text-[#fdfdfdd2] pl-3">631k player</h1>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div
                  className="flex gap-x-2 h-[20vh] w-[10vw] mt-5 bg-red-400 
                          rounded-lg relative"
                >
                  <img
                    src="/game/12.png"
                    className="h-full w-full rounded-lg"
                    alt=""
                  />

                  <div className="h-[7vh] w-full  backdrop-blur-md  absolute bottom-0 p-2">
                    <h1 className="mt-1 text-[#fdfdfdd2] font-semibold text-[18px]">
                      Collect Em All
                    </h1>
                    <h1 className="mt-1 text-[#fdfdfdd2] pl-3">631k player</h1>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div
                  className="flex gap-x-2 h-[20vh] w-[10vw] mt-5 bg-red-400 
                          rounded-lg relative"
                >
                  <img
                    src="/game/13.png"
                    className="h-full w-full rounded-lg"
                    alt=""
                  />

                  <div className="h-[7vh] w-full  backdrop-blur-md  absolute bottom-0 p-2">
                    <h1 className="mt-1 text-[#fdfdfdd2] font-semibold text-[18px]">
                      Collect Em All
                    </h1>
                    <h1 className="mt-1 text-[#fdfdfdd2] pl-3">631k player</h1>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="flex gap-x-2 h-[20vh] w-[10vw] mt-5 bg-red-400 
                          rounded-lg relative"
                >
                  <img
                    src="/game/14.png"
                    className="h-full w-full rounded-lg"
                    alt=""
                  />

                  <div className="h-[7vh] w-full  backdrop-blur-md  absolute bottom-0 p-2">
                    <h1 className="mt-1 text-[#fdfdfdd2] font-semibold text-[18px]">
                      Collect Em All
                    </h1>
                    <h1 className="mt-1 text-[#fdfdfdd2] pl-3">631k player</h1>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="flex gap-x-2 h-[20vh] w-[10vw] mt-5 bg-red-400 
                          rounded-lg relative"
                >
                  <img
                    src="/game/15.png"
                    className="h-full w-full rounded-lg"
                    alt=""
                  />

                  <div className="h-[7vh] w-full  backdrop-blur-md  absolute bottom-0 p-2">
                    <h1 className="mt-1 text-[#fdfdfdd2] font-semibold text-[18px]">
                      Collect Em All
                    </h1>
                    <h1 className="mt-1 text-[#fdfdfdd2] pl-3">631k player</h1>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="flex gap-x-2 h-[20vh] w-[10vw] mt-5 bg-red-400 
                          rounded-lg relative"
                >
                  <img
                    src="/game/16.png"
                    className="h-full w-full rounded-lg"
                    alt=""
                  />

                  <div className="h-[7vh] w-full  backdrop-blur-md  absolute bottom-0 p-2">
                    <h1 className="mt-1 text-[#fdfdfdd2] font-semibold text-[18px]">
                      Collect Em All
                    </h1>
                    <h1 className="mt-1 text-[#fdfdfdd2] pl-3">631k player</h1>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameRight;
