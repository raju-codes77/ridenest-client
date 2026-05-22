import BookingCard from '@/components/BookingCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Link from 'next/link';
import React from 'react'
 const MyBookingsPage=async()=>{
       const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
})
const user=session?.user;

const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER}/booking/${user?.id}`)
const data=await res.json()
const carCount=data.length;

       return(
              <div className='max-w-7xl mx-auto space-y-4 mb-5'>
                     <h1 className='text-2xl text-green-400 font-bold'>My Bookings</h1>
                     {
                         carCount>0?(<> { data.map(booking=><BookingCard key={booking._id} booking={booking}/>)}</>) :(<><div className="flex items-center justify-center py-16">
  
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
            d="M8.25 18.75a1.5 1.5 0 0 1-1.5-1.5V6.75a1.5 1.5 0 0 1 1.5-1.5h10.5a1.5 1.5 0 0 1 1.5 1.5v10.5a1.5 1.5 0 0 1-1.5 1.5H8.25Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 8.25h9"
          />
        </svg>

      </div>

      {/* Heading */}
      <h2 className="text-3xl font-extrabold bg-gradient-to-r from-blue-500 to-slate-600 bg-clip-text text-transparent">
        No Booking Car Found
      </h2>

      {/* Description */}
      <p className="mt-4 text-gray-500 leading-7">
        You haven’t booked any premium car yet.
        Explore luxury vehicles and reserve your next ride today.
      </p>

      {/* Button */}
      <div className="mt-8">

       <Link href={"/explore-cars"}> <button className="cursor-pointer rounded-2xl bg-gradient-to-r from-blue-500 to-slate-600 px-8 py-3 font-semibold text-white shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300">
          Explore Cars
        </button></Link>

      </div>

    </div>
  </div>
</div></>)
                     }
              </div>
       )
};

export default MyBookingsPage;