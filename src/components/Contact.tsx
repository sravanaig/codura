import { motion } from "motion/react";
import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    const whatsappNumber = "917382601453";
    const text = `*New Inquiry from Codura Website*%0A%0A*Name:* ${formState.name}%0A*Email:* ${formState.email}%0A*Message:* ${formState.message}`;
    
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
    
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-white/40 mb-4 block">Get In Touch</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">LET'S START A <br /> CONVERSATION</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Email Us</h4>
                  <p className="text-muted-foreground">hello@codura.com</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Call Us</h4>
                  <p className="text-muted-foreground">+91 7382601453</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Visit Us</h4>
                  <p className="text-muted-foreground">Hyderabad - 500 098, Telangana, India.</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a 
                href="https://wa.me/917382601453" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button variant="outline" className="rounded-full h-14 px-8 glass group">
                  <MessageCircle className="mr-2 w-5 h-5 text-green-500" />
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-[40px]"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40">Full Name</label>
                  <Input
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Type Your Name"
                    className="glass border-white/10 h-14 rounded-2xl focus:ring-white/20"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40">Email Address</label>
                  <Input
                    required
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="youremail@example.com"
                    className="glass border-white/10 h-14 rounded-2xl focus:ring-white/20"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40">Your Message</label>
                <Textarea
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Tell us about your project..."
                  className="glass border-white/10 min-h-[160px] rounded-2xl focus:ring-white/20"
                />
              </div>
              <Button type="submit" className="w-full h-14 rounded-2xl text-base font-bold group">
                Send Message
                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
