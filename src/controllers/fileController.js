
const multer  =   require('multer');
const express = require('express');
const router = express.Router();


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'src/uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage });

router.post('/api/photo', upload.single('myFile'), async (req, res) =>  res.send('<h2>Upload realizado com sucesso</h2>')); 

router.get('/now', (req, res) => {
    var datetime = new Date();
    let now = datetime.toISOString().slice(0,10);
res.send( {dateNow: now});
});

module.exports = app => app.use('/', router);

