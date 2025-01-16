import { FormEvent, useState } from "react";
import EnvelopIcon from "../../../assets/icons/envelop";
import BaseInput from "../../baseInput.tsx";
import { FormDataProps } from "@/app/utils/types";
import PadLock from "@/app/assets/icons/padlock";
import BaseButton from "../../baseButton.tsx";
import BrandNames from "../../brandNames";
import { Login } from "@/app/api/login/route";
import OTPSection from "./otp";
interface LoginProps {
    email: string;
    password: string;
}
const LeftSection = () => {

    const [formData, setFormData] = useState<LoginProps>({
        email: "ekene.marshall@aspacelifetech.com",
        password: "Mekene$83"
    });
    const [switchSection, setSwitchSection] = useState(false);
    const [loading, setLoading] = useState<boolean>(false);

    const handleFormData = ({ name, value }: FormDataProps) => {
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setLoading(true)
        Login({
            email: formData.email,
            password: formData.password
        },).then((res) => {
            setLoading(false)
            if (res.status) {
                setSwitchSection(true)
            }
        })
    }
    return <div className="bg-white p-10 full-height">
        <p className="font-bold text-[25px] text-[#484848] text-black text-center fs-lg inter-bold mt-[110px]">{switchSection ? "Enter Code" : "Sign in"}</p>
        <p className="font-normal text-[14px] text-[#484848]  text-center inter-normal mb-13">{switchSection ? "Enter code sent to your email address" : "Welcome Back, Please enter your credentials"}</p>
        <div className="asp-card shadow-lg max-w-sm m-auto bg-white min-h-50 min-w-200 inter" >
            {switchSection ? <div className="p-6">
                <div className="flex items-center justify-center mb-8">
                    <div className="text-center">
                        <Icon />
                    </div>
                </div>
                <OTPSection
                    goBack={() => setSwitchSection(false)}
                />
            </div>
                : <div className="p-6">
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
                            leadingIcon={<EnvelopIcon />}
                            onValue={({ name, value }) => {
                                if (value) {
                                    handleFormData({ name, value });
                                }
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
                            leadingIcon={<PadLock />}
                            onValue={({ name, value }) => {
                                if (value) {
                                    handleFormData({ name, value });
                                }
                            }}
                            error="Password is required."
                        />
                        <BaseButton
                            loading={loading}
                            type="submit"
                            text="Login"
                        />
                    </form>
                </div>}
        </div>
        <div
            style={{ position: "absolute", bottom: 80 }}
        >
            <BrandNames />
        </div>
    </div>
}
export default LeftSection;
const Icon = () => {
    return <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1.31567" y="0.5" width="39" height="39" rx="4.5" stroke="#EDEDED" />
        <path d="M29.8157 21V16C29.8157 15.4696 29.605 14.9609 29.2299 14.5858C28.8548 14.2107 28.3461 14 27.8157 14H13.8157C13.2852 14 12.7765 14.2107 12.4015 14.5858C12.0264 14.9609 11.8157 15.4696 11.8157 16V22C11.8157 22.5304 12.0264 23.0391 12.4015 23.4142C12.7765 23.7893 13.2852 24 13.8157 24H20.8157" stroke="#7001F9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M29.6946 24.917C30.1886 25.221 30.1576 25.96 29.6496 26.018L27.0826 26.309L25.9316 28.621C25.7036 29.08 24.9986 28.855 24.8816 28.287L23.6266 22.171C23.5276 21.691 23.9596 21.389 24.3766 21.646L29.6946 24.917Z" stroke="#7001F9" strokeWidth="1.5" />
        <path d="M20.8157 19.01L20.8257 18.999M24.8157 19.01L24.8257 18.999M16.8157 19.01L16.8257 18.999" stroke="#7001F9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
}
