import Link from "next/link";
import { ArrowRight, BookOpen, Users, GraduationCap, BarChart3, Shield, Zap } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-heading font-bold text-gray-900">Skul Africa</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-gray-600 hover:text-primary-600 transition-colors">
                Features
              </Link>
              <Link href="#pricing" className="text-gray-600 hover:text-primary-600 transition-colors">
                Pricing
              </Link>
              <Link href="#about" className="text-gray-600 hover:text-primary-600 transition-colors">
                About
              </Link>
              <Link href="/login" className="text-gray-600 hover:text-primary-600 transition-colors">
                Login
              </Link>
              <Link
                href="/register"
                className="px-6 py-2.5 gradient-primary text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                Get Started
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium animate-fade-in">
              🎓 The Future of School Management
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-gray-900 mb-6 animate-slide-up">
              Manage Your School
              <span className="block gradient-primary bg-clip-text text-transparent">
                With Confidence
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Skul Africa is the premium platform that empowers schools to manage students, teachers, attendance,
              assessments, and finances—all from one elegant, unified dashboard.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Link
                href="/register"
                className="px-8 py-4 gradient-primary text-white rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#demo"
                className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold text-lg border-2 border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>

            <div className="mt-12 flex items-center justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-secondary-500" />
                <span>Secure & Private</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-accent-500" />
                <span>Easy Setup</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary-500" />
                <span>500+ Schools</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
              Everything You Need
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features designed to make school management effortless
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl border border-gray-200 card-hover bg-white"
              >
                <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-6`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 gradient-primary text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-5xl font-heading font-bold mb-2">{stat.value}</div>
                <div className="text-primary-100 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              Ready to Transform Your School?
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Join hundreds of top-tier schools already using Skul Africa to streamline their operations
            </p>
            <Link
              href="/register"
              className="inline-flex items-center gap-2 px-8 py-4 gradient-primary text-white rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-heading font-bold text-white">Skul Africa</span>
              </div>
              <p className="text-sm text-gray-400">
                Modern school management for modern institutions
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#features" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="#demo" className="hover:text-white transition-colors">Demo</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="#contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="#blog" className="hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#privacy" className="hover:text-white transition-colors">Privacy</Link></li>
                <li><Link href="#terms" className="hover:text-white transition-colors">Terms</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
            © 2025 Skul Africa. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    icon: Users,
    title: "Student Management",
    description: "Easily manage student records, enrollment, and academic progress all in one place.",
    color: "bg-primary-500",
  },
  {
    icon: BookOpen,
    title: "Teacher Portal",
    description: "Empower teachers with tools for attendance, grading, and class management.",
    color: "bg-secondary-500",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reports",
    description: "Get insights with detailed reports on attendance, performance, and finances.",
    color: "bg-accent-500",
  },
  {
    icon: GraduationCap,
    title: "Assessment Tools",
    description: "Create, manage, and grade assessments with customizable grading systems.",
    color: "bg-purple-500",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Bank-level security with role-based access control and data encryption.",
    color: "bg-pink-500",
  },
  {
    icon: Zap,
    title: "Easy Customization",
    description: "Customize branding, colors, grading systems, and more to match your school.",
    color: "bg-indigo-500",
  },
];

const stats = [
  { value: "500+", label: "Active Schools" },
  { value: "50K+", label: "Students" },
  { value: "5K+", label: "Teachers" },
  { value: "99.9%", label: "Uptime" },
];
