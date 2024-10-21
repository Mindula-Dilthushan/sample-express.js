const userService = require("../services/userService");

const getUsers = (req, res) => {
    userService.getAllUsers((err, users) => {
        if (err) {
            return res.status(500).json({
                error: err.message
            });
        } else {
            res.json(users);
        }
    })
}

const createUser = (req, res) => {
    const newUser = {
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile
    };

    userService.saveUser(newUser, (err, result) => {
        if(err){
            if(err.code === "ER_DUP_ENTRY"){
                return res.status(400).json({
                    error : "Username or email or mobile already exists!"
                });
            }else{
                return res.status(500).json({
                    error : err.message
                });
            }
        }else{
            res.status(201).json({
                message : "User Created Successfully",
                userId : result.id
            });
        }
    })
}


module.exports = {
    getUsers,
    createUser
}