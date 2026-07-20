import { SITE } from "@/config/site";

import CountdownTimer from "./CountdownTimer";

export default function Countdown() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center bg-[#0F0F10] text-white">
            <div className="max-w-3xl space-y-12">

                <header className="space-y-3">
                    <p className="text-sm uppercase tracking-[0.35em]">
                        {SITE.title}
                    </p>

                    <h1 className="text-5xl font-bold sm:text-7xl">
                        Para {SITE.recipient}
                    </h1>

                    <p className="text-lg">
                        Algo está sendo preparado...
                    </p>
                </header>
                <div className="mx-auto h-px w-[100%] bg-[#8B1E2D] opacity-70" />
                <CountdownTimer />

            </div>
        </main>
    );
}