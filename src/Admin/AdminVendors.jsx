import { Button } from '@/components/ui/button'
import { DataTable } from '@/shared/DataTable'
import SubHeader from '@/shared/SubHeader'
import {
    columns,
    data
} from '@/mockData/VenderTableData'

import React, { useState } from 'react'
import { AddProductDialog } from '@/modals/AddProductDialog'


const AdminVenders = () => {

    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(false)
    }

    const handelOpen = () => setOpen(true)

    return (
        <div className="space-y-6">

            <div className="flex justify-between items-center">
                <SubHeader
                    title="Vendors"
                    description="4 suppliers"
                />

                <Button onClick={handelOpen} className="text-white cursor-pointer">
                    Add Vender
                </Button>
            </div>
            <DataTable columns={columns} data={data} />
            <AddProductDialog open={open} onClose={handleClose} />
        </div>
    )
}

export default AdminVenders