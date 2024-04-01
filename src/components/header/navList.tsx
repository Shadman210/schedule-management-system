import Link from "next/link";

const NavList = () => {
  return (
    <div className="hidden lg:visible lg:block">
      <ul className="flex gap-5 text-white mr-5 ">
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
      </ul>
    </div>
  );
};

export default NavList;
