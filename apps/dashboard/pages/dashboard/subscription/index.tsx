import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import React, { Fragment } from "react";

const SubscriptionPage = ()=>{
    return <Fragment>
      <Seo title={"Subscriptions"} />
      <Pageheader currentpage="Subscriptions" activepage="Subscriptions" mainpage="Dashboard" />
       <div >
        Subscription Page
        </div> 
    </Fragment>
    }
SubscriptionPage.layout = "Contentlayout";
export default SubscriptionPage;