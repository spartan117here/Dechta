import { Moped, Truck, CurrencyInr } from "@phosphor-icons/react";

const Pricing = () => {
  return (
    <div className="max-w-3xl mx-auto py-4 animate-fade-in">
        <div className="bg-white dark:bg-slate-900 rounded-[32px] p-10 border border-slate-100 dark:border-slate-800 shadow-sm">
            
            <div className="flex justify-between items-center mb-10">
                <h5 className="text-sm font-black uppercase tracking-widest text-brand-cyan">Dynamic Pricing Engine</h5>
                <div className="bg-green-50 dark:bg-green-900/20 text-green-500 px-4 py-1.5 rounded-lg border border-green-100 dark:border-green-800">
                    <span className="text-[10px] font-black uppercase tracking-widest">Live Configuration</span>
                </div>
            </div>

            {/* 2-Wheeler Section */}
            <div className="bg-slate-50 dark:bg-slate-800/30 rounded-3xl p-8 border border-slate-100 dark:border-slate-800 mb-8">
                <div className="flex items-center gap-3 mb-8">
                    <Moped size={24} weight="fill" className="text-brand-cyan" />
                    <h3 className="font-extrabold text-slate-800 dark:text-white text-sm uppercase tracking-wide">2-Wheeler (Bike) Rules</h3>
                </div>

                <div className="grid grid-cols-2 gap-x-6 gap-y-6 mb-8">
                    {[
                        { label: 'Base Order Rate', val: '16' },
                        { label: 'Distance (Per 1 KM)', val: '5' },
                        { label: 'Peak Hour Bonus', val: '10' },
                        { label: 'Heavy Load (>15KG)', val: '20' }
                    ].map((item, i) => (
                        <div key={i} className="space-y-2">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">{item.label}</label>
                            <div className="relative">
                                <CurrencyInr className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" weight="bold" />
                                <input type="number" className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl py-3 pl-10 pr-4 font-bold text-slate-700 dark:text-white outline-none" defaultValue={item.val} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 3 & 4-Wheeler Section */}
            <div className="bg-slate-50 dark:bg-slate-800/30 rounded-3xl p-8 border border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3 mb-8">
                    <Truck size={24} weight="fill" className="text-brand-cyan" />
                    <h3 className="font-extrabold text-slate-800 dark:text-white text-sm uppercase tracking-wide">3 & 4-Wheeler Rules</h3>
                </div>

                <div className="space-y-2 mb-8">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Distance Based Rate (Per KM)</label>
                    <div className="relative">
                        <CurrencyInr className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" weight="bold" />
                        <input type="number" className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl py-4 pl-10 pr-4 font-bold text-slate-700 dark:text-white outline-none" defaultValue="40" />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Daily Target Bonus</label>
                        <input type="text" className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 font-bold text-slate-700 dark:text-white outline-none" placeholder="Set Value" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Weekly Target Bonus</label>
                        <input type="text" className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 font-bold text-slate-700 dark:text-white outline-none" defaultValue="Set Value" />
                    </div>
                </div>
            </div>

            <button className="w-full mt-10 bg-black text-brand-cyan py-5 rounded-2xl font-black uppercase text-xs tracking-[0.2em] shadow-xl hover:scale-[1.01] transition-all active:scale-95 dark:bg-brand-cyan dark:text-black">
                Deploy Pricing Architecture
            </button>
        </div>
    </div>
  );
};

export default Pricing;