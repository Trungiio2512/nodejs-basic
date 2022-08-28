const express = require('express')
let router = express.Router();

const homeController = require('../controller/homeController')

function routes(app) {
    router.get('/', homeController.getHomePage)

    return app.use('/', router)
}

module.exports = routes;