import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import React from 'react'

const GlobalCard = ({
    cardTitle = "",
    items = []
}) => {
    const statusColor = {
        pending: "bg-yellow-100 text-yellow-600",
        approved: "bg-blue-100 text-blue-600",
        completed: "bg-green-100 text-green-600",
        "low stock": "bg-yellow-100 text-yellow-600",
        "out of stock": "bg-red-100 text-red-600"
    }
    return (
        <>
            <Card className="p-4" >
                <CardTitle className="p-2">{cardTitle}</CardTitle>
                <CardContent className="space-y-3 p-0">
                    {items?.map((item, index) => (
                        <div key={index} className="flex items-center justify-between bg-gray-50 rounded-lg p-3" >
                            <div>
                                <h1>{item.title}</h1>
                                <p>{item.description}</p>
                            </div>
                            <div>
                                <Badge className={statusColor[item.status] || "bg-gray-500"} >
                                    {item.status}
                                </Badge>
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>


        </>
    )
}

export default GlobalCard