export interface MusicRelease {
  id: string;
  title: string;
  views: string;
  thumbnail: string;
  youtubeUrl: string;
  audioUrl?: string;
  lyricUrl?: string;
}

export interface ArtistData {
  name: string;
  title: string;
  biography: string[];
  careerHighlights: string[];
  musicReleases: MusicRelease[];
  pressPhotos: string[];
  contact: {
    facebook: string;
    email: string;
    phone: string;
    tiktok: string;
    spotify: string;
    instagram: string;
    youtube: string;
    appleMusic: string;
  };
  heroImage: string;
  albumCover: string;
  profileImages: string[];
  albumSpotifyUrl: string;
}

export const initialArtistData: ArtistData = {
  name: "KHIEM",
  title: "INDIE ARTIST",
  biography: [
    "Lê Chí Khiêm, known by his stage name KHIEM, is a Gen Z artist from Trà Vinh, Vietnam, recognized for his emotionally rich Indie Pop Ballads with a healing touch. His music has attracted young listeners across platforms such as YouTube, TikTok, and Spotify through its gentle melodies and heartfelt lyrics, often reflecting stories about love, loneliness, and the search for inner peace.",
    'KHIEM\'s notable song "Yên bình có quá đắt không" reached the YouTube Trending chart in Vietnam, helping him gain wider recognition. Along with other songs such as "Anh lại làm em khóc nữa rồi" and "Đừng yêu ai đó quá nhiều" KHIEM is gradually establishing his presence in Vietnam\'s indie music scene.',
  ],
  careerHighlights: [
    'The music video "Yên bình có quá đắt không" has reached over 16 million views on YouTube.',
    'KHIEM has become a "rising musical phenomenon" and has received a strong response from young audiences.',
  ],
  musicReleases: [
    {
      id: "1",
      title: "Yên Bình Có Quá Đắt Không",
      views: "16M YOUTUBE VIEWS",
      thumbnail: "figma:asset/b3711dcf644460c7511b003ee487c200988ff94c.png",
      youtubeUrl:
        "https://www.youtube.com/watch?v=rwylb-5WGog&list=RDrwylb-5WGog&start_radio=1",
      audioUrl: "https://open.spotify.com/track/0A0oqleZkyD8FN6aW48Jzn",
    },
    {
      id: "2",
      title: "Anh Cũng Muốn Là Đứa Trẻ",
      views: "1M YOUTUBE VIEWS",
      thumbnail: "figma:asset/65933d5ced9a67d55ade72046a42aa58e0fb1b40.png",
      youtubeUrl:
        "https://www.youtube.com/watch?v=cYG-C3DsJDA&list=RDcYG-C3DsJDA&start_radio=1",
    },
    {
      id: "3",
      title: "Đừng Yêu Ai Đó Quá Nhiều",
      views: "3.3M YOUTUBE VIEWS",
      thumbnail: "figma:asset/291cd57592dafd5b3e7959c7ae242968559caf3a.png",
      youtubeUrl:
        "https://www.youtube.com/watch?v=sFWgMt1MTUM&list=RDsFWgMt1MTUM&start_radio=1",
    },
    {
      id: "4",
      title: "Anh Lại Làm Em Khóc Nữa Rồi",
      views: "6.9M YOUTUBE VIEWS",
      thumbnail: "figma:asset/94ffac8ddfc7f4405a9b3b07dfa488146c803912.png",
      youtubeUrl:
        "https://www.youtube.com/watch?v=osDMPchCdjM&list=RDosDMPchCdjM&start_radio=1",
    },
    {
      id: "5",
      title: "Vỡ Lòng",
      views: "2.1K YOUTUBE VIEWS",
      thumbnail: "figma:asset/b3711dcf644460c7511b003ee487c200988ff94c.png",
      youtubeUrl:
        "https://www.youtube.com/watch?v=h1tvHc9xor8&list=RDh1tvHc9xor8&start_radio=1",
      audioUrl: "https://open.spotify.com/album/0Qw86mLbRlKIADshHsNwdi",
      lyricUrl: "https://lyrics.lyricfind.com/lyrics/khiem-vo-long",
    },
  ],
  pressPhotos: [
    "src/assets/anhngoi.jpg",
    "src/assets/anhchongcam.jpg",
    "src/assets/anhtrangden.jpg",
    "src/assets/anhcammic.jpg",
    "src/assets/AB1.jpg",
    "src/assets/AB2.jpg",
    "src/assets/AB3.jpg",
    "src/assets/AB4.jpg",
    "src/assets/AB5.jpg",
    "src/assets/anhngoighe.jpg",
  ],
  contact: {
    facebook: "facebook.com/khiemmusicofficial",
    email: "chikhiemcy@gmail.com",
    phone: "0332268949",
    tiktok: "khiem.official",
    spotify: "Khiem",
    instagram: "khiemofficial",
    youtube: "Khiem Official",
    appleMusic: "Khiem",
  },
  heroImage: "figma:asset/b3711dcf644460c7511b003ee487c200988ff94c.png",
  albumCover: "figma:asset/b3711dcf644460c7511b003ee487c200988ff94c.png",
  profileImages: [
    "figma:asset/b3711dcf644460c7511b003ee487c200988ff94c.png",
    "figma:asset/65933d5ced9a67d55ade72046a42aa58e0fb1b40.png",
    "figma:asset/291cd57592dafd5b3e7959c7ae242968559caf3a.png",
  ],
  albumSpotifyUrl: "https://open.spotify.com/album/0Qw86mLbRlKIADshHsNwdi",
};
