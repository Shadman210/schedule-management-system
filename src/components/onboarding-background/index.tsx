import Image from 'next/image'
import React from 'react'

function OnboardingBackground() {
    return (
        <div className=" -z-10 inset-0 absolute">
            <Image
                src="./images/sign-in-clocks.svg"
                alt="Sign in background"
                fill
                className=" object-contain object-center bg-[#ebf2f6]"
            />
        </div>
    )
}

export default OnboardingBackground
