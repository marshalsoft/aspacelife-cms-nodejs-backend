import { NextRequest, NextResponse } from "next/server"

async function middleware(request: NextRequest) {
    console.log("running");
    return NextResponse.next();
}
const config = {
    matcher:[]
}