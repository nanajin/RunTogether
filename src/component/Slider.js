import React from "react";
import Slider from 'react-slick';
import "./slick-theme.css";
import "./slick.css";
import {BsFillCaretLeftFill, BsFillCaretRightFill} from "react-icons/bs";

function Sliders(){
  const settings = {
    dots: true,
    infinite: true,
    // speed: 500,
    slidesToShow: 1, //한 화면에 보이는 콘텐츠 수
    slidesToScroll: 1, //한번에 넘어가는 콘텐츠 수
    autoplay: true,
    autoplaySpeed: 2500, //2.5초
    pauseOnHover: true,
    className: "center",
    centerMode: true,
    // centerPadding: "60px"
  };
  
  return(
    <div>
      <p className='challengeText'>Challenge</p>
      {/* <BsFillCaretLeftFill/> */}

      <Slider {...settings}>
        <div>
          <img src="/image/challenge1.jpg"></img>
        </div>
        <div>
          <img src="/image/challenge2.jpg"></img>
        </div>
        <div>
          <img src="/image/challenge3.png"></img>
        </div>
        <div>
          <img src="/image/challenge4.jpg"></img>
        </div>
      </Slider>

      {/* <BsFillCaretRightFill/> */}
    </div>
  );
}
export default Sliders;