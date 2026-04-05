import { useState } from 'react';
import { motion } from 'framer-motion';
import { TerminalHeader } from '../components/TerminalHeader';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { PROJECTS_BY_CATEGORY } from '../data/portfolio';

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    {
      id: 'all',
      label: 'All Projects',
      count: PROJECTS_BY_CATEGORY.all.length,
    },
    {
      id: 'devops',
      label: 'DevOps',
      count: PROJECTS_BY_CATEGORY.devops.length,
    },
    {
      id: 'fullstack',
      label: 'Full-Stack',
      count: PROJECTS_BY_CATEGORY.fullstack.length,
    },
  ];

  const getProjects = () => {
    return (
      PROJECTS_BY_CATEGORY[activeFilter as keyof typeof PROJECTS_BY_CATEGORY] ||
      PROJECTS_BY_CATEGORY.all
    );
  };

  return (
    <div className="min-h-screen bg-bg-page">
      {/* Terminal Header */}
      <TerminalHeader
        command="docker ps -a"
        description="Listing deployed projects and applications"
      />

      {/* Filter Tabs */}
      <section className="bg-bg-surface/30 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center space-x-2 rounded-lg px-6 py-3 font-mono font-medium transition-all duration-200 ${
                  activeFilter === filter.id
                    ? 'bg-primary-500 text-bg-surface shadow-glow'
                    : 'border border-neutral-700 bg-bg-elevated text-neutral-200 hover:border-primary-500/50 hover:text-primary-500'
                }`}
              >
                <Filter size={16} />
                <span>{filter.label}</span>
                <span
                  className={`rounded-full px-2 py-1 text-xs ${
                    activeFilter === filter.id
                      ? 'bg-bg-surface text-primary-500'
                      : 'bg-neutral-700 text-neutral-400'
                  }`}
                >
                  {filter.count}
                </span>
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {getProjects().map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group overflow-hidden rounded-xl border border-neutral-700 bg-bg-surface shadow-card transition-all duration-300 hover:border-primary-500/50 hover:shadow-card-hover"
              >
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-surface via-transparent to-transparent opacity-60" />

                  {/* Project Type Badge */}
                  <div className="absolute right-4 top-4">
                    <span
                      className={`rounded-full px-3 py-1 font-mono text-xs font-medium ${
                        project.category === 'devops'
                          ? 'border border-green-500/30 bg-green-500/20 text-green-500'
                          : 'border border-blue-500/30 bg-blue-500/20 text-blue-500'
                      }`}
                    >
                      {project.category === 'devops' ? 'DevOps' : 'Full-Stack'}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="space-y-4 p-6">
                  {/* Title */}
                  <h3 className="group-hover:text-primary-400 font-mono text-xl font-bold text-primary-500 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="line-clamp-3 text-sm leading-relaxed text-neutral-200">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded border border-neutral-700 bg-neutral-800 px-2 py-1 text-xs text-neutral-300 transition-colors hover:border-primary-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="rounded border border-neutral-700 bg-neutral-800 px-2 py-1 text-xs text-neutral-400">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center space-x-4 pt-4">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn flex items-center space-x-2 text-neutral-400 transition-colors hover:text-primary-500"
                    >
                      <Github
                        size={16}
                        className="transition-transform group-hover/btn:scale-110"
                      />
                      <span className="font-mono text-sm">Code</span>
                    </a>

                    {project.websiteLink && (
                      <a
                        href={project.websiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn flex items-center space-x-2 text-neutral-400 transition-colors hover:text-primary-500"
                      >
                        <ExternalLink
                          size={16}
                          className="transition-transform group-hover/btn:scale-110"
                        />
                        <span className="font-mono text-sm">Live</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {getProjects().length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-24 text-center"
            >
              <div className="mb-4 font-mono text-4xl text-neutral-600">
                404
              </div>
              <div className="text-neutral-400">
                No projects found in this category.
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Terminal-style project summary */}
      <section className="bg-bg-elevated py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-xl border border-neutral-700 bg-bg-surface p-8 font-mono"
          >
            <div className="space-y-4">
              <div className="text-accent-500">$ cat project_summary.txt</div>

              <div className="space-y-2 text-neutral-200">
                <div className="flex justify-between">
                  <span>Total Projects:</span>
                  <span className="text-primary-500">
                    {PROJECTS_BY_CATEGORY.all.length}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>DevOps Projects:</span>
                  <span className="text-primary-500">
                    {PROJECTS_BY_CATEGORY.devops.length}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Full-Stack Projects:</span>
                  <span className="text-primary-500">
                    {PROJECTS_BY_CATEGORY.fullstack.length}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Technologies Used:</span>
                  <span className="text-primary-500">
                    {
                      new Set(
                        PROJECTS_BY_CATEGORY.all.flatMap((p) => p.technologies),
                      ).size
                    }
                    +
                  </span>
                </div>
              </div>

              <div className="border-t border-neutral-700 pt-4 text-sm text-neutral-400">
                <div className="flex items-center space-x-2">
                  <span className="text-accent-500">$</span>
                  <span>
                    echo "Each project demonstrates real-world implementation of
                    cloud-native architecture and modern development practices"
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-primary-500/20 bg-gradient-to-br from-bg-elevated to-bg-surface p-12 shadow-glow"
          >
            <h2 className="mb-6 font-mono text-3xl font-bold text-primary-500 md:text-4xl">
              Interested in Collaboration?
            </h2>
            <p className="mb-8 text-xl leading-relaxed text-neutral-200">
              These projects showcase my expertise in DevOps and full-stack
              development. Let's discuss how we can work together on your next
              project.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="https://github.com/g-lavan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-primary-500 px-8 py-4 font-semibold text-bg-surface shadow-glow transition-all duration-200 hover:bg-primary-700 hover:shadow-card-hover"
              >
                <Github className="mr-2 h-5 w-5" />
                View All Projects
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border-2 border-neutral-600 px-8 py-4 font-semibold text-neutral-200 transition-all duration-200 hover:border-primary-500 hover:text-primary-500"
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                Start a Project
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
