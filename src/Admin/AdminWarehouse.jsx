import StateCard from '@/shared/StateCard'
import SubHeader from '@/shared/SubHeader'
import { TfiPackage } from "react-icons/tfi";
import { TbReportAnalytics } from "react-icons/tb";
import React from 'react'
import { MdOutlineWarehouse } from 'react-icons/md';
import { ArrowRightLeft } from 'lucide-react';
import { DataTable } from '@/shared/DataTable';
import { columns, data } from '@/mockData/StockRequestsTable';
import { columns as warehouseColumns, data as warehouseData } from '@/mockData/WarehouseInventoryTable';
const STATE_CARD = [
    { title: "Warehouse Stock", value: 568, icon: <MdOutlineWarehouse />, color: "blue" },
    { title: "Products Stored", value: 8, icon: <TfiPackage />, color: "green" },
    { title: "Pending Requests", value: 2, description: "Awaiting approval", icon: <TbReportAnalytics />, color: "yellow" },
    { title: "Transfers Today", value: "3", icon: <ArrowRightLeft />, color: "gray" },
]


const AdminWarehouse = () => {
    return (
        <>
            <SubHeader title="Warehouse" description="Central stock management" />

            <div className='mt-10' >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4 mt-4" >
                    {STATE_CARD?.map((item, index) => <StateCard key={index} {...item} />)}
                </div>
            </div>
            <div className='mt-10' >
                <h1 className='mb-5 font-bold' >Stock Requests</h1>
                <DataTable columns={columns} data={data} />
            </div>
            <div className='mt-10' >
                <h1 className='mb-5 font-bold' >Warehouse Inventory</h1>
                <DataTable columns={warehouseColumns} data={warehouseData} />
            </div>
        </>
    )
}

export default AdminWarehouse