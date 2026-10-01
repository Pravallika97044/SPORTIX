import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Trophy } from 'lucide-react';
import NotificationCenter from './NotificationCenter';

export default function Header({ theme, toggleTheme, onSearchClick, currentPage, setCurrentPage, onSignIn }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Sports Catalog', id: 'sports' },
    { label: 'Arenas & IoT', id: 'arena' },
    { label: 'Ops Console', id: 'dashboard' },
  ];

  // Sync activeTab state with currentPage changes
  useEffect(() => {
    setActiveTab(currentPage);
  }, [currentPage]);

  const handleNavClick = (e, item) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setActiveTab(item.id);
    setCurrentPage(item.id);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md dark:border-darkBorder dark:bg-darkBg/80 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo Section */}
          <button
            onClick={() => {
              setCurrentPage('home');
              setActiveTab('home');
            }}
            className="flex items-center gap-3 text-left focus:outline-none"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-violet-600 shadow-neon-blue text-white">
              <Trophy className="h-6 w-6" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-sans text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                  STAMS
                </span>
              </div>
              <p className="hidden text-[9px] font-medium uppercase tracking-widest text-slate-500 dark:text-blue-400 sm:block">
                Sports Tournament & Arena Management System
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = item.id === activeTab;
              
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`text-sm font-semibold tracking-wide transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                    isActive
                      ? 'text-blue-600 dark:text-blue-400 relative after:absolute after:-bottom-[29px] after:left-0 after:h-[3px] after:w-full after:rounded-full after:bg-blue-600 dark:after:bg-blue-400'
                      : 'text-slate-600 dark:text-slate-300'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Notifications Center */}
            <NotificationCenter />

            {/* Theme Switcher */}
            <button
              onClick={toggleTheme}
              className="p-2.5 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5 text-amber-400" /> : <Moon className="h-5 w-5 text-slate-600" />}
            </button>

            {/* Login Button */}
            <button onClick={onSignIn} className="px-5 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md active:scale-95 transition-all">
              Sign In
            </button>
          </div>

          {/* Mobile Menu Actions */}
          <div className="flex md:hidden items-center gap-3">
            {/* Theme Toggle (Mobile) */}
            <button
              onClick={toggleTheme}
              className="p-2 text-slate-500 dark:text-slate-400 rounded-lg"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5 text-amber-400" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 dark:text-slate-300"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-darkBorder bg-white dark:bg-darkBg px-4 py-4 space-y-3">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={(e) => handleNavClick(e, item)}
              className={`block w-full text-left px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                item.id === activeTab
                  ? 'bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 border-t border-slate-200 dark:border-darkBorder">
            <button onClick={onSignIn} className="w-full py-2.5 text-center text-xs font-bold text-white bg-blue-600 rounded-xl">
              Sign In
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
