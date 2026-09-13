import React from 'react';
import { Pill, Droplets, Activity, Stethoscope, Check } from 'lucide-react';
import { useLang } from '@/lib/i18n';

const typeMeta = {
  medicine: { icon: Pill, color: 'bg-rose-100 text-rose-600' },
  hydration: { icon: Droplets, color: 'bg-sky-100 text-sky-600' },
  activity: { icon: Activity, color: 'bg-emerald-100 text-emerald-600' },
  appointment: { icon: Stethoscope, color: 'bg-violet-100 text-violet-600' }
};

export default function ReminderCard({ reminder, onToggle }) {
  const { t } = useLang();
  const meta = typeMeta[reminder.type];
  const Icon = meta.icon;

  return (
    <div className={`flex items-center gap-4 p-4 rounded-2xl bg-white border border-orange-100 shadow-sm ${reminder.completed ? 'opacity-60' : ''}`}>
      <div className={`w-12 h-12 rounded-xl ${meta.color} flex items-center justify-center flex-shrink-0`}>
        <Icon size={24} />
      </div>
      <div className="flex-1 min-w-0">
        <p className={`font-semibold text-slate-800 ${reminder.completed ? 'line-through' : ''}`}>{reminder.title}</p>
        <p className="text-sm text-slate-400">{reminder.time} · {t(reminder.type)}</p>
        {reminder.description && <p className="text-xs text-slate-400 mt-0.5">{reminder.description}</p>}
      </div>
      <button
        onClick={onToggle}
        className={`w-11 h-11 rounded-full flex items-center justify-center transition-colors flex-shrink-0 ${
          reminder.completed ? 'bg-emerald-500 text-white' : 'bg-orange-100 text-orange-600 hover:bg-orange-200'
        }`}
      >
        <Check size={22} strokeWidth={3} />
      </button>
    </div>
  );
}
