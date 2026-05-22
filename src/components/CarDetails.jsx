"use client"
import { DeleteAlert } from "@/components/DeleteAlert";
import { EditModal } from "@/components/EditModal";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { MdLocationOn, MdOutlineMyLocation } from "react-icons/md";
import { PiSeatThin } from "react-icons/pi";
import { DateField, FieldError, Label } from "@heroui/react";
import { useState } from "react";
import { authClient } from "@/app/explore-cars/[id]/auth-client";
import { toast } from "react-toastify";
const CarDetails = ({ car }) => {
       const {
               data: session,
               isPending, //loading state
               error, //error object
               refetch //refetch the session
           } = authClient.useSession()
       
           const user = session?.user;
       const {
              imageUrl,
              description,
              availability,
              carName,
              rentPrice,
              carType,
              seatCapacity,
              pickupLocation,
              _id
       } = car;

       const [date,setDate]=useState(null);

       const handleBooking=async()=>{
              const bookingData={
                     userId:user?.id,
                     userImage:user?.image,
                     name:user?.name,
                     _id,
                     carName,
                     rentPrice,
                     imageUrl,
                     bookingDate:new Date(date)

              }
             const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER}/booking`,{
              method:"POST",
              headers:{
                     'content-type':'application/json'
              },
              body:JSON.stringify(bookingData)
             })
             const data=await res.json();
             toast.success("Booking Succesfull")
       }
       return (
              <>
                     {/* Top Actions */}
                    

                     {/* Main Layout */}
                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

                            {/* Left Side Image */}
                            <div className=" top-24">
                                   <div className="relative items-center overflow-hidden rounded-3xl shadow-2xl border border-base-200">

                                          <Image
                                                 src={imageUrl}
                                                 alt={carName}
                                                 width={800}
                                                 height={700}
                                                 className="w-full h-[300px] md:h-[500px] lg:h-[600px] object-cover hover:scale-105 transition-transform duration-700"
                                          />

                                          {/* Car Type Badge */}
                                          <div className="absolute top-5 left-5">
                                                 <span className="badge badge-primary text-white px-5 py-4">
                                                        {carType}
                                                 </span>
                                          </div>
                                   </div>
                            </div>

                            {/* Right Side Details */}
                            <div className="space-y-6">

                                   {/* Title */}
                                   <div>
                                          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                                                 {carName}
                                          </h1>

                                          <p className="text-gray-400 mt-3 text-lg">
                                                 Premium Car Rental Experience
                                          </p>
                                   </div>

                                   {/* Price Card */}
                                   <div className="bg-primary/10 border border-primary/20 rounded-3xl p-6">

                                          <p className="text-gray-400 text-sm">
                                                 Daily Rental Price
                                          </p>

                                          <h2 className="text-5xl font-extrabold text-primary mt-2">
                                                 ${rentPrice}

                                                 <span className="text-lg text-gray-400 font-medium">
                                                        /day
                                                 </span>
                                          </h2>
                                   </div>

                                   {/* Info Cards */}
                                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                                          {/* Seats */}
                                          <div className="bg-base-200 rounded-2xl p-5 flex items-center gap-4">
                                                 <PiSeatThin className="text-4xl text-primary" />

                                                 <div>
                                                        <p className="text-sm text-gray-400">
                                                               Seat Capacity
                                                        </p>

                                                        <h3 className="font-bold text-lg">
                                                               {seatCapacity} Seats
                                                        </h3>
                                                 </div>
                                          </div>

                                          {/* Location */}
                                          <div className="bg-base-200 rounded-2xl p-5 flex items-center gap-4">
                                                 <MdLocationOn className="text-4xl text-primary" />

                                                 <div>
                                                        <p className="text-sm text-gray-400">
                                                               Pickup Location
                                                        </p>

                                                        <h3 className="font-bold text-lg">
                                                               {pickupLocation}
                                                        </h3>
                                                 </div>
                                          </div>

                                          {/* Availability */}
                                          <div className="bg-base-200 rounded-2xl p-5 flex items-center gap-4 sm:col-span-2">
                                                 <MdOutlineMyLocation className="text-4xl text-primary" />

                                                 <div>
                                                        <p className="text-sm text-gray-400">
                                                               Availability Status
                                                        </p>

                                                        <h3
                                                               className={`font-bold text-lg ${availability === "available"
                                                                      ? "text-green-500"
                                                                      : "text-red-500"
                                                                      }`}
                                                        >
                                                               {availability}
                                                        </h3>
                                                 </div>
                                          </div>
                                   </div>

                                   {/* Description */}
                                   <div className="bg-base-200 rounded-3xl p-6">
                                          <h2 className="text-2xl text-green-500 font-bold mb-4">
                                                 Description
                                          </h2>

                                          <p className="text-gray-400 leading-8 text-justify">
                                                 {description}
                                          </p>
                                   </div>

                                   {/* Button */}
                                   <div className="pt-2">
                                          <div className="mt-8 bg-base-100 border border-base-200 rounded-3xl shadow-lg p-6">

                                                 <h2 className="text-2xl font-bold mb-6">
                                                        Book This Car
                                                 </h2>

                                                 <form className="space-y-5">

                                                        <div>
                                                               <label className="block mb-2 font-medium">
                                                                      Booking Date
                                                               </label>

                                                               <DateField onChange={setDate} isInvalid isRequired className="w-[256px]" name="date">
                                                                      <Label>Date</Label>
                                                                      <DateField.Group>
                                                                             <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                                                                      </DateField.Group>
                                                                      <FieldError>Please enter a valid date</FieldError>
                                                               </DateField>
                                                        </div>

                                                        <div>
                                                               <label className="block mb-2 font-medium">
                                                                      Driver Needed?
                                                               </label>

                                                               <select className="select select-bordered w-full rounded-xl">
                                                                      <option>Yes</option>
                                                                      <option>No</option>
                                                               </select>
                                                        </div>

                                                        <div>
                                                               <label className="block mb-2 font-medium">
                                                                      Special Note
                                                               </label>

                                                               <textarea
                                                                      placeholder="Write special instructions..."
                                                                      className="textarea textarea-bordered w-full rounded-xl h-28"
                                                               ></textarea>
                                                        </div>

                                                        <button onClick={handleBooking} className="btn btn-success w-full rounded-xl text-white">
                                                               Book Now<FiArrowUpRight />

                                                        </button>

                                                 </form>
                                          </div>
                                   </div>
                            </div>
                     </div>
              </>
       );
};

export default CarDetails;