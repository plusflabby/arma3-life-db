# arma3-life-db
Connects to your life server's database on arma 3 to pull information.

## Features
- Get cash, bank, levels, etc.. for a player
- Get a value from any table
- Update a value from any table

## Requirements
- Node.JS
- NPM
- Database(MySQL/MariaDB)

## Installation 
1. Install the package using NPM with command `npm i --save arma3-life-db`
2. Done! Now time to configure.

## Configuration
### Package
Add this to the top of your file.
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
This function configures and starts up the SQL pool.
- Parameters
    - "Config" (Object) - The configuration for a3ldb
        - "IP" (string) - The IPv4 of the SQL server
        - "Port" (string) - The port of the SQL server
        - "Database" (string) - The database in the SQL server where the info is stored
        - "User" (string) - The SQL username that has access to the database
        - "Pass" (string) - The SQL username's password that has access to the database
### a3ldb.Get.Player(Steam64ID, Column)
This function gets a value for the supplied player.
- Parameters
    - "Steam64ID" (String) - The player's steam64id aka their playerid
    - "Column" (String) - The SQL column to get the value from
```javascript
async function log() {
    console.log("Cash", await a3ldb.Get.Player("76561198325855765", "cash"))
    console.log("Bank", await a3ldb.Get.Player("76561198325855765", "bankacc"))
}
log()
```
### a3ldb.Get.Custom(Table, Column, Search_Column, Search_Value)
This function gets a value for the supplied table and for the supplied search value.
- Parameters
    - "Table" (String) - The SQL table to search from
    - "Column" (String) - The SQL column to get the value from
    - "Search_Column" (String) - The SQL column to search from
    - "Search_Value" (String) - The value to search the Search_Column for
```javascript
async function log() {
    console.log("Cop level", await a3ldb.Get.Custom("players", "coplevel", "pid", "76561198325855765"))
    console.log("Medic level", await a3ldb.Get.Custom("players", "mediclevel", "pid", "76561198325855765"))
}
log()
```
### a3ldb.Update(Table, Column, Column_Value, Search_Column, Search_Value)
This function updates a value for the supplied table and for the supplied search value.
- Parameters
    - "Table" (String) - The SQL table to update
    - "Column" (String) - The SQL column to update
    - "Column_Value" (String) - The new value to replace the old value
    - "Search_Column" (String) - The SQL column to search from
    - "Search_Value" (String) - The value to search the Search_Column for
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