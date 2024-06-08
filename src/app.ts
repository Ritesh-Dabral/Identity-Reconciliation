/**
 * 
 */

import express from 'express';
import config from './config/index';

async function startServer() {
    // set this app const from express module
    const app = express();

    // now send the 'app' to the index.ts from Loader
    await require('./loaders').default({expressApp:app});

    // finally start the server

    app.listen(config.PORT, ()=>{
       console.log(`
       ################################################
           ✔️  Server listening on port: ${config.PORT} ✔️
       ################################################
       `)
    });
}

startServer();
