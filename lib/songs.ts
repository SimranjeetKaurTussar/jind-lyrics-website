export type Song = {
  id: string;
  title: string;
  artist: string;
  vibe: string;
  duration: string;
  year: string;
  genre: string;
  mood: string;
  lyricsSample: string[];
  tags: string[];
  youtubeUrl?: string;
};

export const songs: Song[] = [
  {
    id: "raatan-de-raaz",
    title: "Raatan De Raaz",
    artist: "Feat. Armaan Gill",
    vibe: "Romantic / Urban Punjabi",
    duration: "3:16",
    year: "2025",
    genre: "Romantic",
    mood: "Dreamy",
    lyricsSample: [
      "Raatan de raaz tere naal likhda haan,",
      "Chann vi ruk ke saadi gall sun da ae,",
      "Dil da har lafz tera hi zikr kare,",
    ],
    tags: ["Hook", "Romantic", "Radio"],
    youtubeUrl: "https://www.youtube.com/watch?v=placeholder1",
  },
  {
    id: "nakhra-note",
    title: "Nakhra Note",
    artist: "Feat. Simran K",
    vibe: "Dance / Commercial",
    duration: "2:58",
    year: "2024",
    genre: "Commercial",
    mood: "Energetic",
    lyricsSample: [
      "Nakhra tera beat te drop ho jave,",
      "Floor te aag wangu step ho jave,",
      "Crowd di awaaz ch tera naam goonje,",
    ],
    tags: ["Party", "Dance", "Club"],
    youtubeUrl: "https://www.youtube.com/watch?v=placeholder2",
  },
  {
    id: "mitti-di-khushboo",
    title: "Mitti Di Khushboo",
    artist: "Feat. Deep Sandhu",
    vibe: "Soulful / Folk Fusion",
    duration: "3:42",
    year: "2025",
    genre: "Folk Fusion",
    mood: "Soulful",
    lyricsSample: [
      "Mitti di khushboo vich ghar da ehsaas,",
      "Dooriyan vich vi rehnda tera paas,",
      "Sadda pind ajj vi geetan ch vasda,",
    ],
    tags: ["Folk", "Emotional", "Story"],
    youtubeUrl: "https://www.youtube.com/watch?v=placeholder3",
  },
  {
    id: "shehar-da-rhythm",
    title: "Shehar Da Rhythm",
    artist: "Feat. JVN",
    vibe: "Urban / Performance",
    duration: "3:05",
    year: "2026",
    genre: "Hip-Hop",
    mood: "Confident",
    lyricsSample: [
      "Shehar di raat, neon di chaal,",
      "Bars meri te crowd da sawal,",
      "Mic te sach, te beat te jawab,",
    ],
    tags: ["Rap", "Urban", "Stage"],
  },
];


export function findSongById(id: string) {
  return songs.find((song) => song.id === id);
}
