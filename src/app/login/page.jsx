"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import {
    Button,
    Card,
    Input,
    Spinner,
} from "@heroui/react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { authClient } from "../explore-cars/[id]/auth-client";


const LoginPage = () => {

    const router = useRouter();


    // Email Password Login
    const handleLogin = async (e) => {

        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signIn.email({
            email: user.email, // user email address
            password: user.password, // user password -> min 8 characters by default
            // callbackURL:

        })

        if(data){
                //redirect to the dashboard or sign in page
                toast.success("Welcome! You are logged In ");
                setTimeout(() => {
                    router.push("/")
                }, 1000);
            }
            if(error){
                // display the error message
                toast.error(ctx.error.message);
            }


    }


    // Google Login
    const handleGoogleLogin = async () => {

        try {

            // Google Login Logic Here

            toast.success("Google Login Successful!");

            // Redirect Home
            router.push("/");

        } catch (error) {

            toast.error("Google Login Failed");

        }
    };

    return (
        <section className="min-h-screen bg-gradient-to-br from-cyan-100 via-sky-50 to-blue-100 flex items-center justify-center px-4 py-10">

            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                {/* Left Side Form */}
                <Card className="bg-white/70 backdrop-blur-2xl border border-white/50 shadow-2xl rounded-3xl">

                    <div className="p-8 md:p-12 mx-auto w-full">

                        <div className="mb-8">

                            <h1 className="text-4xl font-black text-slate-800">
                                Welcome Back
                            </h1>

                            <p className="text-slate-500 mt-3 text-lg">
                                Login to continue your RideNest journey.
                            </p>

                        </div>

                        <form
                            onSubmit={handleLogin}
                            className="space-y-6"
                        >

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
                                className="w-full"
                            />

                            {/* Password */}
                            <Input
                                required
                                name="password"
                                label="Password"
                                placeholder="Enter your password"
                                type="password"
                                variant="bordered"
                                radius="lg"
                                size="lg"
                                className="w-full"
                            />

                            {/* Login Button */}
                            <Button
                                type="submit"

                                className="w-full bg-cyan-500 text-white font-semibold h-12 text-lg rounded-xl"
                            >
                                Login
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
                                type="button"
                                onClick={handleGoogleLogin}
                                variant="bordered"
                                className="w-full h-12 border-slate-300 text-slate-700 rounded-xl"
                            >
                                <FcGoogle size={22} />
                                Continue with Google
                            </Button>

                        </form>

                        {/* Register Link */}
                        <p className="text-slate-600 text-center mt-8">

                            Don&apos;t have an account?{" "}

                            <Link
                                href="/signup"
                                className="text-cyan-600 font-semibold"
                            >
                                Register
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
                            Ride
                            <span className="text-cyan-400">
                                Nest
                            </span>
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

export default LoginPage;