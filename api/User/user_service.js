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

    }
}