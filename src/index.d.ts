declare module 'arma3-life-db' {
    interface ConfigObject {
        IP: string,
        Port: string,
        Database: string,
        Username: string,
        Password: string
    }
    export function Config(Config: ConfigObject): Promise<any>
    export function Query_Get(table: string, column: string, search_colum: string, search_value: string): Promise<any>
    export function Query_Update(table: string, column: string, column_value: string, search_colum: string, search_value: string): Promise<any>
}