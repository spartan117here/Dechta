import { User, IdentificationCard, EnvelopeSimple } from "@phosphor-icons/react";

const AdminProfile = () => {
  return (
    <div className="max-w-2xl mx-auto py-10 animate-fade-in">
        <div className="bg-white dark:bg-slate-900 p-10 rounded-3xl border dark:border-slate-800 shadow-2xl">
            <div className="flex items-center gap-6 mb-10 pb-10 border-b dark:border-slate-800">
                 <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-brand-cyan to-brand-gold p-[2px]">
                     <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-white text-2xl font-black">SA</div>
                 </div>
                 <div>
                     <h2 className="text-2xl font-extrabold dark:text-white">Update Profile</h2>
                     <p className="text-slate-500 text-sm">System Admin • Master Account</p>
                 </div>
            </div>
            
            <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label className="text-[10px] uppercase font-black text-slate-400 tracking-widest mb-2 block">Display Name</label>
                        <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                            <input type="text" className="w-full pl-10 pr-4 py-3 rounded-xl border dark:bg-slate-800 dark:border-slate-700 dark:text-white text-sm font-bold" defaultValue="System Admin" />
                        </div>
                    </div>
                    <div>
                        <label className="text-[10px] uppercase font-black text-slate-400 tracking-widest mb-2 block">Employee ID</label>
                        <div className="relative">
                            <IdentificationCard className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                            <input type="text" readOnly className="w-full pl-10 pr-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-800/50 dark:border-slate-700 text-slate-400 cursor-not-allowed text-sm font-bold" defaultValue="ADM-7721-OP" />
                        </div>
                    </div>
                </div>
                <div>
                    <label className="text-[10px] uppercase font-black text-slate-400 tracking-widest mb-2 block">Direct Email</label>
                    <div className="relative">
                        <EnvelopeSimple className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input type="email" className="w-full pl-10 pr-4 py-3 rounded-xl border dark:bg-slate-800 dark:border-slate-700 dark:text-white text-sm font-bold" defaultValue="admin@dechta.com" />
                    </div>
                </div>
                <div className="pt-6">
                    <button className="w-full bg-black text-brand-cyan dark:bg-brand-cyan dark:text-black py-4 rounded-2xl font-black text-sm hover:shadow-2xl transition shadow-cyan-400/20">Confirm Changes</button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default AdminProfile;