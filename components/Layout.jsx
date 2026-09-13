import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Home, Gamepad2, Bell, Activity, Settings } from 'lucide-react';
import { useLang } from '@/lib/i18n';

export default function Layout() {
  const { t } = useLang();
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { path: '/', label: t('home'), icon: Home },
    { path: '/games', label: t('games'), icon: Gamepad2 },
    { path: '/reminders', label: t('reminders'), icon: Bell },
    { path: '/caregiver', label: t('caregiver'), icon: Activity },
    { path: '/settings', label: t('settings'), icon: Settings }
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50/30 to-rose-50/40">
      <main className="pb-28 max-w-3xl mx-auto px-4 pt-6">
        <Outlet />
      </main>
      <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-orange-100 shadow-[0_-4px_20px_rgba(0,0,0,0.04)] z-50">
        <div className="max-w-3xl mx-auto flex justify-around items-stretch px-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`flex flex-col items-center gap-1 py-3 px-3 flex-1 transition-colors ${
                  active ? 'text-orange-600' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                <Icon size={26} strokeWidth={active ? 2.5 : 2} />
                <span className="text-[11px] font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
