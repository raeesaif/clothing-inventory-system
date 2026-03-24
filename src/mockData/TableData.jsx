import { Pencil, Trash } from "lucide-react"
export const columns = [
    {
        accessorKey: "product",
        header: "Product",
    },
    {
        accessorKey: "sku",
        header: "SKU",
    },
    {
        accessorKey: "category",
        header: "Category",
    },
    {
        accessorKey: "size",
        header: "Size",
    },
    {
        accessorKey: "color",
        header: "Color",
    },
    {
        accessorKey: "price",
        header: "Price",
        cell: ({ row }) => `$${row.getValue("price")}`,
    },
    {
        id: "actions",
        header: "Actions",
        cell: () => (
            <div className="flex gap-2">
                <Pencil className="w-4 h-4 cursor-pointer" />
                <Trash className="w-4 h-4 cursor-pointer text-red-500" />
            </div>
        ),
    },
]

export const data = [
    {
        product: "Cashmere Overcoat",
        sku: "LT-OW-001",
        category: "Outerwear",
        size: "M",
        color: "Charcoal",
        price: 890,
    },
    {
        product: "Silk Evening Dress",
        sku: "LT-DR-002",
        category: "Dresses",
        size: "S",
        color: "Midnight Blue",
        price: 1250,
    },
    {
        product: "Tailored Wool Blazer",
        sku: "LT-BL-003",
        category: "Blazers",
        size: "L",
        color: "Navy",
        price: 650,
    },
    {
        product: "Linen Summer Shirt",
        sku: "LT-SH-004",
        category: "Shirts",
        size: "M",
        color: "White",
        price: 180,
    },
    {
        product: "Leather Chelsea Boots",
        sku: "LT-FW-005",
        category: "Footwear",
        size: "42",
        color: "Cognac",
        price: 520,
    },
    {
        product: "Merino Wool Sweater",
        sku: "LT-KW-006",
        category: "Knitwear",
        size: "L",
        color: "Burgundy",
        price: 320,
    },
    {
        product: "Stretch Denim Jeans",
        sku: "LT-DN-007",
        category: "Denim",
        size: "32",
        color: "Indigo",
        price: 240,
    },
    {
        product: "Silk Pocket Square",
        sku: "LT-AC-008",
        category: "Accessories",
        size: "One Size",
        color: "Gold",
        price: 85,
    },
    {
        product: "Cashmere Scarf",
        sku: "LT-AC-009",
        category: "Accessories",
        size: "One Size",
        color: "Camel",
        price: 280,
    },
    {
        product: "Trench Coat",
        sku: "LT-OW-010",
        category: "Outerwear",
        size: "M",
        color: "Khaki",
        price: 780,
    },
]
