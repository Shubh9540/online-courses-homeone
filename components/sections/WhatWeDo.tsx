import React from 'react';
import { WhatWeDoData } from '@/types/templates.types';
import { TbUsers, TbDeviceLaptop, TbCertificate, TbTrendingUp } from 'react-icons/tb';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'TbUsers': return <TbUsers />;
    case 'TbDeviceLaptop': return <TbDeviceLaptop />;
    case 'TbCertificate': return <TbCertificate />;
    case 'TbTrendingUp': return <TbTrendingUp />;
    default: return null;
  }
};

export const WhatWeDo = ({ data }: { data?: WhatWeDoData }) => {
  if (!data) return null;

  return (
    <section id="features" className="w-full py-8 lg:py-12 bg-[var(--color-dark-section)] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 relative z-10 flex flex-col items-center text-center">

        {/* Subtitle Badge */}
        <div className="mb-4 inline-flex items-center bg-[var(--color-primary-light)] text-[var(--color-accent)] border border-[var(--color-accent)]/30 px-4 py-1.5 rounded-full">
          <span className="text-xs lg:text-sm font-semibold tracking-wide">{data.subtitle}</span>
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-[var(--color-white)]">
          {data.title1}
          <span className="text-[var(--color-accent)]">{data.title2}</span>
        </h2>

        {/* Description */}
        <p className="text-white text-base lg:text-lg mb-16 leading-relaxed max-w-2xl">
          {data.description}
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 w-full">
          {(data.features || []).map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className="w-28 h-28 lg:w-32 lg:h-32 shrink-0 rounded-full bg-[var(--color-primary-light)] border border-[var(--color-accent)]/20 shadow-[0_10px_40px_var(--color-brand-shadow-8)] text-[var(--color-accent)] flex items-center justify-center text-5xl lg:text-6xl mb-6 transition-transform hover:-translate-y-2 hover:border-[var(--color-accent)]">
                {renderIcon(feature.icon)}
              </div>

              {/* Text Content */}
              <h4 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h4>
              <p className="text-white text-sm sm:text-base leading-relaxed max-w-xs">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
