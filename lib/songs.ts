export type Song = {
  id: string;
  title: string;
  artist: string;
  vibe: string;
  duration: string;
  year: string;
};

export const songs: Song[] = [
  {
    id: "raatan-de-raaz",
    title: "Raatan De Raaz",
    artist: "Feat. Armaan Gill",
    vibe: "Romantic / Urban Punjabi",
    duration: "3:16",
    year: "2025",
  },
  {
    id: "nakhra-note",
    title: "Nakhra Note",
    artist: "Feat. Simran K",
    vibe: "Dance / Commercial",
    duration: "2:58",
    year: "2024",
  },
  {
    id: "mitti-di-khushboo",
    title: "Mitti Di Khushboo",
    artist: "Feat. Deep Sandhu",
    vibe: "Soulful / Folk Fusion",
    duration: "3:42",
    year: "2025",
  },
];
