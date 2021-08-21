import {createPool, Pool, RowDataPacket} from 'mysql2';
import { Database } from '.';

export class Pooling {
    connection: Pool | null;

    constructor(connection: Pool | null) {
        this.connection = connection;
    }

    connected(): boolean {
        return !!this.connection;
    }

    connect(
            connectionLimit: string = "1",
            host: string = Database["IP"],
            port: string = Database["Port"],
            user: string = Database["Username"],
            password: string = Database["Password"],
            database: string = Database["Database"]
        ): Promise<boolean> {
        return new Promise<boolean>((res, rej) => {
            if (this.connected()) return res(true)

            const Create = createPool({
                connectionLimit : parseInt(connectionLimit),
                host            : host,
                port            : parseInt(port),
                user            : user,
                password        : password,
                database        : database
            });

            
            console.log('successful mysql connection')

            this.connection = Create;
            res(true)
        })
    }

    disconnect(): void {
        if (this.connected() && this.connection !== null) {
            this.connection.end();
            this.connection = null;
            console.log('mysql disconnected');
        }
    }

    async query(query: string, values?: object): Promise<Array<any>> {
        if (!this.connected()) await this.connect();
        return new Promise((res, rej) => {
            this.connection?.query(query, values, (err, results: [Array<RowDataPacket>], fields) => {
                if (err) {rej(err)}
                else res(results)
            })
        })
    }
}