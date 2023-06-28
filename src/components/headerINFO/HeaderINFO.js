import "./headerInfo.scss";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";

import locationIcon from "../../images/headerINFO/location-icon.svg";
import phoneIcon from "../../images/headerINFO/phone-icon.svg";
import mailIcon from "../../images/headerINFO/mail-icon.svg";
import line1 from "../../images/headerINFO/line-info1.svg";
import line2 from "../../images/headerINFO/line-info2.svg";

import headPicture from "../../images/headerINFO/head-picture.svg";

function HeaderINFO() {
  return (
    <div className="headerINFO">
      <div className="infoSection">
        <div className="headText">
          <h1 className="headTitle">
            <span id="textDive">Dive</span> Into The Depths <br /> Of
            <span id="textVR"> Virtual Reality</span>
          </h1>
          <p className="textHeaderInfo">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
            Lectus mauris eros in vitae .
          </p>
          <button className="buildButton">BUILD YOUR WORLD</button>
        </div>

        <div className="imageCon">
          <img src={headPicture} alt="headPicture" />
        </div>
      </div>

      <div className="infoContainer">
        <div className="infoText">
          <div className="infoWrapper">
            <img
              className="infoIcon"
              src={locationIcon}
              alt="location icon"
            ></img>
            <div className="information">
              <h2>Pay Us a Visit</h2>
              <p>Union St, Seattle, WA 98101, United States</p>
            </div>
          </div>

          <img className="line1" src={line1} alt="line"></img>

          <div className="infoWrapper">
            <img
              className="infoIcon marginIcon"
              src={phoneIcon}
              alt="phone icon"
            ></img>
            <div className="information">
              <h2>Give Us a Call</h2>
              <p>(110) 111-1010</p>
            </div>
          </div>

          <img className="line2" src={line2} alt="line"></img>

          <div className="infoWrapper">
            <img
              className="infoIcon marginIcon"
              src={mailIcon}
              alt="mail icon"
            ></img>
            <div className="information marginMail">
              <h2>Send Us a Message</h2>
              <p>Contact@HydraVTech.com</p>
            </div>
          </div>
        </div>
      </div>

      <Swiper
        className="swiper"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        // pagination={{ clickable: true }}
        
   
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className="swiperSlide">
          <div className="infoSwiper">
            <img
              className="infoIconSwiper"
              src={locationIcon}
              alt="location icon"
            ></img>
            <div className="informationSwiper">
              <h2>Pay Us a Visit</h2>
              <p>Union St, Seattle, WA 98101, United States</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <div className="infoSwiper">
            <img
              className="infoIconSwiper marginIconSwiper"
              src={phoneIcon}
              alt="phone icon"
            ></img>
            <div className="informationSwiper">
              <h2>Give Us a Call</h2>
              <p>(110) 111-1010</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <div className="infoSwiper">
            <img
              className="infoIconSwiper marginIconSwiper"
              src={mailIcon}
              alt="mail icon"
            ></img>
            <div className="informationSwiper marginMailSwiper">
              <h2>Send Us a Message</h2>
              <p>Contact@HydraVTech.com</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HeaderINFO;
