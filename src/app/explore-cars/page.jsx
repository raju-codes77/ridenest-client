import CarCard from '@/components/CarCard';
import CarListCard from '@/components/CarListCard';
import React from 'react';

const exploreCarsPage =async () => {
    const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER}/all-cars`)
    const cars=await res.json()
    return (
        <div className='max-w-7xl mx-auto py-5'>
            <h1 className='font-bold text-2xl'>Explore Cars</h1>
            <div className='grid md:grid-cols-3 gap-4'>
                {
                    cars.map(car=><CarListCard key={car._id} car={car}></CarListCard>)
                }
            </div>
        </div>
    );
};

export default exploreCarsPage;