import { FormEvent, useState } from "react";
import EnvelopIcon from "../../../assets/icons/envelop";
import BaseInput from "../../baseInput.tsx";
import { FormDataProps } from "@/app/utils/types";
import PadLock from "@/app/assets/icons/padlock";
import BaseButton from "../../baseButton.tsx";
import BrandNames from "../../brandNames";
interface LoginProps {
    email:string;
    password:string;
}
const LeftSection = ()=>{

const [formData,setFormData] = useState<LoginProps>({
    email:"",
    password:""
});

const [loading,setLoading] = useState<boolean>(false);

const handleFormData = ({name,value}:FormDataProps)=>{
    setFormData({
        ...formData,
        [name]:value
    })
    console.log(name,"|",value);
}
const handleSubmit = (e:FormEvent)=>{
    e.preventDefault();
    setLoading(true)
}
return <div className="bg-white p-10 full-height">
<p className="font-bold text-[25px] text-[#484848] text-black text-center fs-lg inter-bold mt-[110px]">Sign in</p>
<p className="font-normal text-[14px] text-[#484848]  text-center inter-normal mb-14">Welcome Back, Please enter your credentials</p>
<div className="asp-card shadow-lg p-6 max-w-sm m-auto bg-white min-h-50 min-w-200 inter" >
  <form 
  onSubmit={handleSubmit}
  >
    <BaseInput
    required
    type="email"
    max={150}
    value={formData.email}
    name="email"
    placeHolder="Email"
    leadingIcon={<EnvelopIcon  />}
    onValue={({name,value})=>{
        handleFormData({name,value});
    }}
    error="Email is required."
    />
    <BaseInput
    required
    max={50}
    type="password"
    value={formData.password}
    name="password"
    placeHolder="Password"
    leadingIcon={<PadLock  />}
    onValue={({name,value})=>{
      handleFormData({name,value});
    }}
    error="Password is required."
    />
   <BaseButton 
   loading={loading}
   type="submit"
   text="Login"
   />
    </form>
</div>
<div 
style={{position:"absolute",bottom:80}}
>
<BrandNames />
</div>
</div>
}
export default LeftSection;