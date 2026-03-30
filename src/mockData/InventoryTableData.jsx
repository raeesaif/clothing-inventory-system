import { PackagePlus } from "lucide-react"

const statusMap = {
    "in stock":     { bg: "bg-green-100",  text: "text-green-700"  },
    "low stock":    { bg: "bg-yellow-100", text: "text-yellow-700" },
    "out of-stock": { bg: "bg-red-100",    text: "text-red-700"    },
}

export const columns = [
    { accessorKey: "product",  header: "Product"   },
    { accessorKey: "branch",   header: "Branch"    },
    { accessorKey: "category", header: "Category"  },
    { accessorKey: "qty",      header: "Qty"       },
    { accessorKey: "minstock", header: "Min Stock" },
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
    {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => {
            const status = row.original.status
            const needsRestock = status === "low stock" || status === "out of-stock"
            if (!needsRestock) return null
            return (
                <div className="flex items-center gap-2 bg-gray-200 py-2 px-2 rounded-lg cursor-pointer hover:bg-primary hover:text-white w-fit">
                    <PackagePlus className="h-4 w-4" />
                    <p>Restock</p>
                </div>
            )
        },
    },
]

export const data = [
    {
        product: "Cashmere Overcoat",
        branch: "Downtown Flagship",
        category: "Outerwear",
        qty: 24,
        minstock: 10,
        status: "in stock",
    },
    {
        product: "Silk Evening Dress",
        branch: "Downtown Flagship",
        category: "Outerwear",
        qty: 3,
        minstock: 5,
        status: "low stock",
    },
    {
        product: "Tailored Wool Blazer",
        branch: "Downtown Flagship",
        category: "Outerwear",
        qty: 18,
        minstock: 8,
        status: "in stock",
    },
    {
        product: "Linen Summer Shirt",
        branch: "Downtown Flagship",
        category: "Outerwear",
        qty: 0,
        minstock: 10,
        status: "out of-stock",
    },
    {
        product: "Leather Chelsea Boots",
        branch: "Downtown Flagship",
        category: "Outerwear",
        qty: 18,
        minstock: 8,
        status: "in stock",
    },
    {
        product: "Merino Wool Sweater",
        branch: "Downtown Flagship",
        category: "Outerwear",
        qty: 2,
        minstock: 8,
        status: "low stock",
    },
    {
        product: "Stretch Denim Jeans",
        branch: "Downtown Flagship",
        category: "Outerwear",
        qty: 35,
        minstock: 15,
        status: "in stock",
    },
    {
        product: "Silk Pocket Square",
        branch: "Downtown Flagship",
        category: "Outerwear",
        qty: 0,
        minstock: 10,
        status: "out of-stock",
    },
    {
        product: "Cashmere Scarf",
        branch: "Downtown Flagship",
        category: "Outerwear",
        qty: 4,
        minstock: 6,
        status: "low stock",
    },
    {
        product: "Trench Coat",
        branch: "Downtown Flagship",
        category: "Outerwear",
        qty: 12,
        minstock: 5,
        status: "in stock",
    },
]
