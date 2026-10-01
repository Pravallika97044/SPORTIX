import React, { useState } from 'react';
import { Trophy, Medal, Flame, ChevronRight, Award, ChevronDown } from 'lucide-react';

export default function BracketAndStandings() {
  const [activeTab, setActiveTab] = useState('bracket'); // 'bracket' | 'standings'
  const [selectedSport, setSelectedSport] = useState('Football');

  // Points Table Data
  const [standings, setStandings] = useState([
    { rank: 1, team: 'Strikers FC', played: 7, won: 6, drawn: 1, lost: 0, gf: 18, ga: 4, gd: '+14', pts: 19, form: ['W', 'W', 'W', 'D', 'W'] },
    { rank: 2, team: 'Thunderbolts FC', played: 7, won: 5, drawn: 1, lost: 1, gf: 15, ga: 7, gd: '+8', pts: 16, form: ['W', 'L', 'W', 'W', 'W'] },
    { rank: 3, team: 'Royal Challengers', played: 7, won: 4, drawn: 0, lost: 3, gf: 12, ga: 10, gd: '+2', pts: 12, form: ['L', 'W', 'W', 'L', 'W'] },
    { rank: 4, team: 'Chennai Super Kings', played: 7, won: 3, drawn: 2, lost: 2, gf: 11, ga: 9, gd: '+2', pts: 11, form: ['D', 'W', 'D', 'W', 'L'] },
    { rank: 5, team: 'Mumbai City FC', played: 7, won: 2, drawn: 1, lost: 4, gf: 8, ga: 13, gd: '-5', pts: 7, form: ['L', 'L', 'D', 'W', 'L'] },
    { rank: 6, team: 'Mohun Bagan AC', played: 7, won: 1, drawn: 1, lost: 5, gf: 6, ga: 17, gd: '-11', pts: 4, form: ['L', 'L', 'L', 'D', 'L'] },
  ]);

  // Knockout Bracket Data
  const bracketRounds = [
    {
      roundName: 'Quarter Finals',
      matches: [
        { id: 'q1', team1: 'Strikers FC', score1: 3, team2: 'Mohun Bagan', score2: 0, winner: 'Strikers FC', date: 'Aug 20' },
        { id: 'q2', team1: 'Royal Challengers', score1: 2, team2: 'Chennai SK', score2: 1, winner: 'Royal Challengers', date: 'Aug 21' },
        { id: 'q3', team1: 'Thunderbolts FC', score1: 4, team2: 'Mumbai City', score2: 2, winner: 'Thunderbolts FC', date: 'Aug 21' },
        { id: 'q4', team1: 'Hyd Titans', score1: 1, team2: 'Bengaluru Warriors', score2: 2, winner: 'Bengaluru Warriors', date: 'Aug 22' },
      ]
    },
    {
      roundName: 'Semi Finals',
      matches: [
        { id: 's1', team1: 'Strikers FC', score1: 2, team2: 'Royal Challengers', score2: 1, winner: 'Strikers FC', date: 'Aug 24' },
        { id: 's2', team1: 'Thunderbolts FC', score1: 3, team2: 'Bengaluru Warriors', score2: 0, winner: 'Thunderbolts FC', date: 'Aug 25' },
      ]
    },
    {
      roundName: 'Championship Final 🏆',
      matches: [
        { id: 'f1', team1: 'Strikers FC', score1: 'TBD', team2: 'Thunderbolts FC', score2: 'TBD', winner: null, date: 'Aug 28 • Gachibowli Stadium' },
      ]
    }
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-left border-t border-slate-200 dark:border-darkBorder">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <div>
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-500">
            Automated Tournament Engine
          </span>
          <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight mt-1">
            Standings & Knockout Brackets
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Calculated automatically from live scores with zero manual calculations.
          </p>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3">
          <div className="flex p-1 bg-slate-200/60 dark:bg-darkCard rounded-xl border border-slate-300/50 dark:border-darkBorder">
            <button
              onClick={() => setActiveTab('bracket')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'bracket'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Knockout Bracket
            </button>
            <button
              onClick={() => setActiveTab('standings')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'standings'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Points Table & Rankings
            </button>
          </div>
        </div>
      </div>

      {/* --- VIEW 1: KNOCKOUT BRACKET --- */}
      {activeTab === 'bracket' && (
        <div className="rounded-3xl border border-slate-200 dark:border-darkBorder bg-white dark:bg-darkCard p-6 sm:p-8 shadow-2xl overflow-x-auto animate-fade-in">
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-100 dark:border-darkBorder">
            <div className="flex items-center gap-2">
              <Trophy className="h-6 w-6 text-amber-500" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white uppercase tracking-tight">
                STAMS World Championship Bracket
              </h3>
            </div>
            <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 font-extrabold text-xs border border-amber-500/20">
              Live Bracket Updates
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 min-w-[700px]">
            {bracketRounds.map((round, rIndex) => (
              <div key={round.roundName} className="flex flex-col justify-around space-y-6">
                <div className="text-center pb-2 border-b border-slate-200 dark:border-darkBorder">
                  <span className="text-xs font-black uppercase text-slate-400 tracking-wider">
                    {round.roundName}
                  </span>
                </div>

                {round.matches.map((m) => (
                  <div
                    key={m.id}
                    className={`rounded-2xl border p-4 transition-all ${
                      rIndex === 2
                        ? 'border-amber-500/50 bg-gradient-to-br from-amber-500/10 to-blue-600/10 shadow-lg shadow-amber-500/5'
                        : 'border-slate-200 dark:border-darkBorder bg-slate-50 dark:bg-slate-900/60'
                    }`}
                  >
                    <div className="flex justify-between items-center text-[10px] text-slate-400 mb-2 font-mono">
                      <span>MATCH {m.id.toUpperCase()}</span>
                      <span>{m.date}</span>
                    </div>

                    {/* Team 1 */}
                    <div className={`flex justify-between items-center p-2 rounded-lg mb-1.5 ${
                      m.winner === m.team1 ? 'bg-emerald-500/10 font-bold text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-300'
                    }`}>
                      <span className="text-xs flex items-center gap-1.5">
                        {m.winner === m.team1 && <Medal className="h-3.5 w-3.5 text-amber-400 inline" />}
                        {m.team1}
                      </span>
                      <span className="font-mono font-black text-sm">{m.score1}</span>
                    </div>

                    {/* Team 2 */}
                    <div className={`flex justify-between items-center p-2 rounded-lg ${
                      m.winner === m.team2 ? 'bg-emerald-500/10 font-bold text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-300'
                    }`}>
                      <span className="text-xs flex items-center gap-1.5">
                        {m.winner === m.team2 && <Medal className="h-3.5 w-3.5 text-amber-400 inline" />}
                        {m.team2}
                      </span>
                      <span className="font-mono font-black text-sm">{m.score2}</span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* --- VIEW 2: LEAGUE POINTS TABLE --- */}
      {activeTab === 'standings' && (
        <div className="rounded-3xl border border-slate-200 dark:border-darkBorder bg-white dark:bg-darkCard p-6 shadow-2xl overflow-x-auto animate-fade-in text-xs">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-darkBorder text-slate-400 uppercase text-[10px] tracking-wider">
                <th className="py-3 px-2">Rank</th>
                <th className="py-3 px-4">Club / Team</th>
                <th className="py-3 px-2 text-center">P</th>
                <th className="py-3 px-2 text-center">W</th>
                <th className="py-3 px-2 text-center">D</th>
                <th className="py-3 px-2 text-center">L</th>
                <th className="py-3 px-2 text-center">GF</th>
                <th className="py-3 px-2 text-center">GA</th>
                <th className="py-3 px-2 text-center">GD</th>
                <th className="py-3 px-3 text-center font-bold">PTS</th>
                <th className="py-3 px-4 text-center">Recent Form</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-darkBorder/60">
              {standings.map((st) => (
                <tr key={st.rank} className="hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                  <td className="py-3.5 px-2 font-black text-slate-900 dark:text-white">
                    {st.rank <= 2 ? (
                      <span className="h-6 w-6 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold">
                        {st.rank}
                      </span>
                    ) : (
                      st.rank
                    )}
                  </td>
                  <td className="py-3.5 px-4 font-bold text-slate-900 dark:text-white text-sm">
                    {st.team}
                    {st.rank <= 2 && <span className="ml-2 text-[9px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 font-semibold">Semis Qualified</span>}
                  </td>
                  <td className="py-3.5 px-2 text-center font-mono">{st.played}</td>
                  <td className="py-3.5 px-2 text-center font-mono text-emerald-500 font-bold">{st.won}</td>
                  <td className="py-3.5 px-2 text-center font-mono text-slate-400">{st.drawn}</td>
                  <td className="py-3.5 px-2 text-center font-mono text-rose-500">{st.lost}</td>
                  <td className="py-3.5 px-2 text-center font-mono">{st.gf}</td>
                  <td className="py-3.5 px-2 text-center font-mono">{st.ga}</td>
                  <td className="py-3.5 px-2 text-center font-mono font-semibold">{st.gd}</td>
                  <td className="py-3.5 px-3 text-center font-mono font-black text-base text-blue-600 dark:text-blue-400">{st.pts}</td>
                  <td className="py-3.5 px-4 text-center">
                    <div className="flex items-center justify-center gap-1">
                      {st.form.map((f, i) => (
                        <span
                          key={i}
                          className={`h-5 w-5 rounded-md flex items-center justify-center text-[9px] font-black ${
                            f === 'W'
                              ? 'bg-emerald-500 text-white'
                              : f === 'D'
                              ? 'bg-slate-400 text-white'
                              : 'bg-rose-500 text-white'
                          }`}
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
