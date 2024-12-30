import { AppConstants,SECRET_KEY } from "./constants";
import {encode,decodeEntity} from 'html-entities';
import mysql from 'mysql';
import moment from "moment";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { APIResponse } from "./helperFunction";
import { APIResponseSchema } from "./types";
export interface ResultProps {
  status:boolean;
  message:string;
  data?:any;
  userData?:any;
}

export const CheckEmptyInput = async(data:any, payload:any) => {
    return new Promise<ResultProps>((resolve) => {
      const list:string[] = Object.keys(payload);
      const exludedlist:string[] = [
      'accept',
      'cache-control',
      'postman-token',
      'host',
      'accept-encoding',
      'connection',
      'content-length',
      'content-type',
      'user-agent']
      var params:string[] = Object.keys(data).filter((a,i)=>!exludedlist.includes(a));
      var keyExist:string[] = list.filter((a, i) => !params.includes(a));
      var unwantedKeys:string[] = params.filter((a, i) => !list.includes(a));
      var missingKeys:string[] = list.filter((a, i) => !params.includes(a));
      const hasToken:string | undefined = params.find((a,i)=>a === "token");
      if (missingKeys.length !== 0) {
        resolve({status:false,message:`Oops! ${missingKeys[0]} is required.`});
      }else if (unwantedKeys.length !== 0) {
        resolve({status:false,message:`Oops! ${unwantedKeys.map((a,i)=>a).join(", ")} not required.`});
      }else if (keyExist.length == 0) {
        var valueIsEmpty = params.map((a,i)=>{
          return {item:a,value:data[a]}
        }).filter((a,i)=>a.value === "" || a.value === undefined)
        if(valueIsEmpty.length !== 0)
        {
          resolve({status:false,message:`Oops! the value of ${valueIsEmpty.map((a,i)=>{
            return a.item
          }).join(",")} is required`});
        }else if (data["EmailAddress"] && !ValidateEmail(data["EmailAddress"])) {
          resolve({status:false,message:`Oops! a valid email address is required.`});
        }else if (data["email"] && !ValidateEmail(data["email"])) {
          resolve({status:false,message:`Oops! a valid email address is required.`});
        }else if (data["PhoneNumber"] && data["PhoneNumber"].length < parseInt(String(AppConstants.phoneNumberSize))) {
          resolve({status:false,message:`Oops! a valid phone number is required`});
        } else if (data["TransactionPin"] && String(data["TransactionPin"]).length !== parseInt(String(AppConstants.txnPinSize))) {
          resolve({status:false,message:`Oops! TransactionPIN must be 6 digits`});
        } else if (data["dob"] && !ValidateBOD(data["dob"])) {
          resolve({status:false,message:`Oops! a valid date of birth is required`});
        } else{
          CheckLength(data,payload).then((result)=>{
            if(!result.status)
            {
              resolve(result);
            }else{
            if(hasToken)
            {
              // console.log("hasToken:",data[hasToken]);
            }else{
              resolve({status:true,message:`passed`,data:data});   
              }
          }
        })
       
        }
      } else {
        resolve({status:false,message:`Oops! ${keyExist[0]} is required`});
      }
    })
  }
export const ValidatePassword = (value:string) =>{
        const validRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        if (value.match(validRegex)) {
         return true;
       } else {
         return false;
       }
}
export const ValidateEmail = (value:string)=> {
  const mt = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (value.match(mt)) {
    return true;
  } else {
    return false;
  }
}
export const ValidateBOD = (value:string)=> {
  var validRegex = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)(?:0?2|(?:Feb))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
  if (value.match(validRegex)) {
    return true;
  } else {
    return false;
  }
}
export const  AntiHacking = async(data:[key: any])=>{
  const indicators = [";","' or \"","-- or #","--","/*","*/","+","||","%","=foo","PRINT","@@","@variable","@@variable"]
  const keys = Object.keys(data);
  const filterData:any = {}
  await keys.forEach((a:any,i:number)=>{
    var value = mysql.escape(encode(data[a]));
    value = String(value).replace(/[`;]+/g, '').replace(/--/g,'').replace(/1=1/g,'').replace(/"'/g,'"').replace(/'"/g,'"');
    if(String(value[0])=== "'")
    {
    value = String(value).replace(/'/g,'');
    }
    filterData[a] = value;
  })
  // console.log(filterData);
  return await filterData;
}
export const  CheckLength = async(data:[key: any],schema:any)=>{
let list:ResultProps[] = [];
await Object.keys(data).forEach((a:any)=>{
  const item = schema[a];
  const value = data[a];
  if(typeof(value) !== typeof(item.value))
  {
    list.push({status:false,message:`${a} must be of type ${typeof(item.value)}`})
  }
  if(String(value).length > item.maxLength)
  {
    list.push({status:false,message:`${a} must be less then or equal to ${item.maxLength} characters`})
  }
})
if(list.length != 0)
{
  return await list[0]
}
return await {status:true,message:""}
}
export const  ConvertHexToBinary = (hex:string)=>{
    var string = '';
    for (var i = 0; i < hex.length; i += 2) {
      string += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    }
    return string;
}
export const filterWords = (x:string)=>{
  var words = String(x).replace(/(\r\n|\n|\r)/gm, "");
  words = String(x).replace(/["']/g, "&apos;");
  return words;
}
export const  ConvertBinaryToHex = (s:string)=>{
  var ss = JSON.stringify(s);
  var i;
  var l;
  var o = '';
  var n;
  ss += '';
  for (i = 0, l = ss.length; i < l; i++) {
    n = ss.charCodeAt(i).toString(16);
    o += n.length < 2 ? '0' + n : n; 
  }
 return o;
}
export const ReturnComma = (str:string)=>{
    if(str === "") {
      return str;
    }
    if(str === ".") {
      return String(str).replace('.','');
    }
    if(String(str) === "00"){
      return "0";
    }
    str = String(str).replace(/[^0-9.]/g,'');
    const getDot = String(str).split(".");
    let firstPart = getDot[0];
    if(firstPart.length >= 4) {
       firstPart = firstPart.replace(/(\d)(?=(\d{3})+$)/g, '$1,')
  }
    if(getDot.length >= 2){
      return firstPart+"."+getDot[1];
    }
    return firstPart;
  }

export const GenerateUniqueCode = (n:number = 15):string=>{
  if(n == undefined)
  {
    n = 8;
  }
  var text:string = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i < n; i++)
  {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}
export const GenerateOTP = (n:number = 15):string=>{
  if(n == undefined)
  {
    n = 8;
  }
  var text:string = '';
  var possible = '0123456789';
  for (var i = 0; i < n; i++)
  {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

export const HashPassword = async (password: string): Promise<string> => {
  return bcrypt.hash(password, 10);
};

// Function to check if a password matches
export const ComparePassword = async (password: string, hash: string): Promise<boolean> => {
  return bcrypt.compare(password, hash);
};
export const generateToken = (data:any,duration:number = 1): string | null => {
  try {
    return jwt.sign(data, SECRET_KEY!, { expiresIn: `${duration}h` });
  } catch (error) {
   return null
  }
};

export const VerifyJWT = (token:string)=>{
  return new Promise<APIResponseSchema>((resolve)=>{
  jwt.verify(token, SECRET_KEY!, function(err, decoded) {
    if(err)
    {
      resolve(APIResponse(false,"Invalid access token",null));
    }else{
      resolve(APIResponse(true,"Token verified,",decoded));
    }
  });
})
}