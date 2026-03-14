import { motion } from "motion/react";
import { ArtistData } from "../data/artist-data";
import { Award, TrendingUp, Music2, ExternalLink } from "lucide-react";

interface BiographySectionProps {
  data: ArtistData;
}

export function BiographySection({ data }: BiographySectionProps) {
  return (
    <section id="biography" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Biography */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-block mb-6">
              <div className="bg-orange-600 text-white px-6 py-3 rounded-full text-sm font-semibold tracking-wide">
                BIOGRAPHY
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              About {data.name}
            </h2>

            <div className="space-y-6">
              {data.biography.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-neutral-300 leading-relaxed text-lg"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* Right - Career Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="inline-block mb-6">
              <div className="bg-orange-600 text-white px-6 py-3 rounded-full text-sm font-semibold tracking-wide">
                CAREER HIGHLIGHTS
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Achievements
            </h2>

            <div className="space-y-6">
              {data.careerHighlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-6 hover:border-orange-600/50 transition-colors group"
                >
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-orange-600/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-orange-600/30 transition-colors">
                      {index === 0 && (
                        <TrendingUp className="w-6 h-6 text-orange-500" />
                      )}
                      {index === 1 && (
                        <Award className="w-6 h-6 text-orange-500" />
                      )}
                      {index === 2 && (
                        <Music2 className="w-6 h-6 text-orange-500" />
                      )}
                    </div>
                    <p className="text-neutral-300 leading-relaxed flex-1">
                      {highlight}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decorative element - Album VỠ LÒNG with clickable link */}
            <motion.a
              href={data.albumSpotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 p-8 bg-gradient-to-br from-orange-600/10 to-transparent rounded-2xl border border-orange-600/20 hover:border-orange-600/50 transition-all cursor-pointer group block"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <Music2 className="w-8 h-8 text-orange-500" />
                  <h3 className="text-2xl font-bold text-white group-hover:text-orange-500 transition-colors">
                    Album "VỠ LÒNG"
                  </h3>
                </div>
                <ExternalLink className="w-5 h-5 text-orange-500 group-hover:scale-110 transition-transform" />
              </div>
              <p className="text-neutral-400 group-hover:text-neutral-300 transition-colors">
                An emotionally charged album project showcasing KHIEM's musical
                journey. Click to listen on Spotify.
              </p>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
