import Image from 'next/image';
import Link from 'next/link';
import { MdLocationOn, MdOutlineMyLocation } from 'react-icons/md';
import { PiSeatThin } from 'react-icons/pi';


const CarDetailsPage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch(`http://localhost:5000/explore-cars/${id}`);
    const car = await res.json();
    const { _id, imageUrl, description, availability, carName, rentPrice, carType, seatCapacity, pickupLocation } = car;

    return (
        <div className="max-w-5xl mx-auto flex justify-center py-8">
            <div>

                <Image src={imageUrl} alt={carName} height={500} width={800} className='w-full mx-auto rounded-md'/>

                <div className=" max-w-5xl mx-auto">
                    <h2 className="card-title px-3">{carName}</h2>
                    <div className='px-3'>
                        <p className='text-gray-300'>{carType}</p>
                        <p><span className='text-primary font-semibold'>${rentPrice}</span>/day</p>
                    </div>
                    <p className='text-xl font-bold text-green-500'>Description</p>
                    <p>{description}</p>
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

export default CarDetailsPage;