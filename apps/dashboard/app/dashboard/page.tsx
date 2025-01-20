/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-key */
"use client"
import { useState } from "react";
import { BlogIcon } from "../assets/icons/dashboard/blogicon";
import { EnquiriesIcon } from "../assets/icons/dashboard/EnquiriesIcon";
import { SubscriberIcon2 } from "../assets/icons/dashboard/SubscriberIcon";
import { UsersIcon2 } from "../assets/icons/dashboard/UsersIcon";
import { EyeOpenIcon2 } from "../assets/icons/eyeIcons";
import { HumbergerIcon2 } from "../assets/icons/humbugerIcon";
import { BaseCard } from "../components/baseCard";
import StatsCard from "../components/dashboard/statsCard";
import { ThreeDots } from "../assets/icons/dashboard/threeDots";
import { ArrowBackIcon } from "../assets/icons/dashboard/arrowBack";
import { ArrowForwardIcon } from "../assets/icons/dashboard/arrowForward";
import PieChart from "../components/charts/pie";
import BaseTable from "../components/baseTable";

const Dashboard = () => {
    const [list,setList] = useState([
        {title:"Home page"},
        {title:"Contact us"},
        {title:"Product page"}
    ])
 
    return (
      <div className="container ">
       <div  className="grid grid-cols-4 gap-5 mb-3">
       <StatsCard 
       icon={<BlogIcon />}
       title="Total Blogs"
       counter="938,9393"
       />
       <StatsCard 
       icon={<UsersIcon2 />}
        title="Total Users"
       counter="78,9393"
       />
       <StatsCard 
       icon={<EnquiriesIcon />}
        title="Total Enquiries"
       counter="28,9393"
       />
       <StatsCard 
       icon={<SubscriberIcon2 />}
        title="Total Subscribers"
       counter="98,9393"
       />
       </div>
       <div className="grid grid-cols-3 gap-5 mb-3">
        <BaseCard
        hideIcon
        >
            <div className="p-5 text-black h-[330px]" >
            <div className="font-bold  text-[24px]">Site Headers</div>
            <div className="font-normal text-[9px] mb-[10px]">Edit site headers. Drag the items into the order you prefer.</div>
            <div className="h-[78%]" >
            {list.map((a,i)=><div key={i} className="bg-[#F9F4FF] p-2 rounded-[8px] flex items-center gap-2 border-l-[4px] border-l-[#7001F9] mb-[10px]">
            <EyeOpenIcon2 size={15} color={"#7001F9"} />
           <div className="text-[12px] w-4/5">
                Home page
            </div>
            <button >
                <HumbergerIcon2  size={20} color={"#7001F9"} />
            </button>
            </div>)}
            </div>
            <div 
            className="text-[8px]"
            >
            Double click to rename page name, Toggle visibility icon to hide page
            </div>
            </div>
        </BaseCard>
        <BaseCard
        hideIcon
        >
          <div className="p-5 text-black  h-[330px]" >
            <div className="font-bold  text-[24px]">Blogs</div>
            <div className="font-normal text-[9px]">Recent blogs.</div>
            <div className="h-[80%]" >
            {list.map((a,i)=><div key={i} className="bg-[#F9F4FF] p-2 rounded-[8px] flex items-center gap-2 border-l-[4px] border-l-[#7001F9] mb-[10px]">
            <BlogIcon size={15} color={"#7001F9"} />
           <div className="text-[12px] w-4/5">
                Home page
            </div>
            <button 
            className="rounded-full border-[#7001F9] border-[2px] p-1"
            >
                <ThreeDots size={20} color={"#7001F9"} />
            </button>
            </div>)}
            </div>
            <div 
            className="text-[8px]"
            >
           Edit, view and create new blog post
            </div>
         </div>
        </BaseCard>
        <BaseCard
        hideIcon
        >
            <div className="h-[330px]" >
            <div className="grid grid-cols-3 p-3">
                <div className="flex items-center justify-start">
                <button className="rotate-180">
                 <ArrowForwardIcon  size={16} color="#A9A9A9"/>
                </button>
                </div>
                <div className="flex items-center text-black text-[12px] font-bold">
                March 2023
                </div>
                <div className="flex items-center justify-end">
                <button>
                 <ArrowForwardIcon  size={16} color="#A9A9A9"/>
                </button>
                </div>
            </div>
            <div className="p-3 h-[230px] flex items-center justify-center relative" >
                <PieChart 
                colors={["#006CFA","#41AA00","#7001F9"]}
                series={[23,90,90]}
                width={260}
                labels={["jan","feb","mar"]}
                />
                <div className="absolute text-center">
                    <div className="text-black text-[24px] font-bold">45623</div>
                    <div className="text-black text-[12px]">visitors this month</div>
                </div>
            </div>
            <div className="border-b-[1px] border-b-gray-300 mx-3" />
            <div className="flex p-3" >
            <Smiley />
            <div className="px-3">
            <div className="text-black text-[12px] font-bold p-0">You are doing good!</div>
            <div  className="text-black text-[10px] p-0">You almost reached your goal</div>
            </div>
            </div>
            </div>
        </BaseCard>
       </div>
      
       <BaseTable
       title="Activity logs"
       rows={Array.from({length:12}).map((a,i)=>{
        return {id:"",
            list:["dkld","dll","skks","Action"]
        }
       })}
       headers={[
       "Date/time",
       "Name",
       "Role",
       "Action",
       ]}
       />
       
    </div>
    );
  };
  
  export default Dashboard;
  const Smiley = ()=>{
    return <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="17.3889" cy="17.43" r="17.3372" fill="#F9F4FF"/>
    <path d="M17.3887 26.1797C22.2134 26.1797 26.1387 22.2544 26.1387 17.4297C26.1387 12.6049 22.2134 8.67969 17.3887 8.67969C12.5639 8.67969 8.63867 12.6049 8.63867 17.4297C8.63867 22.2544 12.5639 26.1797 17.3887 26.1797ZM20.445 14.8047C20.6195 14.8002 20.7931 14.8308 20.9556 14.8945C21.118 14.9581 21.2661 15.0537 21.3911 15.1756C21.516 15.2974 21.6153 15.443 21.6831 15.6039C21.7508 15.7647 21.7857 15.9374 21.7857 16.1119C21.7856 16.2865 21.7506 16.4592 21.6827 16.62C21.6149 16.7808 21.5155 16.9263 21.3904 17.0481C21.2654 17.1698 21.1173 17.2653 20.9548 17.3289C20.7922 17.3925 20.6186 17.4229 20.4442 17.4183C20.1034 17.4094 19.7797 17.2677 19.5419 17.0235C19.3041 16.7793 19.1711 16.4519 19.1712 16.1111C19.1713 15.7702 19.3045 15.4429 19.5425 15.1989C19.7804 14.9548 20.1043 14.8134 20.445 14.8047ZM16.6817 20.8588C17.1484 20.9524 17.629 20.9524 18.0957 20.8588C18.317 20.8133 18.5375 20.7442 18.7519 20.6549C18.9567 20.5674 19.1579 20.4589 19.346 20.3329C19.528 20.2087 19.7022 20.0652 19.8632 19.9051C20.0233 19.7458 20.1668 19.5717 20.291 19.3871L21.7418 20.3644C21.3646 20.9235 20.8837 21.4049 20.3252 21.7828C19.7561 22.1668 19.1173 22.4356 18.4448 22.5738C17.7476 22.7139 17.0296 22.7136 16.3325 22.5729C15.6599 22.4367 15.021 22.1681 14.453 21.7828C13.8945 21.404 13.4131 20.9224 13.0347 20.3636L14.4854 19.3862C14.6105 19.5708 14.754 19.7449 14.9124 19.9024C15.3955 20.388 16.0108 20.7206 16.6817 20.8588ZM14.3262 14.8047C14.4986 14.8047 14.6693 14.8388 14.8286 14.9048C14.9878 14.9708 15.1326 15.0676 15.2544 15.1895C15.3763 15.3115 15.473 15.4563 15.5389 15.6156C15.6048 15.7749 15.6387 15.9456 15.6387 16.1181C15.6386 16.2905 15.6046 16.4612 15.5386 16.6205C15.4725 16.7797 15.3758 16.9244 15.2538 17.0463C15.1319 17.1682 14.9871 17.2649 14.8278 17.3308C14.6685 17.3967 14.4977 17.4306 14.3253 17.4306C13.9771 17.4304 13.6432 17.292 13.397 17.0457C13.1509 16.7994 13.0127 16.4654 13.0128 16.1172C13.0129 15.769 13.1514 15.4351 13.3977 15.1889C13.644 14.9428 13.978 14.8046 14.3262 14.8047Z" fill="#7001F9"/>
    </svg>
    
  }