import BookingCard from '@/components/BookingCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react'
 const MyBookingsPage=async()=>{
       const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
})
const user=session?.user;

const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER}/booking/${user?.id}`)
const data=await res.json()
       return(
              <div className='max-w-7xl mx-auto space-y-4 mb-5'>
                     <h1 className='text-2xl text-green-400 font-bold'>My Bookings</h1>
                     {
                            data.map(booking=><BookingCard key={booking._id} booking={booking}/>)
                     }
              </div>
       )
};

export default MyBookingsPage;