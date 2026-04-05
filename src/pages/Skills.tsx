import { useState } from 'react';
import { motion } from 'framer-motion';
import { TerminalHeader } from '../components/TerminalHeader';
import { Typewriter } from '../components/Typewriter';
import {
  Cloud,
  Container,
  Code,
  Database,
  Terminal as TerminalIcon,
} from 'lucide-react';
import { SKILLS_BY_CATEGORY } from '../data/portfolio';

export const Skills = () => {
  const [terminalOutput, setTerminalOutput] = useState<string[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const categories = [
    {
      id: 'cloud',
      title: 'Cloud Platforms',
      icon: Cloud,
      skills: SKILLS_BY_CATEGORY.cloud,
      color: 'text-blue-500',
    },
    {
      id: 'containers',
      title: 'Container & Orchestration',
      icon: Container,
      skills: SKILLS_BY_CATEGORY.containers,
      color: 'text-blue-400',
    },
    {
      id: 'infrastructure',
      title: 'Infrastructure as Code',
      icon: TerminalIcon,
      skills: SKILLS_BY_CATEGORY.infrastructure,
      color: 'text-purple-500',
    },
    {
      id: 'devops',
      title: 'DevOps & Automation',
      icon: Code,
      skills: SKILLS_BY_CATEGORY.devops,
      color: 'text-green-500',
    },
    {
      id: 'development',
      title: 'Development Stack',
      icon: Code,
      skills: SKILLS_BY_CATEGORY.development,
      color: 'text-orange-500',
    },
    {
      id: 'database',
      title: 'Databases',
      icon: Database,
      skills: SKILLS_BY_CATEGORY.database,
      color: 'text-red-500',
    },
  ];

  const commands = {
    help: [
      'Available commands:',
      '  ls <category>     - List skills in a category',
      '  cat <skill>       - Show skill details',
      '  levels            - Show proficiency levels',
      '  clear             - Clear terminal',
      '  help              - Show this help',
    ],
    levels: [
      'Proficiency Levels:',
      '  Beginner (30%)     - Basic understanding',
      '  Intermediate (60%) - Practical experience',
      '  Advanced (85%)     - Production usage',
      '  Expert (100%)      - Deep expertise',
    ],
    clear: () => setTerminalOutput([]),
    default: (input: string) => [
      `Command not found: ${input}`,
      'Type "help" for available commands.',
    ],
  };

  const executeCommand = (input: string) => {
    setIsProcessing(true);

    const cmd = input.toLowerCase().trim();
    const args = cmd.split(' ');
    const mainCmd = args[0];

    setTimeout(() => {
      let output: string[] = [];

      switch (mainCmd) {
        case 'help':
          output = commands.help;
          break;
        case 'levels':
          output = commands.levels;
          break;
        case 'clear':
          commands.clear();
          setIsProcessing(false);
          return;
        case 'ls':
          const category = args[1];
          if (category && categories.find((c) => c.id === category)) {
            const cat = categories.find((c) => c.id === category)!;
            output = [
              `${cat.title}:`,
              ...cat.skills.map((skill) => `  ${skill.name} (${skill.level}%)`),
            ];
          } else {
            output = [
              'Available categories:',
              ...categories.map((cat) => `  ${cat.id} - ${cat.title}`),
            ];
          }
          break;
        case 'cat':
          const skillName = args.slice(1).join(' ');
          const skill =
            SKILLS_BY_CATEGORY.cloud.find(
              (s) => s.name.toLowerCase() === skillName,
            ) ||
            SKILLS_BY_CATEGORY.containers.find(
              (s) => s.name.toLowerCase() === skillName,
            ) ||
            SKILLS_BY_CATEGORY.infrastructure.find(
              (s) => s.name.toLowerCase() === skillName,
            ) ||
            SKILLS_BY_CATEGORY.devops.find(
              (s) => s.name.toLowerCase() === skillName,
            ) ||
            SKILLS_BY_CATEGORY.development.find(
              (s) => s.name.toLowerCase() === skillName,
            ) ||
            SKILLS_BY_CATEGORY.database.find(
              (s) => s.name.toLowerCase() === skillName,
            );

          if (skill) {
            output = [
              `Skill: ${skill.name}`,
              `Category: ${skill.category}`,
              `Proficiency: ${skill.level}%`,
              '',
              `Icon: ${skill.icon}`,
            ];
          } else {
            output = [`Skill "${skillName}" not found`];
          }
          break;
        default:
          output = commands.default(cmd);
      }

      setTerminalOutput((prev) => [...prev, `$ ${input}`, ...output, '']);
      setCurrentInput('');
      setIsProcessing(false);
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && currentInput.trim() && !isProcessing) {
      executeCommand(currentInput);
    }
  };

  return (
    <div className="min-h-screen bg-bg-page">
      {/* Terminal Header */}
      <TerminalHeader
        command="ls -la skills/"
        description="Exploring technical expertise across cloud, development, and DevOps domains"
      />

      {/* Skills Categories */}
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
              Technical Expertise
            </h2>
            <p className="mx-auto max-w-2xl text-neutral-400">
              Comprehensive skill set spanning cloud infrastructure,
              development, and DevOps practices
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2">
            {categories.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="overflow-hidden rounded-xl border border-neutral-700 bg-bg-surface"
                >
                  {/* Category Header */}
                  <div className="border-b border-neutral-700 bg-bg-elevated p-6">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`rounded-lg bg-neutral-800 p-2 ${category.color}`}
                      >
                        <IconComponent size={24} />
                      </div>
                      <h3 className="font-mono text-xl font-semibold text-primary-500">
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="p-6">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: categoryIndex * 0.1 + skillIndex * 0.05,
                            duration: 0.4,
                          }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.02 }}
                          className="group rounded-lg border border-neutral-700 bg-bg-elevated p-4 transition-all duration-300 hover:border-primary-500/50"
                        >
                          <div className="mb-3 flex items-center space-x-3">
                            <img
                              src={skill.icon}
                              alt={skill.name}
                              className="h-8 w-8 opacity-70 brightness-0 invert filter transition-opacity group-hover:opacity-100"
                            />
                            <span className="font-mono font-medium text-neutral-200">
                              {skill.name}
                            </span>
                          </div>

                          {/* Proficiency Bar */}
                          <div className="space-y-2">
                            <div className="flex justify-between text-xs">
                              <span className="text-neutral-400">
                                Proficiency
                              </span>
                              <span className="font-mono text-primary-500">
                                {skill.level}%
                              </span>
                            </div>
                            <div className="h-2 w-full rounded-full bg-neutral-700">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                transition={{
                                  delay:
                                    categoryIndex * 0.1 +
                                    skillIndex * 0.05 +
                                    0.3,
                                  duration: 0.8,
                                }}
                                viewport={{ once: true }}
                                className="h-2 rounded-full bg-gradient-to-r from-primary-500 to-primary-700"
                              />
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Terminal */}
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
              Interactive Skill Explorer
            </h2>
            <p className="mx-auto max-w-2xl text-neutral-400">
              Use terminal commands to explore my skills in detail
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl"
          >
            <div className="overflow-hidden rounded-xl border border-neutral-700 bg-bg-elevated shadow-card">
              {/* Terminal Header */}
              <div className="flex items-center justify-between border-b border-neutral-700 bg-bg-surface p-4">
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-primary-500" />
                </div>
                <span className="font-mono text-sm text-neutral-400">
                  skills-terminal
                </span>
              </div>

              {/* Terminal Content */}
              <div className="h-96 overflow-y-auto bg-bg-page p-6 font-mono text-sm">
                {terminalOutput.length === 0 && (
                  <div className="text-neutral-400">
                    <Typewriter
                      text="Welcome to Skills Explorer. Type 'help' to see available commands."
                      delay={30}
                      className="block"
                    />
                    <div className="mt-4">
                      <span className="text-accent-500">$</span>
                      <span className="ml-2 text-neutral-400">
                        ready for input...
                      </span>
                    </div>
                  </div>
                )}

                {terminalOutput.map((line, index) => (
                  <div
                    key={index}
                    className={`${
                      line.startsWith('$')
                        ? 'text-accent-500'
                        : line.includes('Command not found')
                          ? 'text-red-500'
                          : 'text-neutral-200'
                    }`}
                  >
                    {line}
                  </div>
                ))}

                {isProcessing && (
                  <div className="flex items-center space-x-2">
                    <span className="text-accent-500">$</span>
                    <div className="flex space-x-1">
                      <div className="h-2 w-2 animate-bounce rounded-full bg-primary-500" />
                      <div
                        className="h-2 w-2 animate-bounce rounded-full bg-primary-500"
                        style={{ animationDelay: '0.1s' }}
                      />
                      <div
                        className="h-2 w-2 animate-bounce rounded-full bg-primary-500"
                        style={{ animationDelay: '0.2s' }}
                      />
                    </div>
                  </div>
                )}

                {/* Input Line */}
                <div className="flex items-center">
                  <span className="mr-2 text-accent-500">$</span>
                  <input
                    type="text"
                    value={currentInput}
                    onChange={(e) => setCurrentInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="flex-1 bg-transparent font-mono text-primary-500 placeholder-neutral-600 outline-none"
                    placeholder={
                      isProcessing ? 'processing...' : 'enter command...'
                    }
                    disabled={isProcessing}
                  />
                  {!isProcessing && (
                    <div className="ml-1 h-5 w-2 animate-pulse bg-primary-500" />
                  )}
                </div>
              </div>
            </div>

            {/* Quick Commands */}
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                { cmd: 'help', desc: 'Show commands' },
                { cmd: 'ls cloud', desc: 'Cloud skills' },
                { cmd: 'levels', desc: 'Proficiency guide' },
                { cmd: 'cat Docker', desc: 'Skill details' },
              ].map((item) => (
                <button
                  key={item.cmd}
                  onClick={() => setCurrentInput(item.cmd)}
                  className="group rounded-lg border border-neutral-700 bg-bg-elevated p-3 text-left transition-colors hover:border-primary-500/50"
                >
                  <div className="group-hover:text-primary-400 font-mono text-sm text-primary-500">
                    $ {item.cmd}
                  </div>
                  <div className="mt-1 text-xs text-neutral-400">
                    {item.desc}
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
