const pool = require("../../Config/DB")
module.exports = {
    //recived data from controller
    create: (data, callback) => {
        pool.query(
            `Insert into registration (firstname,lastname,phone,email,password)
            values(?,?,?,?,?)`, [
            data.firstname,
            data.lastname,
            data.phone,
            data.email,
            data.password,
        ],
            (error, results, fields) => {
                if (error) {
                    callback(error)
                }
                return callback(null, results)
            })

    },
    getUsers: callback => {
        pool.query(
            `select id ,firstname,lastname,phone,email from registration`, [], (error, results, fields) => {
                if (error) {
                    return callback(error)
                }
                return callback(null, results)
            }
        )
    },
    getUserById: (id, callback) => {
        pool.query(
            `select id ,firstname,lastname,phone,email from registration where id=?`, [id], (error, results, fields) => {
                if (error) {
                    return callback(error)
                }
                return callback(null, results)
            }
        )
    },
    updateUser: (data, callback) => {
        pool.query(
            `update  registration set firstname=?,lastname=?,phone=?,email=?,password=? where id=?`, [
            data.firstname,
            data.lastname,
            data.phone,
            data.email,
            data.password,
            data.id
        ],
            (error, results, fields) => {
                if (error) {
                    callback(error)
                }
                return callback(null, results)
            })

    },
    deleteUser: (data, callback) => {
        pool.query(
            `delete from registration where id=?`, [data.id], (error, results, fields) => {
                if (error) {
                    return callback(error)
                }
                return callback(null, results[0])
            }
        )
    },
    getUserByEmail: (email, callback) => {
        pool.query(
            `select * from registration where email = ?`, [email],
            (error, results, fields) => {
                if (error) {
                    callback(error)
                }
                return callback(null, results[0])
            }
        )
    }

}