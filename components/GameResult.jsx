import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Trophy, RotateCcw, ArrowLeft, Home } from 'lucide-react';
import { useLang } from '@/lib/i18n';
import { speak } from '@/lib/voice';

export default function GameResult({ score, accuracy, rounds, onReplay }) {
  const { t, lang } = useLang();
  const navigate = useNavigate();

  React.useEffect(() => {
    speak(`${t('wellDone')} ${t('score')} ${score}. ${t('accuracy')} ${accuracy}%`, lang);
  }, []);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center">
      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mb-6 shadow-xl">
        <Trophy size={48} className="text-white" />
      </div>
      <h2 className="text-3xl font-bold text-slate-800 mb-2">{t('wellDone')}</h2>
      <p className="text-slate-400 mb-8">{t('keepGoing')}</p>

      <div className="grid grid-cols-3 gap-3 w-full max-w-md mb-8">
        <div className="bg-white rounded-2xl p-4 border border-orange-100 shadow-sm">
          <p className="text-3xl font-bold text-orange-600">{score}</p>
          <p className="text-xs text-slate-400 mt-1">{t('score')}</p>
        </div>
        <div className="bg-white rounded-2xl p-4 border border-orange-100 shadow-sm">
          <p className="text-3xl font-bold text-emerald-600">{accuracy}%</p>
          <p className="text-xs text-slate-400 mt-1">{t('accuracy')}</p>
        </div>
        <div className="bg-white rounded-2xl p-4 border border-orange-100 shadow-sm">
          <p className="text-3xl font-bold text-violet-600">{rounds}</p>
          <p className="text-xs text-slate-400 mt-1">{t('rounds')}</p>
        </div>
      </div>

      <div className="flex gap-3">
        <button onClick={() => navigate('/games')} className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white border-2 border-orange-200 text-orange-600 font-semibold active:scale-95 transition-transform">
          <ArrowLeft size={20} /> {t('back')}
        </button>
        <button onClick={onReplay} className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-br from-orange-500 to-rose-500 text-white font-semibold shadow-lg active:scale-95 transition-transform">
          <RotateCcw size={20} /> {t('playAgain')}
        </button>
      </div>
      <button onClick={() => navigate('/')} className="mt-4 inline-flex items-center gap-1 text-slate-400 text-sm">
        <Home size={16} /> {t('home')}
      </button>
    </div>
  );
}
