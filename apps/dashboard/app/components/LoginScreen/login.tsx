
"use client"
import LeftSection from "./sections/left";
import RightSection from "./sections/right";

const Login = ()=>{
return <div className="grid grid-cols-1 md:grid-cols-2 w-full">
  <LeftSection />
  <RightSection />
</div>
} 
export default Login;