const express = require('express');
const app = express();
const mysql = require("mysql");
const PORT = process.env.port || 8000;
const bodyParser = require("body-parser");
app.use(express.json());

const db = mysql.createPool({
  host: "localhost",
  user:"root",
  password: "0711",
  database: "runtogether",
});
app.get("/reactBackend/list", (req, res)=>{
  const sqlQuery = "SELECT *FROM board";
  db.query(sqlQuery, (err, result)=>{
    console.log(err);
    res.send(result);
  });
});
app.post("/reactBackend/write", (req, res)=>{
  if(req){
    // console.log(req.body.title);
    let title = req.body.title;
    let contents = req.body.contents;
    console.log(title);
    const sqlQuery = "INSERT INTO board(title, contents) values(?,?)";
    db.query(sqlQuery,[title, contents], (err, result)=>{
      console.log(err);
      res.send(result);
    });
  }
  else{
    console.log("데이터가 없음");
  }
});
app.post("/reactBackend/count", (req, res)=>{
  // let id = req.body.id;
  let view_cnt = req.body.view_cnt;
  // console.log(id);
  const sqlQuery = "UPDATE board SET view_cnt=? where id=?"
  db.query(sqlQuery, [view_cnt, id], (err, result)=>{
    // console.log(err);
    res.send(result);
  });
});
app.listen(PORT, ()=>{
  console.log(`running on port ${PORT}`);
});
// app.use(bodyParser.urlencoded({extended:true}));