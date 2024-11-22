
import { Customers, Deals, Dealsstatistics, Earned, Ratio, Revenue, Revenueanalytics, Sourcedata, Target } from '@/shared/data/dashboards/crmdata';
import Seo from '@/shared/layout-components/seo/seo';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { Fragment, useState } from 'react'
import { FilterSectionComponent } from './components/filterSection';
import TotalRevenues from './components/totalRevenue';
import PartnerCategories from './components/partnerCategories';
import TotalPartners from './components/totalPartner';
import TotalCustomers from './components/totalCustomers';
import TotalDispute from './components/totalDispute';
import RevenueAnalytics from './components/revenueAnalytics';
import UsersTable from './components/userTable';

const DashboardPage = () => {
  let navigate = useRouter();
  
  return (
    <Fragment>
      <Seo title={"Dashboard"} />
     <FilterSectionComponent />
      <div className="grid grid-cols-12 gap-x-6">
        <div className="xxl:col-span-8 xl:col-span-8  col-span-12">
        <div className="grid grid-cols-12 gap-x-6"> 
              <TotalPartners />
              <TotalRevenues />
              <TotalCustomers /> 
              <TotalDispute />
        </div>
        <UsersTable />
        </div>
        <div className="xxl:col-span-4 xl:col-span-4 col-span-12">
            <PartnerCategories />
        </div>
      </div>
    </Fragment>
  )
}

DashboardPage.layout = "Contentlayout";
export default DashboardPage;