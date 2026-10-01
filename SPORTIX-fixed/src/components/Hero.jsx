import React from 'react';
import { ArrowRight, Trophy, MapPin, Users, Activity } from 'lucide-react';
import Arena3DCanvas from './Arena3DCanvas';

export default function Hero({ onExploreClick, onFindClick }) {
  const stats = [
    { label: 'Tournaments Hosted', value: '1,200+', icon: Trophy, color: 'text-cyan-400' },
    { label: 'Sports Arenas', value: '850+', icon: MapPin, color: 'text-emerald-400' },
    { label: 'Players', value: '150K+', icon: Users, color: 'text-violet-400' },
    { label: 'Sports Supported', value: '35+', icon: Activity, color: 'text-amber-400' },
  ];

  return (
    <section id="home" className="relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32 transition-colors duration-300">
      {/* Background radial glows */}
      <div className="absolute top-1/4 left-1/4 -z-10 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px] dark:bg-blue-600/15"></div>
      <div className="absolute top-1/3 right-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[150px] dark:bg-violet-600/15"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/25 bg-blue-500/5 px-4.5 py-2 text-xs font-semibold tracking-wider text-blue-600 uppercase dark:border-blue-400/30 dark:bg-blue-400/5 dark:text-blue-400">
              <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse dark:bg-blue-400"></span>
              ALL SPORTS. ONE PLATFORM.
            </div>

            {/* Main Title */}
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl uppercase leading-[1.1]">
              Sports Tournament & <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-300">
                Arena Management
              </span>{' '}
              System
            </h1>

            {/* Subtext */}
            <p className="mt-6 text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-xl font-normal leading-relaxed">
              The modern platform for organizing tournaments, discovering sports arenas, managing
              competitions, and bringing athletes together in one intelligent ecosystem.
            </p>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-wrap gap-4 items-center">
              <button
                onClick={onExploreClick}
                className="group inline-flex items-center gap-2.5 px-7 py-4 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg hover:shadow-blue-500/25 active:scale-98 transition-all"
              >
                Explore Platform
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onFindClick}
                className="inline-flex items-center justify-center px-7 py-4 text-base font-semibold text-slate-700 dark:text-white border border-slate-300 hover:border-slate-400 dark:border-blue-500/30 dark:hover:border-blue-400 rounded-xl hover:bg-slate-50 dark:hover:bg-blue-500/5 active:scale-98 transition-all"
              >
                Find Sports Arenas
              </button>

            </div>

            {/* Stats Panel (Desktop inline version) */}
            <div className="mt-16 w-full hidden md:block">
              <div className="grid grid-cols-4 gap-6 rounded-2xl border border-slate-200/80 bg-white/60 p-6 backdrop-blur-md dark:border-darkBorder dark:bg-darkCard/50">
                {stats.map((stat, i) => (
                  <div key={i} className="flex flex-col items-start border-r last:border-0 border-slate-200 dark:border-darkBorder pr-4 last:pr-0">
                    <div className="flex items-center gap-2">
                      <stat.icon className={`h-5 w-5 ${stat.color}`} />
                      <span className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                        {stat.value}
                      </span>
                    </div>
                    <span className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hero Right Visual: 3D Interactive Sports Arena */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0 flex justify-center">
            {/* Glowing borders around 3D canvas container */}
            <div className="relative w-full max-w-[500px] h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-blue-500/30 p-2 bg-slate-900/40 backdrop-blur-lg">
              <div className="w-full h-full rounded-2xl overflow-hidden relative">
                <Arena3DCanvas />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Panel (Mobile stack version) */}
        <div className="mt-12 block md:hidden">
          <div className="grid grid-cols-2 gap-4 rounded-xl border border-slate-200/80 bg-white/60 p-4 dark:border-darkBorder dark:bg-darkCard/50">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center p-2">
                <stat.icon className={`h-6 w-6 ${stat.color} mb-1`} />
                <span className="text-xl font-extrabold text-slate-900 dark:text-white">
                  {stat.value}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mt-0.5">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
