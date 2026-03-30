import { PackagePlus } from "lucide-react"

const statusMap = {
    "completed": { bg: "bg-green-100", text: "text-green-700" },
    "pending": { bg: "bg-yellow-100", text: "text-yellow-700" },
    "cancelled": { bg: "bg-red-100", text: "text-red-700" },
    "approved": { bg: "bg-blue-100", text: "text-blue-700" },
}

export const columns = [
    { accessorKey: "orderid", header: "Order ID" },
    { accessorKey: "product", header: "Product" },
    { accessorKey: "branch", header: "Branch" },
    { accessorKey: "qty", header: "Qty" },
    { accessorKey: "requestedby", header: "Requested By" },
    { accessorKey: "date", header: "Date" },
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
        orderid: "R1",
        product: "Silk Evening Dress",
        branch: "Downtown Flagship",
        qty: 15,
        requestedby: "Sarah Johnson",
        date: "2024-03-25",
        status: "pending",
    },
    {
        orderid: "R2",
        product: "Linen Summer Shirt",
        branch: "Midtown Gallery",
        qty: 30,
        requestedby: "Michael Chen",
        date: "2024-03-22",
        status: "approved",
    },
    {
        orderid: "R3",
        product: "Merino Wool Sweater	",
        branch: "Brooklyn Heights",
        qty: 20,
        requestedby: "Emma Davis",
        date: "2024-03-18",
        status: "completed",
    },
    {
        orderid: "R4",
        product: "Silk Pocket Square",
        branch: "Downtown Flagship",
        qty: 25,
        requestedby: "Sarah Johnson",
        date: "2024-03-26",
        status: "pending",
    },
    {
        orderid: "R5",
        product: "Cashmere Scarf",
        branch: "SoHo Boutique",
        qty: 12,
        requestedby: "James Wilson",
        date: "2024-03-23",
        status: "approved",
    },
    {
        orderid: "R6",
        product: "Cashmere Overcoat",
        branch: "Midtown Gallery",
        qty: 10,
        requestedby: "Michael Chen",
        date: "2024-03-15",
        status: "completed",
    },
    {
        orderid: "R7",
        product: "Leather Chelsea Boots",
        branch: "Brooklyn Heights",
        qty: 8,
        requestedby: "Emma Davis",
        date: "2024-03-20",
        status: "cancelled",
    },

]
