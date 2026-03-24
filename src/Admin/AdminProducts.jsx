import { Button } from '@/components/ui/button'
import { DataTable } from '@/shared/DataTable'
import SubHeader from '@/shared/SubHeader'
import {
    columns,
    data
} from '@/mockData/TableData'

import React, { useState } from 'react'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { AddProductDialog } from '@/modals/AddProductDialog'








const AdminProducts = () => {

    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(false)
    }

    const handelOpen = () => setOpen(true)

    return (
        <div className="space-y-6">

            <div className="flex justify-between items-center">
                <SubHeader
                    title="Products"
                    description="Manage your product catalog"
                />

                <Button onClick={handelOpen} className="text-white cursor-pointer">
                    Add New Products
                </Button>
            </div>
            <div className="flex-1 flex items-center gap-4 mt-10">
                <div className="relative hidden sm:block w-72">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                        placeholder="Search products..."
                        className="pl-9 bg-muted/50 border focus-visible:ring-1 focus-visible:ring-primary/50  "
                    />
                </div>
            </div>
            <DataTable columns={columns} data={data} />
            <AddProductDialog open={open} onClose={handleClose} />
        </div>
    )
}

export default AdminProducts