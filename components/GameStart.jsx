import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Play } from 'lucide-react';
import { useLang } from '@/lib/i18n';
import VoiceButton from '@/components/VoiceButton';

const diffColors = { easy: 'bg-emerald-100 text-emerald-700', medium: 'bg-amber-100 text-amber-700', hard: 'bg-rose-100 text-rose-700' };

export default function GameStart({ title, instructions, difficulty, onStart }) {
  const { t, lang } = useLang();
  const navigate = useNavigate();

  return (
    <div className="min-h-[70vh] flex flex-col">
      <button onClick={() => navigate('/games')} className="self-start inline-flex items-center gap-1 text-slate-500 mb-6">
        <ArrowLeft size={20} /> {t('back')}
      </button>
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold text-slate-800 mb-3">{title}</h1>
        <p className="text-slate-500 text-lg mb-2 max-w-md">{instructions}</p>
        <div className={`px-4 py-1.5 rounded-full text-sm font-semibold mb-8 ${diffColors[difficulty]}`}>
          {t('difficulty')}: {t(difficulty)}
        </div>
        <VoiceButton text={`${title}. ${instructions}`} lang={lang} label={t('listen')} className="mb-6" />
        <button
          onClick={onStart}
          className="inline-flex items-center gap-2 px-10 py-5 rounded-2xl bg-gradient-to-br from-orange-500 to-rose-500 text-white text-xl font-bold shadow-xl shadow-orange-500/30 active:scale-95 transition-transform"
        >
          <Play size={26} fill="white" /> {t('startGame')}
        </button>
      </div>
    </div>
  );
}
