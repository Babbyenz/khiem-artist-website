import { motion } from "motion/react";
import { ArtistData } from "../data/artist-data";
import { Play, Music } from "lucide-react";
import { Button } from "./ui/button";
import artistImage from "../../assets/AB1.jpg";

interface HeroSectionProps {
  data: ArtistData;
}

export function HeroSection({ data }: HeroSectionProps) {
  const featuredRelease = data.musicReleases[4];

  const handleWatchMV = (youtubeUrl: string) => {
    window.open(youtubeUrl, "_blank");
  };

  // const handlePlayAudio = (audioUrl?: string) => {
  //   if (!audioUrl) return;
  //   window.open(audioUrl, "_blank");
  // };

  // const handleLyric = (lyricUrl?: string) => {
  //   if (!lyricUrl) return;
  //   window.open(lyricUrl, "_blank");
  // };
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-neutral-950 to-neutral-950" />

      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-48 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-48 w-96 h-96 bg-orange-800/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="bg-orange-600/20 text-orange-500 px-4 py-2 rounded-full text-sm border border-orange-600/30">
                {data.title}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-7xl md:text-8xl font-bold text-white mb-6"
              style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
            >
              {data.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-neutral-400 mb-8 leading-relaxed max-w-xl"
            >
              Gen Z artist with emotionally rich Indie Pop Ballads, bringing
              healing through music.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex gap-4"
            >
              {/*
               <Button
                size="lg"
                className="gap-2 bg-orange-600 hover:bg-orange-700"
                onClick={() => {
                  if (featuredRelease.audioUrl) {
                    handlePlayAudio(featuredRelease.audioUrl);
                  }
                }}
              >
                <Play className="w-5 h-5" fill="currentColor" />
                Listen Now
              </Button>
              <Button
                onClick={() => handleLyric(featuredRelease.lyricUrl)}
                size="lg"
                variant="outline"
                className="gap-2"
              >
                <Music className="w-5 h-5" />
                Lyrics
              </Button>
              */}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-neutral-800"
            >
              <div>
                <div className="text-3xl font-bold text-white">16M+</div>
                <div className="text-sm text-neutral-500">YouTube Views</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">15+</div>
                <div className="text-sm text-neutral-500">Hit Singles</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">2025</div>
                <div className="text-sm text-neutral-500">Album Release</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right content - Artist image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/30 to-transparent rounded-3xl blur-2xl" />

              {/* Main image */}
              <motion.div
                className="relative rounded-3xl overflow-hidden border border-neutral-800"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={artistImage}
                  alt={data.name}
                  className="w-full h-auto object-cover"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />

                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="absolute bottom-8 left-8 right-8 bg-neutral-950/90 backdrop-blur-lg rounded-2xl p-6 border border-neutral-800"
                >
                  <div
                    className="flex items-center gap-4"
                    onClick={() => handleWatchMV(featuredRelease.youtubeUrl)}
                  >
                    <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                      <Music className="w-6 h-6 text-white" />
                    </div>
                    <div className="cursor-pointer">
                      <div className="text-white font-semibold">
                        Now Playing
                      </div>

                      <div className="text-neutral-400 text-sm">"VỠ LÒNG"</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-24 h-24 bg-orange-600/20 rounded-full backdrop-blur-sm border border-orange-600/30"
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-neutral-600 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-orange-600 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
