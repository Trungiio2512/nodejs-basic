const express = require('express')
const path = require('path')
//----------------------------------------------------------------
const app = express()
const routes = require('./routes')
const configViewEngine = require('./config/viewEngine')

require('dotenv').config()
const port = process.env.PORT || 3000;

app.use(
    express.urlencoded({
        extended: true,
    })
);
// from js...
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')))
configViewEngine(app)
routes(app)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})