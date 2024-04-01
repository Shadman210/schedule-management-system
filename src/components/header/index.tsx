"use client";

import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { RoutePath } from "@/lib/utils/constants";
import { Menu, X } from "lucide-react";
import NavList from "./navList";
import { useState } from "react";
import ResponsiveNav from "./responsiveNav";

type Props = {
    variant?: "primary" | "secondary";
};

const Header = ({ variant = "primary" }: Props) => {
    const [toogleNav, setToogleNav] = useState(false);
    const handleToogleNav = () => setToogleNav(!toogleNav);
    const pathname = usePathname();
    return (
        <div
            className={cn("h-16 sticky top-0 z-30", {
                "bg-primary": variant === "primary",
                "bg-white": variant === "secondary",
            })}
        >
            <nav className=" container flex items-center justify-between h-full">
                <Link href="/">
                    <Image
                        src={
                            variant === "primary"
                                ? "./images/logo-white.svg"
                                : "./images/logo-blue.svg"
                        }
                        alt="Migranium logo"
                        height={64}
                        width={140}
                    />
                </Link>
                <div className="flex items-center gap-x-4">
                    <NavList />
                    {pathname === RoutePath.SIGN_IN ? (
                        <Link href={RoutePath.SIGN_UP}>
                            <Button className="border">Sign up</Button>
                        </Link>
                    ) : (
                        <Link href={RoutePath.SIGN_IN}>
                            <Button className="border">Sign in</Button>
                        </Link>
                    )}
                    <Link href="#">
                        <Button
                            variant="outline"
                            className="hidden md:visible md:block"
                        >
                            Book a demo
                        </Button>
                    </Link>

                    {/* Toogle Button for mobile device */}
                    <Button
                        variant="ghost"
                        className="hover:bg-transparent lg:hidden"
                        onClick={() => handleToogleNav()}
                    >
                        {!toogleNav ? (
                            <Menu className="text-white" />
                        ) : (
                            <X className="text-white" />
                        )}
                    </Button>
                </div>
            </nav>
            <ResponsiveNav toogleNav={toogleNav} />
        </div>
    );
};

export default Header;
