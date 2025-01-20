import { ArrowBackIcon } from "@/app/assets/icons/dashboard/arrowBack"
import { BaseNavLink } from "../baseNavLink"
import { ROUTES } from "@/app/utils/constant"
import { ReactNode } from "react";
interface BreadcrumbProps {
    title?:string;
    cards?:ReactNode[];
}
export const Breadcrumb = (props:BreadcrumbProps)=>{
    return <div className="grid grid-cols-2 mb-3">
      <div className="">
      <div className="flex items-center gap-18">
        <BaseNavLink 
        to={ROUTES.Dashboard}
        >
          <div className="p-3 flex justify-center items-center w-10 h-10 bg-white  drop-shadow rounded-full">
         <ArrowBackIcon />
         </div>
        </BaseNavLink>
        <span className="text-black text-[25px] font-[500] ms-3">{props.title}</span>
      </div>
      </div>
      <div className="flex items-center justify-end gap-2">
        {props.cards?.map((card)=>{
            return card
        })}
      </div>
       </div>
}