
import { Express,Request, Response } from "express";
import { DBInstance } from "../../db/connection";
import { APIResponseSchema, LoginProp } from "../../includes/types";
import { ComparePassword, GenerateOTP, generateToken, VerifyJWT } from "../../includes/utils";
import moment from "moment";
import { AppConstants } from "../../includes/constants";
import SaveOTP, { VerifyOTP } from "../../db/otp";
import { sha512 } from "js-sha512";
import { APIResponse, CheckBearerToken, RequestResponse } from "../../includes/helperFunction";

const VerifyOTPRoute = (app:Express)=>{
    app.post(AppConstants.routes.verifyOTP,(request:Request,response:Response)=>{
    const payload =  Object.assign(request.body,{token:request.headers["authorization"],refreshToken:request.cookies['refreshToken']});
    VerifyOTPRouteFunction(payload).then((res)=>{ 
      RequestResponse(response,res);
    })
    })
}
export default VerifyOTPRoute;
// this fuction verifies user otp for login to the system
const VerifyOTPRouteFunction = (payload:{otp:string,token:string})=>{
return new Promise<APIResponseSchema>((resolve,reject)=>{ 
var st = `SELECT * FROM users WHERE userAccessToken=? LIMIT 1`;
DBInstance(st,[String(payload.token).replace("Bearer ","").trim()]).then((response) => {
if(!response.status)
{
  return resolve({status:false,message:"Invalid bearer token",data:null});
}
const user = response.data[0];
const newAccessToken = {
      email:user.userEmail,
      phoneNumber:user.userPhoneNumber,
      id:user.userId,
      firstName:user.userFirstName,
      lastName:user.userLastName,
      createdAt:user.userCreatedAt,
      lastLogin:moment().toISOString()
      };
VerifyOTP(payload.otp,newAccessToken.email).then((result)=>{
  if(!result.status)
 {
   return resolve(result);
}
const accessToken = generateToken(newAccessToken,2);
var st = `UPDATE users SET userAccessToken=? WHERE userEmail=? `;
DBInstance(st,[accessToken,newAccessToken.email]).then((res) => {
 if(res.status)
 {
  const newOTP = GenerateOTP(8);
  SaveOTP(newOTP,newAccessToken.email);
  resolve({status:true,message:"Login successful",data:{...newAccessToken,accessToken}})
 }else{
  resolve({status:false,message:"Invalid login credentials",data:null})
 }
 })
})
});
})
}
