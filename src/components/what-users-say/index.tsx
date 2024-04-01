import React from "react";

type WhatUsersSayCardProps = {
    title: string;
    desc: JSX.Element;
    personImg: string;
    name: string;
    postion: string;
    locationImg: string;
}

const WhatUsersSayCard: React.FC<WhatUsersSayCardProps> = ({ title, desc, personImg, name, postion, locationImg }) => {
    return (
        <div className="flex flex-col space-y-8 rounded-xl p-7 my-6 sm:mx-2 duration-200 ease-in-out hover:scale-105 shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)]">
            <div className="flex flex-1 flex-col space-y-4">
                <h3 className="font-inter text-2xl font-semibold text-primary sm:text-7 sm:leading-14">
                    {title}
                </h3>
                <div className="max-h-[198px] flex-1 overflow-hidden">{desc}</div>
            </div>
            <div className="flex items-center justify-between ">
                <figure className="flex items-center space-x-2.5">
                    <img
                        src={personImg}
                        alt=""
                        className="h-10 w-10 rounded-full object-cover"
                    />
                    <figcaption className="block">
                        <span className="block font-semibold text-[#323539] msm:text-[15px]">
                            {name}
                        </span>
                        <span className="block font-medium text-[#858C95] msm:text-sm">
                            {postion}
                        </span>
                    </figcaption>
                </figure>
                <img src={locationImg} alt="" />
            </div>
        </div>
    );
};

const WhatUsersSay: React.FC = () => {
    return (
        <section className="container flex flex-col items-center justify-center space-y-10 px-4 py-16 sm:py-20 md:space-y-21 md:py-36">
            <h3 className="text-center text-[32px] font-bold leading-10 tracking-[-1.5%] text-[#323539] px-4">
                What Our <span className="text-green-300"> Users Say</span>
            </h3>
            <div className="flex lg:space-x-12 flex-col md:flex-row ">
                <WhatUsersSayCard
                    title={"The analytics are invaluable for planning"}
                    desc={
                        <p className="font-inter leading-[28px] tracking-[-1.5%] text-[#323539] text-opacity-80">
                            As a doctor managing numerous patients, I've finally found the
                            solution in Migranium. It's streamlined our patient management
                            and the{" "}
                            <span className="font-bold">
                                analytics are invaluable for resource planning
                            </span>{" "}
                            and enhancing care efficiency.
                        </p>
                    }
                    personImg={"/images/what-users-1.png"}
                    name={"Majlessi K."}
                    postion={"Doctor"}
                    locationImg={"/images/northyork-medicals.png"}
                />
                <WhatUsersSayCard
                    title={"We now work more efficiently!"}
                    desc={
                        <p className="font-inter leading-[28px] tracking-[-1.5%] text-[#323539] text-opacity-80">
                            Migranium has streamlined our busy clinic's workflow. With over
                            70 patients daily, reducing wait times was crucial. Now,{" "}
                            <span className="font-bold"> our patients are happier,</span>{" "}
                            and{" "}
                            <span className="font-bold">we can work more efficiently.</span>{" "}
                            It's been a real game-changer!
                        </p>
                    }
                    personImg={"/images/what-users-2.png"}
                    name={"Shirleyann J."}
                    postion={"Admin Staff"}
                    locationImg={"/images/northyork-medicals.png"}
                />
                <WhatUsersSayCard
                    title={"Significantly improved experience"}
                    desc={
                        <p className="font-inter leading-[28px] tracking-[-1.5%] text-[#323539] text-opacity-80">
                            Migranium has{" "}
                            <span className="font-bold">
                                significantly improved my clinic visits experience.
                            </span>{" "}
                            Before, I faced long, uncertain waits; now, I can see exactly
                            when it's my turn and can use{" "}
                            <span className="font-bold">my time productively.</span> I'm
                            very happy with this!
                        </p>
                    }
                    personImg={"/images/what-users-3.png"}
                    name={"Ghazela Amran"}
                    postion={"Patient"}
                    locationImg={""}
                />
            </div>

        </section>
    );
};





export default WhatUsersSay;
