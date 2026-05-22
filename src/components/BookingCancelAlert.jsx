"use client";

import {AlertDialog, Button} from "@heroui/react";
import { redirect } from "next/navigation";
import { FiTrash2 } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { toast } from "react-toastify";

export function BookingCancelAlert({bookingId}) {
   
  
  const handleDelete=async()=>{
       
     const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/booking/${bookingId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
           
        })
        const data = await res.json()
        toast.success("Booking Canceled Sucessfully")
        redirect('/my-bookings')
        
  }
  return (
    <AlertDialog>
   <Button
            
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-500/90 hover:bg-red-600 text-white shadow-md hover:scale-105 transition"
          >
            <FiTrash2 />
            Cancel
          </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete Booking permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>your booking </strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Cancel  Booking
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}