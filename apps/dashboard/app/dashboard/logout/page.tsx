"use client"
import { redirect } from "next/navigation";
import { useEffect } from "react";

const Page = ()=>{
useEffect(()=>{
    localStorage.clear();
    redirect("/")
},[])
return <div >
</div>
}
export default Page;