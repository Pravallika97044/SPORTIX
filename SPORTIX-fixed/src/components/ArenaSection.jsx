import React, { useState } from 'react';
import { Star, MapPin, Search, Heart, ArrowRight, Activity } from 'lucide-react';
import TicketModal from './TicketModal';

export default function ArenaSection({
  selectedSport,
  setSelectedSport,
  selectedCity,
  setSelectedCity,
  selectedDate,
  setSelectedDate,
  selectedTime,
  setSelectedTime,
  onBookClick,
  onViewAllClick,
}) {
  const [selectedArena, setSelectedArena] = useState(null);
  const [isTicketModalOpen, setTicketModalOpen] = useState(false);
  const [favorites, setFavorites] = useState({});

  const arenas = [
    {
      id: 1,
      name: 'Elite Sports Complex',
      sport: 'Basketball',
      city: 'Bangalore',
      rating: 4.8,
      reviews: 245,
      type: 'Indoor',
      price: '2,500',
      image: 'https://images.unsplash.com/photo-1544698310-74ea9d1c8258?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 2,
      name: 'Victory Arena',
      sport: 'Football',
      city: 'Mumbai',
      rating: 4.7,
      reviews: 189,
      type: 'Indoor',
      price: '1,800',
      image: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 3,
      name: 'Champions Court',
      sport: 'Tennis',
      city: 'Delhi',
      rating: 4.9,
      reviews: 312,
      type: 'Outdoor',
      price: '1,200',
      image: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=600&q=80',
    },
  ];

  const sportsList = ['Basketball', 'Football', 'Tennis', 'Volleyball', 'Badminton', 'Cricket'];
  const citiesList = ['Bangalore', 'Mumbai', 'Delhi', 'Kolkata', 'Chennai'];

  // Toggle favorite status
  const toggleFavorite = (id) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Filter arenas based on state
  const filteredArenas = arenas.filter((arena) => {
    const matchesSport = selectedSport ? arena.sport.toLowerCase() === selectedSport.toLowerCase() : true;
    const matchesCity = selectedCity ? arena.city.toLowerCase() === selectedCity.toLowerCase() : true;
    return matchesSport && matchesCity;
  });

  return (
    <section id="arena" className="py-16 border-t border-slate-200/80 dark:border-darkBorder transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Search Form on left/top, Arenas Display on right/bottom */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left/Search side: Finder Panel */}
          <div className="lg:col-span-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-xl dark:border-darkBorder dark:bg-darkCard text-left">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white uppercase">
                Find & Book Arenas
              </h3>
              <Activity className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>

            <div className="space-y-4">
              {/* Sport Selection */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                  Select Sport
                </label>
                <select
                  value={selectedSport}
                  onChange={(e) => setSelectedSport(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 dark:border-darkBorder dark:bg-darkBg dark:text-slate-200 focus:outline-none focus:border-blue-500"
                >
                  <option value="">All Sports</option>
                  {sportsList.map((sport) => (
                    <option key={sport} value={sport}>{sport}</option>
                  ))}
                </select>
              </div>

              {/* City Selection */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                  Select City
                </label>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 dark:border-darkBorder dark:bg-darkBg dark:text-slate-200 focus:outline-none focus:border-blue-500"
                >
                  <option value="">All Cities</option>
                  {citiesList.map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>

              {/* Date Selection */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                  Select Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 dark:border-darkBorder dark:bg-darkBg dark:text-slate-200 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Time Selection */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                  Select Time
                </label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 dark:border-darkBorder dark:bg-darkBg dark:text-slate-200 focus:outline-none focus:border-blue-500"
                >
                  <option value="">Any Time</option>
                  <option value="morning">Morning (6 AM - 12 PM)</option>
                  <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                  <option value="evening">Evening (5 PM - 10 PM)</option>
                </select>
              </div>

              {/* Search Button */}
              <button
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3.5 text-sm font-semibold text-white hover:bg-blue-700 active:scale-98 transition-all"
              >
                <Search className="h-4.5 w-4.5" />
                Search Arenas
              </button>
            </div>
          </div>

          {/* Right side: Arenas Cards Display */}
          <div className="lg:col-span-8">
            <div className="flex items-end justify-between mb-6">
              <div className="text-left">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Featured Facilities
                </h3>
                <p className="mt-0.5 text-xl font-bold tracking-tight text-slate-900 dark:text-white uppercase">
                  Available Courts & Arenas
                </p>
              </div>
              <button
                onClick={onViewAllClick}
                className="group inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
              >
                View All Arenas
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Grid of Arenas */}
            {filteredArenas.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {filteredArenas.map((arena) => (
                  <div
                    key={arena.id}
                    className="group rounded-2xl border border-slate-200 bg-white dark:border-darkBorder dark:bg-darkCard overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col text-left"
                  >
                    {/* Arena Image */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
                      <img
                        src={arena.image}
                        alt={arena.name}
                        className="h-full w-full object-cover group-hover:scale-105 transition-all duration-500"
                       onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/sports/fallback.svg'; }}/>
                      {/* Heart Button */}
                      <button
                        onClick={() => toggleFavorite(arena.id)}
                        className="absolute top-3 right-3 p-2 rounded-full backdrop-blur-md bg-black/30 hover:bg-black/40 text-white transition-all active:scale-90"
                        aria-label="Add to Favorites"
                      >
                        <Heart
                          className={`h-4.5 w-4.5 transition-all ${
                            favorites[arena.id]
                              ? 'fill-red-500 text-red-500 scale-110'
                              : 'text-white'
                          }`}
                        />
                      </button>
                    </div>

                    {/* Arena details */}
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        {/* City & Badge */}
                        <div className="flex items-center justify-between mb-2">
                          <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                            <MapPin className="h-3 w-3 text-slate-400" />
                            {arena.city}, India
                          </span>
                          <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-semibold text-blue-600 dark:bg-blue-400/10 dark:text-blue-400">
                            {arena.type}
                          </span>
                        </div>

                        {/* Title */}
                        <h4 className="text-base font-bold text-slate-900 dark:text-white line-clamp-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {arena.name}
                        </h4>

                        {/* Rating */}
                        <div className="flex items-center gap-1 mt-2">
                          <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                          <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                            {arena.rating}
                          </span>
                          <span className="text-[10px] text-slate-400">({arena.reviews})</span>
                        </div>
                      </div>

                      {/* Price & Book now action */}
                      <div className="mt-6 pt-4 border-t border-slate-100 dark:border-darkBorder flex items-center justify-between">
                        <div>
                          <p className="text-[10px] uppercase font-bold text-slate-400">Price / hour</p>
                          <span className="text-base font-extrabold text-slate-900 dark:text-white">
                            ₹{arena.price}
                          </span>
                        </div>
                        <button
                          onClick={() => { setSelectedArena(arena); setTicketModalOpen(true); }}
                          className="px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md active:scale-95 transition-all"
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 rounded-2xl border border-dashed border-slate-300 dark:border-darkBorder">
                <p className="text-slate-500 dark:text-slate-400 font-medium">
                  No arenas found matching your current filters.
                </p>
                <button
                  onClick={() => {
                    setSelectedSport('');
                    setSelectedCity('');
                  }}
                  className="mt-3 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>

        </div>

        {isTicketModalOpen && selectedArena && (
          <TicketModal
            arena={selectedArena}
            isOpen={isTicketModalOpen}
            onClose={() => setTicketModalOpen(false)}
          />
        )}
      </div>
    </section>
  );
}

