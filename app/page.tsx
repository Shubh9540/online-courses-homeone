import React from 'react';
import { OnlineCourseTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';

import { Header } from '@/components/common/Header';
import { Hero } from '@/components/sections/Hero';
import { WhatWeDo } from '@/components/sections/WhatWeDo';
import { AboutUs } from '@/components/sections/AboutUs';
import { Courses } from '@/components/sections/Courses';
import { Process } from '@/components/sections/Process';
import { Instructors } from '@/components/sections/Instructors';
import { Testimonials } from '@/components/sections/Testimonials';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function Home() {
  const templateData: OnlineCourseTemplateData = rawData;
  const sectionData = templateData?.categories?.OnlineCourse?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="bg-[var(--color-bg-main)] min-h-screen flex flex-col scroll-smooth">
      <Header data={sectionData.Header?.variants?.OnlineCourseHeader2} />
      <Hero data={sectionData.Hero?.variants?.OnlineCourseHero2} />
      <WhatWeDo data={sectionData.WhatWeDo?.variants?.OnlineCourseWhatWeDo2} />
      <AboutUs data={sectionData.AboutUs?.variants?.OnlineCourseAboutUs2} />
      <Courses data={sectionData.Courses?.variants?.OnlineCourseCourses2} />
      <Process data={sectionData.Process?.variants?.OnlineCourseProcess2} />
      <Instructors data={sectionData.Instructors?.variants?.OnlineCourseInstructors2} />
      <Testimonials data={sectionData.Testimonials?.variants?.OnlineCourseTestimonials2} />
      <Contact data={sectionData.Contact?.variants?.OnlineCourseContact2} />
      <Footer data={commonData.Footer} />
    </main>
  );
}
