import React from 'react';
import { motion } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  ChevronRight, 
  Code2, 
  Smartphone, 
  Database, 
  Layers, 
  Zap,
  Download,
  Terminal
} from 'lucide-react';
import { PERSONAL_INFO, COMPETENCIES, EXPERIENCE, PROJECTS } from './constants';
import { cn } from './lib/utils';

const Section = ({ children, className, id }: { children: React.ReactNode; className?: string; id?: string }) => (
  <section id={id} className={cn("py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto", className)}>
    {children}
  </section>
);

const Badge = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <span className={cn("px-3 py-1 text-xs font-medium rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20", className)}>
    {children}
  </span>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-emerald-500/30">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-500/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-500/5 blur-[120px]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b-0 py-4 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-display font-bold text-xl tracking-tighter"
          >
            US<span className="text-emerald-500">.</span>
          </motion.div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
            {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-emerald-400 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Section className="pt-40 pb-20 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge className="mb-6">Available for new opportunities</Badge>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 leading-[0.9]">
            Crafting <span className="text-gradient">Mobile Experiences</span> That Matter.
          </h1>
          <p className="max-w-2xl text-zinc-400 text-lg md:text-xl mb-10 leading-relaxed">
            I'm <span className="text-white font-medium">{PERSONAL_INFO.name}</span>, an {PERSONAL_INFO.title} with 4+ years of expertise in building high-performance cross-platform applications.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#projects" 
              className="px-8 py-4 rounded-xl bg-white text-black font-bold hover:bg-zinc-200 transition-all flex items-center gap-2"
            >
              View Projects <ChevronRight size={18} />
            </a>
            <div className="flex gap-2">
              {[
                { icon: Github, href: PERSONAL_INFO.github },
                { icon: Linkedin, href: PERSONAL_INFO.linkedin },
                { icon: Mail, href: `mailto:${PERSONAL_INFO.email}` }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl glass hover:bg-white/10 transition-all text-zinc-400 hover:text-white"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </Section>

      {/* About Section */}
      <Section id="about" className="border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <p className="text-zinc-400 leading-relaxed mb-6 text-lg">
              {PERSONAL_INFO.about}
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 rounded-2xl glass">
                <div className="text-3xl font-bold text-emerald-400 mb-1">4+</div>
                <div className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Years Experience</div>
              </div>
              <div className="p-4 rounded-2xl glass">
                <div className="text-3xl font-bold text-cyan-400 mb-1">10+</div>
                <div className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Apps Delivered</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-3xl overflow-hidden glass p-2"
          >
            <img 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000" 
              alt="Coding" 
              className="w-full h-full object-cover rounded-2xl opacity-50 grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex items-center gap-3 glass p-4 rounded-2xl">
                <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                  <Terminal size={20} />
                </div>
                <div>
                  <div className="text-sm font-bold">Flutter Expert</div>
                  <div className="text-xs text-zinc-500">Dart, Riverpod, Firebase</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" className="border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Core Competencies</h2>
          <p className="text-zinc-500 max-w-xl mx-auto">Specialized skills developed over years of professional mobile app development.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPETENCIES.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl glass hover:bg-white/10 transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {i === 0 && <Smartphone size={24} />}
                {i === 1 && <Layers size={24} />}
                {i === 2 && <Database size={24} />}
                {i === 3 && <MapPin size={24} />}
                {i === 4 && <Zap size={24} />}
                {i === 5 && <Code2 size={24} />}
              </div>
              <h3 className="text-xl font-bold mb-3">{skill.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" className="border-t border-white/5">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
            <p className="text-zinc-500">My journey through the tech industry, building impactful solutions.</p>
          </div>
          <div className="lg:col-span-2 space-y-8">
            {EXPERIENCE.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l border-white/10"
              >
                <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                <div className="mb-1 flex flex-wrap justify-between items-start gap-2">
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <span className="text-sm font-mono text-zinc-500">{exp.period}</span>
                </div>
                <div className="text-emerald-400 font-medium mb-4 flex items-center gap-2">
                  {exp.company} <span className="text-zinc-600">•</span> <span className="text-zinc-500 text-sm">{exp.location}</span>
                </div>
                <ul className="space-y-3">
                  {exp.description.map((item, j) => (
                    <li key={j} className="text-zinc-400 text-sm flex gap-3">
                      <ChevronRight size={14} className="mt-1 text-emerald-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" className="border-t border-white/5">
        <div className="flex flex-wrap justify-between items-end gap-6 mb-16">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-zinc-500">A selection of my best work in mobile and web development.</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group rounded-3xl glass overflow-hidden flex flex-col"
            >
              <div className="p-8 flex-1">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold group-hover:text-emerald-400 transition-colors">{project.title}</h3>
                  <div className="flex gap-2">
                    {project.platforms.map((p, j) => (
                      <span key={j} className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 bg-zinc-500/10 px-2 py-1 rounded">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="space-y-3 mb-8">
                  {project.description.map((desc, j) => (
                    <p key={j} className="text-zinc-400 text-sm leading-relaxed">
                      {desc}
                    </p>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech, j) => (
                    <span key={j} className="text-xs font-mono text-zinc-500 bg-white/5 px-2 py-1 rounded border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.links && project.links.length > 0 && (
                  <div className="flex flex-wrap gap-4 mt-auto pt-6 border-t border-white/5">
                    {project.links.map((link, j) => (
                      <a 
                        key={j}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5"
                      >
                        {link.label} <ExternalLink size={12} />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="border-t border-white/5 mb-24">
        <div className="glass rounded-[3rem] p-8 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-cyan-500" />
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-8 tracking-tighter">Let's build something <span className="text-gradient">extraordinary</span>.</h2>
          <p className="text-zinc-400 text-lg mb-12 max-w-2xl mx-auto">
            Currently looking for new opportunities and collaborations. Whether you have a question or just want to say hi, my inbox is always open.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href={`mailto:${PERSONAL_INFO.email}`}
              className="px-8 py-4 rounded-2xl bg-emerald-500 text-black font-bold hover:bg-emerald-400 transition-all flex items-center gap-3"
            >
              <Mail size={20} /> {PERSONAL_INFO.email}
            </a>
            <a 
              href={`tel:${PERSONAL_INFO.phone}`}
              className="px-8 py-4 rounded-2xl glass hover:bg-white/10 transition-all flex items-center gap-3"
            >
              <Phone size={20} /> {PERSONAL_INFO.phone}
            </a>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-zinc-500">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm font-medium text-zinc-400">
            <a href={PERSONAL_INFO.github} className="hover:text-white transition-colors">GitHub</a>
            <a href={PERSONAL_INFO.linkedin} className="hover:text-white transition-colors">LinkedIn</a>
          </div>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-3 rounded-xl glass hover:bg-white/10 transition-all text-zinc-400 hover:text-white"
          >
            <Download size={18} className="rotate-180" />
          </button>
        </div>
      </footer>
    </div>
  );
}
