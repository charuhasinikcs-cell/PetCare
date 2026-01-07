
import React from 'react';

const WhyPetCare: React.FC = () => {
  const features = [
    {
      title: 'Expert Guidance',
      desc: 'Access veterinarian-approved tips and health guides for all life stages.',
      icon: 'fa-user-md',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'Comprehensive Tracking',
      desc: 'Keep all your pet records, from vaccinations to weight charts, in one place.',
      icon: 'fa-clipboard-list',
      color: 'bg-green-100 text-green-600'
    },
    {
      title: 'Nutritional Plans',
      desc: 'Personalized meal advice to keep your pets energetic and healthy.',
      icon: 'fa-bone',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      title: 'Community First',
      desc: 'Join a family of responsible pet owners who share your love for animals.',
      icon: 'fa-heart',
      color: 'bg-pink-100 text-pink-600'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-4 dark:text-white">Why Choose PetCare?</h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          We provide the tools and knowledge you need to be the best pet parent possible.
          Our mission is to ensure every pet lives a long, happy, and healthy life.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, idx) => (
          <div key={idx} className="bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-slate-50 dark:border-slate-700 group hover:-translate-y-2">
            <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform`}>
              <i className={`fas ${feature.icon}`}></i>
            </div>
            <h3 className="text-xl font-bold font-heading mb-3 dark:text-white">{feature.title}</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyPetCare;
