const userService = require("../services/userService");

const getUsers = (req, res) => {
    userService.getAllUsers((err , users) => {
        if(err){
            return res.status(500).json({
                error: err.message
            });
        }else{
            res.json(users);
        }
    })
}


module.exports = {
    getUsers
}