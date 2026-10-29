'use client';
import React, { useState } from 'react';
import { ContactUsData } from '@/types/templates.types';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaRegClock, FaPaperPlane } from 'react-icons/fa';

export const Contact = ({ data }: { data?: ContactUsData }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!data) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', course: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="w-full py-8 lg:py-12 bg-[var(--color-dark-section)] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-14">
          <div className="mb-4 inline-flex items-center gap-2 bg-[var(--color-primary-light)] text-[var(--color-accent)] border border-[var(--color-accent)]/30 px-4 py-1.5 rounded-full">
            <span className="text-xs font-bold tracking-widest uppercase">{data.subtitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--color-white)] leading-tight mb-4">
            {data.title1} <span className="text-[var(--color-accent)]">{data.title2}</span>
          </h2>
          <p className="text-white text-sm sm:text-base leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* Contact Grid: Info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            
            <div className="bg-[var(--color-white)] rounded-2xl p-6 sm:p-7 border border-[var(--color-slate-100)] shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-blue-50)] text-[var(--color-brand)] flex items-center justify-center text-xl shrink-0">
                <FaPhoneAlt />
              </div>
              <div className="flex flex-col">
                <h4 className="text-base font-bold text-[var(--color-heading)] mb-1">
                  {data.contactInfo.phoneTitle}
                </h4>
                <a href={`tel:${data.contactInfo.phone}`} className="text-sm text-[var(--color-slate-600)] hover:text-[var(--color-brand)] transition-colors">
                  {data.contactInfo.phone}
                </a>
              </div>
            </div>

            <div className="bg-[var(--color-white)] rounded-2xl p-6 sm:p-7 border border-[var(--color-slate-100)] shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-blue-50)] text-[var(--color-brand)] flex items-center justify-center text-xl shrink-0">
                <FaEnvelope />
              </div>
              <div className="flex flex-col">
                <h4 className="text-base font-bold text-[var(--color-heading)] mb-1">
                  {data.contactInfo.emailTitle}
                </h4>
                <a href={`mailto:${data.contactInfo.email}`} className="text-sm text-[var(--color-slate-600)] hover:text-[var(--color-brand)] transition-colors">
                  {data.contactInfo.email}
                </a>
              </div>
            </div>

            <div className="bg-[var(--color-white)] rounded-2xl p-6 sm:p-7 border border-[var(--color-slate-100)] shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-blue-50)] text-[var(--color-brand)] flex items-center justify-center text-xl shrink-0">
                <FaMapMarkerAlt />
              </div>
              <div className="flex flex-col">
                <h4 className="text-base font-bold text-[var(--color-heading)] mb-1">
                  {data.contactInfo.addressTitle}
                </h4>
                <p className="text-sm text-[var(--color-slate-600)] leading-relaxed">
                  {data.contactInfo.address}
                </p>
              </div>
            </div>

            <div className="bg-[var(--color-white)] rounded-2xl p-6 sm:p-7 border border-[var(--color-slate-100)] shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-blue-50)] text-[var(--color-brand)] flex items-center justify-center text-xl shrink-0">
                <FaRegClock />
              </div>
              <div className="flex flex-col">
                <h4 className="text-base font-bold text-[var(--color-heading)] mb-1">
                  {data.contactInfo.hoursTitle}
                </h4>
                <p className="text-sm text-[var(--color-slate-600)] leading-relaxed">
                  {data.contactInfo.hoursLine1} <br />
                  {data.contactInfo.hoursLine2}
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-[var(--color-white)] rounded-3xl p-6 sm:p-10 border border-[var(--color-slate-100)] shadow-md flex flex-col justify-center">
            
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-[var(--color-heading)] mb-2">
                {data.form.title}
              </h3>
              <p className="text-sm text-[var(--color-slate-500)] leading-relaxed">
                {data.form.description}
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-6 bg-[var(--color-blue-50)] border border-[var(--color-brand)] rounded-2xl text-center">
                <h4 className="text-lg font-bold text-[var(--color-brand)] mb-2">Message Sent Successfully!</h4>
                <p className="text-sm text-[var(--color-slate-600)]">
                  Thank you for reaching out. An academic counselor will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder={data.form.namePlaceholder || "Your Full Name"}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[var(--color-slate-200)] focus:outline-none focus:border-[var(--color-brand)] text-sm text-[var(--color-slate-800)] placeholder:text-[var(--color-slate-400)] transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      placeholder={data.form.emailPlaceholder || "Your Email Address"}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[var(--color-slate-200)] focus:outline-none focus:border-[var(--color-brand)] text-sm text-[var(--color-slate-800)] placeholder:text-[var(--color-slate-400)] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="tel"
                      placeholder={data.form.phonePlaceholder || "Phone Number"}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[var(--color-slate-200)] focus:outline-none focus:border-[var(--color-brand)] text-sm text-[var(--color-slate-800)] placeholder:text-[var(--color-slate-400)] transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder={data.form.coursePlaceholder || "Interested Program"}
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[var(--color-slate-200)] focus:outline-none focus:border-[var(--color-brand)] text-sm text-[var(--color-slate-800)] placeholder:text-[var(--color-slate-400)] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <textarea
                    rows={4}
                    required
                    placeholder={data.form.messagePlaceholder || "Tell us about your learning goals or questions..."}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[var(--color-slate-200)] focus:outline-none focus:border-[var(--color-brand)] text-sm text-[var(--color-slate-800)] placeholder:text-[var(--color-slate-400)] transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-max px-8 py-3.5 rounded-full bg-[var(--color-accent)] hover:bg-[var(--color-accent-muted)] text-[var(--color-primary-dark)] text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-md shadow-[var(--color-accent)]/20 cursor-pointer"
                >
                  <span>{data.form.buttonText}</span>
                  <FaPaperPlane className="text-xs" />
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
