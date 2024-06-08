/**
 * 
 */
import dotenv from 'dotenv';
// Set the NODE_ENV to 'development' by default
dotenv.config()

const config = {
    PORT : process.env.PORT || 1337,

    datastore: {
        default:{
            adapter: process.env.SQL_ADAPTER,
            host: process.env.SQL_HOST,
            port: process.env.SQL_PORT,
            user: process.env.SQL_USER,
            password: process.env.SQL_PASSWORD,
            database: process.env.SQL_DATABASE
        }
    }

}

export default config;