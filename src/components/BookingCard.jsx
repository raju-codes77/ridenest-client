"use client";

import React from "react";
import { FiTrash2, FiEye } from "react-icons/fi";

const BookingCard = ({ booking, onCancel, onView }) => {
  const { bookingDate, rentPrice, carName, status = "confirmed" } = booking || {};

  const date = bookingDate ? new Date(bookingDate) : null;

  const statusStyles = {
    confirmed: "bg-green-100 text-green-700",
    pending: "bg-yellow-100 text-yellow-700",
    cancelled: "bg-red-100 text-red-700",
  };

  return (
    <div className="relative group rounded-3xl p-[1px] bg-gradient-to-r from-primary/30 via-secondary/20 to-primary/30 hover:shadow-2xl transition-all duration-300">

      {/* Inner Card */}
      <div className="rounded-3xl bg-base-100 p-6 backdrop-blur-xl relative overflow-hidden">

        {/* Soft Glow */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition"></div>

        {/* Header */}
        <div className="flex justify-between items-start">

          <div>
            <h2 className="text-2xl font-bold text-primary tracking-tight">
              {carName || "Unknown Car"}
            </h2>

            <p className="text-xs text-gray-400 mt-1">
              Booking ID: #{booking?._id?.slice(-6) || "N/A"}
            </p>
          </div>

          {/* Status Badge */}
          <span
            className={`px-3 py-1 text-xs font-semibold rounded-full ${
              statusStyles[status] || "bg-gray-100 text-gray-600"
            }`}
          >
            {status}
          </span>
        </div>

        {/* Price Section */}
        <div className="mt-5">
          <p className="text-sm text-gray-400">Total Payment</p>
          <h3 className="text-3xl font-extrabold text-green-600">
            ${rentPrice || 0}
          </h3>
        </div>

        {/* Date Section */}
        <div className="mt-4">
          <p className="text-sm text-gray-400">Booking Date</p>
          <p className="text-md font-medium text-blue-500">
            {date ? date.toDateString() : "No Date"}
          </p>
        </div>

        {/* Divider */}
        <div className="my-5 border-t border-base-200"></div>

        {/* Actions */}
        <div className="flex justify-between items-center">

          {/* View */}
          <button
            onClick={() => onView?.(booking)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-500/90 hover:bg-blue-600 text-white shadow-md hover:scale-105 transition"
          >
            <FiEye />
            View Details
          </button>

          {/* Cancel */}
          <button
            onClick={() => onCancel?.(booking)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-500/90 hover:bg-red-600 text-white shadow-md hover:scale-105 transition"
          >
            <FiTrash2 />
            Cancel
          </button>

        </div>
      </div>
    </div>
  );
};

export default BookingCard;