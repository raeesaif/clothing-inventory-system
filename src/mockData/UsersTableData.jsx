import React from "react"

const statusMap = {
    "Active": { bg: "bg-green-100", text: "text-green-700" },
    "Inactive": { bg: "bg-gray-200", text: "text-gray-700" },
}


export const columns = [
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "role",
        header: "Role",
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
        name: "Alex Rivera",
        email: "alex@threadflow.com",
        role: "Admin",
        status: "Active",
    },
    {
        name: "Sarah Chen",
        email: "sarah@threadflow.com",
        role: "Branch Manager",
        status: "Active",
    },
    {
        name: "Michael Lee",
        email: "michael@threadflow.com",
        role: "Branch Manager",
        status: "Active",
    },
    {
        name: "James Wilson",
        email: "james@threadflow.com",
        role: "Branch Manager",
        status: "Active",
    },
    {
        name: "Maria Garcia",
        email: "maria@threadflow.com",
        role: "Warehouse Manager",
        status: "Active",
    },
    {
        name: "Tom Bradley",
        email: "tom@threadflow.com",
        role: "Warehouse Manager",
        status: "Active",
    },
    {
        name: "Lisa Park",
        email: "lisa@threadflow.com",
        role: "Staff",
        status: "Inactive",
    },
]
