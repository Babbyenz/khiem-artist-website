import { motion } from "motion/react";
import { User, Calendar, MapPin, Music, Heart } from "lucide-react";
import anhtt from "../../assets/anhtt.jpg";

export function InformationSection() {
  const info = [
    {
      label: "Full Name",
      value: "Lê Chí Khiêm",
      icon: <User className="w-5 h-5 text-orange-500" />,
    },

    {
      label: "Year of Birth",
      value: "2005",
      icon: <Calendar className="w-5 h-5 text-orange-500" />,
    },
    {
      label: "Gender",
      value: "Male",
      icon: <User className="w-5 h-5 text-orange-500" />,
    },
    {
      label: "Relationship Status",
      value: "Single",
      icon: <Heart className="w-5 h-5 text-orange-500" />,
    },
    {
      label: "Hometown",
      value: "Trà Vinh, Vietnam",
      icon: <MapPin className="w-5 h-5 text-orange-500" />,
    },
    {
      label: "Nationality",
      value: "Vietnamese",
      icon: <MapPin className="w-5 h-5 text-orange-500" />,
    },
    {
      label: "Occupation",
      value: "Singer – Songwriter",
      icon: <Music className="w-5 h-5 text-orange-500" />,
    },
    {
      label: "Music Genre",
      value: "Indie Pop, Ballad",
      icon: <Music className="w-5 h-5 text-orange-500" />,
    },
    {
      label: "Musical Style",
      value: "Emotional, healing-oriented storytelling through music",
      icon: <Music className="w-5 h-5 text-orange-500" />,
    },
    {
      label: "Years Active",
      value: "2023 – Present",
      icon: <Calendar className="w-5 h-5 text-orange-500" />,
    },
  ];

  return (
    <section id="information" className="py-24 relative">
      <div className="container mx-auto px-4">
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
              INFORMATION
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Artist Profile
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Artist Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden border border-neutral-800">
              <img
                src={anhtt}
                alt="KHIEM Artist"
                className="w-full h-[500px] object-cover"
              />
            </div>

            <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold text-white">KHIEM</h3>
              <p className="text-neutral-400">Vietnamese Indie Pop Artist</p>
            </div>
          </motion.div>

          {/* Right - Information */}
          <div className="grid md:grid-cols-2 gap-6">
            {info.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-6 hover:border-orange-600/50 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-orange-600/20 rounded-full flex items-center justify-center group-hover:bg-orange-600/30 transition-colors">
                    {item.icon}
                  </div>

                  <div>
                    <p className="text-sm text-neutral-400">{item.label}</p>

                    <p className="text-lg text-white font-semibold">
                      {item.value}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
