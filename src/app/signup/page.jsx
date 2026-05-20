"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Button,
    Card,
    Input,
} from "@heroui/react";
import { FcGoogle } from "react-icons/fc";

const SignUpPage = () => {

    const [error, setError] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();

        setError("");

        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        // Password Validation

        if (password.length < 6) {
            setError("Password must be at least 6 characters.");
            return;
        }

        if (!/[A-Z]/.test(password)) {
            setError("Password must contain at least one uppercase letter.");
            return;
        }

        if (!/[a-z]/.test(password)) {
            setError("Password must contain at least one lowercase letter.");
            return;
        }

        // Success
        console.log({
            name,
            email,
            photo,
            password,
        });

        form.reset();
    };

    return (
        <section className="min-h-screen bg-gradient-to-br from-cyan-100 via-sky-50 to-blue-100 flex items-center justify-center px-4 py-10">

            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                {/* Left Side Form */}
                <Card className="bg-white/70 backdrop-blur-2xl border border-white/50 shadow-2xl rounded-3xl">

                    <div className="p-8 md:p-12  mx-auto">

                        <div className="mb-8">
                            <h1 className="text-4xl font-black text-slate-800">
                                Create Account
                            </h1>

                            <p className="text-slate-500 mt-3 text-lg">
                                Join RideNest and enjoy premium car rentals.
                            </p>
                        </div>

                        <form
                            onSubmit={handleRegister}
                            className="space-y-6 space-x-6"
                        >

                            {/* Name */}
                            <Input
                                required
                                name="name"
                                label="Full Name"
                                placeholder="Enter your name"
                                type="text"
                                variant="bordered"
                                radius="lg"
                                size="lg"
                                className='w-full'
                            />

                            {/* Email */}
                            <Input
                                required
                                name="email"
                                label="Email"
                                placeholder="Enter your email"
                                type="email"
                                variant="bordered"
                                radius="lg"
                                size="lg"
                                 className='w-full'
                            />

                            {/* Photo URL */}
                            <Input
                                required
                                name="photo"
                                label="Photo URL"
                                placeholder="Enter photo url"
                                type="url"
                                variant="bordered"
                                radius="lg"
                                size="lg"
                                 className='w-full'
                            />

                            {/* Password */}
                            <Input
                                required
                                name="password"
                                label="Password"
                                placeholder="Enter password"
                                type="password"
                                variant="bordered"
                                radius="lg"
                                size="lg"
                                 className='w-full'
                            />

                            {/* Error */}
                            {
                                error && (
                                    <p className="text-red-500 font-medium">
                                        {error}
                                    </p>
                                )
                            }

                            {/* Register Button */}
                            <Button
                                type="submit"
                                className="w-full bg-cyan-500 text-white font-semibold h-12 text-lg rounded-xl"
                            >
                                Register
                            </Button>

                            {/* Divider */}
                            <div className="flex items-center gap-4">
                                <div className="flex-1 h-[1px] bg-slate-300"></div>

                                <span className="text-slate-500 text-sm">
                                    OR
                                </span>

                                <div className="flex-1 h-[1px] bg-slate-300"></div>
                            </div>

                            {/* Google Login */}
                            <Button
                                variant="bordered"
                                className="w-full h-12 border-slate-300 text-slate-700 rounded-xl"
                                startContent={<FcGoogle size={22} />}
                            >
                               <FcGoogle /> Continue with Google
                            </Button>

                        </form>

                        <p className="text-slate-600 text-center mt-8">
                            Already have an account?{" "}

                            <Link
                                href="/login"
                                className="text-cyan-600 font-semibold"
                            >
                                Login
                            </Link>

                        </p>

                    </div>

                </Card>

                {/* Right Side Logo */}
                <div className="hidden lg:flex justify-center items-center">

                    <div className="text-center">

                        <div className="bg-white/40 backdrop-blur-2xl rounded-full p-10 shadow-2xl border border-white/50">

                            <Image
                                src="/assets/logo2.png"
                                alt="RideNest Logo"
                                width={480}
                                height={280}
                                className="object-contain"
                            />

                        </div>

                        <h2 className="text-7xl font-black text-slate-800 mt-8">
                            Ride<span className="text-cyan-400">Nest</span>
                        </h2>

                        <p className="text-slate-600 mt-4 text-xl max-w-md mx-auto leading-relaxed">
                            Luxury rides, seamless booking, and premium comfort
                            for every journey.
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default SignUpPage;