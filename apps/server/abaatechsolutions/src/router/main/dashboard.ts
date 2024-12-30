import {Express}  from "express";
import LoginRoute from "../user/login";
import { RegistrationRoute } from "../user/register";
import { GetUsersRoute } from "../user/getUsers";
import LoginWithOTPRoute from "../user/loginWithOTP";
import VerifyOTPRoute from "../user/verifyOTP";
export const DashboardRouter = (app:Express)=>{
// login
LoginRoute(app);
// login with OTP
LoginWithOTPRoute(app);
// verify OTP
VerifyOTPRoute(app);
// registration
RegistrationRoute(app);
// get all users
GetUsersRoute(app);
}