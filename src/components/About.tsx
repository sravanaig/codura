import { motion } from "motion/react";
import { Quote } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden glass p-2">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                alt="Team collaboration"
                className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 glass rounded-3xl p-6 hidden md:flex flex-col justify-center animate-float">
              <span className="text-4xl font-display font-bold mb-2">12+</span>
              <span className="text-sm text-muted-foreground uppercase tracking-widest">Years of Excellence</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-white/40 mb-4 block">About Codura</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
              CRAFTING DIGITAL <br /> EXPERIENCES SINCE 2013
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg font-light leading-relaxed">
              <p>
                Codura is a complete digital solutions company dedicated to helping businesses grow with modern technology and creative strategies. We specialize in delivering high-quality services that combine innovation, reliability, and customer satisfaction.
              </p>
              <p>
                From building stunning websites to promoting brands in the digital world, Codura offers end-to-end solutions tailored to your needs.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass p-6 rounded-2xl">
                <h4 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full" />
                  Our Mission
                </h4>
                <p className="text-sm text-muted-foreground">To provide smart, scalable, and customer-focused digital and technical solutions that help businesses succeed.</p>
              </div>
              <div className="glass p-6 rounded-2xl">
                <h4 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full" />
                  Our Vision
                </h4>
                <p className="text-sm text-muted-foreground">To become a trusted one-stop solution for all digital, technical, and branding needs.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Founder Sub-section */}
        <div id="founder" className="pt-24 border-t border-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-12 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="md:col-span-5 relative flex justify-center"
              >
                <div className="relative w-56 h-54 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-white/10 glass p-1.5">
                  <img
                    src="https://i.postimg.cc/LXhnrQJ8/founder.png"
                    alt="Founder"
                    className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="md:col-span-7"
              >
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40 mb-3 block">Leadership</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 leading-tight">
                  MEET OUR FOUNDER
                </h2>
                
                <div className="relative mb-6">
                  <Quote className="absolute -top-4 -left-6 w-10 h-10 text-white/5 -z-10" />
                  <p className="text-lg md:text-xl font-light leading-relaxed text-muted-foreground italic">
                    "At Codura, we don't just build technology; we build trust and lasting relationships. Our goal is to empower every business with the tools they need to thrive in a digital-first world."
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-8">
                  <div className="space-y-1">
                    <h4 className="text-xl font-display font-bold">Sravan Reddy</h4>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">Founder & CEO</p>
                  </div>
                  
                  <div className="flex gap-4 border-l border-white/10 pl-8">
                    <div>
                      <div className="text-xl font-bold">12+</div>
                      <div className="text-[9px] uppercase tracking-widest text-muted-foreground">Years Exp.</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold">250+</div>
                      <div className="text-[9px] uppercase tracking-widest text-muted-foreground">Projects</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
