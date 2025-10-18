// components/FuturisticNavbar.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiMenu, 
  FiX, 
  FiChevronDown,
  FiStar,
  FiZap,
  FiCloud,
  FiCpu
} from 'react-icons/fi';
import { RiRocket2Fill, RiBrainLine } from 'react-icons/ri';

const FuturisticNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const navItems = [
    { 
      name: 'Services', 
      path: '/components/services',
      icon: RiBrainLine
    },
    { 
      name: 'Portfolio', 
      path: '/components/portfolio',
      icon: FiStar
    },
    { 
      name: 'About Us', 
      path: '/components/about',
      icon: FiCloud
    },
    { 
      name: 'Contact', 
      path: '/components/contact',
      icon: FiZap
    },
  ];

  return (
    <>
      {/* Mouse Trailer */}
      <motion.div
        className="fixed pointer-events-none z-50 w-6 h-6 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full blur-sm mix-blend-screen"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 200, mass: 0.5 }}
      />

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
          scrolled 
            ? 'w-11/12 backdrop-blur-2xl bg-black/20 border border-white/10' 
            : 'w-10/12 backdrop-blur-md bg-transparent'
        } rounded-2xl`}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          {/* Gradient Orbs */}
          <motion.div
            className="absolute -top-20 -left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-12 gap-4 h-full">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="border-l border-r border-white/5" />
              ))}
            </div>
          </div>
        </div>

        {/* Main Nav Content */}
        <div className="relative z-10">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between py-4">
              
              {/* Logo */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-3 group"
              >
                <Link href="/" className="relative">
                  <div className="relative">
                    <Image 
                      src="/logo.jpg" 
                      alt="Logo" 
                      width={40} 
                      height={40} 
                      className="transform group-hover:scale-110 transition-transform duration-300 filter brightness-0 invert"
                    />
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-lg blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10" />
                  </div>
                  
                  {/* Animated Border */}
                  <motion.div
                    className="absolute -inset-2 border-2 border-transparent rounded-lg"
                    animate={{
                      borderColor: ['rgba(139,92,246,0)', 'rgba(139,92,246,0.5)', 'rgba(139,92,246,0)'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </Link>

                {/* Logo Text */}
                <motion.span 
                  className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Sunny Agency
                </motion.span>
              </motion.div>

              {/* Desktop Menu Items */}
              <div className="hidden lg:flex items-center space-x-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    className="relative"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    onMouseEnter={() => setHoveredItem(item.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <Link
                      href={item.path}
                      className={`relative flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 group ${
                        pathname === item.path 
                          ? 'text-white bg-white/10' 
                          : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                      
                      {/* Active Indicator */}
                      {pathname === item.path && (
                        <motion.div
                          className="absolute inset-0 border border-white/20 rounded-xl bg-gradient-to-r from-purple-500/10 to-cyan-500/10"
                          layoutId="activeNavItem"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </Link>

                    {/* Hover Effect */}
                    <AnimatePresence>
                      {hoveredItem === item.name && (
                        <motion.div
                          className="absolute inset-0 border border-purple-400/30 rounded-xl bg-purple-500/10 backdrop-blur-sm"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>

              {/* Right Side Buttons */}
              <div className="hidden lg:flex items-center space-x-3">
                {/* Sign In Button */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Link
                    href="/signin"
                    className="relative px-6 py-3 text-gray-300 font-medium hover:text-white transition-colors duration-300 group"
                  >
                    <span className="relative z-10">Sign in</span>
                    {/* Hover Underline */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-cyan-400 group-hover:w-4/5 transition-all duration-300" />
                  </Link>
                </motion.div>
                
                {/* Schedule a Demo Button */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <Link
                    href="/demo"
                    className="relative group px-8 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-xl font-medium overflow-hidden"
                  >
                    <div className="relative z-10 flex items-center space-x-2">
                      <RiRocket2Fill className="w-4 h-4" />
                      <span>Schedule Demo</span>
                    </div>
                    
                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    
                    {/* Border Glow */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 blur-sm opacity-50 group-hover:opacity-75 transition-opacity -z-10" />
                  </Link>
                </motion.div>
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden relative p-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative w-6 h-6">
                  <motion.span
                    className="absolute top-1 left-0 w-6 h-0.5 bg-white rounded-full"
                    animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="absolute top-3 left-0 w-6 h-0.5 bg-white rounded-full"
                    animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="absolute top-5 left-0 w-6 h-0.5 bg-white rounded-full"
                    animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                
                {/* Button Glow */}
                <div className="absolute inset-0 rounded-xl bg-cyan-500/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="lg:hidden absolute top-full left-0 right-0 mt-4 bg-black/80 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Mobile Menu Background Effects */}
              <div className="absolute inset-0">
                <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl" />
              </div>

              <div className="relative z-10 p-6 space-y-2">
                {/* Navigation Links */}
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center space-x-3 py-4 px-4 rounded-xl transition-all duration-300 group ${
                        pathname === item.path
                          ? 'bg-white/10 text-white border border-white/20'
                          : 'text-gray-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.name}</span>
                      
                      {/* Hover Arrow */}
                      <FiChevronDown className="w-4 h-4 ml-auto transform group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </motion.div>
                ))}
                
                {/* Divider */}
                <motion.div 
                  className="border-t border-white/10 my-4"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.4 }}
                />
                
                {/* Mobile Buttons */}
                <motion.div 
                  className="space-y-3 pt-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Link
                    href="/signin"
                    onClick={() => setIsOpen(false)}
                    className="block w-full py-4 text-center text-gray-300 font-medium hover:bg-white/5 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20"
                  >
                    Sign in
                  </Link>
                  <Link
                    href="/demo"
                    onClick={() => setIsOpen(false)}
                    className="block w-full py-4 text-center bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-xl font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
                  >
                    <span className="relative z-10">Schedule a Demo</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full blur-sm"
              style={{
                left: `${20 + i * 30}%`,
                top: '20%',
              }}
              animate={{
                y: [0, -10, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                delay: i * 1,
              }}
            />
          ))}
        </div>
      </motion.nav>

      {/* Background Blur Overlay when mobile menu is open */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default FuturisticNavbar;