// app/error.jsx

"use client";

import Link from "next/link";
import Image from "next/image";
import { FaHome, FaRedoAlt } from "react-icons/fa";

export default function Error() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 via-slate-100 to-slate-300 px-4 overflow-hidden relative">

            {/* Background Blur */}
            <div className="absolute top-10 left-10 w-72 h-72 bg-blue-300/30 rounded-full blur-3xl"></div>

            <div className="absolute bottom-10 right-10 w-72 h-72 bg-slate-400/30 rounded-full blur-3xl"></div>

            {/* Center Card */}
            <div className="relative z-10 w-full max-w-2xl p-6">

                <div className="bg-white/70 backdrop-blur-2xl border border-white/40 rounded-[35px] shadow-[0_20px_80px_rgba(0,0,0,0.12)] px-8 md:px-14 py-12 text-center">

                    {/* Logo Image */}
                    <div className="flex justify-center mb-8">
                        <div className="bg-white shadow-xl rounded-full p-5 border border-slate-200">
                            <Image
                                src="/assets/logo2.png"
                                alt="DriveFleet Logo"
                                width={130}
                                height={130}
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Error Badge */}
                    <div className="inline-flex items-center gap-2 bg-red-100 border border-red-200 text-red-500 px-5 py-2 rounded-full text-sm font-semibold mb-6 shadow-sm">
                        ⚠️ System Error Detected
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl md:text-5xl font-black text-slate-800 leading-tight">
                        Something Went Wrong
                    </h1>

                    {/* Description */}
                    <p className="text-slate-600 text-lg leading-relaxed mt-5 max-w-xl mx-auto">
                        We encountered an unexpected issue while processing
                        your request. Please try again or return safely
                        to the homepage.
                    </p>

                    {/* Error Message */}
                    <div className="mt-8 bg-gradient-to-r from-red-50 to-red-100 border border-red-200 text-red-500 px-5 py-4 rounded-2xl text-sm font-medium shadow-sm">
                        "Unexpected Application Error"
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-10">

                        {/* Retry */}
                        {/* <button
                            onClick={() => reset()}
                            className="bg-blue-500 hover:bg-blue-600 text-white px-7 py-4 rounded-2xl font-semibold flex items-center gap-3 transition-all duration-300 shadow-lg hover:scale-105"
                        >
                            <FaRedoAlt />
                            Try Again
                        </button> */}

                        {/* Home */}
                        <Link href="/">
                            <button className="border-2 border-slate-300 hover:border-blue-400 hover:text-blue-500 text-slate-700 px-7 py-4 rounded-2xl font-semibold transition-all duration-300 hover:bg-white/60 flex items-center gap-3">
                                <FaHome />
                                Back To Home
                            </button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
}