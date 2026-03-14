import { motion } from "motion/react";
import { Sparkles, Music, Heart } from "lucide-react";

export function CreativeInspirationSection() {
  return (
    <section id="creative-inspiration" className="py-24 relative">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-6">
            <div className="bg-orange-600 text-white px-6 py-3 rounded-full text-sm font-semibold tracking-wide">
              CREATIVE INSPIRATION
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Creative Inspiration
          </h2>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-3xl p-12 hover:border-orange-600/40 transition-colors"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-orange-600/20 rounded-full flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-orange-500" />
            </div>

            <h3 className="text-2xl font-bold text-white">
              Source of Artistic Inspiration
            </h3>
          </div>

          <div className="space-y-6 text-neutral-300 leading-relaxed text-lg">
            <p>
              The songwriting inspiration of Lê Chí Khiêm (KHIEM) mainly comes
              from his personal experiences and the genuine emotions of youth.
              His music is often shaped by everyday stories such as love,
              separation, loneliness, and moments of reflection in life. Through
              gentle melodies and emotionally rich lyrics, KHIEM aims to convey
              feelings that many young listeners can relate to
            </p>

            <p>
              In addition, he draws inspiration from the pressures and
              fast-paced lifestyle that Gen Z faces in modern society. These
              experiences contribute to the healing tone that characterizes his
              music. As a result, KHIEM’s songs often create a sense of
              closeness and emotional connection with listeners. For him, each
              song is not only a musical work but also an emotional story told
              through melody and lyrics.
            </p>
          </div>

          {/* Bottom highlights */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-neutral-800/50 rounded-2xl p-6 flex items-center gap-4">
              <Music className="w-6 h-6 text-orange-500" />
              <span className="text-neutral-300">
                Inspired by real-life emotions
              </span>
            </div>

            <div className="bg-neutral-800/50 rounded-2xl p-6 flex items-center gap-4">
              <Heart className="w-6 h-6 text-orange-500" />
              <span className="text-neutral-300">
                Focus on love and youth experiences
              </span>
            </div>

            <div className="bg-neutral-800/50 rounded-2xl p-6 flex items-center gap-4">
              <Sparkles className="w-6 h-6 text-orange-500" />
              <span className="text-neutral-300">
                Healing through emotional storytelling
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
