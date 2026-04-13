import { motion } from "motion/react";
import { useState } from "react";
import { X, Maximize2 } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const images = [
  { id: 1, src: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop", title: "Modern Workspace", size: "large" },
  { id: 2, src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop", title: "Creative Studio", size: "small" },
  { id: 3, src: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop", title: "Minimal Office", size: "small" },
  { id: 4, src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop", title: "Collaboration Hub", size: "medium" },
  { id: 5, src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop", title: "Tech Innovation", size: "large" },
  { id: 6, src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop", title: "Digital Strategy", size: "small" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-white/40 mb-4 block">Visual Journey</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">OUR PORTFOLIO</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {images.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative group cursor-pointer overflow-hidden rounded-3xl glass p-2 ${
                img.size === "large" ? "md:col-span-2 md:row-span-2" : 
                img.size === "medium" ? "md:col-span-2" : ""
              }`}
              onClick={() => setSelectedImage(img.src)}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-center">
                <h3 className="text-2xl font-display font-bold mb-2">{img.title}</h3>
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center">
                  <Maximize2 className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl p-0 border-0 bg-transparent shadow-none">
          {selectedImage && (
            <div className="relative aspect-video w-full">
              <img
                src={selectedImage}
                alt="Full preview"
                className="w-full h-full object-contain rounded-3xl"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
