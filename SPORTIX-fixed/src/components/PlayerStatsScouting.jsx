import React, { useState } from 'react';
import { UserCheck, Star, Award, Flame, Target, Zap, TrendingUp, Search } from 'lucide-react';

export default function PlayerStatsScouting() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSport, setFilterSport] = useState('All');

  const players = [
    {
      id: 1,
      name: 'Rohan Sharma',
      team: 'Strikers FC',
      sport: 'Football',
      role: 'Forward / Striker',
      matches: 12,
      goals: 14,
      assists: 6,
      minutes: 1040,
      rating: 9.2,
      mvpCount: 5,
      image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=300&q=80',
      badge: 'Golden Boot Leader'
    },
    {
      id: 2,
      name: 'Devraj Singh',
      team: 'Thunderbolts',
      sport: 'Basketball',
      role: 'Point Guard',
      matches: 10,
      goals: 185, // points scored
      assists: 42,
      minutes: 380,
      rating: 8.9,
      mvpCount: 4,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
      badge: 'MVP Favorite'
    },
    {
      id: 3,
      name: 'Ananya Verma',
      team: 'Royal Champions',
      sport: 'Tennis',
      role: 'Singles Seed #1',
      matches: 8,
      goals: 8, // wins
      assists: 0,
      minutes: 620,
      rating: 9.5,
      mvpCount: 6,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80',
      badge: 'Undefeated'
    },
    {
      id: 4,
      name: 'Kabir Mehta',
      team: 'Mumbai City FC',
      sport: 'Football',
      role: 'Midfielder',
      matches: 11,
      goals: 5,
      assists: 11,
      minutes: 980,
      rating: 8.7,
      mvpCount: 3,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80',
      badge: 'Top Playmaker'
    }
  ];

  const filteredPlayers = players.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.team.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSport = filterSport === 'All' || p.sport === filterSport;
    return matchesSearch && matchesSport;
  });

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-left border-t border-slate-200 dark:border-darkBorder">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <div>
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-500">
            Player Analytics & Performance Intelligence
          </span>
          <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight mt-1">
            Player Statistics & Scouting Hub
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Track goals, assists, minutes played, and scout high-performing athletes for tournament drafts.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search player or team..."
              className="pl-9 pr-4 py-2 rounded-xl text-xs bg-white dark:bg-darkCard border border-slate-200 dark:border-darkBorder text-slate-900 dark:text-white focus:outline-none focus:border-blue-500"
            />
          </div>

          <select
            value={filterSport}
            onChange={(e) => setFilterSport(e.target.value)}
            className="px-3 py-2 rounded-xl text-xs bg-white dark:bg-darkCard border border-slate-200 dark:border-darkBorder text-slate-900 dark:text-white font-semibold"
          >
            <option value="All">All Sports</option>
            <option value="Football">Football</option>
            <option value="Basketball">Basketball</option>
            <option value="Tennis">Tennis</option>
          </select>
        </div>
      </div>

      {/* Players Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredPlayers.map((p) => (
          <div
            key={p.id}
            className="rounded-2xl border border-slate-200 dark:border-darkBorder bg-white dark:bg-darkCard overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="p-5">
              {/* Header Image & Badge */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-14 w-14 rounded-2xl object-cover border-2 border-blue-500/30"
                 onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/sports/fallback.svg'; }}/>
                <div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    {p.badge}
                  </span>
                  <h3 className="font-bold text-base text-slate-900 dark:text-white mt-1 line-clamp-1">{p.name}</h3>
                  <span className="text-xs text-slate-500 dark:text-slate-400">{p.team} • {p.role}</span>
                </div>
              </div>

              {/* Stats Metrics Grid */}
              <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-100 dark:border-darkBorder text-center text-xs">
                <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-900">
                  <span className="text-[9px] uppercase text-slate-400 font-bold block">Matches</span>
                  <span className="font-black text-slate-900 dark:text-white font-mono text-sm">{p.matches}</span>
                </div>

                <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-900">
                  <span className="text-[9px] uppercase text-slate-400 font-bold block">Points/Goals</span>
                  <span className="font-black text-emerald-500 font-mono text-sm">{p.goals}</span>
                </div>

                <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-900">
                  <span className="text-[9px] uppercase text-slate-400 font-bold block">Rating</span>
                  <span className="font-black text-amber-500 font-mono text-sm flex items-center justify-center gap-0.5">
                    <Star className="h-3 w-3 fill-amber-400" /> {p.rating}
                  </span>
                </div>
              </div>
            </div>

            {/* Card Footer */}
            <div className="px-5 py-3 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-100 dark:border-darkBorder flex items-center justify-between text-xs">
              <span className="text-slate-500 text-[10px]">MVP Awards: <strong>{p.mvpCount}x</strong></span>
              <button className="text-blue-600 dark:text-blue-400 font-bold hover:underline">
                Full Profile →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
