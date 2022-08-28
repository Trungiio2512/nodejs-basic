const express = require('express')
const path = require('path')
function configViewEngine(app) {
    app.set("view engine", "ejs");
    app.set("views", "src/views")

}

module.exports = configViewEngine