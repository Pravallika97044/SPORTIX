import React, { useState } from 'react';
import { 
  ShieldCheck, Trophy, Users, ShieldAlert, Stethoscope, Package, 
  DollarSign, BarChart3, Plus, CheckCircle, AlertTriangle, Calendar, MapPin, Wrench
} from 'lucide-react';

export default function DashboardHub({ onToast }) {
  const [activeRole, setActiveRole] = useState('organizer');

  // Dummy Fixtures generator state
  const [fixtures, setFixtures] = useState([
    { id: 1, teamA: 'Royal Challengers', teamB: 'Chennai Super Kings', venue: 'Gachibowli Stadium', time: '18:00 PM', referee: 'R. Kulkarni', status: 'Scheduled' },
    { id: 2, teamA: 'Mumbai City FC', teamB: 'Mohun Bagan AC', venue: 'Victory Arena', time: '20:30 PM', referee: 'A. D’Souza', status: 'Scheduled' },
  ]);

  const [teamAName, setTeamAName] = useState('');
  const [teamBName, setTeamBName] = useState('');
  const [venueName, setVenueName] = useState('Gachibowli Stadium');
  const [refereeName, setRefereeName] = useState('R. Kulkarni');

  // Medical Cases state
  const [medicalCases, setMedicalCases] = useState([
    { id: 1, player: 'Rahul Dravid', team: 'Royal Challengers', injury: 'Hamstring Pull', status: 'Under Treatment', ambulance: 'Dispatched (ETA 4 min)', fitness: 'Unfit (7 days)' },
    { id: 2, player: 'Sunil Chhetri', team: 'Mumbai City FC', injury: 'Ankle Sprain', status: 'First Aid Administered', ambulance: 'Standby', fitness: 'Fit for next match' }
  ]);
  const [newPatient, setNewPatient] = useState('');
  const [newInjury, setNewInjury] = useState('');

  // Equipment Inventory state
  const [equipmentList, setEquipmentList] = useState([
    { id: 1, item: 'Match Footballs (Nike Flight)', qty: 45, location: 'Storage Pod A', status: 'Available' },
    { id: 2, item: 'VAR High-Speed Cameras', qty: 8, location: 'Media Room 2', status: 'Active Maintenance' },
    { id: 3, item: 'Emergency Defibrillators & Kits', qty: 12, location: 'Medical Room 1', status: 'Ready' },
    { id: 4, item: 'LED Stadium Floodlights', qty: 320, location: 'Main Arena', status: 'Fully Operational' }
  ]);

  const handleGenerateFixture = (e) => {
    e.preventDefault();
    if (!teamAName || !teamBName) return;
    const newFix = {
      id: Date.now(),
      teamA: teamAName,
      teamB: teamBName,
      venue: venueName,
      time: '19:00 PM',
      referee: refereeName,
      status: 'Auto-Scheduled'
    };
    setFixtures([...fixtures, newFix]);
    setTeamAName('');
    setTeamBName('');
    if (onToast) onToast(`🗓️ Fixture generated & referee ${refereeName} assigned without stadium conflict!`, 'success');
  };

  const handleAddMedicalCase = (e) => {
    e.preventDefault();
    if (!newPatient) return;
    const newCase = {
      id: Date.now(),
      player: newPatient,
      team: 'Strikers FC',
      injury: newInjury || 'Muscle Strain',
      status: 'Treated by On-Field Doc',
      ambulance: 'On Standby',
      fitness: 'Pending Evaluation'
    };
    setMedicalCases([newCase, ...medicalCases]);
    setNewPatient('');
    setNewInjury('');
    if (onToast) onToast(`🚑 Medical case logged & ambulance alert dispatched`, 'info');
  };

  const roles = [
    { id: 'organizer', label: 'Tournament Organizer', icon: Trophy },
    { id: 'referee', label: 'Referee & Officials', icon: ShieldAlert },
    { id: 'medical', label: 'Medical & Safety', icon: Stethoscope },
    { id: 'equipment', label: 'Arena & Equipment', icon: Package },
    { id: 'finance', label: 'Finance & Analytics', icon: DollarSign },
    { id: 'admin', label: 'Super Admin', icon: ShieldCheck }
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-left border-t border-slate-200 dark:border-darkBorder">
      <div className="mb-8">
        <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600 dark:text-blue-400">
          STAMS Ecosystem Workspace
        </span>
        <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight mt-1">
          Role-Based Operations Console
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Multi-stakeholder interface for Organizers, Referees, Doctors, Managers & Admins.
        </p>
      </div>

      {/* Role Selector Tabs */}
      <div className="flex flex-wrap gap-2 mb-8 p-1.5 bg-slate-200/60 dark:bg-darkCard rounded-2xl border border-slate-300/50 dark:border-darkBorder">
        {roles.map((r) => {
          const Icon = r.icon;
          const active = activeRole === r.id;
          return (
            <button
              key={r.id}
              onClick={() => setActiveRole(r.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                active
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-300/50 dark:hover:bg-slate-800'
              }`}
            >
              <Icon className="h-4 w-4" />
              {r.label}
            </button>
          );
        })}
      </div>

      {/* --- TAB CONTENT 1: TOURNAMENT ORGANIZER --- */}
      {activeRole === 'organizer' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-fade-in">
          {/* Automatic Fixture & Referee Assignment Form */}
          <div className="lg:col-span-5 rounded-2xl border border-slate-200 dark:border-darkBorder bg-white dark:bg-darkCard p-6 shadow-xl">
            <h3 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wide mb-4 pb-3 border-b border-slate-100 dark:border-darkBorder flex items-center gap-2">
              <Calendar className="h-5 w-5 text-blue-600" />
              Auto Fixture & Stadium Scheduler
            </h3>

            <form onSubmit={handleGenerateFixture} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold uppercase text-slate-500 dark:text-slate-400 mb-1">Team A Name</label>
                <input
                  type="text"
                  required
                  value={teamAName}
                  onChange={(e) => setTeamAName(e.target.value)}
                  placeholder="e.g. Royal Challengers"
                  className="w-full rounded-xl border border-slate-200 dark:border-darkBorder bg-slate-50 dark:bg-darkBg p-3 text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block font-semibold uppercase text-slate-500 dark:text-slate-400 mb-1">Team B Name</label>
                <input
                  type="text"
                  required
                  value={teamBName}
                  onChange={(e) => setTeamBName(e.target.value)}
                  placeholder="e.g. Chennai Super Kings"
                  className="w-full rounded-xl border border-slate-200 dark:border-darkBorder bg-slate-50 dark:bg-darkBg p-3 text-slate-900 dark:text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold uppercase text-slate-500 dark:text-slate-400 mb-1">Venue Allocation</label>
                  <select
                    value={venueName}
                    onChange={(e) => setVenueName(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 dark:border-darkBorder bg-slate-50 dark:bg-darkBg p-3 text-slate-900 dark:text-white"
                  >
                    <option value="Gachibowli Stadium">Gachibowli (Cap: 8k)</option>
                    <option value="Elite Complex">Elite Complex (Cap: 15k)</option>
                    <option value="Victory Arena">Victory Arena (Cap: 5k)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold uppercase text-slate-500 dark:text-slate-400 mb-1">Assign Referee</label>
                  <select
                    value={refereeName}
                    onChange={(e) => setRefereeName(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 dark:border-darkBorder bg-slate-50 dark:bg-darkBg p-3 text-slate-900 dark:text-white"
                  >
                    <option value="R. Kulkarni">R. Kulkarni (FIFA Cert)</option>
                    <option value="A. D’Souza">A. D’Souza (BCCI Cert)</option>
                    <option value="M. Taylor">M. Taylor (NBA Cert)</option>
                  </select>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40 text-[11px] text-blue-700 dark:text-blue-300">
                ⚡ STAMS Smart AI automatically verifies stadium lighting, parking capacity & prevents double-booking.
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Plus className="h-4 w-4" /> Generate Match & Lock Slot
              </button>
            </form>
          </div>

          {/* Generated Fixtures List */}
          <div className="lg:col-span-7 rounded-2xl border border-slate-200 dark:border-darkBorder bg-white dark:bg-darkCard p-6 shadow-xl">
            <h3 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wide mb-4 pb-3 border-b border-slate-100 dark:border-darkBorder flex items-center justify-between">
              <span>Active Tournament Fixtures ({fixtures.length})</span>
              <span className="text-xs text-blue-600 font-semibold">Conflict-Free Protocol</span>
            </h3>

            <div className="space-y-3">
              {fixtures.map((f) => (
                <div key={f.id} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-darkBorder flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div>
                    <div className="font-bold text-sm text-slate-900 dark:text-white">
                      {f.teamA} <span className="text-blue-500 font-mono">VS</span> {f.teamB}
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-2">
                      <span><MapPin className="h-3 w-3 inline" /> {f.venue}</span> • <span>⏰ {f.time}</span>
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-[10px]">
                      Ref: {f.referee}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-extrabold text-[10px] border border-emerald-500/20">
                      {f.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* --- TAB CONTENT 2: REFEREE & OFFICIALS --- */}
      {activeRole === 'referee' && (
        <div className="rounded-2xl border border-slate-200 dark:border-darkBorder bg-white dark:bg-darkCard p-6 shadow-xl animate-fade-in">
          <h3 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wide mb-4 pb-3 border-b border-slate-100 dark:border-darkBorder flex items-center gap-2">
            <ShieldAlert className="h-5 w-5 text-amber-500" /> Official Match Operations & Discipline Roster
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-darkBorder">
              <span className="text-slate-500 uppercase font-semibold text-[10px]">Assigned Match #104</span>
              <h4 className="font-bold text-sm text-slate-900 dark:text-white mt-1">Strikers FC vs Thunderbolts</h4>
              <p className="text-slate-400 mt-1">Gachibowli Main Court • Kickoff: Live</p>
              <div className="mt-4 pt-3 border-t border-slate-200 dark:border-darkBorder flex justify-between items-center">
                <span className="text-emerald-500 font-bold">Status: Active Field</span>
                <span className="text-blue-500 font-semibold">VAR Ready</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-darkBorder">
              <span className="text-slate-500 uppercase font-semibold text-[10px]">Assigned Match #105</span>
              <h4 className="font-bold text-sm text-slate-900 dark:text-white mt-1">Royal Challengers vs CSK</h4>
              <p className="text-slate-400 mt-1">Elite Stadium • Scheduled 18:00</p>
              <div className="mt-4 pt-3 border-t border-slate-200 dark:border-darkBorder flex justify-between items-center">
                <span className="text-amber-500 font-bold">Upcoming</span>
                <span className="text-slate-400">Pre-Check 17:30</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-darkBorder">
              <span className="text-slate-500 uppercase font-semibold text-[10px]">Disciplinary Summary</span>
              <h4 className="font-bold text-sm text-slate-900 dark:text-white mt-1">Cards Issued Today</h4>
              <div className="flex gap-4 mt-3">
                <span className="px-3 py-1 rounded bg-amber-400 text-black font-extrabold">4 Yellows</span>
                <span className="px-3 py-1 rounded bg-red-600 text-white font-extrabold">1 Red</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- TAB CONTENT 3: MEDICAL STAFF --- */}
      {activeRole === 'medical' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-fade-in">
          {/* Medical Incident Logger */}
          <div className="lg:col-span-5 rounded-2xl border border-slate-200 dark:border-darkBorder bg-white dark:bg-darkCard p-6 shadow-xl">
            <h3 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wide mb-4 pb-3 border-b border-slate-100 dark:border-darkBorder flex items-center gap-2">
              <Stethoscope className="h-5 w-5 text-rose-500" />
              Emergency & Injury Tracker
            </h3>

            <form onSubmit={handleAddMedicalCase} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold uppercase text-slate-500 dark:text-slate-400 mb-1">Player Name</label>
                <input
                  type="text"
                  required
                  value={newPatient}
                  onChange={(e) => setNewPatient(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full rounded-xl border border-slate-200 dark:border-darkBorder bg-slate-50 dark:bg-darkBg p-3 text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block font-semibold uppercase text-slate-500 dark:text-slate-400 mb-1">Injury / Condition</label>
                <input
                  type="text"
                  required
                  value={newInjury}
                  onChange={(e) => setNewInjury(e.target.value)}
                  placeholder="e.g. Concussion protocol, Knee strain"
                  className="w-full rounded-xl border border-slate-200 dark:border-darkBorder bg-slate-50 dark:bg-darkBg p-3 text-slate-900 dark:text-white"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Plus className="h-4 w-4" /> Dispatch Medical Alert & Update Fitness
              </button>
            </form>
          </div>

          {/* Active Cases Roster */}
          <div className="lg:col-span-7 rounded-2xl border border-slate-200 dark:border-darkBorder bg-white dark:bg-darkCard p-6 shadow-xl">
            <h3 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wide mb-4 pb-3 border-b border-slate-100 dark:border-darkBorder">
              Active Medical Log ({medicalCases.length})
            </h3>

            <div className="space-y-3">
              {medicalCases.map((m) => (
                <div key={m.id} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-darkBorder flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                      {m.player} <span className="text-[10px] text-slate-500">({m.team})</span>
                    </h4>
                    <p className="text-rose-500 font-semibold mt-0.5">Diagnosed: {m.injury}</p>
                    <span className="text-slate-400 text-[11px]">Ambulance: {m.ambulance}</span>
                  </div>

                  <div className="text-right">
                    <span className="px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold text-[10px] block mb-1">
                      {m.status}
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono">Fitness: {m.fitness}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* --- TAB CONTENT 4: ARENA & EQUIPMENT --- */}
      {activeRole === 'equipment' && (
        <div className="rounded-2xl border border-slate-200 dark:border-darkBorder bg-white dark:bg-darkCard p-6 shadow-xl animate-fade-in">
          <h3 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wide mb-4 pb-3 border-b border-slate-100 dark:border-darkBorder flex items-center gap-2">
            <Package className="h-5 w-5 text-indigo-500" />
            Arena Venue Capabilities & Hardware Storage
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            {equipmentList.map((eq) => (
              <div key={eq.id} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-darkBorder flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase">{eq.location}</span>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white mt-1">{eq.item}</h4>
                  <p className="text-slate-500 dark:text-slate-400 mt-2 font-mono text-lg font-bold">Qty: {eq.qty}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200 dark:border-darkBorder flex items-center justify-between">
                  <span className="text-emerald-500 font-bold">{eq.status}</span>
                  <Wrench className="h-4 w-4 text-slate-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* --- TAB CONTENT 5: FINANCE & ANALYTICS --- */}
      {activeRole === 'finance' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
          <div className="p-6 rounded-2xl border border-slate-200 dark:border-darkBorder bg-white dark:bg-darkCard shadow-xl">
            <span className="text-xs font-bold text-slate-400 uppercase">Ticket Sales Revenue</span>
            <h3 className="text-3xl font-black text-slate-900 dark:text-white mt-2">₹14,25,000</h3>
            <p className="text-xs text-emerald-500 font-semibold mt-2">↑ 24% vs previous tournament</p>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200 dark:border-darkBorder bg-white dark:bg-darkCard shadow-xl">
            <span className="text-xs font-bold text-slate-400 uppercase">Team Entry Fees Collected</span>
            <h3 className="text-3xl font-black text-slate-900 dark:text-white mt-2">₹4,80,000</h3>
            <p className="text-xs text-blue-500 font-semibold mt-2">32 Teams Paid & Verified</p>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200 dark:border-darkBorder bg-white dark:bg-darkCard shadow-xl">
            <span className="text-xs font-bold text-slate-400 uppercase">Arena Operating Cost</span>
            <h3 className="text-3xl font-black text-slate-900 dark:text-white mt-2">₹2,10,000</h3>
            <p className="text-xs text-slate-400 mt-2">Lighting, Security & Medical Staff</p>
          </div>
        </div>
      )}

      {/* --- TAB CONTENT 6: SUPER ADMIN --- */}
      {activeRole === 'admin' && (
        <div className="p-6 rounded-2xl border border-slate-200 dark:border-darkBorder bg-white dark:bg-darkCard shadow-xl text-xs space-y-4 animate-fade-in">
          <h3 className="text-base font-bold text-slate-900 dark:text-white uppercase">Platform Master Controls</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-darkBorder">
              <span className="font-bold text-slate-900 dark:text-white text-sm">Active Tournaments</span>
              <p className="text-slate-400 mt-1">4 Tournaments in Progress (IPL, FIFA, University Fest)</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-darkBorder">
              <span className="font-bold text-slate-900 dark:text-white text-sm">DevOps & Telemetry Health</span>
              <p className="text-emerald-500 font-semibold mt-1">Kubernetes Clusters: 100% Operational</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-darkBorder">
              <span className="font-bold text-slate-900 dark:text-white text-sm">Registered Users</span>
              <p className="text-slate-400 mt-1">12,450 Spectators & Players Active</p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
