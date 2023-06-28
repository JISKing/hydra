import { Navigation, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "swiper/scss/navigation";

import "./services.scss";

import card1 from "../../images/services/card1.svg";
import card2 from "../../images/services/card2.svg";
import card3 from "../../images/services/card3.svg";
import card4 from "../../images/services/card4.svg";
import cardVector from "../../images/services/card-vector.svg";

import bigArrow from "../../images/services/bigArrow.svg";

function Services() {
  return (
    <div className="servicesCon" id="servicesCon">
      <div className="whyBuild">
        <div>
          <h2>
            WHY BUILD <br />
            <span>WHY HYDRA?</span>
          </h2>
          <div className="arrowServices">
            <img src={bigArrow} alt="Arrow" />
          </div>
        </div>

        <p>
          Vitae sapien pellentesque habitant morbi tristique senectus et netus
          et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
          amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
          aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in.
          Lectus magna fringilla urna porttitor rhoncus vitae.
        </p>
      </div>
      <div className="cardCon">
        <div className="card">
          <img className="cardPic" src={card1} alt="cardPic"></img>
          <h3>SIMULATION</h3>
          <img className="cardVector" src={cardVector} alt="cardVector"></img>
          <p>
            Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
            porttitor rhoncus libero justo laoreet sit amet vitae.
          </p>
          <button>TRY IT NOW</button>
        </div>

        <div className="card">
          <img className="cardPic" src={card2} alt="cardPic"></img>
          <h3>EDUCATION</h3>
          <img className="cardVector" src={cardVector} alt="cardVector"></img>
          <p>
            Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
            porttitor rhoncus libero justo laoreet sit amet vitae.
          </p>
          <button>TRY IT NOW</button>
        </div>

        <div className="card">
          <img className="cardPic" src={card3} alt="cardPic"></img>
          <h3>SELF-CARE</h3>
          <img className="cardVector" src={cardVector} alt="cardVector"></img>
          <p>
            Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
            porttitor rhoncus libero justo laoreet sit amet vitae.
          </p>
          <button>TRY IT NOW</button>
        </div>

        <div className="card">
          <img className="cardPic" src={card4} alt="cardPic"></img>
          <h3>OUTDOOR</h3>
          <img className="cardVector" src={cardVector} alt="cardVector"></img>
          <p>
            Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
            porttitor rhoncus libero justo laoreet sit amet vitae.
          </p>
          <button>TRY IT NOW</button>
        </div>
      </div>

      <Swiper
        className="cardConSwiper"
        modules={[Navigation, A11y]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        // pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className="swiperCard">

          <div className="cardSwiper">
            <img className="cardPicSwiper" src={card1} alt="cardPic"></img>
            <h3>SIMULATION</h3>
            <img className="cardVectorSwiper" src={cardVector} alt="cardVector"></img>
            <p>
              Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
              porttitor rhoncus libero justo laoreet sit amet vitae.
            </p>
            <button>TRY IT NOW</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiperCard">
          <div className="cardSwiper">
            <img className="cardPicSwiper" src={card2} alt="cardPic"></img>
            <h3>EDUCATION</h3>
            <img className="cardVectorSwiper" src={cardVector} alt="cardVector"></img>
            <p>
              Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
              porttitor rhoncus libero justo laoreet sit amet vitae.
            </p>
            <button>TRY IT NOW</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiperCard">
          <div className="cardSwiper">
            <img className="cardPicSwiper" src={card3} alt="cardPic"></img>
            <h3>SELF-CARE</h3>
            <img className="cardVectorSwiper" src={cardVector} alt="cardVector"></img>
            <p>
              Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
              porttitor rhoncus libero justo laoreet sit amet vitae.
            </p>
            <button>TRY IT NOW</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiperCard">
          <div className="cardSwiper">
            <img className="cardPicSwiper" src={card4} alt="cardPic"></img>
            <h3>OUTDOOR</h3>
            <img className="cardVectorSwiper" src={cardVector} alt="cardVector"></img>
            <p>
              Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
              porttitor rhoncus libero justo laoreet sit amet vitae.
            </p>
            <button>TRY IT NOW</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Services
