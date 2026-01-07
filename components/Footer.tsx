
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 pt-20 pb-10 px-4 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center text-white">
              <i className="fas fa-paw text-2xl"></i>
            </div>
            <span className="text-3xl font-bold font-heading tracking-tight text-orange-500">PetCare</span>
          </div>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto italic mb-8">
            "The greatness of a nation and its moral progress can be judged by the way its animals are treated."
          </p>
          <div className="flex justify-center gap-6">
            <a href="#" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:bg-orange-500 hover:text-white transition-all">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:bg-orange-400 hover:text-white transition-all">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:bg-blue-400 hover:text-white transition-all">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-slate-100 dark:border-slate-800 gap-6">
          <p className="text-sm text-slate-400">© 2024 PetCare. All paws reserved.</p>
          <div className="flex gap-8 text-sm text-slate-400">
            <a href="#" className="hover:text-orange-500">Privacy Policy</a>
            <a href="#" className="hover:text-orange-500">Terms of Service</a>
            <a href="#" className="hover:text-orange-500">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
