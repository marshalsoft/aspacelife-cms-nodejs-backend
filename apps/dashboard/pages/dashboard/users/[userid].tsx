import Pageheader from "@/shared/layout-components/page-header/pageheader"
import Seo from "@/shared/layout-components/seo/seo"
import { useRouter } from "next/router"
import { Fragment } from "react"

const UserDetialsPage = ()=>{
  const {query} = useRouter();
    return <Fragment>
    <Seo title={"User Details"} />
    <Pageheader currentpage="User Details" activepage="User Details" mainpage="Users" />
    <div >
  User {query?.userid}
  </div>
  </Fragment>
}
UserDetialsPage.layout = "Contentlayout";
export default UserDetialsPage;