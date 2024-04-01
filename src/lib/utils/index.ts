import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { RoutePath } from "./constants";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const routeList: string[] = Object.values(RoutePath).map(
    (value) => value
);
