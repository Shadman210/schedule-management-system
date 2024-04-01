import { AddBusinessForm } from '@/components/forms/add-business-form';
import OnboardingBackground from '@/components/onboarding-background';
import OnBoardingMenu from '@/components/onbording-menu';
import React from 'react'

function AboutBusiness() {

    return (
        <>
            <OnboardingBackground />
            <div className="container h-full z-50">
                <OnBoardingMenu />
                <div className="flex flex-col justify-center items-center h-screen ">
                    <AddBusinessForm />
                </div>

            </div >
        </>
    )
}

export default AboutBusiness
