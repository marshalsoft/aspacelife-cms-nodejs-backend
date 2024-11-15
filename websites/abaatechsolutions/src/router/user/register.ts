import { DBInstance } from "../../db/connection";
import { APIResponseSchema } from "../../includes/types";

interface SignUpProp {
firstName:string;
lastName:string;
email:string;
password:string;
phoneNumber:string;
}
// this is where users signup to the system
export const SignUpFunction = (payload:SignUpProp)=>{
  return new Promise<APIResponseSchema>((resolve,reject)=>{  
  var st = `SELECT * FROM users WHERE userEmail=? LIMIT 1`;
  DBInstance(st,[payload.email]).then((res) => {
  if(res.status)
  {
  resolve({status:false,message:"User already exist",data:{}})
  }else{
  resolve(res);
  }
  })
  })
  }
