"use client";
import Footer from "@/components/footer/footer";
import Nav from "@/components/nav";
import { Keyboard, Mousewheel, Navigation, Pagination,Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CaseCard from "./caseCard";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Case = () => {
  const arr: number[] = [1, 2, 3, 4, 5];

  return (
    <main>
      <Nav />
      <div className="md:container ">
        <Swiper
          grabCursor={true}
          navigation={true}
          pagination={{clickable:true}}
          autoplay={{
            delay: 15000,
            disableOnInteraction: false,
          }}
          keyboard={true}
          mousewheel={true}
          loop={true}
          spaceBetween={20}
          modules={[Navigation, Pagination, Keyboard, Mousewheel, Autoplay]}
          className=" mt-[2rem] md:mt-[10rem] "
        >
          {arr.map((items) => (
            <SwiperSlide key={items}>
              <CaseCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Footer />
    </main>
  );
};

export default Case;
