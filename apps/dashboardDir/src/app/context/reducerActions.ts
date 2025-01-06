'use client';
import { InitialStateProps, ReducerActions } from "../utils/types";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const setUser = (user:any) => {
    return {
      type: 'SET_USER',
      payload: user,
    };
  };
  
  
  const initialState:InitialStateProps = Object.assign({
    user:{
       firstName:"",
       lastName:"",
       email:"",
       phoneNumber:"",
       createAt:""
    },
    theme:"light"
  });
  
  export const userReducer = (state = initialState, action:ReducerActions) => {
    switch (action.type) {
      case 'UPDATE_USER':
        return { ...state, user: action.payload };
      default:
        return state;
    }
  };
  