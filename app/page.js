"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: 0.1 + i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] } }),
};

export default function HomePage() {
  return (
    <main>
      {/* Decorative grid overlay */}
      <div className="pointer-events-none fixed inset-0 bg-grid opacity-30" />

      {/* Header */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-black/20 border-b border-white/10">
        <div className="section py-4 flex items-center justify-between">
          <Link href="#" className="font-semibold tracking-tight">mm<span className="text-accent">.</span></Link>
          <nav className="hidden md:flex items-center gap-6 text-sm text-subtle">
            <a href="#about" className="hover:text-text transition">About</a>
            <a href="#work" className="hover:text-text transition">Work</a>
            <a href="#contact" className="hover:text-text transition">Contact</a>
            <a href="#" className="button-primary text-sm">Get in touch</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="section pt-24 md:pt-32">
        <div className="max-w-3xl">
          <motion.p
            className="text-subtle mb-4"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            Designer & Frontend Engineer
          </motion.p>
          <motion.h1
            className="text-4xl md:text-6xl font-semibold leading-tight"
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
          >
            Crafting clean, performant web experiences in a modern dark aesthetic
            <span className="text-accent">.</span>
          </motion.h1>
          <motion.p
            className="mt-6 text-lg text-subtle max-w-2xl"
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUp}
          >
            I build minimal interfaces with delightful motion, strong typography, and a focus on speed and accessibility.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial="hidden"
            animate="visible"
            custom={3}
            variants={fadeUp}
          >
            <a href="#work" className="button-primary">View Work</a>
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 hover:border-white/30 transition">Contact</a>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div className="card" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
            <h2 className="text-2xl font-semibold mb-3">About</h2>
            <p className="text-subtle leading-relaxed">
              I specialize in React, Next.js, and thoughtful design systems. My work blends clarity, motion, and subtle color to create engaging experiences.
            </p>
          </motion.div>
          <motion.div className="card" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} custom={1} variants={fadeUp}>
            <h2 className="text-2xl font-semibold mb-3">Expertise</h2>
            <ul className="text-subtle grid grid-cols-2 gap-2">
              <li>Next.js</li>
              <li>React</li>
              <li>TypeScript</li>
              <li>Tailwind</li>
              <li>Framer Motion</li>
              <li>Design Systems</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="section">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold">Selected Work</h2>
          <a className="text-subtle hover:text-text transition text-sm" href="#">View all</a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <motion.a
              key={i}
              href="#"
              className="group card overflow-hidden"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <div className="h-40 rounded-xl bg-gradient-to-br from-white/10 via-white/5 to-transparent group-hover:from-accent/30 group-hover:via-accent/10 transition" />
              <div className="mt-4">
                <h3 className="font-medium">Project {i}</h3>
                <p className="text-subtle text-sm">A clean, animated interface with modern tech.</p>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <div className="card text-center">
          <motion.h2 className="text-2xl md:text-3xl font-semibold" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={fadeUp}>
            Let?s build something minimal and delightful<span className="text-accent">.</span>
          </motion.h2>
          <motion.p className="text-subtle mt-3" initial="hidden" whileInView="visible" custom={1} variants={fadeUp}>
            Available for select freelance and collaborations.
          </motion.p>
          <motion.div className="mt-6 flex justify-center gap-4" initial="hidden" whileInView="visible" custom={2} variants={fadeUp}>
            <a className="button-primary" href="mailto:hello@example.com">Email Me</a>
            <a className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 hover:border-white/30 transition" href="#">Download Resume</a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="section pt-0 text-sm text-subtle">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p>? {new Date().getFullYear()} Minimal Portfolio</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-text">Twitter</a>
            <a href="#" className="hover:text-text">GitHub</a>
            <a href="#" className="hover:text-text">LinkedIn</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
