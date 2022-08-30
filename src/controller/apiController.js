const pool = require('../config/connectDb')

let getAllUsers = async (req, res, next) => {

    const [rows, fields] = await pool.execute('SELECT * FROM users')

    return res.status(200).json({
        message: 'Thành công',
        data: rows
    })
}

let createNewUser = async (req, res) => {
    const { firstName, lastName, email, address } = req.body;

    if (!firstName || !lastName || !email || !address) {
        return res.status(402).json({
            message: 'require params not ivalid'
        })
    }

    await pool.execute(
        "insert into users (firstName, lastName, email, address) values(?, ?, ?, ?)",
        [firstName, lastName, email, address],
    );
    return res.status(200).json({
        message: 'ok'
    })
}

let updateUser = async (req, res) => {
    const { firstName, lastName, email, address } = req.body;

    if (!firstName || !lastName || !email || !address || !req.params.id) {
        return res.status(402).json({
            message: 'require params not ivalid'
        })
    }

    await pool.execute('update users set firstName = ? , lastName = ?, email = ? , address = ? where id = ?',
        [firstName, lastName, email, address, req.params.id])

    return res.status(200).json({
        message: 'ok'
    })
}
let deleteUser = async (req, res) => {
    if (!req.params.id) {
        return res.status(402).json({
            message: 'require params not ivalid'
        })
    }
    await pool.execute('delete from users where id = ?', [req.params.id])

    return res.status(200).json({
        message: 'ok'
    })
}


module.exports = { getAllUsers, createNewUser, updateUser, deleteUser };