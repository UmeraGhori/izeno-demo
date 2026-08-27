'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <main className="min-h-screen bg-white flex flex-col overflow-hidden">
      
      {/* 1. HERO SECTION (LCP Optimized) */}
      <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Removed motion.div here. JS-based opacity/scale animations delay LCP. */}
        <div className="absolute inset-0 z-0 bg-slate-900">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
            alt="iZeno Enterprise Solutions Background"
            fill
            priority 
            className="object-cover object-center opacity-70"
            sizes="100vw"
            quality={75} // Slightly reduced quality for faster 4G loading
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/40 to-transparent mix-blend-multiply" />
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 w-full flex flex-col lg:flex-row items-center gap-16"
        >
          <div className="lg:w-2/3 space-y-8 text-center lg:text-left">
            
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 font-mono text-sm shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              LCP Optimized Architecture
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-white drop-shadow-lg">
              Generative AI Solutions Tailored for <span className="text-blue-400">Your Business</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-slate-200 max-w-2xl mx-auto lg:mx-0 drop-shadow">
              Redefining Businesses through Digital Transformation. We implement and optimize mission-critical applications to enable smarter insights.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-6">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold transition-shadow shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]"
              >
                Explore Solutions
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/5 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold transition-colors"
              >
                Contact Our Experts
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 2. PARTNERS LOGO CLOUD */}
      <section className="py-16 bg-white border-b border-slate-100 overflow-hidden">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 text-center"
        >
          <motion.p variants={fadeUp} className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-10">Trusted by Global Technology Leaders</motion.p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-70 grayscale hover:grayscale-0 transition-all duration-700">
            {['Atlassian', 'Red Hat', 'Google Cloud', 'AWS', 'SugarCRM'].map((partner, i) => (
              <motion.div 
                key={i} 
                variants={fadeUp}
                whileHover={{ scale: 1.1, rotate: [-1, 1, -1, 0] }}
                className={`text-3xl font-black cursor-default ${
                  partner === 'Atlassian' ? 'text-blue-600' :
                  partner === 'Red Hat' ? 'text-red-600' :
                  partner === 'Google Cloud' ? 'text-slate-800' :
                  partner === 'AWS' ? 'text-orange-500' : 'text-slate-900'
                }`}
              >
                {partner}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 3. CORE SOLUTIONS */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-0 right-0 -mr-48 -mt-48 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[100px] pointer-events-none"
        ></motion.div>
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.6, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-0 left-0 -ml-48 -mb-48 w-[600px] h-[600px] bg-emerald-400/10 rounded-full blur-[100px] pointer-events-none"
        ></motion.div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Enterprise Solutions for Modern Needs</motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-slate-600">We integrate leading technologies with your existing IT frameworks to solve complex challenges and drive growth.</motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { title: "DevOps & Cloud", desc: "Automate pipelines, scale infrastructure, and accelerate delivery with AWS, Google Cloud, and Red Hat.", color: "bg-blue-600" },
              { title: "IT Service Management", desc: "Streamline service delivery and support operations with Atlassian Jira Service Management.", color: "bg-indigo-600" },
              { title: "Customer Relationship", desc: "Build powerful customer experiences and drive sales growth using SugarCRM.", color: "bg-emerald-600" },
              { title: "Data Analytics & AI", desc: "Turn raw data into actionable intelligence with predictive analytics and GenAI integration.", color: "bg-purple-600" },
              { title: "App Modernization", desc: "Refactor legacy applications into nimble, cloud-native microservices.", color: "bg-orange-500" },
              { title: "Managed Services", desc: "24/7 proactive monitoring and support to keep your critical systems running seamlessly.", color: "bg-slate-800" }
            ].map((solution, i) => (
              <motion.div 
                key={i} 
                variants={fadeUp}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="bg-white p-8 rounded-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] transition-shadow duration-300 group cursor-pointer"
              >
                <motion.div 
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className={`w-14 h-14 rounded-2xl ${solution.color} mb-8 flex items-center justify-center text-white shadow-lg shadow-${solution.color}/30`}
                >
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </motion.div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{solution.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-8">{solution.desc}</p>
                <div className="text-blue-600 font-bold group-hover:text-blue-700 flex items-center gap-2">
                  Learn more <motion.span className="inline-block" whileHover={{ x: 5 }}>→</motion.span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. WHY IZENO (STATS) */}
      <section className="py-24 bg-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Why Choose iZeno?</h2>
            <p className="text-xl text-blue-100 leading-relaxed max-w-lg">
              Founded in 2003, we draw on industry experiences in accomplishing a portfolio of mission-critical applications. No project is too complex for us.
            </p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="lg:w-1/2 grid grid-cols-2 gap-6 w-full"
          >
            {[
              { val: "180+", text: "Certified Innovators" },
              { val: "500+", text: "Enterprise Solutions" },
              { val: "20+", text: "Years Experience" },
              { val: "5", text: "Regional Offices" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                variants={fadeUp}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
                className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 transition-colors cursor-default"
              >
                <div className="text-5xl font-black mb-2">{stat.val}</div>
                <div className="text-blue-100 font-medium">{stat.text}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="py-32 bg-white text-center relative overflow-hidden">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto px-6 relative z-10"
        >
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight">Ready to Accelerate Your Digital Transformation?</motion.h2>
          <motion.p variants={fadeUp} className="text-slate-600 mb-12 max-w-2xl mx-auto text-xl">Our experts are ready to audit your current architecture and propose a high-performance roadmap tailored for you.</motion.p>
          <motion.button 
            variants={fadeUp}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="bg-slate-900 text-white px-12 py-5 rounded-2xl font-bold text-lg shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)]"
          >
            Schedule a Consultation
          </motion.button>
        </motion.div>
      </section>

    </main>
  );
}
