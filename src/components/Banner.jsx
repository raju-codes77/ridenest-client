import Link from "next/link";
import React from "react";

const Banner = () => {
    return (
        <section
            className="hero min-h-screen relative overflow-hidden"
            style={{
                backgroundImage: "url('/assets/banner.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Slate + Blue Overlay */}
            <div className="absolute inset-0 bg-slate-950/60"></div>

            {/* Blue Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-550 via-slate-900/30 to-blue-550/60"></div>

            {/* Glow Effects */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>

            <div className="absolute bottom-10 right-10 w-80 h-80 bg-sky-500/20 blur-3xl rounded-full"></div>

            {/* Content */}
            <div className="hero-content relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 text-white">
                <div className="max-w-3xl">

                    {/* Tag */}
                    <div className="inline-block px-5 py-2 border border-white/10 bg-white/5 backdrop-blur-md rounded-full mb-6">
                        <p className="text-sm tracking-[4px] uppercase text-blue-400 font-medium">
                            Premium Car Rental
                        </p>
                    </div>

                    {/* Heading */}
                    <h1 className="text-5xl md:text-7xl font-black leading-tight">
                        Find Your
                        <span className="block text-blue-500">
                            Perfect Ride
                        </span>
                        With RideNest
                    </h1>

                    {/* Description */}
                    <p className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
                        Experience luxury, comfort, and speed with
                        premium cars designed for every journey.
                        Book your dream ride anytime, anywhere.
                    </p>

                    {/* Buttons */}
                    <div className="mt-10 flex flex-col sm:flex-row gap-5">
                        <Link
                            href="/explore-cars"
                            className="btn bg-blue-500 hover:bg-blue-600 border-none text-white btn-lg rounded-full px-8 shadow-xl shadow-blue-500/30"
                        >
                            Explore Cars
                        </Link>

                        <Link
                            href="/add-car"
                            className="btn btn-outline btn-lg rounded-full px-8 border-slate-400 text-white hover:bg-white hover:text-slate-900"
                        >
                            Add Your Car
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-10 mt-14">
                        <div>
                            <h2 className="text-3xl font-bold text-blue-400">
                                500+
                            </h2>
                            <p className="text-slate-300">
                                Premium Cars
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-blue-400">
                                24/7
                            </h2>
                            <p className="text-slate-300">
                                Customer Support
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-blue-400">
                                10k+
                            </h2>
                            <p className="text-slate-300">
                                Happy Clients
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-950 to-transparent"></div>
        </section>
    );
};

export default Banner;