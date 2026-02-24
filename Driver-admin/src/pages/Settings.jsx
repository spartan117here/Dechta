import { ArrowSquareOut } from "@phosphor-icons/react";
import { useModal } from "../context/ModalContext";

const Settings = () => {
  const { openModal, closeModal } = useModal();

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
  };

  const LegalModal = ({ title }) => (
      <div className="p-8">
        <h2 className="text-2xl font-black dark:text-white mb-4">{title}</h2>
        <div className="space-y-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-h-[60vh] overflow-y-auto pr-4 custom-scrollbar">
            <p className="font-bold text-black dark:text-white">1. Data Collection</p>
            <p>Quick Construct collects driver GPS data, vehicle registration details, and bank information solely for operational tracking and payouts.</p>
            <p className="font-bold text-black dark:text-white">2. Data Security</p>
            <p>All financial records and identification documents are encrypted using enterprise-grade protocols (AES-256).</p>
        </div>
        <button onClick={closeModal} className="w-full mt-8 bg-black text-white dark:bg-white dark:text-black py-4 rounded-2xl font-black uppercase text-xs tracking-widest">Understood</button>
      </div>
  );

  return (
    <div className="max-w-4xl mx-auto py-6 animate-fade-in">
        <h2 className="text-3xl font-extrabold tracking-tight dark:text-white mb-8">System Settings</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border dark:border-slate-800 shadow-sm space-y-6">
                <h3 className="text-xs font-black uppercase tracking-widest text-slate-400">Appearance & Interface</h3>
                <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl">
                    <div>
                        <p className="text-sm font-bold dark:text-white">Dark Mode Interface</p>
                        <p className="text-[10px] text-slate-500">Toggle system-wide dark interface</p>
                    </div>
                    <button onClick={toggleTheme} className="w-12 h-6 bg-slate-200 dark:bg-brand-cyan rounded-full relative transition-colors">
                        <div className="absolute top-1 left-1 dark:left-7 w-4 h-4 bg-white rounded-full transition-all"></div>
                    </button>
                </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border dark:border-slate-800 shadow-sm space-y-4">
                <h3 className="text-xs font-black uppercase tracking-widest text-slate-400">Legal & Transparency</h3>
                <button onClick={() => openModal(<LegalModal title="Privacy Policy" />)} className="w-full flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-2xl transition group font-bold dark:text-slate-200 text-sm">
                    Privacy Policy <ArrowSquareOut size={18} className="text-slate-400 group-hover:text-brand-cyan" />
                </button>
                <button onClick={() => openModal(<LegalModal title="Terms & Conditions" />)} className="w-full flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-2xl transition group font-bold dark:text-slate-200 text-sm">
                    Terms & Conditions <ArrowSquareOut size={18} className="text-slate-400 group-hover:text-brand-cyan" />
                </button>
            </div>
        </div>
    </div>
  );
};

export default Settings;