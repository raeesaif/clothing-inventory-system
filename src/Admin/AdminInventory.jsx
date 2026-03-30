import SubHeader from '@/shared/SubHeader'
import { AlertTriangle, Search } from 'lucide-react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import React from 'react'
import { Input } from '@/components/ui/input'
import { DataTable } from '@/shared/DataTable'
import {
    columns,
    data
} from '@/mockData/InventoryTableData'

const AdminInventory = () => {
    return (
        <div className='space-y-6'>
            <div className='flex justify-between items-center' >
                <SubHeader
                    title="Inventory"
                    description="Track stock across all branches"
                />
                <div className='flex items-center gap-2 bg-primary/20 py-1 px-2 text-primary/100 rounded-lg' >
                    <AlertTriangle className="h-4 w-4" />
                    <p>5 items need attention</p>
                </div>
            </div>
            <div className="flex-1 flex items-center gap-4 mt-10">
                <div className="relative hidden sm:block w-72">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                        placeholder="Search inventory..."
                        className="pl-9 bg-muted/50 border focus-visible:ring-1 focus-visible:ring-primary/50  "
                    />
                </div>
                <div>
                    <Select>
                        <SelectTrigger className="w-full max-w-48">
                            <SelectValue placeholder="All Branches" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>All Branches</SelectLabel>
                                <SelectItem value="downtownflagship"> Downtown Flagship</SelectItem>
                                <SelectItem value="midtowngallery">Midtown Gallery</SelectItem>
                                <SelectItem value="brooklynheights">Brooklyn Heights</SelectItem>
                                <SelectItem value="sohoboutique">SoHo Boutique</SelectItem>
                                <SelectItem value="uppereastside">Upper East Side</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <Select>
                        <SelectTrigger className="w-full max-w-48">
                            <SelectValue placeholder="All Status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>All Status</SelectLabel>
                                <SelectItem value="instock">In Stock</SelectItem>
                                <SelectItem value="lowstock">Low Stock</SelectItem>
                                <SelectItem value="outofstock">Out of Stock</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <DataTable columns={columns} data={data} />
        </div>
    )
}

export default AdminInventory