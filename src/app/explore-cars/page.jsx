"use client"

import CarListCard from '@/components/CarListCard';
import React, { useEffect, useState } from 'react';


const exploreCarsPage =  () => {
    const [cars,setCars]=useState([]);
    const [search,setSearch]=useState("");
    const [type,setType]=useState("");
    
    useEffect(()=>{
        getCars();
    },[search,type]);

    const getCars=async()=>{
        let url=`${process.env.NEXT_PUBLIC_SERVER}/all-cars?`
        if(search){
            url=url+`searchParams=${search}&`;
        }
        if(type && type!=="all"){
        url=url+`carType=${type}`; 
        }
        const res=await fetch(url);
    const data = await res.json();
    setCars(data);
    }
    // const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/all-cars`)
    
    return (
        <div className='max-w-7xl mx-auto py-5'>
            <h1 className='font-bold text-2xl'>Explore Cars</h1>
            <div>
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 p-5 md:p-6">

                        <div className="flex flex-col lg:flex-row gap-4 items-center">

                            {/* Search Input */}
                            <div className="w-full flex-1">
                                <input
                                    type="text"
                                    placeholder="Search car by name..."
                                    onChange={(e)=>setSearch(e.target.value)}
                                    className="input input-bordered w-full h-14 rounded-2xl border-slate-300 focus:border-blue-500 focus:outline-none text-base shadow-sm"
                                />
                            </div>

                            {/* Filter Select */}
                            <div className="w-full lg:w-72">
                                <select
                                    defaultValue=""
                                 onChange={(e)=>setType(e.target.value)}

                                    className="select select-bordered w-full h-14 rounded-2xl border-slate-300 focus:border-blue-500 focus:outline-none text-base shadow-sm"
                                >
                                    <option value="" disabled>
                                        Filter by car type
                                    </option>

                                    <option value="all">All Types</option>
                                    <option value="SUV">SUV</option>
                                    <option value="Sedan">Sedan</option>
                                    <option value="Sports">Sports</option>
                                    <option value="Luxury">Luxury</option>
                                    <option value="Electric">Electric</option>
                                </select>
                            </div>

                            {/* Search Button */}
                            {/* <button className="btn h-14 px-10 rounded-2xl border-0 text-white bg-gradient-to-r from-blue-400 to-slate-400 shadow-lg hover:scale-105 transition-transform duration-300">
                                Search
                            </button> */}

                        </div>
                    </div>
                </div>
            </div>
            <div className={`${cars.length > 0 ? "grid md:grid-cols-3 gap-4 justify-center" : "flex justify-center items-center"}`}>
                {
                 cars.length>0?(   cars.map(car => <CarListCard key={car._id} car={car}></CarListCard>) ):<>
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
                                    No  Car Found
                                </h2>

                                {/* Description */}
                                <p className="mt-4 text-gray-500 leading-7">
                                     Haven’t Found any premium car based on your search or type.
                                  Select All to  Explore luxury vehicles and reserve your next ride today.
                                </p>

                                {/* Button */}
                                <div className="mt-8">

                                    <button className="rounded-2xl bg-gradient-to-r from-blue-500 to-slate-600 px-8 py-3 font-semibold text-white shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300">
                                        Explore Cars
                                    </button>

                                </div>

                            </div>
                        </div>
                    </div>
                 </>
                }
            </div>
        </div>
    );
};

export default exploreCarsPage;