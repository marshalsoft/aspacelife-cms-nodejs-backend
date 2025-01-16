/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import { HambugerIcon } from '@/app/assets/icons/dashboard/hambugerIcon';
import Link from 'next/link';
import { useState } from 'react';
import { BaseNavLink } from '../baseNavLink';
import { MenuListProps } from '@/app/utils/types';
import { COLOURS, ROUTES } from '@/app/utils/constant';
import { DashboardIcon } from '@/app/assets/icons/dashboard/dashboardIcon';
import { SubscriberIcon } from '@/app/assets/icons/dashboard/SubcriptionIcon';
import { EmailIcon } from '@/app/assets/icons/dashboard/EmailIcon';
import { BulkEmailIcon } from '@/app/assets/icons/dashboard/bulkEmailIcon';
import { JobsIcon } from '@/app/assets/icons/dashboard/jobs';
import { EmailTemplateIcon } from '@/app/assets/icons/dashboard/emailTemplate';
import { UnSubscribeIcon } from '@/app/assets/icons/dashboard/unscribe';
import { EmailBlackListIcon } from '@/app/assets/icons/dashboard/emailBlackList';
import { UsersIcon } from '@/app/assets/icons/dashboard/users';
import { LogOutIcon } from '@/app/assets/icons/dashboard/logout';

const Sidebar = () => {
    const [toggle,setToggle] = useState<boolean>(false);
    const [menuList,setMenuList] = useState<MenuListProps[]>([
        {title:"Dashboard",route:ROUTES.Dashboard,icon:<DashboardIcon />},
        {title:"Subscribers",route:ROUTES.DashboardSubcribers,icon:<SubscriberIcon />},
        {title:"Messages",route:ROUTES.DashboardMessages,icon:<EmailIcon />},
        {title:"Bulk Messages",route:ROUTES.DashboardBulkMessages,icon:<BulkEmailIcon />},
        {title:"Job Application",route:ROUTES.DashboardJobs,icon:<JobsIcon />},
        {title:"Email Template",route:ROUTES.DashboardEmailTemplate,icon:<EmailTemplateIcon />},
        {title:"Unsubscribed",route:ROUTES.DashboardUnsubscribed,icon:<UnSubscribeIcon />},
        {title:"Email Blacklist",route:ROUTES.DashboardEmailBlacklist,icon:<EmailBlackListIcon />},
        {title:"Email Users",route:ROUTES.DashboardEmailUsers,icon:<UsersIcon />},
        {title:"Log Out",route:ROUTES.DashboardLogout,icon:<LogOutIcon />}
    ])
  return (
    <div className="flex flex-col min-w-14 max-w-52 bg-white text-black">
      <nav className="flex-grow">
        <ul className="space-y-4 p-4">
          <li>
          <button
          className='px-2 hover:cursor-pointer'
          onClick={()=>setToggle(!toggle)}
          >
          <HambugerIcon />
          </button>
            </li>
            {menuList.map((item,index)=><li 
            key={index}
            className={`group`}
            >
            <BaseNavLink to={item.route}>
          <div  className="flex gap-[8px] items-center group-hover:cursor-pointer hover:text-white group-hover:bg-[#7001F9] p-[8px]">
             <>{item.icon}</>
             {toggle &&<span className='text-black group-hover:text-white text-[14px] '>{item.title}</span>}
             </div>  
            </BaseNavLink>
            </li>)}
         
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;