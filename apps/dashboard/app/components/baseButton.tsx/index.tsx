
interface BaseButtonProps {
    loading?:boolean;
    disabled?:boolean;
    text:string;
    onClick?:()=>void;
    type:"submit" | "button";
}
const BaseButton = (props:BaseButtonProps)=>{
    return <button 
    disabled={props.loading}
    type={props.type}
    onClick={props.onClick}
    className={`btn ${props.disabled || props.loading?"btn-inactive":"btn-active"} gap-2`}
    >
    {props.loading?<>
     <div className={`w-6 h-6 border-2 border-t-transparent border-[#7001F9] rounded-full animate-spin`}></div>
        <span className="text-[#7001F9]">Processing...</span>
    </>:<span className={`${props.loading?"text-[#7001F9]":"text-white"}`}>{props.text}</span>}
    </button>
}
export default BaseButton;