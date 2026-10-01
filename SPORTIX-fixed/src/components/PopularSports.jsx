import React from 'react';
import { ArrowRight, Trophy, Target, Gamepad2, Zap, Waves, Flame, Activity } from 'lucide-react';

export default function PopularSports({ selectedSport, onSelectSport }) {
  const sports = [
    {
      id: 'Basketball',
      name: 'Basketball',
      icon: Activity,
      color: 'bg-orange-500/20 text-orange-500 border-orange-500/30',
      image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=300&q=80',
    },
    {
      id: 'Football',
      name: 'Football',
      icon: Flame,
      color: 'bg-emerald-500/20 text-emerald-500 border-emerald-500/30',
      image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=300&q=80',
    },
    {
      id: 'Cricket',
      name: 'Cricket',
      icon: Target,
      color: 'bg-amber-500/20 text-amber-500 border-amber-500/30',
      image: 'https://images.unsplash.com/photo-1531415080290-bc9b85db8090?auto=format&fit=crop&w=300&q=80',
    },
    {
      id: 'Volleyball',
      name: 'Volleyball',
      icon: Activity,
      color: 'bg-sky-500/20 text-sky-500 border-sky-500/30',
      image: 'https://images.unsplash.com/photo-1592656094267-764a45023304?auto=format&fit=crop&w=300&q=80',
    },
    {
      id: 'Badminton',
      name: 'Badminton',
      icon: Trophy,
      color: 'bg-green-500/20 text-green-500 border-green-500/30',
      image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=300&q=80',
    },
    {
      id: 'Swimming',
      name: 'Swimming',
      icon: Waves,
      color: 'bg-blue-500/20 text-blue-500 border-blue-500/30',
      image: 'https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?auto=format&fit=crop&w=300&q=80',
    },
    {
      id: 'Athletics',
      name: 'Athletics',
      icon: Zap,
      color: 'bg-red-500/20 text-red-500 border-red-500/30',
      image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=300&q=80',
    },
    {
      id: 'Esports',
      name: 'Esports',
      icon: Gamepad2,
      color: 'bg-violet-500/20 text-violet-500 border-violet-500/30',
      image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=300&q=80',
    },
  ];

  return (
    <section id="sports" className="py-16 border-t border-slate-200/80 dark:border-darkBorder transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-10">
          <div className="text-left">
            <h2 className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Popular Sports
            </h2>
            <p className="mt-1 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl uppercase">
              Explore Our Disciplines
            </p>
          </div>
          <button
            onClick={() => onSelectSport('')}
            className="group inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
          >
            Explore All Sports
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Sports Cards Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
          {sports.map((sport) => {
            const isSelected = selectedSport === sport.id;
            const Icon = sport.icon;
            return (
              <button
                key={sport.id}
                onClick={() => onSelectSport(isSelected ? '' : sport.id)}
                className={`group relative flex flex-col items-center rounded-2xl border overflow-hidden p-2.5 bg-white dark:bg-darkCard hover:-translate-y-1 active:scale-98 transition-all duration-300 ${
                  isSelected
                    ? 'border-blue-500 shadow-neon-blue'
                    : 'border-slate-200 dark:border-darkBorder dark:hover:border-blue-500/50 hover:shadow-lg'
                }`}
              >
                {/* Sport Image Aspect Ratio Container */}
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-3">
                  <img
                    src={sport.image}
                    alt={sport.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                   onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/sports/fallback.svg'; }}/>
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/10 transition-colors pointer-events-none"></div>

                  {/* Circular Overlay Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`h-11 w-11 rounded-full flex items-center justify-center border backdrop-blur-sm shadow-md transition-transform group-hover:scale-110 ${sport.color}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                </div>

                {/* Sport Label */}
                <span className="font-semibold text-xs tracking-wide text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {sport.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
