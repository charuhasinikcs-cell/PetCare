
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-orange-50 dark:bg-slate-900 pt-16 pb-24 lg:pt-32 lg:pb-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-orange-600 uppercase bg-orange-100 rounded-full dark:bg-orange-900/30 dark:text-orange-400">
              Welcome to the Family
            </span>
            <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 dark:text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-heading">
              <span className="block">Every Pet Deserves</span>
              <span className="block text-orange-500">Love and Care</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 sm:text-xl">
              At PetCare, we believe that pets are more than just animals—they're family. 
              Track health, plan nutrition, and learn the best ways to nurture your furry friends.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start gap-4">
              <a href="#mypet" className="flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-2xl text-white bg-orange-500 hover:bg-orange-600 md:text-lg transition-all transform hover:scale-105 shadow-lg shadow-orange-500/30">
                Get Started
                <i className="fas fa-arrow-right ml-2 text-sm"></i>
              </a>
              <a href="#why" className="mt-3 sm:mt-0 flex items-center justify-center px-8 py-4 border-2 border-orange-200 dark:border-slate-700 text-base font-medium rounded-2xl text-orange-600 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-slate-800 md:text-lg transition-all">
                Learn More
              </a>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-3xl shadow-2xl overflow-hidden lg:max-w-md floating">
              <img
                className="w-full object-cover h-[400px]"
                src="https://picsum.photos/seed/happy-pet/800/1000"
                alt="Happy Golden Retriever and Kitten"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-8">
                <p className="text-white font-medium italic">"Happiness is a warm puppy." - Charles M. Schulz</p>
              </div>
            </div>
            {/* Decorative circles */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-200 dark:bg-yellow-900/20 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-orange-300 dark:bg-orange-900/30 rounded-full blur-3xl opacity-40"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
