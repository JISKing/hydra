import "./about.scss";

import aboutPicture from "../../images/pictures/aboutPart.svg";

import arrowAbout from "../../images/about/arrowAbout.svg";

function About() {
  return (
    <div className="aboutCon" id="aboutCon">
      <div className="introduction">
        <div>
          <h2>
            INTRODUCTION <br />
            <span>TO HYDRA VR</span>
          </h2>
          <div className="arrowAbout">
            <img src={arrowAbout} alt="Arrow" />
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
      <div className="infoAboutCon">
        <img className="aboutPicture" src={aboutPicture} alt="about img" />
        <div className="aboutHydra">
          <h2>
            ABOUT <br />
            <span>HYDRA VR</span>
          </h2>
          <p>
            Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus
            mattis rhoncus urna neque viverra justo. Vivamus at augue eget arcu
            dictum. Ultrices gravida dictum fusce ut placerat orci. Aenean et
            tortor at risus viverra adipiscing at in. Mattis aliquam faucibus
            purus in massa. Est placerat in egestas erat imperdiet sed.
            Consequat semper viverra nam libero justo laoreet sit amet. Aliquam
            etiam erat velit scelerisque in dictum non consectetur a. Laoreet
            sit amet cursus sit amet. Vel eros donec ac odio tempor orci
            dapibus. Sem nulla pha retra diam sit amet nisl suscipit adipiscing
            bibendum. Leo a diam sollicitudi n tempor.
          </p>
          <button>LET'S GET IN TOUCH</button>
        </div>
      </div>
    </div>
  );
}

export default About;
