
import { Express,Request, Response } from "express";
import { DBInstance } from "../../db/connection";
import { APIResponseSchema, LoginProp } from "../../includes/types";
// import { SendEmail } from "../../email";
import { ComparePassword, GenerateOTP, generateToken } from "../../includes/utils";
import moment from "moment";
import { AppConstants } from "../../includes/constants";
import { sha512 } from "js-sha512";
import { SendEmail } from "../../email";

const LoginRoute = (app:Express)=>{
    app.post(AppConstants.routes.login,(request:Request,response:Response)=>{
    const payload =  request.body;
      LoginFunction(payload).then((res)=>{ 
      response.json(res);
    })
    })
    app.post(AppConstants.routes.verifyOTP,(request:Request,response:Response)=>{
      const payload =  request.body;
      SendOTPFunction(payload).then((res)=>{ 
        response.json(res);
      })
      })
}
export default LoginRoute;
// this fuction allow users to login to the system
const LoginFunction = (payload:LoginProp)=>{
return new Promise<APIResponseSchema>((resolve,reject)=>{  
var st = `SELECT * FROM users WHERE userEmail=? AND userPassword=? LIMIT 1`;
const pwd = sha512(payload.password);
DBInstance(st,[payload.email,pwd]).then((res) => {
     if(res.status)
    {
    const user = res.data[0];
      if(String(user["userActivated"]) !== "1")
      {
        return resolve({status:false,message:"Account not activated",data:{}})
      }
      if(String(user["userBlocked"]) === "1")
      {
      return resolve({status:false,message:"Your account has been blocked, contact admin",data:{}})
     }
    const responseData:any = {
      email:user.userEmail,
      phoneNumber:user.userPhoneNumber,
      id:user.userId,
      firstName:user.userFirstName,
      lastName:user.userLastName,
      createdAt:user.userCreatedAt,
      lastLogin:moment().toISOString()
    }
    st = `UPDATE users SET userMultifactorAuthKey=? WHERE userEmail=? LIMIT 1`;
    DBInstance(st,[st,payload.email]);
    const accessToken = generateToken(responseData)
    
    // SendEmail({
    //         to:String(payload.email),
    //         subject:`Thank You for Contacting Us!`,
    //         html:`Thank you for reaching out to us. We have received your enquiry regarding and appreciate your interest.
    //           <br/>
    //           Our team is currently reviewing your request and will get back to you as soon as possible. We aim to respond within 1-2 business days. If you have any additional information or further questions in the meantime, please feel free to reply to this email.
    //           <br/>
    //           Thank you for your patience and understanding.`
    //       });
      resolve({status:true,message:"Successful",data:{
        accessToken
      }})
    }else{
    resolve({status:false,message:"Invalid login credentials",data:{}})
    }
})
})
}

// this function verifies user using token send to their email
export const SendOTPFunction = (payload:LoginProp)=>{
    return new Promise<APIResponseSchema>((resolve,reject)=>{  
    var st = `SELECT * FROM users WHERE userEmail=? LIMIT 1`;
    const otp = GenerateOTP(4);
    DBInstance(st,[payload.email]).then((res) => {
         if(res.status)
        {
        const user = res.data[0];
        st = `SELECT * FROM appToken WHERE tkUserEmail=? LIMIT 1`;
        DBInstance(st,[payload.email]).then((response)=>{
          if(response.status)
          {
            
            st = `INSERT INTO appToken (tkToken,tkUserEmail) VALUES(?,?)`;
            DBInstance(st,[otp,payload.email]).then((res)=>{
              resolve(res)
            })
          }else{
            st = `UPDATE appToken SET tkToken=? WHERE userEmail=?`;
            DBInstance(st,[payload.email]).then((res)=>{
              resolve(res)
            })
          }
          // send email
          SendEmail({
            message:`Dear ${user.firstName},
            <p>Thank you for using our services! To complete your verification process, please enter the One-Time Password (OTP) below:</p>
            <p>OTP: ${otp}</p>
            <p>
            This code is valid for the next 10 minutes and can only be used once. If you did not request this verification, please ignore this email.
            </p>
            <p>If you need any assistance or have questions, feel free to contact our support team.
            <p>`,
            subject:"Your OTP for Login Verification",
            to:payload.email
          })
        })
       }else{
        resolve({status:false,message:"Invalid login credentials",data:{}})
       }
        })
    })
}