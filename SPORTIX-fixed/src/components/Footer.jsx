import React, { useState } from 'react';
import { Send, Trophy } from 'lucide-react';

export default function Footer({ onSubscribe }) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      onSubscribe(email);
      setEmail('');
    }
  };

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact Us', href: '#contact' },
    { label: 'Blog', href: '#' },
    { label: 'Careers', href: '#' },
  ];

  const sportsLinks = [
    { label: 'All Sports', href: '#sports' },
    { label: 'Basketball', href: '#sports' },
    { label: 'Football', href: '#sports' },
    { label: 'Cricket', href: '#sports' },
    { label: 'More Sports', href: '#sports' },
  ];

  const arenaLinks = [
    { label: 'Find Arenas', href: '#arena' },
    { label: 'Popular Arenas', href: '#arena' },
    { label: 'How It Works', href: '#about' },
    { label: 'Pricing', href: '#' },
  ];

  const supportLinks = [
    { label: 'Help Center', href: '#' },
    { label: 'FAQs', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Privacy Policy', href: '#' },
  ];

  const socials = [
    {
      name: 'Facebook',
      href: '#',
      icon: (
        <svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      )
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (
        <svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
      )
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (
        <svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      )
    },
    {
      name: 'Youtube',
      href: '#',
      icon: (
        <svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
        </svg>
      )
    },
    {
      name: 'Linkedin',
      href: '#',
      icon: (
        <svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      )
    }
  ];

  return (
    <footer id="contact" className="pt-16 pb-8 border-t border-slate-200/80 dark:border-darkBorder bg-slate-50 dark:bg-darkBg transition-colors duration-300 text-left">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-200 dark:border-darkBorder">
          
          {/* Brand Info */}
          <div className="md:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-violet-600 shadow-neon-blue text-white">
                <Trophy className="h-5 w-5" />
              </div>
              <span className="font-sans text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                STAMS
              </span>
            </div>
            <p className="mt-4 text-xs text-slate-500 dark:text-slate-400 font-normal leading-relaxed max-w-sm">
              Empowering sports organizers, teams, and athletes with state-of-the-art facility bookings and tournament management technology.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              {socials.map((social, i) => {
                return (
                  <a
                    key={i}
                    href={social.href}
                    className="p-2 bg-slate-200/50 hover:bg-slate-200 dark:bg-slate-800/50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 dark:hover:text-white rounded-lg transition-all"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Directory Links Grid */}
          <div className="md:col-span-5 grid grid-cols-2 sm:grid-cols-4 gap-6">
            
            {/* Quick Links */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2.5">
                {quickLinks.map((link, i) => (
                  <li key={i}>
                    <a href={link.href} className="text-xs font-medium text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sports Links */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
                Sports
              </h4>
              <ul className="space-y-2.5">
                {sportsLinks.map((link, i) => (
                  <li key={i}>
                    <a href={link.href} className="text-xs font-medium text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Arena Links */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
                Arena
              </h4>
              <ul className="space-y-2.5">
                {arenaLinks.map((link, i) => (
                  <li key={i}>
                    <a href={link.href} className="text-xs font-medium text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
                Support
              </h4>
              <ul className="space-y-2.5">
                {supportLinks.map((link, i) => (
                  <li key={i}>
                    <a href={link.href} className="text-xs font-medium text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Newsletter Subscribe */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
              Subscribe to our newsletter
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 leading-relaxed font-normal">
              Stay updated with the latest news, events, and special arena offers.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 min-w-0 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 dark:border-darkBorder dark:bg-darkCard dark:text-white focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white hover:bg-blue-700 active:scale-95 transition-all shadow-md"
                aria-label="Subscribe"
              >
                <Send className="h-4.5 w-4.5" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
            © {new Date().getFullYear()} STAMS. All rights reserved.
          </p>
          <div className="flex gap-6 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
            <a href="#" className="hover:text-slate-600 dark:hover:text-slate-300">Terms</a>
            <a href="#" className="hover:text-slate-600 dark:hover:text-slate-300">Privacy</a>
            <a href="#" className="hover:text-slate-600 dark:hover:text-slate-300">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
