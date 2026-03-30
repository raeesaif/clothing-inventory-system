import React from 'react'
import { useNavigate } from 'react-router-dom';
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineBranches } from "react-icons/ai";
import { TfiPackage } from "react-icons/tfi";
import { TbPackages } from "react-icons/tb";
import { TbReportAnalytics } from "react-icons/tb";
import { VscGraph } from "react-icons/vsc";
import { RiBaseStationLine } from "react-icons/ri";
import { MdOutlineSettings } from "react-icons/md";
import { MdOutlineWarehouse } from "react-icons/md";
import { TbTruck } from "react-icons/tb";
import { LuUsersRound } from "react-icons/lu";


import { NavLink } from 'react-router-dom';
import { Sidebar, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarFooter, SidebarContent } from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"
import { LogOut, Shirt, } from 'lucide-react';
const SideBarLayout = () => {


    const roleNavigation = {
        Admin: [
            { icon: <MdOutlineDashboard />, name: "DashBoard", path: "/admin/dashboard" },
            { icon: <AiOutlineBranches />, name: "Branches", path: "/admin/branches" },
            { icon: <TfiPackage />, name: "Products", path: "/admin/products" },
            { icon: <TbPackages />, name: "Inventory", path: "/admin/inventory" },
            { icon: <MdOutlineWarehouse />, name: "Warehouse", path: "/admin/warehouse" },
            { icon: <TbTruck />, name: "Vendors", path: "/admin/vendors" },
            { icon: <LuUsersRound />, name: "Users", path: "/admin/users" },
            { icon: <TbReportAnalytics />, name: "Restock Orders", path: "/admin/restock-orders" },
            { icon: <VscGraph />, name: "Reports", path: "/admin/reports" },
            { icon: <RiBaseStationLine />, name: "Online Orders", path: "/admin/online-orders" },
            { icon: <MdOutlineSettings />, name: "Settings", path: "/admin/settings" }
        ],
        BranchManager: [
            { icon: <MdOutlineDashboard />, name: "DashBoard", path: "/branch-manager/dashboard" },
            { icon: <TfiPackage />, name: "Products", path: "/branch-manager/products" },
            { icon: <TbPackages />, name: "Inventory", path: "/branch-manager/inventory" },
            { icon: <TbReportAnalytics />, name: "Restock Orders", path: "/restock-orders" },
            { icon: <VscGraph />, name: "Reports", path: "/reports" },
            { icon: <MdOutlineSettings />, name: "Settings", path: "/settings" }
        ]
        ,
        WarehouseManager: [
            { icon: <MdOutlineDashboard />, name: "DashBoard", path: "/branch-manager/dashboard" },
            { icon: <TfiPackage />, name: "Products", path: "/branch-manager/products" },
            { icon: <TbPackages />, name: "Inventory", path: "/branch-manager/inventory" },
            { icon: <MdOutlineWarehouse />, name: "Warehouse", path: "/branch-manager/warehouse" },
            { icon: <TbReportAnalytics />, name: "Restock Orders", path: "/restock-orders" },
            { icon: <VscGraph />, name: "Reports", path: "/reports" },
            { icon: <MdOutlineSettings />, name: "Settings", path: "/settings" }
        ]
    }

    const role = "Admin"

    const navigation = roleNavigation[role] || []
    const navigate = useNavigate()
    return (
        <>
            <Sidebar collapsible="icon" style={{ "--sidebar": "#141821" }}>
                <SidebarHeader>
                    <div className="flex items-center gap-2 px-2 py-2">
                        {/* <a to="/" className="flex items-center gap-2">
                            <img src="/logo.png" alt="BusinessInvest" loading="lazy" className="h-8 w-auto" />
                        </a> */}
                        <p className='bg-primary py-2 px-3 rounded-2xl' ><Shirt /></p>
                        <Badge className="bg-slate-800 text-white font-bold text-lg rounded-md px-2 py-1">Clothify ERP</Badge>
                    </div>
                </SidebarHeader>
                <SidebarContent >
                    <SidebarMenu className="px-2 py-8 ">
                        {navigation?.map((project) => (
                            <SidebarMenuItem key={project.name} className="py-2">
                                <NavLink to={project.path}>
                                    {({ isActive }) => (
                                        <SidebarMenuButton isActive={isActive} asChild>
                                            <span>
                                                {project.icon}
                                                <span>{project.name}</span>
                                            </span>
                                        </SidebarMenuButton>
                                    )}
                                </NavLink>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarContent>
                <SidebarFooter>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton onClick={() => navigate("/")} className="text-slate-300 hover:text-white hover:bg-white/10 cursor-pointer">
                                <LogOut />
                                <span  >Log out</span>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarFooter>
            </Sidebar>
        </>
    )
}

export default SideBarLayout