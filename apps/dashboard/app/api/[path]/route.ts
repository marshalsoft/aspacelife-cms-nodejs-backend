/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from "next/server";

export async function GET(req:Request){
return NextResponse.json({status:false})
}

export async function POST(req:Request){
    return NextResponse.json({status:false})
}