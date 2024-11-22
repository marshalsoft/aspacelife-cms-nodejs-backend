import { GetRequest, PostRequest } from "@/pages/api/request";
import { ROUTES } from "@/shared/constants";
import { Dealsstatistics } from "@/shared/data/dashboards/crmdata";
import moment from "moment";
import Link from "next/link";
import { useEffect, useState } from "react";
export interface UsersProp {
  id?:string;
  full_name?:string;
  email?:string;
  phone_number?:string;
  account_status?:string;
  country?:string;
  distress_count?:number;
  created_at?:string;
  updated_at?:string;
  organization_id?:string;
}
const UsersTable = ()=>{
  const [listOfUsers ,setListOfUsers] = useState<UsersProp[]>([]);
const GetUsers = ()=>{
  GetRequest("internal/users-management",{}).then((response)=>{
    if(response.status)
    {
      const data:string[]  = Object.keys(response.data);
      var users:UsersProp[] = [];
      data.forEach((a:string,i:number)=>{
        const listOfUsers:UsersProp[] = [];
        listOfUsers.forEach((a:UsersProp,i:number)=>{
        // users.pop(a)
        })
      })
      setListOfUsers(users);
    }
  })
}
useEffect(()=>{
  GetUsers();
},[])
    return <div className="xxl:col-span-12 xl:col-span-12 col-span-12">
    <div className="box custom-card">
      <div className="box-header justify-between">
        <div className="box-title">
          Users  
              <Link href={ROUTES.totalUsers} className="text-[0.75rem] px-2 font-normal text-[#8c9097] dark:text-white/50"
                aria-expanded="false">
                View All<i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
              </Link>
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
                <th scope="row" className="!ps-4 !pe-5">
                   SN</th>
                <th scope="col" className="!text-start !text-[0.85rem] min-w-[200px]">Full name</th>
                <th scope="col" className="!text-start !text-[0.85rem]">Email</th>
                <th scope="col" className="!text-start !text-[0.85rem]">Phone number</th>
                <th scope="col" className="!text-start !text-[0.85rem]">Date</th>
                <th scope="col" className="!text-start !text-[0.85rem]">Action</th>
              </tr>
            </thead>
            <tbody>
              {listOfUsers.map((item,index) => (
                <tr className="border border-inherit border-solid hover:bg-gray-100 dark:border-defaultborder/10 dark:hover:bg-light" key={Math.random()}>
                  <th scope="row" className="!ps-4 !pe-5">{index + 1}</th>
                  <td>
                    <div className="flex items-center font-semibold">
                      <span className="!me-2 inline-flex justify-center items-center">
                        <img src={"idx.src"} alt="img"
                          className="w-[1.75rem] h-[1.75rem] leading-[1.75rem] text-[0.65rem]  rounded-full" />
                      </span>{"idx."}
                    </div>
                  </td>
                  <td>{item.full_name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone_number}</td>
                  <td>
                    <span
                      className={`inline-flex text-${"idx.color"} !py-[0.15rem] !px-[0.45rem] rounded-sm !font-semibold !text-[0.75em] bg-${"idx.color"}/10`}>{"idx.location"}</span>
                  </td>
                  <td>{moment(item.created_at).format("Do, MMM YYYY")}</td>
                  <td>
                    <div className="flex flex-row items-center !gap-2 text-[0.9375rem]">
                      <Link aria-label="anchor" href="#!"
                        className="ti-btn ti-btn-icon ti-btn-wave !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-success/10 text-success hover:bg-success hover:text-white hover:border-success"><i
                          className="ri-download-2-line"></i></Link>
                      <Link aria-label="anchor" href="#!"
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
}
export default UsersTable;