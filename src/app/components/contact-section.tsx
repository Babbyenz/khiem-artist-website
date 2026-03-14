import { motion } from 'motion/react';
import { ArtistData } from '../data/artist-data';
import { Facebook, Mail, Phone, Music, Instagram, Youtube } from 'lucide-react';
import { Button } from './ui/button';

interface ContactSectionProps {
  data: ArtistData;
}

// Spotify Icon Component
function SpotifyIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
    </svg>
  );
}

// Apple Music Icon Component
function AppleMusicIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M23.997 6.124c0-.738-.065-1.47-.24-2.19-.317-1.31-1.062-2.31-2.18-3.043a5.076 5.076 0 0 0-1.877-.726 11.54 11.54 0 0 0-1.585-.152c-.192-.01-1.936-.024-5.23-.024-3.294 0-5.038.013-5.23.024-.602.013-1.2.065-1.79.152-.628.1-1.23.328-1.796.69-1.122.732-1.87 1.738-2.188 3.05-.174.717-.239 1.45-.239 2.188l.002.892c.001.137.001.991.001 1.151v1.212L2.66 15.624v.99c0 .736.065 1.47.239 2.189.318 1.31 1.066 2.312 2.186 3.044a5.09 5.09 0 0 0 1.79.69 11.81 11.81 0 0 0 1.79.152c.192.011 1.936.025 5.23.025 3.294 0 5.038-.014 5.23-.025.602-.013 1.2-.065 1.79-.152a5.12 5.12 0 0 0 1.877-.726c1.12-.732 1.864-1.734 2.18-3.043.176-.72.24-1.453.24-2.19v-.991l-.002-7.412c0-.16 0-1.014.002-1.15l-.001-.893zM15.81 13.856l-4.795 2.217a1.027 1.027 0 0 1-.44.103c-.563 0-1.022-.46-1.022-1.024V8.747c0-.42.26-.794.653-.938.392-.145.832-.043 1.106.257l4.795 5.305c.278.308.322.76.115 1.118a1.024 1.024 0 0 1-.907.486c-.119 0-.24-.025-.351-.072-.092-.04-.185-.086-.27-.135z"/>
    </svg>
  );
}

export function ContactSection({ data }: ContactSectionProps) {
  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      link: `https://${data.contact.facebook}`,
      username: data.contact.facebook,
      color: 'hover:bg-blue-600'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      link: `https://instagram.com/${data.contact.instagram}`,
      username: `@${data.contact.instagram}`,
      color: 'hover:bg-pink-600'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      link: `https://youtube.com/@${data.contact.youtube.replace(' ', '')}`,
      username: data.contact.youtube,
      color: 'hover:bg-red-600'
    },
    {
      name: 'TikTok',
      icon: Music,
      link: `https://tiktok.com/@${data.contact.tiktok}`,
      username: `@${data.contact.tiktok}`,
      color: 'hover:bg-gray-800'
    }
  ];

  return (
    <section id="contact" className="py-24 relative">
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
              CONTACT
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Contact
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Connect with KHIEM through social media platforms and contact information
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <a
                  href={`mailto:${data.contact.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-neutral-800/50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-orange-600/20 rounded-full flex items-center justify-center group-hover:bg-orange-600 transition-colors">
                    <Mail className="w-6 h-6 text-orange-500 group-hover:text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-neutral-500">Email</div>
                    <div className="text-white">{data.contact.email}</div>
                  </div>
                </a>

                <a
                  href={`tel:${data.contact.phone}`}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-neutral-800/50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-orange-600/20 rounded-full flex items-center justify-center group-hover:bg-orange-600 transition-colors">
                    <Phone className="w-6 h-6 text-orange-500 group-hover:text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-neutral-500">Phone</div>
                    <div className="text-white">{data.contact.phone}</div>
                  </div>
                </a>
              </div>
            </div>

            {/* More Info Section */}
            <div className="bg-gradient-to-br from-orange-600/10 to-transparent border border-orange-600/20 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Music className="w-6 h-6 text-orange-500" />
                Streaming Platforms
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-neutral-300 p-3 rounded-lg hover:bg-neutral-800/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <SpotifyIcon className="w-5 h-5 text-green-500" />
                    <span>Spotify</span>
                  </div>
                  <span className="text-orange-500 font-semibold">{data.contact.spotify}</span>
                </div>
                <div className="flex items-center justify-between text-neutral-300 p-3 rounded-lg hover:bg-neutral-800/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <AppleMusicIcon className="w-5 h-5 text-pink-500" />
                    <span>Apple Music</span>
                  </div>
                  <span className="text-orange-500 font-semibold">{data.contact.appleMusic}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Social Media</h3>
              
              <div className="grid gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    className={`flex items-center justify-between p-6 rounded-2xl bg-neutral-800/50 border border-neutral-700 hover:border-orange-600 transition-all group ${social.color}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-neutral-700 rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
                        <social.icon className="w-6 h-6 text-white group-hover:text-neutral-900" />
                      </div>
                      <div>
                        <div className="text-white font-semibold">{social.name}</div>
                        <div className="text-neutral-400 text-sm">{social.username}</div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="group-hover:bg-white/10">
                      Follow
                    </Button>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="inline-flex items-center gap-2 text-neutral-500 text-sm">
            <Music className="w-4 h-4" />
            <span>© 2026 KHIEM. All rights reserved.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}