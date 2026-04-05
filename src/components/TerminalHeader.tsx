import { motion } from 'framer-motion';
import { Typewriter } from './Typewriter';

interface TerminalHeaderProps {
  command: string;
  description?: string;
}

export const TerminalHeader = ({
  command,
  description,
}: TerminalHeaderProps) => {
  return (
    <div className="relative overflow-hidden border-b border-neutral-700 bg-bg-elevated">
      {/* Scanline effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="scanline h-full bg-gradient-to-b from-transparent via-primary-500/20 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          {/* Command */}
          <div className="font-mono text-2xl lg:text-3xl">
            <span className="mr-3 text-accent-500">$</span>
            <Typewriter text={command} delay={30} />
            <span className="terminal-cursor ml-1" />
          </div>

          {/* Description */}
          {description && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="max-w-2xl text-sm text-neutral-400"
            >
              {description}
            </motion.p>
          )}

          {/* Terminal prompt symbols */}
          <div className="mt-6 flex items-center space-x-2">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-primary-500" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
