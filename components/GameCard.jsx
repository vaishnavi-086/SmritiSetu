import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, Sparkles, CalendarClock, Eye } from 'lucide-react';
import { useLang } from '@/lib/i18n';
import VoiceButton from '@/components/VoiceButton';

const gameMeta = {
  memory_match: { path: '/games/memory-match', icon: Brain, color: 'from-violet-500 to-purple-600', bg: 'bg-violet-50', text: 'text-violet-700' },
  pattern_recognition: { path: '/games/pattern-recognition', icon: Sparkles, color: 'from-sky-500 to-blue-600', bg: 'bg-sky-50', text: 'text-sky-700' },
  routine_recall: { path: '/games/routine-recall', icon: CalendarClock, color: 'from-emerald-500 to-teal-600', bg: 'bg-emerald-50', text: 'text-emerald-700' },
  object_recognition: { path: '/games/object-recognition', icon: Eye, color: 'from-rose-500 to-pink-600', bg: 'bg-rose-50', text: 'text-rose-700' }
};

export default function GameCard({ gameType, difficulty }) {
  const { t, lang } = useLang();
  const navigate = useNavigate();
  const meta = gameMeta[gameType];
  const Icon = meta.icon;
  const titleKey = gameType === 'memory_match' ? 'memoryMatch'
    : gameType === 'pattern_recognition' ? 'patternRecognition'
    : gameType === 'routine_recall' ? 'routineRecall'
    : 'objectRecognition';
  const descKey = titleKey + 'Desc';

  return (
    <div className={`rounded-3xl p-5 ${meta.bg} border border-white shadow-sm hover:shadow-md transition-shadow`}>
      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${meta.color} flex items-center justify-center mb-3 shadow-md`}>
        <Icon size={28} className="text-white" />
      </div>
      <h3 className="text-xl font-bold text-slate-800 mb-1">{t(titleKey)}</h3>
      <p className="text-sm text-slate-500 mb-3">{t(descKey)}</p>
      <div className="flex items-center justify-between">
        <VoiceButton text={`${t(titleKey)}. ${t(descKey)}`} lang={lang} label={t('listen')} />
        <button
          onClick={() => navigate(meta.path)}
          className={`px-5 py-2.5 rounded-xl bg-gradient-to-br ${meta.color} text-white font-semibold shadow-md active:scale-95 transition-transform`}
        >
          {t('playGame')}
        </button>
      </div>
    </div>
  );
}
