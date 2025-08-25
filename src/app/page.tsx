'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowDownIcon, CodeBracketIcon, PaintBrushIcon, RocketLaunchIcon, PhoneIcon, EnvelopeIcon, MapPinIcon, SparklesIcon, CubeIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import SEOHead from './components/SEOHead';
import FAQ from './components/FAQ';

// Particle Component
const ParticleBackground = () => {
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, size: number, speed: number}>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 2 + 0.5
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 10 + particle.speed * 5,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

// Floating Elements Component
const FloatingElements = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div
      className="absolute top-20 left-20 text-4xl opacity-20"
      animate={{ rotate: 360, scale: [1, 1.2, 1] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    >
      🚀
    </motion.div>
    <motion.div
      className="absolute top-40 right-20 text-3xl opacity-20"
      animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
    >
      ⚡
    </motion.div>
    <motion.div
      className="absolute bottom-40 left-32 text-4xl opacity-20"
      animate={{ x: [0, 20, 0], scale: [1, 1.3, 1] }}
      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
    >
      💎
    </motion.div>
  </div>
);

const services = [
  {
    icon: <CodeBracketIcon className="h-12 w-12 text-blue-400" />,
    title: "طراحی و توسعه وب",
    description: "طراحی سایت‌های مدرن و ریسپانسیو با استفاده از جدیدترین تکنولوژی‌ها",
    features: ["Next.js", "React", "Node.js", "TypeScript"],
    gradient: "from-blue-500 to-cyan-500",
    delay: 0.1
  },
  {
    icon: <PaintBrushIcon className="h-12 w-12 text-purple-400" />,
    title: "طراحی UI/UX",
    description: "طراحی رابط کاربری زیبا و تجربه کاربری عالی برای وب‌سایت‌ها و اپلیکیشن‌ها",
    features: ["Figma", "Adobe XD", "Prototyping", "User Research"],
    gradient: "from-purple-500 to-pink-500",
    delay: 0.2
  },
  {
    icon: <RocketLaunchIcon className="h-12 w-12 text-green-400" />,
    title: "دیجیتال مارکتینگ",
    description: "استراتژی‌های بازاریابی دیجیتال برای رشد کسب و کار شما",
    features: ["SEO", "Google Ads", "Social Media", "Content Marketing"],
    gradient: "from-green-500 to-emerald-500",
    delay: 0.3
  }
];

const portfolio = [
  {
    title: "فروشگاه آنلاین آرایشی",
    description: "فروشگاه آنلاین کامل با سیستم مدیریت موجودی و پرداخت آنلاین",
    image: "/projects/cosmetics.jpg",
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    category: "E-commerce",
    gradient: "from-pink-500 to-rose-500",
    emoji: "💄"
  },
  {
    title: "سایت شرکت ساختمانی",
    description: "وب‌سایت حرفه‌ای برای شرکت ساختمانی با گالری پروژه‌ها",
    image: "/projects/construction.jpg",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    category: "Corporate",
    gradient: "from-orange-500 to-red-500",
    emoji: "🏗️"
  },
  {
    title: "اپلیکیشن مدیریت رستوران",
    description: "سیستم مدیریت سفارشات و موجودی برای رستوران‌ها",
    image: "/projects/restaurant.jpg",
    technologies: ["React Native", "Firebase", "Node.js"],
    category: "Mobile App",
    gradient: "from-yellow-500 to-orange-500",
    emoji: "🍕"
  },
  {
    title: "سایت خبری",
    description: "پلتفرم خبری با سیستم مدیریت محتوا و SEO بهینه",
    image: "/projects/news.jpg",
    technologies: ["Next.js", "PostgreSQL", "Prisma"],
    category: "News",
    gradient: "from-blue-500 to-indigo-500",
    emoji: "📰"
  },
  {
    title: "پلتفرم آموزشی",
    description: "سیستم مدیریت یادگیری آنلاین با ویدیو و آزمون",
    image: "/projects/education.jpg",
    technologies: ["Vue.js", "Node.js", "MongoDB"],
    category: "Education",
    gradient: "from-green-500 to-teal-500",
    emoji: "🎓"
  },
  {
    title: "سایت شخصی هنرمند",
    description: "نمایشگاه آنلاین آثار هنری با گالری تعاملی",
    image: "/projects/artist.jpg",
    technologies: ["React", "Three.js", "GSAP"],
    category: "Portfolio",
    gradient: "from-purple-500 to-violet-500",
    emoji: "🎨"
  }
];

const stats = [
  { number: "50+", label: "پروژه موفق", icon: "🚀" },
  { number: "30+", label: "مشتری راضی", icon: "😊" },
  { number: "5+", label: "سال تجربه", icon: "⭐" },
  { number: "24/7", label: "پشتیبانی", icon: "🔄" }
];

export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const springY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <>
      <SEOHead
        title="آژانس طراحی وب حرفه‌ای در تهران"
        description="آژانس طراحی وب FamirWebDesign - ارائه خدمات طراحی سایت، توسعه وب، UI/UX و دیجیتال مارکتینگ در تهران. بیش از 50 پروژه موفق و 30 مشتری راضی."
        keywords={[
          "طراحی وب تهران",
          "طراحی سایت تهران",
          "توسعه وب تهران",
          "دیجیتال مارکتینگ تهران",
          "UI/UX تهران",
          "سایت فروشگاهی تهران",
          "سایت شرکتی تهران"
        ]}
        image="/og-image.jpg"
        url="https://famirwebdesign.com"
      />
      <CustomCursor />
      <main className="min-h-screen font-vazir relative">
      {/* Hero Section with Particles */}
      <section className="h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-blue-900 to-black overflow-hidden">
        <ParticleBackground />
        <FloatingElements />
        
        {/* Animated Background Shapes */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{ y: springY }}
        >
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center relative z-10"
        >
          {/* Main Title with 3D Effect */}
          <motion.div
            initial={{ scale: 0.8, rotateY: -15 }}
            animate={{ scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="mb-8 perspective-1000"
          >
            <h1 className="text-7xl md:text-9xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-2xl">
              FamirWebDesign
            </h1>
          </motion.div>

          {/* Subtitle with Typewriter Effect */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-3xl md:text-4xl text-gray-300 mb-8 font-light"
          >
            آژانس طراحی وب <span className="text-gradient-primary font-bold">حرفه‌ای</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg text-gray-400 mb-16 max-w-3xl mx-auto leading-relaxed"
          >
            ما با همسرم، تیم متخصصی هستیم که رویاهای دیجیتال شما را با <span className="text-gradient-secondary font-semibold">خلاقیت</span> و <span className="text-gradient-accent font-semibold">تخصص</span> به واقعیت تبدیل می‌کنیم
          </motion.p>

          {/* CTA Buttons with Hover Effects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl text-xl font-bold overflow-hidden shadow-2xl"
            >
              <span className="relative z-10">شروع پروژه</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group px-10 py-5 border-2 border-white/30 hover:border-white/50 text-white rounded-2xl text-xl font-bold transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10"
            >
              مشاهده نمونه کارها
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <ArrowDownIcon className="h-8 w-8 text-blue-400 animate-bounce" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section with Glassmorphism */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-900 to-black relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center group"
              >
                <div className="relative p-6 rounded-3xl backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-5xl md:text-6xl font-black text-gradient-primary mb-2">{stat.number}</div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section with 3D Cards */}
      <section className="py-24 px-4 bg-black relative">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-black mb-20 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          >
            خدمات ما
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.6, delay: service.delay }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5, 
                  z: 50 
                }}
                className="group perspective-1000"
              >
                <div className="relative p-8 rounded-3xl backdrop-blur-md bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-white/10 hover:border-white/20 transition-all duration-500 h-full">
                  <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gradient-primary">{service.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 bg-gradient-to-r from-blue-900/30 to-purple-900/30 text-blue-400 rounded-full text-sm border border-blue-800/50 backdrop-blur-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section with Advanced Cards */}
      <section id="portfolio" ref={ref} className="py-24 px-4 bg-gradient-to-b from-black to-gray-900 relative">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-black mb-20 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
          >
            نمونه کارهای ما
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  rotateY: 5 
                }}
                className="group perspective-1000"
              >
                <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 shadow-2xl">
                  {/* Project Image Placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-blue-900/20 to-purple-900/20 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                          {project.emoji}
                        </div>
                        <div className="text-gray-500 text-sm font-medium">{project.category}</div>
                      </div>
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="text-white font-bold text-lg">{project.title}</div>
                        <div className="text-gray-300 text-sm">{project.description}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gradient-primary">{project.title}</h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-800/50 rounded-full text-sm text-gray-300 border border-gray-700/50 backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-cyan-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      مشاهده جزئیات
                    </motion.button>
                  </div>
                  
                  {/* Gradient Border Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section with Glassmorphism */}
      <section id="contact" className="py-24 px-4 bg-gradient-to-b from-gray-900 to-black relative">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          >
            بیایید با هم صحبت کنیم
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 mb-16 text-xl leading-relaxed max-w-3xl mx-auto"
          >
            آماده‌ایم تا رویای دیجیتال شما را با <span className="text-gradient-primary font-semibold">خلاقیت</span> و <span className="text-gradient-secondary font-semibold">تخصص</span> به واقعیت تبدیل کنیم. با ما تماس بگیرید!
          </motion.p>
          
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: PhoneIcon, title: "تماس تلفنی", info: "+98 912 123 4567", color: "from-blue-500 to-cyan-500" },
              { icon: EnvelopeIcon, title: "ایمیل", info: "info@famirwebdesign.com", color: "from-purple-500 to-pink-500" },
              { icon: MapPinIcon, title: "آدرس", info: "تهران، ایران", color: "from-green-500 to-emerald-500" }
            ].map((contact, index) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <div className="relative p-6 rounded-3xl backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${contact.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <contact.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold mb-2 text-lg">{contact.title}</h3>
                  <p className="text-gray-400">{contact.info}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.a
            href="mailto:info@famirwebdesign.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-cyan-600 hover:via-blue-600 hover:to-purple-600 text-white px-16 py-5 rounded-2xl text-xl font-bold transition-all duration-500 shadow-2xl hover:shadow-blue-500/25"
          >
            شروع پروژه جدید
          </motion.a>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ 
        items={[
          {
            question: "طراحی وب سایت چقدر زمان می‌برد؟",
            answer: "زمان طراحی وب سایت بستگی به پیچیدگی پروژه دارد. سایت‌های ساده 2-3 هفته، سایت‌های متوسط 4-6 هفته و سایت‌های پیچیده 8-12 هفته زمان می‌برند."
          },
          {
            question: "آیا سایت‌های شما ریسپانسیو هستند؟",
            answer: "بله، تمام سایت‌های ما کاملاً ریسپانسیو هستند و در تمام دستگاه‌ها (موبایل، تبلت، دسکتاپ) بهینه نمایش داده می‌شوند."
          },
          {
            question: "چه تکنولوژی‌هایی استفاده می‌کنید؟",
            answer: "ما از جدیدترین تکنولوژی‌ها مانند Next.js، React، TypeScript، Tailwind CSS و Framer Motion استفاده می‌کنیم تا بهترین تجربه کاربری را ارائه دهیم."
          },
          {
            question: "آیا خدمات پشتیبانی ارائه می‌دهید؟",
            answer: "بله، ما خدمات پشتیبانی 24/7 ارائه می‌دهیم و همیشه آماده کمک به مشتریان خود هستیم."
          },
          {
            question: "آیا امکان بهینه‌سازی SEO وجود دارد؟",
            answer: "بله، تمام سایت‌های ما با بهترین روش‌های SEO بهینه‌سازی می‌شوند تا در موتورهای جستجو رتبه بهتری داشته باشند."
          }
        ]}
      />

      {/* Footer with Gradient */}
      <footer className="py-16 px-4 bg-gradient-to-b from-gray-900 to-black border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-black text-gradient-primary mb-6"
          >
            FamirWebDesign
          </motion.div>
          <p className="text-gray-400 mb-8 text-lg">طراحی وب حرفه‌ای با عشق و تخصص</p>
          <div className="text-gray-500 text-sm">
            © 2024 FamirWebDesign. تمامی حقوق محفوظ است.
          </div>
        </div>
      </footer>
      </main>
    </>
  );
}
