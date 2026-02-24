import { useState } from 'react';
import { PlusCircle, Trash, PencilSimple, Star, Money, Megaphone, TrendUp } from "@phosphor-icons/react";
import { useModal } from '../context/ModalContext';

const Incentives = () => {
  const { openModal, closeModal } = useModal();
  
  // Initial State
  const [rules, setRules] = useState([
    { id: 1, title: 'Daily Hustle', target: 25, period: 'Daily', amount: 80 },
    { id: 2, title: 'Weekly Warrior', target: 150, period: 'Weekly', amount: 500 }
  ]);

  const handleDelete = (id) => {
    if(confirm('Delete this campaign?')) setRules(rules.filter(r => r.id !== id));
  };

  // The Form Component for the Modal
  const IncentiveForm = () => {
      const [form, setForm] = useState({ title: '', target: '', period: 'Daily', amount: '' });
      
      const handleSubmit = () => {
          if(!form.title || !form.target) return;
          const newRule = { 
              id: Date.now(), 
              title: form.title, 
              target: form.target, 
              period: form.period, 
              amount: form.amount 
          };
          setRules([...rules, newRule]);
          closeModal();
      };

      return (
          <div className="p-8">
              <h2 className="text-xl font-black dark:text-white mb-6">Create New Target</h2>
              <div className="space-y-4">
                  <div>
                      <label className="text-[10px] font-black uppercase text-slate-400 mb-1 block">Campaign Title</label>
                      <input type="text" className="w-full p-3 rounded-xl border dark:bg-slate-800 dark:border-slate-700 dark:text-white font-bold text-xs" 
                          value={form.title} onChange={e => setForm({...form, title: e.target.value})} placeholder="e.g. Monsoon Mania" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                      <div>
                          <label className="text-[10px] font-black uppercase text-slate-400 mb-1 block">Target Orders</label>
                          <input type="number" className="w-full p-3 rounded-xl border dark:bg-slate-800 dark:border-slate-700 dark:text-white font-bold text-xs" 
                              value={form.target} onChange={e => setForm({...form, target: e.target.value})} />
                      </div>
                      <div>
                          <label className="text-[10px] font-black uppercase text-slate-400 mb-1 block">Period</label>
                          <select className="w-full p-3 rounded-xl border dark:bg-slate-800 dark:border-slate-700 dark:text-white font-bold text-xs"
                              value={form.period} onChange={e => setForm({...form, period: e.target.value})}>
                                  <option>Daily</option>
                                  <option>Weekly</option>
                          </select>
                      </div>
                  </div>
                  <div>
                      <label className="text-[10px] font-black uppercase text-slate-400 mb-1 block">Incentive Amount (₹)</label>
                      <input type="number" className="w-full p-3 rounded-xl border dark:bg-slate-800 dark:border-slate-700 dark:text-white font-bold text-xs" 
                          value={form.amount} onChange={e => setForm({...form, amount: e.target.value})} />
                  </div>
                  <button onClick={handleSubmit} className="w-full bg-brand-gold text-black py-4 rounded-2xl font-black text-xs uppercase tracking-widest mt-4">Launch Campaign</button>
              </div>
          </div>
      )
  };

  return (
    <div className="space-y-8 animate-fade-in">
        {/* Header */}
        <div className="flex justify-between items-end">
            <div>
                <h2 className="text-2xl font-extrabold tracking-tight dark:text-white">Incentive Engine</h2>
                <p className="text-slate-500 text-xs mt-1">Configure automated rewards</p>
            </div>
            <button 
                onClick={() => openModal(<IncentiveForm />)}
                className="bg-black text-brand-gold dark:bg-brand-gold dark:text-black px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg hover:scale-105 transition"
            >
                <PlusCircle size={20} weight="fill" /> Create New Target
            </button>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-brand-gold to-orange-400 p-6 rounded-3xl text-black shadow-lg shadow-orange-500/20">
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-widest opacity-70">Active Campaigns</p>
                        <p className="text-3xl font-black mt-1">{rules.length.toString().padStart(2, '0')}</p>
                    </div>
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                        <Megaphone size={24} weight="fill" />
                    </div>
                </div>
                <div className="mt-8">
                    <p className="text-xs font-bold">Top Performer: <span className="opacity-70">Senthil Kumar (28 orders)</span></p>
                </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Incentives Paid</p>
                        <p className="text-3xl font-black dark:text-white mt-1">₹3,480</p>
                    </div>
                    <div className="w-10 h-10 bg-green-500/10 text-green-500 rounded-xl flex items-center justify-center">
                        <Money size={24} weight="fill" />
                    </div>
                </div>
                <div className="mt-8 flex items-center gap-2 text-green-500 text-xs font-bold">
                    <TrendUp weight="bold" /> 12% increase in productivity
                </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col justify-center items-center text-center">
                 <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-2">System Status</p>
                 <div className="flex items-center gap-2 bg-green-500/10 text-green-600 px-4 py-2 rounded-full">
                     <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                     <span className="text-xs font-bold">Auto-Credit Active</span>
                 </div>
                 <p className="text-[10px] text-slate-400 mt-2">Payouts trigger instantly on target hit</p>
            </div>
        </div>

        {/* Rules List */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-4">
                <h3 className="text-sm font-black dark:text-white uppercase tracking-wider mb-2">Active Targets</h3>
                <div className="space-y-4">
                    {rules.length === 0 && <p className="text-slate-400 text-xs">No active campaigns.</p>}
                    {rules.map((rule) => (
                        <div key={rule.id} className="bg-white dark:bg-slate-800 p-4 rounded-2xl border dark:border-slate-700 flex justify-between items-center group cursor-pointer hover:border-brand-gold transition">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-slate-700 flex items-center justify-center text-orange-500 dark:text-white">
                                    <Star size={20} weight="fill" />
                                </div>
                                <div>
                                     <p className="text-xs font-black dark:text-white">{rule.title}</p>
                                     <p className="text-[10px] text-slate-500 font-bold">Target: {rule.target} orders/{rule.period.toLowerCase()}</p>
                                </div>
                            </div>
                            <div className="text-right flex items-center gap-3">
                                <div>
                                    <p className="text-sm font-black text-green-500">₹{rule.amount}</p>
                                    <p className="text-[9px] text-slate-400 uppercase font-bold tracking-wider">Reward</p>
                                </div>
                                <div className="flex gap-2 ml-2 pl-4 border-l dark:border-slate-700">
                                    <button onClick={() => handleDelete(rule.id)} className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg text-slate-400 hover:text-red-500 transition">
                                        <Trash size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-3xl border dark:border-slate-800 p-6 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-sm font-black dark:text-white uppercase tracking-wider">Live Driver Progress (Daily Hustle)</h3>
                    <button className="text-[10px] bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg font-bold hover:bg-slate-200 transition dark:text-white">Simulate Activity</button>
                </div>
                {/* Mock Progress Bars */}
                <div className="space-y-6">
                     {[1,2,3,4].map((i) => (
                         <div key={i}>
                             <div className="flex justify-between text-[10px] font-bold mb-1 dark:text-slate-300">
                                 <span>Driver DR-10{i}</span>
                                 <span>{i * 5} / 25 Orders</span>
                             </div>
                             <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                 <div className="h-full bg-brand-cyan" style={{ width: `${(i*5/25)*100}%` }}></div>
                             </div>
                         </div>
                     ))}
                </div>
            </div>
        </div>
    </div>
  );
};

export default Incentives;