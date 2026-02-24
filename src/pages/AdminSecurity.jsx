import { LockKey } from "@phosphor-icons/react";

const AdminSecurity = () => {
  return (
    <div className="max-w-2xl mx-auto py-10 animate-fade-in">
        <div className="bg-white dark:bg-slate-900 p-10 rounded-3xl border dark:border-slate-800 shadow-2xl">
            <h2 className="text-2xl font-extrabold mb-8 dark:text-white flex items-center gap-3">
                <LockKey className="text-brand-cyan" size={28} weight="fill" /> Security Credentials
            </h2>
            <div className="space-y-8">
                <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                    <h3 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-4">Rotation Policy</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Your master passcode was last changed 14 days ago. Next rotation due in 16 days.</p>
                </div>
                <div className="space-y-5">
                    <div>
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 block">Current Authorization Key</label>
                        <input type="password" className="w-full p-3 rounded-xl border dark:bg-slate-800 dark:border-slate-700 dark:text-white font-bold" placeholder="••••••••" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 block">New Key</label>
                            <input type="password" className="w-full p-3 rounded-xl border dark:bg-slate-800 dark:border-slate-700 dark:text-white font-bold" placeholder="••••••••" />
                        </div>
                        <div>
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 block">Repeat New Key</label>
                            <input type="password" className="w-full p-3 rounded-xl border dark:bg-slate-800 dark:border-slate-700 dark:text-white font-bold" placeholder="••••••••" />
                        </div>
                    </div>
                </div>
                <button className="w-full bg-black text-brand-cyan dark:bg-brand-cyan dark:text-black py-4 rounded-2xl font-black text-sm shadow-xl hover:scale-[1.02] transition">Apply New Protocol</button>
            </div>
        </div>
    </div>
  );
};

export default AdminSecurity;