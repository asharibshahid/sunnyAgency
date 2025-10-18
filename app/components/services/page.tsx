// app/services/page.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useInView, useTransform, useScroll, AnimatePresence } from 'framer-motion';

const ServicesPage = () => {
  const [activeService, setActiveService] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  
  const backgroundOpacity = useTransform(scrollYProgress, [0, 1], [0.1, 0.3]);

  const services = [
    {
      id: 1,
      title: "WEB DEVELOPMENT",
      description: "Next-gen web applications powered by AI and blockchain technology for unparalleled performance.",
      tech: ["Next.js 15", "Web3", "AI Integration", "Edge Computing"],
      gradient: "from-cyan-400 to-blue-500",
      bgGradient: "from-cyan-500/10 to-blue-500/10",
      particles: 8
    },
    {
      id: 2,
      title: "UI/UX DESIGN", 
      description: "AI-driven user experiences that adapt and evolve based on user behavior and preferences.",
      tech: ["AI Prototyping", "Neuro Design", "3D Interfaces", "Voice UX"],
      gradient: "from-purple-400 to-fuchsia-500",
      bgGradient: "from-purple-500/10 to-fuchsia-500/10",
      particles: 12
    },
    {
      id: 3,
      title: "MOBILE APP DEVELOPMENT",
      description: "Augmented reality mobile experiences that blend digital and physical worlds seamlessly.",
      tech: ["AR Kit", "Reality OS", "Spatial Computing", "Holographic UI"],
      gradient: "from-green-400 to-emerald-500",
      bgGradient: "from-green-500/10 to-emerald-500/10",
      particles: 6
    },
    {
      id: 4,
      title: "GRAPHIC DESIGN",
      description: "Photorealistic 3D graphics and animations rendered in real-time using quantum computing principles.",
      tech: ["3D Rendering", "Ray Tracing", "Quantum Art", "Metaverse Ready"],
      gradient: "from-orange-400 to-red-500",
      bgGradient: "from-orange-500/10 to-red-500/10",
      particles: 10
    },
    {
      id: 5,
      title: "VIDEO EDITING",
      description: "Generate and edit videos using artificial intelligence that understands context and emotion.",
      tech: ["AI Generation", "Emotion AI", "Real-time Editing", "Deep Learning"],
      gradient: "from-pink-400 to-rose-500",
      bgGradient: "from-pink-500/10 to-rose-500/10",
      particles: 8
    },
    {
      id: 6,
      title: "Ai AUTOMATION",
      description: "Self-learning automation systems that continuously optimize and improve without human intervention.",
      tech: ["Machine Learning", "AutoML", "Predictive AI", "Cognitive Automation"],
      gradient: "from-indigo-400 to-purple-500",
      bgGradient: "from-indigo-500/10 to-purple-500/10",
      particles: 14
    },
    {
      id: 7,
      title: "COPY Writing",
      description: "AI-powered content creation that understands brand voice and generates human-like copy at scale.",
      tech: ["GPT-4", "Brand Voice AI", "Multi-language", "Content Strategy"],
      gradient: "from-teal-400 to-cyan-500",
      bgGradient: "from-teal-500/10 to-cyan-500/10",
      particles: 9
    },
    {
      id: 8,
      title: "SEO OPTIMIZATION",
      description: "Predictive SEO algorithms that anticipate search trends and optimize content before they trend.",
      tech: ["Predictive AI", "Voice SEO", "Visual Search", "Algorithm Forecasting"],
      gradient: "from-lime-400 to-green-500",
      bgGradient: "from-lime-500/10 to-green-500/10",
      particles: 11
    },
    
  ];

  const stats = [
    { number: 245, suffix: '%', label: 'Growth Acceleration', color: 'cyan' },
    { number: 15800, suffix: '+', label: 'AI Models Deployed', color: 'purple' },
    { number: 42, suffix: 'B+', label: 'Data Processed', color: 'green' },
    { number: 999, suffix: '%', label: 'Client Satisfaction', color: 'orange' }
  ];

  const FloatingParticle = ({ color, index, total }: { color: string; index: number; total: number }) => (
    <motion.div
      className={`absolute w-1 h-1 bg-${color}-400 rounded-full`}
      animate={{
        y: [0, -100, 0],
        x: [0, Math.sin(index) * 50, 0],
        opacity: [0, 1, 0],
        scale: [0, 1, 0]
      }}
      transition={{
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        delay: index * 0.5,
        ease: "easeInOut"
      }}
      style={{
        left: `${(index / total) * 100}%`,
        top: `${Math.random() * 100}%`
      }}
    />
  );

  const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
      if (isInView) {
        let start = 0;
        const duration = 2000;
        const increment = value / (duration / 16);
        
        const timer = setInterval(() => {
          start += increment;
          if (start >= value) {
            setCount(value);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
      }
    }, [isInView, value]);

    return (
      <span ref={ref} className="font-mono">
        {count}{suffix}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-black overflow-hidden" ref={containerRef}>
      {/* Animated Background */}
      <div className="fixed inset-0">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/3 to-pink-500/5"
          style={{ opacity: backgroundOpacity }}
        />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            maskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, black, transparent)'
          }}
        />

        {/* Floating Particles */}
        {services.flatMap(service => 
          Array.from({ length: service.particles }, (_, i) => (
            <FloatingParticle 
              key={`${service.id}-${i}`}
              color={service.gradient.split('-')[1]}
              index={i}
              total={service.particles}
            />
          ))
        )}
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Stats Section */}
        <section className="min-h-screen flex items-center justify-center p-8">
          <div className="text-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 mb-8">
                2025
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 mb-16 max-w-4xl mx-auto">
                Welcome to the future of digital innovation. Where artificial intelligence meets human creativity to build whats next.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={`p-6 rounded-2xl bg-black/40 backdrop-blur-sm border border-${stat.color}-500/20 hover:border-${stat.color}-500/50 transition-all duration-500`}>
                    <div className={`text-3xl md:text-4xl font-bold text-${stat.color}-400 mb-2`}>
                      <AnimatedCounter value={stat.number} suffix={stat.suffix} />
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Scroll Indicator */}
            <motion.div
              className="flex flex-col items-center text-cyan-400"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="text-sm mb-2">EXPLORE SERVICES</div>
              <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Navigation */}
        <section className="min-h-screen py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                QUANTUM <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">SERVICES</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Experience the next generation of digital solutions powered by cutting-edge AI and quantum computing.
              </p>
            </motion.div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group cursor-pointer"
                  onHoverStart={() => setActiveService(service.id)}
                  onHoverEnd={() => setActiveService(0)}
                >
                  {/* Card */}
                  <div className={`relative p-8 rounded-3xl bg-black/60 backdrop-blur-sm border border-${service.gradient.split('-')[1]}-500/20 overflow-hidden transition-all duration-500 group-hover:border-${service.gradient.split('-')[1]}-500/50`}>
                    
                    {/* Animated Background */}
                    <motion.div 
                      className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100`}
                      transition={{ duration: 0.5 }}
                    />

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Service Number */}
                      <div className={`text-6xl font-black text-${service.gradient.split('-')[1]}-400/20 mb-4`}>
                        {String(service.id).padStart(2, '0')}
                      </div>

                      {/* Title */}
                      <h3 className={`text-2xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent mb-4`}>
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-400 mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {service.tech.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                            className={`px-3 py-1 text-xs bg-${service.gradient.split('-')[1]}-500/10 text-${service.gradient.split('-')[1]}-400 rounded-full border border-${service.gradient.split('-')[1]}-500/20`}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>

                      {/* Hover Button */}
                      <motion.button
                        className={`w-full mt-6 py-3 bg-gradient-to-r ${service.gradient} text-black font-bold rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative overflow-hidden`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="relative z-10">QUANTUM ACCESS</span>
                        <motion.div
                          className="absolute inset-0 bg-white/20 -skew-x-12 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"
                        />
                      </motion.button>
                    </div>

                    {/* Corner Accents */}
                    <div className={`absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-${service.gradient.split('-')[1]}-400 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    <div className={`absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-${service.gradient.split('-')[1]}-400 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  </div>

                  {/* Glow Effect */}
                  <motion.div
                    className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 -z-10`}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="min-h-[60vh] flex items-center justify-center p-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
              READY FOR <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">QUANTUM LEAP?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Join the revolution and transform your business with AI-powered solutions from the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                className="px-12 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-black rounded-2xl text-lg relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">INITIATE QUANTUM ACCESS</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-white/20 -skew-x-12 transform translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
              </motion.button>

              <motion.button
                className="px-12 py-4 border-2 border-cyan-400/30 text-cyan-400 font-black rounded-2xl text-lg hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                SCHEDULE DEMO
              </motion.button>
            </div>
          </motion.div>
        </section>
      </div>

      {/* Floating AI Assistant */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="relative">
          <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center text-white text-2xl">
            AI
          </div>
          <div className="absolute -inset-2 bg-cyan-500 rounded-2xl blur-lg opacity-20 animate-pulse" />
        </div>
      </motion.div>
    </div>
  );
};


export default ServicesPage;
