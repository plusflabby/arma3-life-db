/* Get the library for arma3-life-db */
//Your local code should be = const a3ldb = require("arma3-life-db")
const a3ldb = require("../lib/index")

//Sets up database connection
a3ldb.Config({
    IP: "127.0.0.1",
    Port: "3306",
    Database: "maldenlife",
    User: "testy",
    Pass: "123321"
})

//Logs out cash
async function logCash() {
    console.log("Cash", await a3ldb.Get.Player("76561198325855765", "cash"))
}
logCash()

//Logs out cop level
async function logCustom() {
    console.log("Cop level", await a3ldb.Get.Custom("players", "coplevel", "pid", "76561198325855765"))
}
logCustom()