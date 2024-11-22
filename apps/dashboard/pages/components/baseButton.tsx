import Link from "next/link"
import { BaseLoader } from "./baseLoader";
interface BaseButtonProp {
onClick?:()=>void;
title:string;
loading?:boolean;
disabled?:boolean;
type?:"submit" | "button"
}
export const BaseButton = (prop:BaseButtonProp)=>{
    return <button 
    type={prop.type}
    onClick={prop.onClick} 
    className="ti-btn ti-btn-primary !bg-primary !text-white !font-medium">
      {prop.loading && <BaseLoader />} 
      {prop.title}
    </button>
     
}