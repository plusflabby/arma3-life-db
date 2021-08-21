import {Config, Query_Get, Query_Update} from '../src'

Config({
    IP: '127.0.0.1',
    Port: '3306',
    Database: 'maldenlife',
    Username: 'testy',
    Password: '123321'
})

async function Get_Players_Bank_Before_Update() {
    await Query_Get('players', 'bankacc', 'pid', '76561198325855765')
        .then((log) => {
            console.log(log)
        })
}
Get_Players_Bank_Before_Update()

async function Update_Players_Bank() {
    Query_Update('players', 'bankacc', '1000000', 'pid', '76561198325855765')
        .then((log) => {
            console.log(log)
        })
}
Update_Players_Bank()