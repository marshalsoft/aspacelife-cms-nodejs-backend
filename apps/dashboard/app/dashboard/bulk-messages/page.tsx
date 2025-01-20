/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-key */
"use client"
import AvatarIcon from "@/app/assets/icons/avatarIcon";
import { ThreeDots } from "@/app/assets/icons/dashboard/threeDots";
import { BaseCard } from "@/app/components/baseCard";
import { BasePagination } from "@/app/components/basePagination";
import { Breadcrumb } from "@/app/components/breadcrum";
import moment from "moment";
import { useState } from "react";
const Page = ()=>{
    const [users,setUsers] = useState(Array.from({length:20}).map((user,i)=>{
        return {
            email:`user${i+1}@mail.com`,
            date:moment().format("DD-MM-YYYY")
        }
    }))
    return (
        <div className="container ">
           <Breadcrumb
          title="Bulk messages"
          cards={[
           <BaseCard >
           <div >
              <div className="font-bold pb-0 text-black text-[16px]" >49,590</div>
              <div className="font-thin text-[#484848] text-[12px]" >All time subscriber</div>
           </div>
           </BaseCard>,
            <BaseCard >
            <div >
               <div className="font-bold pb-0 text-black text-[16px]" >49,590</div>
               <div className="font-thin text-[#484848] text-[12px]" >All time subscriber</div>
            </div>
            </BaseCard>
          ]}
      /> 
      
      <BaseCard 
      hideIcon
      >
        <table className="table-auto  text-black p-3">
            <thead >
                <tr className="border-b-[1px] text-left">
                    <th className="p-3 px-10">Subscribers</th>
                    <th className="p-3 px-5">Date</th>
                    <th className="p-3 px-5 w-[220px]">Action</th>
                </tr>
            </thead>
            <tbody >
            {users.map((user,i)=><tr key={i} className="border-b-[1px] text-left" >
                    <td className="p-3 px-10 flex items-center gap-3 ">
                        <AvatarIcon />
                        <span >{user.email}</span></td>
                    <td className="p-3 px-5">{user.date}</td>
                    <td className="p-3 px-5 flex items-center gap-3">
                        <button className="bg-[#EDEDED] p-2 px-6 rounded-md">
                            Message
                        </button>
                        <button className="p-2 rounded-full border-2">
                        <ThreeDots />
                        </button>
                    </td>
                </tr>)}
            </tbody>
        </table>
      </BaseCard>
      <BasePagination />
      </div>
      );
    }
export default Page;