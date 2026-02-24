import { Lightning, Compass, Stack, Trophy, ChartLineUp, CurrencyCircleDollar, UserPlus, UsersFour, IdentificationCard, Gear, SignOut } from "@phosphor-icons/react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  const btnClass = (path) => `w-full text-left px-4 py-3.5 rounded-xl transition font-semibold flex items-center gap-3 group ${isActive(path) ? 'bg-brand-cyan/10 text-brand-cyan' : 'text-slate-400 hover:text-white'}`;

  return (
    <aside className="hidden lg:flex flex-col w-72 bg-slate-950 text-white p-6 h-screen fixed overflow-y-auto z-40">
      <div className="flex items-center gap-3 mb-10 px-2">
        <div className="w-10 h-10 bg-brand-cyan rounded-xl flex items-center justify-center shadow-lg shadow-cyan-400/20">
          <Lightning weight="bold" className="text-xl text-black" />
        </div>
        <div>
          <div className="text-xl font-black tracking-tight">DECHTA</div>
          <div className="text-[9px] font-bold text-brand-cyan uppercase tracking-[0.2em] leading-none mt-0.5">Control Tower</div>
        </div>
      </div>

      <div className="space-y-1.5 flex-1">
        <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500 mb-4 px-2 font-black">Live Ops</div>
        
        <Link to="/" className={btnClass('/')}>
          <Compass className="text-xl group-hover:scale-110 transition" /> Live Map View
        </Link>
        <Link to="/orders" className={btnClass('/orders')}>
          <Stack className="text-xl group-hover:scale-110 transition" /> Operations
        </Link>
        <Link to="/pricing" className={btnClass('/pricing')}>
        <CurrencyCircleDollar className="text-xl group-hover:scale-110 transition text-brand-cyan" /> Dynamic Pricing
        </Link>
        <Link to="/kyc" className={btnClass('/kyc')}>
        <IdentificationCard className="text-xl group-hover:scale-110 transition" /> KYC Compliance
        <span className="absolute right-4 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
        </Link>
        {/* ... Add other links (Finance, Roster, etc.) similarly ... */}
      </div>

      {/* Admin User Footer */}
      <div className="pt-6 border-t border-slate-800">
          <div className="flex items-center gap-4 bg-slate-900/50 p-3 rounded-2xl border border-white/5">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-cyan to-yellow-400 flex items-center justify-center font-bold text-black">SA</div>
              <div className="flex-1">
                  <div className="font-bold text-xs">System Admin</div>
                  <div className="text-[9px] text-slate-500 uppercase font-black">Level 4 Auth</div>
              </div>
              <button className="text-slate-400 hover:text-red-400"><SignOut size={20} /></button>
          </div>
      </div>
    </aside>
  );
};

export default Sidebar;