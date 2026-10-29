'use client';
import React from 'react';
import { HeroData } from '@/types/templates.types';
import Link from 'next/link';
import CountUp from 'react-countup';
import { FaPlay, FaUsers, FaCertificate, FaBookOpen, FaUserTie, FaChartBar, FaGraduationCap, FaArrowRight } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaPlay': return <FaPlay />;
    case 'FaUsers': return <FaUsers />;
    case 'FaCertificate': return <FaCertificate />;
    case 'FaBookOpen': return <FaBookOpen />;
    case 'FaUserTie': return <FaUserTie />;
    case 'FaChartBar': return <FaChartBar />;
    default: return null;
  }
};

export const Hero = ({ data }: { data?: HeroData }) => {
  if (!data) return null;

  return (
    <section id="hero" className="relative w-full bg-[var(--color-bg-alt)] pt-2 lg:pt-4 pb-12 lg:pb-16 overflow-hidden flex flex-col">
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4">
          
          {/* Left Content */}
          <div className="w-full lg:w-[55%] flex flex-col items-start text-left z-20">
            {/* Subtitle Badge */}
            <div className="mb-3 lg:mb-4 flex items-center gap-2 bg-[var(--color-white)] text-[var(--color-primary)] px-4 py-1.5 rounded-full border border-[var(--color-slate-200)] shadow-sm">
              <FaGraduationCap className="text-base lg:text-lg" />
              <span className="text-xs lg:text-sm font-semibold tracking-wide">{data.subtitle}</span>
            </div>

            {/* Title */}
            <h1 className="mb-3 lg:mb-4 text-2xl sm:text-4xl lg:text-5xl leading-tight font-extrabold text-[var(--color-slate-900)] tracking-tight">
              <span>{data.title1} </span>
              {data.title3 && <span>{data.title3} </span>}
              <span className="text-[var(--color-primary)] relative inline-block whitespace-nowrap">
                {data.title2}
                {/* Underline SVG */}
                <svg className="absolute -bottom-1.5 left-0 w-full h-2 sm:h-3 text-[var(--color-accent)]" viewBox="0 0 200 20" preserveAspectRatio="none">
                  <path d="M0,15 C50,0 150,0 200,15" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>

            {/* Description */}
            <p className="mb-6 text-sm lg:text-base leading-relaxed text-[var(--color-slate-600)] max-w-lg">
              {data.description}
            </p>

            {/* Buttons */}
            <div className="flex items-center justify-start gap-4 mb-8">
              {data.button1 && (
                <Link 
                  href={data.button1.url} 
                  className="rounded-full bg-[var(--color-primary)] px-6 lg:px-8 py-3 text-sm lg:text-base font-semibold text-[var(--color-white)] transition-all hover:bg-[var(--color-primary-dark)] hover:shadow-lg flex items-center gap-2"
                >
                  {data.button1.text.replace('->', '').trim()}
                  <FaArrowRight className="text-xs lg:text-sm" />
                </Link>
              )}
            </div>

          </div>

          {/* Right Content - Full Animated Floating 3D Book Illustration */}
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end items-center mt-6 lg:mt-0 max-w-full">
            {/* Background Dotted Lines / Concentric Circles */}
            <div className="absolute top-1/2 left-1/2 w-[550px] h-[550px] lg:w-[650px] lg:h-[650px] border border-dashed border-[var(--color-border)] rounded-full -translate-x-1/2 -translate-y-1/2 opacity-70 hidden lg:block pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 w-[720px] h-[720px] lg:w-[820px] lg:h-[820px] border border-dashed border-[var(--color-border)]/60 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50 hidden lg:block pointer-events-none" />

            {/* Subtle Lime Aura Backdrop */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] bg-[var(--color-accent)]/15 rounded-full blur-2xl pointer-events-none" />

            {/* Main Full 3D Floating Book with continuous motion */}
            <div className="relative z-10 w-[95%] max-w-[340px] sm:max-w-md lg:max-w-xl animate-float-medium flex items-center justify-center">
              <img 
                src={data.image1 || '/other/hero_book_illustration.webp'} 
                alt={data.title1 || 'Online Courses'} 
                className="w-full h-auto object-contain drop-shadow-2xl" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
