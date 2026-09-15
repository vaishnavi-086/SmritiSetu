// Culturally familiar items for the North Eastern Region of India
// Each item has an emoji representation and names in supported languages
export const GAME_ITEMS = [
  { emoji: "🫖", en: "Tea", hi: "चाय", as: "চাহ", bn: "চা" },
  { emoji: "🦏", en: "Rhino", hi: "गैंडा", as: "গঁড়", bn: "গণ্ডার" },
  { emoji: "🎋", en: "Bamboo", hi: "बांस", as: "বাঁহ", bn: "বাঁশ" },
  { emoji: "🍌", en: "Banana", hi: "केला", as: "কলা", bn: "কলা" },
  { emoji: "🌸", en: "Orchid", hi: "ऑर्किड", as: "অৰ্কিড", bn: "অর্কিড" },
  { emoji: "🥁", en: "Drum", hi: "ढोल", as: "ঢোল", bn: "ঢোল" },
  { emoji: "🍚", en: "Rice", hi: "चावल", as: "ভাত", bn: "ভাত" },
  { emoji: "🪷", en: "Lotus", hi: "कमल", as: "পদুম", bn: "পদ্ম" },
  { emoji: "🐘", en: "Elephant", hi: "हाथी", as: "হাতী", bn: "হাতি" },
  { emoji: "🦋", en: "Butterfly", hi: "तितली", as: "পৰুৱা", bn: "প্রজাপতি" },
  { emoji: "🌻", en: "Sunflower", hi: "सूरजमुखी", as: "সূৰ্যমুখী", bn: "সূর্যমুখী" },
  { emoji: "🥥", en: "Coconut", hi: "नारियल", as: "নাৰিকল", bn: "নারকেল" },
  { emoji: "🐟", en: "Fish", hi: "मछली", as: "মাছ", bn: "মাছ" },
  { emoji: "🌺", en: "Flower", hi: "फूल", as: "ফুল", bn: "ফুল" },
  { emoji: "🛶", en: "Boat", hi: "नाव", as: "নাও", bn: "নৌকা" },
  { emoji: "🍵", en: "Green Tea", hi: "हरी चाय", as: "সেউজীয়া চাহ", bn: "সবুজ চা" }
];

// Daily routine steps (in correct order)
export const ROUTINE_STEPS = [
  { emoji: "⏰", en: "Wake up", hi: "जागें", as: "জাগিব", bn: "ঘুম থেকে ওঠা" },
  { emoji: "🪥", en: "Brush teeth", hi: "दांत साफ करें", as: "দাঁত মাজিব", bn: "দাঁত মাজা" },
  { emoji: "🚿", en: "Take bath", hi: "नहाएं", as: "গা ধোব", bn: "গোসল করা" },
  { emoji: "🙏", en: "Pray", hi: "प्रार्थना करें", as: "প্ৰাৰ্থনা কৰিব", bn: "প্রার্থনা করা" },
  { emoji: "🍳", en: "Eat breakfast", hi: "नाश्ता करें", as: "জলপান খাব", bn: "নাস্তা করা" },
  { emoji: "🚶", en: "Morning walk", hi: "सैर करें", as: "বাতাস খাব", bn: "হাঁটতে যাওয়া" },
  { emoji: "📚", en: "Read a book", hi: "किताब पढ़ें", as: "কিতাপ পঢ়িব", bn: "বই পড়া" },
  { emoji: "🍚", en: "Eat lunch", hi: "दोपहर का खाना", as: "দুপৰীয়া আহাৰ", bn: "দুপুরের খাবার" },
  { emoji: "😴", en: "Take rest", hi: "आराम करें", as: "জিৰণ লব", bn: "বিশ্রাম নেওয়া" },
  { emoji: "🍵", en: "Drink tea", hi: "चाय पिएं", as: "চাহ খাব", bn: "চা খাওয়া" },
  { emoji: "🌙", en: "Go to sleep", hi: "सो जाएं", as: "শুইব", bn: "ঘুমাতে যাওয়া" }
];

export const DIFFICULTY_CONFIG = {
  memory_match: { easy: { pairs: 4 }, medium: { pairs: 6 }, hard: { pairs: 8 } },
  pattern_recognition: { easy: { count: 4, rounds: 5 }, medium: { count: 6, rounds: 5 }, hard: { count: 8, rounds: 5 } },
  routine_recall: { easy: { steps: 4, rounds: 3 }, medium: { steps: 6, rounds: 3 }, hard: { steps: 8, rounds: 3 } },
  object_recognition: { easy: { options: 4, rounds: 5 }, medium: { options: 4, rounds: 6 }, hard: { options: 4, rounds: 8 } }
};

// Compute recommended difficulty from recent sessions of a game type
export function computeDifficulty(sessions, gameType) {
  const gameSessions = sessions
    .filter(s => s.game_type === gameType)
    .sort((a, b) => new Date(b.created_date) - new Date(a.created_date))
    .slice(0, 5);
  if (gameSessions.length < 2) return 'easy';
  const avgAccuracy = gameSessions.reduce((sum, s) => sum + (s.accuracy || 0), 0) / gameSessions.length;
  if (avgAccuracy >= 80) return 'hard';
  if (avgAccuracy >= 55) return 'medium';
  return 'easy';
}

export function getGreeting(t) {
  const hour = new Date().getHours();
  if (hour < 12) return t('goodMorning');
  if (hour < 17) return t('goodAfternoon');
  return t('goodEvening');
}

export function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
