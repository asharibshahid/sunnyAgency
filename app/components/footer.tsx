// components/ExtremeFooter.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { 
  FiGithub, 
  FiTwitter, 
  FiLinkedin, 
  FiInstagram,
  FiHeart,
  FiEye,
  FiShare2,
  FiMessageCircle
} from 'react-icons/fi';
import { 
  RiReactjsLine,
  RiNextjsFill,
  RiTailwindCssFill
} from 'react-icons/ri';

const ExtremeFooter = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeReaction, setActiveReaction] = useState<string | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const socialIcons = [
    { icon: FiGithub, href: '#', color: 'hover:text-purple-400' },
    { icon: FiTwitter, href: '#', color: 'hover:text-blue-400' },
    { icon: FiLinkedin, href: '#', color: 'hover:text-cyan-400' },
    { icon: FiInstagram, href: '#', color: 'hover:text-pink-400' },
  ];

  const reactions = [
    { icon: FiHeart, label: 'love', color: 'text-red-400' },
    { icon: FiEye, label: 'seen', color: 'text-green-400' },
    { icon: FiShare2, label: 'share', color: 'text-blue-400' },
    { icon: FiMessageCircle, label: 'comment', color: 'text-yellow-400' },
  ];

  const techStack = [
    { icon: RiReactjsLine, name: 'React' },
    { icon: RiNextjsFill, name: 'Next.js' },
    { icon: RiTailwindCssFill, name: 'Tailwind' },
  ];

  const footerLinks = [
    { title: 'Product', links: ['Features', 'Pricing', 'Case Studies'] },
    { title: 'Company', links: ['About', 'Careers', 'Contact'] },
    { title: 'Resources', links: ['Blog', 'Docs', 'Support'] },
  ];

  return (
    <>
      {/* Animated Background Elements */}
      <div className="fixed bottom-0 left-0 w-full h-32 pointer-events-none">
        <motion.div
          className="absolute bottom-0 left-1/4 w-2 h-2 bg-purple-500 rounded-full blur-sm"
          animate={{
            y: [0, -20, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/3 w-1 h-1 bg-cyan-400 rounded-full blur-sm"
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      {/* Mouse Trailer Effect */}
      <motion.div
        className="fixed pointer-events-none z-50 w-4 h-4 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full blur-sm"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
      />

      <motion.footer
        ref={ref}
        className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 border-t border-gray-800 overflow-hidden"
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse" />
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="border-l border-gray-600 animate-pulse" />
            ))}
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Sunny Agency
              </motion.div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Crafting extraordinary digital experiences with cutting-edge technology and innovative design.
              </p>
              
              {/* Tech Stack */}
              <div className="flex space-x-4 mb-6">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                    whileHover={{ scale: 1.1, y: -2 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <tech.icon className="w-5 h-5" />
                    <span className="text-sm">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Links Sections */}
            {footerLinks.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + sectionIndex * 0.1 }}
              >
                <h3 className="text-white font-semibold mb-4 text-lg">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <motion.li key={link}>
                      <motion.a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-300 group flex items-center"
                        whileHover={{ x: 5 }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5 + sectionIndex * 0.1 + linkIndex * 0.05 }}
                      >
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {link}
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Social & Reactions Section */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
              {/* Social Icons */}
              <motion.div 
                className="flex space-x-6"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 }}
              >
                {socialIcons.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className={`text-gray-400 ${social.color} transition-all duration-300 relative group`}
                    whileHover={{ 
                      scale: 1.2,
                      y: -5,
                      rotate: [0, -10, 10, 0]
                    }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    <social.icon className="w-6 h-6" />
                    {/* Hover effect circle */}
                    <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-current opacity-0 group-hover:opacity-30 transition-all duration-300 scale-150" />
                  </motion.a>
                ))}
              </motion.div>

              {/* Reaction Icons */}
              <motion.div 
                className="flex space-x-4"
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.8 }}
              >
                {reactions.map((reaction, index) => (
                  <motion.button
                    key={reaction.label}
                    className={`relative p-3 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-purple-500/50 transition-all duration-300 group ${
                      activeReaction === reaction.label ? 'scale-110' : ''
                    }`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveReaction(reaction.label)}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      delay: 0.9 + index * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                  >
                    <reaction.icon 
                      className={`w-5 h-5 transition-colors ${
                        activeReaction === reaction.label 
                          ? reaction.color 
                          : 'text-gray-400 group-hover:text-white'
                      }`}
                    />
                    
                    {/* Particle effect on active */}
                    <AnimatePresence>
                      {activeReaction === reaction.label && (
                        <>
                          {[...Array(3)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute inset-0 rounded-2xl border-2 border-current opacity-50"
                              initial={{ scale: 1, opacity: 0.5 }}
                              animate={{ scale: 1.5, opacity: 0 }}
                              exit={{ scale: 1.5, opacity: 0 }}
                              transition={{ duration: 0.6, delay: i * 0.1 }}
                            />
                          ))}
                        </>
                      )}
                    </AnimatePresence>
                  </motion.button>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Bottom Bar */}
          <motion.div 
            className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1 }}
          >
            <motion.p
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              © 2025 SunnyAgency. All rights reserved.
            </motion.p>
            
            <motion.div 
              className="flex space-x-6 mt-4 md:mt-0"
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 1.1 }}
            >
              {['Privacy', 'Terms', 'Cookies'].map((item, index) => (
                <motion.a
                  key={item}
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.2 + index * 0.1 }}
                >
                  {item}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Floating particles */}
        <div className="absolute bottom-0 left-0 w-full h-1">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-500 rounded-full blur-sm"
              style={{
                left: `${20 + i * 15}%`,
              }}
              animate={{
                y: [0, -10, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </motion.footer>
    </>
  );
};

export default ExtremeFooter;