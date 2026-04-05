import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-neutral-700 bg-bg-page/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="group flex items-center space-x-2">
              <div className="font-mono text-xl font-bold tracking-wide text-primary-500">
                <span className="text-accent-500">&gt;</span>
                <span className="transition-colors duration-200 group-hover:text-primary-500">
                  _
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center space-x-8 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="group relative px-3 py-2 text-sm font-medium transition-all duration-200"
                >
                  <span
                    className={`font-mono ${
                      isActive(item.path)
                        ? 'text-primary-500'
                        : 'text-neutral-200 group-hover:text-primary-500'
                    }`}
                  >
                    {item.label}
                  </span>
                  {isActive(item.path) && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500 shadow-glow"
                      initial={false}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="rounded-md p-2 text-neutral-200 transition-colors hover:text-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t border-neutral-700 bg-bg-elevated md:hidden"
          >
            <div className="space-y-1 px-4 py-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between rounded-md px-3 py-3 text-base font-medium transition-all duration-200 ${
                    isActive(item.path)
                      ? 'border-l-2 border-primary-500 bg-bg-surface text-primary-500'
                      : 'text-neutral-200 hover:bg-bg-surface hover:text-primary-500'
                  }`}
                >
                  <span className="font-mono">
                    $ {item.label.toLowerCase()}
                  </span>
                  <ChevronRight
                    size={16}
                    className={`transition-transform ${
                      isActive(item.path) ? 'text-primary-500' : ''
                    }`}
                  />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </>
  );
};
