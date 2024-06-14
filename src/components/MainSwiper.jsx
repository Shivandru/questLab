import { Autoplay, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css/autoplay";
import MainCard from "../sections/MainCard";
import lee from "../assets/lee.png";
import sonx from "../assets/sonx.svg";
import kevin from "../assets/kevin.jpg";
import sriya from "../assets/sriya.jpg";
import kevinCompany from "../assets/kevinCompany.svg";
import sriyaCompany from "../assets/syriaCompany.png";
const MainSwiper = () => {
  return (
    <div style={{ height: "auto", width: "100%" }}>
      <Swiper
        modules={[Autoplay, A11y]}
        loop={true}
        spaceBetween={30}
        slidesPerView={2}
        breakpoints={{
          280: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          750: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        }}
        direction={"horizontal"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
      >
        <SwiperSlide>
          <MainCard
            para={
              "Quest didn't just connect our data; it gave life to our otherwise static platform. Understanding their journey and preferences has changed how we approach every feature on Sonx. We've seen fans more engaged, artists more connected, and our platform thrive like never before."
            }
            name={"Lee Gray"}
            position={"Founder"}
            companyLogo={sonx}
            avatar={lee}
          />
        </SwiperSlide>
        <SwiperSlide>
          <MainCard
            para={
              "Quest is a powerful growth engine that powered our entire Quest’s experience in our IRL event as well as mobile commerce experience. Our engagement & revenue grew as a result of seamless integration with Quest."
            }
            name={"Kevin"}
            position={"Co-founder"}
            companyLogo={kevinCompany}
            avatar={kevin}
          />
        </SwiperSlide>
        <SwiperSlide>
          <MainCard
            para={
              "Quest transformed our data-driven strategies. What was once a challenging process of connecting dots is now a streamlined flow of insights to action. Our campaigns are now more targeted, and we understand our users better."
            }
            name={"Sriya Maram"}
            position={"Founder"}
            companyLogo={sriyaCompany}
            avatar={sriya}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MainSwiper;
