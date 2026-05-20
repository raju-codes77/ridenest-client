import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdLocationOn, MdOutlineMyLocation } from "react-icons/md";
import { PiSeatThin } from "react-icons/pi";

const CarListCard = ({ car }) => {
  const {
    _id,
    imageUrl,
    carName,
    rentPrice,
    carType,
    seatCapacity,
    pickupLocation,
    availability,
  } = car;

  return (
    <div className="group card bg-base-100 w-96 shadow-md hover:shadow-2xl transition-all duration-300 rounded-xl overflow-hidden border border-gray-100">

      {/* Image */}
      <figure className="relative overflow-hidden">
        <Image
          src={imageUrl}
          alt="car"
          width={400}
          height={220}
          className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* overlay badge */}
        <div className="absolute top-3 left-3">
          <span className="badge badge-primary text-white">
            {carType}
          </span>
        </div>
      </figure>

      {/* Content */}
      <div className="p-4 space-y-3">

        {/* Title */}
        <h2 className="text-lg font-bold text-gray-800">
          {carName}
        </h2>

        {/* Price */}
        <p className="text-sm">
          <span className="text-primary font-bold text-lg">
            ${rentPrice}
          </span>
          <span className="text-gray-400"> / day</span>
        </p>

        {/* Info */}
        <div className="flex justify-between text-sm text-gray-600">

          <p className="flex items-center gap-1">
            <PiSeatThin className="text-lg" />
            {seatCapacity} Seats
          </p>

          <p className="flex items-center gap-1 truncate max-w-[140px]">
            <MdLocationOn />
            {pickupLocation}
          </p>

        </div>

        {/* Availability */}
        <div className="flex justify-between items-center">

          <p
            className={`text-xs font-semibold px-2 py-1 rounded-full ${
              availability === "available"
                ? "bg-green-100 text-green-600"
                : "bg-red-100 text-red-500"
            }`}
          >
            {availability}
          </p>

          <MdOutlineMyLocation className="text-gray-400" />
        </div>

        {/* Button */}
        <Link href={`/explore-cars/${_id}`}>
          <button className="btn btn-primary w-full mt-2 rounded-lg hover:scale-[1.02] transition">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CarListCard;