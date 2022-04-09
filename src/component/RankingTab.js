import React, { useState } from "react";
import {Tabs, Tab} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import "../component/RankingTab.css";

function RankingTab(){
  return(
    <div id="tab">
    <Tabs defaultActiveKey="home" id="controlled-tab-example" className="mb-3">
      <Tab eventKey="all" title="All" className="rankingtab">
        <p>전체 랭킹</p>
        <br></br>
        <p>전체 랭킹</p>

      </Tab>
      <Tab eventKey="donation" title="Donation Ranking" className="rankingtab">
        <p>기부 랭킹</p>
      </Tab>
      <Tab eventKey="record" title="Record Ranking" className="rankingtab">
        <p>기록 랭킹</p>
      </Tab>
    </Tabs>
    </div>
  );
}
export default RankingTab;