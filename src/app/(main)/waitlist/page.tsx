"use client";

import {
    ArrowBigUpIcon,
    BellIcon,
    CalendarDaysIcon,
    Clock3Icon,
    PlusIcon,
    RotateCcwIcon,
    SettingsIcon,
    Trash2Icon,
    UsersIcon,
} from "lucide-react";
import dayjs from "dayjs";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { CustomSelect } from "@/components/custom/select";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const WaitlistPage = () => {
    return (
        <div className="container">
            <header>
                <section className="flex items-center justify-between py-2">
                    <div>
                        <div className="text-xs text-gray">
                            North York Medical Clinic
                        </div>
                        <h2 className="text-lg font-medium">
                            Patient Management
                        </h2>
                    </div>
                    <div className="flex items-center gap-x-6">
                        <div className="text-xs flex items-center gap-x-1">
                            <CalendarDaysIcon size={18} />
                            <div>{dayjs().format("DD MMM, YYYY")}</div>
                        </div>
                        <div>
                            <Button size="icon-sm" variant="outline">
                                <BellIcon size={18} />
                            </Button>
                        </div>
                        <div>
                            <Button size="sm" variant="outline">
                                <ArrowBigUpIcon size={18} />
                                <span className="ml-2">Upgrade plan</span>
                            </Button>
                        </div>
                    </div>
                </section>
                <section className="flex items-center justify-between py-2 mt-1">
                    <div className="flex items-center gap-x-6 text-sm">
                        <div className="flex items-center space-x-2">
                            <Switch defaultChecked={true} id="queue-on-off" />
                            <Label htmlFor="queue-on-off">Queue on</Label>
                        </div>
                        <div className="flex items-center gap-x-1">
                            <Clock3Icon size={18} />
                            <span>{dayjs().format("HH:mm:ss")}</span>
                        </div>
                        <div className="relative">
                            <div className="absolute -top-2 -right-3 flex items-center justify-center h-[18px] w-[18px] bg-primary rounded-full p-[2px] text-white text-[9px]">
                                29
                            </div>
                            <UsersIcon size={18} />
                        </div>
                    </div>
                    <div className="flex items-center gap-x-4 text-sm">
                        <div>
                            <Button size="sm">
                                <PlusIcon size={18} />
                                <span className="ml-2">Add patient</span>
                            </Button>
                        </div>
                        <div>
                            <Button variant="outline" size="icon-sm">
                                <Trash2Icon
                                    size={18}
                                    className=" text-red-500"
                                />
                            </Button>
                        </div>
                        <div>
                            <Button variant="outline" size="icon-sm">
                                <RotateCcwIcon size={18} />
                            </Button>
                        </div>
                        <div>
                            <Button variant="outline" size="icon-sm">
                                <SettingsIcon size={18} />
                            </Button>
                        </div>
                    </div>
                </section>
                <section className="flex items-center justify-between py-2 mt-2">
                    <div className="flex items-center gap-x-4">
                        <div>
                            <CustomSelect
                                className="w-[180px]"
                                placeholder="All locations"
                                label="Locations"
                                options={[]}
                                onChange={() => {}}
                            />
                        </div>
                        <div>
                            <CustomSelect
                                className="w-[180px]"
                                placeholder="All stations"
                                label="Stations"
                                options={[]}
                                onChange={() => {}}
                            />
                        </div>
                        <div>
                            <CustomSelect
                                className="w-[180px]"
                                placeholder="Waitlist + Schedule"
                                label="Waitlist + Schedule"
                                options={[]}
                                onChange={() => {}}
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-x-4">
                        <div>
                            <Input placeholder="Quick search..." />
                        </div>
                        <div>
                            <Tabs
                                defaultValue="card_view"
                                className="w-[200px]"
                            >
                                <TabsList>
                                    <TabsTrigger value="card_view">
                                        Card view
                                    </TabsTrigger>
                                    <TabsTrigger value="list_veiw">
                                        List view
                                    </TabsTrigger>
                                </TabsList>
                            </Tabs>
                        </div>
                    </div>
                </section>
            </header>
            <div className="grid grid-cols-4 gap-x-4 mt-4">
                <div className="h-[500px] bg-primary/5 rounded overflow-hidden">
                    <div className=" bg-red-600 px-4 py-2 text-white">
                        Pending
                    </div>
                </div>
                <div className="h-[500px] bg-primary/5 rounded overflow-hidden">
                    <div className=" bg-yellow-600 px-4 py-2 text-white">
                        Upcomming
                    </div>
                </div>
                <div className="h-[500px] bg-primary/5 rounded overflow-hidden">
                    <div className=" bg-sky-600 px-4 py-2 text-white">
                        Next in line
                    </div>
                </div>
                <div className="h-[500px] bg-primary/5 rounded overflow-hidden">
                    <div className=" bg-emerald-600 px-4 py-2 text-white">
                        Serving
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WaitlistPage;
