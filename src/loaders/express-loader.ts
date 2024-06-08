/**
 * @TODO 
 * 
 * explain imports
 * 
 * allRoutes: imported form /api/routes/index.ts
 * bodyParser: parses the request body or URL queries in JSON format with specified limit
 */

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import allRoutes from '../api/index'; 

const corsOptions = {
  optionsSuccessStatus: 200,
  credentials: true,
}

export default ( { app } : { app: express.Application })=>{

   app.use(cors(corsOptions));

   /**
    * M I D D L E   W A R E S
    */
   app.use(bodyParser.json());

   /**
    * A L L    D E C L A R E D    R O U T E S
    */
   app.use('/api', allRoutes());


   /**
    * 404  E R R O R   H A N D L I N G
    */
   app.use((req, res, next) => {
     const err = new Error('Not Found');
     err['status'] = 404;
     next(err);
   });


   /**
    * H A N D L E   A L L    E R R O R S
    */
   app.use((err, req, res, next) => {
       
       let errorsMessage=null;
       res.status(err.status || 500);
       return res.json({
         errors: {
           message: (errorsMessage!==null)?(errorsMessage):(err.message),
         },
       });
   });
}