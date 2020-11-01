const fnc = require("./functions")

let ConfigData = {
    IP: null,
    Port: null,
    Database: null,
    User: null,
    Pass: null
}

let MySQL_Pool = null

module.exports.Config = (Options) => {
    fnc.ObjectTypeOfArray(Options, Object.keys(ConfigData), "string")
        .then(() => {
            ConfigData = Options
            fnc.StartMySQL_Pool(ConfigData)
                .then((pool) => {
                    MySQL_Pool = pool
                })
        })
        .catch((error) => {
            if (error === false) console.error("Error: All config object keys must be strings and IP,Port,Database,User,Pass must be defined in object.")
            else console.error(error)
        })
}

const CheckConfig = () => {
    try {
        return new Promise((resolve, reject) => {
            if (ConfigData.IP === null) {
                setTimeout(() => {
                    if (ConfigData.IP === null) resolve(false)
                    else resolve(true)
                }, 1500)
            }
            else resolve(true)
        })
    }
    catch(error) {
        throw new Error(error)
    }
}

const CheckPool = () => {
    try {
        return new Promise((resolve, reject) => {
            if (MySQL_Pool === null) {
                setTimeout(() => {
                    if (MySQL_Pool === null) resolve(false)
                    else resolve(true)
                }, 5000)
            }
            else resolve(true)
        })
    }
    catch(error) {
        throw new Error(error)
    }
}

module.exports.Get = {}

module.exports.Get.Custom = (table, column, search_colum, search_value) => {
    return new Promise(async(resolve, reject) => {
        if (typeof table !== "string" || typeof column !== "string" || typeof search_colum !== "string" || typeof search_value !== "string") resolve("Error: Function parameters must be defined and be strings.")
        else {
            const CheckTheConfig = await CheckConfig()
            if (CheckTheConfig === false) resolve("Can't run function without config setup.")
            else {
                const CheckThePool = await CheckPool()
                if (CheckThePool === false) resolve("Can't run function without mysql connection.")
                else {
                    fnc.MySQL_Pool_Query_Custom(MySQL_Pool, table, column, search_colum, search_value).then((results) => {
                        if (results === false) resolve(`No info found for ${search_value}.`)
                        else resolve(results[0][column])
                    })
                }
            }
        }
    })
}

module.exports.Get.Player = (pid, column) => {
    return new Promise(async(resolve, reject) => {
        if (typeof pid !== "string") resolve("pid and colum paramater is required and must be a string")
        else {
            const CheckTheConfig = await CheckConfig()
            if (CheckTheConfig === false) resolve("Can't run function without config setup.")
            else {
                const CheckThePool = await CheckPool()
                if (CheckThePool === false) resolve("Can't run function without mysql connection.")
                else {
                    fnc.MySQL_Pool_Query(MySQL_Pool, column, pid).then((results) => {
                        if (results === false) resolve(`No info found for ${pid}.`)
                        else resolve(results[0].cash)
                    })
                }
            }
        }
    })
}

module.exports.Update = (table, column, column_value, search_colum, search_value) => {
    return new Promise(async(resolve, reject) => {
        if (typeof table !== "string" || typeof column_value !== "string"  || typeof column !== "string" || typeof search_colum !== "string" || typeof search_value !== "string") resolve("Error: Function parameters must be defined and be strings.")
        else {
            const CheckTheConfig = await CheckConfig()
            if (CheckTheConfig === false) resolve("Can't run function without config setup.")
            else {
                const CheckThePool = await CheckPool()
                if (CheckThePool === false) resolve("Can't run function without mysql connection.")
                else {
                    fnc.MySQL_Pool_Update(MySQL_Pool, table, column, column_value, search_colum, search_value).then((result) => {
                        resolve(result)
                    })
                }
            }
        }
    })
}