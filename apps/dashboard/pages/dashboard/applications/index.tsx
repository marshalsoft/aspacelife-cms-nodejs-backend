import Seo from '@/shared/layout-components/seo/seo';
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Showcode from '@/shared/layout-components/showcode/showcode';
import React, { Fragment, useEffect, useState } from 'react'
import Link from 'next/link';
import { tabledata1, tabledata10, tabledata11, tabledata12, tabledata13, tabledata14, tabledata15, tabledata16, tabledata17, tabledata18, tabledata19, tabledata2, tabledata20, tabledata21, tabledata22, tabledata23, tabledata24, tabledata25, tabledata26, tabledata27, tabledata28, tabledata29, tabledata3, tabledata30, tabledata31, tabledata32, tabledata4, tabledata5, tabledata6, tabledata7, tabledata8, tabledata9 } from '@/shared/data/prism/tables-prism'
import { Dealsstatistics } from '@/shared/data/dashboards/crmdata';
import { ROUTES } from '@/shared/constants';
import { GetRequest } from '@/pages/api/request';
import { UsersProp } from '../components/userTable';
interface UserProp {
id:number;
src:string;
name:string;
email:string;
color:string;
phoneNumber:string;
class:string;
text:string;
class1:string;
color1:string;
createdAt:string;
}
const UsersPage = ()=>{
  const [listOfUsers ,setListOfUsers] = useState<UsersProp[]>([]);
  const GetUsers = ()=>{
    GetRequest("internal/users-management",{}).then((response)=>{
      if(response.status)
      {
        // setListOfUsers(response.data);
      }
    })
  }
  useEffect(()=>{
    GetUsers();
  },[])
    return <Fragment>
    <Seo title={"Applications"} />
    <Pageheader currentpage="Job Applications" activepage="Applications" mainpage="Dashboard" />
    <div className="xxl:col-span-12 xl:col-span-12 col-span-12">
    <div className="box custom-card">
      <div className="box-header justify-between">
        <div className="box-title">
        Applications
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
                href="#!">Approved</Link></li>
              <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                href="#!">Rejected</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="box-body">
        <div className="overflow-x-auto">
          <table className="table min-w-full whitespace-nowrap table-hover border table-bordered">
            <thead>
              <tr className="border border-inherit border-solid dark:border-defaultborder/10">
                <th scope="col" className="!text-start !text-[0.85rem] min-w-[200px]">Full name</th>
                <th scope="col" className="!text-start !text-[0.85rem]">Role</th>
                <th scope="col" className="!text-start !text-[0.85rem]">Mail</th>
                <th scope="col" className="!text-start !text-[0.85rem]">Phone number</th>
                <th scope="col" className="!text-start !text-[0.85rem]">Resume</th>
                <th scope="col" className="!text-start !text-[0.85rem]">Date</th>
                <th scope="col" className="!text-start !text-[0.85rem]">Action</th>
              </tr>
            </thead>
            <tbody>
              {listOfUsers.map((item,index) => (
                <tr className="border border-inherit border-solid hover:bg-gray-100 dark:border-defaultborder/10 dark:hover:bg-light" key={Math.random()}>
                  <td>
                    <div className="flex items-center font-semibold">
                      <span className="!me-2 inline-flex justify-center items-center">
                        <img src={"idx.src"} alt="img"
                          className="w-[1.75rem] h-[1.75rem] leading-[1.75rem] text-[0.65rem]  rounded-full" />
                      </span>{""}
                    </div>
                  </td>
                  <td>{"idx.role"}</td>
                  <td>{"idx.mail"}</td>
                  <td>{"idx.mail"}</td>
                  <td>
                    <span
                      className={`inline-flex text-${"idx.color"} !py-[0.15rem] !px-[0.45rem] rounded-sm !font-semibold !text-[0.75em] bg-${"idx.color"}/10`}>{"idx.location"}</span>
                  </td>
                  <td>{"idx.date"}</td>
                  <td>
                    <div className="flex flex-row items-center !gap-2 text-[0.9375rem]">
                      <Link aria-label="anchor" href="#!"
                        className="ti-btn ti-btn-icon ti-btn-wave !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-success/10 text-success hover:bg-success hover:text-white hover:border-success"><i
                          className="ri-download-2-line"></i></Link>
                      <Link aria-label="anchor" href={ROUTES.totalUsers+"/"+index}
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
    </Fragment>
    }
    UsersPage.layout = "Contentlayout";
    export default UsersPage;