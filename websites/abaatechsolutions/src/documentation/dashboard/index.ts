import swaggerJSDoc from "swagger-jsdoc";
import { Express, Request, Response } from "express";
import { version } from "../../../package.json";
import swaggerUI from "swagger-ui-express";
import {LoginDocucment,RegisterDocucment,UpdateUsersDocucment,ForgotPasswordDocucment,ForgotPasswordVerifyTokenDocucment, ChangePasswordDocucment, GetAllUsersDocucment} from "../../router/user/doc";
import {ProductListingDocucment,ProductUpdateDocucment} from "../../router/products/doc";
import {NewsLetterDocucment, NewsLetterSubscribeDocucment,
  NewsLetterUnSubscribeDocucment} from "../../router/newsletter/doc";
import {HeaderDocucment,UpdateHeaderDocucment} from "../../router/header/doc";
import { BodyDocucment, UpdateBodyDocucment } from "../../router/body/doc";
import { ContactUsDocucment, UpdateContactUsDocucment } from "../../router/contactUs/doc";
import { CarreerDocucment, SubmitCarrerDocucment } from "../../router/carreer/doc";
import { BlogDocucment, PostBlogDocucment } from "../../router/blog/doc";
import { BoardDocucment, CreatNewBoardMemberDocucment, UpdateBoardMemberDocucment } from "../../router/board/doc";
import { AboutUsDocucment, UpdateAboutUsDocucment } from "../../router/about-us/doc";
import { MissionDocucment, UpdateMissionDocucment, UpdateVisonDocucment, VisionDocucment } from "../../router/vision_mission/doc";
let swaggerSpec: any = {
  swagger: "2.0",
  info: {
    title: "AbaaTech Dashboard API Docs",
    version,
    description: "This is api of AbaaTech, you can use the api key `bearer` to authenticate your access via the header.",
    contact: {
      email: "marshallekene@hotmail.com"
    },
    license: []
  },
  host: `localhost:3002/v${version}`,
  basePath: "/",
  schemes: [
    "http",
    "https"
  ],
  consumes: [
    "application/json",
    "multipart/form-data"
  ],
  produces: [
    "application/json"
  ],
  securityDefinitions: {
    Bearer: {
      name: "Authorization",
      in: "header",
      type: "apiKey",
      description: "Bearer token for authorization"
    }
  },
  security: [
    {
      Bearer: [],
    }],
  tags: {
    User: {
      name: "User",
      description: "Every endpoint for User"
    }
  },
};

const SwaggerDashboardDoc = (app: Express, port: number) => {
  app.use(`/v${version}/dashboard/docs`, swaggerUI.serve, swaggerUI.setup(Object.assign(swaggerSpec,{"paths":Object.assign(
    LoginDocucment,
    GetAllUsersDocucment,
    UpdateUsersDocucment,
    ProductListingDocucment,
    ProductUpdateDocucment,
    NewsLetterDocucment,
    HeaderDocucment,
    RegisterDocucment,
    NewsLetterDocucment,
    NewsLetterSubscribeDocucment,
    NewsLetterUnSubscribeDocucment,
    ForgotPasswordDocucment,
    ForgotPasswordVerifyTokenDocucment,
    ChangePasswordDocucment,
    HeaderDocucment,
    UpdateHeaderDocucment,
    BodyDocucment,
    UpdateBodyDocucment,
    ContactUsDocucment,
    UpdateContactUsDocucment,
    CarreerDocucment,
    SubmitCarrerDocucment,
    BlogDocucment,
    PostBlogDocucment,
    BoardDocucment,
    UpdateBoardMemberDocucment,
    CreatNewBoardMemberDocucment,
    AboutUsDocucment,
    UpdateAboutUsDocucment,
    VisionDocucment,
    UpdateVisonDocucment,
    MissionDocucment,
    UpdateMissionDocucment
  )})));
  app.get(`/v${version}/dashboard/docs-json`, (req: Request, res: Response) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
  
  console.log(`http://localhost:${port}/v${version}/ http://localhost:${port}/v${version}/dashboard/docs customer micro-service `);
}
export default SwaggerDashboardDoc;