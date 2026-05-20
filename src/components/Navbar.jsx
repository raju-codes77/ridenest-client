"use client"
import { authClient } from '@/app/explore-cars/[id]/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ArrowRightFromSquare, Car, Gear, Persons } from "@gravity-ui/icons";
import { Avatar, Dropdown, Label } from "@heroui/react";
import { useRouter } from 'next/navigation';
const Navbar = () => {
    const router = useRouter()
    const {
        data: session,
        isPending, //loading state
        error, //error object
        refetch //refetch the session
    } = authClient.useSession()

    const user = session?.user
    const handleSignOut = async () => {
        await authClient.signOut();
    }

    const navItems = (<>

        <Link className='font-semibold mx-2 p-2 hover:bg-linear-to-r hover:from-blue-500 hover:to-slate-500 hover:text-white rounded-md active:scale-90 ' href={"/"}>Home</Link>
        <Link className='font-semibold mx-2 p-2 hover:bg-linear-to-r hover:from-blue-500 hover:to-slate-500 hover:text-white rounded-md active:scale-90 ' href={"/explore-cars"}>Explore Cars</Link>
        <Link className='font-semibold mx-2 p-2 hover:bg-linear-to-r hover:from-blue-500 hover:to-slate-500 hover:text-white rounded-md active:scale-90 ' href={"/add-car"}>Add Car</Link>
        <Link className='font-semibold mx-2 p-2 hover:bg-linear-to-r hover:from-blue-500 hover:to-slate-500 hover:text-white rounded-md active:scale-90 ' href={"/my-bookings"}>My Bookings</Link>


    </>)
    return (
        <div>
            <div className="max-lg:collapse sticky top-0 z-50 bg-transparent bg-red   backdrop-blur-2xl border border-white/10   shadow-xl w-full rounded z-[9999] relative">
                <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
                <label htmlFor="navbar-1-toggle" className="fixed inset-0 hidden max-lg:peer-checked:block"></label>
                <div className="collapse-title navbar">
                    <div className="navbar-start">
                        <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <Image src="/assets/logo2.png" alt='logo' height={40} width={120} className='object-contain'></Image>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-3">
                            {navItems}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {
                            user ? <>
                                <div className='mx-2'>
                                    <p>Hello,<span className='font=semibold text-cyan-400'>{user.name}</span></p>
                                </div>
                            </>:""
                        }
                        <Dropdown>
                            <Dropdown.Trigger className="rounded-full">
                                {
                                    user ? <> <Avatar>
                                        <Avatar.Image
                                            alt="Junior Garcia"
                                            src={user.image}
                                        />
                                        <Avatar.Fallback delayMs={600}>JD</Avatar.Fallback>
                                    </Avatar></> : <> <Avatar>
                                        <Avatar.Image
                                            alt="Junior Garcia"
                                            src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/orange.jpg"
                                        />
                                        <Avatar.Fallback delayMs={600}>JD</Avatar.Fallback>
                                    </Avatar></>
                                }
                            </Dropdown.Trigger>
                            <Dropdown.Popover>
                                <div className="px-3 pt-3 pb-1">
                                    <div className="flex items-center gap-2">
                                        {
                                            user ? <>
                                                <Avatar size="sm">
                                                    <Avatar.Image
                                                        alt="Jane"
                                                        src={user.image}
                                                    />
                                                    <Avatar.Fallback delayMs={600}>JD</Avatar.Fallback>
                                                </Avatar>
                                            </> : <>
                                                <Avatar size="sm">
                                                    <Avatar.Image
                                                        alt="Jane"
                                                        src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/orange.jpg"
                                                    />
                                                    <Avatar.Fallback delayMs={600}>JD</Avatar.Fallback>
                                                </Avatar>
                                            </>
                                        }
                                        <div className="flex flex-col gap-0">
                                            {
                                                user ? <>
                                                    <p className="text-sm leading-5 font-medium">{user.name}</p>
                                                    <p className="text-xs leading-none text-muted">{user.email}</p>
                                                </> : ""
                                            }
                                        </div>
                                    </div>
                                </div>
                                <Dropdown.Menu>
                                    {
                                        user ? <>
                                            <Dropdown.Item id="settings" textValue="Settings" onPress={() => router.push("/explore-cars")}>
                                                <div className="flex w-full items-center justify-between gap-2">
                                                    <Label>Explore Cars</Label>
                                                    <Gear className="size-3.5 text-muted" />
                                                </div>
                                            </Dropdown.Item>
                                            <Dropdown.Item id="new-car" textValue="New car" onPress={() => router.push("/add-car")}>
                                                <div className="flex w-full items-center justify-between gap-2">
                                                    <Label>Add Cars</Label>
                                                    <Car className="size-3.5 text-muted" />
                                                </div>
                                            </Dropdown.Item>
                                            <Dropdown.Item id="new-project" textValue="New project" onPress={() => router.push("/my-bookings")}>
                                                <div className="flex w-full items-center justify-between gap-2">
                                                    <Label>My Bookings</Label>
                                                    <Persons className="size-3.5 text-muted" />
                                                </div>
                                            </Dropdown.Item>
                                            <Dropdown.Item id="logout" textValue="Logout" variant="danger" onPress={handleSignOut}>
                                                <div className="flex w-full items-center justify-between gap-2">
                                                    <Label>Log Out</Label>
                                                    <ArrowRightFromSquare className="size-3.5 text-danger" />
                                                </div>
                                            </Dropdown.Item>

                                        </> : <>

                                            <Dropdown.Item id="dashboard" textValue="Dashboard" onPress={() => router.push("/login")}>
                                                <Label>Login</Label>
                                            </Dropdown.Item>
                                            <Dropdown.Item id="profile" textValue="Profile" onPress={() => router.push("/signup")}>
                                                <Label>SignUp</Label>
                                            </Dropdown.Item>
                                        </>
                                    }
                                </Dropdown.Menu>
                            </Dropdown.Popover>
                        </Dropdown>

                    </div>
                </div>

                <div className="collapse-content lg:hidden z-1">
                    <ul className="menu">
                        {navItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;