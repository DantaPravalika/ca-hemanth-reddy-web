import type { Metadata } from "next";
import Link from "next/link";
import ProfilePhoto from "@/components/ProfilePhoto";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about CA Hemanth Reddy Danta & Co – our story, values, and the qualified team behind your financial compliance.",
};

const values = [
  {
    title: "Integrity",
    desc: "Every recommendation we make is honest, objective, and in your best interest – not shaped by what is convenient.",
  },
  {
    title: "Fresh Expertise",
    desc: "Freshly qualified from ICAI with current knowledge of the latest tax laws, GST circulars, and MCA regulations.",
  },
  {
    title: "Reliability",
    desc: "Deadlines are sacred. We track them so you don't have to, and we communicate early when anything changes.",
  },
  {
    title: "Confidentiality",
    desc: "Your financial information never leaves the firm without your explicit consent. Full stop.",
  },
];

const credentials = [
  "Associate Member, Institute of Chartered Accountants of India (ACA)",
  "Bachelor of Commerce (B.COM)",
  "Registered Statutory Auditor",
  "GST Practitioner — Telangana & Andhra Pradesh",
  "Company Law & MCA Compliance Specialist",
  "Specialisation across audit, taxation, GST, and startup advisory",
];

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#2e5490] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <p className="text-[#0891b2] text-xs font-semibold uppercase tracking-wider mb-3">About the Firm</p>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Who We Are</h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            A trusted Hyderabad-based CA firm built on professional rigour, transparency, and a genuine commitment to client success.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1e3a5f] mb-5">Our Story</h2>
            <div className="space-y-4 text-[#374151] leading-relaxed">
              <p>
                CA Hemanth Reddy &amp; Co was established with a single purpose: to give small and mid-sized businesses access to the same quality of financial and compliance advice that large corporates take for granted.
              </p>
              <p>
                Over the years, our practice has grown through word-of-mouth — from a handful of clients in Hyderabad to a diverse portfolio spanning manufacturing, IT services, real-estate, trading, and professional services.
              </p>
              <p>
                We do not chase volume. Every engagement is handled personally by CA Hemanth Reddy Danta, ensuring the quality, care, and accountability that every client deserves.
              </p>
            </div>
          </div>

          {/* Profile card */}
          <div className="bg-[#f5f7fa] rounded-2xl p-8 border border-[#e2e8f0]">
            <div className="flex items-center gap-5 mb-6">
              {/* Profile photo */}
              <div className="flex-shrink-0">
                <ProfilePhoto size={80} />
              </div>
              <div>
                <h3 className="font-bold text-[#1e3a5f] text-lg leading-tight">CA Hemanth Reddy Danta</h3>
                <p className="text-[#0891b2] text-sm font-semibold mt-0.5">Founder &amp; Principal Partner</p>
                <p className="text-[#64748b] text-xs mt-0.5">ACA, B.COM</p>
              </div>
            </div>
            <ul className="space-y-3">
              {credentials.map((c) => (
                <li key={c} className="flex items-start gap-3 text-sm text-[#374151]">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#0891b2]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {c}
                </li>
              ))}
            </ul>
            <div className="mt-5 pt-5 border-t border-[#e2e8f0] flex flex-wrap gap-3 text-sm text-[#64748b]">
              <a href="tel:+918184912955" className="flex items-center gap-1.5 hover:text-[#1e3a5f] transition-colors">
                <svg className="w-4 h-4 text-[#0891b2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 81849 12955
              </a>
              <a href="mailto:cahemanthreddy17@gmail.com" className="flex items-center gap-1.5 hover:text-[#1e3a5f] transition-colors">
                <svg className="w-4 h-4 text-[#0891b2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                cahemanthreddy17@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#f5f7fa] border-y border-[#e2e8f0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1e3a5f] mb-3">Our Values</h2>
            <p className="text-[#64748b] max-w-xl mx-auto">
              These four principles shape every interaction, engagement, and deliverable we produce.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={v.title} className="bg-white rounded-xl p-6 border border-[#e2e8f0] shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-[#1e3a5f] text-white flex items-center justify-center font-bold text-sm mb-4">
                  0{i + 1}
                </div>
                <h3 className="font-bold text-[#1e3a5f] mb-2">{v.title}</h3>
                <p className="text-[#64748b] text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
        <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">Let&apos;s talk about your requirements</h2>
        <p className="text-[#64748b] mb-8">
          Reach out for a no-obligation conversation about how we can help your business.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#1e3a5f] hover:bg-[#2e5490] text-white font-semibold rounded-lg transition-colors"
        >
          Contact Us
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </section>
    </>
  );
}
