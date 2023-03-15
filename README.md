## 3/14~ 6/2
### Run Together 프론트엔드 저장소에 오신걸 환영합니다

## 목차
- [프로젝트 소개](#run-together)
- [사용 기술(프론트)](#사용-기술)
- [주요 기능](#주요-기능)
- [기능 플로우(이미지)](#기능-플로우)

<br/>

# 🏃‍Run Together
Javascript 기반 React 웹 프로젝트 'Run Together'입니다!
- 본인의 건강을 위한 달리기 기록 기능이 필요하신 분들께 추천드리는 나만의 기록 웹입니다.
- 친구와, 다른 사람과 함께 달리며 기부 챌린지까지 동참할 수 있는 다같이 달리자라는 취지로 만들어졌습니다.
- 달리기 운동 기록 수집 및 저장, 기부 챌린지, 채팅 등의 기능을 가지고 있습니다.
## 📆기간
- 2022.03.14 ~ 2022.06.02
## 👨‍👩‍👧‍👧팀 구성
- 프론트엔드 2
- 백엔드 1

## 🖥사용 기술
> 프론트
<p>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white">&nbsp
<img src="https://img.shields.io/badge/react-61DAFB?style=flat-square&logo=react&logoColor=white">&nbsp
<img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=Axios&logoColor=#5A29E4">&nbsp
<img src="https://img.shields.io/badge/css-1572B6?style=flat-square&logo=css3&logoColor=white">&nbsp
</p>

> 사용 라이브러리
> - recoil
> - react-transition-group
> - react-icons
> - react-spinners
> - socket.io
> - kakao pay
> - kakao map

## 💡주요 기능
- **런닝 기록 측정, 분석**
- **타 사용자와의 채팅**
- 챌린지 게시판 기능
- 챌린지에 더해진 **기부** 기능
- 타인 프로필 조회 기능
- 측정된 런닝 기록 저장, 다시보기

## ✏기능 플로우
- **메인페이지**
> - 바로 런닝 기록 페이지로 연결되는 버튼
> - 각 메뉴에 따른 카드형 메뉴
<br/>
<p align="center">
  <img width="20%" height="40%" src=""/>
  <img width="20%" height="40%" src="" />
</p>

- **로그인, 회원가입 페이지**
> - 자체 로그인, 회원가입 가능
>   - 이름(닉네임) 중복 확인, 이메일 중복 확인
> - 관리자 계정 따로 존재
<br/>
<p align="center">
  <img width="20%" height="40%" src="" />
  <img width="20%" height="40%" src="" />
</p>

- **챌린지 메인 페이지**
> - 메인 화면은 관리자가 승인해준 챌린지만 나타남
> - 챌린지 제안 게시판 버튼을 클릭하면 해당 페이지로 연결
> - 하고 싶은 챌린지를 선택해 참여하기를 누르면 런닝 기록 페이지로 연결
<br/>
<p align="center">
  <img width="20%" height="40%" src=""/>
  <img width="20%" height="40%" src=""/>
  <img width="20%" height="40%" src=""/>
</p>

- **챌린지 게시판 페이지**
> - 최신순으로 정렬
> - 글 작성 시에는 챌린지 관련 이미지와 기간, 기부 목표 금액 등 작성
<br/>
<p align="center">
  <img width="20%" height="40%" src=""/>
</p>

- **채팅 페이지**
> - 가입한 사용자 목록
> - "기록 더보기" 버튼 클릭 시 해당 사용자의 런닝 기록 열람 가능
> - 말풍선 버튼 클릭 시 해당 사용자와의 채팅 가능
<br/>
<p align="center">
  <img width="20%" height="40%" src=""/>
  <img width="20%" height="40%" src=""/>
</p>

- **런닝 기록 페이지**
> - 런닝 시작, 중지, 일시정지 가능
> - 카카오 맵 API를 이용한 현재 위치 지도 표시
> - 운동한 길 지도 위 라인으로 표시
> - 운동한 시간과 속도로 분석 그래프 도출
<br/>
<p align="center">
  <img width="20%" height="40%" src=""/>
  <img width="20%" height="40%" src=""/>
</p>

- **기부 페이지**
> - 카카오페이 API를 이용한 기부 시스템
>   - test용으로 사용해 실제 돈은 출금되지 않음
>   - 기부는 1km당 1,000원으로 설정
<br/>
<p align="center">
  <img width="20%" height="40%" src=""/>
  <img width="20%" height="40%" src=""/>
</p>

- **마이페이지**
> - 운동 저장 기록 열람
>   - 누적 런닝 시간, 총 횟수 
>   - 상세보기를 누를 시 운동한 시간, 지도 등 보기 가능
<br/>
<p align="center">
  <img width="20%" height="40%" src=""/>
  <img width="20%" height="40%" src=""/>
  <img width="20%" height="40%" src=""/>
</p>

[**맨 위로 올라가기**](#목차)
