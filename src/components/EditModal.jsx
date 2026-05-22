"use client";

import { Envelope } from "@gravity-ui/icons";

import { Button, FieldError, Modal, Input, Label, Surface, ListBox, TextArea, TextField, Select, Card } from '@heroui/react';
import { FaEdit } from "react-icons/fa";


export function EditModal({ car }) {
    const { _id, imageUrl, description, availability, carName, rentPrice, carType, seatCapacity, pickupLocation } = car;

    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const carData = Object.fromEntries(formData.entries())

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/explore-cars/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(carData)
        })
        const data = await res.json()


    }
    return (
        <Modal>

            <Button
                variant="secondary"
                className="group relative flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 text-white font-medium shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300 overflow-hidden"
            >
                <FaEdit className="group-hover:rotate-12 transition-transform duration-300" />
                Edit
            </Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <Envelope className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Edit Car Details </Modal.Heading>

                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form onSubmit={onSubmit} className="p-5  space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                                        {/* Car Name */}
                                        <div className="md:col-span-2">
                                            <TextField defaultValue={carName} name="carName" isRequired>
                                                <Label >Car Name</Label>
                                                <Input placeholder="Toyota Corolla 2022" className="rounded-2xl" />
                                                <FieldError />
                                            </TextField>
                                        </div>

                                        {/* Daily Rent Price */}
                                        <TextField defaultValue={rentPrice} name="rentPrice" type="number" isRequired>
                                            <Label>Daily Rent Price (USD)</Label>
                                            <Input type="number" placeholder="50" className="rounded-2xl" />
                                            <FieldError />
                                        </TextField>

                                        {/* Car Type */}
                                        <div>
                                            <Select name="carType" isRequired className="w-full" placeholder="Select car type">
                                                <Label>Car Type</Label>
                                                <Select.Trigger className="rounded-2xl">
                                                    <Select.Value />
                                                    <Select.Indicator />
                                                </Select.Trigger>
                                                <Select.Popover>
                                                    <ListBox>
                                                        <ListBox.Item id="SUV" textValue="SUV">SUV</ListBox.Item>
                                                        <ListBox.Item id="Sedan" textValue="Sedan">Sedan</ListBox.Item>
                                                        <ListBox.Item id="Hatchback" textValue="Hatchback">Hatchback</ListBox.Item>
                                                        <ListBox.Item id="Luxury" textValue="Luxury">Luxury</ListBox.Item>
                                                        <ListBox.Item id="Coupe" textValue="Coupe">Coupe</ListBox.Item>
                                                        <ListBox.Item id="Van" textValue="Van">Van</ListBox.Item>
                                                    </ListBox>
                                                </Select.Popover>
                                            </Select>
                                        </div>

                                        {/* Seat Capacity */}
                                        <TextField name="seatCapacity" type="number" isRequired>
                                            <Label>Seat Capacity</Label>
                                            <Input type="number" placeholder="4" className="rounded-2xl" />
                                            <FieldError />
                                        </TextField>

                                        {/* Pickup Location */}
                                        <TextField name="pickupLocation" isRequired>
                                            <Label>Pickup Location</Label>
                                            <Input placeholder="Dhaka Airport / Gulshan" className="rounded-2xl" />
                                            <FieldError />
                                        </TextField>

                                        {/* Availability Status */}
                                        <div>
                                            <Select name="availability" isRequired className="w-full" placeholder="Select availability">
                                                <Label>Availability Status</Label>
                                                <Select.Trigger className="rounded-2xl">
                                                    <Select.Value />
                                                    <Select.Indicator />
                                                </Select.Trigger>
                                                <Select.Popover>
                                                    <ListBox>
                                                        <ListBox.Item id="Available" textValue="Available">Available</ListBox.Item>
                                                        <ListBox.Item id="Unavailable" textValue="Unavailable">Unavailable</ListBox.Item>
                                                        <ListBox.Item id="Maintenance" textValue="Maintenance">Maintenance</ListBox.Item>
                                                    </ListBox>
                                                </Select.Popover>
                                            </Select>
                                        </div>

                                        {/* Image URL */}
                                        <div className="md:col-span-2">
                                            <TextField defaultValue={imageUrl} name="imageUrl" isRequired>
                                                <Label>Car Image URL</Label>
                                                <Input

                                                    type="url"
                                                    placeholder="https://imgbb.com/your-car-image.jpg"
                                                    className="rounded-2xl"
                                                />
                                                <FieldError />
                                            </TextField>
                                        </div>

                                        {/* Description */}
                                        <div className="md:col-span-2">
                                            <TextField defaultValue={description} name="description" isRequired>
                                                <Label>Description</Label>
                                                <TextArea
                                                    placeholder="Write details about the car, features, comfort, etc..."
                                                    className="rounded-3xl"
                                                />
                                                <FieldError />
                                            </TextField>
                                        </div>

                                    </div>

                                    {/* Submit Button */}
                                    <Modal.Footer>
                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>
                                        <Button type="submit" slot="close">Update Details</Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}