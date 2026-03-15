import { motion } from "motion/react";
import { ArtistData } from "../data/artist-data";
import { Facebook, Mail, Phone, Music, Instagram, Youtube } from "lucide-react";
import { Button } from "./ui/button";

interface ContactSectionProps {
  data: ArtistData;
}

// Spotify Icon
function SpotifyIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`text-green-500 transition-transform duration-300 group-hover:scale-110 ${className}`}
      fill="currentColor"
    >
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  );
}

// Apple Music Icon
function AppleMusicIcon({ className }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110 ${className}`}
      style={{
        background: "linear-gradient(135deg,#fa243c,#ff375f)",
        width: "22px",
        height: "22px",
      }}
    >
      <svg viewBox="0 0 24 24" width="14" height="14" fill="white">
        <path d="M16 3v11.55a3.5 3.5 0 1 1-1-2.45V7h-6v7.55a3.5 3.5 0 1 1-1-2.45V3h8z" />
      </svg>
    </div>
  );
}

export function ContactSection({ data }: ContactSectionProps) {
  const spotifyLink =
    "https://open.spotify.com/artist/2xyEAgqFAAy5yqRZ7mHd9c?si=_RYAmDYcRA2eJMDWwIpajg&nd=1&dlsi=94b5b4aa6cf345ba";

  const appleMusicLink = "https://music.apple.com/vn/artist/khiem/1556967615";

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      link: `https://${data.contact.facebook}`,
      username: data.contact.facebook,
      color: "hover:bg-blue-600",
    },
    {
      name: "Instagram",
      icon: Instagram,
      link: `https://instagram.com/${data.contact.instagram}`,
      username: `@${data.contact.instagram}`,
      color: "hover:bg-pink-600",
    },
    {
      name: "YouTube",
      icon: Youtube,
      link: `https://youtube.com/@${data.contact.youtube.replace(" ", "")}`,
      username: data.contact.youtube,
      color: "hover:bg-red-600",
    },
    {
      name: "TikTok",
      icon: Music,
      link: `https://tiktok.com/@${data.contact.tiktok}`,
      username: `@${data.contact.tiktok}`,
      color: "hover:bg-gray-800",
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* LEFT SIDE */}
          <div className="space-y-6">
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                <a
                  href={`mailto:${data.contact.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-neutral-800/50"
                >
                  <Mail className="w-6 h-6 text-orange-500" />
                  <div>
                    <div className="text-sm text-neutral-500">Email</div>
                    <div className="text-white">{data.contact.email}</div>
                  </div>
                </a>

                <a
                  href={`tel:${data.contact.phone}`}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-neutral-800/50"
                >
                  <Phone className="w-6 h-6 text-orange-500" />
                  <div>
                    <div className="text-sm text-neutral-500">Phone</div>
                    <div className="text-white">{data.contact.phone}</div>
                  </div>
                </a>
              </div>
            </div>

            {/* STREAMING */}
            <div className="bg-gradient-to-br from-orange-600/10 to-transparent border border-orange-600/20 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Music className="w-6 h-6 text-orange-500" />
                Streaming Platforms
              </h3>

              <div className="space-y-3">
                {/* SPOTIFY */}
                <a
                  href={spotifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-neutral-300 p-3 rounded-lg hover:bg-neutral-800/30 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <SpotifyIcon className="w-5 h-5 text-green-500" />
                    <span>Spotify</span>
                  </div>

                  <span className="text-orange-500 font-semibold">
                    {data.contact.spotify}
                  </span>
                </a>

                {/* APPLE MUSIC */}
                <a
                  href={appleMusicLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-neutral-300 p-3 rounded-lg hover:bg-neutral-800/30 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <AppleMusicIcon className="w-5 h-5 text-pink-500" />
                    <span>Apple Music</span>
                  </div>

                  <span className="text-orange-500 font-semibold">
                    {data.contact.appleMusic}
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Social Media</h3>

            <div className="grid gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between p-6 rounded-2xl bg-neutral-800/50 border border-neutral-700 hover:border-orange-600 transition-all group ${social.color}`}
                >
                  <div className="flex items-center gap-4">
                    <social.icon className="w-6 h-6 text-white" />
                    <div>
                      <div className="text-white font-semibold">
                        {social.name}
                      </div>
                      <div className="text-neutral-400 text-sm">
                        {social.username}
                      </div>
                    </div>
                  </div>

                  <Button variant="ghost" size="sm">
                    Follow
                  </Button>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
