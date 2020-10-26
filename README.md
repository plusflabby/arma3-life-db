# arma3-life-db
Connects to your life server's database on arma 3 to pull information.

## Requirements
- Node.JS
- NPM
- Database(MySQL/MariaDB)

## Installation 
1. Install the package using NPM with command `npm i --save arma3-life-db`
2. Done! Now time to configure.

## Configuration
### Package
Add this to the top of your file
```javascript
const a3ldb = require("arma3-life-db")
```
### Database Setup
Add this function to your file and change the key values.
```javascript
a3ldb.Config({
    IP: "127.0.0.1",
    Port: "3306",
    Database: "altislife",
    User: "test",
    Pass: "123321"
})
```

## Functions
### a3ldb.Config(Config)
### a3ldb.Get.Player(Steam64ID, Column)
```javascript
async function log() {
    console.log("Cash", await a3ldb.Get.Player("76561198325855765", "cash"))
    console.log("Bank", await a3ldb.Get.Player("76561198325855765", "bankacc"))
}
log()
```
### a3ldb.Get.Custom(Table, Column, Search_Column, Search_Value)
```javascript
async function log() {
    console.log("Cop level", await a3ldb.Get.Custom("players", "coplevel", "pid", "76561198325855765"))
    console.log("Medic level", await a3ldb.Get.Custom("players", "mediclevel", "pid", "76561198325855765"))
}
log()
```

## To-Do List
- Hardcode getting information for vehicles
- Hardcode getting information for gangs
- Hardcode a function to update values