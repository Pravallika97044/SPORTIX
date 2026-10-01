import React, { useState } from 'react';
import { Calendar, Users, MapPin, Activity, CheckCircle2 } from 'lucide-react';

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: '1',
      title: 'Create Event',
      desc: 'Set up your tournament, brackets, and rules in minutes.',
      details: [
        'Select bracket structures (Single Elimination, Round Robin, or Double Elimination).',
        'Configure seed calculations and tournament rule books.',
        'Customize team registration fees and set registration deadlines.'
      ],
      icon: Calendar,
      color: 'from-blue-600 to-cyan-500 shadow-blue-500/20 text-blue-600',
    },
    {
      step: '2',
      title: 'Invite Teams',
      desc: 'Add teams, send invites, and manage players registrations.',
      details: [
        'Distribute invite links for automated team registration.',
        'Verify player age, ranking, and roster submissions.',
        'Collect digital registration forms and roster approvals.'
      ],
      icon: Users,
      color: 'from-violet-600 to-fuchsia-500 shadow-violet-500/20 text-violet-600',
    },
    {
      step: '3',
      title: 'Book Arena',
      desc: 'Secure state-of-the-art sports facilities and courts online.',
      details: [
        'Explore 40+ verified premium courts and sports fields.',
        'Select by pricing, indoor/outdoor badges, and player ratings.',
        'Reserve hours instantly with secure online payment receipts.'
      ],
      icon: MapPin,
      color: 'from-emerald-600 to-teal-500 shadow-emerald-500/20 text-emerald-600',
    },
    {
      step: '4',
      title: 'Play & Track',
      desc: 'Update results live and let users track standings in real-time.',
      details: [
        'Input match scores directly from your court-side mobile dashboard.',
        'Broadcast real-time bracket updates and live standings.',
        'Share photo galleries, tournament highlights, and MVP leaderboards.'
      ],
      icon: Activity,
      color: 'from-rose-600 to-orange-500 shadow-rose-500/20 text-rose-600',
    },
  ];

  return (
    <section id="about" className="py-16 border-t border-slate-200/80 dark:border-darkBorder bg-slate-50/50 dark:bg-darkBg/20 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            How It Works
          </h2>
          <p className="mt-1 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl uppercase">
            Four Steps to Action
          </p>
          <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
            Click on the steps below to explore detailed instructions.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative">
          {/* Connector Line (Desktop Only) */}
          <div className="absolute top-[52px] left-[12%] right-[12%] h-[2px] hidden md:block border-t border-dashed border-slate-300 dark:border-darkBorder -z-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((stepItem, index) => {
              const Icon = stepItem.icon;
              const isSelected = activeStep === index;

              return (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className="flex flex-col items-center group relative text-center w-full focus:outline-none"
                >
                  {/* Step Number Dot indicator */}
                  <div className={`absolute -top-3 left-[56%] hidden md:flex h-5 w-5 items-center justify-center rounded-full text-[9px] font-extrabold transition-colors ${
                    isSelected
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-200 dark:bg-darkBorder text-slate-600 dark:text-slate-400'
                  }`}>
                    {stepItem.step}
                  </div>

                  {/* Icon Card */}
                  <div className={`h-24 w-24 rounded-2xl bg-gradient-to-tr ${stepItem.color} flex items-center justify-center text-white shadow-xl hover:-translate-y-1.5 hover:scale-105 active:scale-95 transition-all duration-300 relative ${
                    isSelected ? 'ring-4 ring-blue-500/35 border-white dark:border-slate-900' : ''
                  }`}>
                    <Icon className="h-10 w-10" />
                    <div className="absolute inset-0 border border-white/20 rounded-2xl"></div>
                  </div>

                  {/* Content details */}
                  <div className="mt-6 text-center max-w-xs px-2">
                    <span className={`text-[10px] font-extrabold tracking-widest uppercase ${
                      isSelected ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400'
                    }`}>
                      Step {stepItem.step}
                    </span>
                    <h4 className={`text-base font-bold mt-1 transition-colors ${
                      isSelected ? 'text-blue-600 dark:text-blue-400' : 'text-slate-950 dark:text-white'
                    }`}>
                      {stepItem.title}
                    </h4>
                    <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
                      {stepItem.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Details Panel */}
        <div className="mt-12 max-w-2xl mx-auto rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 dark:border-darkBorder dark:bg-darkCard shadow-lg text-left relative overflow-hidden animate-fade-in">
          {/* Subtle neon gradient bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-cyan-400"></div>
          
          <h4 className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 flex items-center gap-2">
            <span className="h-6 w-6 rounded-full bg-blue-500/10 flex items-center justify-center text-xs text-blue-600 dark:text-blue-400">
              {steps[activeStep].step}
            </span>
            {steps[activeStep].title} - Full Instructions
          </h4>

          <ul className="mt-6 space-y-4">
            {steps[activeStep].details.map((detail, idx) => (
              <li key={idx} className="flex gap-3 text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
