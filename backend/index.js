const express = require('express');
const app = express();
const mysql = require("mysql");
const PORT = process.env.port || 8000;
const multer = require('multer');
const moment = require('moment');

app.use(express.json());
app.use(express.static('public'));


const storage = multer.diskStorage({
  destination: 
  "./uploadImg",
  filename: (req, file, cd)=>{
    cd(null, moment().format('YYYYMMDDHHmmss')+"_"+file.originalname);
  }
});

const upload = multer({storage: storage}); //single 파일 업로드

//db 접근
const db = mysql.createPool({
  host: "localhost",
  user:"root",
  password: "0711",
  database: "runtogether",
});
//게시판 글 리스트
app.get("/reactBackend/list", (req, res)=>{
  const sqlQuery = "SELECT *FROM board ORDER BY id DESC";
  db.query(sqlQuery, (err, result)=>{
    console.log(err);
    res.send(result);
  });
});
//글 작성
app.post("/reactBackend/write", (req, res)=>{
  if(req){
    let title = req.body.title;
    let contents = req.body.contents;
    let filename = req.body.filename;
    console.log(filename);
    const sqlQuery = "INSERT INTO board(title, contents, filename, view_cnt) values(?,?,?,0)";
    db.query(sqlQuery,[title, contents, filename], (err, result)=>{
      console.log(err);
      res.send(result);
    });
  }
  else{
    console.log("데이터가 없음");
  }
});
//이미지 업로드 
app.post("/reactBackend/image", upload.single("file"), (req, res, next)=>{
  console.log(req.file);
  res.send({
    fileName: req.file.filename
  });
});

//조회수 카운트
app.post("/reactBackend/count", (req, res)=>{
  let id = req.body.id;
  const sqlQuery = "UPDATE board SET view_cnt=view_cnt+1 where id=?"
  db.query(sqlQuery, [id], (err, result)=>{
    res.send(result);
  });
});
//관리자 글 작성
app.post("/reactBackend/managerwrite", (req, res)=>{
  if(req){
    let title = req.body.title;
    let contents = req.body.contents;
    let filename = req.body.filename;
    console.log(filename);
    const sqlQuery = "INSERT INTO managerboard(title, contents, filename, view_cnt) values(?,?,?,0)";
    db.query(sqlQuery,[title, contents, filename], (err, result)=>{
      console.log(err);
      res.send(result);
    });
  }
  else{
    console.log("데이터가 없음");
  }
});
//관리자 게시판 글 리스트
app.get("/reactBackend/managerlist", (req, res)=>{
  const sqlQuery = "SELECT *FROM managerboard ORDER BY id DESC";
  db.query(sqlQuery, (err, result)=>{
    console.log(err);
    res.send(result);
  });
});
//관리자 조회수 카운트
app.post("/reactBackend/managercount", (req, res)=>{
  let id = req.body.id;
  const sqlQuery = "UPDATE managerboard SET view_cnt=view_cnt+1 where id=?"
  db.query(sqlQuery, [id], (err, result)=>{
    res.send(result);
  });
});
//관리자 글 삭제
app.post("/reactBackend/remove", (req, res)=>{
  let id = req.body.id;
  const sqlQuery = "DELETE from managerboard where id=?"
  db.query(sqlQuery, [id], (err, result)=>{
    res.send(result);
  });
});

app.listen(PORT, ()=>{
  console.log(`running on port ${PORT}`);
});
