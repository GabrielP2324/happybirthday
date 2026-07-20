// lib/countdown.ts

import { SITE } from "@/config/site";

export interface CountdownTime {
    total: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isComplete: boolean;
}

export function getTimeRemaining(): CountdownTime {
    const total = SITE.birthday.getTime() - Date.now();

    if (total <= 0) {
        return {
            total: 0,
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            isComplete: true,
        };
    }

    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (total % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (total % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (total % (1000 * 60)) /
        1000
    );

    return {
        total,
        days,
        hours,
        minutes,
        seconds,
        isComplete: false,
    };
}