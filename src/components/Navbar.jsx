"use client"
import { authClient } from '@/app/explore-cars/[id]/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ArrowRightFromSquare, Car, Gear, Persons } from "@gravity-ui/icons";
import { Avatar, Dropdown, Label } from "@heroui/react";
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const Navbar = () => {
    const router = useRouter();

    const { data: session } = authClient.useSession();

    const user = session?.user;

    const handleSignOut = async () => {
        await authClient.signOut();
       
        toast.error("Please login again to see private data")
        router.push("/login")
    };

    const navItems = (
        <>
            <Link className="font-semibold mx-2 px-4 py-2 text-cyan-400 hover:bg-blue-500/10 hover:backdrop-blur-xl hover:text-slate-500 hover:shadow-md hover:shadow-blue-500/20 rounded-xl transition-all duration-300 active:scale-90" href="/">Home</Link>

            <Link className="font-semibold mx-2 px-4 py-2 text-cyan-400  hover:bg-blue-500/10 hover:backdrop-blur-xl hover:text-cyan-500 hover:shadow-md hover:shadow-blue-500/20 rounded-xl transition-all duration-300 active:scale-90" href="/explore-cars">Explore Cars</Link>

            <Link className="font-semibold mx-2 px-4 py-2 text-cyan-400 text-cyan-400  hover:bg-blue-500/10 hover:backdrop-blur-xl hover:text-cyan-500 hover:shadow-md hover:shadow-blue-500/20 rounded-xl transition-all duration-300 active:scale-90" href="/my-cars">My Added Cars</Link>

            <Link className="font-semibold mx-2 px-4 py-2 text-cyan-400 text-cyan-400  hover:bg-blue-500/10 hover:backdrop-blur-xl hover:text-cyan-500 hover:shadow-md hover:shadow-blue-500/20 rounded-xl transition-all duration-300 active:scale-90" href="/add-car">Add Car</Link>

            <Link className="font-semibold mx-2 px-4 py-2 text-cyan-400 text-cyan-400  hover:bg-blue-500/10 hover:backdrop-blur-xl hover:text-cyan-500 hover:shadow-md hover:shadow-blue-500/20 rounded-xl transition-all duration-300 active:scale-90" href="/my-bookings">My Bookings</Link>
        </>
    );

    return (
        <div className="sticky top-0 z-[9999] w-full">
            <div className="max-lg:collapse bg-white/10 backdrop-blur-2xl border-b border-white/10 shadow-lg">

                <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />

                <label
                    htmlFor="navbar-1-toggle"
                    className="fixed inset-0 hidden max-lg:peer-checked:block bg-black/30 backdrop-blur-sm"
                />

                <div className="collapse-title navbar px-4 lg:px-8 py-2">

                    {/* Left */}
                    <div className="navbar-start">
                        <label
                            htmlFor="navbar-1-toggle"
                            className="btn btn-ghost lg:hidden text-cyan-500"
                        >
                            ☰
                        </label>

                        <Image
                            src="/assets/logo2.png"
                            alt="logo"
                            height={40}
                            width={120}
                            className="object-contain"
                        />
                    </div>

                    {/* Center */}
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-3">
                            {navItems}
                        </ul>
                    </div>

                    {/* Right */}
                    <div className="navbar-end">

                        {user && (
                            <div className="mx-3 hidden md:block text-black">
                                Hello, <span className="font-extrabold bg-gradient-to-r from-blue-500 to-slate-600 bg-clip-text text-transparent">{user.name}</span>
                            </div>
                        )}

                        <Dropdown>
                            <Dropdown.Trigger className="rounded-full cursor-pointer">
                                <Avatar className="ring-2 ring-cyan-400/50">
                                    <Avatar.Image
                                        alt="User"
                                        src={user?.image || "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/orange.jpg"}
                                    />
                                    <Avatar.Fallback delayMs={600}>JD</Avatar.Fallback>
                                </Avatar>
                            </Dropdown.Trigger>

                            <Dropdown.Popover>
                                <div className="px-3 pt-3 pb-1">
                                    <div className="flex items-center gap-2">

                                        <Avatar size="sm">
                                            <Avatar.Image
                                                alt="User"
                                                src={user?.image || "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/orange.jpg"}
                                            />
                                            <Avatar.Fallback delayMs={600}>JD</Avatar.Fallback>
                                        </Avatar>

                                        <div className="flex flex-col gap-0">
                                            {user && (
                                                <>
                                                    <p className="text-sm font-medium">{user.name}</p>
                                                    <p className="text-xs text-muted">{user.email}</p>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <Dropdown.Menu>
                                    {user ? (
                                        <>
                                            <Dropdown.Item onPress={() => router.push("/my-cars")}>
                                                <div className="flex justify-between w-full">
                                                    <Label>My Added Cars</Label>
                                                    <Gear className="size-3.5" />
                                                </div>
                                            </Dropdown.Item>

                                            <Dropdown.Item onPress={() => router.push("/add-car")}>
                                                <div className="flex justify-between w-full">
                                                    <Label>Add Cars</Label>
                                                    <Car className="size-3.5" />
                                                </div>
                                            </Dropdown.Item>

                                            <Dropdown.Item onPress={() => router.push("/my-bookings")}>
                                                <div className="flex justify-between w-full">
                                                    <Label>My Bookings</Label>
                                                    <Persons className="size-3.5" />
                                                </div>
                                            </Dropdown.Item>

                                            <Dropdown.Item  variant="danger" onPress={handleSignOut}>
                                                <div className="flex justify-between w-full">
                                                    <Label>Log Out</Label>
                                                    <ArrowRightFromSquare className="size-3.5" />
                                                </div>
                                            </Dropdown.Item>
                                        </>
                                    ) : (
                                        <>
                                            <Dropdown.Item onPress={() => router.push("/login")}>
                                                <Label>Login</Label>
                                            </Dropdown.Item>

                                            <Dropdown.Item onPress={() => router.push("/signup")}>
                                                <Label>SignUp</Label>
                                            </Dropdown.Item>
                                        </>
                                    )}
                                </Dropdown.Menu>
                            </Dropdown.Popover>
                        </Dropdown>
                    </div>
                </div>

                {/* Mobile */}
                <div className="collapse-content lg:hidden bg-black/20 backdrop-blur-xl">
                    <ul className="menu py-4">
                        {navItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;