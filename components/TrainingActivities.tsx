
import React from 'react';

const TrainingActivities: React.FC = () => {
  const commands = [
    { name: 'Sit', difficulty: 'Beginner', reward: 'Treats' },
    { name: 'Stay', difficulty: 'Intermediate', reward: 'Praise' },
    { name: 'Heel', difficulty: 'Intermediate', reward: 'Attention' },
    { name: 'Fetch', difficulty: 'Fun', reward: 'Playtime' },
  ];

  const activities = [
    { title: 'Interactive Play', time: '15 mins', icon: 'fa-frisbee' },
    { title: 'Social Walks', time: '30 mins', icon: 'fa-walking' },
    { title: 'Puzzle Toys', time: '20 mins', icon: 'fa-puzzle-piece' },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-4 dark:text-white text-green-600">Training & Activities</h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Mental stimulation is as important as physical health. Build a stronger bond through regular training.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white dark:bg-slate-800 p-8 rounded-[3rem] shadow-sm border border-slate-50 dark:border-slate-700">
          <h3 className="text-2xl font-bold font-heading mb-8 dark:text-white flex items-center gap-3">
            <i className="fas fa-graduation-cap text-green-500"></i>
            Basic Obedience Commands
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {commands.map((cmd, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800 group hover:bg-green-500 transition-all duration-300">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-xl font-bold dark:text-white group-hover:text-white">{cmd.name}</h4>
                  <span className="text-[10px] font-bold uppercase bg-white dark:bg-slate-700 px-2 py-1 rounded-md text-green-600">{cmd.difficulty}</span>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 group-hover:text-green-50">Best reward: {cmd.reward}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-teal-600 p-10 rounded-[3rem] text-white shadow-xl shadow-green-500/20 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-6">Daily Exercises</h3>
            <div className="space-y-6">
              {activities.map((act, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-xl">
                    <i className={`fas ${act.icon}`}></i>
                  </div>
                  <div>
                    <h4 className="font-bold">{act.title}</h4>
                    <p className="text-green-100 text-sm">{act.time} daily session</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 p-4 bg-white/10 rounded-2xl border border-white/20">
            <p className="text-sm italic">"Training should be positive and fun for both you and your pet!"</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingActivities;
