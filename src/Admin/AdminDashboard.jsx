import React from 'react'
import StateCard from '@/shared/StateCard'
import { TfiPackage } from "react-icons/tfi";
import { AiOutlineBranches } from "react-icons/ai";
import { BiDollar } from "react-icons/bi";
import { BsGraphUpArrow } from "react-icons/bs";
import { TbReportAnalytics } from "react-icons/tb";
import RevenueChart from '@/shared/RevenueChart';
import CategoryChart from '@/shared/CategoryChart';
import GlobalCard from '@/shared/GlobalCard';
import SubHeader from '@/shared/SubHeader';


const STATE_CARD = [
    { title: "Total Products", value: 833, icon: <TfiPackage />, color: "green" },
    { title: "Branches", value: 5, icon: <AiOutlineBranches />, color: "blue" },
    { title: "Low Stock", value: 62, icon: <TfiPackage />, color: "red" },
    { title: "Pending Orders", value: 14, icon: <TbReportAnalytics />, color: "yellow" },
    { title: "Revenue", value: "$2.5M", description: "+12.5% from last month", icon: <BiDollar />, color: "green" },
    { title: "Growth", value: "12.5 %", icon: <BsGraphUpArrow />, color: "pink" },
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

const Dashboard = () => {
    return (
        < >
            <SubHeader title="Dashboard" description="Overview of your brand operations" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4 mt-4" >
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

export default Dashboard