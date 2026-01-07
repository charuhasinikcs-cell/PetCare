
import React from 'react';

const HealthVaccination: React.FC = () => {
  const timeline = [
    { month: '6-8 Weeks', vaccines: ['Distemper', 'Parvovirus'], status: 'Completed', icon: 'fa-vial' },
    { month: '10-12 Weeks', vaccines: ['DHPP', 'Leptospirosis'], status: 'Upcoming', icon: 'fa-syringe' },
    { month: '14-16 Weeks', vaccines: ['Rabies', 'DHPP Booster'], status: 'Upcoming', icon: 'fa-shield-virus' },
    { month: 'Every Year', vaccines: ['Rabies Booster', 'Heartworm Test'], status: 'Recurring', icon: 'fa-redo' },
  ];

  const tips = [
    { title: 'Hydration is Key', text: 'Always ensure your pet has access to fresh, clean water.', icon: 'fa-tint' },
    { title: 'Daily Exercise', text: 'Keep them active for at least 30-60 mins a day.', icon: 'fa-running' },
    { title: 'Oral Hygiene', text: 'Brush their teeth weekly to prevent dental diseases.', icon: 'fa-tooth' },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-4 dark:text-white text-blue-600">Health & Vaccination</h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Prevention is better than cure. Keep track of your pet's medical schedule and follow our wellness tips.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Timeline */}
        <div className="bg-white dark:bg-slate-800 p-8 rounded-[3rem] shadow-xl border-l-8 border-blue-500">
          <h3 className="text-2xl font-bold font-heading mb-10 dark:text-white flex items-center gap-3">
            <i className="fas fa-calendar-alt text-blue-500"></i>
            Vaccination Timeline
          </h3>
          <div className="space-y-8 relative before:content-[''] before:absolute before:left-6 before:top-2 before:bottom-2 before:w-0.5 before:bg-blue-100 dark:before:bg-slate-700">
            {timeline.map((item, idx) => (
              <div key={idx} className="relative pl-14 group">
                <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center z-10 border-4 border-white dark:border-slate-800 group-hover:scale-110 transition-transform">
                  <i className={`fas ${item.icon} text-blue-500`}></i>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">{item.month}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${
                      item.status === 'Completed' ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold dark:text-white">{item.vaccines.join(', ')}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Wellness Cards & Reminders */}
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-8 rounded-[2.5rem] text-white shadow-lg shadow-blue-500/20">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <i className="fas fa-bell"></i>
              Medicine Reminders
            </h3>
            <div className="space-y-4">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl flex justify-between items-center">
                <span>Heartworm Prevention</span>
                <span className="font-bold">Every 1st</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl flex justify-between items-center">
                <span>Flea & Tick Treatment</span>
                <span className="font-bold">In 12 days</span>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-1 gap-4">
            {tips.map((tip, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 flex items-start gap-5 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex-shrink-0 flex items-center justify-center text-blue-500 text-xl">
                  <i className={`fas ${tip.icon}`}></i>
                </div>
                <div>
                  <h4 className="font-bold dark:text-white">{tip.title}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{tip.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthVaccination;
