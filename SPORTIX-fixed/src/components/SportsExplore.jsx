import React, { useState } from 'react';
import { Star, MapPin, ArrowLeft, Heart, Sparkles, Filter } from 'lucide-react';
import { sportsList, arenasData } from '../data/sportsData';

export default function SportsExplore({
  selectedSport,
  setSelectedSport,
  selectedCity,
  setSelectedCity,
  onBookClick,
  onBackToHome,
}) {
  const [favorites, setFavorites] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [tempCity, setTempCity] = useState(selectedCity);

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const citiesList = ['Bangalore', 'Mumbai', 'Delhi', 'Kolkata', 'Chennai'];

  // Filter logic
  const filteredArenas = arenasData.filter((arena) => {
    const matchesSport = selectedSport ? arena.sport.toLowerCase() === selectedSport.toLowerCase() : true;
    const matchesCity = tempCity ? arena.city.toLowerCase() === tempCity.toLowerCase() : true;
    const matchesSearch = searchQuery
      ? arena.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        arena.sport.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    return matchesSport && matchesCity && matchesSearch;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-left transition-colors duration-300">
      
      {/* Back to Home & Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-4">
          <button
            onClick={onBackToHome}
            className="p-2.5 rounded-xl border border-slate-200 dark:border-darkBorder bg-white dark:bg-darkCard hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-all active:scale-95"
            aria-label="Back to Home"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white uppercase sm:text-3xl">
              Sports Arenas Catalog
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Browse and reserve premier courts and sports fields.
            </p>
          </div>
        </div>

        {/* Global Search Bar */}
        <div className="relative w-full sm:w-72">
          <input
            type="text"
            placeholder="Search by arena or sport..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs text-slate-950 dark:border-darkBorder dark:bg-darkCard dark:text-white focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      {/* Filter Sidebar & Display Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Sport Selection Sidebar & City Selector */}
        <div className="lg:col-span-3 space-y-6">
          
          {/* Quick Filters */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-darkBorder dark:bg-darkCard">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100 dark:border-darkBorder">
              <Filter className="h-4.5 w-4.5 text-blue-600 dark:text-blue-400" />
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                Refine Search
              </h3>
            </div>

            {/* City Dropdown */}
            <div className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                  Select Location
                </label>
                <select
                  value={tempCity}
                  onChange={(e) => {
                    setTempCity(e.target.value);
                    setSelectedCity(e.target.value);
                  }}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 dark:border-darkBorder dark:bg-darkBg dark:text-slate-200 focus:outline-none focus:border-blue-500"
                >
                  <option value="">All Cities</option>
                  {citiesList.map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Sport Categories list sidebar */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-darkBorder dark:bg-darkCard">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-950 dark:text-white mb-4">
              Disciplines
            </h3>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => setSelectedSport('')}
                className={`w-full px-4 py-3 text-xs font-semibold rounded-xl text-left transition-all ${
                  !selectedSport
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-slate-50 dark:bg-darkBg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                All Disciplines ({arenasData.length})
              </button>
              {sportsList.map((sport) => {
                const count = arenasData.filter((a) => a.sport.toLowerCase() === sport.id.toLowerCase()).length;
                const isSelected = selectedSport?.toLowerCase() === sport.id.toLowerCase();
                return (
                  <button
                    key={sport.id}
                    onClick={() => setSelectedSport(sport.id)}
                    className={`w-full px-4 py-3 text-xs font-semibold rounded-xl text-left transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-slate-50 dark:bg-darkBg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <span>{sport.name}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full ${isSelected ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-500'}`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Right Side: Arenas Listing Grid */}
        <div className="lg:col-span-9">
          
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <Sparkles className="h-4.5 w-4.5 text-amber-500" />
              Showing {filteredArenas.length} Available Facilities
            </h3>
          </div>

          {filteredArenas.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArenas.map((arena) => (
                <div
                  key={arena.id}
                  className="group rounded-2xl border border-slate-200 bg-white dark:border-darkBorder dark:bg-darkCard overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Image & Favorite Button */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
                      <img
                        src={arena.image}
                        alt={arena.name}
                        className="h-full w-full object-cover group-hover:scale-105 transition-all duration-500"
                       onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/sports/fallback.svg'; }}/>
                      <button
                        onClick={() => toggleFavorite(arena.id)}
                        className="absolute top-3 right-3 p-2 rounded-full backdrop-blur-md bg-black/30 hover:bg-black/40 text-white transition-all active:scale-90"
                        aria-label="Add to Favorites"
                      >
                        <Heart
                          className={`h-4.5 w-4.5 transition-all ${
                            favorites[arena.id] ? 'fill-red-500 text-red-500 scale-110' : 'text-white'
                          }`}
                        />
                      </button>
                    </div>

                    {/* Meta info */}
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                          <MapPin className="h-3 w-3 text-slate-400" />
                          {arena.city}, India
                        </span>
                        <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-semibold text-blue-600 dark:bg-blue-400/10 dark:text-blue-400">
                          {arena.type}
                        </span>
                      </div>

                      <h4 className="text-base font-bold text-slate-900 dark:text-white line-clamp-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {arena.name}
                      </h4>

                      <div className="flex items-center gap-1 mt-2">
                        <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                        <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                          {arena.rating}
                        </span>
                        <span className="text-[10px] text-slate-400">({arena.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>

                  {/* Price & Book Action */}
                  <div className="px-5 pb-5 pt-4 border-t border-slate-100 dark:border-darkBorder flex items-center justify-between">
                    <div>
                      <p className="text-[10px] uppercase font-bold text-slate-400">Price / hour</p>
                      <span className="text-base font-extrabold text-slate-900 dark:text-white">
                        ₹{arena.price}
                      </span>
                    </div>
                    <button
                      onClick={() => onBookClick(arena)}
                      className="px-4 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md active:scale-95 transition-all"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 rounded-2xl border border-dashed border-slate-300 dark:border-darkBorder bg-white dark:bg-darkCard">
              <p className="text-slate-500 dark:text-slate-400 font-medium">
                No arenas found matching your current filters.
              </p>
              <button
                onClick={() => {
                  setSelectedSport('');
                  setTempCity('');
                  setSelectedCity('');
                  setSearchQuery('');
                }}
                className="mt-3 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline"
              >
                Clear All Filters
              </button>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
