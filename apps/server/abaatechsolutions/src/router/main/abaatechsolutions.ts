import {Express}  from "express";
import HeaderSectionRoute from "../header";
import ContactUsSectionRoute from "../about-us";
import BlogSectionRoute from "../blog";
import BoardMembersSectionRoute from "../board";
import BodySectionRoute from "../body";
import CarrerSectionRoute from "../carreer";
import AboutUsSectionRoute from "../about-us";
import NewsLetterRoute from "../newsletter";
import FooterSectionRoute from "../footer";
import ProductRoute from "../products";
import NewsRoute from "../news";
export const AbaaTechSolutionsRouter = (app:Express)=>{
// header
HeaderSectionRoute(app);
// about us
AboutUsSectionRoute(app);
// contact us
ContactUsSectionRoute(app);
// blog
BlogSectionRoute(app);
// board members
BoardMembersSectionRoute(app);
// body
BodySectionRoute(app);
// products
BodySectionRoute(app);
// carrer
ProductRoute(app);
// newsletter
NewsLetterRoute(app);
// news
NewsRoute(app);
// footer
FooterSectionRoute(app);
}