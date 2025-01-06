/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from "next/server";

export default async function GET(req:Request) {
return NextResponse.json({status:false});
}