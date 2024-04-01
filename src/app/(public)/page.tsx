"use client"

import CoreFeatures from "@/components/core-features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how-It-works";
import OptimiseOperations from "@/components/optimise-operations";

import WhatUsersSay from "@/components/what-users-say";

export default function Home() {
    return (
        <main className=" relative">
            <Hero />
            <CoreFeatures />
            {/* <>Hours Saved</> */}
            <HowItWorks />

            <WhatUsersSay />
            <OptimiseOperations />
            <Footer />
        </main>
    );
}
