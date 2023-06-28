import "./Background.scss";

import vector1 from "../../images/vectors/Vector1.svg";
import vector2 from "../../images/vectors/Vector2.svg";
import vector3 from "../../images/vectors/Vector3.svg";
import vector4 from "../../images/vectors/Vector4.svg";
import vector5 from "../../images/vectors/Vector5.svg";
import vector6 from "../../images/vectors/Vector6.svg";
import vector7 from "../../images/vectors/Vector7.svg";
import vector8 from "../../images/vectors/Vector8.svg";
import vector9 from "../../images/vectors/Vector9.svg";
import vector10 from "../../images/vectors/Vector10.svg";

function Background() {
  return (
    <>
      <img className="main vector1" src={vector1} alt="Vector 1" />
      <img className="main vector2" src={vector2} alt="Vector 2" />
      <img className="main vector3" src={vector3} alt="Vector 3" />
      <img className="main vector4" src={vector4} alt="Vector 4" />
      <img className="main vector5" src={vector5} alt="Vector 5" />
      <img className="main vector6" src={vector6} alt="Vector 6" />
      <img className="main vector7" src={vector7} alt="Vector 7" />
      <img className="main vector8" src={vector8} alt="Vector 8" />
      <img className="main vector9" src={vector9} alt="Vector 9" />
      <img className="main vector10" src={vector10} alt="Vector 10" />
    </>
  );
}

export default Background;
