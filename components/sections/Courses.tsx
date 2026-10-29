"use client";

import React from 'react';
import { CoursesData } from '@/types/templates.types';
import Link from 'next/link';
import Image from 'next/image';
import {
  FaArrowRight,
  FaStar,
  FaRegFileAlt,
  FaRegClock,
  FaChartBar,
  FaGraduationCap
} from 'react-icons/fa';

export const Courses = ({ data }: { data?: CoursesData }) => {
  if (!data) return null;

  return (
    <section id="courses" className="w-full py-8 lg:py-12 bg-[var(--color-dark-section)] relative">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">

        {/* Header Row */}
        <div className="mb-8 text-center">

          {/* Left Text */}
          <div className="mx-auto max-w-2xl">
            {/* Subtitle Badge */}
            <div className="mb-4 inline-flex items-center gap-2 bg-[var(--color-primary-light)] text-[var(--color-accent)] border border-[var(--color-accent)]/30 px-3.5 py-1.5 rounded-full">
              <FaGraduationCap className="text-sm" />
              <span className="text-xs font-bold tracking-widest uppercase">{data.subtitle}</span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight mb-3 text-[var(--color-white)] tracking-tight">
              {data.title1}
              <span className="text-[var(--color-accent)]">{data.title2}</span>
            </h2>

            {/* Description */}
            <p className="text-white text-sm lg:text-base leading-relaxed max-w-xl">
              {data.description}
            </p>
          </div>

        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.courses?.slice(0, 3).map((course) => (
            <div
              key={course.id}
              className="group bg-[var(--color-white)] rounded-3xl p-4 border border-[var(--color-slate-100)] shadow-[0_4px_20px_var(--color-shadow-3)] hover:shadow-[0_8px_30px_var(--color-shadow-8)] transition-all duration-300 flex flex-col gap-4"
            >
              {/* Left Image */}
              <div className="w-full relative aspect-[16/10] rounded-2xl overflow-hidden shrink-0">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Right Content */}
              <div className="flex-1 flex flex-col py-1 relative">

                {/* Rating */}
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="text-xs sm:text-sm font-bold text-[var(--color-slate-700)]">{course.rating}</span>
                  <div className="flex text-[var(--color-amber-400)] text-xs gap-0.5">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <span className="text-xs sm:text-sm text-[var(--color-slate-400)]">({course.reviews})</span>
                </div>

                {/* Title & Desc */}
                <h3 className="text-lg font-bold text-[var(--color-slate-900)] mb-2 leading-tight group-hover:text-[var(--color-primary)] transition-colors pr-8">
                  {course.title}
                </h3>
                <p className="text-sm text-[var(--color-slate-500)] leading-relaxed mb-5 line-clamp-2">
                  {course.description}
                </p>

                {/* Meta Tags */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-3 mb-5">
                  <div className="flex items-center gap-1.5 text-xs font-medium text-[var(--color-slate-600)]">
                    <FaRegFileAlt className="text-[var(--color-blue-500)] text-sm" />
                    {course.lessons}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-medium text-[var(--color-slate-600)]">
                    <FaRegClock className="text-[var(--color-blue-500)] text-sm" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-medium text-[var(--color-slate-600)]">
                    <FaChartBar className="text-[var(--color-blue-500)] text-sm" />
                    {course.level}
                  </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-[var(--color-slate-100)] mb-4"></div>

                {/* Footer: Button */}
                <div className="flex items-center justify-start mt-auto">
                  <Link
                    href={course.url || '/#contact'}
                    className="inline-flex items-center justify-center gap-2 bg-[var(--color-accent)] text-[var(--color-primary-dark)] px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold hover:bg-[var(--color-accent-muted)] transition-colors shadow-md shadow-[var(--color-accent)]/20"
                  >
                    {data.viewDetailsText || "Contact Now"}
                    <FaArrowRight className="text-xs" />
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
