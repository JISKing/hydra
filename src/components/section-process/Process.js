import { Navigation, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "swiper/scss/navigation";

import "./process.scss";

import arrowProcess from "../../images/process/arrowProcess.svg";

function Process() {
  return (
    <div className="processCon" id="processCon">
      <div className="howWeBuild">
        <div>
          <h2>
            HOW WE BUILD <br />
            <span>WITH HYDRA VR?</span>
          </h2>
          <div className="arrowProcess">
            <img src={arrowProcess} alt="Arrow" />
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
      <div className="stepsCon">
        <div className="stepsNum">
          <div>01</div>
        </div>
        <div className="stepsNum">
          <div>02</div>
        </div>
        <div className="stepsNum">
          <div>03</div>
        </div>
        <div className="stepsNum">
          <div>04</div>
        </div>
      </div>
      <div className="titleSteps">
        <h3 className="step1 steps">
          3D Conception
          <br />& Design
        </h3>
        <h3 className="step2 steps">
          Interaction
          <br />
          Design
        </h3>
        <h3 className="step3 steps">
          VR World
          <br />
          User Testing
        </h3>
        <h3 className="step4 steps">
          Hydra VR
          <br />
          Deploy
        </h3>
      </div>

      <Swiper
        className="stepsConSwiper"
        modules={[Navigation, A11y]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        // pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className="stepSlide">
          <div className="stepsNumSwiper">
            <div>01</div>
          </div>
          <h3 className="stepsSwiper">
            3D Conception
            <br />& Design
          </h3>
        </SwiperSlide>
        <SwiperSlide className="stepSlide">
          <div className="stepsNumSwiper">
            <div>02</div>
          </div>
          <h3 className="stepsSwiper">
            Interaction
            <br />
            Design
          </h3>
        </SwiperSlide>
        <SwiperSlide className="stepSlide">
          <div className="stepsNumSwiper">
            <div>03</div>
          </div>
          <h3 className="stepsSwiper">
            VR World
            <br />
            User Testing
          </h3>
        </SwiperSlide>
        <SwiperSlide className="stepSlide">
          <div className="stepsNumSwiper">
            <div>04</div>
          </div>
          <h3 className="stepsSwiper">
            Hydra VR
            <br />
            Deploy
          </h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Process;
