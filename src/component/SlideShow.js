import React, {useEffect, useState, useRef} from "react";
import {Link} from 'react-router-dom';
import '../component/SlideShow.css';
import {BsCaretRightFill,BsCaretLeftFill} from 'react-icons/bs'

function SlideShow(){
  const totalSlides = 3; //전체 슬라이드 개수-1
  const [currentSlide, setCurrentSlide] = useState(0); // currentindex
  const slideRef = useRef(null);
  //다음 버튼 눌렀을 때
  const NextSlide=()=>{
    if(currentSlide >= totalSlides){
      setCurrentSlide(0);
    }
    else{
      setCurrentSlide(currentSlide+1);
    }
  };
  //이전 버튼 눌렀을 때
  const PrevSlide=()=>{
    if(currentSlide === 0){
      setCurrentSlide(totalSlides);
    }
    else{
      setCurrentSlide(currentSlide-1);
    }
  };
  //자동 슬라이드
  const useInterval=(callback, delay)=>{
    const savedCallback = useRef();
    useEffect(()=>{
      savedCallback.current = callback;
    },[callback]);
    useEffect(()=>{
      const tick=()=>{
        savedCallback.current();
      }
      if (delay !== null){
        let id = setInterval(tick, delay);
        return() => clearInterval(id);
      }
    },[delay]);
  }
  // const handleSlide=(index)=>{
  //   if(index<0){
  //     index = totalSlides -1;
  //   }
  // }
  useEffect(() => {
    let slideValue = currentSlide*4*25;
    if(currentSlide>0){
      slideValue += 0.1; //1.5가 원래 값
    }
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${slideValue}%)`; // 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다.
  }, [currentSlide]);

  return(
    <>
            <p className="challengeText">Challenge</p>

      <div className="container">
        <br></br>
        <div className="sliderContainer" ref={slideRef}>
          <useInterval/>
          <img src="/image/challenge1.jpg"></img>
          <img src="/image/challenge2.jpg"></img>
          <img src="/image/challenge3.png"></img>
          <img src="/image/challenge4.jpg"></img>
        </div>        
        <div className="buttonContainer">
          <button className="sliderButton" onClick={PrevSlide}><BsCaretLeftFill/></button>
          <button className="sliderButton" onClick={NextSlide}><BsCaretRightFill/></button>
        </div>
      </div> 
    </>
  )
}
export default SlideShow;