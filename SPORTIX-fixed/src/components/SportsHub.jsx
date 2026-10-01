import React, { useState } from 'react';
import { Star, MapPin, ArrowLeft, Calendar, Users, Sparkles, Coins, HelpCircle } from 'lucide-react';
import { sportsList } from '../data/sportsData';
import { tournamentsData, biddingPlayersData, organizationsData } from '../data/sportsHubData';

export default function SportsHub({
  selectedSport,
  setSelectedSport,
  onBackToHome,
  onRegisterTournament,
  onPlaceBid,
}) {
  const [activeTab, setActiveTab] = useState('tournaments'); // 'tournaments', 'players', 'organizations'
  const [searchQuery, setSearchQuery] = useState('');
  
  // Local states for place bid modal
  const [biddingPlayer, setBiddingPlayer] = useState(null);
  const [bidAmount, setBidAmount] = useState('');

  // Handle bid submit
  const handleBidSubmit = (e) => {
    e.preventDefault();
    if (!bidAmount) return;
    onPlaceBid(biddingPlayer, bidAmount);
    setBiddingPlayer(null);
    setBidAmount('');
  };

  // Filter logic
  const getFilteredTournaments = () => {
    return tournamentsData.filter((item) => {
      const matchesSport = selectedSport ? item.sport.toLowerCase() === selectedSport.toLowerCase() : true;
      const matchesSearch = searchQuery ? item.name.toLowerCase().includes(searchQuery.toLowerCase()) : true;
      return matchesSport && matchesSearch;
    });
  };

  const getFilteredPlayers = () => {
    return biddingPlayersData.filter((item) => {
      const matchesSport = selectedSport ? item.sport.toLowerCase() === selectedSport.toLowerCase() : true;
      const matchesSearch = searchQuery ? item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.role.toLowerCase().includes(searchQuery.toLowerCase()) : true;
      return matchesSport && matchesSearch;
    });
  };

  const getFilteredOrgs = () => {
    return organizationsData.filter((item) => {
      const matchesSport = selectedSport ? item.sport.toLowerCase() === selectedSport.toLowerCase() : true;
      const matchesSearch = searchQuery ? item.name.toLowerCase().includes(searchQuery.toLowerCase()) : true;
      return matchesSport && matchesSearch;
    });
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-left transition-colors duration-300">
      
      {/* Page Header */}
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
              Sports Hub
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Manage tournaments, place player bids, and coordinate with sports organizations.
            </p>
          </div>
        </div>

        {/* Global Search Bar */}
        <div className="relative w-full sm:w-72">
          <input
            type="text"
            placeholder={`Search ${activeTab}...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs text-slate-950 dark:border-darkBorder dark:bg-darkCard dark:text-white focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      {/* Grid Layout: Sidebar & Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Sport Sidebar */}
        <div className="lg:col-span-3 space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-darkBorder dark:bg-darkCard">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-950 dark:text-white mb-4">
              Select Game
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
                All Games
              </button>
              {sportsList.map((sport) => {
                const isSelected = selectedSport?.toLowerCase() === sport.id.toLowerCase();
                return (
                  <button
                    key={sport.id}
                    onClick={() => setSelectedSport(sport.id)}
                    className={`w-full px-4 py-3 text-xs font-semibold rounded-xl text-left transition-all ${
                      isSelected
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-slate-50 dark:bg-darkBg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    {sport.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Side: Tab view navigation & results */}
        <div className="lg:col-span-9 space-y-6">
          
          {/* Inner Sub-navigation Tabs */}
          <div className="flex border-b border-slate-200 dark:border-darkBorder">
            {[
              { id: 'tournaments', label: 'Scheduled Tournaments', icon: Calendar },
              { id: 'players', label: 'Bidding Board (Players)', icon: Coins },
              { id: 'organizations', label: 'Sports Organizations', icon: Users },
            ].map((tab) => {
              const TabIcon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setSearchQuery('');
                  }}
                  className={`flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider transition-all border-b-2 -mb-[2px] ${
                    activeTab === tab.id
                      ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 font-extrabold'
                      : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-white'
                  }`}
                >
                  <TabIcon className="h-4.5 w-4.5" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab Views Content */}
          {activeTab === 'tournaments' && (
            <div className="space-y-4">
              {getFilteredTournaments().length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {getFilteredTournaments().map((tourney) => (
                    <div
                      key={tourney.id}
                      className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white dark:border-darkBorder dark:bg-darkCard overflow-hidden hover:shadow-xl transition-all duration-300"
                    >
                      <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
                        <img
                          src={tourney.image}
                          alt={tourney.name}
                          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                         onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/sports/fallback.svg'; }}/>
                        <span className="absolute top-3 left-3 inline-flex items-center rounded-full bg-slate-950/70 backdrop-blur-sm px-2.5 py-1 text-[10px] font-bold text-white uppercase tracking-wider">
                          {tourney.sport}
                        </span>
                        <span className={`absolute top-3 right-3 inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-bold text-white uppercase tracking-wider ${
                          tourney.status === 'Ongoing' ? 'bg-amber-600' : tourney.status === 'Registering' ? 'bg-emerald-600' : 'bg-slate-600'
                        }`}>
                          {tourney.status}
                        </span>
                      </div>

                      <div className="p-5 flex-1 flex flex-col justify-between text-left">
                        <div>
                          <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {tourney.name}
                          </h4>
                          <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                            <Calendar className="h-3.5 w-3.5 text-slate-400" />
                            {tourney.date}
                          </p>
                        </div>

                        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-darkBorder/50 flex items-center justify-between">
                          <div>
                            <span className="text-[9px] uppercase font-bold text-slate-400">Prize Pool</span>
                            <p className="text-sm font-extrabold text-blue-600 dark:text-blue-400">{tourney.prizePool}</p>
                          </div>
                          <button
                            onClick={() => onRegisterTournament(tourney)}
                            disabled={tourney.status !== 'Registering'}
                            className={`px-4 py-2 text-xs font-bold rounded-lg shadow transition-all ${
                              tourney.status === 'Registering'
                                ? 'bg-blue-600 hover:bg-blue-700 text-white active:scale-95'
                                : 'bg-slate-100 text-slate-400 cursor-not-allowed dark:bg-slate-800 dark:text-slate-600'
                            }`}
                          >
                            Register Team
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <NoResults found="tournaments" />
              )}
            </div>
          )}

          {activeTab === 'players' && (
            <div className="space-y-4">
              {getFilteredPlayers().length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {getFilteredPlayers().map((player) => (
                    <div
                      key={player.id}
                      className="group rounded-2xl border border-slate-200 bg-white p-5 dark:border-darkBorder dark:bg-darkCard hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left"
                    >
                      <div>
                        {/* Profile Meta */}
                        <div className="flex items-center gap-4.5 mb-4">
                          <img
                            src={player.image}
                            alt={player.name}
                            className="h-14 w-14 rounded-full object-cover ring-2 ring-slate-100 dark:ring-darkBorder"
                           onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/sports/fallback.svg'; }}/>
                          <div>
                            <h4 className="text-sm font-bold text-slate-900 dark:text-white line-clamp-1">
                              {player.name}
                            </h4>
                            <span className="inline-flex rounded bg-blue-50 dark:bg-blue-400/10 px-1.5 py-0.5 text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase mt-0.5">
                              {player.role}
                            </span>
                          </div>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-1.5 mb-3">
                          <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                          <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                            {player.rating}
                          </span>
                          <span className="text-[10px] text-slate-400 uppercase">({player.sport})</span>
                        </div>

                        {/* Bio */}
                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed italic">
                          "{player.bio}"
                        </p>
                      </div>

                      {/* Bidding values */}
                      <div className="mt-6 pt-4 border-t border-slate-100 dark:border-darkBorder/50 flex items-center justify-between">
                        <div>
                          <span className="text-[9px] uppercase font-bold text-slate-400">Base Bid</span>
                          <p className="text-sm font-extrabold text-slate-900 dark:text-white">{player.basePrice}</p>
                        </div>
                        <button
                          onClick={() => setBiddingPlayer(player)}
                          className="px-3.5 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg active:scale-95 transition-all flex items-center gap-1"
                        >
                          <Coins className="h-3.5 w-3.5" />
                          Place Bid
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <NoResults found="bidding players" />
              )}
            </div>
          )}

          {activeTab === 'organizations' && (
            <div className="space-y-4">
              {getFilteredOrgs().length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {getFilteredOrgs().map((org) => (
                    <div
                      key={org.id}
                      className="group rounded-2xl border border-slate-200 bg-white p-5 dark:border-darkBorder dark:bg-darkCard hover:shadow-xl transition-all duration-300 flex items-center justify-between text-left"
                    >
                      <div className="flex items-center gap-4">
                        <img
                          src={org.image}
                          alt={org.name}
                          className="h-12 w-12 rounded-xl object-cover"
                         onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/sports/fallback.svg'; }}/>
                        <div>
                          <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white line-clamp-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {org.name}
                          </h4>
                          <span className="text-[10px] text-slate-400 flex items-center gap-0.5 mt-0.5">
                            <MapPin className="h-3.5 w-3.5 text-slate-400" />
                            {org.location}
                          </span>
                          <span className="inline-block text-[9px] font-bold text-slate-500 dark:text-blue-400 uppercase tracking-wide mt-1">
                            {org.membersCount} active members
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <NoResults found="organizations" />
              )}
            </div>
          )}

        </div>

      </div>

      {/* --- PLACE BID DIALOG MODAL --- */}
      {biddingPlayer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
          <div className="relative w-full max-w-md rounded-3xl border border-slate-200 bg-white dark:border-darkBorder dark:bg-darkCard p-6 sm:p-8 shadow-2xl text-left">
            <button
              onClick={() => setBiddingPlayer(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Calendar className="h-4.5 w-4.5 rotate-45" /> {/* Close cross indicator */}
            </button>

            <form onSubmit={handleBidSubmit}>
              <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-slate-100 dark:border-darkBorder">
                <div className="h-9 w-9 bg-blue-600/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center">
                  <Sparkles className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-950 dark:text-white uppercase tracking-tight">
                    Place Player Bid
                  </h3>
                  <p className="text-[9px] uppercase font-bold text-slate-400">
                    Bidding Board Simulation
                  </p>
                </div>
              </div>

              {/* Player Summary */}
              <div className="flex items-center gap-4 p-3 rounded-2xl bg-slate-50 dark:bg-darkBg border border-slate-200/60 dark:border-darkBorder mb-6">
                <img
                  src={biddingPlayer.image}
                  alt={biddingPlayer.name}
                  className="h-12 w-12 rounded-full object-cover"
                 onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/sports/fallback.svg'; }}/>
                <div>
                  <h4 className="text-sm font-bold text-slate-950 dark:text-white">{biddingPlayer.name}</h4>
                  <span className="text-[10px] text-blue-600 dark:text-blue-400 uppercase font-semibold">{biddingPlayer.role} • {biddingPlayer.sport}</span>
                  <p className="text-[10px] text-slate-400 mt-0.5">Base Price: **{biddingPlayer.basePrice}**</p>
                </div>
              </div>

              {/* Bid Input */}
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-2">
                    Your Bid Amount (INR)
                  </label>
                  <input
                    type="number"
                    required
                    placeholder="Enter bid amount"
                    value={bidAmount}
                    onChange={(e) => setBidAmount(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-900 dark:border-darkBorder dark:bg-darkBg dark:text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Confirm */}
              <div className="mt-8 pt-5 border-t border-slate-100 dark:border-darkBorder flex gap-3">
                <button
                  type="button"
                  onClick={() => setBiddingPlayer(null)}
                  className="w-1/2 py-3 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 dark:border-darkBorder dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-1/2 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md active:scale-95 transition-all"
                >
                  Submit Bid
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}

// Inner helper component for empty list state
function NoResults({ found }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 rounded-2xl border border-dashed border-slate-300 dark:border-darkBorder bg-white dark:bg-darkCard">
      <HelpCircle className="h-10 w-10 text-slate-300 dark:text-slate-700 mb-3" />
      <p className="text-slate-500 dark:text-slate-400 font-medium">
        No active {found} found for this game.
      </p>
    </div>
  );
}
