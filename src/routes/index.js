const routerHome = require('./home')
const routerUser = require('./routerUser')
const routerUpload = require('./uploadFile')

function routes(app) {
    app.use('/upload', routerUpload)
    app.use('/user', routerUser)
    app.use('/', routerHome)
}

module.exports = routes;