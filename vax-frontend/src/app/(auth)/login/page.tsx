"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { GraduationCap, Mail, Lock, Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        remember: false,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implement actual login logic with API
        console.log("Login:", formData);

        // Navigate to dashboard
        router.push("/dashboard");
    };

    return (
        <div className="min-h-screen flex">
            {/* Left Side - Form */}
            <div className="flex-1 flex items-center justify-center px-6 py-12">
                <div className="w-full max-w-md">
                    <div className="mb-8">
                        <Link href="/" className="flex items-center space-x-2 mb-8">
                            <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                                <GraduationCap className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-2xl font-heading font-bold text-gray-900">Vax</span>
                        </Link>

                        <h1 className="text-3xl font-heading font-bold text-gray-900 mb-2">
                            Welcome back
                        </h1>
                        <p className="text-gray-600">
                            Sign in to your school dashboard
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                Email address
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                    placeholder="you@school.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    required
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    className="w-full pl-11 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={formData.remember}
                                    onChange={(e) => setFormData({ ...formData, remember: e.target.checked })}
                                    className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                                />
                                <span className="ml-2 text-sm text-gray-600">Remember me</span>
                            </label>
                            <Link href="/forgot-password" className="text-sm text-primary-600 hover:text-primary-700">
                                Forgot password?
                            </Link>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 gradient-primary text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                        >
                            Sign in
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600">
                            Don't have an account?{" "}
                            <Link href="/register" className="text-primary-600 hover:text-primary-700 font-semibold">
                                Register your school
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Side - Illustration */}
            <div className="hidden lg:flex flex-1 gradient-hero items-center justify-center p-12">
                <div className="max-w-md text-center">
                    <div className="w-24 h-24 gradient-primary rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
                        <GraduationCap className="w-12 h-12 text-white" />
                    </div>
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
                        Manage your school with ease
                    </h2>
                    <p className="text-lg text-gray-600">
                        Access your dashboard to manage students, teachers, attendance, and more.
                    </p>

                    <div className="mt-12 grid grid-cols-3 gap-4 text-center">
                        <div className="p-4 bg-white/60 backdrop-blur-sm rounded-xl">
                            <div className="text-2xl font-bold text-primary-600">500+</div>
                            <div className="text-sm text-gray-600">Schools</div>
                        </div>
                        <div className="p-4 bg-white/60 backdrop-blur-sm rounded-xl">
                            <div className="text-2xl font-bold text-secondary-600">50K+</div>
                            <div className="text-sm text-gray-600">Students</div>
                        </div>
                        <div className="p-4 bg-white/60 backdrop-blur-sm rounded-xl">
                            <div className="text-2xl font-bold text-accent-600">99.9%</div>
                            <div className="text-sm text-gray-600">Uptime</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
