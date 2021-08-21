interface ConfigObject {
    IP: string,
    Port: string,
    Database: string,
    Username: string,
    Password: string
}

export let Database: ConfigObject = {
    IP: '',
    Port: '',
    Database: '',
    Username: '',
    Password: ''
};

export function returnPromise(callback: Function) {
    return new Promise((resolve, reject) => {
        resolve(callback())
    }).catch((error) => {
        throw error
    })
}

export function Config(Config: ConfigObject):Promise<any> {
    return returnPromise(() => {
        Database = Config
        "Success"
    })
}


import {Get, Update} from './Query'

export const Query_Get = Get
export const Query_Update = Update