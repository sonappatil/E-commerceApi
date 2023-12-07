
import {DataSource, DataSourceOptions} from 'typeorm';
import {config} from 'dotenv';
import { join } from 'path';
config()
export const dataSourceOptions : DataSourceOptions={
    type : 'postgres',
    host : process.env.DB_HOST,
    port : Number(process.env.DB_PORT),
    username : process.env.DB_USERNAME,
    password : process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities : [join(__dirname, '/../**/**.entity{.ts,.js}')],
    migrations:['dist/db/migrations/*.js'],
    logging : false,
    synchronize : false
}

const dataSource = new DataSource(dataSourceOptions);
console.log('connect');
export default dataSource;