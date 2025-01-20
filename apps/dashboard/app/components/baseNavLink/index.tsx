import Link from 'next/link';
import {ReactNode } from "react";
interface BaseNavLinkProps {
children:ReactNode;
to?:string
}
export const BaseNavLink = (props:BaseNavLinkProps)=>{
    return <Link 
    href={props.to!}
    className='visited:bg-purple-500'
    >
    <>
    {props.children}
    </>
  </Link>
}