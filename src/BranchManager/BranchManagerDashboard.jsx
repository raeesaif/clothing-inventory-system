import React from 'react'
import StateCard from '@/shared/StateCard'
import { TfiPackage } from "react-icons/tfi";
import { TbReportAnalytics } from "react-icons/tb";
import RevenueChart from '@/shared/RevenueChart';
import CategoryChart from '@/shared/CategoryChart';
import GlobalCard from '@/shared/GlobalCard';
import SubHeader from '@/shared/SubHeader';
import { DollarSign } from 'lucide-react';


const STATE_CARD = [
    { title: "Total Revenue", value: "$106, 500", description: "+12.3% from last month", icon: <DollarSign />, color: "green" },
    { title: "Total Products", value: 827, description: "8 new this week", icon: <TfiPackage />, color: "blue" },
    { title: "Active Orders", value: 24, description: "+5 today", icon: <TfiPackage />, color: "yellow" },
    { title: "Low Stock Items", value: 3, description: "Needs attention", icon: <TbReportAnalytics />, color: "red" },
]


const RECENT_RESTOCKS = [
    { title: "Silk Evening Dress", description: "Downtown Flagship · Qty: 15", status: "pending" },
    { title: "Linen Summer Shirt", description: "Midtown Gallery · Qty: 30", status: "approved" },
    { title: "Merino Wool Sweater", description: "Brooklyn Heights · Qty: 20", status: "completed" },
    { title: "Silk Pocket Square", description: "Downtown Flagship · Qty: 25", status: "pending" },
    { title: "Cashmere Scarf", description: "SoHo Boutique · Qty: 12", status: "approved" }
];

const LOW_STOCK_ALERTS = [
    { title: "Silk Evening Dress", description: "Downtown Flagship · Qty: 15", status: "low stock" },
    { title: "Linen Summer Shirt", description: "Midtown Gallery · Qty: 30", status: "out of stock" },
    { title: "Merino Wool Sweater", description: "Brooklyn Heights · Qty: 20", status: "low stock" },
    { title: "Silk Pocket Square", description: "Downtown Flagship · Qty: 25", status: "out of stock" },
    { title: "Cashmere Scarf", description: "SoHo Boutique · Qty: 12", status: "low stock" }
];

const BrandManagerDashbaord = () => {
    return (
        < >
            <SubHeader title="Dashboard" description="Overview of your fashion business" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4 mt-4" >
                {STATE_CARD?.map((item, index) => <StateCard key={index} {...item} />)}
            </div>
            <div div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6" >
                <RevenueChart />
                <CategoryChart />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">

                <GlobalCard
                    cardTitle="Recent Restock Orders"
                    items={RECENT_RESTOCKS}
                />

                <GlobalCard
                    cardTitle="Low Stock Alerts"
                    items={LOW_STOCK_ALERTS}
                />

            </div>
        </>
    )
}

export default BrandManagerDashbaord