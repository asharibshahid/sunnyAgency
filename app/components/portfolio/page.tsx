// components/ExtremePortfolio.tsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useRef, useEffect } from 'react';
import { 
  FiCode, 
  FiLayout, 
  FiSmartphone, 
  FiPenTool,
  FiVideo,
  FiCpu,
  FiEdit3,
  FiSearch,
  FiArrowRight,
  FiStar,
  FiAward,
  FiUsers,
  FiGlobe
} from 'react-icons/fi';
import { 
  RiLightbulbFlashLine,
  RiRocket2Line
} from 'react-icons/ri';

const ExtremePortfolio = () => {
  const [ref] = useInView({ threshold: 0.1, triggerOnce: false });
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  


  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Services Data
  const services = [
    {
      icon: FiCode,
      title: 'Web Development',
      description: 'Full stack web applications with modern frameworks and cutting edge technologies.',
      gradient: 'from-purple-500 to-pink-500',
      projects: 47,
      tags: ['React', 'Next.js', 'Node.js', 'TypeScript']
    },
    {
      icon: FiLayout,
      title: 'Web Design',
      description: 'Visually stunning and user centric website designs that convert visitors into customers.',
      gradient: 'from-blue-500 to-cyan-400',
      projects: 32,
      tags: ['Figma', 'Adobe XD', 'Responsive', 'UI/UX']
    },
    {
      icon: FiSmartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      gradient: 'from-green-500 to-emerald-400',
      projects: 28,
      tags: ['React Native', 'Flutter', 'iOS', 'Android']
    },
    {
      icon: RiLightbulbFlashLine,
      title: 'UI/UX Design',
      description: 'Intuitive user experiences and beautiful interfaces that users love to interact with.',
      gradient: 'from-orange-500 to-red-500',
      projects: 41,
      tags: ['User Research', 'Wireframing', 'Prototyping', 'Testing']
    },
    {
      icon: FiPenTool,
      title: 'Graphic Design',
      description: 'Brand identity, marketing materials, and digital assets that tell your story.',
      gradient: 'from-yellow-500 to-amber-500',
      projects: 56,
      tags: ['Branding', 'Illustration', 'Print', 'Digital']
    },
    {
      icon: FiVideo,
      title: 'Video Editing',
      description: 'Professional video production and editing for commercials, social media, and corporate.',
      gradient: 'from-red-500 to-pink-500',
      projects: 23,
      tags: ['Motion Graphics', 'Color Grading', 'VFX', 'Animation']
    },
    {
      icon: FiCpu,
      title: 'AI Automation',
      description: 'Intelligent automation solutions powered by artificial intelligence and machine learning.',
      gradient: 'from-indigo-500 to-purple-500',
      projects: 19,
      tags: ['Machine Learning', 'Chatbots', 'Automation', 'AI Integration']
    },
    {
      icon: FiEdit3,
      title: 'Copy Writing',
      description: 'Compelling and persuasive content that engages audiences and drives action.',
      gradient: 'from-teal-500 to-cyan-400',
      projects: 34,
      tags: ['Content Strategy', 'SEO Writing', 'Brand Voice', 'Marketing']
    },
    {
      icon: FiSearch,
      title: 'SEO Optimization',
      description: 'Data driven SEO strategies to improve rankings and drive organic traffic growth.',
      gradient: 'from-gray-500 to-blue-500',
      projects: 29,
      tags: ['Technical SEO', 'Content SEO', 'Analytics', 'Strategy']
    }
  ];

  // Projects Data
  const projects = [
    {
      id: 1,
      title: 'E Commerce Platform',
      category: 'web-dev',
      service: 'Web Development',
      image: '/api/placeholder/600/400',
      description: 'Full-stack e-commerce solution with advanced features',
      technologies: ['Next.js', 'Stripe', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Fitness Mobile App',
      category: 'mobile-app',
      service: 'Mobile App Development',
      image: '/api/placeholder/600/400',
      description: 'Cross-platform fitness tracking application',
      technologies: ['React Native', 'Firebase', 'Redux'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'AI Chatbot System',
      category: 'ai-automation',
      service: 'AI Automation',
      image: '/api/placeholder/600/400',
      description: 'Intelligent customer service automation',
      technologies: ['Python', 'TensorFlow', 'Node.js'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    // Add more projects as needed
  ];

  const stats = [
    { icon: FiAward, value: '150+', label: 'Projects Completed' },
    { icon: FiUsers, value: '89+', label: 'Happy Clients' },
    { icon: FiStar, value: '98%', label: 'Client Satisfaction' },
    { icon: FiGlobe, value: '15+', label: 'Countries Served' }
  ];

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Mouse Trailer */}
      <motion.div
        className="fixed pointer-events-none z-50 w-6 h-6 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full blur-sm mix-blend-screen"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 200, mass: 0.5 }}
      />

      <motion.div
        ref={ref}
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Hero Section */}
        <motion.section 
          className="text-center mb-32 relative"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our Agency
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We craft <span className="text-cyan-400 font-semibold">extraordinary digital experiences</span> 
            {' '}that transform ideas into impactful solutions through cutting-edge technology and innovative design.
          </motion.p>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-6 rounded-2xl bg-gray-800/20 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Services Section */}
        <motion.section 
          className="mb-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="text-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Portfolios</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive digital solutions to bring your vision to life with unparalleled quality and innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="group relative p-8 rounded-3xl bg-gradient-to-br from-gray-800/20 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/30 overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
              >
                {/* Animated Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Service Icon */}
                <motion.div
                  className={`relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Service Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Stats & Tags */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-cyan-400 font-semibold">
                      {service.projects}+ Projects
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tag}
                        className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-xs border border-gray-700/50"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + tagIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Hover Arrow */}
                  <motion.div
                    className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300"
                    whileHover={{ scale: 1.2 }}
                  >
                    <FiArrowRight className="w-6 h-6 text-cyan-400" />
                  </motion.div>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Featured Projects Section */}
        <motion.section 
          className="mb-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="text-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A showcase of our exceptional work across various domains and technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.filter(p => p.featured).map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-gray-800/20 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/30"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Project Image */}
                <div className="relative h-64 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 text-sm">{project.service}</p>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm border border-cyan-500/20">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <motion.button
                      className="flex-1 bg-gradient-to-r from-purple-500 to-cyan-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Project
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="text-center relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-cyan-500/10 backdrop-blur-sm border border-gray-700/50 p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_var(--tw-gradient-stops))] from-purple-400/5 via-transparent to-transparent" />
            
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-6 relative z-10"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Ready to <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Transform</span> Your Vision?
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto relative z-10"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Lets create something extraordinary together. Our team is ready to bring your ideas to life with cutting edge technology and innovative design.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center relative z-10"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <RiRocket2Line className="w-5 h-5" />
                Start Your Project
              </motion.button>
              
              <motion.button
                className="px-8 py-4 bg-gray-800/50 text-white rounded-xl font-semibold text-lg hover:bg-gray-700/50 border border-gray-700/50 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View Case Studies
              </motion.button>
            </motion.div>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default ExtremePortfolio;