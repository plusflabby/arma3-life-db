# arma3-life-db
Connects to your life server's database on arma 3 to pull or update information.

## Features
- Get cash, bank, levels, etc.. for a player
- Get a value from any table
- Update a value from any table

## Requirements
- Node.JS
- NPM
- Database(MySQL/MariaDB)

## Installation 
1. Install the package using [NPM](https://www.npmjs.com/package/arma3-life-db) with command `npm i --save arma3-life-db`
2. Done! Now time to configure.

## Configuration
### Package
Add this to the top of your file.
```javascript
const {Config, Query_Get, Query_Update} = require("arma3-life-db")
```
### Database Setup
Add this function to your file and change the key values.
```javascript
Config({
    IP: "127.0.0.1",
    Port: "3306",
    Database: "altislife",
    User: "test",
    Pass: "123321"
})
```

## Functions
### Config(ConfigObject)
This function configures and starts up the SQL pool.
- Parameters
    - "ConfigObject" (Object) - The configuration for a3ldb
        - "IP" (string) - The IPv4 of the SQL server
        - "Port" (string) - The port of the SQL server
        - "Database" (string) - The database in the SQL server where the info is stored
        - "Username" (string) - The SQL username that has access to the database
        - "Password" (string) - The SQL username's password that has access to the database
### Query_Get(Table, Column, Search_Column, Search_Value)
This function gets a value for the supplied player.
- Parameters
    - "Table" (String) - The SQL table to search from
    - "Column" (String) - The SQL column to get the value from
    - "Search_Column" (String) - The SQL column to search from
    - "Search_Value" (String) - The value to search the Search_Column for
```javascript
async function Get_Player_Cop_And_Medic_Levels() {
    console.log("Cop level", await Query_Get("players", "coplevel", "pid", "76561198325855765"))
    console.log("Medic level", await Query_Get("players", "mediclevel", "pid", "76561198325855765"))
}
Get_Player_Cop_And_Medic_Levels()
```
### Query_Update(Table, Column, Column_Value, Search_Column, Search_Value)
This function updates a value for the supplied table and for the supplied search value.
- Parameters
    - "Table" (String) - The SQL table to update
    - "Column" (String) - The SQL column to update
    - "Column_Value" (String) - The new value to replace the old value
    - "Search_Column" (String) - The SQL column to search from
    - "Search_Value" (String) - The value to search the Search_Column for
```javascript
async function Update_Player_Cash() {
    console.log("Cash update", await Query_Update("players", "cash", "1000000", "pid", "76561198325855765"))
}
Update_Player_Cash()
```

## To-Do List
- Optimize project
- Write less code