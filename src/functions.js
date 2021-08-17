module.exports.ObjectTypeOfArray = (object, array, type) => {
    try {
        return new Promise((resolve, reject) => {
            array.forEach((value) => {
                if (typeof object[value] !== type) reject(false)
            })
            resolve()
        })
    }
    catch(error) {
        throw new Error(error)
    }
}

const mysql = require("mysql")
module.exports.StartMySQL_Pool = (config) => {
    try {
        return new Promise((resolve, reject) => {
            const Pool = mysql.createPool({
                connectionLimit : 1,
                host            : config.IP,
                port            : config.Port,
                user            : config.User,
                password        : config.Pass,
                database        : config.Database
            })

            Pool.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
                if (error) throw error
                else {
                    resolve(Pool)
                }
            })
        })
    }
    catch(error) {
        throw new Error(error)
    }
}

module.exports.MySQL_Pool_Query = (pool, type, pid) => {
    try {
        return new Promise((resolve, reject) => {
            pool.query(`SELECT ${type} FROM players WHERE BINARY pid = ?`, [pid], function (error, results, fields) {
                if (error) throw error
                else {
                    if (!results.length) resolve(false)
                    else resolve(results)
                }
            })
        })
    }
    catch(error) {
        throw new Error(error)
    }
}

module.exports.MySQL_Pool_Query_Custom = (pool, table, column, search_colum, search_value) => {
    try {
        return new Promise((resolve, reject) => {
            pool.query(`SELECT ${column} FROM ${table} WHERE BINARY ${search_colum} = ?`, [search_value], function (error, results, fields) {
                if (error) throw error
                else {
                    if (!results.length) resolve(false)
                    else resolve(results)
                }
            })
        })
    }
    catch(error) {
        throw new Error(error)
    }
}



module.exports.MySQL_Pool_Update = (pool, table, column, colum_value, search_colum, search_value) => {
    try {
        return new Promise((resolve, reject) => {
            pool.query(`UPDATE ${table} SET ${column}=? WHERE BINARY ${search_colum} = ?`, [colum_value, search_value], function (error, results, fields) {
                if (error) throw error
                else {
                    resolve("Success")
                }
            })
        })
    }
    catch(error) {
        throw new Error(error)
    }
}