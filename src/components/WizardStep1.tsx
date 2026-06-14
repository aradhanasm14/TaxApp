import React, { useState } from 'react';
import { useTax } from '../context/TaxContext';

export const WizardStep1: React.FC = () => {
  const { updateState, setCurrentStep, state } = useTax();
  const [age, setAge] = useState(state.ageCategory);
  const [monthly, setMonthly] = useState(state.monthlyTakeHome.toString());

  const handleNext = () => {
    updateState({
      ageCategory: age as any,
      monthlyTakeHome: Number(monthly),
    });
    setCurrentStep(2);
  };

  return (
    <div className="max-w-lg w-full bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg border border-slate-200 rounded-2xl p-8 shadow-premium text-center space-y-6">
      <h2 className="text-2xl font-outfit font-bold text-slate-800 mb-4">Step 1 – Personal Details</h2>
      <div className="mb-4 text-left">
        <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="ageCategory">Age Category</label>
        <select
          id="ageCategory"
          value={age}
          onChange={e => setAge(e.target.value)}
          className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="below60">Below 60</option>
          <option value="senior">Senior Citizen (60‑80)</option>
          <option value="superSenior">Super Senior (80+)</option>
        </select>
      </div>
      <div className="mb-6 text-left">
        <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="monthlyTakeHome">Monthly Take‑Home (₹)</label>
        <input
          id="monthlyTakeHome"
          type="number"
          min="0"
          value={monthly}
          onChange={e => setMonthly(e.target.value)}
          className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        onClick={handleNext}
        className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all"
      >
        Next →
      </button>
    </div>
  );
};
