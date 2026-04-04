import { PackagePlus } from "lucide-react"

const statusMap = {
    "fulfilled": { bg: "bg-green-100", text: "text-green-700" },
    "pending": { bg: "bg-yellow-100", text: "text-yellow-700" },
    "approved": { bg: "bg-green-100", text: "text-green-700" },
}

export const columns = [
    { accessorKey: "requestid", header: "Request ID" },
    { accessorKey: "branch", header: "Branch" },
    { accessorKey: "product", header: "Product" },
    { accessorKey: "qty", header: "Qty" },
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
        requestid: "SR-001",
        product: "Silk Evening Dress",
        branch: "Downtown Flagship",
        qty: 15,
        requestedby: "Sarah Johnson",
        date: "2024-03-25",
        status: "pending",
    },
    {
        requestid: "SR-002",
        product: "Linen Summer Shirt",
        branch: "Midtown Gallery",
        qty: 30,
        requestedby: "Michael Chen",
        date: "2024-03-22",
        status: "approved",
    },
    {
        requestid: "SR-003",
        product: "Merino Wool Sweater	",
        branch: "Brooklyn Heights",
        qty: 20,
        requestedby: "Emma Davis",
        date: "2024-03-18",
        status: "fulfilled",
    },
    {
        requestid: "SR-004",
        product: "Silk Pocket Square",
        branch: "Downtown Flagship",
        qty: 25,
        requestedby: "Sarah Johnson",
        date: "2024-03-26",
        status: "pending",
    },
    {
        requestid: "SR-005",
        product: "Cashmere Scarf",
        branch: "SoHo Boutique",
        qty: 12,
        requestedby: "James Wilson",
        date: "2024-03-23",
        status: "approved",
    },
    {
        requestid: "SR-006",
        product: "Cashmere Overcoat",
        branch: "Midtown Gallery",
        qty: 10,
        requestedby: "Michael Chen",
        date: "2024-03-15",
        status: "fulfilled",
    },
    {
        requestid: "SR-007",
        product: "Leather Chelsea Boots",
        branch: "Brooklyn Heights",
        qty: 8,
        requestedby: "Emma Davis",
        date: "2024-03-20",
        status: "pending",
    },

]
