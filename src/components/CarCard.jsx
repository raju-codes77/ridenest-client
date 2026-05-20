import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdLocationOn, MdOutlineMyLocation } from 'react-icons/md';
import { PiSeatThin } from 'react-icons/pi';

const CarCard = ({ car }) => {
    const {_id, imageUrl, description, availability, carName, rentPrice, carType, seatCapacity,pickupLocation } = car;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure className="">
                    <Image src={imageUrl} alt='car' height={100} width={400} className='rounded-xl w-full h-ful object cover'></Image>
                </figure>
                <div className=" ">
                    <h2 className="card-title px-3">{carName}</h2>
                    <div className='px-3'>
                        <p className='text-gray-300'>{carType}</p>
                        <p><span className='text-primary font-semibold'>${rentPrice}</span>/day</p>
                    </div>
                    <div className="flex justify-between">
                        <div className='flex gap-2'>
                            <p className='flex gap-1 items-center'><PiSeatThin />{seatCapacity}</p>
                            <p className='flex gap-1 items-center'><MdLocationOn />{pickupLocation}</p>
                        </div>
                        <p className='flex gap-1 items-center'><MdOutlineMyLocation />{availability}</p>
                    </div>
                    <div className='flex justify-center py-4'>
                        <Link href={`/explore-cars/${_id}`}>      <button className='btn btn-primary'>Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarCard;