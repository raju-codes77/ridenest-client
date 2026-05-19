import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
const Navbar = () => {
    const navItems=(<>

    <Link className='font-semibold mx-2 p-2 hover:bg-linear-to-r hover:from-blue-500 hover:to-slate-500 hover:text-white rounded-md active:scale-90 ' href={"/"}>Home</Link>
    <Link className='font-semibold mx-2 p-2 hover:bg-linear-to-r hover:from-blue-500 hover:to-slate-500 hover:text-white rounded-md active:scale-90 ' href={"/explore-cars"}>Explore Cars</Link>
    <Link className='font-semibold mx-2 p-2 hover:bg-linear-to-r hover:from-blue-500 hover:to-slate-500 hover:text-white rounded-md active:scale-90 ' href={"/add-car"}>Add Car</Link>
    <Link className='font-semibold mx-2 p-2 hover:bg-linear-to-r hover:from-blue-500 hover:to-slate-500 hover:text-white rounded-md active:scale-90 ' href={"/my-bookings"}>My Bookings</Link>
        
        
        </>)
    return (
        <div>
            <div className="max-lg:collapse bg-white/5  backdrop-blur-2xl border border-white/10   shadow-xl w-full rounded-md">
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
                        <div className="flex gap-2">
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt="Tailwind CSS Navbar component"
                                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                    </div>
                                </div>
                                <ul
                                    tabIndex="-1"
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                    <li><a>Logout</a></li>
                                </ul>
                            </div>
                        </div>
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