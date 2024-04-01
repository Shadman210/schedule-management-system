"use client"

import React, {
    useEffect,
    useState,
} from "react";

import { Button } from "../ui/button";
import { Monitor, MonitorSmartphone, NetworkIcon, PlusCircle, UsersIcon } from "lucide-react";
import Image from "next/image";

type PropTypes = {
    setShowBookDemo?: any,
}

type HowItWorksCardProps = {
    step: number;
    title: string;
    icon: JSX.Element;
    desc: string;
}

const HowItWorksData = [
    {
        title: "Create Account",
        icon: (
            <figure className="h-fit w-fit rounded-full border border-[#BCDAF8] bg-white p-1.5">
                <PlusCircle className="text-[#195388]" size={32} />
            </figure>
        ),
        desc: "Sign up and receive a unique URL for direct customer access. Streamline your entry into a world of efficient management and enhanced user experience.",
    },
    {
        title: "Configure Workflow",
        icon: (
            <figure className="h-fit w-fit rounded-full border border-[#BCDAF8] bg-white p-1.5">
                <NetworkIcon className="text-[#195388]" size={32} />
            </figure>
        ),
        desc: "Tailor your workflows for maximum efficiency. Set up processes that fit your unique business needs, ensuring smooth and effective operations.",
    },
    {
        title: "Set-Up Workstations",
        icon: (
            <figure className="h-fit w-fit rounded-full border border-[#BCDAF8] bg-white p-1.5">
                <MonitorSmartphone className="text-[#195388]" size={32} />
            </figure>
        ),
        desc: "Optimize your workstations to align with your operating schedule. Enhance productivity and operational effectiveness with customized configurations.",
    },
    {
        title: "Manage Customers",
        icon: (
            <figure className="h-fit w-fit rounded-full border border-[#BCDAF8] bg-white p-1.5">
                <UsersIcon className="text-[#195388]" size={32} />
            </figure>
        ),
        desc: "Efficiently manage customer interactions, schedules, and flow. Utilize tools for seamless communication and engagement, boosting satisfaction..",
    },
    {
        title: "Monitor Operations",
        icon: (
            <figure className="h-fit w-fit rounded-full border border-[#BCDAF8] bg-white p-1.5">
                <Monitor className="text-[#195388]" size={32} />
            </figure>
        ),
        desc: "Track your operations in real time with detailed analytics. Gain valuable insights for informed decision-making and strategic business improvements.",
    },
];


const HowItWorksCard: React.FC<HowItWorksCardProps> = ({ step, title, icon, desc }) => {
    return (
        <div className="z-10 flex max-w-fit flex-col space-y-4 self-stretch rounded-xl shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)] bg-[#F1F5FA] p-4 duration-200 ease-in-out hover:scale-105 sm:py-6 sm:px-8">
            <div className="flex justify-between">
                <div className="flex flex-col space-y-2">
                    <p className="w-[67px] rounded-full bg-white text-center font-medium text-[#060D25]">
                        Step {step}
                    </p>
                    <h4 className="text-[22px] font-bold leading-[30px] tracking-[-1%] text-[#323539]">
                        {title}
                    </h4>
                </div>
                {icon}
            </div>
            <p className="max-w-[307px] tracking-[-1%] text-[#858C95]">{desc}</p>
        </div>
    );
};

const HowItWorks = ({ setShowBookDemo }: PropTypes) => {
    const [rootElement, setRootElement] = useState<null | HTMLElement>(null);
    useEffect(() => {
        setRootElement(document.getElementById("root"));
    }, []);

    return (
        <section className="container flex flex-col items-center justify-center space-y-10 px-4 py-16 sm:py-20 md:space-y-21 md:py-36" id="how-it-works">
            <h3 className="text-center text-[32px] font-bold leading-10 tracking-[-1.5%] text-[#323539] px-4">
                How it <span className="text-green-300"> Works</span>
            </h3>
            <div className="relative w-full">
                <div className="flex flex-col w-full mx-auto space-y-6">
                    <div className="grid grid-cols-1 justify-items-center gap-y-6 gap-x-4 sm:grid-cols-2 lg:grid-cols-3">
                        {HowItWorksData.map((data, index) => (
                            <HowItWorksCard
                                step={index + 1}
                                title={data.title}
                                icon={data.icon}
                                desc={data.desc}
                                key={index}
                            />
                        ))}
                        <div className="z-10 flex flex-col items-center justify-center space-y-3 text-center text-[#858C95] md:h-53">
                            <Button
                                onClick={() => setShowBookDemo(true)}
                                className="w-fit h-11 scale-100 bg-primary text-white duration-300 ease-in-out hover:text-[#72F4E8]"
                                disabled={false}
                            >
                                Book A Demo
                            </Button>
                            Get started now!
                        </div>
                    </div>
                </div>
                <Image
                    src="/images/how-it-works.svg"
                    width={20}
                    height={40}
                    className="w-full absolute bottom-2 -left-5 z-0 mlg:hidden "
                    alt="Doted Arrow"
                />
            </div>
        </section>
    );
};

export default HowItWorks;

