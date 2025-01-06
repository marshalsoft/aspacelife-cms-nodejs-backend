import ExclamationIcon from "@/app/assets/icons/exclamationIcon";
import { EyeCloseIcon } from "@/app/assets/icons/eyeIcons";
import { HTMLInputTypeAttribute, ReactNode, useEffect, useState } from "react";

interface BaseInputProps {
    trailingIcon?:ReactNode;
    leadingIcon?:ReactNode;
    value:string;
    name:string;
    placeHolder?:string;
    error?:string;
    pattern?:RegExp;
    max:number;
    required?:boolean;
    onValue:(target:{name:string;value:string;})=>void;
    type:HTMLInputTypeAttribute | undefined;
}
const BaseInput = (props:BaseInputProps)=>{
    const [active,setActive] = useState(false);
    const [toggleEye,setToggleEye] = useState(false);
    const [error,setError] = useState(false)
    const handleChange = ({name,value}:{name:string,value:string})=>{
        setError(false)
        props.onValue({name,value});
    }
    const handleFocus = ()=>{
        setActive(true);
    }
    const handleBlur = ()=>{
     setActive(false);
    }
    useEffect(()=>{
        if(error)
        {
         props.onValue({name:props.name,value:""})
        }
    },[error, props])
    useEffect(()=>{
        if(props.value && props.pattern)
        {
         if(!props.pattern.test(props.value))
         {
            setError(true)
            props.onValue({name:props.name,value:""})  
         }
        }
    },[props,error])
    return <div className="mb-5">
    <div className={`input-wrapper ${active && "input-wrapper-active"}`}>
        {props.leadingIcon && <div className="px-3">{props.leadingIcon}</div> }
        <input
        required={props.required}
        name={props.name}
        type={!toggleEye?"text":"password"}
        placeholder={props.placeHolder?props.placeHolder:"Enter text here..."}
        value={props.value}
        onChange={({target})=>{
          handleChange(target);
        }}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onInvalid={(e)=>{
           setError(true)
           return (e.target as HTMLInputElement).setCustomValidity(props.error!)
        }}
        onInput={(e)=>{
         return (e.target as HTMLInputElement).setCustomValidity("")
         }}
        />
        {props.type === "password"?<button
        className="p-2"
        onClick={()=>setToggleEye(!toggleEye)}
        >
       {toggleEye?<EyeCloseIcon />:<EyeCloseIcon />}
     </button>:props.trailingIcon}
    </div>
    {error && props.error?<div className="flex items-center justify-start gap-2 my-1">
    <ExclamationIcon />
    <div className="text-[#FA0006] text-[12px] rubik-normal">{props.error}</div>
    </div>:null}
    </div>
}
export default BaseInput;