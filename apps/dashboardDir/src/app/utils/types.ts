/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";

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