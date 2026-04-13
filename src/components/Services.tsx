import { motion } from "motion/react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Monitor, 
  TrendingUp, 
  Megaphone, 
  Palette, 
  Cpu, 
  Camera, 
  LifeBuoy, 
  Video, 
  Wrench,
  Fingerprint,
  Lock,
  PhoneCall
} from "lucide-react";

const services = [
  // Digital & Creative
  {
    id: 1,
    title: "Web Designing",
    category: "Digital & Creative",
    icon: Monitor,
    description: "Modern, responsive, and dynamic websites tailored to your business needs.",
  },
  {
    id: 2,
    title: "Digital Marketing",
    category: "Digital & Creative",
    icon: TrendingUp,
    description: "Boost your online presence and reach your target audience effectively.",
  },
  {
    id: 3,
    title: "Brand Promotion",
    category: "Digital & Creative",
    icon: Megaphone,
    description: "Build a strong and impactful brand identity that stands out in the market.",
  },
  {
    id: 4,
    title: "Graphic Designing",
    category: "Digital & Creative",
    icon: Palette,
    description: "Creative visuals that attract, engage, and communicate your message.",
  },
  {
    id: 5,
    title: "YouTube Live Streaming",
    category: "Digital & Creative",
    icon: Video,
    description: "Professional live event streaming services for a global audience.",
  },
  // Security & Surveillance
  {
    id: 6,
    title: "CCTV Installation",
    category: "Security & Surveillance",
    icon: Camera,
    description: "Secure and smart surveillance systems for your home or business.",
  },
  {
    id: 7,
    title: "Biometrics",
    category: "Security & Surveillance",
    icon: Fingerprint,
    description: "Advanced Fingerprint & Face Recognition Systems for secure access.",
  },
  {
    id: 8,
    title: "Door Access Control",
    category: "Security & Surveillance",
    icon: Lock,
    description: "Reliable door access control systems to manage entry and exit points.",
  },
  {
    id: 9,
    title: "Intercom & Video Door Phone",
    category: "Security & Surveillance",
    icon: PhoneCall,
    description: "Smart communication and video door phone solutions for enhanced security.",
  },
  // Technical & Support
  {
    id: 10,
    title: "Hardware Solutions",
    category: "Technical & Support",
    icon: Cpu,
    description: "Reliable system setup, hardware upgrades, and technical support.",
  },
  {
    id: 11,
    title: "Digital Support",
    category: "Technical & Support",
    icon: LifeBuoy,
    description: "Complete technical assistance and troubleshooting for all your digital needs.",
  },
  {
    id: 12,
    title: "AMC",
    category: "Technical & Support",
    icon: Wrench,
    description: "Annual Maintenance Contracts for ongoing support and system maintenance.",
  },
];

const categories = ["All", "Digital & Creative", "Security & Surveillance", "Technical & Support"];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredServices = services.filter(
    (s) => activeCategory === "All" || s.category === activeCategory
  );

  return (
    <section id="services" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-white/40 mb-4 block">Our Expertise</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold">PREMIUM SERVICES</h2>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-white text-background"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, i) => (
            <motion.div
              key={service.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card className="glass border-0 h-full group hover:bg-white/10 transition-all duration-500">
                <CardHeader>
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="outline" className="w-fit mb-2 border-white/20 text-white/60">
                    {service.category}
                  </Badge>
                  <CardTitle className="text-2xl font-display font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-light mb-6">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between pt-6 border-t border-white/10">
                    <button className="text-sm font-bold uppercase tracking-widest hover:text-white transition-colors">
                      Inquire Now
                    </button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
