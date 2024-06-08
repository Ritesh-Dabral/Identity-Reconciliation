/**
 * Responsible for accumulating all loaders
 * here and then finally sending them where ever
 * they are required
 */

import expressLoader from './express-loader';
import sql from './sql-loader'

export default async ({expressApp})=>{
   await sql.sequelize.authenticate();
   console.log("connected with db")
   await sql.registerModels(sql.sequelize)
   console.log("Models loaded")
   await expressLoader({app:expressApp});

}