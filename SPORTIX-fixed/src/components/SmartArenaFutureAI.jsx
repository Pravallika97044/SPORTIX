import React, { useState } from 'react';
import { 
  Sparkles, Scan, CloudSun, Users, Radio, Cpu, CheckCircle2, AlertCircle, RefreshCw, Zap
} from 'lucide-react';

export default function SmartArenaFutureAI({ onToast }) {
  const [activeTab, setActiveTab] = useState('iot'); // 'iot' | 'ai' | 'biometric' | 'crowd'

  // Biometric scanner state
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState(null);

  // AI Fixture generator simulation
  const [aiPrompt, setAiPrompt] = useState('Generate 8-team knockout bracket for IPL T20 with zero venue collisions and rain backup window.');
  const [isAiGenerating, setIsAiGenerating] = useState(false);
  const [aiOutput, setAiOutput] = useState(null);

  const handleStartBiometricScan = () => {
    setIsScanning(true);
    setScanResult(null);
    setTimeout(() => {
      setIsScanning(false);
      setScanResult({
        name: 'John Doe',
        ticketId: 'STAMS-8842-VIP',
        gate: 'Gate A (VIP Entry)',
        match: 'Strikers FC vs Thunderbolts',
        status: 'VERIFIED & GRANTED'
      });
      if (onToast) onToast('👤 Face Recognition Verified: Entry Granted at Gate A', 'success');
    }, 2500);
  };

  const handleRunAiGen = (e) => {
    e.preventDefault();
    setIsAiGenerating(true);
    setTimeout(() => {
      setIsAiGenerating(false);
      setAiOutput({
        confidence: '99.4%',
        reasoning: 'Analyzed historical rain patterns, player rest hours, and stadium LED availability.',
        schedule: [
          { time: '14:00 PM', match: 'Match 1: RCB vs KKR (Gachibowli Court 1)', weather: 'Clear (28°C)' },
          { time: '18:00 PM', match: 'Match 2: MI vs CSK (Gachibowli Main Arena)', weather: 'Roof Closed (Rain Reserve)' }
        ]
      });
      if (onToast) onToast('✨ AI Fixture & Weather Schedule Generated!', 'success');
    }, 2000);
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-left border-t border-slate-200 dark:border-darkBorder">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <div>
          <span className="text-xs font-extrabold uppercase tracking-widest text-violet-600 dark:text-violet-400 flex items-center gap-1.5">
            <Sparkles className="h-4 w-4" /> Next-Gen Innovations
          </span>
          <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight mt-1">
            Smart Arena & AI Future Enhancements
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            IoT Sensor telemetry, AI fixture generation, biometric entry & crowd density tracking.
          </p>
        </div>

        {/* Feature selector tabs */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-slate-200/60 dark:bg-darkCard rounded-2xl border border-slate-300/50 dark:border-darkBorder">
          {[
            { id: 'iot', label: 'IoT Smart Arena', icon: Radio },
            { id: 'ai', label: 'AI Fixture Engine', icon: Sparkles },
            { id: 'biometric', label: 'Face Recognition', icon: Scan },
            { id: 'crowd', label: 'Crowd & Weather AI', icon: Users },
          ].map((t) => {
            const Icon = t.icon;
            const active = activeTab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  active
                    ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/30'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-300/50 dark:hover:bg-slate-800'
                }`}
              >
                <Icon className="h-4 w-4" />
                {t.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* --- TAB 1: IOT SMART ARENA DASHBOARD --- */}
      {activeTab === 'iot' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in text-xs">
          {/* Parking Sensor */}
          <div className="p-5 rounded-3xl border border-slate-200 dark:border-darkBorder bg-white dark:bg-darkCard shadow-xl">
            <span className="text-slate-400 text-[10px] font-extrabold uppercase">Parking Telemetry</span>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-1">600 / 800</h3>
            <p className="text-amber-500 font-semibold mt-1">75% Capacity Occupied</p>
            <div className="mt-4 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-amber-500 w-3/4 rounded-full" />
            </div>
          </div>

          {/* Environmental Sensors */}
          <div className="p-5 rounded-3xl border border-slate-200 dark:border-darkBorder bg-white dark:bg-darkCard shadow-xl">
            <span className="text-slate-400 text-[10px] font-extrabold uppercase">Pitch & Climate IoT</span>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-1">26°C • 62% H</h3>
            <p className="text-emerald-500 font-semibold mt-1">Turf Moisture Optimal</p>
            <div className="mt-4 flex items-center justify-between text-[10px] text-slate-400 font-mono">
              <span>Sensor ID: #IOT-99</span>
              <span className="text-emerald-400">Online</span>
            </div>
          </div>

          {/* Lighting & Floodlights */}
          <div className="p-5 rounded-3xl border border-slate-200 dark:border-darkBorder bg-white dark:bg-darkCard shadow-xl">
            <span className="text-slate-400 text-[10px] font-extrabold uppercase">Smart Floodlight Grid</span>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-1">2,400 Lux</h3>
            <p className="text-blue-500 font-semibold mt-1">Broadcast HD Standard</p>
            <div className="mt-4 flex items-center justify-between text-[10px] text-slate-400 font-mono">
              <span>Dimmer: 100%</span>
              <span className="text-blue-400">DMX Managed</span>
            </div>
          </div>

          {/* Medical Room Readiness */}
          <div className="p-5 rounded-3xl border border-slate-200 dark:border-darkBorder bg-white dark:bg-darkCard shadow-xl">
            <span className="text-slate-400 text-[10px] font-extrabold uppercase">Medical Room Status</span>
            <h3 className="text-2xl font-black text-emerald-500 mt-1">READY</h3>
            <p className="text-slate-500 mt-1">2 Ambulances Standby</p>
            <div className="mt-4 flex items-center justify-between text-[10px] text-slate-400 font-mono">
              <span>Defibrillator: OK</span>
              <span className="text-emerald-400">Doctor On Duty</span>
            </div>
          </div>
        </div>
      )}

      {/* --- TAB 2: AI FIXTURE GENERATOR ENGINE --- */}
      {activeTab === 'ai' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-fade-in">
          <div className="lg:col-span-5 rounded-3xl border border-slate-200 dark:border-darkBorder bg-white dark:bg-darkCard p-6 shadow-xl text-xs">
            <h3 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-tight mb-4 pb-3 border-b border-slate-100 dark:border-darkBorder flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-violet-500" /> AI Scheduling Copilot
            </h3>

            <form onSubmit={handleRunAiGen} className="space-y-4">
              <div>
                <label className="block font-semibold uppercase text-slate-500 dark:text-slate-400 mb-1.5">AI Prompt Constraints</label>
                <textarea
                  rows={4}
                  value={aiPrompt}
                  onChange={(e) => setAiPrompt(e.target.value)}
                  className="w-full rounded-2xl border border-slate-200 dark:border-darkBorder bg-slate-50 dark:bg-darkBg p-3 text-slate-900 dark:text-white focus:outline-none focus:border-violet-500"
                />
              </div>

              <button
                type="submit"
                disabled={isAiGenerating}
                className="w-full py-3 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-bold transition-all shadow-lg flex items-center justify-center gap-2"
              >
                {isAiGenerating ? (
                  <>
                    <RefreshCw className="h-4 w-4 animate-spin" /> Optimizing Fixtures with Neural AI...
                  </>
                ) : (
                  <>
                    <Zap className="h-4 w-4" /> Run AI Constraint Engine
                  </>
                )}
              </button>
            </form>
          </div>

          {/* AI Output Result */}
          <div className="lg:col-span-7 rounded-3xl border border-slate-200 dark:border-darkBorder bg-white dark:bg-darkCard p-6 shadow-xl text-xs">
            <h3 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-tight mb-4 pb-3 border-b border-slate-100 dark:border-darkBorder">
              AI Optimization Results
            </h3>

            {aiOutput ? (
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-violet-50 dark:bg-violet-950/30 border border-violet-100 dark:border-violet-900/40">
                  <span className="font-extrabold text-violet-600 dark:text-violet-400 text-xs">Confidence Score: {aiOutput.confidence}</span>
                  <p className="text-slate-600 dark:text-slate-300 mt-1">{aiOutput.reasoning}</p>
                </div>

                <div className="space-y-2">
                  {aiOutput.schedule.map((item, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-darkBorder flex justify-between items-center">
                      <div>
                        <span className="font-bold text-slate-900 dark:text-white">{item.match}</span>
                        <p className="text-[10px] text-slate-400">Time Slot: {item.time}</p>
                      </div>
                      <span className="text-[10px] px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-500 font-bold">
                        {item.weather}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="py-12 flex flex-col items-center justify-center text-slate-400">
                <Sparkles className="h-10 w-10 text-violet-400/50 mb-3 animate-pulse" />
                <p>Click "Run AI Constraint Engine" to generate collision-free schedules.</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* --- TAB 3: FACE RECOGNITION STADIUM ENTRY --- */}
      {activeTab === 'biometric' && (
        <div className="rounded-3xl border border-slate-200 dark:border-darkBorder bg-white dark:bg-darkCard p-8 shadow-2xl max-w-2xl mx-auto text-center animate-fade-in">
          <div className="h-16 w-16 rounded-full bg-violet-500/10 text-violet-600 dark:text-violet-400 flex items-center justify-center mx-auto mb-4 border border-violet-500/20">
            <Scan className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
            AI Face Recognition Gate Scanner
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto mt-1">
            Simulate instant contactless gate entry using facial recognition vectors matching registered spectator QR tickets.
          </p>

          <div className="mt-8 p-6 rounded-2xl bg-slate-900 text-white relative overflow-hidden border border-slate-800">
            {isScanning ? (
              <div className="py-8 flex flex-col items-center justify-center space-y-3">
                <div className="h-20 w-20 rounded-full border-4 border-violet-500 border-t-transparent animate-spin" />
                <p className="text-xs font-mono text-violet-400 animate-pulse">Scanning Biometric Features...</p>
              </div>
            ) : scanResult ? (
              <div className="py-4 space-y-3 text-left">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <CheckCircle2 className="h-5 w-5" /> MATCH CONFIRMED - ENTRY GRANTED
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-300 font-mono pt-2 border-t border-slate-800">
                  <div>Spectator: <strong>{scanResult.name}</strong></div>
                  <div>Ticket: <strong>{scanResult.ticketId}</strong></div>
                  <div>Gate: <strong>{scanResult.gate}</strong></div>
                  <div>Match: <strong>{scanResult.match}</strong></div>
                </div>
              </div>
            ) : (
              <div className="py-8">
                <button
                  onClick={handleStartBiometricScan}
                  className="px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-bold text-xs shadow-lg transition-all"
                >
                  Simulate Camera Face Scan
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* --- TAB 4: CROWD & WEATHER AI --- */}
      {activeTab === 'crowd' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in text-xs">
          <div className="p-6 rounded-3xl border border-slate-200 dark:border-darkBorder bg-white dark:bg-darkCard shadow-xl">
            <h4 className="font-bold text-sm text-slate-900 dark:text-white uppercase mb-4">
              Gate Density & Crowd Management
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 rounded-xl bg-slate-50 dark:bg-slate-900">
                <span>Gate A (VIP North):</span>
                <span className="text-emerald-500 font-bold">Clear (12/min)</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-xl bg-slate-50 dark:bg-slate-900">
                <span>Gate B (General East):</span>
                <span className="text-amber-500 font-bold">Moderate (140/min)</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-xl bg-slate-50 dark:bg-slate-900">
                <span>Gate C (General South):</span>
                <span className="text-rose-500 font-bold">Heavy Traffic - Reroute Advised</span>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-3xl border border-slate-200 dark:border-darkBorder bg-white dark:bg-darkCard shadow-xl">
            <h4 className="font-bold text-sm text-slate-900 dark:text-white uppercase mb-4">
              Weather-Based Retractable Roof AI
            </h4>
            <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40 space-y-2">
              <div className="flex justify-between font-bold text-blue-600 dark:text-blue-400">
                <span>Radar Prediction:</span>
                <span>Rain Probability 40% at 18:30</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300">
                STAMS Smart Sensor will automatically trigger motorized stadium roof closure 15 mins prior to rain onset.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
