import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PopularSports from './components/PopularSports';
import ArenaSection from './components/ArenaSection';
import FeaturesAndWhy from './components/FeaturesAndWhy';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import SportsExplore from './components/SportsExplore';
import SportsHub from './components/SportsHub';
import LiveMatchCenter from './components/LiveMatchCenter';
import DashboardHub from './components/DashboardHub';
import BracketAndStandings from './components/BracketAndStandings';
import PlayerStatsScouting from './components/PlayerStatsScouting';
import SmartArenaFutureAI from './components/SmartArenaFutureAI';
import DevOpsSystemMonitor from './components/DevOpsSystemMonitor';
import PageBanner from './components/PageBanner';
import { X, MapPin, User, Mail, CreditCard, Sparkles, CheckCircle2, Activity, Radio, ShieldCheck, Cpu, LockKeyhole, Phone, Eye, EyeOff, Trophy, Users, UserCog, Building2, Shield, Ticket } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home', 'sports', 'arena'
  const [theme, setTheme] = useState('dark');
  const [selectedSport, setSelectedSport] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState('signin');
  const [showPassword, setShowPassword] = useState(false);
  const [authRole, setAuthRole] = useState('PLAYER');
  
  // Modal states
  const [bookingArena, setBookingArena] = useState(null);
  const [bookingName, setBookingName] = useState('');
  const [bookingEmail, setBookingEmail] = useState('');
  const [bookingDuration, setBookingDuration] = useState('1');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Toast notifications state
  const [toasts, setToasts] = useState([]);

  // Apply class on load and theme changes
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  // Scroll to top when changing pages
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    addToast('Theme toggled successfully!', 'info');
  };

  // Toast helper
  const addToast = (message, type = 'success') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 4000);
  };

  // Handle Search trigger
  const handleSearchClick = () => {
    addToast('Search parameters synced. Displaying matches.', 'info');
    if (currentPage !== 'home') {
      setCurrentPage('home');
    }
    setTimeout(() => {
      const element = document.getElementById('arena');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  // Booking details submission
  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (!bookingName || !bookingEmail) {
      addToast('Please fill out all fields.', 'error');
      return;
    }
    
    // Simulate API request completion
    setBookingSuccess(true);
    setTimeout(() => {
      addToast(`Booking confirmed for ${bookingArena.name}! Check your email.`, 'success');
      // Reset
      setBookingArena(null);
      setBookingSuccess(false);
      setBookingName('');
      setBookingEmail('');
      setBookingDuration('1');
    }, 2000);
  };

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 dark:bg-darkBg dark:text-slate-100 font-sans transition-colors duration-300">
      
      {/* Header */}
      <Header
        theme={theme}
        toggleTheme={toggleTheme}
        onSearchClick={handleSearchClick}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onSignIn={() => { setAuthMode('signin'); setAuthOpen(true); }}
      />

      {/* Main Content (Routed by State) */}
      <main>
        {currentPage === 'sports' ? (
          /* Sports Hub Page */
          <div>
            <PageBanner
              title="Sports Catalog & Tournaments"
              subtitle="Discover featured sports, register your team, view tournament formats and draft players."
              badge="TOURNAMENT CATALOG"
              icon={Sparkles}
              onBackHome={() => setCurrentPage('home')}
            />
            <SportsHub
              selectedSport={selectedSport}
              setSelectedSport={setSelectedSport}
              onBackToHome={() => setCurrentPage('home')}
              onRegisterTournament={(tourney) => addToast(`Registered team for ${tourney.name}!`, 'success')}
              onPlaceBid={(player, amount) => addToast(`Placed a bid of ₹${amount} on ${player.name}!`, 'success')}
            />
          </div>
        ) : currentPage === 'arena' ? (
          /* Arena Booking & IoT Catalog Page */
          <div className="space-y-12 pb-16">
            <PageBanner
              title="Sports Arenas & Smart IoT Telemetry"
              subtitle="Find and book verified sports venues, check parking density, pitch moisture, and entry gates."
              badge="FACILITY MANAGEMENT"
              icon={Radio}
              onBackHome={() => setCurrentPage('home')}
            />
            <SportsExplore
              selectedSport={selectedSport}
              setSelectedSport={setSelectedSport}
              selectedCity={selectedCity}
              setSelectedCity={setSelectedCity}
              onBookClick={(arena) => setBookingArena(arena)}
              onBackToHome={() => setCurrentPage('home')}
            />
            <SmartArenaFutureAI onToast={addToast} />
          </div>
        ) : currentPage === 'live' ? (
          /* Live Matches, Brackets & Scouting Dedicated Page */
          <div className="space-y-12 pb-16 animate-fade-in">
            <PageBanner
              title="Live Match Telemetry & Brackets"
              subtitle="Real-time scoreboard, referee live official logger, knockout bracket trees, and player scouting."
              badge="IPL & FIFA GRADE TELEMETRY"
              icon={Activity}
              onBackHome={() => setCurrentPage('home')}
            />
            <LiveMatchCenter onToast={addToast} />
            <BracketAndStandings />
            <PlayerStatsScouting />
          </div>
        ) : currentPage === 'dashboard' ? (
          /* Ecosystem Operations Console Dedicated Page */
          <div className="space-y-12 pb-16 animate-fade-in">
            <PageBanner
              title="Operations Console & Ecosystem"
              subtitle="Multi-stakeholder console for Tournament Organizers, Referees, Doctors, Managers & Admins."
              badge="OPERATIONS WORKSPACE"
              icon={ShieldCheck}
              onBackHome={() => setCurrentPage('home')}
            />
            <DashboardHub onToast={addToast} />
          </div>
        ) : currentPage === 'devops' ? (
          /* DevOps & Infrastructure Dedicated Page */
          <div className="space-y-12 pb-16 animate-fade-in">
            <PageBanner
              title="DevOps & System Architecture"
              subtitle="Continuous integration, Jenkins pipelines, Docker Hub, Kubernetes pod scaling & ELK log streams."
              badge="INFRASTRUCTURE TELEMETRY"
              icon={Cpu}
              onBackHome={() => setCurrentPage('home')}
            />
            <DevOpsSystemMonitor />
          </div>
        ) : (
          /* Home Landing Page - Clean & Uncluttered Layout */
          <>
            {/* Hero */}
            <Hero
              onExploreClick={() => {
                setCurrentPage('sports');
                addToast('Browsing STAMS sports catalog', 'info');
              }}
              onFindClick={() => {
                setCurrentPage('arena');
              }}
            />

            {/* Popular Sports */}
            <PopularSports
              selectedSport={selectedSport}
              onSelectSport={(sport) => {
                setSelectedSport(sport);
                setCurrentPage('sports');
                addToast(`Browsing catalog for: ${sport}`, 'info');
              }}
            />

            {/* Arena Finder & Grid */}
            <ArenaSection
              selectedSport={selectedSport}
              setSelectedSport={setSelectedSport}
              selectedCity={selectedCity}
              setSelectedCity={setSelectedCity}
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              selectedTime={selectedTime}
              setSelectedTime={setSelectedTime}
              onBookClick={(arena) => setBookingArena(arena)}
              onViewAllClick={() => setCurrentPage('arena')}
            />

            {/* Smart scheduling and Why STAMS side-by-side features */}
            <FeaturesAndWhy
              onLearnMoreClick={() => {
                addToast('Loading STAMS AI tournament scheduling documentation...', 'info');
              }}
            />

            {/* How It Works */}
            <HowItWorks />

            {/* Testimonials */}
            <Testimonials />

          </>
        )}
      </main>

      {/* Authentication Modal */}
      {authOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-blue-500/20 bg-white shadow-2xl dark:bg-darkCard dark:border-darkBorder">
            <button onClick={() => setAuthOpen(false)} className="absolute right-4 top-4 z-10 rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white"><X className="h-5 w-5" /></button>
            <div className="grid md:grid-cols-[.9fr_1.1fr]">
              <div className="hidden md:flex flex-col justify-between bg-gradient-to-br from-blue-700 via-indigo-700 to-violet-800 p-8 text-white">
                <div><div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15"><Trophy className="h-6 w-6" /></div><p className="text-xs font-bold uppercase tracking-[.2em] text-blue-100">STAMS ACCESS</p><h2 className="mt-3 text-3xl font-black">Your sport.<br/>Your arena.<br/>Your platform.</h2><p className="mt-4 text-sm leading-6 text-blue-100">Sign in with your role to access the right tools and experiences.</p></div>
                <div className="rounded-2xl border border-white/15 bg-white/10 p-4 text-xs text-blue-50">Secure role-based access for every participant in the sports ecosystem.</div>
              </div>
              <div className="p-6 sm:p-8">
                <div className="mb-6"><span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">{authMode === 'signin' ? 'Welcome back' : 'Join STAMS'}</span><h2 className="mt-1 text-2xl font-black text-slate-900 dark:text-white">{authMode === 'signin' ? 'Sign in to your account' : 'Create your account'}</h2></div>
                <div className="mb-6 flex rounded-xl bg-slate-100 p-1 dark:bg-slate-800"><button onClick={() => setAuthMode('signin')} className={`flex-1 rounded-lg py-2.5 text-xs font-bold ${authMode === 'signin' ? 'bg-white text-blue-600 shadow-sm dark:bg-slate-700 dark:text-blue-400' : 'text-slate-500'}`}>Sign In</button><button onClick={() => setAuthMode('signup')} className={`flex-1 rounded-lg py-2.5 text-xs font-bold ${authMode === 'signup' ? 'bg-white text-blue-600 shadow-sm dark:bg-slate-700 dark:text-blue-400' : 'text-slate-500'}`}>Sign Up</button></div>
                <form onSubmit={(e)=>{e.preventDefault(); addToast(authMode==='signin'?'Signed in successfully!':'Account created successfully!','success'); setAuthOpen(false);}} className="space-y-4">
                  {authMode === 'signup' && <div className="relative"><User className="absolute left-3 top-3 h-4 w-4 text-slate-400"/><input required placeholder="Full Name" className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm outline-none focus:border-blue-500 dark:border-darkBorder dark:bg-darkBg dark:text-white"/></div>}
                  <div><label className="mb-2 block text-[10px] font-black uppercase tracking-wider text-slate-500">User Type</label><div className="grid grid-cols-2 gap-2 sm:grid-cols-4">{[['SUPER_ADMIN',Shield],['SPONSOR',Building2],['ORGANIZER',Trophy],['ARENA_MANAGER',Building2],['TEAM_MANAGER',Users],['PLAYER',User],['OFFICIAL',UserCog],['SPECTATOR',Ticket]].map(([role,Icon])=><button type="button" key={role} onClick={()=>setAuthRole(role)} className={`rounded-xl border p-2.5 text-left transition ${authRole===role?'border-blue-500 bg-blue-50 text-blue-700 dark:bg-blue-950/30 dark:text-blue-300':'border-slate-200 text-slate-600 hover:border-blue-300 dark:border-darkBorder dark:text-slate-300'}`}><Icon className="mb-1 h-4 w-4"/><span className="block text-[9px] font-bold uppercase leading-tight">{role.replace('_',' ')}</span></button>)}</div></div>
                  <div className="relative"><Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400"/><input required type="email" placeholder="Email Address" className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm outline-none focus:border-blue-500 dark:border-darkBorder dark:bg-darkBg dark:text-white"/></div>
                  {authMode === 'signup' && <div className="relative"><Phone className="absolute left-3 top-3 h-4 w-4 text-slate-400"/><input required type="tel" pattern="[0-9+() -]{10,}" placeholder="Phone Number" className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm outline-none focus:border-blue-500 dark:border-darkBorder dark:bg-darkBg dark:text-white"/></div>}
                  <div className="relative"><LockKeyhole className="absolute left-3 top-3 h-4 w-4 text-slate-400"/><input required type={showPassword?'text':'password'} minLength={6} placeholder="Password" className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-11 text-sm outline-none focus:border-blue-500 dark:border-darkBorder dark:bg-darkBg dark:text-white"/><button type="button" onClick={()=>setShowPassword(!showPassword)} className="absolute right-3 top-3 text-slate-400">{showPassword?<EyeOff className="h-4 w-4"/>:<Eye className="h-4 w-4"/>}</button></div>
                  {authMode === 'signup' && <div className="relative"><LockKeyhole className="absolute left-3 top-3 h-4 w-4 text-slate-400"/><input required type="password" minLength={6} placeholder="Confirm Password" className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm outline-none focus:border-blue-500 dark:border-darkBorder dark:bg-darkBg dark:text-white"/></div>}
                  {authMode === 'signup' && <label className="flex items-start gap-2 text-xs text-slate-500 dark:text-slate-400"><input required type="checkbox" className="mt-0.5 accent-blue-600"/> <span>I agree to the <button type="button" className="font-bold text-blue-600">Terms & Conditions</button> and Privacy Policy.</span></label>}
                  {authMode === 'signin' && <div className="flex justify-end"><button type="button" className="text-xs font-bold text-blue-600">Forgot Password?</button></div>}
                  <button className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/20 hover:from-blue-700 hover:to-indigo-700">{authMode === 'signin' ? 'Sign In' : 'Create Account'}</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer
        onSubscribe={(email) => {
          addToast(`Thank you! Subscription confirmed for ${email}`, 'success');
        }}
      />

      {/* --- POPUPS & OVERLAYS --- */}

      {/* Booking Dialog Modal */}
      {bookingArena && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-lg rounded-3xl border border-slate-200 bg-white dark:border-darkBorder dark:bg-darkCard p-6 sm:p-8 shadow-2xl text-left">
            
            {/* Close Button */}
            <button
              onClick={() => setBookingArena(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            {bookingSuccess ? (
              /* Success Loading Animation State */
              <div className="py-12 flex flex-col items-center justify-center text-center">
                <div className="h-16 w-16 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-6 border border-emerald-500/30 shadow-neon-green">
                  <CheckCircle2 className="h-10 w-10 animate-bounce" />
                </div>
                <h3 className="text-xl font-bold text-slate-950 dark:text-white uppercase tracking-tight">
                  Processing Reservation
                </h3>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 max-w-xs">
                  Reserving slot at **{bookingArena.name}**...
                </p>
                <div className="mt-6 w-24 h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full w-1/2 bg-blue-600 rounded-full animate-infinite-scroll"></div>
                </div>
              </div>
            ) : (
              /* Booking Input Fields */
              <form onSubmit={handleBookingSubmit}>
                
                {/* Modal Title */}
                <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-slate-100 dark:border-darkBorder">
                  <div className="h-9 w-9 bg-blue-600/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center">
                    <Sparkles className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-950 dark:text-white uppercase tracking-tight">
                      Arena Booking Request
                    </h3>
                    <p className="text-[10px] uppercase font-bold text-slate-400">
                      Reserve facility slots instantly
                    </p>
                  </div>
                </div>

                {/* Selected Arena mini summary */}
                <div className="flex gap-4 p-3 rounded-2xl bg-slate-50 dark:bg-darkBg border border-slate-200/60 dark:border-darkBorder mb-6">
                  <img
                    src={bookingArena.image}
                    alt={bookingArena.name}
                    className="h-16 w-20 rounded-xl object-cover"
                  />
                  <div className="flex flex-col justify-center">
                    <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">{bookingArena.type} • {bookingArena.sport}</span>
                    <h4 className="text-sm font-bold text-slate-950 dark:text-white">{bookingArena.name}</h4>
                    <span className="text-[10px] text-slate-400 flex items-center gap-0.5 mt-0.5"><MapPin className="h-3 w-3" /> {bookingArena.city}, India</span>
                  </div>
                </div>

                {/* Form fields */}
                <div className="space-y-4">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        value={bookingName}
                        onChange={(e) => setBookingName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 py-3 text-xs text-slate-900 dark:border-darkBorder dark:bg-darkBg dark:text-white focus:outline-none focus:border-blue-500"
                      />
                      <User className="absolute left-3.5 top-3.5 h-4.5 w-4.5 text-slate-400" />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        required
                        value={bookingEmail}
                        onChange={(e) => setBookingEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 py-3 text-xs text-slate-900 dark:border-darkBorder dark:bg-darkBg dark:text-white focus:outline-none focus:border-blue-500"
                      />
                      <Mail className="absolute left-3.5 top-3.5 h-4.5 w-4.5 text-slate-400" />
                    </div>
                  </div>

                  {/* Booking parameters (Hours Duration) */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-2">
                        Duration (Hours)
                      </label>
                      <select
                        value={bookingDuration}
                        onChange={(e) => setBookingDuration(e.target.value)}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-900 dark:border-darkBorder dark:bg-darkBg dark:text-white focus:outline-none focus:border-blue-500"
                      >
                        <option value="1">1 Hour</option>
                        <option value="2">2 Hours</option>
                        <option value="3">3 Hours</option>
                        <option value="4">4 Hours</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-2">
                        Hourly Rate
                      </label>
                      <div className="w-full rounded-xl border border-slate-200 bg-slate-100/50 px-4 py-3 text-xs font-bold text-slate-900 dark:border-darkBorder dark:bg-darkBg/60 dark:text-white">
                        ₹{bookingArena.price} / hr
                      </div>
                    </div>
                  </div>
                </div>

                {/* Detailed Receipt Breakdown */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-darkBorder space-y-2 text-xs text-slate-600 dark:text-slate-400">
                  <div className="flex justify-between">
                    <span>Court Booking Subtotal ({bookingDuration} hrs):</span>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      ₹{(parseInt(bookingArena.price.replace(',', '')) * parseInt(bookingDuration)).toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Platform Booking Fee:</span>
                    <span className="font-semibold text-slate-900 dark:text-white">₹50</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Taxes & GST (18%):</span>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      ₹{Math.round(parseInt(bookingArena.price.replace(',', '')) * parseInt(bookingDuration) * 0.18).toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                {/* Footer and Price Summary */}
                <div className="mt-6 pt-5 border-t border-slate-100 dark:border-darkBorder flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <span className="text-[9px] text-slate-400 uppercase font-bold">Total Cost</span>
                    <p className="text-xl font-extrabold text-slate-900 dark:text-white">
                      ₹{(
                        parseInt(bookingArena.price.replace(',', '')) * parseInt(bookingDuration) +
                        50 +
                        Math.round(parseInt(bookingArena.price.replace(',', '')) * parseInt(bookingDuration) * 0.18)
                      ).toLocaleString('en-IN')}
                    </p>
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-xs font-bold text-white hover:bg-blue-700 active:scale-95 transition-all shadow-lg hover:shadow-blue-500/25"
                  >
                    <CreditCard className="h-4.5 w-4.5" />
                    Confirm Booking
                  </button>
                </div>

              </form>
            )}

          </div>
        </div>
      )}

      {/* --- TOAST ALERTS FLOATER --- */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-sm w-full">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`flex items-center gap-3 p-4 rounded-xl border shadow-lg text-xs font-semibold animate-slide-in text-white ${
              toast.type === 'error'
                ? 'bg-rose-600 border-rose-500 shadow-rose-500/10'
                : toast.type === 'info'
                ? 'bg-slate-900 border-slate-800 dark:bg-slate-800 dark:border-slate-700 shadow-slate-900/10'
                : 'bg-emerald-600 border-emerald-500 shadow-emerald-500/10'
            }`}
          >
            <div className="flex-1 leading-normal">{toast.message}</div>
            <button
              onClick={() => setToasts((prev) => prev.filter((t) => t.id !== toast.id))}
              className="text-white/70 hover:text-white"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}
