import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header"; // You'll create this similarly to Sidebar

const Layout = () => {
  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950">
      <Sidebar />
      <main className="flex-1 lg:ml-72 transition-all duration-300">
        <Header />
        <div className="p-8">
            <Outlet /> {/* This is where Dashboard, Orders, etc. render */}
        </div>
      </main>
    </div>
  );
};

export default Layout;