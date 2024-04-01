import { SignInForm } from "@/components/forms/sign-in-form";
import OnboardingBackground from '@/components/onboarding-background';
import Image from "next/image";

const SignInPage = async () => {
    return (
        <div className="h-[calc(100vh-64px)] relative">
            <OnboardingBackground />
            <div className="container h-full z-50">
                <div className="grid grid-cols-2 gap-x-10 items-center h-full">
                    <div className=" max-w-[488px] rounded shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)] p-10 bg-white">
                        <SignInForm />
                    </div>
                    <div className="flex flex-col space-y-3 md:space-y-6">
                        <h1 className="text-2xl font-bold text-[#323539] md:text-[40px] md:font-semibold md:leading-[32px] md:tracking-[-1.5%]">
                            Welcome Back to Migranium
                        </h1>
                        <p className="text-lg tracking-[-1%] text-[#858C95]">
                            Log in to continue optimizing your operational
                            efficiency <br /> and enhancing customer
                            experiences.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignInPage;
