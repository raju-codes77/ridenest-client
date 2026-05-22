// app/not-found.jsx

import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 via-slate-100 to-slate-300 px-4 overflow-hidden relative">

            {/* Background Blur Effects */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300/40 rounded-full blur-3xl"></div>

            <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-400/30 rounded-full blur-3xl"></div>

            {/* Main Container */}
            <div className="relative z-10 max-w-4xl w-full p-6">

                {/* Glass Card */}
                <div className="bg-white/60 backdrop-blur-2xl border border-white/40 rounded-[40px] shadow-[0_20px_80px_rgba(0,0,0,0.12)] p-8 md:p-10 text-center">

                    {/* Logo */}
                    {/* <div className="flex justify-center mb-8">
                        <Image
                            src="/assets/logo2.png"
                            alt="DriveFleet Logo"
                            width={180}
                            height={80}
                            className="object-contain"
                        />
                    </div> */}

                    {/* Image */}
                    <div className="flex justify-center ">
                        <Image
                            src="/assets/logo2.png"
                            alt="404 Illustration"
                            width={320}
                            height={220}
                            className="drop-shadow-2xl animate-pulse"
                        />
                    </div>

                    {/* 404 */}
                    <h1 className="text-7xl md:text-8xl font-black text-slate-800 leading-none">
                        404
                    </h1>

                    {/* Heading */}
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mt-5 leading-tight">
                        Page Not Found
                    </h2>

                    {/* Description */}
                    <p className="text-slate-600 text-lg leading-relaxed mt-6 max-w-2xl mx-auto">
                        The page you are looking for may have been removed,
                        renamed, or temporarily unavailable. Continue exploring
                        premium cars with DriveFleet.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-8">

                        <Link href="/">
                            <button className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 transition-all duration-300 shadow-lg hover:scale-105">
                                <FaArrowLeft />
                                Back To Home
                            </button>
                        </Link>

                        <Link href="/explore-cars">
                            <button className="border-2 cursor-pointer border-slate-300 hover:border-blue-400 hover:text-blue-500 text-slate-700 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:bg-white/50">
                                Explore Cars
                            </button>
                        </Link>

                    </div>

                </div>
            </div>
        </div>
    );
}