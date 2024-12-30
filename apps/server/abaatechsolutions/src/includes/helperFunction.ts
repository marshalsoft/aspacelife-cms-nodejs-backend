import { APIResponseSchema, EncryptResponse } from "./types"
import * as crypto from 'crypto';
import { VerifyJWT } from "./utils";
import { Request, Response } from "express";

// Function to encrypt text
export const Encrypt = (text: string,secretKey:string, iv:string): EncryptResponse=>{
  var buf = Buffer.from(iv, 'utf8');
  const cipher = crypto.createCipheriv('aes-256-cbc', secretKey, buf);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return { iv: buf.toString('hex'), encryptedData: encrypted };
}

// Function to decrypt text
export const Decrypt = (encryptedData: string, iv: string,secretKey:string): string=> {
  const decipher = crypto.createDecipheriv('aes-256-cbc', secretKey, Buffer.from(iv, 'hex'));
  let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

export const GenerateOTP = (length:number = 4)=>{
  let token = '';
  for (let i = 0; i < length; i++) {
    token += Math.floor(Math.random() * 10); // Generate a random digit (0-9)
  }
  return token;
}
export const APIResponse = (status:boolean,message:string,data:any):APIResponseSchema=>{
return {
  status,
  message,
  data
}
}

export const CheckBearerToken = (token:string)=>{
  return new Promise<APIResponseSchema>((resolve)=>{
  token = String(token).replace("Bearer ","").replace(/[ ]/g,'');
  VerifyJWT(token).then((result)=>{
  if(!result.status)
  {
    resolve(APIResponse(false,"Invalid Bearer token",null))
  }else{
    resolve(APIResponse(true,"Bearer token verified.",result.data))
  }
  })
})
}
export const RequestResponse = (iresp:Response,res:APIResponseSchema)=>{
if(res.status)
{
  return iresp.status(200).json(res)
}
 return iresp.status(500).json(res)
}