import { createContext, useContext, useState } from 'react';
import { X } from '@phosphor-icons/react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => setModalContent(null), 300); // Clear after animation
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      
      {/* The Global Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden relative border dark:border-slate-800">
             <button 
                onClick={closeModal} 
                className="absolute top-6 right-6 text-slate-400 hover:text-black dark:hover:text-white z-10"
             >
                <X size={24} />
             </button>
             <div className="max-h-[85vh] overflow-y-auto custom-scrollbar">
                {modalContent}
             </div>
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);