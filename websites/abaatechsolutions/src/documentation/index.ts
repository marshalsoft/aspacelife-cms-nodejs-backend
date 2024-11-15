import swaggerJSDoc from "swagger-jsdoc";
import { Express, Request, Response } from "express";
import { version } from "../../package.json";
import swaggerUI from "swagger-ui-express";
import {LoginDocucment,RegisterDocucment} from "../router/user/doc";
import ProductsDocucment from "../router/products/doc";
import NewsLetterDocucment from "../router/newsletter/doc";
import HeaderDocucment from "../router/header/doc";
let swaggerSpec: any = {
  swagger: "2.0",
  info: {
    title: "AbaaTech CMS API Docs",
    version,
    description: "This is api of AbaaTech, you can use the api key `bearer` to authenticate your access via the header.",
    contact: {
      email: "marshallekene@hotmail.com"
    },
    license: []
  },
  host: "localhost:3200/v1",
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

const SwaggerDoc = (app: Express, port: number) => {
  app.use(`/v${version}/docs`, swaggerUI.serve, swaggerUI.setup(Object.assign(swaggerSpec,{"paths":Object.assign(
    LoginDocucment,
    ProductsDocucment,
    NewsLetterDocucment,
    HeaderDocucment,
    RegisterDocucment
  )})));
  app.get(`/v${version}/docs-json`, (req: Request, res: Response) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
  console.log(`http://localhost:${port}/v${version}/ http://localhost:${port}/v${version}/docs customer micro-service `);
}
export default SwaggerDoc;