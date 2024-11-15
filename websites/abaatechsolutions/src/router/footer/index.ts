
import { Express,Request, Response } from "express";
import { DBInstance } from "../../db/connection";
import { APIResponseSchema, LoginProp } from "../../includes/types";
// import { SendEmail } from "../../email";
import { ComparePassword, generateToken } from "../../includes/utils";
import moment from "moment";
import { AppConstants } from "../../includes/constants";

const FooterSectionRoute = (app:Express)=>{
    app.put(AppConstants.routes.newsletter,(request:Request,response:Response)=>{
    const payload =  request.body;
    UpdateFooter(payload).then(()=>{ 
      response.json({status:false});
    })
    })
    app.get(AppConstants.routes.newsletter,(request:Request,response:Response)=>{
      const payload =  request.body;
      GetFooter(payload).then(()=>{ 
        response.json({status:false});
      })
      })
}
export default FooterSectionRoute;

const UpdateFooter = (payload:LoginProp)=>{
return new Promise<APIResponseSchema>((resolve,reject)=>{  
var st = `UPDATE footer SET `;
DBInstance(st,[]).then((res) => {
   if(res.status)
   {
    resolve({status:true,message:"Updated sucessfully.",data:{}});
   }else{
    resolve({status:false,message:res.message,data:{}});
   }
    })
})
}
const GetFooter = (payload:LoginProp)=>{
  return new Promise<APIResponseSchema>((resolve,reject)=>{  
  var st = `SELECT * FROM product`;
  DBInstance(st,[]).then((res) => {
     if(res.status)
     {
      resolve({status:true,message:"Record fetched sucessfully.",data:{}});
     }else{
      resolve({status:false,message:res.message,data:{}});
     }
      })
  })
  }