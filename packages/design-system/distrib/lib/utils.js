import { parseError } from '@nerve-js/observability/error';
import { clsx } from 'clsx';
import { toast } from 'sonner';
import { twMerge } from 'tailwind-merge';
export const cn = (...inputs) => twMerge(clsx(inputs));
export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
export const handleError = (error) => {
    const message = parseError(error);
    toast.error(message);
};
