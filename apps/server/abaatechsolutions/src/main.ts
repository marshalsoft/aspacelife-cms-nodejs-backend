// all imports
import http from "http";
import cors from 'cors';
import express, { Express, Request, Response } from "express";
import path from "path";
import bodyParser  from "body-parser";
import cookieParser from "cookie-parser";
import cookieSession from "cookie-session";
import multer from "multer";
import { generateKeyPairSync, randomUUID } from "crypto";
import Moment from "moment";
import dotenv from 'dotenv';
import LoginRoute from "./router/user/login";
import { AppConstants } from "./includes/constants";
import SwaggerAbaaTechSolutionDoc from "./documentation/abaatechsolutions";
import SwaggerDashboardDoc from "./documentation/dashboard";
import { DashboardRouter } from "./router/main/dashboard";
import { AbaaTechSolutionsRouter } from "./router/main/abaatechsolutions";

dotenv.config();
var storage = multer.diskStorage({
  destination: async function (req, file, callback) {
  },
  filename: function (req, file, callback) {
    const ext = path.extname(file.originalname);
    const filename = randomUUID()+"-"+Moment().format("YYYYMMDDhhmmss")+ext;
    callback(null,filename);
  }
});
var uploads = multer({
  limits: { fieldSize: 25 * 1024 * 1024 },
  storage,
  dest:"./uploads",
});
const app: Express = express();
const port = 3002;
const server = http.createServer(app);
let DocumentOptions:any = {};
app.use(cors());
app.disable('x-powered-by');
app.use(cookieSession({
  name: 'session',
  keys: ["x_session"],
  maxAge: 24 * 60 * 60 * 1000 
}));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(uploads.any(),async function (req: Request, res: Response, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', "true");
    var ip = req.headers['x-forwarded-for'] ||
    req.socket.remoteAddress ||
    null;
    req.headers = {...req.headers,platform:String(req.headers['sec-ch-ua-platform']).replace(/["]/g,''),ip:String(ip)}
    next();
});
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('./public'));
DashboardRouter(app);
AbaaTechSolutionsRouter(app);
SwaggerAbaaTechSolutionDoc(app,port);
SwaggerDashboardDoc(app,port);
server.listen(port,()=>{
});




