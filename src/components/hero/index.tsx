"use client";

import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { AspectRatio } from "../ui/aspect-ratio";
import Image from "next/image";
import Link from "next/link";
import { RoutePath } from "@/lib/utils/constants";

const animatedKeywords = ["Hospitals", "Pharmacies", "Clinics"];

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTextIndex(
        (prevIndex) => (prevIndex + 1) % animatedKeywords.length
      );
    }, 3000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <section
      id="hero"
      className="flex justify-center items-center w-full h-[95vh] md:min-h-[600px] bg-primary"
    >
      <div className="container grid md:grid-cols-2 justify-center items-center">

        <div className="flex flex-col gap-y-4">
          <div className="font-bold leading-[60px] tracking-[-0.96px]">
            <h2 className="text-[35px] text-white sm:text-[42px] xs:text-[32px] text-wrap">
              Optimizing Operational Efficiency for{" "}
              <AnimatePresence mode="wait">
                <motion.span
                  key={animatedKeywords[currentTextIndex]}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0,
                  }}
                  className="text-[#72F4E8]"
                >
                  {animatedKeywords[currentTextIndex]}
                </motion.span>
              </AnimatePresence>
            </h2>
          </div>
          <p className="flex w-fit items-center justify-center rounded-lg bg-[#D6E7F6] bg-opacity-5 p-1 leading-[26px] tracking-[0px] text-[#B8D5F0] sm:text-[17.5px] xl:whitespace-nowrap">
            The all-in-one solution for Intelligent Scheduling, Intuitive
            Customer Flow <br /> Management, Adaptable Configuration,
            Streamlined Processes and Analytics.
          </p>
          <div className="hidden md:visible md:block space-x-4">
            <Button variant="outline">Book a demo</Button>
            <Button className="border">Sign up</Button>
          </div>
        </div>

        {/* Hero Image */}
        <div>
          <AspectRatio ratio={3 / 2}>
            <Image
              src="./images/hero-right.svg"
              alt="Hero"
              fill
              className="object-cover -translate-x-10"
            />
          </AspectRatio>

          {/* Responsive Buttons */}
          <div className="md:hidden w-full flex items-center space-x-4">
            <Button variant="outline" className="w-1/2">
              Book a demo
            </Button>
            <Button className="border w-1/2">Sign up</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
