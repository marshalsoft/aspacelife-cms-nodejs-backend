import { ReactNode } from "react";

interface BaseModalProp {
onClose:()=>void;
title:string;
children:ReactNode;
onOk:()=>void;
okText?:string;
cancelText?:string;
}
export const BaseModal = (prop:BaseModalProp)=>{
    return <div  id="hs-large-modal"  className="hs-overlay ti-modal  [--overlay-backdrop:static]">
    <div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out md:!max-w-2xl md:w-full m-3 md:mx-auto">
        <div className="ti-modal-content">
        <div className="ti-modal-header">
            <h6 className="modal-title text-[1rem] font-semibold">{prop.title}</h6>
                <button type="button"
                onClick={prop.onClose}
                className="hs-dropdown-toggle !text-[1rem] !font-semibold !text-defaulttextcolor" data-hs-overlay="#staticBackdrop">
                <span className="sr-only">Close</span>
                <i className="ri-close-line"></i>
                </button>
        </div>
        <div className="ti-modal-body px-4">
         {prop.children}
        </div>
        <div className="ti-modal-footer">
            <button type="button"
            onClick={prop.onClose}
            className="hs-dropdown-toggle ti-btn  ti-btn-secondary-full align-middle"
            data-hs-overlay="#staticBackdrop
            ">
            {prop?.cancelText?prop.cancelText:"Close"}
            </button>
            <button
             onClick={prop.onOk}
            type="button" className="ti-btn bg-primary text-white !font-medium">
                {prop?.okText?prop.okText:"OK"}
            </button>
        </div>
        </div>
    </div>
</div>
}