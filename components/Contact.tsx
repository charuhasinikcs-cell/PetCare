
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl sm:text-5xl font-bold font-heading mb-6 dark:text-white">Get in Touch</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg mb-10">
            Have questions about your pet's health or feedback for our platform? 
            We'd love to hear from you. Your input helps us provide better care for everyone.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/20 rounded-2xl flex items-center justify-center text-orange-500 text-2xl">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <h4 className="font-bold dark:text-white">Email Us</h4>
                <p className="text-slate-500">hello@petcare.com</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center text-blue-500 text-2xl">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h4 className="font-bold dark:text-white">Visit Us</h4>
                <p className="text-slate-500">45 Pet Palace, Animal District, NY</p>
              </div>
            </div>
          </div>
        </div>

        <form className="bg-white dark:bg-slate-800 p-10 rounded-[3rem] shadow-xl border border-slate-50 dark:border-slate-700">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2 dark:text-slate-300">Your Name</label>
              <input type="text" className="w-full p-4 rounded-2xl border border-slate-200 dark:bg-slate-700 dark:border-slate-600 outline-none focus:ring-2 focus:ring-orange-400" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 dark:text-slate-300">Email Address</label>
              <input type="email" className="w-full p-4 rounded-2xl border border-slate-200 dark:bg-slate-700 dark:border-slate-600 outline-none focus:ring-2 focus:ring-orange-400" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 dark:text-slate-300">Your Message</label>
              <textarea rows={4} className="w-full p-4 rounded-2xl border border-slate-200 dark:bg-slate-700 dark:border-slate-600 outline-none focus:ring-2 focus:ring-orange-400" placeholder="Tell us anything..."></textarea>
            </div>
            <button type="submit" className="w-full bg-slate-900 dark:bg-orange-500 hover:bg-slate-800 dark:hover:bg-orange-600 text-white py-4 rounded-2xl font-bold transition-all shadow-xl">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
