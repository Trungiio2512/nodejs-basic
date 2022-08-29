const routerHome = require('./home')
const routerUser = require('./routerUser')
function routes(app) {

    app.use('/user', routerUser)
    app.use('/', routerHome)
}

module.exports = routes;