
import { Express,Request, Response } from "express";
import { DBInstance } from "../../db/connection";
import { APIResponseSchema, LoginProp } from "../../includes/types";
// import { SendEmail } from "../../email";
import { ComparePassword, generateToken } from "../../includes/utils";
import moment from "moment";
import { AppConstants } from "../../includes/constants";

const BoardMembersSectionRoute = (app:Express)=>{
    app.put(AppConstants.routes.contact_us,(request:Request,response:Response)=>{
    const payload =  request.body;
    UpdateContactUs(payload).then(()=>{ 
      response.json({status:false});
    })
    })
    app.get(AppConstants.routes.contact_us,(request:Request,response:Response)=>{
      const payload =  request.body;
      GetContactUs(payload).then(()=>{ 
        response.json({status:false});
      })
      })
}
export default BoardMembersSectionRoute;

const UpdateContactUs = (payload:LoginProp)=>{
return new Promise<APIResponseSchema>((resolve,reject)=>{  
var st = `INSERT INTO newsletterSubscription (userEmail,newsSubscribed) VALUES(?,?)`;
DBInstance(st,[payload.email,1]).then((res) => {
     if(res.status)
    {
      // SendEmail({
      //       to:String(payload.email),
      //       subject:`Thank You for subscribing!`,
      //       html:`Thank you for subscribing to our newsletter.
      resolve({status:true,message:"Your subscription was sucessful.",data:{}});
   }else{
    resolve({status:false,message:res.message,data:{}});
   }
    })
})
}
const GetContactUs = (payload:LoginProp)=>{
  return new Promise<APIResponseSchema>((resolve,reject)=>{  
  var st = `INSERT INTO newsletterSubscription (userEmail,newsSubscribed) VALUES(?,?)`;
  DBInstance(st,[payload.email,1]).then((res) => {
       if(res.status)
      {
        // SendEmail({
        //       to:String(payload.email),
        //       subject:`Thank You for subscribing!`,
        //       html:`Thank you for subscribing to our newsletter.
        resolve({status:true,message:"Your subscription was sucessful.",data:{}});
     }else{
      resolve({status:false,message:res.message,data:{}});
     }
      })
  })
  }