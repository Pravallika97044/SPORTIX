import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Rohan Mehta',
      role: 'Tournament Organizer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80',
      text: 'STAMS made organizing our tournament so easy and professional. Team coordination was perfect.',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      role: 'Basketball Coach',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80',
      text: 'Finding and booking arenas has never been this fast and reliable. The indoor courts are top notch.',
      rating: 5,
    },
    {
      name: 'Arjun Patel',
      role: 'Sports Academy Director',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80',
      text: 'A must-have platform for every sports academy and organizer. The AI bracket scheduler is magic.',
      rating: 5,
    },
    {
      name: 'Neha Iyer',
      role: 'University Sports Head',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&h=120&q=80',
      text: 'The real-time updates and management tools are outstanding. Live tracking has reduced delays.',
      rating: 5,
    },
  ];

  return (
    <section className="py-16 border-t border-slate-200/80 dark:border-darkBorder transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            What Our Users Say
          </h2>
          <p className="mt-1 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl uppercase">
            Trusted by Leaders & Athletes
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {reviews.map((rev, index) => (
            <div
              key={index}
              className="flex flex-col justify-between p-6 rounded-2xl border border-slate-200 bg-white dark:border-darkBorder dark:bg-darkCard hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 text-left"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} className="h-4.5 w-4.5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic font-normal flex-1">
                "{rev.text}"
              </p>

              {/* User Meta */}
              <div className="mt-6 flex items-center gap-3.5 pt-4 border-t border-slate-100 dark:border-darkBorder/50">
                <img
                  src={rev.image}
                  alt={rev.name}
                  className="h-10 w-10 rounded-full object-cover ring-2 ring-slate-100 dark:ring-darkBorder"
                 onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/sports/fallback.svg'; }}/>
                <div>
                  <h4 className="text-xs md:text-sm font-bold text-slate-900 dark:text-white">
                    {rev.name}
                  </h4>
                  <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                    {rev.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
