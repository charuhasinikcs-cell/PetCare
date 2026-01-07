
import React, { useState } from 'react';
import { Pet } from '../types';

const MyPet: React.FC = () => {
  const [pets, setPets] = useState<Pet[]>([
    { id: '1', name: 'Buddy', age: '3', breed: 'Golden Retriever', weight: '30kg', type: 'dog', notes: 'Loves playing fetch and eating carrots.' }
  ]);
  const [isAdding, setIsAdding] = useState(false);
  const [newPet, setNewPet] = useState<Partial<Pet>>({ type: 'dog' });

  const handleAddPet = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPet.name) return;
    const pet: Pet = {
      id: Date.now().toString(),
      name: newPet.name || '',
      age: newPet.age || '',
      breed: newPet.breed || '',
      weight: newPet.weight || '',
      type: newPet.type as 'dog' | 'cat' | 'other',
      notes: newPet.notes || ''
    };
    setPets([...pets, pet]);
    setIsAdding(false);
    setNewPet({ type: 'dog' });
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-2 dark:text-white">My Pet Dashboard</h2>
          <p className="text-slate-600 dark:text-slate-400">Manage your beloved companions here.</p>
        </div>
        <button
          onClick={() => setIsAdding(!isAdding)}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-orange-500/20"
        >
          <i className={`fas ${isAdding ? 'fa-times' : 'fa-plus'}`}></i>
          {isAdding ? 'Cancel' : 'Add New Pet'}
        </button>
      </div>

      {isAdding && (
        <form onSubmit={handleAddPet} className="mb-12 bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl border-2 border-orange-100 dark:border-slate-700 animate-in fade-in zoom-in duration-300">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-2 dark:text-slate-300">Name</label>
              <input
                required
                type="text"
                placeholder="Pet's Name"
                className="w-full p-4 rounded-xl border border-slate-200 dark:bg-slate-700 dark:border-slate-600 outline-none focus:ring-2 focus:ring-orange-400"
                value={newPet.name || ''}
                onChange={e => setNewPet({...newPet, name: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 dark:text-slate-300">Type</label>
              <select
                className="w-full p-4 rounded-xl border border-slate-200 dark:bg-slate-700 dark:border-slate-600 outline-none focus:ring-2 focus:ring-orange-400"
                value={newPet.type}
                onChange={e => setNewPet({...newPet, type: e.target.value as any})}
              >
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 dark:text-slate-300">Age</label>
              <input
                type="text"
                placeholder="e.g. 2 years"
                className="w-full p-4 rounded-xl border border-slate-200 dark:bg-slate-700 dark:border-slate-600 outline-none focus:ring-2 focus:ring-orange-400"
                value={newPet.age || ''}
                onChange={e => setNewPet({...newPet, age: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 dark:text-slate-300">Breed</label>
              <input
                type="text"
                placeholder="e.g. Persian"
                className="w-full p-4 rounded-xl border border-slate-200 dark:bg-slate-700 dark:border-slate-600 outline-none focus:ring-2 focus:ring-orange-400"
                value={newPet.breed || ''}
                onChange={e => setNewPet({...newPet, breed: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 dark:text-slate-300">Weight</label>
              <input
                type="text"
                placeholder="e.g. 5kg"
                className="w-full p-4 rounded-xl border border-slate-200 dark:bg-slate-700 dark:border-slate-600 outline-none focus:ring-2 focus:ring-orange-400"
                value={newPet.weight || ''}
                onChange={e => setNewPet({...newPet, weight: e.target.value})}
              />
            </div>
            <div className="md:col-span-2 lg:col-span-1">
              <label className="block text-sm font-semibold mb-2 dark:text-slate-300">Special Notes</label>
              <textarea
                placeholder="Allergies, personality..."
                className="w-full p-4 rounded-xl border border-slate-200 dark:bg-slate-700 dark:border-slate-600 outline-none focus:ring-2 focus:ring-orange-400 h-14"
                value={newPet.notes || ''}
                onChange={e => setNewPet({...newPet, notes: e.target.value})}
              ></textarea>
            </div>
          </div>
          <div className="mt-8 flex justify-end">
            <button type="submit" className="bg-orange-500 text-white px-10 py-4 rounded-2xl font-bold hover:bg-orange-600 transition-all">
              Save Pet Profile
            </button>
          </div>
        </form>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pets.map(pet => (
          <div key={pet.id} className="bg-white dark:bg-slate-800 rounded-[2rem] shadow-lg overflow-hidden border border-slate-100 dark:border-slate-700 group hover:scale-[1.02] transition-transform">
            <div className="h-48 bg-orange-100 dark:bg-orange-900/20 relative">
              <img
                src={`https://picsum.photos/seed/${pet.id}/600/400`}
                className="w-full h-full object-cover opacity-80"
                alt={pet.name}
              />
              <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 p-2 rounded-xl text-xs font-bold uppercase tracking-wider text-orange-600">
                {pet.type}
              </div>
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold font-heading dark:text-white">{pet.name}</h3>
                <span className="bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full text-xs font-semibold text-slate-500">{pet.age} Old</span>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                  <i className="fas fa-dog w-5 text-orange-400"></i>
                  <span>{pet.breed}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                  <i className="fas fa-weight w-5 text-orange-400"></i>
                  <span>{pet.weight}</span>
                </div>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm bg-slate-50 dark:bg-slate-700/50 p-4 rounded-2xl italic">
                "{pet.notes}"
              </p>
            </div>
          </div>
        ))}
        {pets.length === 0 && !isAdding && (
          <div className="md:col-span-2 lg:col-span-3 text-center py-20 bg-white/30 dark:bg-slate-800/30 rounded-3xl border-2 border-dashed border-slate-300 dark:border-slate-700">
            <i className="fas fa-paw text-5xl text-slate-300 mb-4"></i>
            <p className="text-slate-500">No pets added yet. Click "Add New Pet" to get started!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyPet;
