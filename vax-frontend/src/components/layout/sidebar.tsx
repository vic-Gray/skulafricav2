"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Users,
    GraduationCap,
    BookOpen,
    Calendar,
    ClipboardCheck,
    BarChart3,
    DollarSign,
    Settings,
    Menu,
    X,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Students", href: "/dashboard/students", icon: Users },
    { name: "Teachers", href: "/dashboard/teachers", icon: GraduationCap },
    { name: "Classes", href: "/dashboard/classes", icon: BookOpen },
    { name: "Subjects", href: "/dashboard/subjects", icon: Calendar },
    { name: "Calendar", href: "/dashboard/calendar", icon: Calendar },
    { name: "Attendance", href: "/dashboard/attendance", icon: ClipboardCheck },
    { name: "Assessment", href: "/dashboard/assessment", icon: BarChart3 },
    { name: "Finance", href: "/dashboard/finance", icon: DollarSign },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export function DashboardSidebar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Mobile menu button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow-lg"
            >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Sidebar */}
            <aside
                className={cn(
                    "fixed left-0 top-0 z-40 h-screen w-64 bg-white border-r border-gray-200 transition-transform duration-300",
                    isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
                )}
            >
                <div className="flex flex-col h-full">
                    {/* Logo */}
                    <div className="p-6 border-b border-gray-200">
                        <Link href="/dashboard" className="flex items-center space-x-2">
                            <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                                <GraduationCap className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <span className="text-xl font-heading font-bold text-gray-900">Skul Africa</span>
                                <p className="text-xs text-gray-500">School Dashboard</p>
                            </div>
                        </Link>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                        {navigation.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={cn(
                                        "flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all",
                                        isActive
                                            ? "bg-primary-50 text-primary-700"
                                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                    )}
                                >
                                    <item.icon className="w-5 h-5" />
                                    <span>{item.name}</span>
                                </Link>
                            );
                        })}
                    </nav>

                    {/* User section */}
                    <div className="p-4 border-t border-gray-200">
                        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                            <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-semibold">
                                JD
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-semibold text-gray-900">John Doe</p>
                                <p className="text-xs text-gray-500">Admin</p>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/50 z-30"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
}
