import { useState } from 'react';
import { motion } from 'framer-motion'; // For the tab glider
import { MagnifyingGlass, Export, MapPin, Path, Timer, Phone, User } from '@phosphor-icons/react';
import { ordersData } from '../data/mockData'; // Import your data
import { useModal } from '../context/ModalContext';

const tabs = ['Unassigned', 'In Progress', 'Completed'];

const Orders = () => {
  const [activeTab, setActiveTab] = useState('Unassigned');
  const [search, setSearch] = useState('');
  const { openModal, closeModal } = useModal();

  // Filter Logic
  const filteredOrders = ordersData.filter(order => 
    order.status === activeTab && 
    (order.id.toLowerCase().includes(search.toLowerCase()) || order.type.toLowerCase().includes(search.toLowerCase()))
  );

  // Modal Content for Assigning Driver
  const AssignDriverModal = ({ orderId }) => (
    <div className="p-8">
       <h2 className="text-2xl font-black dark:text-white mb-2">Assign Partner</h2>
       <p className="text-slate-500 text-sm mb-6">Select a nearby partner for Order <strong>{orderId}</strong></p>
       
       <div className="space-y-2">
          {/* Mock Driver List inside Modal */}
          {['Senthil Kumar', 'Rahul Sharma', 'Vikram Singh'].map((driver, i) => (
             <div key={i} onClick={() => { alert(`Assigned to ${driver}`); closeModal(); }} 
                  className="flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl border border-transparent hover:border-slate-200 cursor-pointer transition">
                <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-brand-cyan/20 flex items-center justify-center text-xs font-bold">{driver[0]}</div>
                   <span className="font-bold text-sm dark:text-white">{driver}</span>
                </div>
                <span className="text-[10px] font-black text-brand-success uppercase">Recommended</span>
             </div>
          ))}
       </div>
    </div>
  );

  return (
    <div className="space-y-8">
      {/* Header Controls */}
      <div className="flex flex-col xl:flex-row gap-6 justify-between items-start xl:items-center">
        <div>
           <h2 className="text-2xl font-extrabold dark:text-white">Operational Console</h2>
           
           {/* Glider Tabs */}
           <div className="relative flex bg-slate-200 dark:bg-slate-800 p-1.5 rounded-2xl w-fit mt-4">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative z-10 px-6 py-2.5 text-xs font-black transition-colors ${activeTab === tab ? 'text-black dark:text-white' : 'text-slate-500'}`}
                >
                  {activeTab === tab && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-white dark:bg-slate-600 rounded-xl shadow-sm"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      style={{ zIndex: -1 }}
                    />
                  )}
                  {tab}
                </button>
              ))}
           </div>
        </div>

        {/* Search Bar */}
        <div className="flex items-center gap-4 w-full xl:w-auto">
            <div className="relative flex-1 xl:w-80">
                <MagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="text" 
                  placeholder="Search orders..." 
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-white dark:bg-slate-900 pl-12 pr-4 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 text-xs font-bold outline-none focus:border-brand-cyan"
                />
            </div>
        </div>
      </div>

      {/* Orders Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
         {filteredOrders.length === 0 ? (
             <div className="col-span-full py-20 text-center text-slate-400 font-bold uppercase tracking-widest text-xs">No orders found</div>
         ) : (
             filteredOrders.map((order) => (
                <div key={order.id} className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-6 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
                    {/* Card Header */}
                    <div className="flex justify-between items-start mb-5">
                        <div>
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{order.id}</span>
                            <h4 className="text-sm font-extrabold dark:text-white mt-1 line-clamp-1">{order.type}</h4>
                        </div>
                        <span className={`text-[9px] px-2.5 py-1 rounded-lg font-black uppercase tracking-wider ${
                            order.priority === 'Urgent' ? 'bg-red-500 text-white' : 
                            order.priority === 'High' ? 'bg-orange-500 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                        }`}>
                            {order.priority}
                        </span>
                    </div>

                    {/* Timeline */}
                    <div className="space-y-1 mb-6 relative pl-2">
                        {/* Vertical Line */}
                        <div className="absolute left-[5px] top-2 bottom-2 w-0.5 border-l-2 border-dashed border-slate-200 dark:border-slate-700"></div>
                        
                        <div className="flex items-start gap-3 relative z-10">
                            <div className="w-2.5 h-2.5 rounded-full border-2 border-brand-cyan bg-white mt-1"></div>
                            <div>
                                <p className="text-[10px] text-slate-400 font-bold uppercase">Pickup</p>
                                <p className="text-xs font-extrabold dark:text-slate-200">{order.from}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 relative z-10 pt-2">
                             <MapPin className="text-red-500 text-xs mt-0.5" weight="fill" />
                             <div>
                                <p className="text-[10px] text-slate-400 font-bold uppercase">Drop</p>
                                <p className="text-xs font-extrabold dark:text-slate-200">{order.to}</p>
                            </div>
                        </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="mt-auto pt-4 border-t border-slate-50 dark:border-slate-800">
                        <div className="flex justify-between items-center mb-4 text-[10px] font-black text-slate-400 uppercase">
                            <span className="flex items-center gap-1"><Path /> {order.distance || '12km'}</span>
                            <span className="flex items-center gap-1 text-brand-cyan"><Timer /> {order.eta}</span>
                        </div>
                        
                        {order.status === 'Unassigned' ? (
                            <button 
                                onClick={() => openModal(<AssignDriverModal orderId={order.id} />)}
                                className="w-full py-3 bg-black dark:bg-white text-white dark:text-black rounded-xl text-[10px] font-black uppercase tracking-widest hover:scale-[1.02] transition shadow-lg"
                            >
                                Assign Partner
                            </button>
                        ) : (
                            <div className="grid grid-cols-2 gap-3">
                                <button className="py-3 bg-slate-100 dark:bg-slate-800 rounded-xl text-[10px] font-black uppercase text-slate-500 hover:bg-slate-200">Call</button>
                                <button className="py-3 bg-brand-cyan text-black rounded-xl text-[10px] font-black uppercase hover:opacity-90">Track</button>
                            </div>
                        )}
                    </div>
                </div>
             ))
         )}
      </div>
    </div>
  );
};

export default Orders;