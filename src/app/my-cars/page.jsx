import CarCard from '@/components/CarCard';
import CarListCard from '@/components/CarListCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const MyAddedCars =async () => {
    const {token}=await auth.api.getToken({
            headers:await headers()
        })
    const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER}/cars`)
    const cars=await res.json()
    return (
        <div className='max-w-7xl mx-auto py-5'>
            <h1 className='font-bold text-2xl py-4 text-primary'>My Added Cars</h1>
            <div className='grid md:grid-cols-3 gap-4'>
                {
                    cars.map(car=><CarCard key={car._id} car={car}></CarCard>)
                }
            </div>
        </div>
    );
};

export default MyAddedCars;