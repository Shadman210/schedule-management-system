import {
    BarChartBigIcon,
    MonitorIcon,
    NetworkIcon,
    UsersIcon,
} from "lucide-react";
import FeatureCard from "../feature-card";
import { Button } from "../ui/button";
import Image from "next/image";

const features = [
    {
        icon: <BarChartBigIcon className=" text-[#48AA75]" size={40} />,
        title: "Operational Insights",
        content:
            "Comprehensive analytics for strategic insights and decision-making for new opportunities.",
    },
    {
        icon: <NetworkIcon className=" -rotate-90 text-[#48AA75]" size={40} />,
        title: "Process Configuration",
        content:
            "Easily set up workflows and workstations and adapt to your streamlined operations.",
    },
    {
        icon: <MonitorIcon className=" text-[#48AA75]" size={40} />,
        title: "Remote Monitoring",
        content:
            "Monitor operations remotely in real-time, ensuring seamless response and management.",
    },
    {
        icon: <UsersIcon className="text-[#48AA75]" size={40} />,
        title: "Customer Management",
        content:
            "Optimize customer flow / scheduling to enhance experiences and for better service efficiency.",
    },
];

const CoreFeatures = () => {
    return (
        <section className="container flex flex-col w-full py-14" id="features">
            <h3 className="text-center text-3xl font-bold leading-[40px] tracking-[-1.5%] text-[#323539]">
                Core <span className="text-green-400">Features</span>
            </h3>
            <div className="grid md:grid-cols-2 pt-14 gap-16">
                <div className="shadow-xl relative">
                    <video loop={true} autoPlay={true} muted={true}>
                        <source src="./videos/featured-video.mp4" />
                    </video>
                    <div className="flex items-center gap-2 rounded-full absolute -bottom-5 -left-2 text-xs font-semibold bg-primary text-white p-2">
                        <Image src="/images/ai.svg" alt="ai-logo" width={20} height={20} />
                        <span>Powered by AI</span>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    {features.map((item, i) => (
                        <FeatureCard
                            key={i}
                            icon={item.icon}
                            title={item.title}
                            content={item.content}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoreFeatures;
