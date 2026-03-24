import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { AddBranchDialog } from '@/modals/AddBranchDialog'
import BranchCard from '@/shared/BranchCard'
import SubHeader from '@/shared/SubHeader'
import { Search } from 'lucide-react'
import React, { useState } from 'react'

const BRANCHES = [
    { id: 1, name: "Downtown Flagship", location: "Downtown, New York", user: "Sarah Johnson", phone: "+1 212-555-0101", email: "downtown@luxthread.com", totalProducts: 120, status: "active", lowStock: "12" },
    { id: 2, name: "Midtown Gallery", location: "Midtown, New York", user: "Sarah Johnson", phone: "+1 212-555-0101", email: "downtown@luxthread.com", totalProducts: 95, status: "active", lowStock: "12" },
    { id: 3, name: "Brooklyn Heights", location: "Brooklyn, New York", user: "Sarah Johnson", phone: "+1 212-555-0101", email: "downtown@luxthread.com", totalProducts: 80, status: "inactive", lowStock: "12" },
    { id: 4, name: "SoHo Boutique", location: "SoHo, New York", user: "Sarah Johnson", phone: "+1 212-555-0101", email: "downtown@luxthread.com", totalProducts: 110, status: "active", lowStock: "12" },
    { id: 5, name: "Queens Plaza", location: "Queens, New York", user: "Sarah Johnson", phone: "+1 212-555-0101", email: "downtown@luxthread.com", totalProducts: 75, status: "active", lowStock: "12" },
]



const AdminBranches = () => {
    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(false)
    }

    const handelOpen = () => setOpen(true)

    return (
        <>
            <div className='flex justify-between items-center' >
                <SubHeader title="Branches" description="Manage your store branches and locations" />
                <Button onClick={handelOpen} className="text-white cursor-pointer " >
                    Add New Branch
                </Button>

            </div>
            <div className="flex-1 flex items-center gap-4 mt-10">
                <div className="relative hidden sm:block w-72">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                        placeholder="Search products, branches..."
                        className="pl-9 bg-muted/50 border focus-visible:ring-1 focus-visible:ring-primary/50  "
                    />
                </div>
            </div>
            <div className='mt-10' >
                <BranchCard className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4" items={BRANCHES} />
            </div>
            <AddBranchDialog open={open} onClose={handleClose} />
        </>
    )
}

export default AdminBranches