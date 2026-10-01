import React from 'react';

export default function CTA({ onGetStarted, onExplore }) {
  return (
    <section className="py-12 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-tr from-blue-900 via-indigo-950 to-slate-950 px-6 py-12 shadow-2xl dark:from-indigo-950/80 dark:via-darkCard dark:to-slate-950 border border-indigo-500/20 dark:border-blue-500/20 md:px-12 md:py-16 text-center">
          
          {/* Neon radial glows inside */}
          <div className="absolute -left-20 -top-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            {/* Title */}
            <h2 className="text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl md:text-4xl leading-tight">
              Ready to organize your next sporting event?
            </h2>
            
            {/* Subtext */}
            <p className="mt-4 text-xs sm:text-sm md:text-base text-slate-300 font-normal leading-relaxed max-w-lg">
              Join thousands of organizers, managers, and athletes who trust STAMS to book facilities, run tournaments, and track statistics.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap gap-4 justify-center items-center">
              <button
                onClick={onGetStarted}
                className="px-7 py-3 text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg hover:shadow-blue-500/25 active:scale-95 transition-all"
              >
                Get Started Now
              </button>
              <button
                onClick={onExplore}
                className="px-7 py-3 text-xs sm:text-sm font-bold text-white border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 rounded-xl active:scale-95 transition-all"
              >
                Explore Arenas
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
