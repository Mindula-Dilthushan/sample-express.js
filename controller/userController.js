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
        if (err) {
            if (err.code === "ER_DUP_ENTRY") {
                return res.status(400).json({
                    error: "Username or email or mobile already exists!"
                });
            } else {
                return res.status(500).json({
                    error: err.message
                });
            }
        } else {
            res.status(201).json({
                message: "User Created Successfully",
            });
        }
    })
}

const updateUser = (req, res) => {
    const userId = req.params.id;

    const update_User = {
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile
    }

    userService.updateUser(userId, update_User, (err, result) => {
        if (err) {
            return res.status(500).json({
                error: err.message
            });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({
                error: "user not found!"
            });
        }

        res.json({
            message: "user update success!"
        })
    })
}

module.exports = {
    getUsers,
    createUser,
    updateUser
}