import React, { useState } from 'react';
import { X, QrCode, CheckCircle, Ticket, Calendar, MapPin, User, CreditCard } from 'lucide-react';

export default function TicketModal({ arena, isOpen, onClose }) {
  const [step, setStep] = useState('select'); // 'select', 'payment', 'ticket'
  const [selectedSeat, setSelectedSeat] = useState('B-14');
  const [ticketType, setTicketType] = useState('VIP');
  const [spectatorName, setSpectatorName] = useState('John Doe');

  if (!isOpen || !arena) return null;

  const ticketPrice = ticketType === 'VIP' ? parseInt(arena.price.replace(',', '')) * 1.5 : parseInt(arena.price.replace(',', ''));

  const handleBooking = (e) => {
    e.preventDefault();
    setStep('ticket');
  };

  const qrData = encodeURIComponent(`TICKET:${arena.id}-${Date.now()}|${arena.name}|Seat:${selectedSeat}|${spectatorName}`);
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${qrData}&color=0f172a`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="relative w-full max-w-lg rounded-2xl bg-white dark:bg-darkCard border border-slate-200 dark:border-darkBorder shadow-2xl overflow-hidden transition-all">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-darkBorder bg-slate-50 dark:bg-slate-900/50">
          <div className="flex items-center gap-2">
            <Ticket className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <h3 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              {step === 'ticket' ? 'Digital Match Ticket' : 'Book Arena Pass'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {step === 'select' && (
            <form onSubmit={handleBooking} className="space-y-4 text-left">
              {/* Arena Info Summary */}
              <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">{arena.name}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-0.5">
                    <MapPin className="h-3 w-3" /> {arena.city}, India • {arena.sport}
                  </p>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-600 text-white">
                  {arena.type}
                </span>
              </div>

              {/* Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                  Spectator Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={spectatorName}
                    onChange={(e) => setSpectatorName(e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-darkBorder bg-slate-50 dark:bg-darkBg text-slate-900 dark:text-white text-sm focus:outline-none focus:border-blue-500"
                    placeholder="Enter full name"
                  />
                </div>
              </div>

              {/* Ticket Category & Seat */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                    Category
                  </label>
                  <select
                    value={ticketType}
                    onChange={(e) => setTicketType(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 dark:border-darkBorder bg-slate-50 dark:bg-darkBg text-slate-900 dark:text-white text-sm focus:outline-none focus:border-blue-500"
                  >
                    <option value="General">General (Standard)</option>
                    <option value="VIP">VIP Lounge (+50%)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                    Select Seat
                  </label>
                  <select
                    value={selectedSeat}
                    onChange={(e) => setSelectedSeat(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 dark:border-darkBorder bg-slate-50 dark:bg-darkBg text-slate-900 dark:text-white text-sm focus:outline-none focus:border-blue-500"
                  >
                    <option value="A-01">Section A - 01</option>
                    <option value="B-14">Section B - 14</option>
                    <option value="VIP-05">VIP Box - 05</option>
                    <option value="C-22">Section C - 22</option>
                  </select>
                </div>
              </div>

              {/* Price Calculation */}
              <div className="pt-3 border-t border-slate-100 dark:border-darkBorder flex items-center justify-between">
                <span className="text-xs font-bold uppercase text-slate-500 dark:text-slate-400">
                  Total Payable
                </span>
                <span className="text-lg font-extrabold text-blue-600 dark:text-blue-400">
                  ₹{ticketPrice.toLocaleString()}
                </span>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <CreditCard className="h-4 w-4" /> Proceed to Instant Pass
              </button>
            </form>
          )}

          {step === 'ticket' && (
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center p-2 rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400 mb-1">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                Ticket Confirmed!
              </h4>

              {/* QR Code Container */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm inline-block mx-auto">
                <img
                  src={qrUrl}
                  alt="Entry QR Code"
                  className="w-44 h-44 mx-auto object-contain"
                 onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/sports/fallback.svg'; }}/>
                <p className="text-[10px] font-mono text-slate-400 mt-2 uppercase tracking-widest">
                  SCAN AT GATE ENTRY
                </p>
              </div>

              {/* Pass details */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 text-left text-xs space-y-2 border border-slate-100 dark:border-darkBorder">
                <div className="flex justify-between">
                  <span className="text-slate-500">Spectator:</span>
                  <span className="font-semibold text-slate-900 dark:text-white">{spectatorName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Arena:</span>
                  <span className="font-semibold text-slate-900 dark:text-white">{arena.name} ({arena.city})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Seat / Type:</span>
                  <span className="font-semibold text-blue-600 dark:text-blue-400">{selectedSeat} ({ticketType})</span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-full py-2.5 rounded-xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-bold text-sm hover:opacity-90 transition-opacity"
              >
                Close & View Pass
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
