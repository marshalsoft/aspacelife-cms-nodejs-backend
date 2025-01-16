import { APIResponseSchema } from "../includes/types";
import { DBInstance } from "./connection";

const SaveOTP = (otp:string,email:string)=>{
var st = `SELECT * FROM appToken WHERE tkUserEmail=? LIMIT 1`;
DBInstance(st,[email]).then((result)=>{
    if(result.status)
    {
        var st = `UPDATE appToken SET tkToken=? WHERE tkUserEmail=? `;
        DBInstance(st,[otp,email]);
    }else{
        var st = `INSERT INTO appToken (tkToken,tkUserEmail) VALUES(?,?)`;
        DBInstance(st,[otp,email]);
    }
});
}
export default SaveOTP;

export const VerifyOTP = (otp:string,email:string)=>{
 return new Promise<APIResponseSchema>((resolve)=>{
 var st = `SELECT * FROM appToken WHERE tkToken=? AND tkUserEmail=? LIMIT 1`;
 DBInstance(st,[otp,email]).then((result)=>{
    resolve({...result,message:result.status?"OTP verified successfully":"Invalid OTP."});
 });
})
}
 