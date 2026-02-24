import { useNavigate } from 'react-router-dom';
import { ShieldChevron, CheckSquare } from "@phosphor-icons/react";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // In a real app, validate credentials here
    navigate('/');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-50 dark:bg-slate-950">
      <div className="bg-white dark:bg-slate-900 w-full max-w-[420px] rounded-3xl shadow-2xl p-10 border border-slate-100 dark:border-slate-800 relative overflow-hidden animate-fade-in">
          {/* Decorative Background Blob */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative">
              <div className="mb-8">
                  <div className="w-12 h-12 bg-black dark:bg-brand-cyan rounded-xl flex items-center justify-center mb-4 shadow-lg text-brand-cyan dark:text-black">
                      <ShieldChevron size={24} weight="fill" />
                  </div>
                  <h1 className="text-3xl font-extrabold tracking-tight dark:text-white">Admin Access</h1>
                  <p className="text-slate-500 text-sm mt-2">Dechta Operations Command Center</p>
              </div>
              
              <form onSubmit={handleLogin} className="space-y-5">
                  <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Internal Admin ID</label>
                      <input type="text" defaultValue="ADM-7721" className="w-full p-3 rounded-xl border dark:bg-slate-800 dark:border-slate-700 dark:text-white font-bold text-sm focus:border-brand-cyan outline-none" />
                  </div>
                  <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Access Key</label>
                      <input type="password" defaultValue="1234" className="w-full p-3 rounded-xl border dark:bg-slate-800 dark:border-slate-700 dark:text-white font-bold text-sm focus:border-brand-cyan outline-none" />
                  </div>
                  
                  <div className="flex items-center justify-between py-2">
                      <label className="flex items-center gap-2 cursor-pointer">
                          <CheckSquare size={18} className="text-brand-cyan" weight="fill" />
                          <span className="text-xs text-slate-500 font-bold">Trust this device</span>
                      </label>
                      <button type="button" className="text-xs text-brand-cyan font-bold hover:underline">Reset Key</button>
                  </div>
                  
                  <button type="submit" className="w-full bg-black text-brand-cyan py-4 rounded-2xl font-bold text-sm hover:scale-[1.02] active:scale-95 transition shadow-xl shadow-cyan-500/10 dark:bg-brand-cyan dark:text-black uppercase tracking-widest">
                      Authorize Session
                  </button>
              </form>
          </div>
      </div>
    </div>
  );
};

export default Login;