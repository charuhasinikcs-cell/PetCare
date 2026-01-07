
import React, { useState } from 'react';

const FoodNutrition: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dog' | 'cat'>('dog');

  const plans = {
    dog: [
      { time: '07:30 AM', meal: 'Breakfast - Dry Kibble', portion: '1.5 Cups', nutrients: ['Protein', 'Fiber'] },
      { time: '12:30 PM', meal: 'Light Snack', portion: '2 Biscuits', nutrients: ['Vitamins'] },
      { time: '06:30 PM', meal: 'Dinner - Wet Food + Rice', portion: '250g', nutrients: ['Omega-3', 'Calcium'] }
    ],
    cat: [
      { time: '07:00 AM', meal: 'Breakfast - Canned Salmon', portion: '1 Can', nutrients: ['Taurine', 'Protein'] },
      { time: '01:00 PM', meal: 'Dry Food Access', portion: 'Free feeding', nutrients: ['Energy'] },
      { time: '07:00 PM', meal: 'Dinner - Chicken Broth', portion: '150ml', nutrients: ['Hydration', 'Minerals'] }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-4 dark:text-white text-orange-600">Food & Nutrition</h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Tailored feeding schedules to ensure your pet gets the right nutrients at the right time.
        </p>
      </div>

      <div className="flex justify-center gap-4 mb-12">
        <button
          onClick={() => setActiveTab('dog')}
          className={`px-8 py-3 rounded-2xl font-bold transition-all ${
            activeTab === 'dog' ? 'bg-orange-500 text-white shadow-lg' : 'bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400'
          }`}
        >
          <i className="fas fa-dog mr-2"></i> Dogs
        </button>
        <button
          onClick={() => setActiveTab('cat')}
          className={`px-8 py-3 rounded-2xl font-bold transition-all ${
            activeTab === 'cat' ? 'bg-orange-500 text-white shadow-lg' : 'bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400'
          }`}
        >
          <i className="fas fa-cat mr-2"></i> Cats
        </button>
      </div>

      <div className="grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-5 relative">
          <img
            src={`https://picsum.photos/seed/${activeTab}-food/800/800`}
            alt="Pet Food"
            className="rounded-[3rem] shadow-2xl border-8 border-white dark:border-slate-800"
          />
          <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-xl max-w-[200px]">
            <p className="text-xs text-orange-500 font-bold uppercase mb-1">Quick Tip</p>
            <p className="text-sm dark:text-slate-300">Avoid chocolate, grapes, and onions. They are toxic to pets!</p>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">
          {plans[activeTab].map((item, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-50 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-6 group hover:shadow-md transition-shadow">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-orange-500 text-xl font-bold flex-shrink-0">
                  <i className="fas fa-clock text-xs absolute -mt-8 mr-12 bg-white dark:bg-slate-800 p-1 rounded-full shadow-sm"></i>
                  {idx + 1}
                </div>
                <div>
                  <p className="text-sm font-bold text-orange-500 mb-1">{item.time}</p>
                  <h4 className="text-xl font-bold dark:text-white">{item.meal}</h4>
                </div>
              </div>
              <div className="flex flex-col sm:items-end gap-3">
                <span className="bg-slate-100 dark:bg-slate-700 px-4 py-2 rounded-xl text-sm font-bold dark:text-slate-300">
                  {item.portion}
                </span>
                <div className="flex gap-2">
                  {item.nutrients.map((n, i) => (
                    <span key={i} className="text-[10px] px-2 py-1 rounded-md bg-green-50 dark:bg-green-900/30 text-green-600 font-bold uppercase">
                      {n}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodNutrition;
