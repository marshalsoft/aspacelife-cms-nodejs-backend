import { GetRequest, PostRequest } from "@/pages/api/request";
import { ROUTES } from "@/shared/constants";
import { Customers } from "@/shared/data/dashboards/crmdata"
import Link from "next/link"
import { useEffect, useState } from "react";
export interface PartnersProp {
  organization_id?:string;
  organization_name?:string;
  account_mode?:string;
  avatar?:string;
  account_status?:string;
  key_contact_id?:string;
  is_2fa_enabled?:boolean;
  created_at?:string;
  updated_at?:string;
  opam_points?:string;
  category_id?:string;
  country?:string;
  current_subscription_id?:string;
  key_contact?: {
      id?:string;
      name?:string;
      email?:string;
      invitation_token?:string;
      phone_number?:string;
      role_id?:string;
      contact_information?: {
          address?:string;
          country?:string;
      },
      account_status?:string;
      activated_at?:string;
      last_logged_in_at?:string;
      last_logged_in_ip?:string;
      last_logged_in_location?: {
          latitude?:string;
          longitude?:string;
      },
      created_at?:string;
      updated_at?:string;
  },
  subscriptions?: any[];
  members?:any[];
  users?:PartnerUserProp[];
}
export interface PartnerUserProp {
  id?:string;
  full_name?:string;
  email?:string;
  phone_number?:string;
  account_status?:string;
  country?:string;
  distress_count?:string;
  created_at?:string;
  updated_at?:string;
  organization_id?:string;
}
const TotalPartners = ()=>{
const [listOfPartners ,setListOfPartners] = useState<PartnersProp[]>([]);
const GetPartners = ()=>{
  GetRequest("internal/organizations",{}).then((response)=>{
    if(response.status)
    {
      setListOfPartners(response.data);
    }
  })
}
useEffect(()=>{
  GetPartners();
},[])
    return   <div className="xxl:col-span-6 xl:col-span-6 col-span-12">
    <div className="box overflow-hidden">
      <div className="box-body">
        <div className="flex items-top justify-between">
          <div>
            <span
              className="!text-[0.8rem]  !w-[2.5rem] !h-[2.5rem] !leading-[2.5rem] !rounded-full inline-flex items-center justify-center bg-primary">
              <i className="ti ti-users text-[1rem] text-white"></i>
            </span>
          </div>
          <div className="flex-grow ms-4">
            <div className="flex items-center justify-between flex-wrap">
              <div>
                <p className="text-[#8c9097] dark:text-white/50 text-[0.813rem] mb-0">Total Partners</p>
                <h4 className="font-semibold  text-[1.5rem] !mb-2 ">{listOfPartners.length}</h4>
              </div>
              <div id="crm-total-customers">
                <Customers />
              </div>
            </div>
            <div className="flex items-center justify-between !mt-1">
              <div>
                <Link className="text-primary text-[0.813rem]" href={ROUTES.totalPartners}>View All<i
                  className="ti ti-arrow-narrow-right ms-2 font-semibold inline-block"></i></Link>
              </div>
              <div className="text-end">
                <p className="mb-0 text-success text-[0.813rem] font-semibold">+40%</p>
                <p className="text-[#8c9097] dark:text-white/50 opacity-[0.7] text-[0.6875rem]">this month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}
export default TotalPartners;