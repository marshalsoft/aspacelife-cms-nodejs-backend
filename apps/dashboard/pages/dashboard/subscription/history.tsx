import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import React, { Fragment } from "react";

const SubscriptionHistoryPage = ()=>{
    return <Fragment>
      <Seo title={"Subscription history"} />
      <Pageheader 
      currentpage="Subscription history" activepage="Subscription history" mainpage="Subscriptions" />
      
       <div >
        Subscription history
        </div> 
    </Fragment>
    }
SubscriptionHistoryPage.layout = "Contentlayout";
export default SubscriptionHistoryPage;