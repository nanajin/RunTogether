import React from "react";
import ChallengeList from "./ChallengeList";
function ChallengeManagerPage(){ //challenge메인에 보일 리스트 페이지(블로그처럼)
  return(
    <>
      <ChallengeList api='challenge'/>
    </>
  )
}
export default ChallengeManagerPage;