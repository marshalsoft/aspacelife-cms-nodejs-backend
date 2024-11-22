import Pageheader from "@/shared/layout-components/page-header/pageheader"
import Seo from "@/shared/layout-components/seo/seo"
import { useRouter } from "next/router"
import { FormEvent, Fragment, useEffect, useState } from "react"
import { PartnerFormProp } from "./new"
import { Dealsstatistics } from "@/shared/data/dashboards/crmdata"
import { EyeOpenIcon } from "../components/icons/eye"
import Link from "next/link"
import { ROUTES } from "@/shared/constants"
import { GetRequest } from "@/pages/api/request"
import { PartnersProp, PartnerUserProp } from "../components/totalPartner"
import { BaseButton } from "@/pages/components/baseButton"

const UserDetialsPage = ()=>{
  const {query} = useRouter();
  const [formData,setFormData] = useState<PartnerFormProp>();
  const [partnerDetails,setPartnerDetails] = useState<PartnersProp | null>(null);
  const [selectedUser,setSelectedUser] = useState<PartnerUserProp | null>(null);
  const [blockeAccounrDetails,setBlockeAccounrDetails] = useState<PartnerUserProp | null>(null);
   const changeHandler = (e:any) => {
       if(e.target.name === "country")
       {
           e.target.value  = String(e.target.value).split(" ").filter((a,i)=>i != 0).join(" ");
       }
       console.log(e);
       setFormData({ ...formData, [e.target.name]: e.target.value });
     };
     
   const handleForm = (e:FormEvent)=>{
       e.preventDefault();
      //  PostRequest("",formData).then((response)=>{
           
      //  })
   }
   const GetPartner = (id:string)=>{
    GetRequest(`internal/organizations/${id}`,{}).then((response)=>{
      if(response.status && response.data)
      {
        const list:PartnersProp | null = response.data as PartnersProp;
        setPartnerDetails(list);
        if(list?.users && list?.users?.length != 0)
        {
          const user = list?.users[0];
          setSelectedUser(user);
        }
      }
    })
  }
 
  useEffect(()=>{
    if(query?.partnerid)
    {
    GetPartner(String(query?.partnerid));
    }
   },[query])
    return <Fragment>
    <Seo title={"Edit Partner"} />
    <Pageheader currentpage="Edit Details" activepage="Edit Details" mainpage="Dashboard" />
    <form 
    onSubmit={handleForm} >
    <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8">
          <div className="box">
            <div className="box-header">
              <h5 className="box-title">Partner Details</h5>
            </div>
            <div className="box-body">
              <form className="ti-validation">
              <div className="my-5">
                    <label className="ti-form-label dark:text-defaulttextcolor/70 mb-0">Organization Name</label>
                    <input type="text" className="my-auto ti-form-input  rounded-sm" placeholder="Name of organization"
                    onChange={changeHandler}
                    name='organization_name'
                    value={partnerDetails?.organization_name}
                    required />
                </div>
                <div className="my-5">
                  <div className="space-y-2">
                 <label className="ti-form-label dark:text-defaulttextcolor/70 mb-0">Organization category</label>
                 <input type="text" className="my-auto ti-form-input  rounded-sm" placeholder="Organization category"
                    onChange={changeHandler}
                    name='organization_category'
                    value={partnerDetails?.category_id}
                    required />
              </div>
                </div>
                <div className="grid lg:grid-cols-2 gap-6 my-5 ">
                <div className="space-y-2">
                    <label className="ti-form-label dark:text-defaulttextcolor/70 mb-0">City</label>
                    <input
                    onChange={changeHandler}
                    type="text" className="my-auto ti-form-input  rounded-sm " placeholder="Select a city" required 
                     name='city'
                    />
                  </div> 
                  <div className="space-y-2">
                    <label className="ti-form-label dark:text-defaulttextcolor/70 mb-0">State</label>
                    <input
                    onChange={changeHandler}
                    type="text" className="my-auto ti-form-input  rounded-sm " placeholder="Select a state" required 
                     name='state'
                    />
                  </div> 

                  <div className="space-y-2">
                 <label className="ti-form-label dark:text-defaulttextcolor/70 mb-0">Country</label>
                 <input
                 value={partnerDetails?.country}
                    onChange={changeHandler}
                    type="text" className="my-auto ti-form-input  rounded-sm " placeholder="Select a city" required 
                     name='country'
                    />
              </div>
                 
                  </div> 
                  <div className="">
                    <label className="ti-form-label dark:text-defaulttextcolor/70 mb-0">Address</label>
                    <input
                    onChange={changeHandler}
                    type="text" className="my-auto ti-form-input  rounded-sm" placeholder="Address" required
                    name='address'
                    />
                  </div>
                <div className="grid lg:grid-cols-2 gap-3 mt-5">
                <button type="button" className="ti-btn ti-btn-primary-full">Block Account</button>
                <button type="submit" className="ti-btn ti-btn-primary-full">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-span-4">
          <div className="box">
            <div className="box-header">
              <h5 className="box-title">List of Partner Admin</h5>
            </div>
            <div className="box-body">
              <table className="table min-w-full whitespace-nowrap table-hover border table-bordered">
            {partnerDetails?.users?.map((item,index) => (
                <tr className="border border-inherit border-solid hover:bg-gray-100 dark:border-defaultborder/10 dark:hover:bg-light" key={Math.random()}>
                  <td>
                    <div className="flex items-center font-semibold">
                      {/* <span className="!me-2 inline-flex justify-center items-center">
                        <img src={item.} alt="img"
                          className="w-[1.75rem] h-[1.75rem] leading-[1.75rem] text-[0.65rem]  rounded-full" />
                      </span> */}
                      {item.full_name}
                    </div>
                  </td>
                  <td>
                    <div className="flex flex-row items-center !gap-2 text-[0.9375rem]">
                      <Link aria-label="anchor" href={`${ROUTES.totalUsers}/${item.id}`}
                        className="ti-btn ti-btn-icon ti-btn-wave !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-primary/10 text-primary hover:bg-primary hover:text-white hover:border-primary">
                          <i
                          className="ri-edit-line"></i>
                          </Link>
                    </div>
                  </td>
                </tr>
              ))}
              </table>
             </div>
             </div>
        </div>
      </div>
      </form>
  </Fragment>
}
UserDetialsPage.layout = "Contentlayout";
export default UserDetialsPage;