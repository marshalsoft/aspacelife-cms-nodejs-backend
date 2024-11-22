import { EncryptResponse } from "./types"
import * as crypto from 'crypto';

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
