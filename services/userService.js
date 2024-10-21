const database = require("../db/database");

const getAllUsers = (callback) => {
    const sql = "SELECT * FROM user";

    database.query(sql, (err, res) => {
        if (err) {
            return callback(err, null);
        } else {
            callback(null, res);
        }
    })
}

const saveUser = (user, callback) => {
    const sql = "INSERT INTO user (name, email, mobile) VALUES(?, ?, ?)";

    database.query(sql, [user.name, user.email, user.mobile], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
        // }else{
        // callback(null, results);
        // }
    })
}


const updateUser = (id, user, callback) => {
    const sql = "UPDATE user SET name = ?, email = ?, mobile = ? WHERE id = ?";

    database.query(sql, [user.name, user.email, user.mobile, id], (err, results) => {
        if (err) {
            return callback(err, null);
        } else {
            callback(null, results);
        }
    });
}

const deleteUser = (id, callback) => {
    const sql = "DELETE FROM user WHERE id = ?";

    database.query(sql, [id], (err, results) => {
        if (err) {
            return callback(err, null);
        } else {
            callback(null, results)
        }
    })
}

module.exports = {
    getAllUsers,
    saveUser,
    updateUser,
    deleteUser
}