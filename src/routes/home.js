const express = require('express')
let router = express.Router();
const homeController = require('../controller/homeController')

router.get('/', homeController.getHomePage)

module.exports = router