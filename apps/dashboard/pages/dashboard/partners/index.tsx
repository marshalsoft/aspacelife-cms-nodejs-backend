import Seo from '@/shared/layout-components/seo/seo';
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Showcode from '@/shared/layout-components/showcode/showcode';
import React, { Fragment, ReactFragment, useEffect, useState } from 'react'
import Link from 'next/link';
import { tabledata1, tabledata10, tabledata11, tabledata12, tabledata13, tabledata14, tabledata15, tabledata16, tabledata17, tabledata18, tabledata19, tabledata2, tabledata20, tabledata21, tabledata22, tabledata23, tabledata24, tabledata25, tabledata26, tabledata27, tabledata28, tabledata29, tabledata3, tabledata30, tabledata31, tabledata32, tabledata4, tabledata5, tabledata6, tabledata7, tabledata8, tabledata9 } from '@/shared/data/prism/tables-prism'
import { Dealsstatistics } from '@/shared/data/dashboards/crmdata';
import { EyeOpenIcon } from '../components/icons/eye';
import { BaseModal } from '@/pages/components/baseModal';
import { ROUTES } from '@/shared/constants';
import { PartnersProp } from '../components/totalPartner';
import { GetRequest, PostRequest } from '@/pages/api/request';
import moment from 'moment';
export interface UserProp {
id:string;
src?:string;
name?:string;
email?:string;
color?:string;
phoneNumber?:string;
class?:string;
text?:string;
class1?:string;
color1?:string;
createdAt?:string;
role?:string;
checked?:boolean;
}
const PartnersPage = ()=>{
  const [showDetails,setShowDetails] = useState<PartnersProp | null>(null)
  const [listOfPartners,setListOfParners] = useState<PartnersProp[]>([]);
  const GetPartners = ()=>{
    GetRequest("internal/organizations",{}).then((response)=>{
      if(response.status)
      {
        setListOfParners(response.data);
      }
    })
  }
  useEffect(()=>{
    GetPartners();
   },[])
   return <Fragment>
    <Seo title={"Partners"} />
    <Pageheader currentpage="Partners" activepage="Partners" mainpage="Dashboard" />
    <div className="xxl:col-span-12 xl:col-span-12 col-span-12">
    <div className="box custom-card">
      <div className="box-header justify-between">
        <div className="box-title">
        Organizations
        </div>
        <div className="flex flex-wrap gap-2">
          <div>
            <input className="ti-form-control form-control-sm" type="text" placeholder="Search Here"
              aria-label=".form-control-sm example" />
          </div>
          <div className="hs-dropdown ti-dropdown">
            <Link href="#!"
              className="ti-btn ti-btn-primary !bg-primary !text-white !py-1 !px-2 !text-[0.75rem] !m-0 !gap-0 !font-medium"
              aria-expanded="false">
              Sort By<i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
            </Link>
            <ul className="hs-dropdown-menu ti-dropdown-menu !-mt-2 hidden" role="menu">
              <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                href="#!">New</Link></li>
              <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                href="#!">Popular</Link></li>
              <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                href="#!">Relevant</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="box-body">
        <div className="overflow-x-auto">
          <table className="table min-w-full whitespace-nowrap table-hover border table-bordered">
            <thead>
              <tr className="border border-inherit border-solid dark:border-defaultborder/10">
                {/* <th scope="row" className="!ps-4 !pe-5"><input className="form-check-input" 
                onChange={({target})=>{
                  const value = target.value;
                  console.log(value);
                }}
                type="checkbox"
                  id="checkboxNoLabel1" value="" aria-label="..." /></th> */}
                <th scope="col" className="!text-start !text-[0.85rem] min-w-[200px]">Business name</th>
                <th scope="col" className="!text-start !text-[0.85rem]">Business email</th>
                <th scope="col" className="!text-start !text-[0.85rem]">Phone number</th>
                <th scope="col" className="!text-start !text-[0.85rem]">Sign up Date</th>
                <th scope="col" className="!text-start !text-[0.85rem]">Action</th>
              </tr>
            </thead>
            <tbody>
              {listOfPartners.map((item,index) => (
                <tr className="border border-inherit border-solid hover:bg-gray-100 dark:border-defaultborder/10 dark:hover:bg-light" key={Math.random()}>
                  {/* <th scope="row" className="!ps-4 !pe-5">
                    <input className="form-check-input" type="checkbox" defaultChecked={true}
                     value="" aria-label="..." /></th> */}
                  <td>
                    <div className="flex items-center font-semibold">
                      <span className="!me-2 inline-flex justify-center items-center">
                        {/* <img src={item.avatar} alt="cmp_logo"
                          className="w-[1.75rem] h-[1.75rem] leading-[1.75rem] text-[0.65rem]  rounded-full" /> */}
                      </span>{item.organization_name}
                    </div>
                  </td>
                  <td>{item.key_contact?.email}</td>
                  <td>{item.key_contact?.phone_number}</td>
                  <td>{moment(item.created_at).format("Do, MMM YYYY")}</td>
                  <td>
                    <div className="flex flex-row items-center !gap-2 text-[0.9375rem]">
                      <button 
                      onClick={()=>setShowDetails(item)}
                      aria-label="anchor"
                        className="btn ti-btn ti-btn-icon ti-btn-wave !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-success/10 text-success hover:bg-success hover:text-white hover:border-success">
                          <EyeOpenIcon 
                          size={50}
                          />
                          </button>
                      <Link aria-label="anchor" href={`${ROUTES.totalPartners}/${item.organization_id}`}
                        className="ti-btn ti-btn-icon ti-btn-wave !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-primary/10 text-primary hover:bg-primary hover:text-white hover:border-primary"><i
                          className="ri-edit-line"></i></Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="box-footer">
        <div className="sm:flex items-center">
          <div className="text-defaulttextcolor dark:text-defaulttextcolor/70">
            Showing 5 Entries <i className="bi bi-arrow-right ms-2 font-semibold"></i>
          </div>
          <div className="ms-auto">
            <nav aria-label="Page navigation" className="pagination-style-4">
              <ul className="ti-pagination mb-0">
                <li className="page-item disabled">
                  <Link className="page-link" href="#!">
                    Prev
                  </Link>
                </li>
                <li className="page-item"><Link className="page-link active" href="#!">1</Link></li>
                <li className="page-item"><Link className="page-link" href="#!">2</Link></li>
                <li className="page-item">
                  <Link className="page-link !text-primary" href="#!">
                    next
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
  {showDetails?<BaseModal 
  title='Partner Details'
  onClose={()=>{
  setShowDetails(null)
  }}
  onOk={()=>{

  }}
  >
  <p>Details</p>
  </BaseModal>:null}
    </Fragment>
    }
PartnersPage.layout = "Contentlayout";
export default PartnersPage;

