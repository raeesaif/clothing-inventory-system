import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Package, ShoppingCart, Warehouse, Building2, Truck, BarChart3,
    Bell, Shield, ArrowRight, CheckCircle2, Star, Shirt, Zap,
    Globe, Users, ChevronRight, Play
} from "lucide-react";

const features = [
    { icon: Package, title: "Product Management", desc: "Track SKUs, sizes, colors, barcodes, pricing, and discounts across your entire catalog." },
    { icon: Building2, title: "Multi-Branch Control", desc: "Manage inventory and sales across all your retail locations from one dashboard." },
    { icon: Warehouse, title: "Warehouse Operations", desc: "Streamline stock receiving, storage, transfers, and fulfillment workflows." },
    { icon: ShoppingCart, title: "Order Management", desc: "Process in-store and online orders with real-time stock deduction and tracking." },
    { icon: Truck, title: "Vendor Management", desc: "Track suppliers, purchase orders, deliveries, and payment records effortlessly." },
    { icon: BarChart3, title: "Sales Analytics", desc: "Gain insights with daily, weekly, and monthly reports on revenue and performance." },
    { icon: Bell, title: "Smart Alerts", desc: "Automatic notifications for low stock, out-of-stock items, and restocking suggestions." },
    { icon: Shield, title: "Role-Based Access", desc: "Secure dashboards for Admin, Branch Manager, Warehouse Manager, and Vendors." },
];

const stats = [
    { value: "10K+", label: "Products Managed" },
    { value: "500+", label: "Fashion Brands" },
    { value: "99.9%", label: "Uptime" },
    { value: "45%", label: "Time Saved" },
];

const testimonials = [
    { name: "Sarah Chen", role: "CEO, UrbanThread", text: "Clothify ERP transformed how we manage 12 branches. Stock discrepancies dropped by 80% in the first month.", rating: 5 },
    { name: "Marcus Obi", role: "Operations Director, ModaHouse", text: "The warehouse module alone paid for itself. We process transfers 3x faster now.", rating: 5 },
    { name: "Priya Sharma", role: "Founder, SilkRoute Fashion", text: "Finally, a system built for clothing businesses. The size-color matrix tracking is a game changer.", rating: 5 },
];

const pricing = [
    { name: "Starter", price: "$49", period: "/mo", desc: "For single-location stores", features: ["1 Branch", "Up to 500 SKUs", "Basic Analytics", "Email Support", "2 User Accounts"], popular: false },
    { name: "Growth", price: "$149", period: "/mo", desc: "For growing fashion brands", features: ["Up to 5 Branches", "Unlimited SKUs", "Advanced Analytics", "Priority Support", "10 User Accounts", "Warehouse Module", "Vendor Management"], popular: true },
    { name: "Enterprise", price: "Custom", period: "", desc: "For large-scale operations", features: ["Unlimited Branches", "Unlimited SKUs", "Custom Reports", "Dedicated Account Manager", "Unlimited Users", "API Access", "Custom Integrations"], popular: false },
];

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-background font-body">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                    <div className="flex items-center gap-2">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                            <Shirt className="h-5 w-5 text-primary-foreground text-white" />
                        </div>
                        <span className="font-heading text-xl font-bold tracking-tight">Clothify ERP</span>
                    </div>
                    <div className="hidden items-center gap-8 md:flex">
                        <a href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Features</a>
                        <a href="#pricing" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Pricing</a>
                        <a href="#testimonials" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Testimonials</a>
                    </div>
                    <div className="flex items-center gap-3">
                        <Link to="/admin/dashboard">
                            <Button className="cursor-pointer" variant="ghost" size="sm">Log in</Button>
                        </Link>
                        <Link to="/">
                            <Button size="sm" className="gap-1.5 text-white cursor-pointer">
                                Start Free Trial <ArrowRight className="h-3.5 w-3.5" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative overflow-hidden pt-16">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
                    <div className="absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full bg-primary/3 blur-3xl" />
                </div>
                <div className="mx-auto max-w-7xl px-6 pb-20 pt-24 md:pb-32 md:pt-32">
                    <div className="mx-auto max-w-3xl text-center">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground">
                            <Zap className="h-3.5 w-3.5 text-primary" />
                            Built for fashion brands & clothing retailers
                        </div>
                        <h1 className="font-heading text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
                            Manage Your <span className="text-gradient">Clothing Empire</span> From One Dashboard
                        </h1>
                        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
                            Inventory, sales, branches, warehouses, vendors, and online orders — all connected.
                            The ERP system purpose-built for fashion businesses.
                        </p>
                        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                            <Link to="/">
                                <Button size="lg" className="h-12 gap-2 px-8 text-base text-white">
                                    Start Free 14-Day Trial <ArrowRight className="h-4 w-4" />
                                </Button>
                            </Link>
                            <Button variant="outline" size="lg" className="h-12 gap-2 px-8 text-base">
                                <Play className="h-4 w-4" /> Watch Demo
                            </Button>
                        </div>
                        <p className="mt-4 text-sm text-muted-foreground">No credit card required · Setup in 5 minutes</p>
                    </div>

                    {/* Dashboard Preview */}
                    <div className="relative mx-auto mt-16 max-w-5xl">
                        <div className="rounded-xl border border-border bg-card p-2 shadow-2xl shadow-primary/5">
                            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                                <div className="h-3 w-3 rounded-full bg-destructive/60" />
                                <div className="h-3 w-3 rounded-full bg-warning/60" />
                                <div className="h-3 w-3 rounded-full bg-success/60" />
                                <span className="ml-2 text-xs text-muted-foreground">Clothify ERP — Admin Dashboard</span>
                            </div>
                            <div className="grid grid-cols-4 gap-3 p-4">
                                {[
                                    { label: "Total Revenue", value: "₹12.4M", change: "+14.2%" },
                                    { label: "Active Orders", value: "1,247", change: "+8.5%" },
                                    { label: "Products", value: "3,842", change: "+23" },
                                    { label: "Branches", value: "12", change: "All Active" },
                                ].map((stat) => (
                                    <div key={stat.label} className="rounded-lg border border-border bg-background p-4">
                                        <p className="text-xs text-muted-foreground">{stat.label}</p>
                                        <p className="mt-1 font-heading text-xl font-bold">{stat.value}</p>
                                        <p className="mt-1 text-xs text-success">{stat.change}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="grid grid-cols-3 gap-3 px-4 pb-4">
                                <div className="col-span-2 h-40 rounded-lg border border-border bg-background p-4">
                                    <p className="text-xs font-medium text-muted-foreground">Revenue Trend</p>
                                    <div className="mt-3 flex items-end gap-1.5">
                                        {[40, 55, 35, 65, 50, 75, 60, 80, 70, 90, 85, 95].map((h, i) => (
                                            <div key={i} className="flex-1 rounded-sm bg-primary/20" style={{ height: `${h}%` }}>
                                                <div className="h-full rounded-sm bg-primary" style={{ height: `${60 + Math.random() * 40}%` }} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="h-40 rounded-lg border border-border bg-background p-4">
                                    <p className="text-xs font-medium text-muted-foreground">Top Categories</p>
                                    <div className="mt-3 space-y-2">
                                        {["Dresses", "T-Shirts", "Denim", "Accessories"].map((cat, i) => (
                                            <div key={cat} className="flex items-center gap-2">
                                                <div className="h-2 flex-1 rounded-full bg-muted">
                                                    <div className="h-full rounded-full bg-primary" style={{ width: `${90 - i * 18}%` }} />
                                                </div>
                                                <span className="text-xs text-muted-foreground">{cat}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="border-y border-border bg-card">
                <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4">
                    {stats.map((stat) => (
                        <div key={stat.label} className="text-center">
                            <p className="font-heading text-3xl font-bold text-primary md:text-4xl">{stat.value}</p>
                            <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mx-auto max-w-2xl text-center">
                        <p className="text-sm font-medium uppercase tracking-widest text-primary">Features</p>
                        <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight md:text-4xl">
                            Everything Your Fashion Business Needs
                        </h2>
                        <p className="mt-4 text-muted-foreground">
                            From inventory tracking to sales analytics, Clothify ERP covers every aspect of your clothing business operations.
                        </p>
                    </div>
                    <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {features.map((feature) => (
                            <Card key={feature.title} className="group border-border/50 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                                <CardContent className="p-6">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                                        <feature.icon className="h-5 w-5 " />
                                    </div>
                                    <h3 className="mt-4 font-heading text-lg font-semibold">{feature.title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="border-y border-border bg-card/50 py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mx-auto max-w-2xl text-center">
                        <p className="text-sm font-medium uppercase tracking-widest text-primary">How It Works</p>
                        <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight md:text-4xl">
                            Up and Running in Minutes
                        </h2>
                    </div>
                    <div className="mt-16 grid gap-8 md:grid-cols-3">
                        {[
                            { step: "01", title: "Set Up Your Business", desc: "Add your branches, warehouses, and team members. Import your product catalog or start fresh." },
                            { step: "02", title: "Connect Your Channels", desc: "Link your retail POS, online store, and vendor accounts for unified inventory management." },
                            { step: "03", title: "Grow With Insights", desc: "Monitor real-time analytics, automate restocking, and scale your operations confidently." },
                        ].map((item) => (
                            <div key={item.step} className="relative text-center">
                                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary font-heading text-xl font-bold text-white">
                                    {item.step}
                                </div>
                                <h3 className="mt-5 font-heading text-xl font-semibold">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section id="testimonials" className="py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mx-auto max-w-2xl text-center">
                        <p className="text-sm font-medium uppercase tracking-widest text-primary">Testimonials</p>
                        <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight md:text-4xl">
                            Trusted by Fashion Leaders
                        </h2>
                    </div>
                    <div className="mt-16 grid gap-6 md:grid-cols-3">
                        {testimonials.map((t) => (
                            <Card key={t.name} className="border-border/50">
                                <CardContent className="p-6">
                                    <div className="flex gap-1">
                                        {Array.from({ length: t.rating }).map((_, i) => (
                                            <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                                        ))}
                                    </div>
                                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">"{t.text}"</p>
                                    <div className="mt-6 flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-heading text-sm font-bold text-primary">
                                            {t.name.split(" ").map(n => n[0]).join("")}
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium">{t.name}</p>
                                            <p className="text-xs text-muted-foreground">{t.role}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section id="pricing" className="border-y border-border bg-card/50 py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mx-auto max-w-2xl text-center">
                        <p className="text-sm font-medium uppercase tracking-widest text-primary">Pricing</p>
                        <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight md:text-4xl">
                            Simple, Transparent Pricing
                        </h2>
                        <p className="mt-4 text-muted-foreground">Start free. Scale as you grow. No hidden fees.</p>
                    </div>
                    <div className="mt-16 grid gap-6 md:grid-cols-3">
                        {pricing.map((plan) => (
                            <Card
                                key={plan.name}
                                className={`relative overflow-visible rounded-xl transition-all duration-300 ${plan.popular
                                    ? "border border-primary shadow-lg shadow-primary/10"
                                    : "border border-border/50 hover:border-primary/40"
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-4 py-1 text-xs font-medium text-white">
                                        Most Popular
                                    </div>
                                )}
                                <CardContent className={`p-8 ${plan.popular ? "pt-10" : ""}`}>
                                    <h3 className="font-heading text-xl font-semibold">{plan.name}</h3>
                                    <p className="mt-1 text-sm text-muted-foreground">{plan.desc}</p>
                                    <div className="mt-6">
                                        <span className="font-heading text-4xl font-bold">{plan.price}</span>
                                        <span className="text-muted-foreground">{plan.period}</span>
                                    </div>
                                    <Button className={`mt-6 w-full ${plan.popular ? "text-white" : ""}`} variant={plan.popular ? "default" : "outline"}>
                                        {plan.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
                                    </Button>
                                    <ul className="mt-8 space-y-3">
                                        {plan.features.map((f) => (
                                            <li key={f} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                                                <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="relative overflow-hidden rounded-2xl bg-primary px-8 py-16 text-center md:px-16">
                        <div className="absolute inset-0 -z-0">
                            <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-primary-foreground/5 blur-3xl" />
                            <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-primary-foreground/5 blur-3xl" />
                        </div>
                        <div className="relative z-10">
                            <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
                                Ready to Streamline Your Fashion Business?
                            </h2>
                            <p className="mx-auto mt-4 max-w-xl text-white/80">
                                Join 500+ fashion brands already using Clothify ERP to manage inventory, boost sales, and grow faster.
                            </p>
                            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                                <Link to="/">
                                    <Button size="lg" variant="secondary" className="h-12 gap-2 px-8 text-base">
                                        Start Your Free Trial <ArrowRight className="h-4 w-4" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-border bg-card py-12">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid gap-8 md:grid-cols-4">
                        <div>
                            <div className="flex items-center gap-2">
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                                    <Shirt className="h-4 w-4 text-white" />
                                </div>
                                <span className="font-heading text-lg font-bold">Clothify ERP</span>
                            </div>
                            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                                The complete inventory and sales management system for modern fashion businesses.
                            </p>
                        </div>
                        {[
                            { title: "Product", links: ["Features", "Pricing", "Integrations", "Changelog"] },
                            { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
                            { title: "Support", links: ["Help Center", "Documentation", "API Reference", "Status"] },
                        ].map((col) => (
                            <div key={col.title}>
                                <h4 className="font-heading text-sm font-semibold">{col.title}</h4>
                                <ul className="mt-3 space-y-2">
                                    {col.links.map((link) => (
                                        <li key={link}>
                                            <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">{link}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
                        <p className="text-sm text-muted-foreground">© 2026 Clothify ERP. All rights reserved.</p>
                        <div className="flex gap-6">
                            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy</a>
                            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
