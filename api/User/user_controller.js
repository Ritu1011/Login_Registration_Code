const { create, getUserById, getUsers, updateUser, deleteUser } = require("./user_service")
const { genSaltSync, hashSync, compareSync } = require("bcrypt")

module.exports = {
    createUser: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        create(body, (err, results) => {
            if (err) {
                console.log(err)
                return res.status(500).json({
                    success: 0,
                    message: "Database Connection error"
                })
            }
            return res.status(200).json({
                success: 1,
                data: results
            })
        });
    },
    getUserById: (req, res) => {
        const id = req.params.id
        getUserById(id, (err, results) => {
            if (err) {
                console.log(err)
                return
            }
            if (!results) {
                return res.status(500).json({
                    success: 0,
                    message: "record not found"
                })
            }
            return res.json({
                success: 1,
                data: results
            })
        });
    },
    getUsers: (req, res) => {
        getUsers((err, results) => {
            if (err) {
                console.log(err)
                return
            }

            return res.json({
                success: 1,
                data: results
            })
        })
    },
    updateUser: (req, res) => {
        const body = req.body
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt)
        updateUser(body, (err, results) => {
            if (err) {
                console.log(err)
                return
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "faield to update"
                })
            }
            return res.json({
                success: 1,
                data: "update successfully"
            })
        });
    },
    deleteUser: (req, res) => {
        const data = req.body
        deleteUser(data, (err, results) => {
            if (err) {
                console.log(err)
                return
            }
            if (!results) {
                return res.status(500).json({
                    success: 0,
                    message: "record not found"
                })
            }
            return res.status(200).json({
                success: 1,
                data: "delete successfully"
            })
        });
    },
}