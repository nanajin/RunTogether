const express = require('express');
const app = express();
const mysql = require("mysql");
const PORT = process.env.port || 8000;
const multer = require('multer');
const upload = require('./fileupload');
app.use(express.json());

const db = mysql.createPool({
  host: "localhost",
  user:"root",
  password: "0711",
  database: "runtogether",
});
app.get("/reactBackend/list", (req, res)=>{
  const sqlQuery = "SELECT *FROM board ORDER BY id DESC";
  db.query(sqlQuery, (err, result)=>{
    console.log(err);
    res.send(result);
  });
});
app.post("/reactBackend/write", (req, res)=>{
  upload(req, res, (err)=>{
    if(err instanceof multer.MulterError){
      console.log(err);
    }
  })
  // console.log('파일명: '+req.file.originalname)
  if(req){
    let title = req.body.title;
    let contents = req.body.contents;
    const sqlQuery = "INSERT INTO board(title, contents, view_cnt) values(?,?,0)";
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
  let id = req.body.id;
  const sqlQuery = "UPDATE board SET view_cnt=view_cnt+1 where id=?"
  db.query(sqlQuery, [id], (err, result)=>{
    res.send(result);
  });
});
app.post("/reactBackend/managerwrite", (req, res)=>{
  if(req){
    let title = req.body.title;
    let contents = req.body.contents;
    const sqlQuery = "INSERT INTO managerboard(title, contents, view_cnt) values(?,?,0)";
    db.query(sqlQuery,[title, contents], (err, result)=>{
      console.log(err);
      res.send(result);
    });
  }
  else{
    console.log("데이터가 없음");
  }
});
app.get("/reactBackend/managerlist", (req, res)=>{
  const sqlQuery = "SELECT *FROM managerboard ORDER BY id DESC";
  db.query(sqlQuery, (err, result)=>{
    console.log(err);
    res.send(result);
  });
});
app.post("/reactBackend/managercount", (req, res)=>{
  let id = req.body.id;
  const sqlQuery = "UPDATE managerboard SET view_cnt=view_cnt+1 where id=?"
  db.query(sqlQuery, [id], (err, result)=>{
    res.send(result);
  });
});

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
