"use client";
import { CheckCircle2, ChevronLeft, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import React from 'react'

const OnboardingItem: React.FC<{ isCompleted: boolean; title: string }> = ({
    isCompleted,
    title,
}) => {
    return (
        <li
            className={`flex max-w-[220px] flex-1 items-center space-x-2 py-2.5 px-4 font-semibold leading-[22px] ${isCompleted
                ? "border-b-2 border-b-[#053969]"
                : "border-b-2 border-b-transparent"
                }`}
        >
            <CheckCircle2 absoluteStrokeWidth className={`${!isCompleted && "hidden"}`} />
            <CheckCircle2 className={`${isCompleted && "hidden"}`} />
            <p className="text-[#195388]">{title}</p>
        </li>
    );
};

function OnBoardingMenu() {
    const pathname = usePathname();

    return (
        <nav className="flex w-full justify-center bg-white">
            <div className="mx-4 flex w-full max-w-[1244px] items-center justify-between">
                <ChevronLeft size={24} className='text-primary' />
                <div className="flex flex-1 justify-center pt-2 pb-3">
                    <OnboardingItem
                        isCompleted={pathname === "/about-business"}
                        title={"Add Businessssss"}
                    />
                    <OnboardingItem
                        isCompleted={
                            pathname === "/about-business/add-location" ||
                            pathname === "/about-business/add-location/" ||
                            pathname === "/about-business/upgrade-plan" ||
                            pathname === "/about-business/upgrade-plan/"
                        }
                        title={"Add Schedule"}
                    />
                    <OnboardingItem
                        isCompleted={
                            pathname === "/about-business/upgrade-plan" ||
                            pathname === "/about-business/upgrade-plan/"
                        }
                        title={"Add Payment"}
                    />
                </div >
                <X size={24} className='text-primary' />
            </div>
        </nav>
    )
}

export default OnBoardingMenu
