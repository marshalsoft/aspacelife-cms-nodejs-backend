/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import BaseOTPInput from "../../baseOTPInput";
import BaseButton from "../../baseButton.tsx";
import { LoginWithOTP } from "@/app/api/login/route";

interface OTPSectionProps {
    goBack:()=>void;
}
const OTPSection = (props:OTPSectionProps)=>{
const [otp,setOtp] = useState<string>("");
const [loading,setLoading] = useState<boolean>(false);
const [start,setStart] = useState<boolean>(true);
const [counter,setCounter] = useState<number>(50);
const handleSubmit = ()=>{
    setLoading(true);
    LoginWithOTP(otp).then((res)=>{
    setLoading(false);  
    })
}
useEffect(()=>{
   const inv = setInterval(()=>{
    setCounter((counter)=>{
        if(counter <= 0)
        {
          clearInterval(inv) 
          return 0 
        }
        return counter - 1
    })
   },1000) 
   setStart(false);
return ()=>{
    clearInterval(inv);
}
},[start]);
const ResendCode = ()=>{
    if(counter == 0)
    {
     setCounter(50)
     setTimeout(()=>{
     setStart(start);
    },500) 
    }
}
return <div 
>
    <BaseOTPInput
    number={6}
    onValue={(otp)=>{
        setOtp(otp)
    }}
    value={otp}
    /> 
    <BaseButton 
   loading={loading}
   type="submit"
   text="Sign In"
   disabled={otp.length !== 6}
   onClick={handleSubmit}
   />
   <div className="mt-6 flex align-middle justify-center" >
    <button 
    onClick={ResendCode}
    className="text-center text-purple-700">
        {counter !== 0?"Please wait...":"Resend Code"} {counter}
    </button>
   </div>
</div>
}
export default OTPSection;

