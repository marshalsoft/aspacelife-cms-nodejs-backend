import Seo from '@/shared/layout-components/seo/seo';
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Showcode from '@/shared/layout-components/showcode/showcode';
import React, { Fragment, ReactFragment, useState } from 'react'
import Link from 'next/link';
import { tabledata1, tabledata10, tabledata11, tabledata12, tabledata13, tabledata14, tabledata15, tabledata16, tabledata17, tabledata18, tabledata19, tabledata2, tabledata20, tabledata21, tabledata22, tabledata23, tabledata24, tabledata25, tabledata26, tabledata27, tabledata28, tabledata29, tabledata3, tabledata30, tabledata31, tabledata32, tabledata4, tabledata5, tabledata6, tabledata7, tabledata8, tabledata9 } from '@/shared/data/prism/tables-prism'
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
const ManagePartnersPage = ()=>{
    return <Fragment>
    <Seo title={"Manage Partner"} />
    <Pageheader currentpage="Manage Partner" activepage="Manage Partner" mainpage="Dashboard" />
    </Fragment>
    }
ManagePartnersPage.layout = "Contentlayout";
export default ManagePartnersPage;

