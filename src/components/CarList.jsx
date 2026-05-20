import CarCard from '@/components/CarCard';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import CarListCard from './CarListCard';

const CarList =async () => {
    const res=await fetch('http://localhost:5000/cars')
    const cars=await res.json()
    const slicedCar=cars.slice(0,6)
    return (
        <div className='max-w-7xl mx-auto py-5'>
            <div className='flex justify-between py-4'>
              <h1 className='font-bold text-2xl'>Available  Cars</h1>
              <Link href={"/explore-cars"} className='text-primary flex gap-1 items-center font-bold text-xl'>View All  Cars <FaArrowRight /></Link>
            </div>
            <div className='grid md:grid-cols-3 gap-4 mx-auto'>
                {
                    slicedCar.map(car=><CarListCard key={car._id} car={car}></CarListCard>)
                }
            </div>
        </div>
    );
};

export default CarList;