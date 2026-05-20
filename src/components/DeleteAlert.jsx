"use client";

import {AlertDialog, Button} from "@heroui/react";
import { redirect } from "next/navigation";
import { MdDeleteOutline } from "react-icons/md";

export function DeleteAlert({car}) {
  const {carName,_id}=car;
  const handleDelete=async()=>{
     const res = await fetch(`http://localhost:5000/explore-cars/${_id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
           
        })
        const data = await res.json()
        redirect('/explore-cars')
  }
  return (
    <AlertDialog>
      <Button variant="danger"><MdDeleteOutline />Delete Car</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete Car permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{carName} </strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Delete Car
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}