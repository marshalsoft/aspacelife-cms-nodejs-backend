/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from "next/server";
import { APIResponse, MethodSchema, ToastProps } from "../utils/types";
import { json } from "stream/consumers";
import { BaseUrl } from "../utils/constant";
import { toast, ToastPosition } from 'react-hot-toast';
export async function GET(req:Request){
return NextResponse.json({status:false})
}

export async function POST(req:Request){
    return NextResponse.json({status:false})
}
export async function handleRequest(url:string,data:any,position:ToastPosition = "top-center",json:boolean = false){
    const formData = new FormData();
    let method:MethodSchema = "POST";
    let path:string = url;
    Object.keys(data).forEach((key)=>{
    formData.append(key,data[key]);
    })
    if(String(url).includes(":"))
    {
        const splitUrl = String(url).split(":");
        const firstPart = splitUrl[0] as MethodSchema;
        method = firstPart;
        path = splitUrl[splitUrl.length -1];
    }
    const headers = {}
    const requestOptions: RequestInit = {
        method,
        headers,
        body:formData
      };
    return new Promise<APIResponse>((resolve)=>{
        fetch(String(BaseUrl).concat(path),requestOptions).then((res)=>res.json()).then((res)=>{
            ShowMessage({
                message:res.message,
                status:res.status,
                position
            })
            resolve(res)
        }).catch((e)=>{
            ShowMessage({
                message:e.message,
                status:false,
                position
            })
        resolve({status:false,message:e.message,data:{}})  
        })
   })
}
export const ShowMessage = ({status,message,position = "top-center"}:ToastProps)=>{
    if(status)
    {
     toast.success(message,{position:position});
    }else{
      toast.error(message,{position:position});
    }
}