   /** GET Methods */
   /**
     * @openapi
     * '/v1.0/login':
     *  post:
     *     tags:
     *     - User Controller
     *     summary: Get a user by username
     *     parameters:
     *      - name: username
     *        in: path
     *        description: The username of the user
     *        required: true
     *     responses:
     *      200:
     *        description: Fetched Successfully
     *      400:
     *        description: Bad Request
     *      404:
     *        description: Not Found
     *      500:
     *        description: Server Error
  */

import { Express,Request, Response } from "express";
import { DBInstance } from "../../db/connection";
import { APIResponseSchema, LoginProp } from "../../includes/types";
// import { SendEmail } from "../../email";
import { ComparePassword, generateToken } from "../../includes/utils";
import moment from "moment";
import { AppConstants } from "../../includes/constants";

const LoginRoute = (app:Express)=>{
   
    app.post(AppConstants.routes.login,(request:Request,response:Response)=>{
    const payload =  request.body;
      LoginFunction(payload).then(()=>{ 
      response.json({status:false});
    })
    })
    app.post(AppConstants.routes.register,(request:Request,response:Response)=>{
      const payload =  request.body;
      SignUpFunction(payload).then(()=>{ 
        response.json({status:false});
      })
      })

      app.get(AppConstants.routes.login,(request:Request,response:Response)=>{
        const payload =  request.body;
        VerifyUserFunction(payload).then(()=>{ 
          response.json({status:false});
        })
        })
}
export default LoginRoute;
// this fuction allow users to login to the system
const LoginFunction = (payload:LoginProp)=>{
return new Promise<APIResponseSchema>((resolve,reject)=>{  
var st = `SELECT * FROM users WHERE userEmail=? LIMIT 1`;
DBInstance(st,[payload.email]).then((res) => {
     if(res.status)
    {
    const user = res.data[0];
    ComparePassword(String(payload?.password),user['userPassword']).then((status)=>{
      if(status && String(user["userLoginNotificationToEmail"]) == "1")
      {
     const accessToken = generateToken({
      email:user.userEmail,
      phoneNumber:user.userPhoneNumber,
      id:user.userId,
      firstName:user.userFirstName,
      lastName:user.userLastName,
      createdAt:user.userCreatedAt,
      lastLogin:moment().toISOString()
    })
    console.log(accessToken);
      // SendEmail({
      //       to:String(payload.email),
      //       subject:`Thank You for Contacting Us!`,
      //       html:`Thank you for reaching out to us. We have received your enquiry regarding and appreciate your interest.
      //         <br/>
      //         Our team is currently reviewing your request and will get back to you as soon as possible. We aim to respond within 1-2 business days. If you have any additional information or further questions in the meantime, please feel free to reply to this email.
      //         <br/>
      //         Thank you for your patience and understanding.`
      //     });
      }
      resolve({status:status,message:status?"Invalid login credentials":"Login successful",data:res.data.map((a,i)=>{
        return {
          
        }
      })})
    })
   }else{
    resolve({status:false,message:"Invalid login credentials",data:{}})
   }
    })
})
}
// this is where users signup to the system
const SignUpFunction = (payload:LoginProp)=>{
  return new Promise<APIResponseSchema>((resolve,reject)=>{  
  var st = `SELECT * FROM users WHERE userEmail=? LIMIT 1`;
  DBInstance(st,[payload.email]).then((res) => {
       if(res.status)
      {
      const user = res.data[0];
      ComparePassword(String(payload?.password),user['userPassword']).then((status)=>{
        if(status && String(user["userLoginNotificationToEmail"]) == "1")
        {
       const accessToken = generateToken({
        email:user.userEmail,
        phoneNumber:user.userPhoneNumber,
        id:user.userId,
        firstName:user.userFirstName,
        lastName:user.userLastName,
        createdAt:user.userCreatedAt,
        lastLogin:moment().toISOString()
      })
      console.log(accessToken);
        // SendEmail({
        //       to:String(payload.email),
        //       subject:`Thank You for Contacting Us!`,
        //       html:`Thank you for reaching out to us. We have received your enquiry regarding and appreciate your interest.
        //         <br/>
        //         Our team is currently reviewing your request and will get back to you as soon as possible. We aim to respond within 1-2 business days. If you have any additional information or further questions in the meantime, please feel free to reply to this email.
        //         <br/>
        //         Thank you for your patience and understanding.`
        //     });
        }
        resolve({status:status,message:status?"Invalid login credentials":"Login successful",data:res.data.map((a,i)=>{
          return {
            
          }
        })})
      })
     }else{
      resolve({status:false,message:"Invalid login credentials",data:{}})
     }
      })
  })
  }
// this function verifies user using token send to their email
const VerifyUserFunction = (payload:LoginProp)=>{
    return new Promise<APIResponseSchema>((resolve,reject)=>{  
    var st = `SELECT * FROM users WHERE userEmail=? LIMIT 1`;
    DBInstance(st,[payload.email]).then((res) => {
         if(res.status)
        {
        const user = res.data[0];
        ComparePassword(String(payload?.password),user['userPassword']).then((status)=>{
          if(status && String(user["userLoginNotificationToEmail"]) == "1")
          {
         const accessToken = generateToken({
          email:user.userEmail,
          phoneNumber:user.userPhoneNumber,
          id:user.userId,
          firstName:user.userFirstName,
          lastName:user.userLastName,
          createdAt:user.userCreatedAt,
          lastLogin:moment().toISOString()
        })
        console.log(accessToken);
          // SendEmail({
          //       to:String(payload.email),
          //       subject:`Thank You for Contacting Us!`,
          //       html:`Thank you for reaching out to us. We have received your enquiry regarding and appreciate your interest.
          //         <br/>
          //         Our team is currently reviewing your request and will get back to you as soon as possible. We aim to respond within 1-2 business days. If you have any additional information or further questions in the meantime, please feel free to reply to this email.
          //         <br/>
          //         Thank you for your patience and understanding.`
          //     });
          }
          resolve({status:status,message:status?"Invalid login credentials":"Login successful",data:res.data.map((a,i)=>{
            return {
              
            }
          })})
        })
       }else{
        resolve({status:false,message:"Invalid login credentials",data:{}})
       }
        })
    })
}