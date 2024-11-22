import {Express}  from "express";
import LoginRoute from "../user/login";
import { RegistrationRoute } from "../user/register";
import { GetUsersRoute } from "../user/getUsers";
export const DashboardRouter = (app:Express)=>{
// login
LoginRoute(app);
// registration
RegistrationRoute(app);
// get all users
GetUsersRoute(app);
}