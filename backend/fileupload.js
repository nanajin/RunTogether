const multer = require('multer');
const moment = require('moment');

const storage = multer.diskStorage({
  destination: (req, file, cb)=>{
    cb(null, 'uploads');
  },
  filename: (req, file, cd)=>{
    cd(null, moment().format('YYYYMMDDHHmmss')+"_"+file.originalname);
  }
});

const upload = multer({storage: storage}).single("file"); //single 파일 업로드

module.exports = upload;