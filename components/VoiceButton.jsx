import React, { useState } from 'react';
import { Volume2, Square } from 'lucide-react';
import { speak, stopSpeaking } from '@/lib/voice';

export default function VoiceButton({ text, lang = 'en', label = 'Listen', className = '' }) {
  const [playing, setPlaying] = useState(false);

  const handleSpeak = () => {
    if (playing) {
      stopSpeaking();
      setPlaying(false);
      return;
    }
    setPlaying(true);
    speak(text, lang);
    // Reset state after speech likely ends
    setTimeout(() => setPlaying(false), Math.max(2000, text.length * 90));
  };

  return (
    <button
      onClick={handleSpeak}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 hover:bg-orange-200 text-orange-700 font-medium transition-colors ${className}`}
    >
      {playing ? <Square size={18} /> : <Volume2 size={18} />}
      <span className="text-sm">{label}</span>
    </button>
  );
}
