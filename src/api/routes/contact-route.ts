/**
 * Route to show contact info
 */

import {Request, Response, NextFunction,Router} from 'express';
import ContactService from '../../services/contact-service';

const route = Router();


export default (app:Router)=>{
    app.use('/v1/contact', route);

    /**
     * Identify the contact
     */
    route.post('/identify',async(req:Request,res:Response,next:NextFunction)=>{
        try {
          const {email, phoneNumber} = req.body;
          return res.status(200).json({message:"Storage fetched successfully",email, phoneNumber});
      } catch (e) {
          return next(e);         
      }
    })

    route.get('/',async(req:Request,res:Response,next:NextFunction)=>{
        try {
          const {email} = req.body;
          const obj = new ContactService()
          const {resp} = await obj.Get(email)
          return res.status(200).json({message:"Storage fetched successfully",email,resp});
      } catch (e) {
          return next(e);         
      }
    })

}