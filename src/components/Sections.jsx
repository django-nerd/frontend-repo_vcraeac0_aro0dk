import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Sparkles, PenTool, Code, Megaphone } from 'lucide-react';

export const Portfolio = () => {
  const items = [
    { title: 'Playful App UI', tag: 'Mobile', img: 'https://images.unsplash.com/photo-1557180295-76eee20ae8aa?q=80&w=1200&auto=format&fit=crop' },
    { title: 'Brand Landing', tag: 'Web', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop' },
    { title: '3D Website', tag: 'Experience', img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop' },
    { title: 'Creative Commerce', tag: 'E‑commerce', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop' },
  ];
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-extrabold mb-8">Portfolio</motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <motion.a
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              href="#work"
              className="group relative rounded-xl overflow-hidden bg-slate-50 shadow hover:shadow-lg transition-shadow"
            >
              <img src={item.img} alt={item.title} className="h-48 w-full object-cover" />
              <div className="p-4">
                <div className="text-xs uppercase tracking-wide text-blue-600">{item.tag}</div>
                <div className="font-semibold group-hover:text-blue-700 transition-colors">{item.title}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Services = () => {
  const services = [
    { icon: PenTool, title: 'Brand & Visual', desc: 'Logos, palettes, and playful design systems.' },
    { icon: Code, title: 'Web Experiences', desc: 'Fast, responsive sites with smooth motion.' },
    { icon: Megaphone, title: 'Content & Campaigns', desc: 'Launch-ready assets for social and marketing.' },
  ];
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-extrabold mb-8">Services</motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-2xl bg-white p-6 shadow hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 text-blue-700">
                <Icon className="h-6 w-6" />
                <h3 className="text-xl font-bold">{title}</h3>
              </div>
              <p className="mt-2 text-slate-600">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const WorkCTA = () => {
  return (
    <section id="work" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-blue-500 text-white p-10 overflow-hidden relative">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold">Have a wild idea?</h2>
            <p className="mt-2 text-blue-100">We love playful concepts that push the web forward. Let’s prototype something magical together.</p>
            <a href="#contact" className="mt-6 inline-flex items-center rounded-lg bg-white text-blue-700 px-5 py-3 font-medium shadow-lg shadow-blue-900/10 hover:bg-blue-50 transition-colors">
              Start a Project
            </a>
          </motion.div>
          <Rocket className="absolute -right-6 -top-6 h-24 w-24 opacity-20" />
          <Sparkles className="absolute right-10 bottom-8 h-8 w-8 opacity-50" />
        </div>
      </div>
    </section>
  );
};

export const ContactAndLogin = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-10">
        <div>
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-extrabold mb-4">Contact</motion.h2>
          <p className="text-slate-600 mb-6">Tell us about your project and we’ll get back within a day.</p>
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" placeholder="Name" className="w-full rounded-lg border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input type="email" placeholder="Email" className="w-full rounded-lg border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <input type="text" placeholder="Subject" className="w-full rounded-lg border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <textarea rows="4" placeholder="Tell us more..." className="w-full rounded-lg border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button type="button" className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white px-5 py-3 font-medium shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-colors">Send Message</button>
          </form>
        </div>

        <div id="login" className="bg-white rounded-2xl p-6 shadow">
          <h3 className="text-2xl font-bold mb-4">Client Login</h3>
          <form className="space-y-4">
            <input type="email" placeholder="Email" className="w-full rounded-lg border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="password" placeholder="Password" className="w-full rounded-lg border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button type="button" className="w-full rounded-lg bg-blue-600 text-white px-5 py-3 font-medium shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-colors">Log In</button>
            <p className="text-sm text-slate-500 text-center">By continuing you agree to our playful terms.</p>
          </form>
        </div>
      </div>
    </section>
  );
};
