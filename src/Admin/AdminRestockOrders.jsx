import { Button } from '@/components/ui/button'
import { DataTable } from '@/shared/DataTable'
import SubHeader from '@/shared/SubHeader'
import {
    columns,
    data
} from '@/mockData/RestockOrderTableData'

import React, { useState } from 'react'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { AddRestockOrderDialog } from '@/modals/AddRestockOrderDialog'

const AdminRestockOrder = () => {

    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(false)
    }

    const handelOpen = () => setOpen(true)

    return (
        <div className="space-y-6">

            <div className="flex justify-between items-center">
                <SubHeader
                    title="Restock Orders"
                    description="Manage inventory replenishment"
                />

                <Button onClick={handelOpen} className="text-white cursor-pointer">
                    New Order
                </Button>
            </div>
            <div className="flex-1 flex items-center gap-4 mt-10">
                <div className="relative hidden sm:block w-72">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                        placeholder="Search orders..."
                        className="pl-9 bg-muted/50 border focus-visible:ring-1 focus-visible:ring-primary/50  "
                    />
                </div>
                <div>
                    <Select>
                        <SelectTrigger className="w-full max-w-48">
                            <SelectValue placeholder="All Status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>All Status</SelectLabel>
                                <SelectItem value="pending"> Pending</SelectItem>
                                <SelectItem value="approved">Approved</SelectItem>
                                <SelectItem value="completed">Completed</SelectItem>
                                <SelectItem value="cancelled">Cancelled</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <DataTable columns={columns} data={data} />
            <AddRestockOrderDialog open={open} onClose={handleClose} />
        </div>
    )
}

export default AdminRestockOrder