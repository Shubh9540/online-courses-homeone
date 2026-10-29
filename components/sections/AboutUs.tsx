import React from 'react';
import { AboutUsData } from '@/types/templates.types';
import { FaGraduationCap, FaUsers, FaCheckCircle, FaBookOpen } from 'react-icons/fa';

export const AboutUs = ({ data }: { data?: AboutUsData }) => {
  if (!data) return null;

  return (
    <section id="about" className="w-full py-8 lg:py-12 bg-[var(--color-white)] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

        {/* Left Side: Bento Grid Images */}
        <div className="w-full lg:w-1/2 flex gap-4 sm:gap-6">
          {/* First Column */}
          <div className="flex flex-col gap-4 sm:gap-6 w-1/2">
            <div className="w-full rounded-2xl overflow-hidden aspect-[3/4] shadow-[0_8px_30px_var(--color-shadow-8)]">
              <img src={data.image1} alt="About Us" className="w-full h-full object-cover" />
            </div>
            {data.stats && (
              <div className="w-full bg-[var(--color-surface-blue)] rounded-2xl p-5 sm:p-6 shadow-sm flex flex-row items-center justify-start gap-3 sm:gap-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[var(--color-blue-100)] text-[var(--color-primary)] rounded-full flex items-center justify-center text-3xl sm:text-4xl shrink-0">
                  <FaUsers />
                </div>
                <div className="w-px h-14 bg-[var(--color-blue-100)] shrink-0 mx-1 sm:mx-2" />
                <div className="flex flex-col text-left">
                  <h3 className="text-3xl sm:text-4xl leading-none font-extrabold text-[var(--color-primary)] mb-1.5">{data.stats.experience}</h3>
                  <p className="text-[var(--color-slate-600)] text-xs sm:text-sm font-medium leading-snug w-20">{data.stats.experienceLabel}</p>
                </div>
              </div>
            )}
          </div>
          {/* Second Column */}
          <div className="flex flex-col gap-4 sm:gap-6 w-1/2 pt-10">
            {data.stats && (
              <div className="w-full bg-[var(--color-primary)] rounded-2xl p-6 shadow-lg flex flex-col sm:flex-row items-center gap-4 text-[var(--color-white)]">
                <div className="w-12 h-12 bg-[var(--color-white)]/20 rounded-full flex items-center justify-center text-2xl shrink-0">
                  <FaGraduationCap />
                </div>
                <h3 className="text-base font-bold leading-snug">{data.stats.badgeText}</h3>
              </div>
            )}
            <div className="w-full rounded-2xl overflow-hidden aspect-[4/5] sm:aspect-[4/5.5] shadow-[0_8px_30px_var(--color-shadow-8)]">
              {data.image2 && (
                <img src={data.image2} alt="About Us Learners" className="w-full h-full object-cover" />
              )}
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2 flex flex-col">

          {/* Subtitle Badge */}
          <div className="mb-5 inline-flex items-center gap-2 bg-[var(--color-bg-alt)] text-[var(--color-primary)] border border-[var(--color-slate-200)] px-4 py-1.5 rounded-full w-max">
            <FaBookOpen className="text-xs text-[var(--color-accent)]" />
            <span className="text-xs font-bold tracking-widest uppercase">{data.subtitle}</span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6 text-[var(--color-slate-900)] tracking-tight">
            {data.title1}
            <span className="text-[var(--color-accent)]">{data.title2}</span>
            {data.title3}
          </h2>

          {/* Description */}
          <p className="text-[var(--color-slate-500)] text-sm lg:text-base mb-8 leading-relaxed max-w-xl">
            {data.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-8 lg:gap-6">
            {/* Left Inner Content */}
            <div className="flex-1 flex flex-col">
              {/* Features List */}
              <ul className="flex flex-col gap-3.5">
                {data.features?.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="text-[var(--color-accent)] shrink-0">
                      <FaCheckCircle className="text-lg" />
                    </div>
                    <span className="text-[var(--color-slate-800)] font-bold text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
