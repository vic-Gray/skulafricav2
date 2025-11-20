"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { GraduationCap, Mail, Lock, Eye, EyeOff, Building2, Globe, User } from "lucide-react";

export default function RegisterPage() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        schoolName: "",
        subdomain: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        agreeToTerms: false,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (step < 2) {
            setStep(step + 1);
        } else {
            // TODO: Implement actual registration logic with API
            console.log("Register:", formData);

            // Navigate to dashboard
            router.push("/dashboard");
        }
    };

    const isSubdomainValid = formData.subdomain.length >= 3 && /^[a-z0-9-]+$/.test(formData.subdomain);

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
                            Register your school
                        </h1>
                        <p className="text-gray-600">
                            Get started with a 14-day free trial
                        </p>
                    </div>

                    {/* Progress Steps */}
                    <div className="flex items-center mb-8">
                        <div className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 1 ? 'gradient-primary text-white' : 'bg-gray-200 text-gray-600'} font-semibold text-sm`}>
                            1
                        </div>
                        <div className={`flex-1 h-1 mx-2 ${step >= 2 ? 'bg-primary-500' : 'bg-gray-200'}`} />
                        <div className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 2 ? 'gradient-primary text-white' : 'bg-gray-200 text-gray-600'} font-semibold text-sm`}>
                            2
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {step === 1 && (
                            <>
                                <div>
                                    <label htmlFor="schoolName" className="block text-sm font-medium text-gray-700 mb-2">
                                        School Name
                                    </label>
                                    <div className="relative">
                                        <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            id="schoolName"
                                            type="text"
                                            required
                                            value={formData.schoolName}
                                            onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                                            className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                            placeholder="Modern High School"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subdomain" className="block text-sm font-medium text-gray-700 mb-2">
                                        Choose your subdomain
                                    </label>
                                    <div className="relative">
                                        <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            id="subdomain"
                                            type="text"
                                            required
                                            value={formData.subdomain}
                                            onChange={(e) => setFormData({ ...formData, subdomain: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '') })}
                                            className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                            placeholder="modernhighschool"
                                        />
                                    </div>
                                    <p className="mt-2 text-sm text-gray-500">
                                        Your school will be accessible at:{" "}
                                        <span className={`font-mono ${isSubdomainValid ? 'text-primary-600' : 'text-gray-400'}`}>
                                            {formData.subdomain || 'yourschool'}.vax.com
                                        </span>
                                    </p>
                                </div>
                            </>
                        )}

                        {step === 2 && (
                            <>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                                            First Name
                                        </label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                            <input
                                                id="firstName"
                                                type="text"
                                                required
                                                value={formData.firstName}
                                                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                                placeholder="John"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                                            Last Name
                                        </label>
                                        <input
                                            id="lastName"
                                            type="text"
                                            required
                                            value={formData.lastName}
                                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>

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
                                            placeholder="john@school.com"
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

                                <div>
                                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                                        Confirm Password
                                    </label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            id="confirmPassword"
                                            type={showPassword ? "text" : "password"}
                                            required
                                            value={formData.confirmPassword}
                                            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                            className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                            placeholder="••••••••"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="flex items-start">
                                        <input
                                            type="checkbox"
                                            required
                                            checked={formData.agreeToTerms}
                                            onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                                            className="w-4 h-4 mt-1 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                                        />
                                        <span className="ml-2 text-sm text-gray-600">
                                            I agree to the{" "}
                                            <Link href="/terms" className="text-primary-600 hover:text-primary-700">
                                                Terms of Service
                                            </Link>{" "}
                                            and{" "}
                                            <Link href="/privacy" className="text-primary-600 hover:text-primary-700">
                                                Privacy Policy
                                            </Link>
                                        </span>
                                    </label>
                                </div>
                            </>
                        )}

                        <div className="flex gap-4">
                            {step === 2 && (
                                <button
                                    type="button"
                                    onClick={() => setStep(1)}
                                    className="flex-1 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all"
                                >
                                    Back
                                </button>
                            )}
                            <button
                                type="submit"
                                className="flex-1 py-3 gradient-primary text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                            >
                                {step === 1 ? "Continue" : "Create Account"}
                            </button>
                        </div>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600">
                            Already have an account?{" "}
                            <Link href="/login" className="text-primary-600 hover:text-primary-700 font-semibold">
                                Sign in
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Side - Illustration */}
            <div className="hidden lg:flex flex-1 gradient-hero items-center justify-center p-12">
                <div className="max-w-md">
                    <div className="w-24 h-24 gradient-secondary rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
                        <Building2 className="w-12 h-12 text-white" />
                    </div>
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4 text-center">
                        Join 500+ schools already using Vax
                    </h2>
                    <p className="text-lg text-gray-600 text-center mb-8">
                        Start managing your school more efficiently with our all-in-one platform.
                    </p>

                    <div className="space-y-4">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start gap-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl">
                                <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                                    <benefit.icon className="w-4 h-4 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">{benefit.title}</h3>
                                    <p className="text-sm text-gray-600">{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

const benefits = [
    {
        icon: GraduationCap,
        title: "14-day free trial",
        description: "No credit card required to get started",
    },
    {
        icon: Globe,
        title: "Your own subdomain",
        description: "Custom branded URL for your school",
    },
    {
        icon: Lock,
        title: "Secure & private",
        description: "Bank-level security for your data",
    },
];
