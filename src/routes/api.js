const express = require('express')
const router = express.Router()


const apiController = require('../controller/apiController')

function initApiRoute(app) {

    router.put('/update-user/:id', apiController.updateUser)// PUT: update user
    router.delete('/delete-user/:id', apiController.deleteUser)// DELETE: delete user
    router.post('/create-user', apiController.createNewUser)// PSOT : create new user
    router.get('/users', apiController.getAllUsers)// GET: get all users

    return app.use('/api/v1/', router)
}

module.exports = initApiRoute;