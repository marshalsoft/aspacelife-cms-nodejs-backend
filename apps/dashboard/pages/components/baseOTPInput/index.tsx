import { useState } from 'react';
import OtpInput from 'react18-input-otp';
interface BaseOTPInputProp {
    required?:boolean;
    type?:"text" | "number";
    name?:string;
    max:number; 
    id:string; 
    onChange:(e:string)=>void;
    value:string;
}
const BaseOTPInput = (props:BaseOTPInputProp)=>{
    return <OtpInput
    value={props.value}
    onChange={props.onChange}
    numInputs={4}
    inputStyle={{
        display: "block",
        width: "100%",
        paddingVertical: 15,
        paddingHorizontal: 0.75,
        fontSize: 16,
        fontWeight: "bold",
        height: 40,
        color: "#212529",
        backgroundColor: "#fff",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#ced4da",
        borderRadius: 8,
        transition: "border-color .15s ease-in-out",
        boxShadow: ".15s ease-in-out"
      }}
    separator={<span className='px-2'>-</span>}
  />
}
export default BaseOTPInput;