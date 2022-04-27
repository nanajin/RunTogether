import React from "react";
import styles from './About.module.css';
import Header from "../staticComponent/Header";
function About(){
  return(
    <>
    <Header/>
      <div className={styles.about_container}>
        <p className={styles.about}>About Us</p>
        <div>
          <p className={styles.about_title}>Introduction</p>
          <p>이 프로젝트는 ~~를 위해 수행되었습니다.</p>
        </div>
        <div>
          <p className={styles.about_title}>Roles</p>
          <p>Team 팀이름 </p>
          <p>김기찬: 프론트엔드 개발자~~</p>
          <p>나미진: 프론트엔드 개발자~~</p>
          <p>정연진: 백엔드 개발자~~</p>
        </div>
        <div>
          <p className={styles.about_title}>How it works</p>
          <p>프로젝트 어케 만들어졌는지~~</p>
        </div>
      </div>
      <div className={styles.about_container}>
        <p className={styles.contact}>Contact Us</p>
        <div>
          <p className={styles.about_title}>Contact</p>
          <p>김기찬: 이메일이나 깃헙 주소?</p>
          <p>나미진: 이메일이나 깃헙 주소?</p>
          <p>정연진: 이메일이나 깃헙 주소?</p>
        </div>
        <div>
          <p className={styles.about_title}>Support</p>
          <p>뭐할지 모르겠네... </p>
        </div>
        <div>
          <p className={styles.about_title}>Destinations</p>
          <p>전남대학교 공과대학 7호관 전자컴퓨터공학부</p>
        </div>
      </div>
    </>
  )
}
export default About;