"use client";

import { useEffect, useState } from "react";

import { CountdownTime, getTimeRemaining } from "@/lib/countdown";

export default function CountdownTimer() {
    const [time, setTime] = useState<CountdownTime>(getTimeRemaining());

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout>;

        const tick = () => {
            setTime(getTimeRemaining());

            timeout = setTimeout(
                tick,
                1000 - (Date.now() % 1000)
            );
        };

        tick();

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 text-[#8B1E2D] ">
            <TimeUnit value={time.days} label={time.days === 1 ? "Dia" : "Dias"} />
            <TimeUnit value={time.hours} label={time.hours === 1 ? "Hora" : "Horas"} />
            <TimeUnit value={time.minutes} label={time.minutes === 1 ? "Minuto" : "Minutos"} />
            <TimeUnit value={time.seconds} label={time.seconds === 1 ? "Segundo" : "Segundos"} />
        </div>
    );
}

interface TimeUnitProps {
    value: number;
    label: string;
}

function TimeUnit({ value, label }: TimeUnitProps) {
    return (
        <div className="flex flex-col items-center">
            <span className="text-6xl font-bold tabular-nums">
                {String(value).padStart(2, "0")}
            </span>

            <span className="mt-2 text-sm uppercase tracking-[0.3em] text-gray-200">
                {label}
            </span>
        </div>
    );
}