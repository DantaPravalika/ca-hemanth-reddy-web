import type { Metadata } from "next";
import Link from "next/link";
import ClientReviews from "@/components/ClientReviews";

export const metadata: Metadata = {
  title: "CA Hemanth Reddy & Co | Chartered Accountants – Hyderabad",
  description:
    "Trusted audit, taxation, GST, and financial advisory services by CA Hemanth Reddy & Co, Hyderabad.",
};

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "Audit & Assurance",
    desc: "Statutory, internal, tax, and bank audits — independent verification your stakeholders can trust.",
    href: "/services#audit-assurance",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "GST Services",
    desc: "Registration, return filing, ITC reconciliation, and representation before GST authorities.",
    href: "/services#gst",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Income Tax & Advisory",
    desc: "ITR filing, tax planning, TDS compliance, assessments, and appeal representation.",
    href: "/services#income-tax",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Startup & Registrations",
    desc: "Company incorporation, DPIIT recognition, MSME, FSSAI, IEC and all startup registrations.",
    href: "/services#startup-registrations",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Business Support Services",
    desc: "Bookkeeping, payroll, Virtual CFO, financial statements, and MIS — your back-office, handled.",
    href: "/services#business-support",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: "Project Finance",
    desc: "DPR preparation, CMA data, bank proposals, and liaison for term loans and working capital.",
    href: "/services#project-finance",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Legal & Secretarial Compliances",
    desc: "ROC filings, RBI/FEMA compliances, MSME, director changes, share allotment, and restructuring.",
    href: "/services#legal-secretarial",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "RERA Services",
    desc: "Project registration, quarterly reporting, bank account monitoring, and RERA compliance advisory.",
    href: "/services#rera",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Valuations",
    desc: "Business, share, and asset valuations for M&A, investment, FEMA compliance, and ESOPs.",
    href: "/services#valuations",
  },
];

const stats = [
  { value: "ACA", label: "ICAI Qualified" },
  { value: "9+", label: "Service Areas" },
  { value: "ICAI", label: "Registered Member" },
  { value: "100%", label: "Commitment" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1e3a5f] to-[#2e5490] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <span className="inline-block bg-[#0891b2]/20 text-[#0891b2] text-xs font-semibold px-3 py-1.5 rounded-full mb-5 tracking-wide uppercase border border-[#0891b2]/30">
              Chartered Accountants · Hyderabad
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Clarity, Compliance &amp;<br className="hidden sm:block" />
              Confidence for Your Business
            </h1>
            <p className="text-blue-100 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl">
              CA Hemanth Reddy &amp; Co delivers reliable audit, tax, GST and advisory services — helping you stay compliant and grow with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#0891b2] hover:bg-[#0779a0] text-white font-semibold rounded-lg transition-colors text-base"
              >
                Schedule a Consultation
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-lg transition-colors text-base"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-[#f5f7fa] border-b border-[#e2e8f0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-[#1e3a5f]">{s.value}</p>
                <p className="text-[#64748b] text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1e3a5f] mb-3">What We Do</h2>
          <p className="text-[#64748b] max-w-xl mx-auto">
            A full spectrum of accounting and compliance services under one roof — so you can focus on running your business.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group p-6 bg-white border border-[#e2e8f0] rounded-xl hover:shadow-md hover:border-[#1e3a5f]/20 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-[#1e3a5f]/5 text-[#1e3a5f] flex items-center justify-center mb-4 group-hover:bg-[#1e3a5f] group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="font-semibold text-[#1e3a5f] text-base mb-2">{service.title}</h3>
              <p className="text-[#64748b] text-sm leading-relaxed">{service.desc}</p>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[#1e3a5f] font-semibold hover:text-[#2e5490] transition-colors"
          >
            View all services
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Why trust us — 4 feature cards */}
      <section className="bg-[#f5f7fa] border-y border-[#e2e8f0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1e3a5f] mb-3">Why Clients Trust Us</h2>
            <p className="text-[#64748b] max-w-xl mx-auto">
              We combine up-to-date expertise with a personalised approach — your business is never just a file number with us.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
                title: "Freshly Qualified",
                desc: "ACA from ICAI with current knowledge of the latest tax laws, GST circulars, and MCA filings.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Proactive Compliance",
                desc: "We track regulatory changes so you never miss a deadline or face an avoidable penalty.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                ),
                title: "Clear Communication",
                desc: "No jargon — every recommendation explained in plain language you can act on confidently.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
                title: "Data Confidentiality",
                desc: "Your financial information is handled with the highest discretion and never shared without consent.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-[#e2e8f0] shadow-sm">
                <div className="w-11 h-11 rounded-lg bg-[#0891b2]/10 text-[#0891b2] flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-[#1e3a5f] text-sm mb-2">{item.title}</h3>
                <p className="text-[#64748b] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What clients say + Google review CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1e3a5f] mb-3">What Our Clients Say</h2>
          <p className="text-[#64748b]">Real feedback from businesses and individuals we have worked with.</p>
        </div>

        <ClientReviews />
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1e3a5f] mb-4">
          Ready to simplify your finances?
        </h2>
        <p className="text-[#64748b] mb-8 max-w-lg mx-auto">
          Book a free 30-minute consultation and let us understand your needs before we recommend anything.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#1e3a5f] hover:bg-[#2e5490] text-white font-semibold rounded-lg transition-colors text-base"
        >
          Book Free Consultation
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </section>
    </>
  );
}
