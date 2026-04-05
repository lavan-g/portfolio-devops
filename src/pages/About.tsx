import { motion } from 'framer-motion';
import { TerminalHeader } from '../components/TerminalHeader';
import { Typewriter } from '../components/Typewriter';
import { Calendar, MapPin, Code, Zap } from 'lucide-react';

export const About = () => {
  const timeline = [
    {
      year: 'Aug 2025 - Present',
      title: 'DevOps Engineer',
      company: 'FSADP',
      icon: Code,
      bullets: [
        'Architected, deployed, and managed scalable CI/CD pipelines for Next.js, React, Node.js, and Java (Spring Boot) applications using GitHub Actions and Jenkins.',
        'Designed Jenkins pipelines for Java-based applications including build, test, artifact versioning, and Docker image creation, enabling reliable and repeatable deployments.',
        'Containerized diverse application stacks (JavaScript & Java) using Docker, ensuring environment consistency across development, staging, and production.',
        'Implemented Disaster Recovery (DR) strategies, including automated database and artifact backups, versioned Docker images, and rollback mechanisms to minimize downtime during failures.',
        'Followed industry-standard DevOps practices such as infrastructure versioning, secure secret management, environment isolation, routine backup validation and ensuring 99.9% application uptime through proactive monitoring and pipeline validations.',
      ],
    },
    {
      year: 'Feb 2025 - July 2025',
      title: 'Customer Success Engineer',
      company: 'dflow.sh (Internship)',
      icon: Code,
      bullets: [
        'Resolved complex deployment and configuration issues for customers using dFlow.sh self-hosted PaaS, focusing on Docker-based containerization and Node.js/React environments.',
        'Acted as the primary technical point of contact for production-level issues, maintain SLAs, reducing Mean Time to Recovery (MTTR) by providing real-time log analysis and root-cause diagnostics.',
        'Provided daily analytics and user metrics to improve the product using tools like Plausible, Metabase and Backoffice admin panel.',
      ],
    },
    {
      year: '2020 - 2024',
      title: 'Electronics And Communication Graduate',
      company: 'Anil Neerukonda Institute of Technology and Sciences',
      description: "Bachelor's degree with focus on software engineering.",
      icon: Calendar,
    },
  ];

  const philosophyPoints = [
    {
      icon: Zap,
      title: 'Automation First',
      description:
        'Every manual process should be automated, every deployment should be reproducible.',
    },
    {
      icon: Code,
      title: 'Infrastructure as Code',
      description:
        'Treat infrastructure with the same discipline as application code.',
    },
    {
      icon: MapPin,
      title: 'Cloud Native',
      description:
        'Build for the cloud from day one, embrace containerization and orchestration.',
    },
  ];

  return (
    <div className="min-h-screen bg-bg-page">
      {/* Terminal Header */}
      <TerminalHeader
        command="cat about.txt"
        description="Displaying professional background and technical philosophy"
      />

      {/* Bio Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-12">
            {/* Bio Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8 lg:col-span-7"
            >
              <div className="rounded-xl border border-neutral-700 bg-bg-surface p-8 shadow-card">
                <div className="mb-6 font-mono text-lg">
                  <span className="text-accent-500">$</span>
                  <span className="text-primary-500"> cat</span>
                  <span className="text-neutral-400"> bio.txt</span>
                </div>
                <div className="space-y-4 leading-relaxed text-neutral-200">
                  <Typewriter
                    text="Hello, I'm Lavan Gongada, and I turn code into production reality."
                    delay={30}
                    className="mb-4 block font-semibold text-primary-500"
                  />
                  <p>
                    I design, automate, and deploy systems that turn code into
                    production-grade reality. My journey began with full-stack
                    development—building web apps with Java, React, and Node.js.
                  </p>
                  <p>
                    Over time, that foundation evolved into a passion for DevOps
                    and Cloud Engineering, where I now focus on crafting
                    scalable infrastructure, clean CI/CD pipelines, and
                    resilient deployments.
                  </p>
                  <p>
                    I work across AWS and Azure, orchestrate containers with
                    Docker and Kubernetes, and define infrastructure with
                    Terraform and automation scripts. Behind the command line,
                    I'm equally comfortable in version control and workflow
                    automation, using Git, GitHub, and GitLab CI/CD to bridge
                    collaboration and delivery.
                  </p>
                  <p className="font-medium text-primary-500">
                    For me, DevOps isn't just about speed—it's about precision,
                    repeatability, and creating systems that empower developers
                    to ship confidently and innovate faster.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6 lg:col-span-5"
            >
              <div className="rounded-xl border border-neutral-700 bg-bg-elevated p-6">
                <h3 className="mb-4 font-mono text-lg font-semibold text-primary-500">
                  Quick Stats
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">Experience</span>
                    <span className="font-mono text-primary-500">1+ years</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">Cloud Platforms</span>
                    <span className="font-mono text-primary-500">AWS</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">Projects</span>
                    <span className="font-mono text-primary-500">
                      7+ deployed
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">Technologies</span>
                    <span className="font-mono text-primary-500">
                      10+ mastered
                    </span>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-neutral-700 bg-bg-elevated p-6">
                <h3 className="mb-4 font-mono text-lg font-semibold text-primary-500">
                  Specializations
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Cloud Architecture',
                    'CI/CD Pipelines',
                    'Infrastructure as Code',
                    'Container Orchestration',
                    'Microservices',
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-neutral-700 bg-neutral-800 px-3 py-1 text-sm text-neutral-200 transition-colors hover:border-primary-500/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-bg-surface/30 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 font-mono text-3xl font-bold text-primary-500 md:text-4xl">
              Career Timeline
            </h2>
            <p className="mx-auto max-w-2xl text-neutral-400">
              My journey from full-stack development to DevOps engineering
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute bottom-0 left-4 top-0 w-0.5 bg-gradient-to-b from-primary-500 via-primary-700 to-transparent md:left-1/2" />

            <div className="space-y-12">
              {timeline.map((item, index) => {
                const IconComponent = item.icon;
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className={`relative flex items-center ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-4 z-10 flex h-8 w-8 transform items-center justify-center rounded-full border-4 border-bg-page bg-primary-500 shadow-glow md:left-1/2 md:-translate-x-1/2">
                      <IconComponent size={16} className="text-bg-surface" />
                    </div>

                    {/* Content */}
                    <div
                      className={`ml-16 md:ml-0 md:w-1/2 ${
                        isEven ? 'md:pr-12' : 'md:pl-12'
                      }`}
                    >
                      <div className="rounded-lg border border-neutral-700 bg-bg-elevated p-6 shadow-card transition-colors hover:border-primary-500/50">
                        <div className="mb-2 font-mono text-sm text-accent-500">
                          {item.year}
                        </div>
                        <h3 className="mb-1 text-xl font-semibold text-neutral-200">
                          {item.title}
                        </h3>
                        <div className="mb-3 font-medium text-primary-500">
                          {item.company}
                        </div>
                        {'bullets' in item && item.bullets ? (
                          <ul className="list-inside list-disc space-y-2 text-sm leading-relaxed text-neutral-400">
                            {item.bullets.map((bullet, i) => (
                              <li key={i}>{bullet}</li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-sm leading-relaxed text-neutral-400">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 font-mono text-3xl font-bold text-primary-500 md:text-4xl">
              Tech Philosophy
            </h2>
            <p className="mx-auto max-w-2xl text-neutral-400">
              Core principles that guide my approach to software engineering and
              DevOps
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {philosophyPoints.map((point, index) => {
              const IconComponent = point.icon;
              return (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group rounded-xl border border-neutral-700 bg-bg-elevated p-8 text-center transition-all duration-300 hover:border-primary-500/50"
                >
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-500/10 transition-colors group-hover:bg-primary-500/20">
                    <IconComponent size={32} className="text-primary-500" />
                  </div>
                  <h3 className="mb-4 text-xl font-semibold text-neutral-200">
                    {point.title}
                  </h3>
                  <p className="leading-relaxed text-neutral-400">
                    {point.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
