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
    id: "sarpanchi",
    title: "Sarpanchi ",
    artist: "Feat. Billa",
    vibe: "Beat/ Performance",
    duration: "2:48",
    year: "2024",
    genre: "Punjabi Beat",
    mood: "Confident",
    lyricsSample: [
      "Phela hi duniya lgdi,",
      "Na vair kise nal paali ve ,",
      "Kha pee k mukkar jande ne bandr na landa krali ve,",
    ],
    tags: ["Bhangra", "Folk", "Stage"],
    youtubeUrl: "https://www.youtube.com/watch?v=QtBEsCn_L14",
  },
  {
    id: "jo-bharo-disde",
    title: "Jo Bharo Disde",
    artist: "Harjiwan",
    vibe: "Beat/ Bhangra Performance",
    duration: "3:33",
    year: "2024",
    genre: "Punjabi Beat",
    mood: "Confident",
    lyricsSample: [
      "Khuliyan na tang jameena,",
      "Mangan ki mang gooriya  ,",
      "Suraj di laali wrga ,",
      "Jatt de rang gooriya",
    ],
    tags: ["Bhangra", "Classical", "Folk"],
    youtubeUrl: "https://youtu.be/_HaDDcgobd4?si=OqaWf2_XZnlre5cm",
  },
  {
    id: "reel-bindrakhiye-di",
    title: "Reel Bindrakhiye di ",
    artist: "Harjiwan",
    vibe: "Beat/ Bhangra Performance",
    duration: "3:54",
    year: "2025",
    genre: "Punjabi Beat",
    mood: "Confident",
    lyricsSample: [
      "Sambh le tu sambh le hussan gooriya,",
      "lakkare marda,",
      "Gabru cho pynda a bhulke bindrkhiya de,",
      "Geetan naal da",
    ],
    tags: ["Bhangra", "Folk", "Stage"],
    youtubeUrl: "https://youtu.be/Ev3lq7YREag?si=zudfgmnBYQu9pAt3",
  },
  {
    id: "streak",
    title: "Streak",
    artist: "Raman Bains",
    vibe: "Romantic Performance",
    duration: "2:35",
    year: "2026",
    genre: "Punjabi Romantic",
    mood: "Romantic",
    lyricsSample: [
      "Dine dine dil kithe lagda mera ,",
      "Hun menu raatan v daron lgiya   ,",
      "Suraj di laali wrga ,",
      "Jdo diya tere nal gallan khuliyan",
      " Odo diyan gallan menu aun lgiyan ",
    ],
    tags: ["Vibe", "Romantic", "Feelings"],
    youtubeUrl: "https://youtu.be/CaxC1Xo2uQg?si=1Ouoq2JNhCAIgXDa",
  },
];

export function findSongById(id: string) {
  return songs.find((song) => song.id === id);
}
