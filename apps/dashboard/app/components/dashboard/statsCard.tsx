/* eslint-disable react/jsx-key */

import { ReactNode } from "react";
import { BaseCard } from "../baseCard";
import { ArrowDownIcon } from "@/app/assets/icons/dashboard/arrowDown";
import { ChartLevel } from "@/app/assets/icons/dashboard/chartLevel";
interface StatsCardProps {
icon:ReactNode;
title:string;
counter:string;
}
const StatsCard = (props:StatsCardProps) => {
    return (
      <BaseCard
      hideIcon
      >
       <div className="p-5 text-black">
       <div className="grid">
       <div className="grid-cols-2 grid">
       <div className="bg-white w-[27px] h-[27px] border-4 border-[#EDEDED] p-1 flex items-center justify-center rounded-full">
            {props.icon}
        </div>
        <div className="">
        <div className="border-2 border-[#EDEDED] p-1 px-2 rounded-[6px] text-[8px] text-[#484848] flex items-center justify-between">
        <span >Today</span>
        <ArrowDownIcon />
        </div> 
        </div> 
        </div> 
        </div> 
        <div className="font-normal mt-2">
        {props.title}
        </div> 
        <div className="font-bold text-[24px] flex items-center gap-2">
        {props.counter} <ChartLevel />
        </div> 
        <div className="grid">
       <div className="grid-cols-2 grid">
       <div className="flex items-center text-[10px]">
       <span >
            Total today
            </span>
            <span className="font-bold ps-[1px]">
            1,904
            </span>
       </div>
        <div className="">
        <div className="border-2 border-[#EDEDED] p-1  rounded-[6px] text-[8px] text-[#484848] flex items-center justify-between">
        <ChartLevel color="green" size={10} />Up by <span className="text-green-600">2.5%</span>
        </div> 
        </div> 
        </div> 
        </div> 
       </div>
    </BaseCard>
    );
  };
  
  export default StatsCard;