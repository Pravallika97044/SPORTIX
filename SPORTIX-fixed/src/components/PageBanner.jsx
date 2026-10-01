import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

export default function PageBanner({ title, subtitle, badge, icon: Icon, onBackHome }) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-900/90 via-slate-900 to-indigo-950 text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800 shadow-xl mb-8">
      {/* Background glow effects */}
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-600/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6 relative z-10 text-left">
        <div>
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs text-blue-300 mb-3 font-semibold">
            <button
              onClick={onBackHome}
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <Home className="h-3.5 w-3.5" /> Home
            </button>
            <ChevronRight className="h-3.5 w-3.5 text-slate-500" />
            <span className="text-white">{title}</span>
          </div>

          {/* Badge */}
          {badge && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-[10px] font-extrabold uppercase tracking-widest mb-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
              {badge}
            </span>
          )}

          <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white flex items-center gap-3">
            {Icon && <Icon className="h-8 w-8 text-blue-400" />}
            {title}
          </h1>
          <p className="text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Action Button */}
        <button
          onClick={onBackHome}
          className="self-start md:self-auto px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 backdrop-blur-md transition-all active:scale-95"
        >
          ← Return to Overview
        </button>
      </div>
    </div>
  );
}
