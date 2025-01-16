/* eslint-disable @typescript-eslint/no-unused-vars */
import { User } from "@/app/utils/types";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { NextResponse } from "next/server";
import { handleRequest } from "../route";
import { ToastPosition } from "react-hot-toast";

export async function POST(req:Request){
    const formData = req.formData();
    const payload = Object.values(formData);
}

export const Login = async({email,password}:User,position:ToastPosition = "top-center")=>{
  console.log(email)
    return await handleRequest("login",{
    email,
    password
   },position)
}
export const LoginWithOTP = async(otp:string,position:ToastPosition = "top-center")=>{
    return await handleRequest("login-with-otp",{
      otp
   },position)
}
