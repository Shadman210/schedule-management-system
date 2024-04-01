import Sidebar from "@/components/sidebar";
import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
    title: "Migranium Main",
    description: "Test description",
};

export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className=" relative flex">
            <NextTopLoader showSpinner={false} color="#043B6D" height={1.5} />
            <Sidebar />
            {children}
        </main>
    );
}
