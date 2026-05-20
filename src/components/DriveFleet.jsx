import React from 'react';

const DriveFleet = () => {
    return (
        <div>
            <section className="py-20 bg-slate-950 text-white">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Section Heading */}
                    <div className="text-center mb-14">
                        <h2 className="text-4xl font-bold mb-4">
                            Why Choose <span className="text-blue-500">DriveFleet</span>
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            We provide premium quality vehicles, affordable pricing,
                            and a smooth booking experience for every journey.
                        </p>
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                        {/* Card 1 */}
                        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-500 transition duration-300">
                            <div className="w-16 h-16 bg-blue-600/20 flex items-center justify-center rounded-full mb-6">
                                🚗
                            </div>

                            <h3 className="text-2xl font-semibold mb-3">
                                Premium Cars
                            </h3>

                            <p className="text-slate-400">
                                Choose from luxury SUVs, sedans, hatchbacks,
                                and premium sports cars for every occasion.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-500 transition duration-300">
                            <div className="w-16 h-16 bg-blue-600/20 flex items-center justify-center rounded-full mb-6">
                                💳
                            </div>

                            <h3 className="text-2xl font-semibold mb-3">
                                Affordable Pricing
                            </h3>

                            <p className="text-slate-400">
                                Transparent pricing with no hidden charges
                                and flexible rental packages.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-500 transition duration-300">
                            <div className="w-16 h-16 bg-blue-600/20 flex items-center justify-center rounded-full mb-6">
                                🔒
                            </div>

                            <h3 className="text-2xl font-semibold mb-3">
                                Safe & Secure
                            </h3>

                            <p className="text-slate-400">
                                All vehicles are regularly inspected
                                and maintained for maximum safety.
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-500 transition duration-300">
                            <div className="w-16 h-16 bg-blue-600/20 flex items-center justify-center rounded-full mb-6">
                                ⏰
                            </div>

                            <h3 className="text-2xl font-semibold mb-3">
                                24/7 Support
                            </h3>

                            <p className="text-slate-400">
                                Our support team is always available
                                to help you anytime, anywhere.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default DriveFleet;