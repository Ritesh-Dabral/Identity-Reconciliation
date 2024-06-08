/**
 * Class which contains all functionalities of Contact
 * 
 */

export default class Contact {

   constructor(){}

   /**
    * S I G N   U P
    * 
    * @param userInput : email,pass,username
    * 
    * @todo sign up email is left
    */
    public async Get (email:string){
        const resp = await global.db.contact.findAll({where:{'email': email}})
        return {
            email,
            resp      
        };
    }
}