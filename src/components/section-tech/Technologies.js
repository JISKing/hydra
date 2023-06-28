import { Navigation, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "swiper/scss/navigation";

import "./technologies.scss";

import unrealLogo from "../../images/tech-section/unreal-logo.svg";
import unityLogo from "../../images/tech-section/unity-logo.svg";
import oculusLogo from "../../images/tech-section/oculus-logo.svg";
import viveLogo from "../../images/tech-section/vive-logo.svg";

import arrowDown from "../../images/tech-section/arrow-down.svg";

function Technologies() {
  return (
    <div className="technologies" id="technologies">
      <div className="backgroundMobile"></div>
      <div className="slidingCon">
        <h2>
          TECHNOLOGIES & HARDWARE
          <br /> <span>USED BY HYDRA VR.</span>
        </h2>
        <div className="buttonCon">
          <button>
            <img src={arrowDown} alt="arrow-down"></img>
          </button>
          <div className="buttonBorder"></div>
        </div>
      </div>
      <div className="techList">
        <div className="sizeLogos">
          <img src={unrealLogo} alt="unreal-logo"></img>
        </div>

        <div className="sizeLogos">
          <img src={unityLogo} alt="unity-logo"></img>
        </div>

        <div className="sizeLogos">
          <img src={oculusLogo} alt="oculus-logo"></img>
        </div>

        <div className="sizeLogos">
          <img src={viveLogo} alt="vive-logo"></img>
        </div>
      </div>
      <Swiper
        className="techListSwiper"
        modules={[Navigation, A11y]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        // pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className="techSlide unreal">
          <div className="sizeLogosSwiper">
            <img src={unrealLogo} alt="unreal-logo"></img>
          </div>
        </SwiperSlide>
        <SwiperSlide className="techSlide unity">
          <div className="sizeLogosSwiper">
            <img src={unityLogo} alt="unity-logo"></img>
          </div>
        </SwiperSlide>
        <SwiperSlide className="techSlide oculus">
          <div className="sizeLogosSwiper">
            <img src={oculusLogo} alt="oculus-logo"></img>
          </div>
        </SwiperSlide>
        <SwiperSlide className="techSlide vive">
          <div className="sizeLogosSwiper">
            <img src={viveLogo} alt="vive-logo"></img>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Technologies;
