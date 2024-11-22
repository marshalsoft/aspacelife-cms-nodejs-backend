import { ROUTES } from "@/shared/constants";
import { Ratio } from "@/shared/data/dashboards/crmdata";
import Link from "next/link";

const TotalCustomers = ()=>{
    return <div className="xxl:col-span-6 xl:col-span-6 col-span-12">
    <div className="box overflow-hidden">
      <div className="box-body">
        <div className="flex items-top justify-between">
          <div>
            <span
              className="!text-[0.8rem]  !w-[2.5rem] !h-[2.5rem] !leading-[2.5rem] !rounded-full inline-flex items-center justify-center bg-success">
              <i className="ti ti-wave-square text-[1rem] text-white"></i>
            </span>
          </div>
          <div className="flex-grow ms-4">
            <div className="flex items-center justify-between flex-wrap">
              <div>
                <p className="text-[#8c9097] dark:text-white/50 text-[0.813rem] mb-0">Total Customers</p>
                <h4 className="font-semibold text-[1.5rem] !mb-2 ">120</h4>
              </div>
              <div id="crm-conversion-ratio">
                <Ratio />
              </div>
            </div>
            <div className="flex items-center justify-between mt-1">
              <div>
                <Link className="text-success text-[0.813rem]" href={ROUTES.totalUsers}>View All<i
                  className="ti ti-arrow-narrow-right ms-2 font-semibold inline-block"></i></Link>
              </div>
              <div className="text-end">
                <p className="mb-0 text-danger text-[0.813rem] font-semibold">-12%</p>
                <p className="text-[#8c9097] dark:text-white/50 opacity-[0.7] text-[0.6875rem]">this month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}
export default TotalCustomers;