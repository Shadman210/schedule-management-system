import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  toogleNav: Boolean;
};

const ResponsiveNav = ({ toogleNav }: Props) => {
  return (
    <ul
      className={cn(
        "absolute w-full h-fit p-5 flex flex-col gap-5 z-50 bg-white lg:hidden transition-transform duration-700",
        {
          "-translate-y-[130%] text-opacity-50": !toogleNav,
        }
      )}
    >
      <li>
        <Link href="#features">Features</Link>
      </li>
      <li>
        <Link href="#how-it-works">How it works</Link>
      </li>
      <li>
        <Link href="#pricing">Pricing</Link>
      </li>
      <li>
        <Link href="#about-us">About Us</Link>
      </li>
      <li>
        <Link href="#contact-us">Contact Us</Link>
      </li>
      <li className="flex justify-between items-center mt-5">
        <Link href="#">
          <Button className="rounded-lg">Book a Demo</Button>
        </Link>
        <Link href="#">
          <Button variant="ghost">Sign up</Button>
        </Link>
      </li>
    </ul>
  );
};

export default ResponsiveNav;
