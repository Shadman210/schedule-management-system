import type { Metadata } from "next";
import Header from "@/components/header";

export const metadata: Metadata = {
    title: "Migranium | Authentication",
    description: "",
};

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header variant="primary" />
            {children}
        </>
    );
}
