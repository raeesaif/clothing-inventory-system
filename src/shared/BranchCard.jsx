import React from 'react'
import { Badge } from '@/components/ui/badge'
import { CiLocationOn } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from "@/components/ui/separator"

const BranchCard = ({ className = className, items = [] }) => {
    return (
        <div className='container' >
            <div className={className}>
                {items.map((item) => (
                    <Card
                        key={item.id}
                        className="w-full max-w-md p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                        <CardContent className="space-y-3">

                            {/* Header */}
                            <div className="flex justify-between items-center">
                                <h1 className="font-semibold">{item.name}</h1>
                                <Badge
                                    variant="outline"
                                    className={`${item.status === "active"
                                        ? "text-green-600 border-green-600"
                                        : "text-red-600 border-red-600"
                                        }`}
                                >
                                    {item.status}
                                </Badge>
                            </div>

                            {/* Info */}
                            <div className="flex items-center gap-3">
                                <CiLocationOn />
                                <p>{item.location}</p>
                            </div>

                            <div className="flex items-center gap-3">
                                <CiUser />
                                <p>{item.user}</p>
                            </div>

                            <div className="flex items-center gap-3">
                                <BsTelephone />
                                <p>{item.phone}</p>
                            </div>

                            <div className="flex items-center gap-3">
                                <AiOutlineMail />
                                <p>{item.email}</p>
                            </div>

                            <Separator />

                            {/* Stats */}
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xl font-semibold">
                                        {item.totalProducts}
                                    </p>
                                    <p className="text-xs text-gray-400">Products</p>
                                </div>

                                <div>
                                    <p className="text-xl font-semibold text-orange-500">
                                        {item.lowStock}
                                    </p>
                                    <p className="text-xs text-gray-400">Low Stock</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};
export default BranchCard
