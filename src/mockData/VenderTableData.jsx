import React from "react"

const statusMap = {
    "Active": { bg: "bg-green-100", text: "text-green-700" },
    "Inactive": { bg: "bg-gray-200", text: "text-gray-700" },
}


export const columns = [
    {
        accessorKey: "vendor",
        header: "Vendor",
    },
    {
        accessorKey: "contact",
        header: "Contact",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "orders",
        header: "Orders",
    },
    {
        accessorKey: "pendingpayment",
        header: "Pending Payment",
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            const status = row.original.status
            const { bg, text } = statusMap[status] ?? { bg: "bg-gray-100", text: "text-gray-700" }
            return (
                <span className={`capitalize px-2 py-1 rounded-full text-xs font-medium ${bg} ${text}`}>
                    {status}
                </span>
            )
        },
    },
]

export const data = [
    {
        vendor: "TextileCo International",
        contact: "+1-555-0101",
        email: "orders@textileco.com",
        orders: 45,
        pendingpayment: "$12,500",
        status: "Active",
    },
    {
        vendor: "FabricWorld Ltd",
        contact: "+1-555-0101",
        email: "supply@fabricworld.com",
        orders: 32,
        pendingpayment: "$8,200",
        status: "Active",
    },
    {
        vendor: "Premium Threads Inc",
        contact: "+1-555-0101",
        email: "sales@premiumthreads.com",
        orders: 28,
        pendingpayment: "-",
        status: "Active",
    },
    {
        vendor: "Global Garments",
        contact: "+1-555-0101",
        email: "info@globalgarments.com",
        orders: 15,
        pendingpayment: "$3,400",
        status: "Inactive",
    },
]
