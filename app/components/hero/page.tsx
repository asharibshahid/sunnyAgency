// components/FuturisticHero.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { 
  
  FiPlay,
 
  FiCpu,
  FiCloud,
  
  FiZap,
  FiGlobe,
  
  FiServer
} from 'react-icons/fi';
import { 
  RiRobot2Line,
  RiBrainLine,
  
  RiRocket2Fill
} from 'react-icons/ri';

const FuturisticHero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeHologram, setActiveHologram] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Hologram data
  const holograms = [
    { icon: RiBrainLine, title: 'AI Solutions', color: 'from-purple-500 to-pink-500' },
    { icon: FiGlobe, title: 'Web 3.0', color: 'from-cyan-400 to-blue-500' },
    { icon: RiRobot2Line, title: 'Automation', color: 'from-green-400 to-emerald-500' },
    { icon: FiServer, title: 'Cloud Tech', color: 'from-orange-400 to-red-500' },
  ];

  // Floating particles system
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
    }> = [];

    // Create particles
    for (let i = 0; i < 150; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: `rgba(${Math.random() * 100 + 155}, ${Math.random() * 100 + 155}, 255, ${Math.random() * 0.3 + 0.1})`
      });
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around edges
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.y < 0) particle.y = canvas.height;

        // Mouse interaction
        const dx = particle.x - mousePosition.x;
        const dy = particle.y - mousePosition.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          const angle = Math.atan2(dy, dx);
          particle.x += Math.cos(angle) * 2;
          particle.y += Math.sin(angle) * 2;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Draw connections
        particles.forEach((particle2, index2) => {
          if (index !== index2) {
            const dx = particle.x - particle2.x;
            const dy = particle.y - particle2.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(100, 100, 255, ${0.1 * (1 - distance / 100)})`;
              ctx.lineWidth = 0.5;
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(particle2.x, particle2.y);
              ctx.stroke();
            }
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mousePosition]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Auto-rotate holograms
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveHologram((prev) => (prev + 1) % holograms.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* Main Grid System */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-l border-r border-gray-800" />
          ))}
        </div>
      </div>

      {/* Central Orb */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute inset-8 bg-gradient-to-r from-purple-400/10 to-cyan-400/10 rounded-full blur-2xl" />
      </motion.div>

      {/* Mouse Trailer */}
      <motion.div
        className="fixed pointer-events-none z-50 w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full blur-sm mix-blend-screen"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        transition={{ type: "spring", damping: 15, stiffness: 200, mass: 0.1 }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full items-center py-20">
          
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center px-4 py-2 rounded-full bg-gray-900/50 backdrop-blur-sm border border-gray-700/50"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse" />
              <span className="text-cyan-400 text-sm font-medium">Welcome to Future Tech</span>
              <FiZap className="w-4 h-4 text-cyan-400 ml-2" />
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                SHAPE
              </span>
              <br />
              <motion.span
                className="text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                THE FUTURE
              </motion.span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="text-xl md:text-2xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              We build <span className="text-cyan-400 font-semibold">next generation digital experiences</span> 
              {' '}powered by AI, blockchain, and quantum inspired computing for the web of tomorrow.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.button
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-2xl font-bold text-lg overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative z-10 flex items-center justify-center gap-3">
                  <span>Launch Project</span>
                  <RiRocket2Fill className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                
                {/* Border glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-500 blur-sm opacity-50 group-hover:opacity-75 transition-opacity" />
              </motion.button>

              <motion.button
                className="group relative px-8 py-4 bg-gray-900/50 backdrop-blur-sm text-white rounded-2xl font-bold text-lg border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsPlaying(!isPlaying)}
              >
                <div className="flex items-center justify-center gap-3">
                  <FiPlay className="w-5 h-5 group-hover:text-cyan-400 transition-colors" />
                  <span>Watch Demo</span>
                </div>
              </motion.button>
            </motion.div>

            {/* Tech Stack Indicators */}
            <motion.div
              className="flex items-center gap-6 text-sm text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>AI Powered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                <span>Blockchain Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                <span>Quantum Safe</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Holographic Display */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Main Hologram Container */}
            <div className="relative h-96 lg:h-[500px]">
              <AnimatePresence mode="wait">
                {holograms.map((hologram, index) => (
                  activeHologram === index && (
                    <motion.div
                      key={index}
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0, scale: 0.8, rotateY: 180 }}
                      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                      exit={{ opacity: 0, scale: 1.2, rotateY: -180 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                      {/* Hologram Base */}
                      <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                        {/* Outer Glow */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${hologram.color} rounded-full blur-2xl opacity-20 animate-pulse`} />
                        
                        {/* Main Circle */}
                        <div className="absolute inset-4 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-full backdrop-blur-sm border border-gray-700/50" />
                        
                        {/* Animated Rings */}
                        <motion.div
                          className={`absolute inset-0 border-2 ${hologram.color.split(' ')[0]} rounded-full opacity-30`}
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.6, 0.3],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                        
                        <motion.div
                          className={`absolute inset-4 border-2 ${hologram.color.split(' ')[2]} rounded-full opacity-20`}
                          animate={{
                            scale: [1.1, 0.9, 1.1],
                            opacity: [0.2, 0.4, 0.2],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                          }}
                        />

                        {/* Icon */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.div
                            className={`p-6 rounded-2xl bg-gradient-to-r ${hologram.color} bg-clip-text text-transparent`}
                            animate={{
                              y: [0, -10, 0],
                              rotateZ: [0, 5, -5, 0],
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            <hologram.icon className="w-16 h-16 lg:w-20 lg:h-20" />
                          </motion.div>
                        </div>

                        {/* Floating Particles around hologram */}
                        {[...Array(8)].map((_, i) => (
                          <motion.div
                            key={i}
                            className={`absolute w-2 h-2 bg-gradient-to-r ${hologram.color} rounded-full`}
                            style={{
                              left: `${50 + 40 * Math.cos((i * Math.PI) / 4)}%`,
                              top: `${50 + 40 * Math.sin((i * Math.PI) / 4)}%`,
                            }}
                            animate={{
                              scale: [0, 1, 0],
                              opacity: [0, 1, 0],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: i * 0.2,
                            }}
                          />
                        ))}

                        {/* Title */}
                        <motion.div
                          className="absolute -bottom-4 left-1/2 transform -translate-x-1/2"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                        >
                          <h3 className="text-2xl font-bold text-white text-center bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text ">
                            {hologram.title}
                          </h3>
                        </motion.div>
                      </div>
                    </motion.div>
                  )
                ))}
              </AnimatePresence>

              {/* Navigation Dots */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-3">
                {holograms.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeHologram === index 
                        ? 'bg-cyan-400 scale-125' 
                        : 'bg-gray-600 hover:bg-gray-400'
                    }`}
                    onClick={() => setActiveHologram(index)}
                  />
                ))}
              </div>
            </div>

            {/* Floating Tech Elements */}
            <motion.div
              className="absolute -top-4 -right-4 p-4 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-700/50"
              animate={{
                y: [0, -10, 0],
                rotateZ: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <FiCpu className="w-6 h-6 text-cyan-400" />
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 p-4 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-700/50"
              animate={{
                y: [0, 10, 0],
                rotateZ: [0, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            >
              <FiCloud className="w-6 h-6 text-purple-400" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.div
            className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>

      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-pink-500/10 rounded-full blur-2xl animate-pulse delay-500" />
    </div>
  );
};

export default FuturisticHero;