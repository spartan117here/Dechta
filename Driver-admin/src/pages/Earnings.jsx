import { CurrencyInr, TrendUp } from "@phosphor-icons/react";
import EarningsChart from "../components/EarningsChart";

const Earnings = () => {
  // Mock Payout Data
  const payouts = [
      { id: 'TX-99211', amount: '₹42,000', label: 'Weekly Fleet Settlement', status: 'Success', date: 'Today, 09:45' },
      { id: 'TX-99212', amount: '₹1,250', label: 'On-Demand Payout (Vikram)', status: 'Processing', date: '2h ago' },
      { id: 'TX-99213', amount: '₹145.2', label: 'Platform Comission #TID82', status: 'Success', date: '4h ago' }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
       {/* Stats Cards */}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border dark:border-slate-800 shadow-sm relative overflow-hidden group">
             <div className="absolute -bottom-4 -right-4 text-brand-cyan/10 text-8xl transition-transform group-hover:scale-110">
                <CurrencyInr />
             </div>
             <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Net Revenue (Admin)</p>
             <p className="text-4xl font-black mt-2 dark:text-white">₹72,435</p>
             <div className="flex items-center gap-2 mt-4 text-xs font-bold text-green-500">
                <TrendUp weight="bold" /> +12.4% vs prev week
             </div>
          </div>
          
          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border dark:border-slate-800 shadow-sm">
             <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Partner Payouts Due</p>
             <p className="text-4xl font-black mt-2 text-orange-500">₹1,12,040</p>
             <p className="text-[10px] text-slate-400 font-bold mt-4">14 Pending Batch Requests</p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border dark:border-slate-800 shadow-sm">
             <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Platform Fees</p>
             <p className="text-4xl font-black mt-2 dark:text-white">₹24,145</p>
             <p className="text-xs text-blue-500 font-bold mt-4">Calculated @ 15% Platform Margin</p>
          </div>
       </div>

       {/* Charts & Lists */}
       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-8 rounded-3xl border dark:border-slate-800 shadow-sm">
               <div className="flex justify-between items-center mb-8">
                  <h3 className="text-lg font-extrabold dark:text-white">Transaction Ledger</h3>
                  <button className="text-xs text-brand-cyan font-black uppercase tracking-widest hover:underline">View All</button>
               </div>
               <div className="space-y-4">
                  {payouts.map((p) => (
                      <div key={p.id} className="flex justify-between items-center p-5 bg-slate-50 dark:bg-slate-800/40 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800 transition">
                          <div className="flex gap-5 items-center">
                              <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-white dark:bg-slate-700 shadow-sm ${p.status === 'Success' ? 'text-green-500' : 'text-orange-500'}`}>
                                  <CurrencyInr size={24} weight="bold" />
                              </div>
                              <div>
                                  <p className="text-xs font-black dark:text-white">{p.label}</p>
                                  <p className="text-[10px] text-slate-400 font-bold mt-1">{p.id} • {p.date}</p>
                              </div>
                          </div>
                          <div className="text-right">
                              <p className="text-sm font-black dark:text-white">{p.amount}</p>
                              <p className={`text-[9px] font-black uppercase tracking-[0.15em] mt-1 ${p.status === 'Success' ? 'text-green-500' : 'text-orange-500'}`}>{p.status}</p>
                          </div>
                      </div>
                  ))}
               </div>
           </div>

           <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border dark:border-slate-800 shadow-sm">
               <h3 className="text-lg font-extrabold mb-6 dark:text-white">Revenue Analysis</h3>
               {/* Pass props if needed, simpler to handle dark mode via CSS variables or context, but here is manual prop passing */}
               <EarningsChart isDarkMode={document.documentElement.classList.contains('dark')} />
           </div>
       </div>
    </div>
  );
};

export default Earnings;