import React, { useState } from 'react';
import { Bell, CloudRain, AlertCircle, Clock, MapPin, X, Check } from 'lucide-react';

export default function NotificationCenter() {
  const [isOpen, setIsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(3);

  const [notifications, setNotifications] = useState([
    { id: 1, type: 'weather', title: 'Rain Alert at Gachibowli Stadium', time: '10 min ago', desc: 'Mild rain expected around 18:30 PM. Retractable roof activated.', read: false, icon: CloudRain, color: 'text-amber-500 bg-amber-500/10' },
    { id: 2, type: 'venue', title: 'Court Allocation Update', time: '25 min ago', desc: 'Basketball Semi-Final moved from Court #2 to Main Indoor Arena.', read: false, icon: MapPin, color: 'text-blue-500 bg-blue-500/10' },
    { id: 3, type: 'score', title: 'GOAL! Strikers FC 2 - 1 Thunderbolts', time: '40 min ago', desc: 'Rohan Sharma scores header in 62nd minute.', read: false, icon: AlertCircle, color: 'text-emerald-500 bg-emerald-500/10' },
    { id: 4, type: 'schedule', title: 'Match Rescheduled', time: '2 hours ago', desc: 'Cricket Quarter-Final delayed by 15 mins due to team arrival.', read: true, icon: Clock, color: 'text-purple-500 bg-purple-500/10' }
  ]);

  const markAllRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
    setUnreadCount(0);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2.5 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
        aria-label="Notifications"
      >
        <Bell className="h-5 w-5" />
        {unreadCount > 0 && (
          <span className="absolute top-1.5 right-1.5 h-4 w-4 rounded-full bg-rose-600 text-white font-black text-[9px] flex items-center justify-center animate-pulse">
            {unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-3 w-80 sm:w-96 rounded-2xl border border-slate-200 dark:border-darkBorder bg-white dark:bg-darkCard p-4 shadow-2xl z-50 text-left animate-fade-in">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-darkBorder mb-3">
            <div className="flex items-center gap-2">
              <Bell className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider">
                STAMS Alerts & Updates
              </h4>
            </div>
            {unreadCount > 0 && (
              <button
                onClick={markAllRead}
                className="text-[10px] text-blue-600 dark:text-blue-400 font-bold hover:underline"
              >
                Mark all read
              </button>
            )}
          </div>

          <div className="space-y-2.5 max-h-72 overflow-y-auto pr-1">
            {notifications.map((n) => {
              const Icon = n.icon;
              return (
                <div
                  key={n.id}
                  className={`p-3 rounded-xl border text-xs transition-colors flex items-start gap-3 ${
                    n.read
                      ? 'bg-slate-50 dark:bg-slate-900/40 border-slate-100 dark:border-darkBorder/60 opacity-75'
                      : 'bg-blue-50/50 dark:bg-blue-950/20 border-blue-100 dark:border-blue-900/40'
                  }`}
                >
                  <div className={`p-2 rounded-lg ${n.color} shrink-0`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <h5 className="font-bold text-slate-900 dark:text-white text-xs">{n.title}</h5>
                      <span className="text-[9px] text-slate-400 font-mono">{n.time}</span>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-[11px] mt-0.5 leading-snug">{n.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
