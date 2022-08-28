const connection = require('../config/connectDb')

class homeController {
    getHomePage(req, res, next) {
        connection.promise().query("SELECT * FROM `users`")
            .then(
                ([rows, fields]) => rows)
            .then(data => res.render('index', {
                dataUsers: data
            }))
            .catch(err => res.send(err))
    }
}

module.exports = new homeController()