import clsx from 'clsx'
import {twMerge} from 'tailwind-merge'

// rest parameter

export const cn = (...inputs) => {
    return twMerge(clsx(inputs));
}