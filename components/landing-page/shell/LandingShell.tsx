import React from "react";

const LandingShell = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="relative w-full min-h-screen p-6 flex flex-col items-center justify-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-lime-300 to-green-900 box-border overflow-hidden">
            <div className="absolute w-[180vmin] h-[180vmin] bg-black rounded-none [clip-path:polygon(50%_0%,60%_40%,100%_50%,60%_60%,50%_100%,40%_60%,0%_50%,40%_40%)] blur-3xl z-0 opacity-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45" />
            <div className="absolute top-4 right-4 bg-neutral-900 text-white px-3 py-1 rounded-lg text-xs font-sans z-10">
                v1.00
            </div>
            <h2 className="my-2 mb-4 text-gray-400 text-base font-medium font-sans text-center z-10">
                Kapsules powered by GENR8
            </h2>
            <h1 className="text-gray-350 text-4xl md:text-5xl font-extrabold font-sans text-center my-2 mb-12 tracking-tight drop-shadow-lg z-10">
                Build Frontend Applications
                <br /> In Seconds Not Months!
            </h1>
            {children}
        </div>
    );
};

export default LandingShell;
