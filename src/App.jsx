import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SideBarLayout from './layout/SideBarLayout'
import AdminDashboard from "./Admin/AdminDashboard"
import AdminBranches from './Admin/AdminBranches'
import AdminVendors from './Admin/AdminVendors'
import AdminUsers from './Admin/AdminUsers'
import AdminRestockOrders from './Admin/AdminRestockOrders'
import AdminReports from './Admin/AdminReports'
import AdminOnlineOrders from './Admin/AdminOnlineOrders'
import AdminWarehouse from './Admin/AdminWarehouse'
import AdminProducts from './Admin/AdminProducts'
import AdminInventory from './Admin/AdminInventory'
import { MainLayout } from './layout/MainLayout'
import LandingPage from './pages/LandingPage'
import Setting from './pages/Setting'
function App() {


  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route element={<LandingPage />} path="/" />
          <Route element={<MainLayout />}>

            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/products" element={<AdminProducts />} />
            <Route path="/admin/inventory" element={<AdminInventory />} />
            <Route path="/admin/branches" element={<AdminBranches />} />
            <Route path="/admin/vendors" element={<AdminVendors />} />
            <Route path="/admin/users" element={<AdminUsers />} />
            <Route path="/admin/restock-orders" element={<AdminRestockOrders />} />
            <Route path="/admin/reports" element={<AdminReports />} />
            <Route path="/admin/online-orders" element={<AdminOnlineOrders />} />
            <Route path="/admin/warehouse" element={<AdminWarehouse />} />
            <Route path="/admin/settings" element={<Setting />} />

          </Route>

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
