"use client";

import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowUpRight, 
  MapPin, 
  GraduationCap, 
  ExternalLink,
  ShoppingBag,
  Tv,
  Code2,
  Sparkles,
  CheckCircle2,
  Layers,
  ArrowRight,
  Star,
  Check,
  Radio,
  BarChart3,
  Globe,
  Smartphone,
  Coffee,
  BookOpen,
  TrendingUp,
  Users,
  Award,
  Briefcase,
  CircleDollarSign,
  DollarSign,
  Rocket,
  Home,
  Menu,
  X,
  User,
  Trophy,
  ZoomIn
} from 'lucide-react';
import { 
  LinkedinIcon, 
  GoogleIcon, 
  InstagramIcon,
  TiktokIcon 
} from '@/components/Icons';

const navItems = [
  { id: 'hero', label: 'Overview', icon: Home },
  { id: 'about', label: 'About Me', icon: User },
  { id: 'work', label: 'Work', icon: Briefcase },
  { id: 'certifications', label: 'Certifications', icon: Award },
];

const heroRoles = [
  "Student",
  "Software Engineer",
  "Digital Business",
];

// 3D Interactive Tilt Card with Dynamic Perspective & Glare (Yasio.dev style)
function TiltAboutCard({ children }: { children: React.ReactNode }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tiltStyle, setTiltStyle] = useState({
    transform: 'perspective(1100px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    boxShadow: '0 16px 38px -10px rgba(0,0,0,0.07), 0 6px 16px -4px rgba(0,0,0,0.03)',
  });
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const rafId = useRef<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (rafId.current) cancelAnimationFrame(rafId.current);

    rafId.current = requestAnimationFrame(() => {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Smooth 3D tilt rotation (max ~6.5 degrees)
      const rotateX = ((y - centerY) / centerY) * -6.5;
      const rotateY = ((x - centerX) / centerX) * 6.5;

      // Dynamic reactive shadow offset
      const shadowX = -rotateY * 2.2;
      const shadowY = rotateX * 2.2 + 22;

      setTiltStyle({
        transform: `perspective(1100px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.016, 1.016, 1.016)`,
        boxShadow: `${shadowX.toFixed(1)}px ${shadowY.toFixed(1)}px 44px -8px rgba(0,0,0,0.12), 0 8px 20px -4px rgba(0,0,0,0.04)`,
      });

      setGlarePos({
        x: (x / rect.width) * 100,
        y: (y / rect.height) * 100,
        opacity: 0.45,
      });
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (rafId.current) cancelAnimationFrame(rafId.current);
    setIsHovered(false);
    setTiltStyle({
      transform: 'perspective(1100px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      boxShadow: '0 16px 38px -10px rgba(0,0,0,0.07), 0 6px 16px -4px rgba(0,0,0,0.03)',
    });
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        ...tiltStyle,
        transition: isHovered 
          ? 'transform 0.08s ease-out, box-shadow 0.08s ease-out' 
          : 'transform 0.55s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.55s cubic-bezier(0.23, 1, 0.32, 1)',
        willChange: 'transform, box-shadow',
        transformStyle: 'preserve-3d',
      }}
      className="relative overflow-hidden bg-gradient-to-b from-white via-[#fafafb] to-[#f4f4f7] rounded-[24px] sm:rounded-[28px] px-6 sm:px-10 md:px-12 py-6 sm:py-7 md:py-8 border border-neutral-200/90 cursor-default"
    >
      {/* 3D Specular Glare Reflection Layer following cursor */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
        style={{
          opacity: glarePos.opacity,
          background: `radial-gradient(circle 420px at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.75), transparent 65%)`,
        }}
      />
      {/* Subtle Inset Specular Top Line */}
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0_1px_1px_rgba(255,255,255,1)]" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

// 3D Interactive Tilt Certificate Card with Dynamic Perspective, Reactive Shadow & Specular Glare
function TiltCertificateCard({ 
  children,
  className = "",
  onClick
}: { 
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tiltStyle, setTiltStyle] = useState({
    transform: 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    boxShadow: '0 12px 32px -10px rgba(0,0,0,0.06), 0 4px 12px -2px rgba(0,0,0,0.03)',
  });
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const rafId = useRef<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (rafId.current) cancelAnimationFrame(rafId.current);

    rafId.current = requestAnimationFrame(() => {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // 3D tilt angles (max ~6.5 degrees)
      const rotateX = ((y - centerY) / centerY) * -6.5;
      const rotateY = ((x - centerX) / centerX) * 6.5;

      // Reactive physical shadow offset
      const shadowX = -rotateY * 2.2;
      const shadowY = rotateX * 2.2 + 22;

      setTiltStyle({
        transform: `perspective(1200px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.018, 1.018, 1.018)`,
        boxShadow: `${shadowX.toFixed(1)}px ${shadowY.toFixed(1)}px 42px -6px rgba(0,0,0,0.13), 0 8px 20px -4px rgba(0,0,0,0.05)`,
      });

      setGlarePos({
        x: (x / rect.width) * 100,
        y: (y / rect.height) * 100,
        opacity: 0.45,
      });
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (rafId.current) cancelAnimationFrame(rafId.current);
    setIsHovered(false);
    setTiltStyle({
      transform: 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      boxShadow: '0 12px 32px -10px rgba(0,0,0,0.06), 0 4px 12px -2px rgba(0,0,0,0.03)',
    });
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        ...tiltStyle,
        transition: isHovered 
          ? 'transform 0.08s ease-out, box-shadow 0.08s ease-out' 
          : 'transform 0.55s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.55s cubic-bezier(0.23, 1, 0.32, 1)',
        willChange: 'transform, box-shadow',
        transformStyle: 'preserve-3d',
      }}
      className={`relative overflow-hidden bg-white rounded-[28px] sm:rounded-[32px] border border-neutral-200/90 cursor-pointer ${className}`}
    >
      {/* 3D Specular Glare Reflection Layer following cursor */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300 z-20"
        style={{
          opacity: glarePos.opacity,
          background: `radial-gradient(circle 420px at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.75), transparent 65%)`,
        }}
      />
      {/* Subtle Inset Specular Top Line */}
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0_1px_1px_rgba(255,255,255,1)]" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default function JonnyCzarPortfolioPage() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [previewCert, setPreviewCert] = useState<{ src: string; title: string; subtitle: string } | null>(null);
  const targetIdRef = useRef<string | null>(null);
  const scrollEndDebounceTimer = useRef<NodeJS.Timeout | null>(null);
  const safetyTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Smooth Cinematic Morphing Effect (Reliable Infinite Repeat Loop)
  useEffect(() => {
    const interval = setInterval(() => {
      // 1. Soft optical dissolve & slight upward float
      setIsVisible(false);

      // 2. Advance index and bloom in with new role
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % heroRoles.length);
        setIsVisible(true);
      }, 400);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  // Apple-style Real-time ScrollSpy with Dynamic Programmatic Scroll Lock & Native ScrollEnd
  useEffect(() => {
    const handleScroll = () => {
      // If user clicked a navigation button, lock activeSection to the target!
      // NEVER let intermediate sections override activeSection while scrolling.
      if (targetIdRef.current) {
        // Debounce release: reset timer on every scroll frame.
        // Lock only releases 180ms after scrolling has completely ceased.
        if (scrollEndDebounceTimer.current) {
          clearTimeout(scrollEndDebounceTimer.current);
        }
        scrollEndDebounceTimer.current = setTimeout(() => {
          targetIdRef.current = null;
        }, 180);
        return;
      }

      // Manual User Scrolling Detection:
      // 1. Bottom of page (Certifications section)
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 70;
      if (isAtBottom) {
        setActiveSection('certifications');
        return;
      }

      // 2. Top of page (Hero section)
      if (window.scrollY < 180) {
        setActiveSection('hero');
        return;
      }

      // 3. Focal line detection using getBoundingClientRect (reliable across all devices)
      const focusLine = window.innerHeight * 0.36;
      const certEl = document.getElementById('certifications');
      const workEl = document.getElementById('work');
      const aboutEl = document.getElementById('about') || document.getElementById('highlights');

      if (certEl && certEl.getBoundingClientRect().top <= focusLine) {
        setActiveSection('certifications');
      } else if (workEl && workEl.getBoundingClientRect().top <= focusLine) {
        setActiveSection('work');
      } else if (aboutEl && aboutEl.getBoundingClientRect().top <= focusLine) {
        setActiveSection('about');
      } else {
        setActiveSection('hero');
      }
    };

    // Release lock immediately when modern browser smooth scrolling finishes
    const handleScrollEnd = () => {
      if (scrollEndDebounceTimer.current) clearTimeout(scrollEndDebounceTimer.current);
      if (safetyTimeoutRef.current) clearTimeout(safetyTimeoutRef.current);
      targetIdRef.current = null;
    };

    // If user touches or uses mouse wheel during scroll, immediately release lock to follow user input
    const handleUserInterruption = () => {
      if (scrollEndDebounceTimer.current) clearTimeout(scrollEndDebounceTimer.current);
      if (safetyTimeoutRef.current) clearTimeout(safetyTimeoutRef.current);
      targetIdRef.current = null;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('scrollend', handleScrollEnd, { passive: true });
    window.addEventListener('wheel', handleUserInterruption, { passive: true });
    window.addEventListener('touchstart', handleUserInterruption, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scrollend', handleScrollEnd);
      window.removeEventListener('wheel', handleUserInterruption);
      window.removeEventListener('touchmove', handleUserInterruption);
      if (scrollEndDebounceTimer.current) clearTimeout(scrollEndDebounceTimer.current);
      if (safetyTimeoutRef.current) clearTimeout(safetyTimeoutRef.current);
    };
  }, []);

  const scrollToSection = (id: string) => {
    // 1. Instantly set target and active indicator
    setActiveSection(id);
    targetIdRef.current = id;

    if (scrollEndDebounceTimer.current) clearTimeout(scrollEndDebounceTimer.current);
    if (safetyTimeoutRef.current) clearTimeout(safetyTimeoutRef.current);

    // 2. Determine target position
    let targetY = 0;
    if (id !== 'hero') {
      const el = document.getElementById(id);
      if (el) {
        const yOffset = -30;
        targetY = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      }
    }

    // If already at or very close to target, release lock immediately
    if (Math.abs(window.scrollY - targetY) < 15) {
      targetIdRef.current = null;
      return;
    }

    // Safety fallback timeout in case scroll events never fire
    safetyTimeoutRef.current = setTimeout(() => {
      targetIdRef.current = null;
    }, 2500);

    window.scrollTo({ top: Math.max(0, targetY), behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-[#111111] selection:bg-black selection:text-white font-montserrat antialiased">
      
      {/* 1A. DESKTOP FLOATING PILL NAVBAR (Exact Jonny Czar signature centered pill) */}
      <nav className="hidden md:block fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div className="bg-white/95 backdrop-blur-md rounded-full px-8 lg:px-10 py-3.5 shadow-[0_10px_35px_rgba(0,0,0,0.07)] border border-neutral-200/70 flex items-center gap-8 lg:gap-11 whitespace-nowrap">
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
            className={`font-bold text-[15px] tracking-tight transition-colors ${
              activeSection === 'hero' ? 'text-black font-extrabold' : 'text-[#111111] hover:text-neutral-500'
            }`}
          >
            Nazalan Muaffari
          </a>
          <a 
            href="#about" 
            onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
            className={`text-[15px] transition-colors ${
              activeSection === 'about' ? 'text-black font-extrabold' : 'text-neutral-600 hover:text-black font-medium'
            }`}
          >
            About Me
          </a>
          <a 
            href="#work" 
            onClick={(e) => { e.preventDefault(); scrollToSection('work'); }}
            className={`text-[15px] transition-colors ${
              activeSection === 'work' ? 'text-black font-extrabold' : 'text-neutral-600 hover:text-black font-medium'
            }`}
          >
            Work
          </a>
          <a 
            href="#certifications" 
            onClick={(e) => { e.preventDefault(); scrollToSection('certifications'); }}
            className={`text-[15px] transition-colors ${
              activeSection === 'certifications' ? 'text-black font-extrabold' : 'text-neutral-600 hover:text-black font-medium'
            }`}
          >
            Certifications
          </a>
          <a 
            href="https://www.linkedin.com/in/nazalan-muaffari-3512ba268/" 
            target="_blank" 
            rel="noreferrer" 
            className="font-medium text-[15px] text-neutral-600 hover:text-black transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </nav>

      {/* 1B. MOBILE APPLE-STYLE EXPANDING EDGE DOCK (Nempel di Tepi Kanan, Selalu Berbentuk Kapsul Mulus, Tanpa Kotak, Ultra-Smooth, dan Lebih ke Bawah) */}
      <nav 
        aria-label="Mobile Edge Navigation"
        className="md:hidden fixed right-0 top-[65%] -translate-y-1/2 z-50 pointer-events-auto flex flex-col items-end gap-2.5"
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              aria-label={item.label}
              title={item.label}
              className={`relative group flex items-center justify-start pl-2 pr-1 rounded-l-full will-change-[width] transition-[width,background-color,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] active:scale-95 ${
                isActive
                  ? 'w-[74px] sm:w-[80px] h-[50px] bg-white/95 backdrop-blur-2xl shadow-[-6px_8px_22px_rgba(0,0,0,0.13)] border-l border-y border-neutral-300/90 z-10'
                  : 'w-[46px] sm:w-[50px] h-[50px] bg-white/85 backdrop-blur-md shadow-[-2px_4px_12px_rgba(0,0,0,0.06)] border-l border-y border-neutral-200/80 hover:bg-white/95 z-0'
              }`}
            >
              {/* Inner Icon Pill (Elemen lingkaran hitam dengan ikon putih saat aktif, skala GPU halus tanpa reflow) */}
              <div className={`rounded-full flex items-center justify-center will-change-transform transition-[transform,background-color,color] duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                isActive
                  ? 'w-9 h-9 sm:w-10 sm:h-10 bg-[#111111] text-white shadow-md scale-100'
                  : 'w-8 h-8 text-neutral-400 hover:text-black hover:bg-neutral-100/80 scale-95 ml-0.5'
              }`}>
                <Icon className={`transition-transform duration-300 ${isActive ? 'w-4.5 h-4.5 scale-105' : 'w-4 h-4'}`} />
              </div>

              {/* Aksen Indikator Halus di Ujung Kanan */}
              {isActive && (
                <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-4 rounded-l-full bg-neutral-300" />
              )}

              {/* Floating Tooltip Label */}
              <span className="absolute right-full mr-2.5 px-2.5 py-1 rounded-full bg-black/90 backdrop-blur-md text-white text-[11px] font-semibold tracking-wide whitespace-nowrap shadow-md pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden xs:block">
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* 2. HERO SECTION (Exact Jonny Czar centered composition & GT America Extended font) */}
      <section id="hero" className="pt-10 sm:pt-16 md:pt-28 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        
        {/* Giant Centered Headline with Refined Editorial Second Line (Monochrome Charcoal, Cinematic Smooth Transition & Infinite Repeat) */}
        <h1 className="font-gt-america text-3xl sm:text-5xl md:text-[54px] lg:text-[62px] leading-[1.15] text-center max-w-4xl mx-auto tracking-[-0.015em] break-words">
          <span className="text-black font-bold block">
            Nazalan Muaffari
          </span>
          <span className="block mt-1 sm:mt-2.5 h-[1.3em] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_0%,black_18%,black_82%,transparent_100%)]">
            <span
              className={`inline-block font-semibold whitespace-nowrap text-neutral-500 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
                isVisible
                  ? 'opacity-100 translate-y-0 scale-100 blur-0'
                  : 'opacity-0 -translate-y-2.5 scale-[0.98] blur-[3px]'
              }`}
            >
              {heroRoles[roleIndex]}
            </span>
          </span>
        </h1>

        {/* Supportive Subtitle */}
        <p className="text-base sm:text-xl md:text-2xl text-neutral-800 font-normal mt-4 sm:mt-6 max-w-3xl mx-auto tracking-normal px-2 leading-relaxed">
          Building scalable web applications, e-commerce systems, and modern digital products.
        </p>

        {/* Social Medias Row */}
        <div className="flex items-center justify-center gap-6 sm:gap-8 mt-6 sm:mt-7 mb-7 sm:mb-9">
          <a 
            href="https://www.linkedin.com/in/nazalan-muaffari-3512ba268/" 
            target="_blank" 
            rel="noreferrer"
            className="text-neutral-400 hover:text-black transition-colors p-1"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a 
            href="https://www.instagram.com/nazalan_muaffari/" 
            target="_blank" 
            rel="noreferrer"
            className="text-neutral-400 hover:text-black transition-colors p-1"
            title="Instagram"
          >
            <InstagramIcon className="w-5 h-5" />
          </a>
          <a 
            href="https://www.tiktok.com/@nazalan_muaffari" 
            target="_blank" 
            rel="noreferrer"
            className="text-neutral-400 hover:text-black transition-colors p-1"
            title="TikTok"
          >
            <TiktokIcon className="w-5 h-5" />
          </a>
        </div>

        {/* Centered High-Key Portrait Cutout (Touching the black bar beneath) */}
        <div className="flex justify-center -mb-1 mt-6 sm:mt-8">
          <img
            src="/nazalan_portrait.png"
            alt="Nazalan Muaffari"
            className="w-[280px] sm:w-[380px] md:w-[440px] lg:w-[480px] max-w-full h-auto block object-contain object-bottom mx-auto select-none pointer-events-none"
          />
        </div>
      </section>

      {/* 3. SOCIAL PROOF & METRICS RIBBON (Curated 6 Performance Numbers with Hover Elevation) */}
      <section className="w-full bg-[#000000] py-7 sm:py-10 border-y border-neutral-900">
        <div className="max-w-6xl lg:max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-3.5 lg:gap-2.5 xl:gap-3.5">
          
          {/* Metric 1: Revenue Generated */}
          <div className="group relative p-3.5 sm:p-4 lg:p-3.5 xl:p-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 hover:border-white/30 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_16px_35px_rgba(0,0,0,0.8),0_0_25px_rgba(255,255,255,0.06)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex flex-col justify-between">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <CircleDollarSign className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-neutral-300 group-hover:text-white shrink-0 group-hover:scale-110 transition-all duration-300" />
              <span className="font-gt-america text-[13px] xs:text-[13.5px] sm:text-[14.5px] md:text-[15.5px] lg:text-[13px] xl:text-[15px] text-white tracking-tight leading-none whitespace-nowrap">
                Ratusan Juta+
              </span>
            </div>
            <span className="text-[11.5px] sm:text-[12px] text-neutral-400 group-hover:text-neutral-200 font-medium tracking-normal mt-2 sm:mt-2.5 block transition-colors truncate">
              Revenue Generated
            </span>
          </div>

          {/* Metric 2: Clients Served */}
          <div className="group relative p-3.5 sm:p-4 lg:p-3.5 xl:p-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 hover:border-white/30 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_16px_35px_rgba(0,0,0,0.8),0_0_25px_rgba(255,255,255,0.06)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex flex-col justify-between">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Users className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-neutral-300 group-hover:text-white shrink-0 group-hover:scale-110 transition-all duration-300" />
              <span className="font-gt-america text-[15px] sm:text-[16px] md:text-[17px] lg:text-[14.5px] xl:text-[17px] text-white tracking-tight leading-none whitespace-nowrap">
                10.000+
              </span>
            </div>
            <span className="text-[11.5px] sm:text-[12px] text-neutral-400 group-hover:text-neutral-200 font-medium tracking-normal mt-2 sm:mt-2.5 block transition-colors truncate">
              Clients Served
            </span>
          </div>

          {/* Metric 3: Brands Managed */}
          <div className="group relative p-3.5 sm:p-4 lg:p-3.5 xl:p-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 hover:border-white/30 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_16px_35px_rgba(0,0,0,0.8),0_0_25px_rgba(255,255,255,0.06)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex flex-col justify-between">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Award className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-neutral-300 group-hover:text-white shrink-0 group-hover:scale-110 transition-all duration-300" />
              <span className="font-gt-america text-[15px] sm:text-[16px] md:text-[17px] lg:text-[14.5px] xl:text-[17px] text-white tracking-tight leading-none whitespace-nowrap">
                10+
              </span>
            </div>
            <span className="text-[11.5px] sm:text-[12px] text-neutral-400 group-hover:text-neutral-200 font-medium tracking-normal mt-2 sm:mt-2.5 block transition-colors truncate">
              Brands Managed
            </span>
          </div>

          {/* Metric 4: in Digital Business */}
          <div className="group relative p-3.5 sm:p-4 lg:p-3.5 xl:p-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 hover:border-white/30 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_16px_35px_rgba(0,0,0,0.8),0_0_25px_rgba(255,255,255,0.06)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex flex-col justify-between">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Briefcase className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-neutral-300 group-hover:text-white shrink-0 group-hover:scale-110 transition-all duration-300" />
              <span className="font-gt-america text-[15px] sm:text-[16px] md:text-[17px] lg:text-[14.5px] xl:text-[17px] text-white tracking-tight leading-none whitespace-nowrap">
                5+ Years
              </span>
            </div>
            <span className="text-[11.5px] sm:text-[12px] text-neutral-400 group-hover:text-neutral-200 font-medium tracking-normal mt-2 sm:mt-2.5 block transition-colors truncate">
              in Digital Business
            </span>
          </div>

          {/* Metric 5: Software Engineering */}
          <div className="group relative p-3.5 sm:p-4 lg:p-3.5 xl:p-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 hover:border-white/30 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_16px_35px_rgba(0,0,0,0.8),0_0_25px_rgba(255,255,255,0.06)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex flex-col justify-between">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Code2 className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-neutral-300 group-hover:text-white shrink-0 group-hover:scale-110 transition-all duration-300" />
              <span className="font-gt-america text-[15px] sm:text-[16px] md:text-[17px] lg:text-[14.5px] xl:text-[17px] text-white tracking-tight leading-none whitespace-nowrap">
                3+ Years
              </span>
            </div>
            <span className="text-[11.5px] sm:text-[12px] text-neutral-400 group-hover:text-neutral-200 font-medium tracking-normal mt-2 sm:mt-2.5 block transition-colors truncate">
              Software Engineering
            </span>
          </div>

          {/* Metric 6: Projects Delivered */}
          <div className="group relative p-3.5 sm:p-4 lg:p-3.5 xl:p-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 hover:border-white/30 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_16px_35px_rgba(0,0,0,0.8),0_0_25px_rgba(255,255,255,0.06)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex flex-col justify-between">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Rocket className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-neutral-300 group-hover:text-white shrink-0 group-hover:scale-110 transition-all duration-300" />
              <span className="font-gt-america text-[15px] sm:text-[16px] md:text-[17px] lg:text-[14.5px] xl:text-[17px] text-white tracking-tight leading-none whitespace-nowrap">
                20+ Projects
              </span>
            </div>
            <span className="text-[11.5px] sm:text-[12px] text-neutral-400 group-hover:text-neutral-200 font-medium tracking-normal mt-2 sm:mt-2.5 block transition-colors truncate">
              Completed &amp; Shipped
            </span>
          </div>

        </div>
      </section>

      {/* 4. ABOUT SECTION (Centered About Me Heading + 3D Interactive Tilt Card with Yasio.dev Physics) */}
      <section id="about" className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 scroll-mt-20">
        <div id="highlights" className="sr-only" />
        
        {/* Centered Heading */}
        <div className="mb-6 sm:mb-8 text-center">
          <h2 className="font-gt-america text-3xl sm:text-4xl md:text-5xl text-black font-bold tracking-tight">
            About Me
          </h2>
        </div>

        {/* 3D Interactive Card (Timbul, Mengikuti Kursor, Glare Sheen, & Ramping di Mobile) */}
        <TiltAboutCard>
          <div className="space-y-3 sm:space-y-3.5 text-[15px] sm:text-[16px] text-neutral-600 leading-relaxed font-normal">
            <p>
              Halo, aku <strong className="text-black font-semibold">Nazalan Muaffari</strong>. Saat ini sedang menempuh studi <strong className="text-black font-semibold">S1 Bisnis Digital di Universitas Negeri Surabaya (UNESA)</strong> sekaligus aktif sebagai software engineer.
            </p>
            
            <p>
              Ketertarikanku berakar pada persimpangan <strong className="text-black font-semibold">rekayasa perangkat lunak</strong>, <strong className="text-black font-semibold">AI</strong>, dan <strong className="text-black font-semibold">ekonomi digital</strong>. Bagiku, teknologi kehilangan maknanya jika hanya menjadi tren atau sekadar jalan pintas instan.
            </p>

            <p>
              Karena itu, aku fokus <strong className="text-black font-semibold">mengarahkan AI untuk dampak nyata</strong>—membantu mahasiswa mengakselerasi riset kritis di kampus, serta memberdayakan UMKM dan masyarakat agar mandiri secara digital.
            </p>
          </div>
        </TiltAboutCard>
      </section>

      {/* 5. WORK SECTION (Exact Jonny Czar Two-Column Layout with Dot Bullets & GT America Headings) */}
      <section id="work" className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Sticky Sidebar Navigation */}
          <aside className="w-64 shrink-0 sticky top-28 hidden lg:block pr-4">
            
            {/* Selected Projects Section */}
            <div className="mb-8">
              <h3 className="text-[14px] font-semibold text-[#888888] mb-4">
                Selected Projects
              </h3>
              <nav className="space-y-4">
                <a href="#card-portal" className="flex items-center gap-3 text-[15px] font-medium text-[#777777] hover:text-[#111111] transition-colors group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#888888] group-hover:bg-black transition-colors shrink-0" />
                  <span>Manajemen Kelas 2026E</span>
                </a>
                <a href="#card-keuangan" className="flex items-center gap-3 text-[15px] font-medium text-[#777777] hover:text-[#111111] transition-colors group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#888888] group-hover:bg-black transition-colors shrink-0" />
                  <span>Aplikasi Keuangan</span>
                </a>
                <a href="#card-mylife" className="flex items-center gap-3 text-[15px] font-medium text-[#777777] hover:text-[#111111] transition-colors group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#888888] group-hover:bg-black transition-colors shrink-0" />
                  <span>Aplikasi MyLife Productivity</span>
                </a>
                <a href="#card-shopee" className="flex items-center gap-3 text-[15px] font-medium text-[#777777] hover:text-[#111111] transition-colors group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#888888] group-hover:bg-black transition-colors shrink-0" />
                  <span>NAZZGRAM Digital Store</span>
                </a>
              </nav>
            </div>

            {/* Certifications Section */}
            <div>
              <h3 className="text-[14px] font-semibold text-[#888888] mb-4">
                Certifications
              </h3>
              <nav className="space-y-3">
                <a href="#cert-ombn" className="flex items-center gap-2.5 text-[14px] font-medium text-[#777777] hover:text-[#111111] transition-colors group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#888888] group-hover:bg-black transition-colors shrink-0" />
                  <span className="truncate">Juara 1 Informatika OMBN</span>
                </a>
                <a href="#cert-revou" className="flex items-center gap-2.5 text-[14px] font-medium text-[#777777] hover:text-[#111111] transition-colors group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#888888] group-hover:bg-black transition-colors shrink-0" />
                  <span className="truncate">Digital Marketing RevoU</span>
                </a>
              </nav>
            </div>

          </aside>

          {/* Right Column: Elevation Cards Stack */}
          <div className="flex-1 space-y-12 sm:space-y-16 md:space-y-20 w-full min-w-0">

            {/* ELEVATION CARD 1: Manajemen Kelas 2026E */}
            <article id="card-portal" className="rounded-[28px] sm:rounded-[36px] overflow-hidden border border-neutral-200/80 shadow-[0_12px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-300">
              <div className="bg-[#f2f2f4] p-6 sm:p-10 md:p-14">
                <p className="font-gt-america text-[14px] sm:text-[16px] uppercase tracking-wider text-neutral-500 mb-2.5 sm:mb-3 font-semibold">
                  CAMPUS WORKFLOWS &amp; COMMUNITY
                </p>
                <h2 className="font-gt-america text-2xl sm:text-3xl md:text-[42px] lg:text-[46px] text-neutral-900 tracking-tight leading-[1.14] mb-4 sm:mb-5 font-bold">
                  Manajemen Kelas 2026E
                </h2>
                <p className="text-[15px] sm:text-[17px] text-[#555555] max-w-2xl leading-relaxed mb-8 sm:mb-10 font-normal">
                  Sistem informasi terpadu dan Instagram kelas untuk mengoordinasikan jadwal perkuliahan real-time, tugas harian, serta bank materi perkuliahan bagi 38 mahasiswa aktif S1 Bisnis Digital UNESA.
                </p>

                {/* Real Mobile Mockups Frame */}
                <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-4 sm:gap-7 py-2 max-w-2xl mx-auto">
                  {/* Phone 1: Jadwal Kuliah */}
                  <div className="w-[185px] sm:w-[215px] rounded-[26px] sm:rounded-[30px] overflow-hidden border-[3.5px] border-neutral-900 bg-white shadow-[0_20px_45px_rgba(0,0,0,0.13)] shrink-0">
                    <img src="/projects/portal_jadwal.png" alt="Jadwal Kuliah Kelas 2026E" className="w-full h-auto object-cover block" />
                  </div>
                  {/* Phone 2: Bank Materi */}
                  <div className="w-[185px] sm:w-[215px] rounded-[26px] sm:rounded-[30px] overflow-hidden border-[3.5px] border-neutral-900 bg-white shadow-[0_20px_45px_rgba(0,0,0,0.13)] shrink-0 hidden xs:block">
                    <img src="/projects/portal_materi.png" alt="Bank Materi &amp; Modul Kelas 2026E" className="w-full h-auto object-cover block" />
                  </div>
                </div>
              </div>

              {/* Signature Footer Card Bar */}
              <div className="bg-white px-5 sm:px-8 py-4 sm:py-5 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3 sm:gap-3.5">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-neutral-900 text-white flex items-center justify-center font-bold text-sm sm:text-base shadow-xs shrink-0">
                    26E
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-neutral-900">Manajemen Kelas 2026E</h4>
                    <div className="flex items-center gap-1 text-xs text-amber-500 font-bold">
                      ★★★★★ <span className="text-neutral-500 font-medium">5.0 UNESA</span>
                    </div>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-6 sm:gap-8">
                  <div>
                    <p className="font-extrabold text-sm text-neutral-900">38 Daily</p>
                    <p className="text-xs text-neutral-500">Active Students</p>
                  </div>
                  <div>
                    <p className="font-extrabold text-sm text-neutral-900">100%</p>
                    <p className="text-xs text-neutral-500">On-Time Sync</p>
                  </div>
                </div>

                <a 
                  href="/portal" 
                  className="rounded-full bg-black hover:bg-neutral-800 text-white px-5 sm:px-7 py-2.5 sm:py-3 text-xs font-bold transition-all flex items-center gap-2 shrink-0 ml-auto sm:ml-0"
                >
                  <span>Explore Portal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>

            {/* ELEVATION CARD 2: Aplikasi Keuangan */}
            <article id="card-keuangan" className="rounded-[28px] sm:rounded-[36px] overflow-hidden border border-neutral-200/80 shadow-[0_12px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-300">
              <div className="bg-[#edf3fa] p-6 sm:p-10 md:p-14">
                <p className="font-gt-america text-[14px] sm:text-[16px] uppercase tracking-wider text-blue-900 mb-2.5 sm:mb-3 font-semibold">
                  FINANCIAL TECHNOLOGY
                </p>
                <h2 className="font-gt-america text-2xl sm:text-3xl md:text-[42px] lg:text-[46px] text-neutral-900 tracking-tight leading-[1.14] mb-4 sm:mb-5 font-bold">
                  Aplikasi Keuangan
                </h2>
                <p className="text-[15px] sm:text-[17px] text-[#555555] max-w-2xl leading-relaxed mb-8 sm:mb-10 font-normal">
                  Aplikasi pelacak keuangan cerdas dengan fitur mode ganda (Pribadi &amp; Bisnis), visualisasi donut chart pengeluaran per kategori, dan grafik analitik arus kas bulanan untuk menjaga stabilitas finansial.
                </p>

                {/* Real Mobile Mockups Frame */}
                <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-4 sm:gap-7 py-2 max-w-2xl mx-auto">
                  {/* Phone 1: Beranda Keuangan */}
                  <div className="w-[185px] sm:w-[215px] rounded-[26px] sm:rounded-[30px] overflow-hidden border-[3.5px] border-neutral-900 bg-white shadow-[0_20px_45px_rgba(0,0,0,0.13)] shrink-0">
                    <img src="/projects/keuangan_beranda.png" alt="Aplikasi Keuangan - Beranda" className="w-full h-auto object-cover block" />
                  </div>
                  {/* Phone 2: Laporan Arus Kas */}
                  <div className="w-[185px] sm:w-[215px] rounded-[26px] sm:rounded-[30px] overflow-hidden border-[3.5px] border-neutral-900 bg-white shadow-[0_20px_45px_rgba(0,0,0,0.13)] shrink-0 hidden xs:block">
                    <img src="/projects/keuangan_laporan.png" alt="Aplikasi Keuangan - Laporan Arus Kas" className="w-full h-auto object-cover block" />
                  </div>
                </div>
              </div>

              {/* Signature Footer Card Bar */}
              <div className="bg-white px-5 sm:px-8 py-4 sm:py-5 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3 sm:gap-3.5">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-sm sm:text-base shadow-xs shrink-0">
                    <CircleDollarSign className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-neutral-900">Aplikasi Keuangan</h4>
                    <div className="flex items-center gap-1 text-xs text-amber-500 font-bold">
                      ★★★★★ <span className="text-neutral-500 font-medium">Personal &amp; Business</span>
                    </div>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-6 sm:gap-8">
                  <div>
                    <p className="font-extrabold text-sm text-neutral-900">Dual Mode</p>
                    <p className="text-xs text-neutral-500">Pribadi &amp; Bisnis</p>
                  </div>
                  <div>
                    <p className="font-extrabold text-sm text-neutral-900">Real-Time</p>
                    <p className="text-xs text-neutral-500">Analitik Arus Kas</p>
                  </div>
                </div>

                <a 
                  href="mailto:nazalanmuaffari@gmail.com?subject=Tanya%20Aplikasi%20Keuangan" 
                  className="rounded-full bg-neutral-900 hover:bg-neutral-800 text-white px-5 sm:px-7 py-2.5 sm:py-3 text-xs font-bold transition-all flex items-center gap-2 shrink-0 ml-auto sm:ml-0"
                >
                  <span>Detail Aplikasi</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>

            {/* ELEVATION CARD 3: Aplikasi MyLife Productivity */}
            <article id="card-mylife" className="rounded-[28px] sm:rounded-[36px] overflow-hidden border border-neutral-200/80 shadow-[0_12px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-300">
              <div className="bg-[#eef8f2] p-6 sm:p-10 md:p-14">
                <p className="font-gt-america text-[14px] sm:text-[16px] uppercase tracking-wider text-emerald-900 mb-2.5 sm:mb-3 font-semibold">
                  PRODUCTIVITY &amp; DEEP WORK
                </p>
                <h2 className="font-gt-america text-2xl sm:text-3xl md:text-[42px] lg:text-[46px] text-neutral-900 tracking-tight leading-[1.14] mb-4 sm:mb-5 font-bold">
                  Aplikasi MyLife Productivity
                </h2>
                <p className="text-[15px] sm:text-[17px] text-[#555555] max-w-2xl leading-relaxed mb-8 sm:mb-10 font-normal">
                  Asisten produktivitas harian terintegrasi: pelacak konsistensi kebiasaan (habit tracker), checklist target harian bertahap, dan sesi Pomodoro 25 menit bebas distraksi untuk fokus kerja mendalam.
                </p>

                {/* Real Mobile Mockup Frame */}
                <div className="flex items-center justify-center py-2 max-w-md mx-auto">
                  <div className="w-[200px] sm:w-[230px] rounded-[26px] sm:rounded-[30px] overflow-hidden border-[3.5px] border-neutral-900 bg-white shadow-[0_20px_45px_rgba(0,0,0,0.13)]">
                    <img src="/projects/mylife_home.png" alt="Aplikasi MyLife Productivity" className="w-full h-auto object-cover block" />
                  </div>
                </div>
              </div>

              {/* Signature Footer Card Bar */}
              <div className="bg-white px-5 sm:px-8 py-4 sm:py-5 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3 sm:gap-3.5">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-sm sm:text-base shadow-xs shrink-0">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-neutral-900">MyLife Productivity</h4>
                    <div className="flex items-center gap-1 text-xs text-amber-500 font-bold">
                      ★★★★★ <span className="text-neutral-500 font-medium">Deep Work Companion</span>
                    </div>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-6 sm:gap-8">
                  <div>
                    <p className="font-extrabold text-sm text-neutral-900">Pomodoro 25m</p>
                    <p className="text-xs text-neutral-500">Focus Session</p>
                  </div>
                  <div>
                    <p className="font-extrabold text-sm text-neutral-900">Habit Matrix</p>
                    <p className="text-xs text-neutral-500">Daily Consistency</p>
                  </div>
                </div>

                <a 
                  href="mailto:nazalanmuaffari@gmail.com?subject=Tanya%20MyLife%20Productivity" 
                  className="rounded-full bg-neutral-900 hover:bg-neutral-800 text-white px-5 sm:px-7 py-2.5 sm:py-3 text-xs font-bold transition-all flex items-center gap-2 shrink-0 ml-auto sm:ml-0"
                >
                  <span>Detail Aplikasi</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>

            {/* ELEVATION CARD 4: NAZZGRAM Official Store */}
            <article id="card-shopee" className="rounded-[28px] sm:rounded-[36px] overflow-hidden border border-neutral-200/80 shadow-[0_12px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-300">
              <div className="bg-[#fcf5f2] p-6 sm:p-10 md:p-14">
                <div className="flex flex-wrap items-center gap-2 mb-2.5 sm:mb-3">
                  <span className="font-gt-america text-[13px] sm:text-[15px] uppercase tracking-wider text-[#d03b1b] font-bold">
                    DIGITAL COMMERCE &amp; VENTURE
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-[#d03b1b] text-[11px] font-bold">
                    5+ Tahun Beroperasi
                  </span>
                </div>
                <h2 className="font-gt-america text-2xl sm:text-3xl md:text-[42px] lg:text-[46px] text-neutral-900 tracking-tight leading-[1.14] mb-4 sm:mb-5 font-bold">
                  NAZZGRAM Official Store
                </h2>
                <p className="text-[15px] sm:text-[17px] text-[#555555] max-w-2xl leading-relaxed mb-8 sm:mb-10 font-normal">
                  Membangun dan mengoperasikan brand toko digital &amp; retail e-commerce <strong className="text-neutral-900 font-semibold">NAZZGRAM</strong> selama lebih dari 5 tahun di marketplace Shopee. Menghadirkan solusi langganan digital, kecerdasan buatan (ChatGPT Pro, Gemini AI Pro), serta produk teknologi &amp; kebutuhan rumah dengan mempertahankan standar kepuasan pelanggan bintang ★ 4.9 dari 7.500+ ulasan pembeli terverifikasi.
                </p>

                {/* Real Store Showcase Mockup Frame */}
                <div className="bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-5 shadow-[0_15px_35px_rgba(0,0,0,0.06)] border border-neutral-200/80 max-w-3xl mx-auto overflow-hidden">
                  {/* Browser / Marketplace Top Header */}
                  <div className="flex items-center justify-between border-b border-neutral-100 pb-3 mb-3 px-1">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-[#ee4d2d] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                        <ShoppingBag className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[12px] sm:text-xs font-bold text-neutral-900">Shopee Marketplace • NAZZGRAM Profile</span>
                    </div>
                    <span className="text-[11px] sm:text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                      ★ 4.9 (7,5RB Penilaian)
                    </span>
                  </div>

                  {/* Real Store Banner Screenshot */}
                  <div className="rounded-xl overflow-hidden border border-neutral-200/80 shadow-xs mb-4 bg-neutral-50">
                    <img 
                      src="/projects/nazzgram_store.png" 
                      alt="Toko Shopee NAZZGRAM - 57.6K Followers" 
                      className="w-full h-auto object-cover block"
                    />
                  </div>

                  {/* 4 High-Impact Metric Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 text-left">
                    <div className="p-3 sm:p-3.5 rounded-xl bg-orange-50/60 border border-orange-100/90">
                      <p className="text-[11px] text-neutral-500 font-medium">Pengikut Shopee</p>
                      <p className="text-base sm:text-lg font-extrabold text-neutral-900 mt-0.5">57,6RB+</p>
                      <p className="text-[10px] text-orange-700 font-semibold mt-0.5">Komunitas Loyal</p>
                    </div>
                    <div className="p-3 sm:p-3.5 rounded-xl bg-orange-50/60 border border-orange-100/90">
                      <p className="text-[11px] text-neutral-500 font-medium">Ulasan Pembeli</p>
                      <p className="text-base sm:text-lg font-extrabold text-neutral-900 mt-0.5">7,5RB+</p>
                      <p className="text-[10px] text-amber-700 font-semibold mt-0.5">Rating ★ 4.9 / 5.0</p>
                    </div>
                    <div className="p-3 sm:p-3.5 rounded-xl bg-orange-50/60 border border-orange-100/90">
                      <p className="text-[11px] text-neutral-500 font-medium">Pengalaman Toko</p>
                      <p className="text-base sm:text-lg font-extrabold text-neutral-900 mt-0.5">5+ Tahun</p>
                      <p className="text-[10px] text-emerald-700 font-semibold mt-0.5">Sejak 2021</p>
                    </div>
                    <div className="p-3 sm:p-3.5 rounded-xl bg-orange-50/60 border border-orange-100/90">
                      <p className="text-[11px] text-neutral-500 font-medium">Performa Chat</p>
                      <p className="text-base sm:text-lg font-extrabold text-neutral-900 mt-0.5">95%</p>
                      <p className="text-[10px] text-blue-700 font-semibold mt-0.5">Dibalas Cepat</p>
                    </div>
                  </div>

                  {/* Product Keywords Chips */}
                  <div className="mt-3.5 pt-3 border-t border-neutral-100 flex flex-wrap gap-1.5 sm:gap-2">
                    <span className="px-2.5 py-1 rounded-lg bg-neutral-100/80 text-[11px] font-semibold text-neutral-700">
                      ChatGPT Pro &amp; Gemini AI
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-neutral-100/80 text-[11px] font-semibold text-neutral-700">
                      Tech &amp; Phone Accessories
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-neutral-100/80 text-[11px] font-semibold text-neutral-700">
                      E-Commerce Search SEO
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-neutral-100/80 text-[11px] font-semibold text-neutral-700">
                      Marketplace Growth
                    </span>
                  </div>
                </div>
              </div>

              {/* Signature Footer Card Bar */}
              <div className="bg-white px-5 sm:px-8 py-4 sm:py-5 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3 sm:gap-3.5">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#ee4d2d] text-white flex items-center justify-center font-bold text-sm sm:text-base shadow-xs shrink-0">
                    <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-neutral-900">NAZZGRAM Store</h4>
                    <div className="flex items-center gap-1 text-xs text-amber-500 font-bold">
                      ★★★★★ <span className="text-neutral-500 font-medium">4.9 • 57.6K Followers</span>
                    </div>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-6 sm:gap-8">
                  <div>
                    <p className="font-extrabold text-sm text-neutral-900">57,6RB+</p>
                    <p className="text-xs text-neutral-500">Followers Shopee</p>
                  </div>
                  <div>
                    <p className="font-extrabold text-sm text-neutral-900">7,5RB+</p>
                    <p className="text-xs text-neutral-500">Ulasan Pembeli</p>
                  </div>
                </div>

                <a 
                  href="https://shopee.co.id/nazzgram" 
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-[#ee4d2d] hover:bg-[#d03b1b] text-white px-5 sm:px-7 py-2.5 sm:py-3 text-xs font-bold transition-all flex items-center gap-2 shrink-0 ml-auto sm:ml-0 shadow-xs"
                >
                  <span>Kunjungi Toko Shopee</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* 6. LICENSES & CERTIFICATIONS SECTION */}
      <section id="certifications" className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20 md:py-24 pb-24 sm:pb-32 border-t border-neutral-200/70 scroll-mt-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-12 gap-3">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/60 text-amber-800 text-[11px] font-bold uppercase tracking-wider mb-2.5">
              <Trophy className="w-3.5 h-3.5 text-amber-600" />
              <span>Verified Honors &amp; Credentials</span>
            </div>
            <h2 className="font-gt-america text-2xl sm:text-3xl md:text-4xl text-black font-bold tracking-tight">
              Licenses &amp; Certifications
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-500 font-normal max-w-md">
            Sertifikat penghargaan kejuaraan dan lisensi kompetensi profesional resmi. Hover kursor untuk efek 3D tilt fisik interaktif, dan klik kartu untuk melihat resolusi penuh (Full HD).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          
          {/* 3D CERTIFICATE CARD 1: Juara 1 Lomba Informatika OMBN 2025 */}
          <article id="cert-ombn" className="flex flex-col">
            <TiltCertificateCard 
              className="group flex-1 flex flex-col shadow-[0_16px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_28px_60px_rgba(0,0,0,0.12)] border-neutral-200/80"
              onClick={() => setPreviewCert({
                src: '/certificates/sertifikat_juara1_ombn_informatika.png',
                title: 'Juara 1 Lomba Informatika — OMBN 2025',
                subtitle: 'Olimpiade Muhammadiyah Berprestasi Nasional Kab. Cirebon • No. 700/I.4.OMBN/2024'
              })}
            >
              {/* Certificate Image Frame Container with Aspect Ratio */}
              <div className="relative aspect-[16/11.3] w-full bg-[#f4f4f7] border-b border-neutral-100 overflow-hidden flex items-center justify-center p-3 sm:p-4 group/preview">
                {/* Visual Certificate Paper with Matte Shadow */}
                <div className="w-full h-full rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_8px_25px_rgba(0,0,0,0.12)] border border-neutral-200/90 relative bg-white">
                  <img 
                    src="/certificates/sertifikat_juara1_ombn_informatika.png" 
                    alt="Sertifikat Juara 1 Lomba Informatika OMBN 2025 - Nazalan Muaffari" 
                    className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover/preview:scale-[1.03]"
                  />
                  {/* Subtle Gradient Shadow Vignette */}
                  <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[inherit]" />
                </div>

                {/* Floating Interactive Zoom Pill Badge */}
                <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 text-neutral-900 text-xs font-bold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <ZoomIn className="w-4 h-4 text-amber-600" />
                    <span>Perbesar Sertifikat HD</span>
                  </span>
                </div>

                {/* Top Corner Trophy Stamp */}
                <div className="absolute top-5 right-5 sm:top-6 sm:right-6 z-10 pointer-events-none">
                  <div className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center shadow-lg border-2 border-white">
                    <Trophy className="w-5 h-5 text-amber-100" />
                  </div>
                </div>
              </div>

              {/* Certificate Editorial Details */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-100/80 text-amber-800 text-[11px] font-extrabold uppercase tracking-wider">
                      Juara 1 • 1st Place Winner
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-neutral-100 text-neutral-600 text-[11px] font-semibold">
                      Desember 2024
                    </span>
                  </div>

                  <h3 className="font-gt-america text-xl sm:text-2xl text-neutral-900 font-bold tracking-tight mb-2 leading-snug">
                    Juara 1 Lomba Informatika — OMBN 2025
                  </h3>

                  <p className="text-xs sm:text-sm font-semibold text-neutral-600 mb-3 flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Pimpinan Pusat Muhammadiyah • Tingkat Kab. Cirebon</span>
                  </p>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal mb-5">
                    Meraih Juara 1 dalam Olimpiade Muhammadiyah Berprestasi Nasional jenjang SMA/SMK/MA bidang Informatika dan Teknologi Komputer, membuktikan kapabilitas logika algoritmik, pemrograman, dan penguasaan fondasi ilmu informatika.
                  </p>

                  {/* Metadata Chips */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6">
                    <span className="px-2.5 py-1 rounded-lg bg-neutral-50 border border-neutral-200/70 text-[11px] font-medium text-neutral-700">
                      No: 700/I.4.OMBN/2024
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-neutral-50 border border-neutral-200/70 text-[11px] font-medium text-neutral-700">
                      Bidang Informatika
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-neutral-50 border border-neutral-200/70 text-[11px] font-medium text-neutral-700">
                      Majelis Dikdasmen &amp; PNF
                    </span>
                  </div>
                </div>

                {/* Footer Validation Strip */}
                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-emerald-700 font-bold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Terverifikasi Juara 1</span>
                  </div>
                  <span className="text-neutral-500 font-semibold group-hover:text-black transition-colors flex items-center gap-1">
                    <span>Lihat Full HD</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </TiltCertificateCard>
          </article>

          {/* 3D CERTIFICATE CARD 2: RevoU Intro to Digital Marketing */}
          <article id="cert-revou" className="flex flex-col">
            <TiltCertificateCard 
              className="group flex-1 flex flex-col shadow-[0_16px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_28px_60px_rgba(0,0,0,0.12)] border-neutral-200/80"
              onClick={() => setPreviewCert({
                src: '/certificates/sertifikat_revou_digital_marketing.png',
                title: 'Intro to Digital Marketing — RevoU',
                subtitle: 'PT Revolusi Cita Edukasi • Matteo Sutto CEO & Co-founder • April 2024'
              })}
            >
              {/* Certificate Image Frame Container with Aspect Ratio */}
              <div className="relative aspect-[16/11.3] w-full bg-[#f4f4f7] border-b border-neutral-100 overflow-hidden flex items-center justify-center p-3 sm:p-4 group/preview">
                {/* Visual Certificate Paper with Matte Shadow */}
                <div className="w-full h-full rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_8px_25px_rgba(0,0,0,0.12)] border border-neutral-200/90 relative bg-white">
                  <img 
                    src="/certificates/sertifikat_revou_digital_marketing.png" 
                    alt="Sertifikat RevoU Intro to Digital Marketing - Nazalan Muaffari" 
                    className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover/preview:scale-[1.03]"
                  />
                  {/* Subtle Gradient Shadow Vignette */}
                  <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[inherit]" />
                </div>

                {/* Floating Interactive Zoom Pill Badge */}
                <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 text-neutral-900 text-xs font-bold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <ZoomIn className="w-4 h-4 text-blue-600" />
                    <span>Perbesar Sertifikat HD</span>
                  </span>
                </div>

                {/* Top Corner RevoU Badge */}
                <div className="absolute top-5 right-5 sm:top-6 sm:right-6 z-10 pointer-events-none">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg border-2 border-white">
                    <Award className="w-5 h-5 text-blue-100" />
                  </div>
                </div>
              </div>

              {/* Certificate Editorial Details */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-100/80 text-blue-800 text-[11px] font-extrabold uppercase tracking-wider">
                      Certified Online Course
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-neutral-100 text-neutral-600 text-[11px] font-semibold">
                      April 2024
                    </span>
                  </div>

                  <h3 className="font-gt-america text-xl sm:text-2xl text-neutral-900 font-bold tracking-tight mb-2 leading-snug">
                    Intro to Digital Marketing — RevoU
                  </h3>

                  <p className="text-xs sm:text-sm font-semibold text-neutral-600 mb-3 flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>PT Revolusi Cita Edukasi (RevoU)</span>
                  </p>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal mb-5">
                    Menuntaskan program intensif 1 minggu penguasaan fundamental strategi pemasaran digital: Paid Advertising (Meta &amp; Google Ads), Social Media Organic Strategy, Analitik Funnel Konversi, dan Riset Pasar.
                  </p>

                  {/* Metadata Chips */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6">
                    <span className="px-2.5 py-1 rounded-lg bg-neutral-50 border border-neutral-200/70 text-[11px] font-medium text-neutral-700">
                      Performance Marketing
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-neutral-50 border border-neutral-200/70 text-[11px] font-medium text-neutral-700">
                      Social Media Ads
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-neutral-50 border border-neutral-200/70 text-[11px] font-medium text-neutral-700">
                      Marketing Analytics
                    </span>
                  </div>
                </div>

                {/* Footer Validation Strip */}
                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-emerald-700 font-bold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Lulus &amp; Tersertifikasi</span>
                  </div>
                  <span className="text-neutral-500 font-semibold group-hover:text-black transition-colors flex items-center gap-1">
                    <span>Lihat Full HD</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </TiltCertificateCard>
          </article>

        </div>
      </section>

      {/* FULL-RESOLUTION CERTIFICATE ZOOM MODAL (HIGH DEF PREVIEW) */}
      {previewCert && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setPreviewCert(null)}
        >
          <div 
            className="relative max-w-5xl w-full bg-neutral-900 border border-neutral-800 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Topbar */}
            <div className="px-5 sm:px-7 py-4 bg-neutral-900/90 border-b border-neutral-800 flex items-center justify-between gap-4">
              <div className="min-w-0">
                <h4 className="font-bold text-sm sm:text-base text-white truncate">
                  {previewCert.title}
                </h4>
                <p className="text-xs text-neutral-400 truncate">
                  {previewCert.subtitle}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a 
                  href={previewCert.src}
                  target="_blank" 
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-semibold transition-colors flex items-center gap-1.5"
                  title="Buka gambar di tab baru"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Buka Tab Baru</span>
                </a>
                <button
                  onClick={() => setPreviewCert(null)}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white flex items-center justify-center transition-colors"
                  aria-label="Tutup pratinjau"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>

            {/* Modal Image Viewport */}
            <div className="p-3 sm:p-6 overflow-auto flex items-center justify-center bg-neutral-950/50">
              <img 
                src={previewCert.src} 
                alt={previewCert.title}
                className="max-h-[72vh] w-auto h-auto max-w-full object-contain rounded-lg shadow-2xl border border-neutral-800"
              />
            </div>

            {/* Modal Bottom Bar */}
            <div className="px-5 sm:px-7 py-3 bg-neutral-900/80 border-t border-neutral-800/80 flex items-center justify-between text-[11px] sm:text-xs text-neutral-400">
              <span>Klik area di luar untuk menutup (atau tombol X)</span>
              <span className="font-semibold text-neutral-300">Nazalan Muaffari Official Portfolio</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

