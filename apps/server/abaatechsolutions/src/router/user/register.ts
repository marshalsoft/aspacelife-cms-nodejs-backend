import { Express,Request, Response } from "express";
import { DBInstance } from "../../db/connection";
import { AppConstants } from "../../includes/constants";
import { APIResponseSchema } from "../../includes/types";

interface SignUpProp {
firstName:string;
lastName:string;
email:string;
password:string;
phoneNumber:string;
}
// this is where users signup to the system
export const RegistrationRoute = (app:Express)=>{
  app.post(AppConstants.routes.register,(request:Request,response:Response)=>{
  const payload =  request.body;
  SignUpFunction(payload).then((res)=>{ 
    response.json(res);
  })
  })

}
const SignUpFunction = (payload:SignUpProp)=>{
  return new Promise<APIResponseSchema>((resolve,reject)=>{  
  var st = `SELECT * FROM users WHERE userEmail=? LIMIT 1`;
  DBInstance(st,[payload.email]).then((res) => {
  if(res.status)
  {
    if(res.data.find((a,i)=>parseInt(String(payload.phoneNumber)) == parseInt(String(a.userMobile))))
    {
    return resolve({status:false,message:"Phone number already registered.",data:payload.phoneNumber})
    }
    return resolve({status:false,message:"Email already registered.",data:payload.email})
  }else{
  
  resolve(res);
  }
  })
  })
  }
