import React, { useState } from 'react';
import { Cpu, Trophy, MapPin, Radio, Shield, Star, Smartphone } from 'lucide-react';

export default function FeaturesAndWhy({ onLearnMoreClick }) {
  const [winnerLeft, setWinnerLeft] = useState('');
  const [winnerRight, setWinnerRight] = useState('');
  const [champion, setChampion] = useState('');

  const whyItems = [
    {
      title: 'Easy Tournament Creation',
      desc: 'Set up your brackets, schedules, and team registrations in minutes.',
      icon: Trophy,
      color: 'text-amber-500 bg-amber-500/10 dark:border-amber-500/25',
    },
    {
      title: 'Arena Discovery',
      desc: 'Easily locate, inspect, and reserve arenas and courts near you.',
      icon: MapPin,
      color: 'text-emerald-500 bg-emerald-500/10 dark:border-emerald-500/25',
    },
    {
      title: 'Real-time Match Updates',
      desc: 'Live scores, real-time tournament brackets, and live stream info.',
      icon: Radio,
      color: 'text-blue-500 bg-blue-500/10 dark:border-blue-500/25',
    },
    {
      title: 'Secure & Reliable Platform',
      desc: 'Secure payment pathways and verification systems for peace of mind.',
      icon: Shield,
      color: 'text-cyan-500 bg-cyan-500/10 dark:border-cyan-500/25',
    },
    {
      title: 'Modern & Intuitive Experience',
      desc: 'A gorgeous dashboard built for athletes and organizers alike.',
      icon: Star,
      color: 'text-violet-500 bg-violet-500/10 dark:border-violet-500/25',
    },
    {
      title: 'Accessible on Any Device',
      desc: 'Responsive web apps and notification support across all channels.',
      icon: Smartphone,
      color: 'text-rose-500 bg-rose-500/10 dark:border-rose-500/25',
    },
  ];

  const handleResetBracket = () => {
    setWinnerLeft('');
    setWinnerRight('');
    setChampion('');
  };

  return (
    <section id="features" className="py-16 border-t border-slate-200/80 dark:border-darkBorder transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Panel: Smart Tournament Scheduling Card */}
          <div className="lg:col-span-6 flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-indigo-50 to-white dark:from-darkCard dark:to-darkBg dark:border-darkBorder p-8 text-left relative shadow-xl">
            {/* Background Glow */}
            <div className="absolute -right-16 -bottom-16 w-60 h-60 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none"></div>

            <div>
              {/* Header Badge */}
              <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/25 bg-blue-500/5 px-3.5 py-1.5 text-xs font-semibold tracking-wider text-blue-600 uppercase dark:border-blue-400/30 dark:bg-blue-400/5 dark:text-blue-400">
                <Cpu className="h-3.5 w-3.5" />
                AI Smart Tournament Scheduling
              </div>

              {/* Title & Desc */}
              <h3 className="mt-5 text-2xl font-bold tracking-tight text-slate-900 dark:text-white uppercase">
                Optimized Tournament Automation
              </h3>
              <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed max-w-md">
                Automatically organize tournaments with optimized schedules. Try the interactive bracket preview below: **Click teams to advance them to the finals!**
              </p>
            </div>

            {/* Graphic and Learn More */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-6 justify-between">
              <div className="flex flex-col gap-3.5 self-start">
                <button
                  onClick={onLearnMoreClick}
                  className="px-5 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md active:scale-95 transition-all"
                >
                  Learn More
                </button>
                {(winnerLeft || winnerRight || champion) && (
                  <button
                    onClick={handleResetBracket}
                    className="text-[10px] font-bold text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-left"
                  >
                    Reset Bracket ↺
                  </button>
                )}
              </div>

              {/* Diagram / Bracket Mockup */}
              <div className="w-full sm:w-[260px] aspect-[4/3] rounded-2xl border border-slate-200 dark:border-darkBorder bg-white/60 dark:bg-darkBg/60 backdrop-blur-sm p-4 relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-violet-500/5 pointer-events-none"></div>
                
                {/* Visual structure (glowing bracket lines) */}
                <div className="w-full h-full flex items-center justify-between text-[8px] font-bold text-slate-400 dark:text-slate-500">
                  
                  {/* Left Bracket */}
                  <div className="flex flex-col gap-5 w-16">
                    <button
                      onClick={() => { setWinnerLeft('Team A'); if (champion) setChampion(''); }}
                      className={`border px-1.5 py-1 rounded text-left transition-all ${
                        winnerLeft === 'Team A'
                          ? 'border-blue-500 bg-blue-500/10 text-blue-600 dark:text-blue-400 shadow-neon-blue'
                          : 'border-slate-200 dark:border-darkBorder bg-slate-50 dark:bg-darkCard hover:border-slate-400'
                      }`}
                    >
                      Team A
                    </button>
                    <button
                      onClick={() => { setWinnerLeft('Team B'); if (champion) setChampion(''); }}
                      className={`border px-1.5 py-1 rounded text-left transition-all ${
                        winnerLeft === 'Team B'
                          ? 'border-blue-500 bg-blue-500/10 text-blue-600 dark:text-blue-400 shadow-neon-blue'
                          : 'border-slate-200 dark:border-darkBorder bg-slate-50 dark:bg-darkCard hover:border-slate-400'
                      }`}
                    >
                      Team B
                    </button>
                  </div>
                  
                  {/* Centerpiece / Finals Area */}
                  <div className="flex flex-col items-center gap-2.5 z-10 w-20 text-center">
                    
                    {/* Semi final winners connection */}
                    <div className="flex flex-col gap-2 w-full">
                      <button
                        disabled={!winnerLeft}
                        onClick={() => setChampion(winnerLeft)}
                        className={`border px-1 py-1 rounded transition-all text-[7px] ${
                          !winnerLeft
                            ? 'border-slate-200 dark:border-darkBorder border-dashed text-slate-300 dark:text-slate-700'
                            : champion === winnerLeft
                            ? 'border-amber-500 bg-amber-500/10 text-amber-600 dark:text-amber-400 shadow-neon-purple font-extrabold scale-105'
                            : 'border-blue-500/50 bg-slate-50 dark:bg-darkCard text-blue-600 dark:text-blue-400'
                        }`}
                      >
                        {winnerLeft || 'Semifinal 1'}
                      </button>
                      <button
                        disabled={!winnerRight}
                        onClick={() => setChampion(winnerRight)}
                        className={`border px-1 py-1 rounded transition-all text-[7px] ${
                          !winnerRight
                            ? 'border-slate-200 dark:border-darkBorder border-dashed text-slate-300 dark:text-slate-700'
                            : champion === winnerRight
                            ? 'border-amber-500 bg-amber-500/10 text-amber-600 dark:text-amber-400 shadow-neon-purple font-extrabold scale-105'
                            : 'border-blue-500/50 bg-slate-50 dark:bg-darkCard text-blue-600 dark:text-blue-400'
                        }`}
                      >
                        {winnerRight || 'Semifinal 2'}
                      </button>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className={`h-9 w-9 rounded-full flex items-center justify-center border transition-all ${
                        champion
                          ? 'bg-amber-500/20 border-amber-400 text-amber-400 shadow-neon-purple scale-110'
                          : 'bg-blue-500/10 border-blue-500/30 text-blue-500 shadow-neon-blue'
                      }`}>
                        <Trophy className="h-4.5 w-4.5" />
                      </div>
                      <span className="text-[6px] text-blue-600 dark:text-blue-400 uppercase tracking-widest font-black mt-1">
                        {champion ? `${champion} Wins!` : 'Finals'}
                      </span>
                    </div>
                  </div>

                  {/* Right Bracket */}
                  <div className="flex flex-col gap-5 w-16 text-right">
                    <button
                      onClick={() => { setWinnerRight('Team C'); if (champion) setChampion(''); }}
                      className={`border px-1.5 py-1 rounded text-right transition-all ${
                        winnerRight === 'Team C'
                          ? 'border-blue-500 bg-blue-500/10 text-blue-600 dark:text-blue-400 shadow-neon-blue'
                          : 'border-slate-200 dark:border-darkBorder bg-slate-50 dark:bg-darkCard hover:border-slate-400'
                      }`}
                    >
                      Team C
                    </button>
                    <button
                      onClick={() => { setWinnerRight('Team D'); if (champion) setChampion(''); }}
                      className={`border px-1.5 py-1 rounded text-right transition-all ${
                        winnerRight === 'Team D'
                          ? 'border-blue-500 bg-blue-500/10 text-blue-600 dark:text-blue-400 shadow-neon-blue'
                          : 'border-slate-200 dark:border-darkBorder bg-slate-50 dark:bg-darkCard hover:border-slate-400'
                      }`}
                    >
                      Team D
                    </button>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* Right Panel: Why STAMS? Section */}
          <div className="lg:col-span-6 flex flex-col justify-between text-left">
            <div>
              <h2 className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                Why STAMS?
              </h2>
              <p className="mt-1 text-2xl font-bold tracking-tight text-slate-900 dark:text-white uppercase">
                Built for Modern Sports Ecosystems
              </p>
            </div>

            {/* Grid of features */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {whyItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="flex gap-3">
                    <div className={`flex-shrink-0 h-10 w-10 rounded-lg flex items-center justify-center border ${item.color}`}>
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-950 dark:text-white">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 leading-normal font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
