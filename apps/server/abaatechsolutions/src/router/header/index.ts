
import { Express,Request, Response } from "express";
import { DBInstance } from "../../db/connection";
import { APIResponseSchema, LoginProp } from "../../includes/types";
// import { SendEmail } from "../../email";
import { ComparePassword, generateToken } from "../../includes/utils";
import moment from "moment";
import { AppConstants } from "../../includes/constants";

const HeaderSectionRoute = (app:Express)=>{
    app.put(AppConstants.routes.newsletter,(request:Request,response:Response)=>{
    const payload =  request.body;
    UpdateHeader(payload).then(()=>{ 
      response.json({status:false});
    })
    })
    app.get(AppConstants.routes.newsletter,(request:Request,response:Response)=>{
      const payload =  request.body;
      GetHeader(payload).then(()=>{ 
        response.json({status:false});
      })
      })
}
export default HeaderSectionRoute;

const UpdateHeader = (payload:LoginProp)=>{
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
const GetHeader = (payload:LoginProp)=>{
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