
import { Express,Request, Response } from "express";
import { DBInstance } from "../../db/connection";
import { APIResponseSchema, LoginProp } from "../../includes/types";
import { ComparePassword, GenerateOTP, generateToken } from "../../includes/utils";
import moment from "moment";
import { AppConstants } from "../../includes/constants";
import SaveOTP from "../../db/otp";
import { sha512 } from "js-sha512";
import { RequestResponse } from "../../includes/helperFunction";
import { SendEmail } from "../../email";

const LoginWithOTPRoute = (app:Express)=>{
    app.post(AppConstants.routes.loginWithOTP,(request:Request,response:Response)=>{
    const payload =  request.body;
      LoginWithOTPFunction(payload).then((res)=>{ 
      RequestResponse(response,res);
      })
    })
}
export default LoginWithOTPRoute;
// this fuction allow users to login to the system
const LoginWithOTPFunction = (payload:LoginProp)=>{
return new Promise<APIResponseSchema>((resolve,reject)=>{  
const pwd = sha512(payload.password);
var st = `SELECT * FROM users WHERE userEmail=? AND userPassword=? LIMIT 1`;
DBInstance(st,[payload.email,pwd]).then((res) => {
     if(res.status)
    {
    const user = res.data[0];
    // resolve(user);
      if(String(user["userLoginNotificationToEmail"]) == "1")
      {
        // 
      }
      var result = {
        email:user.userEmail,
        phoneNumber:user.userMobile,
        id:user.userId,
        firstName:user.userFirstName,
        lastName:user.userLastName,
        accountType:user.userAccountType,
        createdAt:user.createdAt,
        lastLogin:moment().toISOString()
      }
     const accessToken = sha512(JSON.stringify(result));
     // save accessToken
     var st = `UPDATE users SET userAccessToken=? WHERE userEmail=? LIMIT 1`;
      DBInstance(st,[accessToken,payload.email]);
     // generate OTP
     const otp = GenerateOTP(6);
     SaveOTP(otp,payload.email);
     // send email
     SendEmail({
      subject:"Verification OTP",
      message:`This is your verification OTP : ${otp}, use this to login to your dashboard`,
      to:payload.email
     })
     resolve({status:true,message:"Login successful",data:{accessToken}})
    }else{
     resolve({status:false,message:"Invalid login credentials",data:null})
    }
    })
})
}
