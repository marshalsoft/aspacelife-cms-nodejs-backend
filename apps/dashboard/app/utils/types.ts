/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";
import { ToastPosition } from "react-hot-toast";

export interface GlobalStateProps {
    children:ReactNode;
}
export interface ReducerActions {
    type:ReducerActionType;
    payload:any;
}
export type ReducerActionType  = "UPDATE_USER" | "TOGGLE_THEME";
export type Theme  = "light" | "dark";

export interface User {
    firstName?:string;
    lastName?:string;
    email?:string;
    password?:string;
    phoneNumber?:string;
    createAt?:string;
}
export interface InitialStateProps {
    user:User;
    theme:Theme;
}

export interface FormDataProps {
    name:string;
    value:string;
}
export type MethodSchema = "POST"|"GET"|"DELETE"|"UPDATE";

export interface APIResponse {
    status?:boolean;
    message?:string;
    data?:any;
    statusText?:string
}
export interface ToastProps {
    status:boolean;
    message:string;
    position:ToastPosition;
}
export interface NavbarProps {
navList:NavListProps[]
}
export interface NavListProps {
    route:string;
    title:string;
}
export interface MenuListProps {
    route:string;
    title:string;
    icon:ReactNode;
}