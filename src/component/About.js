import React from "react";
import styles from './About.module.css';
import Header from "../staticComponent/Header";
import Footer from "../staticComponent/Footer";
function About(){
  return(
    <>
    <Header/>
      <div className={styles.about_container}>
        <h3 className={styles.about}>About Us</h3>
        <div>
          <p className={styles.about_title}>Introduction</p>
          <p>이 프로젝트는 2022 캡스톤 디자인을 위해 수행되었습니다.</p>
        </div>
        <div>
          <p className={styles.about_title}>Roles</p>
          <p>Team KNJ </p>
          <p>김기찬: 프론트엔드 개발 및 팀장(깃허브 관리)</p>
          <p>나미진: 프론트엔드 개발 및 UI/UX 디자인</p>
          <p>정연진: 백엔드 개발 및 프로젝트 매니저</p>
        </div>
        <div>
          <p className={styles.about_title}>How it works</p>
          <p>Run Together는 개개인의 운동 기록을 측정할 수 있으며</p>
          <p>기부 챌린지를 통해 운동을 하는 보람을 늘릴 수 있는 웹입니다.</p>

        </div>
      </div>
      <div className={styles.about_container}>
        <h3 className={styles.contact}>Contact Us</h3>
        <div>
          <p className={styles.about_title}>Contact</p>
          <p>김기찬: <a href ='https://github.com/sunfkkc'>https://github.com/sunfkkc</a></p>
          <p>나미진: <a href ='https://github.com/nanajin'>https://github.com/nanajin</a></p>
          <p>정연진: <a href ='https://github.com/yeonjan'>https://github.com/yeonjan</a></p>
          <p>Run-Together: <a href ='https://github.com/sunfkkc/Run-Together'>https://github.com/sunfkkc/Run-Together</a></p>
        </div>
        <div>
          <p className={styles.about_title}>Support</p>
          <p>React, Spring Boot</p>
        </div>
        <div>
          <p className={styles.about_title}>Destinations</p>
          <p className={styles.end}>전남대학교 공과대학 7호관 전자컴퓨터공학부</p>
        </div>
      </div>
      <Footer/>
    </>
  )
}
export default About;