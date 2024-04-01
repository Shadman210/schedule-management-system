"use client";

import { Button } from "../ui/button";
import { signOut } from "next-auth/react";
import {
    BarChart2Icon,
    CalendarClockIcon,
    ClockIcon,
    LoaderIcon,
    LogOutIcon,
    MapPinIcon,
    MonitorIcon,
    SettingsIcon,
    UsersIcon,
} from "lucide-react";
import Link from "next/link";
import { RoutePath } from "@/lib/utils/constants";
import { ScrollArea } from "../ui/scroll-area";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "../ui/tooltip";

type NavItem = {
    icon: React.ReactNode;
    label: string;
    path: string;
};

const navItems: NavItem[] = [
    {
        icon: <MonitorIcon size={20} />,
        label: "Display",
        path: RoutePath.DISPLAY,
    },
    {
        icon: <LoaderIcon size={20} />,
        label: "Waitlist",
        path: RoutePath.WAITLIST,
    },
    {
        icon: <BarChart2Icon size={20} />,
        label: "Analytics",
        path: RoutePath.ANALYTICS,
    },
    {
        icon: <ClockIcon size={20} />,
        label: "Serving",
        path: RoutePath.SERVING,
    },
    {
        icon: <CalendarClockIcon size={20} />,
        label: "Schedule",
        path: RoutePath.SCHEDULE,
    },
    {
        icon: <MapPinIcon size={20} />,
        label: "Locations",
        path: RoutePath.LOCATIONS,
    },
    {
        icon: <UsersIcon size={20} />,
        label: "Team members",
        path: RoutePath.TEAM_MEMBERS,
    },
    {
        icon: <SettingsIcon size={20} />,
        label: "Settings",
        path: RoutePath.SETTINGS,
    },
];

type Props = {
    variant?: "icon" | "default";
};

const Sidebar = ({ variant = "icon" }: Props) => {
    const pathname = usePathname();
    const isIconView = variant === "icon";
    return (
        <TooltipProvider>
            <aside
                className={cn(
                    "sticky top-0 left-0 h-screen transition-all bg-primary",
                    {
                        "min-w-[160px] w-[160px]": variant === "default",
                        "min-w-[60px] w-[60px]": variant === "icon",
                    }
                )}
            >
                <div className="py-2 flex flex-col w-full">
                    <ScrollArea className=" h-[calc(100vh-64px)]">
                        {navItems.map((item) => {
                            const isActive = pathname.includes(item.path);
                            return isIconView ? (
                                <Tooltip key={item.label} delayDuration={0}>
                                    <TooltipTrigger asChild>
                                        <Link
                                            href={item.path}
                                            className={cn(
                                                "flex items-center text-white justify-center gap-2 text-sm mb-2 py-2.5 px-2 transition-all",
                                                {
                                                    "text-primary bg-white":
                                                        isActive,
                                                }
                                            )}
                                        >
                                            {item.icon}
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent
                                        side="right"
                                        sideOffset={10}
                                    >
                                        {item.label}
                                    </TooltipContent>
                                </Tooltip>
                            ) : (
                                <Link key={item.label} href={item.path}>
                                    <div
                                        className={cn(
                                            "flex items-center gap-2 text-sm mb-2 py-2.5 px-2 transition-all text-white",
                                            {
                                                "text-primary bg-white":
                                                    isActive,
                                            }
                                        )}
                                    >
                                        <div>{item.icon}</div>
                                        <div>{item.label}</div>
                                    </div>
                                </Link>
                            );
                        })}
                    </ScrollArea>
                    <div className=" mt-auto text-sm">
                        {isIconView ? (
                            <Tooltip delayDuration={0}>
                                <TooltipTrigger asChild>
                                    <Button
                                        className="w-full text-white hover:text-white hover:bg-primary"
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => signOut()}
                                    >
                                        <LogOutIcon size={18} />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent side="right" sideOffset={10}>
                                    Sign out
                                </TooltipContent>
                            </Tooltip>
                        ) : (
                            <Button
                                className="w-full text-white hover:text-white hover:bg-primary rounded-none"
                                variant="ghost"
                                onClick={() => signOut()}
                            >
                                <LogOutIcon size={18} />{" "}
                                <span className="ml-2">Sign out</span>
                            </Button>
                        )}
                    </div>
                </div>
            </aside>
        </TooltipProvider>
    );
};

export default Sidebar;
