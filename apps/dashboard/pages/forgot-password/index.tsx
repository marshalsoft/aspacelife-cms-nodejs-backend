import { ROUTES } from '@/shared/constants';
import { auth } from '@/shared/firebase/firebaseapi';
import Seo from '@/shared/layout-components/seo/seo'
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { Fragment, useState } from 'react';
import { useEffect as ReactUseEffect } from 'react';

const ForgotPassord = () => {
    const [passwordshow1, setpasswordshow1] = useState(false);
    const [passwordshow2, setpasswordshow2] = useState(false);

    ReactUseEffect(() => {
        import("preline");
        
    }, []);
      
  return (
    <Fragment>
        <Seo title={"Signup"}/>
       <div className="container">
        <div className="flex justify-center authentication authentication-basic items-center h-full text-defaultsize text-defaulttextcolor">
            <div className="grid grid-cols-12">
                <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-3 sm:col-span-2"></div>
                <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-8 col-span-12">
                    <div className="box">
                        <div className="box-body !p-[3rem]">
                            <p className="h5 font-semibold mb-2 text-center">Forgot password</p>
                            <div className="grid grid-cols-12 gap-y-4">
                                <div className="xl:col-span-12 col-span-12">
                                    <label htmlFor="signup-firstname" className="form-label text-default">Email address</label>
                                    <input type="email" className="form-control form-control-lg w-full !rounded-md"
                                        id="email" placeholder="Email addresss"/>
                                </div>
                                
                                
                                <div className="xl:col-span-12 col-span-12 mb-2">
                                   
                                </div>
                                <div className="xl:col-span-12 col-span-12 grid mt-2">
                                    <button type="button" className="ti-btn ti-btn-lg bg-primary text-white !font-medium dark:border-defaultborder/10">Proceed</button>
                                </div>
                            </div>
                            <div className="text-center">
                                <p className="text-[0.75rem] text-[#8c9097] dark:text-white/50 mt-4">Go back to <Link 
                                href={"/"} className="text-primary">Sign In</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-3 sm:col-span-2"></div>
            </div>
        </div>
    </div>
    </Fragment>
  )
}


export default ForgotPassord