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
    // [DELETE] : /user/delete-user/:id
    async deleteUser(req, res, next) {
        await pool.execute('delete from users where id = ?', [req.params.id])
        return res.redirect('back')
    }

    // [DELETE] : /user/delete-user/:id
    async editUser(req, res, next) {
        const id = req.params.id;

        const [user, fields] = await pool.execute(`select * from users where id= ?`, [id]);
        return res.render('editUser/editUser.ejs', {
            user: user[0]
        })
    }
    // [DELETE] : /user/delete-user/:id
    async updateUser(req, res, next) {
        const { firstName, lastName, email, address } = req.body;
        await pool.execute('update users set firstName = ? , lastName = ?, email = ? , address = ? where id = ?',
            [firstName, lastName, email, address, req.params.id])
        return res.redirect('/')
    }
}

module.exports = new userController();
