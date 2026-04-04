import React, { useState } from 'react'
import SubHeader from '@/shared/SubHeader'
import StateCard from '@/shared/StateCard'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ShoppingCart, TrendingUp, Package, Star, DollarSign, Users } from 'lucide-react'
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { DataTable } from '@/shared/DataTable'

const STATE_CARDS = [
    { title: "Online Revenue", value: "$847K", description: "+18.2% from last month", icon: <DollarSign />, color: "green" },
    { title: "Total Orders", value: "1,847", description: "+142 today", icon: <ShoppingCart />, color: "blue" },
    { title: "Avg Order Value", value: "$458", description: "+$23 vs last month", icon: <TrendingUp />, color: "purple" },
    { title: "Active Customers", value: "3,421", description: "+8.5% growth", icon: <Users />, color: "pink" },
    { title: "Pending Orders", value: "24", icon: <Package />, color: "yellow" },
    { title: "Customer Rating", value: "4.8", description: "Based on 1.2K reviews", icon: <Star />, color: "green" },
]

// Daily orders data
const dailyOrdersData = [
    { time: "12 AM", orders: 12 },
    { time: "3 AM", orders: 8 },
    { time: "6 AM", orders: 15 },
    { time: "9 AM", orders: 45 },
    { time: "12 PM", orders: 78 },
    { time: "3 PM", orders: 92 },
    { time: "6 PM", orders: 125 },
    { time: "9 PM", orders: 98 },
]

// Monthly orders data
const monthlyOrdersData = [
    { month: "Jan", orders: 1240, revenue: 568000 },
    { month: "Feb", orders: 1380, revenue: 632000 },
    { month: "Mar", orders: 1520, revenue: 697000 },
    { month: "Apr", orders: 1680, revenue: 770000 },
    { month: "May", orders: 1590, revenue: 728000 },
    { month: "Jun", orders: 1750, revenue: 802000 },
    { month: "Jul", orders: 1820, revenue: 834000 },
    { month: "Aug", orders: 1690, revenue: 774000 },
    { month: "Sep", orders: 1880, revenue: 861000 },
    { month: "Oct", orders: 1920, revenue: 879000 },
    { month: "Nov", orders: 2050, revenue: 939000 },
    { month: "Dec", orders: 2340, revenue: 1072000 },
]

// Yearly comparison
const yearlyData = [
    { year: "2022", orders: 15420, revenue: 7068000 },
    { year: "2023", orders: 18760, revenue: 8596000 },
    { year: "2024", orders: 21840, revenue: 10004000 },
]

// Most demanding products
const topProducts = [
    { product: "Cashmere Overcoat", sold: 342, revenue: "$85.5K", rating: 4.9, trend: "+15%" },
    { product: "Silk Evening Dress", sold: 298, revenue: "$74.5K", rating: 4.8, trend: "+22%" },
    { product: "Tailored Wool Blazer", sold: 256, revenue: "$64K", rating: 4.7, trend: "+8%" },
    { product: "Leather Chelsea Boots", sold: 234, revenue: "$58.5K", rating: 4.9, trend: "+18%" },
    { product: "Merino Wool Sweater", sold: 189, revenue: "$37.8K", rating: 4.6, trend: "+5%" },
]

// Order status distribution
const orderStatusData = [
    { name: "Delivered", value: 1247, color: "#10b981" },
    { name: "Shipped", value: 342, color: "#3b82f6" },
    { name: "Processing", value: 156, color: "#f59e0b" },
    { name: "Pending", value: 102, color: "#ef4444" },
]

// Customer feedback
const recentFeedback = [
    { customer: "Sarah Johnson", rating: 5, comment: "Excellent quality! Fast delivery and beautiful packaging.", product: "Silk Evening Dress", date: "2 hours ago" },
    { customer: "Michael Chen", rating: 5, comment: "Perfect fit. The cashmere is incredibly soft.", product: "Cashmere Overcoat", date: "5 hours ago" },
    { customer: "Emma Williams", rating: 4, comment: "Great product, but shipping took a bit longer than expected.", product: "Leather Chelsea Boots", date: "1 day ago" },
    { customer: "David Brown", rating: 5, comment: "Outstanding service! Will definitely order again.", product: "Tailored Wool Blazer", date: "1 day ago" },
    { customer: "Lisa Anderson", rating: 4, comment: "Good quality, slightly different color than shown online.", product: "Merino Wool Sweater", date: "2 days ago" },
]

// Recent orders table
const recentOrdersColumns = [
    { accessorKey: "orderId", header: "Order ID" },
    { accessorKey: "customer", header: "Customer" },
    { accessorKey: "product", header: "Product" },
    { accessorKey: "amount", header: "Amount" },
    { 
        accessorKey: "status", 
        header: "Status",
        cell: ({ row }) => {
            const status = row.original.status
            const colors = {
                delivered: "bg-green-100 text-green-700",
                shipped: "bg-blue-100 text-blue-700",
                processing: "bg-yellow-100 text-yellow-700",
                pending: "bg-red-100 text-red-700",
            }
            return <Badge className={colors[status]}>{status}</Badge>
        }
    },
    { accessorKey: "date", header: "Date" },
]

const recentOrdersData = [
    { orderId: "#ORD-2847", customer: "Sarah Johnson", product: "Silk Evening Dress", amount: "$250", status: "delivered", date: "Dec 28, 2024" },
    { orderId: "#ORD-2846", customer: "Michael Chen", product: "Cashmere Overcoat", amount: "$450", status: "shipped", date: "Dec 28, 2024" },
    { orderId: "#ORD-2845", customer: "Emma Williams", product: "Leather Chelsea Boots", amount: "$180", status: "processing", date: "Dec 27, 2024" },
    { orderId: "#ORD-2844", customer: "David Brown", product: "Tailored Wool Blazer", amount: "$320", status: "delivered", date: "Dec 27, 2024" },
    { orderId: "#ORD-2843", customer: "Lisa Anderson", product: "Merino Wool Sweater", amount: "$120", status: "pending", date: "Dec 27, 2024" },
    { orderId: "#ORD-2842", customer: "James Wilson", product: "Cashmere Scarf", amount: "$85", status: "delivered", date: "Dec 26, 2024" },
    { orderId: "#ORD-2841", customer: "Sophia Martinez", product: "Silk Pocket Square", amount: "$45", status: "shipped", date: "Dec 26, 2024" },
]

const AdminOnlineOrders = () => {
    const [timeFilter, setTimeFilter] = useState('daily')

    return (
        <div className='space-y-6'>
            <SubHeader 
                title="Online Orders" 
                description="Monitor and manage your e-commerce operations" 
            />

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                {STATE_CARDS.map((card, index) => <StateCard key={index} {...card} />)}
            </div>

            {/* Orders Analytics with Time Filter */}
            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <CardTitle>Orders Analytics</CardTitle>
                        <Tabs value={timeFilter} onValueChange={setTimeFilter}>
                            <TabsList>
                                <TabsTrigger value="daily">Daily</TabsTrigger>
                                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                                <TabsTrigger value="yearly">Yearly</TabsTrigger>
                            </TabsList>
                        </Tabs>
                    </div>
                </CardHeader>
                <CardContent>
                    {timeFilter === 'daily' && (
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={dailyOrdersData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="time" />
                                <YAxis />
                                <Tooltip />
                                <Line type="monotone" dataKey="orders" stroke="#f48d1c" strokeWidth={2} />
                            </LineChart>
                        </ResponsiveContainer>
                    )}
                    {timeFilter === 'monthly' && (
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={monthlyOrdersData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis yAxisId="left" orientation="left" />
                                <YAxis yAxisId="right" orientation="right" />
                                <Tooltip />
                                <Bar yAxisId="left" dataKey="orders" fill="#f48d1c" radius={[6, 6, 0, 0]} />
                                <Bar yAxisId="right" dataKey="revenue" fill="#3b82f6" radius={[6, 6, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    )}
                    {timeFilter === 'yearly' && (
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={yearlyData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="year" />
                                <YAxis />
                                <Tooltip formatter={(value) => value.toLocaleString()} />
                                <Bar dataKey="orders" fill="#f48d1c" radius={[6, 6, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    )}
                </CardContent>
            </Card>

            {/* Order Status & Top Products */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Order Status Distribution */}
                <Card>
                    <CardHeader>
                        <CardTitle>Order Status</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={250}>
                            <PieChart>
                                <Pie data={orderStatusData} dataKey="value" innerRadius={60} outerRadius={90} paddingAngle={3}>
                                    {orderStatusData.map((entry, index) => <Cell key={index} fill={entry.color} />)}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="grid grid-cols-2 gap-3 mt-4">
                            {orderStatusData.map((item) => (
                                <div key={item.name} className="flex items-center gap-2 text-sm">
                                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                                    <span className="text-muted-foreground">{item.name}: {item.value}</span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Top Products */}
                <Card className="lg:col-span-2">
                    <CardHeader>
                        <CardTitle>Most Demanding Products</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-3">
                            {topProducts.map((item, index) => (
                                <div key={index} className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">
                                            {index + 1}
                                        </div>
                                        <div>
                                            <h4 className="font-medium">{item.product}</h4>
                                            <p className="text-sm text-muted-foreground">{item.sold} sold · {item.revenue}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-1">
                                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                            <span className="text-sm font-medium">{item.rating}</span>
                                        </div>
                                        <Badge className="bg-green-100 text-green-700">{item.trend}</Badge>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Customer Feedback */}
            <Card>
                <CardHeader>
                    <CardTitle>Recent Customer Feedback</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {recentFeedback.map((feedback, index) => (
                            <div key={index} className="border-b last:border-0 pb-4 last:pb-0">
                                <div className="flex items-start justify-between mb-2">
                                    <div>
                                        <h4 className="font-semibold">{feedback.customer}</h4>
                                        <p className="text-sm text-muted-foreground">{feedback.product}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="flex">
                                            {Array.from({ length: feedback.rating }).map((_, i) => (
                                                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                            ))}
                                        </div>
                                        <span className="text-xs text-muted-foreground">{feedback.date}</span>
                                    </div>
                                </div>
                                <p className="text-sm text-muted-foreground italic">"{feedback.comment}"</p>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Recent Orders Table */}
            <Card>
                <CardHeader>
                    <CardTitle>Recent Orders</CardTitle>
                </CardHeader>
                <CardContent>
                    <DataTable columns={recentOrdersColumns} data={recentOrdersData} />
                </CardContent>
            </Card>
        </div>
    )
}

export default AdminOnlineOrders