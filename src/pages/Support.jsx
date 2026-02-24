import { useState } from 'react';
import { useModal } from '../context/ModalContext';

const supportTickets = [
    { id: 'TKT-2001', type: 'Breakdown', title: 'Critical Breakdown: NH-45', driver: 'Senthil Kumar', body: 'Engine failure reported during heavy rain.', urgent: true, time: '8m ago', status: 'Open' },
    { id: 'TKT-2002', type: 'Payment', title: 'Payment Dispute', driver: 'Rahul Sharma', body: 'Customer claims refund for damaged items.', urgent: false, time: '1h ago', status: 'Open' },
    { id: 'TKT-1044', type: 'App Issue', title: 'GPS Drift', driver: 'Vikram Singh', body: 'Fixed by restarting the module.', urgent: false, time: 'Yesterday', status: 'Resolved' }
];

const Support = () => {
  const [tab, setTab] = useState('Open');
  const { openModal, closeModal } = useModal();

  const filteredTickets = supportTickets.filter(t => 
      tab === 'Open' ? t.status === 'Open' : t.status !== 'Open'
  );

  const TicketModal = ({ ticket }) => (
      <div className="p-8">
         <div className="flex justify-between items-start mb-6">
            <div>
                 <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded text-[9px] font-black uppercase tracking-wider text-slate-500">{ticket.type}</span>
                 <h2 className="text-xl font-black dark:text-white mt-2">{ticket.title}</h2>
            </div>
         </div>
         <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-2xl border dark:border-slate-700 mb-6">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Affected Partner</p>
            <p className="text-sm font-bold dark:text-white">{ticket.driver}</p>
         </div>
         <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-8">"{ticket.body}"</p>
         <div className="space-y-3">
             {ticket.status === 'Open' ? (
                 <>
                    <button onClick={closeModal} className="w-full py-3 bg-red-500 text-white rounded-xl text-xs font-black uppercase hover:opacity-90 transition">⚠ Emergency Reassign</button>
                    <button onClick={closeModal} className="w-full py-3 bg-black text-white dark:bg-brand-cyan dark:text-black rounded-xl text-xs font-black uppercase hover:opacity-90 transition">Mark Resolved</button>
                 </>
             ) : (
                 <div className="p-3 bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-xl text-center text-xs font-black uppercase border border-green-200 dark:border-green-800">
                    Ticket Closed
                 </div>
             )}
         </div>
      </div>
  );

  return (
    <div className="space-y-6 animate-fade-in">
        <div className="flex items-end justify-between">
            <div>
                <h2 className="text-2xl font-extrabold tracking-tight dark:text-white">Support Console</h2>
                <p className="text-slate-500 text-xs mt-1">Resolution desk</p>
            </div>
            <div className="flex bg-slate-200 dark:bg-slate-800 p-1 rounded-xl">
                {['Open', 'Resolved'].map((t) => (
                    <button 
                        key={t}
                        onClick={() => setTab(t)} 
                        className={`px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-wider transition ${tab === t ? 'bg-white dark:bg-slate-700 shadow-sm text-black dark:text-white' : 'text-slate-500'}`}
                    >
                        {t}
                    </button>
                ))}
            </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredTickets.map(t => (
                <div key={t.id} className={`bg-white dark:bg-slate-900 p-6 rounded-3xl border-l-8 shadow-sm flex flex-col justify-between ${t.urgent ? 'border-red-500' : 'border-brand-cyan'}`}>
                    <div className="mb-4">
                        <div className="flex justify-between items-start mb-2">
                             <div className="text-xs font-black dark:text-white flex items-center gap-2">
                                 {t.title} 
                                 {t.urgent && <span className="text-[9px] bg-red-500 text-white px-2 py-0.5 rounded-lg uppercase tracking-wide animate-pulse">Urgent</span>}
                             </div>
                             <span className="text-[9px] font-bold text-slate-300 uppercase">{t.id}</span>
                        </div>
                        <p className="text-xs text-slate-500 leading-relaxed">{t.body}</p>
                    </div>
                    
                    <div className="flex justify-between items-center mt-2 pt-4 border-t dark:border-slate-800">
                        <div className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-widest ${t.status === 'Open' ? 'text-orange-500' : 'text-green-500'}`}>
                            <span className={`w-2 h-2 rounded-full bg-current ${t.status==='Open'?'animate-pulse':''}`}></span> {t.status}
                        </div>
                        <button onClick={() => openModal(<TicketModal ticket={t} />)} className="text-brand-cyan font-black text-[10px] uppercase tracking-widest hover:underline">View Details</button>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Support;