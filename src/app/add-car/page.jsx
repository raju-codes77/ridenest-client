'use client'
import { Button, FieldError, Input, Label, ListBox, TextArea, TextField, Select, Card } from '@heroui/react';
import React from 'react';

const carAddedPage = () => {
    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const carData = Object.fromEntries(formData.entries())

        const res = await fetch('http://localhost:5000/cars', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(carData)
        })
        const data = await res.json()
        console.log(data)

    }
    return (
        <div className='p-5 max-w-6xl mx-auto'>
            <h1 className='font-bold text-2xl '>Add Car</h1>
            <Card className=''>
                <form onSubmit={onSubmit} className="p-5  space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* Car Name */}
                        <div className="md:col-span-2">
                            <TextField name="carName" isRequired>
                                <Label>Car Name</Label>
                                <Input placeholder="Toyota Corolla 2022" className="rounded-2xl" />
                                <FieldError />
                            </TextField>
                        </div>

                        {/* Daily Rent Price */}
                        <TextField name="rentPrice" type="number" isRequired>
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
                            <TextField name="imageUrl" isRequired>
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
                            <TextField name="description" isRequired>
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
                    <Button
                        type="submit"
                        variant="outline"

                        className="rounded-none w-full bg-cyan-500 text-white"
                    >
                        Add Car
                    </Button>
                </form>
            </Card>
        </div>
    );
};

export default carAddedPage;