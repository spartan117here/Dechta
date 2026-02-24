import { useState } from 'react';
import { PlusCircle, Star } from '@phosphor-icons/react';
import { drivers } from '../data/mockData';
import { useModal } from '../context/ModalContext';

const Roster = () => {
  const [filter, setFilter] = useState('All');
  const { openModal, closeModal } = useModal();

  // Helper for status badge styling
  const getStatusStyle = (status) => {
      if (status === 'Online') return 'bg-green-500/10 text-green-500';
      if (status === 'Suspended') return 'bg-red-500/10 text-red-500';
      return 'bg-slate-500/10 text-slate-500';
  };

  const AddDriverForm = () => (
      <div className="p-8">
          <h2 className="text-2xl font-black dark:text-white mb-6">Onboard Partner</h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
              <input type="text" placeholder="Full Name" className="p-3 rounded-xl border dark:bg-slate-800 dark:border-slate-700 dark:text-white text-xs font-bold" />
              <input type="text" placeholder="Vehicle Number" className="p-3 rounded-xl border dark:bg-slate-800 dark:border-slate-700 dark:text-white text-xs font-bold" />
          </div>
          <button onClick={closeModal} className="w-full bg-brand-cyan text-black font-black py-4 rounded-xl text-xs uppercase tracking-widest mt-4">Confirm Onboarding</button>
      </div>
  );

  return (
    <div className="space-y-6">
       <div className="flex flex-col md:flex-row justify-between items-end gap-4">
          <div>
             <h2 className="text-2xl font-extrabold dark:text-white">Fleet Directory</h2>
             <p className="text-slate-500 text-xs mt-1">Managing {drivers.length} Active Logistics Partners</p>
          </div>
          <div className="flex gap-4">
             <select 
                value={filter} 
                onChange={(e) => setFilter(e.target.value)}
                className="bg-white dark:bg-slate-900 border dark:border-slate-800 rounded-xl px-4 py-2.5 text-xs font-bold outline-none"
             >
                <option value="All">All Vehicles</option>
                <option value="2-Wheeler">2-Wheeler</option>
                <option value="4-Wheeler">4-Wheeler</option>
             </select>
             <button 
                onClick={() => openModal(<AddDriverForm />)}
                className="bg-brand-cyan text-black px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:scale-105 transition shadow-lg shadow-cyan-400/20"
             >
                <PlusCircle size={18} weight="bold" /> Add Driver
             </button>
          </div>
       </div>

       <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 overflow-hidden shadow-sm">
          <table className="w-full text-left border-collapse">
             <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/50 border-b dark:border-slate-800">
                   <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Partner Identity</th>
                   <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Vehicle</th>
                   <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</th>
                   <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Rating</th>
                   <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Action</th>
                </tr>
             </thead>
             <tbody>
                {drivers.map((driver) => (
                   <tr key={driver.id} className="border-b dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition">
                      <td className="px-8 py-5">
                         <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-bold text-xs">{driver.name[0]}</div>
                            <div>
                               <p className="font-extrabold text-xs dark:text-white">{driver.name}</p>
                               <p className="text-[10px] text-slate-400 font-bold mt-0.5">{driver.id}</p>
                            </div>
                         </div>
                      </td>
                      <td className="px-8 py-5 text-xs font-bold text-slate-500">{driver.vehicle}</td>
                      <td className="px-8 py-5">
                         <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest flex items-center gap-2 w-fit ${getStatusStyle(driver.status)}`}>
                            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse"></span>
                            {driver.status}
                         </span>
                      </td>
                      <td className="px-8 py-5">
                         <div className="flex items-center gap-1">
                            <Star weight="fill" className="text-brand-gold text-xs" />
                            <span className="text-xs font-black dark:text-white">{driver.rating}</span>
                         </div>
                      </td>
                      <td className="px-8 py-5 text-right">
                         <button className="text-brand-cyan font-black text-[10px] uppercase tracking-widest hover:underline">Manage</button>
                      </td>
                   </tr>
                ))}
             </tbody>
          </table>
       </div>
    </div>
  );
};

export default Roster;