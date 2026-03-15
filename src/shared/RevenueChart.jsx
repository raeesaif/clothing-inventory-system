import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts"

const data = [
    { month: "Jan", revenue: 180000 },
    { month: "Feb", revenue: 195000 },
    { month: "Mar", revenue: 210000 },
    { month: "Apr", revenue: 240000 },
    { month: "May", revenue: 228000 },
    { month: "Jun", revenue: 260000 },
    { month: "Jul", revenue: 275000 },
    { month: "Aug", revenue: 250000 },
    { month: "Sep", revenue: 290000 },
    { month: "Oct", revenue: 310000 },
    { month: "Nov", revenue: 345000 },
    { month: "Dec", revenue: 390000 }
]

export default function RevenueChart() {
    return (
        <div className="bg-white rounded-xl p-6 shadow-sm">

            <h2 className="text-lg font-semibold mb-4">
                Revenue Overview
            </h2>

            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>

                    <CartesianGrid strokeDasharray="3 3" vertical={false} />

                    <XAxis dataKey="month" />

                    <YAxis
                        tickFormatter={(value) => `$${value / 1000}k`}
                    />

                    <Tooltip
                        formatter={(value) => [`$${value.toLocaleString()}`, "Revenue"]}
                    />

                    <Bar
                        dataKey="revenue"
                        fill="#f59e0b"
                        radius={[6, 6, 0, 0]}
                    />

                </BarChart>
            </ResponsiveContainer>

        </div>
    )
}