import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Login from "./pages/Login";
import Pricing from "./pages/Pricing";
import KYC from "./pages/KYC";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Roster from "./pages/Roster";
import Earnings from "./pages/Earnings";
import Incentives from "./pages/Incentives";
import AdminProfile from "./pages/AdminProfile";
import AdminSecurity from "./pages/AdminSecurity";
import Settings from "./pages/Settings";
import Support from "./pages/Support";

function App() {
  return (
    <Routes>
      {/* Login Route - No Sidebar */}
      <Route path="/login" element={<Login />} />

      {/* Main App Routes - With Sidebar & Header */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="orders" element={<Orders />} />
        <Route path="roster" element={<Roster />} />
        <Route path="earnings" element={<Earnings />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="kyc" element={<KYC />} />
        <Route path="incentives" element={<Incentives />} />
        <Route path="support" element={<Support />} />
        <Route path="admin-profile" element={<AdminProfile />} />
        <Route path="admin-security" element={<AdminSecurity />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;