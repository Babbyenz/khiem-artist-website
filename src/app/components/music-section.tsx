import { motion } from "motion/react";
import { ArtistData } from "../data/artist-data";
import { Play, Eye } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "../../assets/YBCQDK.jpg";
import music2 from "../../assets/ACMLDT.jpeg";
import music3 from "../../assets/DYADQN.jpg";
import music4 from "../../assets/ALLEKNR.jpeg";

interface MusicSectionProps {
  data: ArtistData;
}

export function MusicSection({ data }: MusicSectionProps) {
  // Exclude the track titled "Vỡ Lòng" from the list
  const releases = data.musicReleases.filter((r) => r.title !== "Vỡ Lòng");
  const featuredRelease = releases[0];
  const otherReleases = releases.slice(1);

  const musicImages = [music2, music3, music4];

  const handlePlayAudio = (audioUrl?: string) => {
    if (!audioUrl) return;
    window.open(audioUrl, "_blank");
  };

  const handleWatchMV = (youtubeUrl: string) => {
    window.open(youtubeUrl, "_blank");
  };

  return (
    <section id="music" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-6">
            <div className="bg-orange-600 text-white px-6 py-3 rounded-full text-sm font-semibold tracking-wide">
              MUSIC
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Music Releases
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Discover the songs that made KHIEM's name
          </p>
        </motion.div>

        {/* Featured track */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12 relative group"
        >
          <div className="grid md:grid-cols-2 gap-8 bg-gradient-to-br from-orange-600/10 to-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-3xl overflow-hidden hover:border-orange-600/50 transition-all">
            <div className="relative h-80 md:h-auto overflow-hidden">
              <img
                src={heroImage}
                alt="Featured Album"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  OUT NOW
                </span>
              </div>
            </div>

            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {featuredRelease.title}
              </h3>
              <div className="flex items-center gap-2 text-orange-500 mb-6">
                <Eye className="w-5 h-5" />
                <span className="text-xl font-semibold">
                  {featuredRelease.views}
                </span>
              </div>
              <p className="text-neutral-400 mb-8 leading-relaxed">
                The song went viral on YouTube, reached trending status and was
                loved by a wide audience with its gentle, profound melody.
              </p>
              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="gap-2 bg-orange-600 hover:bg-orange-700"
                  onClick={() => handlePlayAudio(featuredRelease.audioUrl)}
                >
                  <Play className="w-5 h-5" fill="currentColor" />
                  Listen Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => handleWatchMV(featuredRelease.youtubeUrl)}
                >
                  Watch MV
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Music list */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherReleases.map((release, index) => (
            <motion.div
              key={release.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => handleWatchMV(release.youtubeUrl)}
            >
              <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl overflow-hidden hover:border-orange-600/50 transition-all hover:shadow-xl hover:shadow-orange-600/10">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={musicImages[index]}
                    alt={release.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent" />

                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center shadow-2xl">
                      <Play
                        className="w-8 h-8 text-white ml-1"
                        fill="currentColor"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-white font-semibold mb-2 line-clamp-2 group-hover:text-orange-500 transition-colors">
                    {release.title}
                  </h3>
                  <div className="flex items-center gap-2 text-neutral-500 text-sm">
                    <Eye className="w-4 h-4" />
                    <span>{release.views}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
