/* eslint-disable react/jsx-key */
import { BaseCard } from "@/app/components/baseCard";
import { Breadcrumb } from "@/app/components/breadcrum";

const Page = ()=>{
    return (
        <div className="container">
           <Breadcrumb
          title="Email templates"
          cards={[
           <BaseCard >
           <div >
              <div className="font-bold pb-0 text-black text-[16px]" >49,590</div>
              <div className="font-thin text-[#484848] text-[12px]" >All time subscriber</div>
           </div>
           </BaseCard>,
            <BaseCard >
            <div >
               <div className="font-bold pb-0 text-black text-[16px]" >49,590</div>
               <div className="font-thin text-[#484848] text-[12px]" >All time subscriber</div>
            </div>
            </BaseCard>
          ]}
      /> 
      </div>
      );
    }
export default Page;