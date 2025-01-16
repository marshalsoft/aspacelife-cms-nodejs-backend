import OTPInput from 'react18-input-otp';
interface BaseOTPInputProps {
value:string;
onValue:(otp:string)=>void;
number:number;
}
const BaseOTPInput = (prop:BaseOTPInputProps)=>{
return <div className="mb-5">
 <OTPInput
        value={prop.value} 
        onChange={(enteredOtp:string) => {
         prop.onValue(enteredOtp);
        }} 
        numInputs={prop.number} 
        inputStyle={{
          display: "block",
          width: "100%",
          paddingVertical:15,
          paddingHorizontal: 0.75,
          fontSize: 16,
          fontWeight: "bold",
          height:50,
          color: "#212529",
          backgroundColor: "#fff",
          borderWidth: 1,
          borderStyle:"solid",
          borderColor:"#ced4da",
          borderRadius:8,
          transition: "border-color .15s ease-in-out",
          boxShadow:".15s ease-in-out"
        }}
        focusStyle={{
            borderColor:"#7001F9", 
            borderWidth: 2, 
        }}
        separator={<span style={{width:10}}></span>} 
        /> 
</div>
}
export default BaseOTPInput;