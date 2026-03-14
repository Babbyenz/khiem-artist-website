import { motion } from "motion/react";
import { ArtistData } from "../data/artist-data";
import { Camera, Download } from "lucide-react";
import { Button } from "./ui/button";
import featuredPhoto from "../../assets/anhdt.jpg";

interface PressSectionProps {
  data: ArtistData;
}

export function PressSection({ data }: PressSectionProps) {
  const handleDownload = async (imageUrl: string, filename: string) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
      // Fallback: open in new tab if download fails
      window.open(imageUrl, "_blank");
    }
  };

  return (
    <section id="press" className="py-24 relative">
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
              PHOTOS
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Photos Gallery
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Professional photos collection of artist KHIEM
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Large featured image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:row-span-2 group cursor-pointer relative overflow-hidden rounded-3xl"
          >
            <div className="relative h-full min-h-[600px]">
              <img
                src={featuredPhoto}
                alt="Press Photo"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent" />

              {/* Overlay content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white text-2xl font-bold mb-2">
                      Official Press Photos
                    </h3>
                    <p className="text-neutral-300">High Resolution</p>
                  </div>
                  <Button
                    size="lg"
                    className="gap-2 bg-orange-600 hover:bg-orange-700"
                    onClick={() =>
                      handleDownload(
                        featuredPhoto,
                        "khiem-press-photo-featured.jpg",
                      )
                    }
                  >
                    <Download className="w-5 h-5" />
                    Download
                  </Button>
                </div>
              </div>

              {/* Camera icon */}
              <div className="absolute top-6 right-6 w-12 h-12 bg-neutral-950/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-neutral-700">
                <Camera className="w-6 h-6 text-white" />
              </div>
            </div>
          </motion.div>

          {/* Grid of smaller images */}
          {data.pressPhotos.slice(0, 4).map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group cursor-pointer relative overflow-hidden rounded-2xl h-[290px]"
            >
              <div className="relative w-full h-full overflow-hidden">
                {/* background blur */}
                <img
                  src={photo}
                  className="absolute inset-0 w-full h-full object-cover blur-2xl scale-110 opacity-60"
                />

                {/* main image */}
                <img
                  src={photo}
                  alt={`Press Photo ${index + 1}`}
                  className="relative w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Download button on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Button
                  size="sm"
                  className="gap-2 bg-orange-600 hover:bg-orange-700"
                  onClick={() =>
                    handleDownload(photo, `khiem-press-photo-${index + 1}.jpg`)
                  }
                >
                  <Download className="w-4 h-4" />
                  Download
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional images row */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {data.pressPhotos.slice(4).map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              viewport={{ once: true }}
              className="group cursor-pointer relative overflow-hidden rounded-xl aspect-square"
              onClick={() =>
                handleDownload(photo, `khiem-gallery-${index + 5}.jpg`)
              }
            >
              <div className="relative w-full h-full overflow-hidden">
                {/* background blur */}
                <img
                  src={photo}
                  className="absolute inset-0 w-full h-full object-cover blur-2xl scale-110 opacity-60"
                />

                {/* main image */}
                <img
                  src={photo}
                  alt={`Gallery ${index + 1}`}
                  className="relative w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-neutral-950/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Download className="w-6 h-6 text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
