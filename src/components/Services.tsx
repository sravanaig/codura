import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
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
  PhoneCall,
  Sparkles,
  Quote,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "Codura transformed our local retail shop into a digital brand. Their team's expertise in web design is unparalleled and they truly understand local business needs.",
    author: "Rajesh Kumar",
    company: "S.R. Enterprises",
    rating: 5
  },
  {
    id: 2,
    quote: "The CCTV installation was seamless and the smart surveillance features are incredible. Their post-installation support has been exceptional.",
    author: "Priya Sharma",
    company: "Green Valley Residency",
    rating: 5
  },
  {
    id: 3,
    quote: "Our wedding web app was the highlight of the event! It made sharing invitations and collecting RSVPs so elegant and effortless for our guests.",
    author: "Anil Verma",
    company: "Private Client",
    rating: 5
  },
  {
    id: 4,
    quote: "Top-notch digital marketing strategies. Our local customer reach has doubled in just three months thanks to their targeted campaigns.",
    author: "Meera Reddy",
    company: "Vibrant Boutique",
    rating: 5
  },
  {
    id: 5,
    quote: "Reliable hardware support. They've been managing our office systems for years with zero downtime. Highly recommended for any technical needs.",
    author: "Vikram Singh",
    company: "TechSol India",
    rating: 5
  }
];

const services = [
  // Digital & Creative
  {
    id: 13,
    title: "Special Events Web Apps",
    category: "Digital & Creative",
    icon: Sparkles,
    description: "Personalized digital invitations and event web apps for weddings, housewarmings, and special celebrations.",
  },
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
    title: "Security & Surveillance (CCTV) ",
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
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

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
              initial="initial"
              whileHover="hover"
              variants={{
                initial: { opacity: 0, scale: 0.9 },
                animate: { opacity: 1, scale: 1 },
              }}
              animate="animate"
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card className="glass border-0 h-full group hover:bg-white/10 transition-all duration-500 cursor-pointer">
                <CardHeader>
                  <motion.div 
                    variants={{
                      hover: { rotate: [0, -10, 10, 0], y: [0, -5, 0], scale: 1.1 }
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-4"
                  >
                    <service.icon className="w-6 h-6 text-white" />
                  </motion.div>
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

      {/* Testimonials Section */}
      <div className="mt-20 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40 mb-2 block">Client Voices</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold">WHAT PEOPLE SAY</h2>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-all"
            >
              <ChevronLeft className="w-4 h-4 text-white" />
            </button>
            <button 
              onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-all"
            >
              <ChevronRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <AnimatePresence mode="popLayout" initial={false}>
              {[0, 1, 2, 3].map((offset) => {
                const index = (activeTestimonial + offset) % testimonials.length;
                const testimonial = testimonials[index];
                return (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="h-full"
                  >
                    <Card className="glass border-0 bg-white/[0.03] h-full flex flex-col hover:bg-white/5 transition-colors duration-300">
                      <CardContent className="p-6 relative flex flex-col h-full">
                        <Quote className="absolute top-4 right-4 w-8 h-8 text-white/5 -z-10" />
                        
                        <div className="flex gap-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Sparkles key={i} className="w-3 h-3 text-white/60" />
                          ))}
                        </div>
                        
                        <p className="text-sm font-light leading-relaxed italic text-white/80 mb-6 flex-grow">
                          "{testimonial.quote}"
                        </p>

                        <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                          <div className="w-px h-8 bg-white/20" />
                          <div>
                            <h4 className="text-sm font-display font-bold text-white">{testimonial.author}</h4>
                            <p className="text-[10px] uppercase tracking-widest text-white/40">{testimonial.company}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`h-1 rounded-full transition-all duration-500 ${
                  i === activeTestimonial ? "w-8 bg-white" : "w-1.5 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
