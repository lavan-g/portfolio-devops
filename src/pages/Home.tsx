import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, Code2 } from 'lucide-react';
import { Grid3DBackground } from '../components/Grid3D';
import { Typewriter } from '../components/Typewriter';
import { HERO_CONTENT, SKILLS, PROJECTS } from '../data/portfolio';

export const Home = () => {
  const stats = [
    { label: 'Years Experience', value: '1+' },
    { label: 'Cloud Platforms', value: '1' },
    { label: 'Projects Completed', value: '5+' },
    { label: 'Technologies', value: '10+' },
  ];

  const RESUME_URL =
    'https://drive.google.com/file/d/1KHc7i1CXCQTRRTpnc4ZDDicrKQgJIy8J/view?usp=drive_link'; // TODO: replace with your actual public Google Drive resume URL

  const featuredSkills = SKILLS.slice(0, 6);

  return (
    <div className="relative min-h-screen overflow-hidden bg-bg-page">
      {/* 3D Grid Background */}
      <Grid3DBackground />

      {/* Main Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 mx-auto max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Terminal prompt */}
            <div className="font-mono text-2xl font-bold tracking-wide md:text-3xl lg:text-4xl">
              <span className="mr-3 text-accent-500">$</span>
              <span className="text-primary-500">whoami</span>
            </div>

            {/* Typewriter heading */}
            <div className="font-mono text-4xl font-bold tracking-tight text-primary-500 md:text-6xl lg:text-8xl">
              <Typewriter text="DevOps & Cloud Engineer" delay={80} />
              <span className="terminal-cursor ml-2" />
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="mx-auto max-w-4xl text-xl leading-relaxed text-neutral-200 md:text-2xl"
            >
              {HERO_CONTENT}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5 }}
              className="flex flex-col items-center justify-center gap-4 pt-8 sm:flex-row"
            >
              <Link
                to="/projects"
                className="group inline-flex items-center rounded-lg border-2 border-primary-500 px-8 py-4 font-semibold tracking-wide text-primary-500 shadow-glow transition-all duration-200 hover:bg-primary-500 hover:text-bg-surface hover:shadow-card-hover"
              >
                <Code2 className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                View Projects
              </Link>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center rounded-lg border-2 border-primary-500 px-8 py-4 font-semibold tracking-wide text-primary-500 shadow-glow transition-all duration-200 hover:bg-primary-500 hover:text-bg-surface hover:shadow-card-hover"
              >
                <ExternalLink className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                View Resume
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 bg-bg-surface/50 py-24 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-8 md:grid-cols-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="rounded-lg border border-neutral-700 bg-bg-elevated p-6 shadow-card transition-all duration-300 hover:border-primary-500/50 hover:shadow-card-hover">
                  <div className="mb-2 font-mono text-3xl font-bold text-primary-500 md:text-4xl">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-neutral-400">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Skills Section */}
      <section className="relative z-10 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 font-mono text-3xl font-bold text-primary-500 md:text-4xl">
              Featured Technologies
            </h2>
            <p className="mx-auto max-w-2xl text-neutral-400">
              A curated selection of the technologies I work with daily to build
              and deploy scalable systems
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6"
          >
            {featuredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group rounded-lg border border-neutral-700 bg-bg-elevated p-4 text-center transition-all duration-300 hover:border-primary-500/50"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="mx-auto mb-3 h-8 w-8 opacity-70 brightness-0 invert filter transition-opacity group-hover:opacity-100"
                />
                <div className="font-mono text-sm font-medium text-neutral-200">
                  {skill.name}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              to="/skills"
              className="hover:text-primary-400 group inline-flex items-center font-mono font-semibold text-primary-500"
            >
              <span className="mr-2">View all skills</span>
              <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 bg-gradient-to-b from-transparent to-bg-elevated/30 py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-primary-500/20 bg-bg-elevated p-12 shadow-glow"
          >
            <h2 className="mb-6 font-mono text-3xl font-bold text-primary-500 md:text-4xl">
              Ready to Deploy Your Vision?
            </h2>
            <p className="mb-8 text-xl leading-relaxed text-neutral-200">
              Let's build something amazing together. From infrastructure
              automation to full-stack development, I'm here to turn your ideas
              into production reality.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-primary-500 px-8 py-4 font-semibold text-bg-surface shadow-glow transition-all duration-200 hover:bg-primary-700 hover:shadow-card-hover"
              >
                Start a Project
              </Link>
              <a
                href="https://github.com/lavan-g/portfolio-devops"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border-2 border-neutral-600 px-8 py-4 font-semibold text-neutral-200 transition-all duration-200 hover:border-primary-500 hover:text-primary-500"
              >
                <Github className="mr-2 h-5 w-5" />
                View Code
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
