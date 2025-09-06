import React from "react";

export default function LoginPage() {
    return (
        <div className="flex flex-col md:flex-row h-screen w-full">
            {/* Left Side */}
            <div className="w-full md:w-1/2 h-full bg-white p-40 flex flex-col justify-center">
                {/* Logo */}
                <div className="flex items-center mb-30">
                    <img
                        src="https://img.icons8.com/?size=100&id=IiCPHx7JDdAd&format=png&color=228BE6"
                        className="w-10 h-10"
                        alt="logo"
                    />
                    <span className="ml-2 font-bold text-violet-700 text-2xl hover:text-amber-500">
                        Education
                    </span>
                </div>

                {/* Welcome */}
                <div className="font-bold text-4xl md:text-5xl lg:text-6xl">
                    <span>Hello,</span>
                    <p>Welcome Back</p>
                </div>
                <p className="text-gray-500 mt-4 text-sm md:text-base lg:text-lg">
                    Hey, welcome back to your special place
                </p>

                {/* Form */}
                <div className="mt-10 flex flex-col gap-4 max-w-md">
                    <input
                        type="text"
                        placeholder="john@gmail.com"
                        className="border-2 border-gray-300 rounded-md p-2"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="border-2 border-gray-300 rounded-md p-2"
                    />

                    <div className="flex justify-between items-center text-sm text-gray-500">
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                className="w-4 h-4 accent-violet-600"
                            />
                            <span className="ml-2">Remember me</span>
                        </label>
                        <a href="#" className="hover:text-blue-600">
                            Forgot password?
                        </a>
                    </div>
                </div>

                {/* Sign In Button */}
                <button className="bg-violet-600 mt-8 px-6 py-2 rounded-md text-white text-sm md:text-base w-fit">
                    Sign In
                </button>

                {/* Sign Up */}
                <div className="mt-8 text-sm md:text-base">
                    <span>Don't have an account?</span>
                    <a href="#" className="text-violet-600 ml-1 font-bold">
                        Sign Up
                    </a>
                </div>
            </div>

            {/* Right Side */}
            <div className="hidden md:block md:w-1/2 h-full p-3">
                <img
                    src="https://cdn.pixabay.com/photo/2024/06/25/13/12/woman-8852664_1280.jpg"
                    alt="illustration"
                    className="h-full w-full object-cover rounded-2xl"
                />
            </div>
        </div>
    );
}
