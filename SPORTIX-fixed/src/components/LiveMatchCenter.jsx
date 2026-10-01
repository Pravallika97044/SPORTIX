import React, { useState, useEffect } from 'react';
import { Play, Pause, ShieldAlert, Award, Clock, Users, Activity, PlusCircle, CheckCircle, RefreshCw, AlertTriangle, Stethoscope } from 'lucide-react';

export default function LiveMatchCenter({ onToast }) {
  const [activeSport, setActiveSport] = useState('football');
  const [isLive, setIsLive] = useState(true);
  const [matchTime, setMatchTime] = useState(64); // minute 64

  // Match state
  const [scores, setScores] = useState({ home: 2, away: 1 });
  const [stats, setStats] = useState({
    possession: [58, 42],
    shots: [14, 8],
    fouls: [7, 11],
    yellowCards: [1, 3],
    redCards: [0, 1]
  });

  // Timeline events
  const [events, setEvents] = useState([
    { id: 1, minute: "62'", type: 'goal', team: 'home', player: 'R. Sharma (P. Pass)', text: 'GOAL! Strikers FC leads 2-1' },
    { id: 2, minute: "55'", type: 'card_yellow', team: 'away', player: 'A. Kumar', text: 'Yellow card for tactical foul' },
    { id: 3, minute: "45+2'", type: 'half', team: 'system', player: 'Official', text: 'End of 1st Half (1 - 1)' },
    { id: 4, minute: "38'", type: 'card_red', team: 'away', player: 'M. Varma', text: 'RED CARD! Dangerous tackle in penalty box' },
    { id: 5, minute: "14'", type: 'goal', team: 'away', player: 'D. Costa', text: 'GOAL! Equalizer by Thunderbolts' }
  ]);

  // Form inputs for Referee score input
  const [selectedTeam, setSelectedTeam] = useState('home');
  const [eventType, setEventType] = useState('goal');
  const [playerName, setPlayerName] = useState('');
  const [eventDesc, setEventDesc] = useState('');

  // Simulation timer
  useEffect(() => {
    let interval = null;
    if (isLive) {
      interval = setInterval(() => {
        setMatchTime((prev) => (prev >= 90 ? 90 : prev + 1));
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isLive]);

  const handleAddEvent = (e) => {
    e.preventDefault();
    if (!playerName) return;

    const newEvent = {
      id: Date.now(),
      minute: `${matchTime}'`,
      type: eventType,
      team: selectedTeam,
      player: playerName,
      text: eventDesc || `${eventType.toUpperCase()} recorded for ${playerName}`
    };

    setEvents([newEvent, ...events]);

    // Update match scores or stats live
    if (eventType === 'goal') {
      setScores((prev) => ({
        ...prev,
        [selectedTeam]: prev[selectedTeam] + 1
      }));
      if (onToast) onToast(`⚽ GOAL! Updated score: ${scores.home + (selectedTeam === 'home' ? 1 : 0)} - ${scores.away + (selectedTeam === 'away' ? 1 : 0)}`, 'success');
    } else if (eventType === 'card_yellow') {
      setStats(prev => ({ ...prev, yellowCards: [prev.yellowCards[0] + (selectedTeam === 'home' ? 1 : 0), prev.yellowCards[1] + (selectedTeam === 'away' ? 1 : 0)] }));
      if (onToast) onToast(`🟨 Yellow Card issued to ${playerName}`, 'info');
    } else if (eventType === 'card_red') {
      setStats(prev => ({ ...prev, redCards: [prev.redCards[0] + (selectedTeam === 'home' ? 1 : 0), prev.redCards[1] + (selectedTeam === 'away' ? 1 : 0)] }));
      if (onToast) onToast(`🟥 RED CARD! ${playerName} sent off`, 'error');
    }

    setPlayerName('');
    setEventDesc('');
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-left">
      {/* Title */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 text-xs font-extrabold uppercase tracking-wider animate-pulse border border-red-500/20">
              <span className="h-2 w-2 rounded-full bg-red-600 animate-ping" /> LIVE MATCH CENTER
            </span>
            <span className="text-xs font-semibold text-slate-500">STAMS Arena #1 • Gachibowli Stadium</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight mt-1">
            IPL & FIFA World Cup Grade Real-Time Telemetry
          </h2>
        </div>

        {/* Toggle Sports */}
        <div className="flex items-center gap-2 p-1 bg-slate-200/60 dark:bg-darkCard rounded-xl border border-slate-300/50 dark:border-darkBorder">
          {['football', 'basketball', 'cricket'].map((s) => (
            <button
              key={s}
              onClick={() => setActiveSport(s)}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold uppercase transition-all ${
                activeSport === s
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Main Scoreboard Display Banner */}
      <div className="rounded-3xl border border-slate-200 dark:border-darkBorder bg-slate-900 text-white p-6 sm:p-8 shadow-2xl relative overflow-hidden mb-8">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        
        {/* Match Header Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-800 text-xs font-medium text-slate-400">
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-blue-400" />
            MATCH TIME: <strong className="text-white font-mono text-sm">{matchTime}'</strong> (2nd Half)
          </span>
          <button
            onClick={() => setIsLive(!isLive)}
            className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 transition-colors"
          >
            {isLive ? <Pause className="h-3.5 w-3.5 text-amber-400" /> : <Play className="h-3.5 w-3.5 text-emerald-400" />}
            {isLive ? 'Pause Feed' : 'Resume Feed'}
          </button>
        </div>

        {/* Score Grid */}
        <div className="grid grid-cols-1 md:grid-cols-7 items-center gap-6 py-6 text-center">
          {/* Home Team */}
          <div className="md:col-span-3 flex flex-col items-center md:items-end">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center font-black text-2xl shadow-lg mb-2">
              SFC
            </div>
            <h3 className="text-xl font-black tracking-tight">Strikers FC</h3>
            <span className="text-xs text-blue-400 font-semibold">Home Team • Group A</span>
          </div>

          {/* Score Box */}
          <div className="md:col-span-1 flex flex-col items-center justify-center">
            <div className="flex items-center justify-center gap-3 bg-slate-950/80 px-6 py-3 rounded-2xl border border-slate-800 shadow-inner">
              <span className="text-4xl font-black font-mono text-blue-400">{scores.home}</span>
              <span className="text-slate-600 font-bold text-xl">:</span>
              <span className="text-4xl font-black font-mono text-emerald-400">{scores.away}</span>
            </div>
            <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-widest mt-2 flex items-center gap-1">
              <Activity className="h-3 w-3" /> Live Scoring
            </span>
          </div>

          {/* Away Team */}
          <div className="md:col-span-3 flex flex-col items-center md:items-start">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-600 flex items-center justify-center font-black text-2xl shadow-lg mb-2">
              TBC
            </div>
            <h3 className="text-xl font-black tracking-tight">Thunderbolts FC</h3>
            <span className="text-xs text-emerald-400 font-semibold">Away Team • Group A</span>
          </div>
        </div>

        {/* Quick Match Statistics Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-6 border-t border-slate-800 text-center text-xs">
          <div className="p-3 rounded-xl bg-slate-950/40 border border-slate-800/60">
            <span className="text-slate-400 block text-[10px] uppercase font-semibold">Possession</span>
            <span className="font-bold text-slate-200">{stats.possession[0]}% - {stats.possession[1]}%</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-950/40 border border-slate-800/60">
            <span className="text-slate-400 block text-[10px] uppercase font-semibold">Shots on Target</span>
            <span className="font-bold text-slate-200">{stats.shots[0]} - {stats.shots[1]}</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-950/40 border border-slate-800/60">
            <span className="text-slate-400 block text-[10px] uppercase font-semibold">Fouls</span>
            <span className="font-bold text-slate-200">{stats.fouls[0]} - {stats.fouls[1]}</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-950/40 border border-slate-800/60">
            <span className="text-slate-400 block text-[10px] uppercase font-semibold">Yellow Cards</span>
            <span className="font-bold text-amber-400">{stats.yellowCards[0]}🟨 - {stats.yellowCards[1]}🟨</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-950/40 border border-slate-800/60">
            <span className="text-slate-400 block text-[10px] uppercase font-semibold">Red Cards</span>
            <span className="font-bold text-red-500">{stats.redCards[0]}🟥 - {stats.redCards[1]}🟥</span>
          </div>
        </div>
      </div>

      {/* Grid: Live Referee Input Panel & Events Timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Referee / Match Official Control Panel */}
        <div className="lg:col-span-5 rounded-2xl border border-slate-200 dark:border-darkBorder bg-white dark:bg-darkCard p-6 shadow-xl">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100 dark:border-darkBorder">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
              <ShieldAlert className="h-4.5 w-4.5 text-blue-600 dark:text-blue-400" />
              Referee Official Console
            </h3>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              AUTHENTICATED
            </span>
          </div>

          <form onSubmit={handleAddEvent} className="space-y-4 text-xs">
            <div>
              <label className="block font-semibold uppercase text-slate-500 dark:text-slate-400 mb-1.5">Select Team</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedTeam('home')}
                  className={`py-2 rounded-xl font-bold border transition-all ${
                    selectedTeam === 'home'
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-slate-50 dark:bg-darkBg text-slate-700 dark:text-slate-300 border-slate-200 dark:border-darkBorder'
                  }`}
                >
                  Strikers FC (Home)
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedTeam('away')}
                  className={`py-2 rounded-xl font-bold border transition-all ${
                    selectedTeam === 'away'
                      ? 'bg-emerald-600 text-white border-emerald-600'
                      : 'bg-slate-50 dark:bg-darkBg text-slate-700 dark:text-slate-300 border-slate-200 dark:border-darkBorder'
                  }`}
                >
                  Thunderbolts (Away)
                </button>
              </div>
            </div>

            <div>
              <label className="block font-semibold uppercase text-slate-500 dark:text-slate-400 mb-1.5">Action Event</label>
              <select
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                className="w-full rounded-xl border border-slate-200 dark:border-darkBorder bg-slate-50 dark:bg-darkBg px-3 py-2.5 text-slate-900 dark:text-white font-medium focus:outline-none focus:border-blue-500"
              >
                <option value="goal">⚽ Goal Scored</option>
                <option value="card_yellow">🟨 Yellow Card (Foul)</option>
                <option value="card_red">🟥 Red Card (Dismissal)</option>
                <option value="sub">🔄 Substitution</option>
                <option value="injury">🚑 Medical / Injury Case</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold uppercase text-slate-500 dark:text-slate-400 mb-1.5">Player Involved</label>
              <input
                type="text"
                required
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                placeholder="e.g. Virat K., S. Chhetri"
                className="w-full rounded-xl border border-slate-200 dark:border-darkBorder bg-slate-50 dark:bg-darkBg px-3 py-2.5 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block font-semibold uppercase text-slate-500 dark:text-slate-400 mb-1.5">Notes / Details</label>
              <input
                type="text"
                value={eventDesc}
                onChange={(e) => setEventDesc(e.target.value)}
                placeholder="e.g. Header from corner kick"
                className="w-full rounded-xl border border-slate-200 dark:border-darkBorder bg-slate-50 dark:bg-darkBg px-3 py-2.5 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <PlusCircle className="h-4 w-4" /> Broadcast Live Action Event
            </button>
          </form>
        </div>

        {/* Right Column: Live Match Events Timeline */}
        <div className="lg:col-span-7 rounded-2xl border border-slate-200 dark:border-darkBorder bg-white dark:bg-darkCard p-6 shadow-xl">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4 pb-3 border-b border-slate-100 dark:border-darkBorder flex items-center gap-2">
            <Activity className="h-4.5 w-4.5 text-emerald-500" />
            Live Event Feed & Commentary
          </h3>

          <div className="space-y-3 max-h-[380px] overflow-y-auto pr-2">
            {events.map((item) => (
              <div
                key={item.id}
                className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-darkBorder/60 hover:border-slate-300 transition-colors"
              >
                <span className="px-2 py-1 rounded bg-slate-200 dark:bg-slate-800 font-mono text-xs font-bold text-slate-700 dark:text-slate-300">
                  {item.minute}
                </span>

                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    {item.type === 'goal' && <span className="text-base">⚽</span>}
                    {item.type === 'card_yellow' && <span className="text-xs bg-amber-400 text-black px-1.5 py-0.5 rounded font-bold">YELLOW</span>}
                    {item.type === 'card_red' && <span className="text-xs bg-red-600 text-white px-1.5 py-0.5 rounded font-bold">RED</span>}
                    {item.type === 'injury' && <Stethoscope className="h-4 w-4 text-rose-500" />}

                    <span className="font-bold text-xs text-slate-900 dark:text-white">
                      {item.player}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
