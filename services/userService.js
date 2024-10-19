const database = require ("../db/database");

const getAllUsers = (callback) => {
    const sql = "SELECT * FROM user";

    database.query(sql, (err, res) => {
        if(err){
            return callback (err, null);
        }else{
            callback(null, res);
        }
    })
}


module.exports = {
    getAllUsers
}