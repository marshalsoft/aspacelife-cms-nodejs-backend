import Seo from '@/shared/layout-components/seo/seo';
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import React, { FormEvent, Fragment, ReactFragment, use, useEffect, useState } from 'react'
import Link from 'next/link';
import { tabledata1, tabledata10, tabledata11, tabledata12, tabledata13, tabledata14, tabledata15, tabledata16, tabledata17, tabledata18, tabledata19, tabledata2, tabledata20, tabledata21, tabledata22, tabledata23, tabledata24, tabledata25, tabledata26, tabledata27, tabledata28, tabledata29, tabledata3, tabledata30, tabledata31, tabledata32, tabledata4, tabledata5, tabledata6, tabledata7, tabledata8, tabledata9 } from '@/shared/data/prism/tables-prism';
import dynamic from 'next/dynamic';
import { PartnersProp } from '../components/totalPartner';
import { Countries } from '@/shared/countries';
import { GetRequest, PostRequest } from '@/pages/api/request';
import { Dealsstatistics } from '@/shared/data/dashboards/crmdata';
import { ROUTES } from '@/shared/constants';
import { EyeOpenIcon } from '../components/icons/eye';
import { BaseButton } from '@/pages/components/baseButton';
import APICalls from '@/pages/api/serverCalls';
import { toast, ToastContainer } from 'react-toastify';
const Select = dynamic(() => import("react-select"), { ssr: false });

interface select {
    id:string;
    label:string;
    value?:string;
    }
 export interface PartnerFormProp {
    email?:string;
    phone_number?:string;
    first_name?:string;
    last_name?:string;
    address?:string;
    country?:string;
    password?:string;
    organization_name?:string;
    organization_category_id?:string;
    countryISO?:string;
    location?: {
      latitude?:string;
      longitude?:string;
    };
    ip_address?:string;
 }  
export interface CategoriesProp {
  id?:string;
  name?:string;
  description?:string;
  createdAt?:string;
  updatedAt?:string;
}
const NewPartnersPage = ()=>{
  const [formData,setFormData] = useState<PartnerFormProp>();
  const [loading,setLoading] = useState<boolean>(false);
  const [dialCode,setDialCode] = useState<string>("");
  const [listOfPartners,setListOfParners] = useState<PartnersProp[]>([]);
  const [categoriesList,setCategoriesList] = useState<select[]>([])
    const changeHandler = (e:{name:string;value:string}) => {
      const data = { ...formData, [e.name]: e.value}
      setFormData(data);
    };
        const CountryList:select[] = Countries.map((a,i)=>{
          return {id:`${a.dial_code}`, label:`${a.flag} ${a.name}`,value:a.code}
        });
       
    const handleForm = (e:FormEvent)=>{
        e.preventDefault();
        
        PostRequest("internal/organizations",{
          organization_name:formData?.organization_name,
          organization_category_id: formData?.organization_category_id,
          key_contact: {
              first_name: formData?.first_name,
              last_name: formData?.last_name,
              email:formData?.email,
              phone_number:`${dialCode}${parseInt(String(formData?.phone_number))}`,
              address:formData?.address,
              country:formData?.countryISO
          }
        }).then((response)=>{
          setLoading(false);
          if(response.status)
          {
            setListOfParners([...listOfPartners,response.data])
          }
        })
    }
    const GetPartners = ()=>{
      GetRequest("internal/organizations",{}).then((response)=>{
        if(response.status)
        {
          setListOfParners(response.data);
        }
      })
    }
    const GetCategories = ()=>{
      GetRequest("organizations-categories",{}).then((response)=>{
        if(response.status)
        {
          setCategoriesList(response.data.map((a:any,i:number)=>{
            return {
              id:a.id,
              label:a.name,
              value:a.description
            }
          }));
        }
      })
    }
    useEffect(()=>{
      GetCategories();
      GetPartners();
     },[])
    return <Fragment>
    <Seo title={"Add New Partner"} />
    <Pageheader currentpage="Add New Partner" activepage="Add New Partner" mainpage="Dashboard" />
    <div className="grid grid-cols-12 gap-6">
     <div className="col-span-8">
          <div className="box">
            <div className="box-header">
              <h5 className="box-title">Create a new Partner</h5>
            </div>
            <div className="box-body">
              <form className="ti-validation"
               onSubmit={handleForm} 
               > 
              <div className="my-5">
                  <div className="space-y-2">
                    <label className="ti-form-label dark:text-defaulttextcolor/70 mb-0">Organization Name</label>
                    <input type="text" className="my-auto ti-form-input  rounded-sm" placeholder="Name of organization"
                    onChange={({target})=>{
                      changeHandler({name:target.name,value:target.value})
                    }}
                    name='organization_name'
                    required />
                  </div>
                </div>
                <div className="my-5">
                  <div className="space-y-2">
                 <label className="ti-form-label dark:text-defaulttextcolor/70 mb-0">Organization category</label>
                 <Select classNamePrefix='Select2'
                 onChange={(d:any)=>{
                  changeHandler({name:"organization_category_id",value:d.id})
                 }}
                 id='partner-category' 
                 options={categoriesList} 
                 placeholder='Select an item' 
                 name='organization_category_id'
                 />
              </div>
                </div>
                <div className="my-5">
                  <div className="space-y-2">
                    <label className="ti-form-label dark:text-defaulttextcolor/70 mb-0">Address</label>
                    <input
                    onChange={({target})=>{
                      changeHandler({name:target.name,value:target.value})
                    }}
                    type="text" className="my-auto ti-form-input  rounded-sm" placeholder="Address" required
                    name='address'
                    />
                  </div>
                </div>
                <div className="my-5">
                  <div className="space-y-2">
                 <label className="ti-form-label dark:text-defaulttextcolor/70 mb-0">Country{formData?.country?` (${formData.country})`:""}</label>
                 <Select 
                 classNamePrefix='Select2'
                 onChange={(d:any)=>{
                  changeHandler({name:"countryISO",value:d.value});
                  setDialCode(d.id);
                 }}
                 id='partner-country' 
                 options={CountryList} 
                 placeholder='Select a country' 
                  name='country'
                 />
              </div>
                </div>
                <div className="grid lg:grid-cols-2 gap-6 my-5">
                <div className="space-y-2">
                    <label className="ti-form-label dark:text-defaulttextcolor/70 mb-0">City</label>
                    <input
                    onChange={({target})=>{
                      changeHandler({name:target.name,value:target.value})
                    }}
                    type="text" className="my-auto ti-form-input  rounded-sm " placeholder="Select a city" required 
                     name='city'
                    />
                  </div> 
                  <div className="space-y-2">
                    <label className="ti-form-label dark:text-defaulttextcolor/70 mb-0">State</label>
                    <input
                    onChange={({target})=>{
                      changeHandler({name:target.name,value:target.value})
                    }}
                    type="text" className="my-auto ti-form-input  rounded-sm " placeholder="Select a state" required 
                     name='state'
                    />
                  </div>  
                  <div className="space-y-2">
                    <label className="ti-form-label dark:text-defaulttextcolor/70 mb-0">First Name</label>
                    <input
                    onChange={({target})=>{
                      changeHandler({name:target.name,value:target.value})
                    }}
                    type="text" className="my-auto ti-form-input  rounded-sm " placeholder="Firstname" required 
                     name='first_name'
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="ti-form-label dark:text-defaulttextcolor/70 mb-0">Last Name</label>
                    <input
                    onChange={({target})=>{
                      changeHandler({name:target.name,value:target.value})
                    }}
                    type="text" className="my-auto ti-form-input  rounded-sm " placeholder="Lastname" required
                    name='last_name'
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="ti-form-label dark:text-defaulttextcolor/70 mb-0">Phone Number</label>
                    <input
                    maxLength={11}
                    minLength={11}
                    onChange={({target})=>{
                      changeHandler({name:target.name,value:target.value})
                    }}
                    type="tel" 
                    className="my-auto ti-form-input  rounded-sm " placeholder="+91 123-456-789" required
                    name='phone_number'
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="ti-form-label dark:text-defaulttextcolor/70 mb-0">Email Address</label>
                    <input
                    onChange={({target})=>{
                      changeHandler({name:target.name,value:target.value})
                    }}
                    type="email" className="my-auto ti-form-input  rounded-sm" placeholder="your@site.com" required 
                    name='email'
                    />
                  </div>
                </div>
                <div className='d-flex align-items-center justify-items-end'>
                <BaseButton 
                type="submit" 
                title='Submit'
                loading={loading}
                />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-span-4">
          <div className="box">
            <div className="box-header">
              <h5 className="box-title">Recently added Partners</h5>
            </div>
            <div className="box-body">
            <table className="table min-w-full whitespace-nowrap table-hover border table-bordered">
            {listOfPartners.map((item,index) => (
                <tr className="border border-inherit border-solid hover:bg-gray-100 dark:border-defaultborder/10 dark:hover:bg-light" key={Math.random()}>
                  <td>
                    <div className="flex items-center font-semibold">
                      {/* <span className="!me-2 inline-flex justify-center items-center">
                        <img src={item.src} alt="img"
                          className="w-[1.75rem] h-[1.75rem] leading-[1.75rem] text-[0.65rem]  rounded-full" />
                      </span> */}
                      {item.organization_name}
                    </div>
                  </td>
                  <td>
                    <div className="flex flex-row items-center !gap-2 text-[0.9375rem]">
                    <button 
                      onClick={()=>{ }}
                      aria-label="anchor"
                        className="btn ti-btn ti-btn-icon ti-btn-wave !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-success/10 text-success hover:bg-success hover:text-white hover:border-success">
                          <EyeOpenIcon 
                          size={50}
                          />
                          </button>
                      <Link aria-label="anchor" href={`${ROUTES.totalPartners}/${item.organization_id}`}
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
    </Fragment>
    }
NewPartnersPage.layout = "Contentlayout";
export default NewPartnersPage;

