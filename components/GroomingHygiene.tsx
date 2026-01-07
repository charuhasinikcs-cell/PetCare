
import React from 'react';

const GroomingHygiene: React.FC = () => {
  const steps = [
    { title: 'Brushing', desc: 'Brush 2-3 times a week to remove loose hair and prevent matting.', img: 'https://picsum.photos/seed/brush/400/300' },
    { title: 'Bathing', desc: 'Use lukewarm water and pet-safe shampoo once every 4-6 weeks.', img: 'https://picsum.photos/seed/bath/400/300' },
    { title: 'Nail Clipping', desc: 'Trim nails regularly to prevent discomfort and joint issues.', img: 'https://picsum.photos/seed/nail/400/300' },
    { title: 'Ear Cleaning', desc: 'Check and clean ears weekly using a vet-approved solution.', img: 'https://picsum.photos/seed/ear/400/300' },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-4 dark:text-white text-pink-600">Grooming & Hygiene</h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          A clean pet is a happy pet. Follow these essential grooming steps for a healthy coat and skin.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, idx) => (
          <div key={idx} className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col group hover:shadow-xl transition-all">
            <div className="h-48 relative overflow-hidden">
              <img src={step.img} alt={step.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute top-4 left-4 w-8 h-8 rounded-lg bg-white/90 dark:bg-slate-900/90 flex items-center justify-center font-bold text-pink-500">
                {idx + 1}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold font-heading mb-3 dark:text-white">{step.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-pink-50 dark:bg-slate-800 p-10 rounded-[3rem] border-2 border-dashed border-pink-200 dark:border-pink-900/30">
        <h3 className="text-2xl font-bold font-heading mb-6 text-pink-600 flex items-center gap-3">
          <i className="fas fa-sparkles"></i>
          Hygiene Tips for Your Home
        </h3>
        <ul className="grid md:grid-cols-3 gap-6">
          <li className="flex gap-4 items-start">
            <i className="fas fa-check-circle text-pink-500 mt-1"></i>
            <span className="text-slate-600 dark:text-slate-400">Wash pet bedding weekly in hot water.</span>
          </li>
          <li className="flex gap-4 items-start">
            <i className="fas fa-check-circle text-pink-500 mt-1"></i>
            <span className="text-slate-600 dark:text-slate-400">Sanitize food and water bowls daily.</span>
          </li>
          <li className="flex gap-4 items-start">
            <i className="fas fa-check-circle text-pink-500 mt-1"></i>
            <span className="text-slate-600 dark:text-slate-400">Vacuum high-traffic areas to control dander.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GroomingHygiene;
