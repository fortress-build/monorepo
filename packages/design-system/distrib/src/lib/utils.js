import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
export const cn = (...inputs) => twMerge(clsx(inputs));
export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
