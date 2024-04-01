"use client"

import React, { RefObject } from "react";
// import { Link, useNavigate } from "react-router-dom";

// import { HashLink } from "react-router-hash-link";
// import { scrollWithOffset } from "./Navbar";
import { Instagram, InstagramIcon, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const Footer: React.FC<{ CoreFeaturesRef?: RefObject<HTMLElement> }> = ({
	CoreFeaturesRef,
}) => {
	// const navigate = useNavigate();
	return (
		<footer className="flex w-full items-center justify-center bg-[#032A4E]">
			<div className="flex w-full max-w-[1216px] flex-col items-center space-y-8 py-9 px-4">
				<div
					className="flex flex-col w-full items-center justify-between md:flex-row md:items-start md:space-y-12
				"
				>
					<img
						src="/images/logo-white.svg"
						className="cursor-pointer"
						// onClick={() => navigate("/")}
						alt="Migranium logo"
					/>
					<ul className="font-inter flex items-center font-medium text-[#858C95] sm:space-x-12 mxs:text-sm msm:space-x-8">
						<Link
							href={"/about"}
							className="text-white duration-200 ease-in-out hover:text-[#72F4E8]"
						>
							About Us
						</Link>
						{/* <HashLink
							to={"/#features"}
							// scroll={scrollWithOffset}
							className="cursor-pointer text-white duration-200 ease-in-out hover:text-[#72F4E8]"
						>
							Features
						</HashLink> */}
						<Link
							href={"/sign-up"}
							className="text-white duration-200 ease-in-out hover:text-[#72F4E8]"
						>
							Create Account
						</Link>
					</ul>
					<ul className="flex items-center space-x-6 fill-white">
						<a
							href="https://www.linkedin.com/company/migranium/"
							target="_blank"
							rel="noreferrer"
						>
							<Linkedin absoluteStrokeWidth size={24} fill="white" className="border p-1 border-white" />
						</a>
						<a
							href="https://www.instagram.com/migranium.ai/"
							target="_blank"
							rel="noreferrer"
						>
							<InstagramIcon absoluteStrokeWidth size={24} fill="white" />
						</a>
						<a
							href="https://twitter.com/migranium"
							target="_blank"
							rel="noreferrer"
						>
							<Twitter absoluteStrokeWidth size={24} fill="white" />
						</a>
					</ul>
				</div>
				<hr className="w-full border border-[#1D3E69]" />
				<div className="flex w-full items-center justify-between text-white mmd:flex-col-reverse mmd:items-start mmd:gap-y-8">
					<p>
						&copy; {new Date().getFullYear()} Migranium. All Rights Reserved.
					</p>
					<ul className="font-inter flex items-center space-x-2.5 font-medium sm:space-x-6 mxs:text-xs">
						{/* <Link
							to={""}
							className="cursor-pointer duration-200 ease-in-out hover:text-[#72F4E8]"
						>
							Cookies
						</Link> */}
						<Link
							href={"/terms"}
							className="cursor-pointer duration-200 ease-in-out hover:text-[#72F4E8]"
						>
							Terms
						</Link>
						<br />
						<Link
							href={"/payment-terms"}
							className="cursor-pointer duration-200 ease-in-out hover:text-[#72F4E8]"
						>
							Payment Terms
						</Link>
						<Link
							href={"/privacy-policy"}
							className="cursor-pointer duration-200 ease-in-out hover:text-[#72F4E8]"
						>
							Privacy Policy
						</Link>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
