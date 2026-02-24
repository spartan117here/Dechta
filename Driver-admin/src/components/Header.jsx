import { useState } from 'react';
import { 
  Bell, 
  Moon, 
  Sun, 
  UserGear, 
  Fingerprint, 
  Power, 
  List 
} from "@phosphor-icons/react";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const notifications = [
    { id: 1, title: 'Compliance Alert', body: 'Rahul M. uploaded documents.', time: '2m ago', type: 'alert' },
    { id: 2, title: 'SOS Notification', body: 'Breakdown near T-Nagar.', time: '5m ago', type: 'emergency' },
  ];

  return (
    <header className="sticky top-0 z-30 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 px-8 py-5 flex items-center justify-between shadow-sm">
       <div className="flex items-center gap-6">
          {/* Mobile Menu Trigger (Visible only on small screens) */}
          <div className="lg:hidden">
              <button className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800">
                  <List size={24} />
              </button>
          </div>

          <div className="flex flex-col">
            <h1 className="text-xl font-extrabold tracking-tight dark:text-white">
                Dashboard
            </h1>
            <div className="flex items-center gap-2 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">System Health: Optimal</span>
            </div>
          </div>
       </div>
       
       <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <div className="hidden md:flex items-center bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
             <button 
                onClick={toggleTheme} 
                className="p-2 rounded-lg hover:bg-white dark:hover:bg-slate-700 transition shadow-sm text-slate-500 dark:text-slate-400"
             >
                {isDarkMode ? <Sun size={20} weight="fill" /> : <Moon size={20} weight="fill" />}
             </button>
          </div>

          {/* Notifications Dropdown */}
          <div className="relative">
              <button 
                className="relative p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-black dark:hover:text-white transition shadow-sm"
                onClick={() => { setIsNotifOpen(!isNotifOpen); setIsProfileOpen(false); }}
              >
                 <Bell size={20} weight="bold" />
                 <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
              </button>

              {isNotifOpen && (
                  <div className="absolute right-0 top-16 w-80 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 py-2 z-50 animate-fade-in">
                      <div className="px-5 py-4 border-b dark:border-slate-800 flex justify-between items-center">
                          <h3 className="font-extrabold dark:text-white text-sm">Recent Alerts</h3>
                          <button className="text-[10px] text-brand-cyan font-black hover:underline uppercase tracking-widest">Clear</button>
                      </div>
                      <div className="max-h-64 overflow-y-auto custom-scrollbar">
                         {notifications.map(n => (
                             <div key={n.id} className="px-5 py-3 hover:bg-slate-50 dark:hover:bg-slate-800 border-b dark:border-slate-800 last:border-0 cursor-pointer">
                                 <p className={`text-xs font-black ${n.type === 'emergency' ? 'text-red-500' : 'dark:text-white'}`}>{n.title}</p>
                                 <p className="text-[10px] text-slate-500 mt-0.5">{n.body}</p>
                                 <p className="text-[9px] text-slate-400 mt-1 uppercase font-bold">{n.time}</p>
                             </div>
                         ))}
                      </div>
                  </div>
              )}
          </div>
          
          {/* Profile Dropdown */}
          <div className="relative">
            <button 
                onClick={() => { setIsProfileOpen(!isProfileOpen); setIsNotifOpen(false); }}
                className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-cyan to-brand-gold p-[2px] cursor-pointer hover:scale-105 transition"
            >
               <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-white text-xs font-bold">SA</div>
            </button>

            {isProfileOpen && (
                <div className="absolute right-0 top-16 w-64 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 py-2 z-50 animate-fade-in overflow-hidden">
                    <div className="px-5 py-5 bg-slate-50 dark:bg-slate-800/50">
                        <p className="text-xs font-black dark:text-white">System Admin</p>
                        <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-widest">ID: ADM-7721-OP</p>
                    </div>
                    <div className="p-2">
                        <button className="w-full text-left px-4 py-3 text-xs hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition dark:text-slate-300 flex items-center gap-3 font-bold">
                            <UserGear size={18} className="text-brand-cyan" /> Account Settings
                        </button>
                        <button className="w-full text-left px-4 py-3 text-xs hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition dark:text-slate-300 flex items-center gap-3 font-bold">
                            <Fingerprint size={18} className="text-brand-cyan" /> Security Logs
                        </button>
                        <div className="h-px bg-slate-100 dark:bg-slate-800 my-2"></div>
                        <button className="w-full text-left px-4 py-3 text-xs text-red-500 font-black hover:bg-red-50 dark:hover:bg-red-950/20 rounded-xl transition flex items-center gap-3">
                            <Power size={18} weight="bold" /> Terminate Session
                        </button>
                    </div>
                </div>
            )}
          </div>
       </div>
    </header>
  );
};

export default Header;