/**
 * Main Router
 */

import contactRoutes from './routes/contact-route';

import {Router} from 'express';

export default ()=>{
    const app = Router();
    contactRoutes(app);    
    return app;
}