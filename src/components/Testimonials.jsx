import React from 'react';

const Testimonials = () => {
    return (
        <div>
            <section className="py-20 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Heading */}
                    <div className="text-center mb-14">
                        <h2 className="text-4xl font-bold mb-4">
                            What Our <span className="text-blue-500">Customers Say</span>
                        </h2>

                        <p className="text-slate-400 max-w-2xl mx-auto">
                            Thousands of happy customers trust DriveFleet
                            for their business trips, vacations, and daily travel needs.
                        </p>
                    </div>

                    {/* Testimonials */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {/* Review 1 */}
                        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8">
                            <div className="flex items-center gap-4 mb-5">
                                <img
                                    src="https://i.ibb.co/qRz0V6B/user1.jpg"
                                    alt="user"
                                    className="w-14 h-14 rounded-full object-cover"
                                />

                                <div>
                                    <h4 className="font-semibold text-lg">
                                        Michael Carter
                                    </h4>
                                    <p className="text-slate-400 text-sm">
                                        Business Traveler
                                    </p>
                                </div>
                            </div>

                            <p className="text-slate-300 leading-relaxed">
                                “Amazing experience! The booking process was smooth,
                                and the car condition was absolutely perfect.”
                            </p>

                            <div className="mt-5 text-yellow-400 text-xl">
                                ⭐⭐⭐⭐⭐
                            </div>
                        </div>

                        {/* Review 2 */}
                        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8">
                            <div className="flex items-center gap-4 mb-5">
                                <img
                                    src="https://i.ibb.co/G9zD7xN/user2.jpg"
                                    alt="user"
                                    className="w-14 h-14 rounded-full object-cover"
                                />

                                <div>
                                    <h4 className="font-semibold text-lg">
                                        Sarah Johnson
                                    </h4>
                                    <p className="text-slate-400 text-sm">
                                        Travel Blogger
                                    </p>
                                </div>
                            </div>

                            <p className="text-slate-300 leading-relaxed">
                                “DriveFleet gave us a premium SUV for our family trip.
                                Clean car, affordable price, and great support.”
                            </p>

                            <div className="mt-5 text-yellow-400 text-xl">
                                ⭐⭐⭐⭐⭐
                            </div>
                        </div>

                        {/* Review 3 */}
                        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8">
                            <div className="flex items-center gap-4 mb-5">
                                <img
                                    src="https://i.ibb.co/f9xqK4T/user3.jpg"
                                    alt="user"
                                    className="w-14 h-14 rounded-full object-cover"
                                />

                                <div>
                                    <h4 className="font-semibold text-lg">
                                        David Miller
                                    </h4>
                                    <p className="text-slate-400 text-sm">
                                        Entrepreneur
                                    </p>
                                </div>
                            </div>

                            <p className="text-slate-300 leading-relaxed">
                                “One of the best car rental platforms I’ve used.
                                Fast booking and excellent customer service.”
                            </p>

                            <div className="mt-5 text-yellow-400 text-xl">
                                ⭐⭐⭐⭐⭐
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Testimonials;