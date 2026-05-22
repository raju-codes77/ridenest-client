import CarCard from '@/components/CarCard';
import CarListCard from '@/components/CarListCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const MyAddedCars = async () => {
    const { token } = await auth.api.getToken({
        headers: await headers()
    })
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/cars`)
    const cars = await res.json()
    const carsCount = cars.length;
    return (
        <div className='max-w-7xl mx-auto py-5'>
            <h1 className='font-bold text-2xl py-4 text-primary'>My Added Cars</h1>
            <div className={`${carsCount > 0 ? "grid md:grid-cols-3 gap-4 justify-center" : "flex justify-center items-center"}`}>
                {
                    carsCount > 0 ? (<> {cars.map(car => <CarCard key={car._id} car={car}></CarCard>)} </>) : <>
                    <div className="flex items-center justify-center py-16">

                        <div className="w-full max-w-lg rounded-3xl bg-gradient-to-br from-blue-400 to-slate-400 p-[1px] shadow-2xl">

                            <div className="rounded-3xl bg-white/90 backdrop-blur-xl px-10 py-14 text-center">

                                {/* Icon */}
                                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-slate-500 shadow-lg">

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.8}
                                        stroke="currentColor"
                                        className="h-10 w-10 text-white"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M8.25 18.75h7.5M5.25 15.75h13.5M6 15.75l1.125-4.5A2.25 2.25 0 0 1 9.3 9.75h5.4a2.25 2.25 0 0 1 2.175 1.5L18 15.75M7.5 18.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm10.5 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                                        />
                                    </svg>

                                </div>

                                {/* Heading */}
                                <h2 className="text-3xl font-extrabold bg-gradient-to-r from-blue-500 to-slate-600 bg-clip-text text-transparent">
                                    No Added Car Found
                                </h2>

                                {/* Description */}
                                <p className="mt-4 text-gray-500 leading-7">
                                    You haven’t added any premium car yet.
                                    Explore luxury vehicles and reserve your next ride today.
                                </p>

                                {/* Button */}
                                <div className="mt-8">

                                    <button className="rounded-2xl bg-gradient-to-r from-blue-500 to-slate-600 px-8 py-3 font-semibold text-white shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300">
                                        Explore Cars
                                    </button>

                                </div>

                            </div>
                        </div>
                    </div></>
                }
            </div>
        </div>
    );
};

export default MyAddedCars;