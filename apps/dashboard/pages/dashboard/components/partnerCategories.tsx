import { ROUTES } from "@/shared/constants";
import { Sourcedata } from "@/shared/data/dashboards/crmdata";
import Link from "next/link"

const PartnerCategories = ()=>{
    return <div className="xxl:col-span-3 xl:col-span-12 col-span-12">
    <div className="grid grid-cols-12 gap-x-6">
      <div className="xxl:col-span-12 xl:col-span-12  col-span-12">
        <div className="box">
          <div className="box-header justify-between">
            <div className="box-title">
              Partners Category
            </div>
          </div>
          <div className="box-body overflow-hidden">
            <div className="leads-source-chart flex items-center justify-center">
              <Sourcedata />
              <div className="lead-source-value ">
                <span className="block text-[0.875rem] ">Total</span>
                <span className="block text-[1.5625rem] font-bold">4,145</span>
              </div>
            </div>
          </div>
          {/* <div className="grid grid-cols-4 border-t border-dashed dark:border-defaultborder/10">
            <div className="col !p-0">
              <div className="!ps-4 p-[0.95rem] text-center border-e border-dashed dark:border-defaultborder/10">
                <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem] mb-1 crm-lead-legend mobile inline-block">Mobile
                </span>
                <div><span className="text-[1rem]  font-semibold">1,624</span>
                </div>
              </div>
            </div>
            <div className="col !p-0">
              <div className="p-[0.95rem] text-center border-e border-dashed dark:border-defaultborder/10">
                <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem] mb-1 crm-lead-legend desktop inline-block">Desktop
                </span>
                <div><span className="text-[1rem]  font-semibold">1,267</span></div>
              </div>
            </div>
            <div className="col !p-0">
              <div className="p-[0.95rem] text-center border-e border-dashed dark:border-defaultborder/10">
                <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem] mb-1 crm-lead-legend laptop inline-block">Laptop
                </span>
                <div><span className="text-[1rem]  font-semibold">1,153</span>
                </div>
              </div>
            </div>
            <div className="col !p-0">
              <div className="!pe-4 p-[0.95rem] text-center">
                <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem] mb-1 crm-lead-legend tablet inline-block">Tablet
                </span>
                <div><span className="text-[1rem]  font-semibold">679</span></div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  </div>
}
export default PartnerCategories;