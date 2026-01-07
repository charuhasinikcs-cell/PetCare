
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyPetCare from './components/WhyPetCare';
import MyPet from './components/MyPet';
import HealthVaccination from './components/HealthVaccination';
import FoodNutrition from './components/FoodNutrition';
import GroomingHygiene from './components/GroomingHygiene';
import TrainingActivities from './components/TrainingActivities';
import EmergencyHelp from './components/EmergencyHelp';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-slate-900 text-slate-100' : 'bg-orange-50 text-slate-800'} transition-colors duration-300`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main className="space-y-0">
        <section id="home">
          <Hero />
        </section>

        <section id="why" className="py-20 px-4">
          <WhyPetCare />
        </section>

        <section id="mypet" className="py-20 px-4 bg-white/50 dark:bg-slate-800/50">
          <MyPet />
        </section>

        <section id="health" className="py-20 px-4">
          <HealthVaccination />
        </section>

        <section id="food" className="py-20 px-4 bg-white/50 dark:bg-slate-800/50">
          <FoodNutrition />
        </section>

        <section id="grooming" className="py-20 px-4">
          <GroomingHygiene />
        </section>

        <section id="training" className="py-20 px-4 bg-white/50 dark:bg-slate-800/50">
          <TrainingActivities />
        </section>

        <section id="emergency" className="py-20 px-4">
          <EmergencyHelp />
        </section>

        <section id="contact" className="py-20 px-4 bg-white/50 dark:bg-slate-800/50">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
