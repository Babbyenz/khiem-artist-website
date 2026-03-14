import { motion } from "motion/react";
import { Bot } from "lucide-react";

export function AIUsageSection() {
  return (
    <section id="aiUsage" className="py-24 bg-black text-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">AI Usage</h2>

          <p className="text-neutral-400 text-lg leading-relaxed">
            This product was developed and is the responsibility of the team for
            all content, user experience design, and product development.
          </p>
        </motion.div>

        {/* AI Cards */}
        <div className="space-y-6">
          {/* ChatGPT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 mt-2 rounded-full bg-green-500"></div>

              <div>
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  <Bot className="w-5 h-5" />
                  ChatGPT
                </h3>

                <p className="text-neutral-400">
                  Support includes content structuring, website framework
                  suggestions, and logical feedback on information flow.
                </p>
              </div>
            </div>
          </motion.div>

          {/* figma */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 mt-2 rounded-full bg-orange-500"></div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Figma</h3>

                <p className="text-neutral-400">
                  Support includes UI/UX coding and responsive design
                  optimization.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 text-center text-neutral-500 text-sm"
        >
          ✔ All content has been reviewed by the team.
        </motion.div>
      </div>
    </section>
  );
}
