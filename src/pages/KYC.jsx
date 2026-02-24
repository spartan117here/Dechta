import { Files, CheckCircle, XCircle, Info, IdentificationCard, SteeringWheel, Truck } from "@phosphor-icons/react";
import { useModal } from "../context/ModalContext";

const KYC = () => {
  const { openModal, closeModal } = useModal();

  // Mock Data
  const kycQueue = [
    { id: 'KYC-881', type: 'Identity', docName: 'Aadhar Card', driver: 'Rahul Maran', date: '12m ago', status: 'Pending' },
    { id: 'KYC-209', type: 'License', docName: 'Driving License', driver: 'Sunita Pillai', date: 'Yesterday', status: 'Pending' },
    { id: 'KYC-331', type: 'Vehicle', docName: 'Vehicle RC', driver: 'Vikram Singh', date: 'Urgent', status: 'Pending' }
  ];

  // The Review Modal Component
  const ReviewModal = ({ doc }) => (
      <div className="p-8 h-full flex flex-col bg-slate-50 dark:bg-slate-900">
          <div className="flex justify-between items-center mb-6 pb-6 border-b dark:border-slate-800">
              <div>
                  <h2 className="text-2xl font-black dark:text-white">Compliance Review</h2>
                  <div className="flex items-center gap-2 mt-1">
                      <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Applicant: {doc.driver}</p>
                  </div>
              </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {/* Mock Document Cards */}
              <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl border dark:border-slate-700">
                  <div className="flex items-center gap-3 mb-3 text-blue-500">
                      <IdentificationCard size={24} weight="fill" />
                      <h3 className="font-black text-xs uppercase text-slate-800 dark:text-white">Identity</h3>
                  </div>
                  <div className="space-y-2 text-[10px]">
                      <p className="text-slate-400 font-bold uppercase">ID Number</p>
                      <p className="font-bold text-sm dark:text-white">9921 2211 0022</p>
                      <button className="w-full py-2 mt-2 bg-slate-100 dark:bg-slate-700 rounded-lg font-bold">View Scan</button>
                  </div>
              </div>

              <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl border dark:border-slate-700">
                  <div className="flex items-center gap-3 mb-3 text-purple-500">
                      <SteeringWheel size={24} weight="fill" />
                      <h3 className="font-black text-xs uppercase text-slate-800 dark:text-white">License</h3>
                  </div>
                  <div className="space-y-2 text-[10px]">
                      <p className="text-slate-400 font-bold uppercase">Valid Until</p>
                      <p className="font-bold text-sm text-green-500">2029-02-14</p>
                      <button className="w-full py-2 mt-2 bg-slate-100 dark:bg-slate-700 rounded-lg font-bold">View Scan</button>
                  </div>
              </div>

              <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl border dark:border-slate-700">
                  <div className="flex items-center gap-3 mb-3 text-orange-500">
                      <Truck size={24} weight="fill" />
                      <h3 className="font-black text-xs uppercase text-slate-800 dark:text-white">Vehicle</h3>
                  </div>
                  <div className="space-y-2 text-[10px]">
                      <p className="text-slate-400 font-bold uppercase">Registration</p>
                      <p className="font-bold text-sm dark:text-white">TN-07-AL-2211</p>
                      <button className="w-full py-2 mt-2 bg-slate-100 dark:bg-slate-700 rounded-lg font-bold">View Scan</button>
                  </div>
              </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 p-4 rounded-xl mb-6 flex gap-3 items-start">
              <Info size={20} className="text-blue-500 mt-0.5" weight="fill" />
              <div>
                  <p className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest">Cross-Verification Protocol</p>
                  <p className="text-[11px] text-blue-800 dark:text-blue-200 mt-1 leading-relaxed">
                      System auto-match confirmed for Name and Address across Aadhar and License. Please manually verify Vehicle Owner name.
                  </p>
              </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-auto">
              <button onClick={closeModal} className="py-4 rounded-xl bg-red-50 dark:bg-red-900/20 text-red-500 font-black text-xs uppercase tracking-widest hover:bg-red-100 transition flex items-center justify-center gap-2">
                  <XCircle size={18} weight="fill" /> Reject Application
              </button>
              <button onClick={closeModal} className="py-4 rounded-xl bg-green-500 text-white font-black text-xs uppercase tracking-widest hover:bg-green-600 transition shadow-lg shadow-green-500/30 flex items-center justify-center gap-2">
                  <CheckCircle size={18} weight="fill" /> Approve Full Profile
              </button>
          </div>
      </div>
  );

  return (
    <div className="space-y-8 animate-fade-in">
        <div className="flex items-center justify-between">
            <div>
                <h2 className="text-2xl font-extrabold tracking-tight dark:text-white">KYC Compliance Queue</h2>
                <p className="text-slate-500 text-xs mt-1">Verifying identity and skill certifications</p>
            </div>
            <div className="flex gap-2">
                <span className="bg-red-500/10 text-red-500 text-[10px] font-black px-3 py-1.5 rounded-lg uppercase tracking-wider border border-red-500/20">
                    {kycQueue.length} Pending Review
                </span>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {kycQueue.map((k) => (
                <div key={k.id} className="bg-white dark:bg-slate-900 p-8 rounded-3xl border dark:border-slate-800 shadow-sm hover:shadow-xl transition duration-300 flex flex-col items-start group">
                    <div className="w-14 h-14 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-brand-cyan mb-6 shadow-sm border border-slate-100 dark:border-slate-700">
                        <Files size={28} weight="duotone" />
                    </div>
                    <div>
                        <h4 className="font-black text-base dark:text-white">{k.docName}</h4>
                        <p className="text-xs text-slate-500 font-bold mt-1">Provider: {k.driver}</p>
                        <div className="flex items-center gap-3 mt-4">
                            <span className="text-[10px] bg-brand-cyan/10 text-brand-cyan px-2.5 py-1 rounded-lg font-black uppercase tracking-wider">{k.id}</span>
                            <span className="text-[10px] text-slate-400 font-bold">{k.date}</span>
                        </div>
                    </div>
                    <button 
                        onClick={() => openModal(<ReviewModal doc={k} />)}
                        className="w-full mt-8 bg-black text-brand-cyan dark:bg-brand-cyan dark:text-black py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl shadow-cyan-500/10 transition hover:scale-[1.02]"
                    >
                        Analyze Documents
                    </button>
                </div>
            ))}
        </div>
    </div>
  );
};

export default KYC;