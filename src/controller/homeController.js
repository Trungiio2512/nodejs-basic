const pool = require('../config/connectDb')

class homeController {
    async getHomePage(req, res, next) {
        const [rows, fields] = await pool.execute('SELECT * FROM users')
        return res.render('index', {
            dataUsers: rows
        })
    }
}

module.exports = new homeController()