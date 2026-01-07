
import React from 'react';

const EmergencyHelp: React.FC = () => {
  const steps = [
    { title: 'Assess the Situation', desc: 'Keep calm. Check for breathing and responsiveness.' },
    { title: 'Contact a Vet', desc: 'Call your local emergency vet immediately.' },
    { title: 'Safe Transport', desc: 'Move your pet carefully using a firm, flat surface or towel.' },
    { title: 'Prevent Shock', desc: 'Keep your pet warm and quiet during transport.' },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-red-50 dark:bg-red-900/10 rounded-[3.5rem] p-8 md:p-16 border-2 border-red-100 dark:border-red-900/30">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 animate-pulse">
              <i className="fas fa-circle text-[8px]"></i>
              Emergency Assistance
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-heading mb-6 dark:text-white">Urgent Situation? We're Here to Help.</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-10 leading-relaxed">
              In case of an emergency, every second counts. Below are quick first-aid steps and contact information for immediate medical support.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-sm">
                <h4 className="font-bold mb-2 dark:text-white">24/7 Vet Clinic</h4>
                <p className="text-red-500 font-bold text-xl">+1 (555) 123-4567</p>
                <p className="text-xs text-slate-400 mt-1">123 Paws Avenue, Pet City</p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-sm">
                <h4 className="font-bold mb-2 dark:text-white">Poison Control</h4>
                <p className="text-red-500 font-bold text-xl">+1 (555) 999-PETS</p>
                <p className="text-xs text-slate-400 mt-1">National Helpline</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-10 rounded-[3rem] shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full -mr-16 -mt-16"></div>
            <h3 className="text-2xl font-bold font-heading mb-8 dark:text-white flex items-center gap-3">
              <i className="fas fa-kit-medical text-red-500"></i>
              First-Aid Quick Guide
            </h3>
            <div className="space-y-6">
              {steps.map((step, idx) => (
                <div key={idx} className="flex gap-5">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 flex items-center justify-center font-bold text-sm">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-bold dark:text-white">{step.title}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-10 bg-red-500 hover:bg-red-600 text-white py-4 rounded-2xl font-bold transition-all shadow-lg shadow-red-500/20">
              Find Nearest Vet Map
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyHelp;
