const pool = require("../config/connectDb");

class userController {
    // [GET]: /user/detail/:id
    async getUserDetail(req, res, next) {
        const id = req.params.id;

        const [user, fields] = await pool.execute(`select * from users where id= ?`, [id]);
        return res.json(user);
    }

    // [POST] : /user/create-user
    async createUser(req, res, next) {
        const { firstName, lastName, email, address } = req.body;
        await pool.execute(
            "insert into users (firstName, lastName, email, address) values(?, ?, ?, ?)",
            [firstName, lastName, email, address],
        );

        return res.redirect('back')
    }
}

module.exports = new userController();
