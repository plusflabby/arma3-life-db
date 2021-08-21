import {Pooling} from './MySQL'
import {returnPromise} from '.'

function Query(Query: string, Values: object):Promise<any> {
    return returnPromise(() => {
        const Database = new Pooling(null)

        return Database.query(Query, Values)
            .then((vals) => {
                return vals
            })
    })
}

export function Get(table: string, column: string, search_colum: string, search_value: string) {
    return returnPromise(() => {
        return Query(`select ${column} from ${table} where binary ${search_colum} = ?`, [search_value])
            .then((values) => {
                return values
            })
    })
}

export function Update(table: string, column: string, column_value: string, search_colum: string, search_value: string) {
    return returnPromise(() => {
        return Query(`update ${table} set ${column}=? where binary ${search_colum}=?`, [column_value, search_value])
            .then((values) => {
                return values
            })
    })
}