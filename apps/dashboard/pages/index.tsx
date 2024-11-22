
import { basePath } from "@/next.config";
import { LOCALSTORAGE, ROUTES } from "@/shared/constants";
import { auth } from "@/shared/firebase/firebaseapi";
import { User } from "@/shared/types";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment, useEffect, useState } from "react";
import { BaseLoader } from "./components/baseLoader";
import { BaseButton } from "./components/baseButton";
import { BaseError } from "./components/alerts/baseError";
import { PostRequest } from "./api/request";
import BaseOTPInput from "./components/baseOTPInput";


const Firebaselogin = () => {
  useEffect(() => {
    // import("preline");
}, []);

  const [passwordshow, setpasswordshow] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [showTfa, setShowTfa] = useState<boolean>(false);
  const [TfaToken, setTfaToken] = useState<string>("");
  const [err, setError] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    email: "marshalgfx@gmail.com",
    password: "Qwerty!1234"
  });
  const { email, password } = formData;
  const changeHandler = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };
  const HandleLogin = (e:any) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    PostRequest("login",formData).then((response)=>{
    setLoading(false);
    window.location.href = ROUTES.dashboard;
    if(response.status)
    {
      setError("");
          const user:User = response.data as User;
          localStorage.setItem(LOCALSTORAGE.authToken,response.data.accessToken);
          localStorage.setItem(LOCALSTORAGE.userDetails,JSON.stringify(user))
          if(user.is_2fa_enabled)
          {
           setShowTfa(user.is_2fa_enabled!);
          }else{
           window.location.href = ROUTES.dashboard;
          }
    }else{
      setError(response.message);
    }
    })
   };
   const HandleTFA = (e:any) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    PostRequest("login",{
    }).then((response)=>{
    setLoading(false);
    navigate.replace(ROUTES.dashboard);
    if(!response.status)
    {
      navigate.replace(ROUTES.dashboard);
    }else{
      setError(response.message);
    }
    })
   };
   useEffect(()=>{
    const userData = localStorage.getItem(LOCALSTORAGE.userDetails);
    if(userData)
    {
      setUser(JSON.parse(userData));
    }
   },[user])
  let navigate = useRouter();

  return (
    <Fragment>
     
      <div className="container">
        <div className="flex justify-center authentication authentication-basic items-center h-full text-defaultsize text-defaulttextcolor">
          <div className="grid grid-cols-12">
            <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-3 sm:col-span-2"></div>
            <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-8 col-span-12">
              <div className="box !p-[3rem]">
                <nav className="!block px-6  mx-auto firebase-data" aria-label="Tabs">
                  <div className="flex justify-center space-x-2 p-2 rounded-md rtl:space-x-reverse">
                      <img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/brand-logos/nextjs.png`} alt="user-img" className="avatar avatar-sm w-6 h-6 rounded-full ring-0" />
                  </div>
                </nav>
                <div className="box-body" role="tabpanel"  id="pills-with-brand-color-01" aria-labelledby="pills-with-brand-color-item-1">
                  <p className="h5 font-semibold mb-2 text-center">{showTfa?"Two-factor Authentication":"Admin login"}</p>
                  {err &&  <BaseError message={err} title={"Oops!"} />}
                  {user && <p className="mb-4 text-[#8c9097] dark:text-white/50 opacity-[0.7] font-normal text-center">Welcome back {user.name} !</p>}
                  {showTfa? <form 
      onSubmit={HandleTFA}
      ><div className="grid grid-cols-12 gap-y-4">
                    <div className="xl:col-span-12 col-span-12">
                    <div  className="text-sm mb-3 text-center">Enter the four digit code from your authentication app</div>
                      <label htmlFor="otp" className="form-label text-default">OTP</label>
                      <BaseOTPInput 
                      required 
                      type="text" 
                      name="otp" 
                      max={4} 
                      id="otp" 
                      onChange={(e)=>{
                        setError("");
                        setTfaToken(e);
                      }} 
                      value={TfaToken} 
                      />
                    </div>
  <div className="xl:col-span-12 col-span-12 grid mt-2">
<BaseButton
title="Proceed"
loading={loading}
/>
                    </div>
                  </div>
                  </form>: <form 
      onSubmit={HandleLogin}
      >
        <div className="grid grid-cols-12 gap-y-4">
                    <div className="xl:col-span-12 col-span-12">
                      <label htmlFor="signin-email" className="form-label text-default">Email</label>
                      <input required type="text" name="email" className="form-control form-control-lg w-full !rounded-md" id="email" onChange={changeHandler} value={email}/>
                    </div>
                    <div className="xl:col-span-12 col-span-12 mb-2">
                      <label htmlFor="signin-password" className="form-label text-default block">Password<Link href={ROUTES.forgotPassword} className="float-right text-danger">Forget password ?</Link></label>
                      <div className="input-group">
                        <input required name="password" type={(passwordshow) ? 'text' : "password"} value={password} onChange={changeHandler} className="form-control form-control-lg !rounded-s-md" id="signin-password" placeholder="password" />
                        <button onClick={() => setpasswordshow(!passwordshow)} aria-label="button" className="ti-btn ti-btn-light !rounded-s-none !mb-0" type="button" id="button-addon2"><i className={`${passwordshow ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i></button>
                      </div>
                      <div className="mt-2">
                        <div className="form-check !ps-0">
                          <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                          <label className="form-check-label text-[#8c9097] dark:text-white/50 font-normal" htmlFor="defaultCheck1">
                            Remember password ?
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="xl:col-span-12 col-span-12 grid mt-2">
<BaseButton
title="Login"
loading={loading}
/>
                    </div>
                  </div></form>}
                  <div className="text-center">
                    <p className="text-[0.75rem] text-[#8c9097] dark:text-white/50 mt-4">{showTfa?"Go back to ":"Dont have an account?"}{showTfa?<button onClick={()=>setShowTfa(false)} className="btn p-0">Login</button>:<Link href={ROUTES.signUp} className="text-primary">Sign Up</Link>}</p>
                  </div>
                </div>
                
              </div>
            </div>
            <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-3 sm:col-span-2"></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Firebaselogin;
