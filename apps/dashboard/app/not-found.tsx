"use client"
import { redirect } from "next/navigation";
import React, { useEffect } from "react";

const Page = ()=> {
    // redirect to login
    useEffect(()=>{
       redirect("/");
    },[])
    return (
      <p>
      Welcome to 404 page
      </p>
    )
  }

  export default Page;