const express = require('express')
const uploadController = require('../controller/uploadController')
const configUploadFile = require('../config/configUpLoadFile')
const configUpLoadFile = require('../config/configUpLoadFile')

let router = express.Router();

router.post('/upload-profile-pic', configUpLoadFile.upload.single('profile_pic'), uploadController.uploadFile)
router.get('/', uploadController.show);

module.exports = router;