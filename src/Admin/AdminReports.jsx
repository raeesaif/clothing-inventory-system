import React from 'react'
import StateCard from '@/shared/StateCard'
import { TfiPackage } from "react-icons/tfi";
import { AiOutlineBranches } from "react-icons/ai";
import { BiDollar } from "react-icons/bi";
import { BsGraphUpArrow } from "react-icons/bs";
import { TbReportAnalytics, TbTruck } from "react-icons/tb";
import { MdOutlineWarehouse } from "react-icons/md";
import { ShoppingCart } from "lucide-react";
import RevenueChart from '@/shared/RevenueChart';
import CategoryChart from '@/shared/CategoryChart';
import GlobalCard from '@/shared/GlobalCard';
import SubHeader from '@/shared/SubHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const STATE_CARD = [
    { title: "Total Revenue", value: "$2.5M", description: "+12.5% from last month", icon: <BiDollar />, color: "green" },
    { title: "Total Products", value: 833, icon: <TfiPackage />, color: "blue" },
    { title: "Active Branches", value: 5, icon: <AiOutlineBranches />, color: "purple" },
    { title: "Online Orders", value: 142, description: "+8% this week", icon: <ShoppingCart />, color: "pink" },
    { title: "Warehouse Stock", value: "12.4K", icon: <MdOutlineWarehouse />, color: "yellow" },
    { title: "Growth Rate", value: "12.5%", icon: <BsGraphUpArrow />, color: "green" },
]

const BRANCH_PERFORMANCE = [
    { name: "Downtown Flagship", revenue: "$580K", orders: 1247, growth: "+15.2%", status: "excellent" },
    { name: "Midtown Gallery", revenue: "$420K", orders: 892, growth: "+12.8%", status: "good" },
    { name: "Brooklyn Heights", revenue: "$380K", orders: 756, growth: "+8.5%", status: "good" },
    { name: "SoHo Boutique", revenue: "$290K", orders: 543, growth: "+5.2%", status: "average" },
    { name: "Upper East Side", revenue: "$830K", orders: 1654, growth: "+18.7%", status: "excellent" },
]

const WAREHOUSE_STOCK = [
    { category: "Outerwear", stock: 3420, value: "$342K", status: "healthy" },
    { category: "Dresses", stock: 2850, value: "$285K", status: "healthy" },
    { category: "Blazers", stock: 1240, value: "$186K", status: "low" },
    { category: "Shirts", stock: 2100, value: "$147K", status: "healthy" },
    { category: "Knitwear", stock: 890, value: "$98K", status: "critical" },
    { category: "Accessories", stock: 1580, value: "$79K", status: "healthy" },
]

const MOST_DEMANDING_PRODUCTS = [
    { product: "Cashmere Overcoat", sold: 342, revenue: "$85.5K", trend: "up" },
    { product: "Silk Evening Dress", sold: 298, revenue: "$74.5K", trend: "up" },
    { product: "Tailored Wool Blazer", sold: 256, revenue: "$64K", trend: "stable" },
    { product: "Leather Chelsea Boots", sold: 234, revenue: "$58.5K", trend: "up" },
    { product: "Merino Wool Sweater", sold: 189, revenue: "$37.8K", trend: "down" },
]

const ONLINE_ORDERS_SUMMARY = [
    { title: "Pending Orders", description: "Awaiting processing", value: "24", status: "pending" },
    { title: "Processing", description: "Being prepared", value: "38", status: "approved" },
    { title: "Shipped", description: "Out for delivery", value: "56", status: "completed" },
    { title: "Delivered", description: "Successfully delivered", value: "142", status: "completed" },
]

const RECENT_RESTOCKS = [
    { title: "Silk Evening Dress", description: "Downtown Flagship · Qty: 15", status: "pending" },
    { title: "Linen Summer Shirt", description: "Midtown Gallery · Qty: 30", status: "approved" },
    { title: "Merino Wool Sweater", description: "Brooklyn Heights · Qty: 20", status: "completed" },
    { title: "Silk Pocket Square", description: "Downtown Flagship · Qty: 25", status: "pending" },
    { title: "Cashmere Scarf", description: "SoHo Boutique · Qty: 12", status: "approved" }
]

const LOW_STOCK_ALERTS = [
    { title: "Silk Evening Dress", description: "Downtown Flagship · Qty: 3", status: "low stock" },
    { title: "Linen Summer Shirt", description: "Midtown Gallery · Qty: 0", status: "out of stock" },
    { title: "Merino Wool Sweater", description: "Brooklyn Heights · Qty: 2", status: "low stock" },
    { title: "Silk Pocket Square", description: "Downtown Flagship · Qty: 0", status: "out of stock" },
    { title: "Cashmere Scarf", description: "SoHo Boutique · Qty: 4", status: "low stock" }
]

const AdminReports = () => {
    const statusColors = {
        excellent: "bg-green-100 text-green-700",
        good: "bg-blue-100 text-blue-700",
        average: "bg-yellow-100 text-yellow-700",
        healthy: "bg-green-100 text-green-700",
        low: "bg-yellow-100 text-yellow-700",
        critical: "bg-red-100 text-red-700",
    }

    return (
        <>
            <SubHeader title="Business Reports" description="Comprehensive analytics across all operations" />

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4 mt-4">
                {STATE_CARD?.map((item, index) => <StateCard key={index} {...item} />)}
            </div>

            {/* Revenue & Category Charts */}
            <div div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6" >
                <RevenueChart />
                <CategoryChart />
            </div>

            {/* Branch Performance */}
            <Card className="mt-6">
                <CardHeader>
                    <CardTitle>Branch Performance</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-3">
                        {BRANCH_PERFORMANCE.map((branch, index) => (
                            <div key={index} className="flex items-center justify-between bg-gray-50 rounded-lg p-4">
                                <div className="flex-1">
                                    <h3 className="font-semibold">{branch.name}</h3>
                                    <p className="text-sm text-muted-foreground">{branch.orders} orders</p>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="text-right">
                                        <p className="font-semibold">{branch.revenue}</p>
                                        <p className="text-sm text-green-600">{branch.growth}</p>
                                    </div>
                                    <Badge className={statusColors[branch.status]}>
                                        {branch.status}
                                    </Badge>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Warehouse Stock & Most Demanding Products */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Warehouse Stock Overview</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-3">
                            {WAREHOUSE_STOCK.map((item, index) => (
                                <div key={index} className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                                    <div>
                                        <h4 className="font-medium">{item.category}</h4>
                                        <p className="text-sm text-muted-foreground">{item.stock} units · {item.value}</p>
                                    </div>
                                    <Badge className={statusColors[item.status]}>
                                        {item.status}
                                    </Badge>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Most Demanding Products</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-3">
                            {MOST_DEMANDING_PRODUCTS.map((item, index) => (
                                <div key={index} className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                                    <div className="flex-1">
                                        <h4 className="font-medium">{item.product}</h4>
                                        <p className="text-sm text-muted-foreground">{item.sold} sold · {item.revenue}</p>
                                    </div>
                                    <div className="text-right">
                                        {item.trend === "up" && <span className="text-green-600 text-xl">↑</span>}
                                        {item.trend === "down" && <span className="text-red-600 text-xl">↓</span>}
                                        {item.trend === "stable" && <span className="text-gray-600 text-xl">→</span>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Online Orders Summary */}
            <Card className="mt-6">
                <CardHeader>
                    <CardTitle>Online Orders Summary</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {ONLINE_ORDERS_SUMMARY.map((item, index) => (
                            <div key={index} className="bg-gray-50 rounded-lg p-4">
                                <div className="flex items-center justify-between mb-2">
                                    <h4 className="font-semibold">{item.title}</h4>
                                    <span className="text-2xl font-bold text-primary">{item.value}</span>
                                </div>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Recent Restocks & Low Stock Alerts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <GlobalCard cardTitle="Recent Restock Orders" items={RECENT_RESTOCKS} />
                <GlobalCard cardTitle="Low Stock Alerts" items={LOW_STOCK_ALERTS} />
            </div>
        </>
    )
}

export default AdminReports