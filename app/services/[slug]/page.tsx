import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, getServiceBySlug } from "@/lib/services";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const currentIndex = services.findIndex((s) => s.id === slug);
  const prev = currentIndex > 0 ? services[currentIndex - 1] : null;
  const next = currentIndex < services.length - 1 ? services[currentIndex + 1] : null;

  return (
    <>
      {/* Breadcrumb + Header */}
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#2e5490] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <nav className="flex items-center gap-2 text-blue-200 text-xs mb-5">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white">{service.title}</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">{service.title}</h1>
          <p className="text-[#0891b2] text-base font-medium">{service.tagline}</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main */}
          <div className="lg:col-span-2">
            <p className="text-[#374151] text-lg leading-relaxed mb-10">
              {service.description}
            </p>

            <div className="mb-10">
              <h2 className="text-lg font-bold text-[#1e3a5f] mb-5 flex items-center gap-2">
                <span className="w-1 h-5 bg-[#0891b2] rounded-full inline-block" />
                Services Offered
              </h2>
              <ul className="space-y-3">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#f5f7fa] transition-colors">
                    <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#0891b2]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#374151] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Who it's for */}
            <div className="bg-[#f5f7fa] border border-[#e2e8f0] rounded-xl p-6">
              <h3 className="font-bold text-[#1e3a5f] mb-2 flex items-center gap-2">
                <svg className="w-4 h-4 text-[#0891b2]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                Who it&apos;s for
              </h3>
              <p className="text-[#374151] text-sm leading-relaxed">{service.forWhom}</p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {/* CTA card */}
            <div className="bg-[#1e3a5f] text-white rounded-xl p-6">
              <h3 className="font-bold text-base mb-2">Need this service?</h3>
              <p className="text-blue-200 text-sm mb-5 leading-relaxed">
                Get in touch for a free initial consultation. We&apos;ll assess your situation and recommend the right approach.
              </p>
              <Link
                href="/contact"
                className="block text-center py-3 bg-[#0891b2] hover:bg-[#0779a0] text-white font-semibold rounded-lg transition-colors text-sm"
              >
                Contact Us
              </Link>
              <a
                href="https://wa.me/918184912955?text=Hello%2C%20I%20need%20help%20with%20"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center justify-center gap-2 py-3 bg-[#25d366] hover:bg-[#22c55e] text-white font-semibold rounded-lg transition-colors text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
            </div>

            {/* All services list */}
            <div className="border border-[#e2e8f0] rounded-xl overflow-hidden">
              <div className="bg-[#f5f7fa] px-4 py-3 border-b border-[#e2e8f0]">
                <p className="text-xs font-semibold text-[#64748b] uppercase tracking-wider">All Services</p>
              </div>
              <ul>
                {services.map((s) => (
                  <li key={s.id} className="border-b border-[#e2e8f0] last:border-0">
                    <Link
                      href={`/services/${s.id}`}
                      className={`flex items-center justify-between px-4 py-3 text-sm transition-colors ${
                        s.id === slug
                          ? "bg-[#1e3a5f] text-white font-semibold"
                          : "text-[#374151] hover:bg-[#f5f7fa] hover:text-[#1e3a5f]"
                      }`}
                    >
                      {s.title}
                      {s.id !== slug && (
                        <svg className="w-3.5 h-3.5 text-[#94a3b8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Prev / Next navigation */}
        <div className="mt-14 pt-8 border-t border-[#e2e8f0] grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prev ? (
            <Link
              href={`/services/${prev.id}`}
              className="group flex items-center gap-3 p-4 rounded-xl border border-[#e2e8f0] hover:border-[#0891b2]/30 hover:bg-[#f5f7fa] transition-all"
            >
              <svg className="w-5 h-5 text-[#94a3b8] group-hover:text-[#0891b2] flex-shrink-0 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <div>
                <p className="text-xs text-[#64748b] mb-0.5">Previous</p>
                <p className="text-sm font-semibold text-[#1e3a5f]">{prev.title}</p>
              </div>
            </Link>
          ) : <div />}

          {next ? (
            <Link
              href={`/services/${next.id}`}
              className="group flex items-center justify-end gap-3 p-4 rounded-xl border border-[#e2e8f0] hover:border-[#0891b2]/30 hover:bg-[#f5f7fa] transition-all sm:text-right"
            >
              <div>
                <p className="text-xs text-[#64748b] mb-0.5">Next</p>
                <p className="text-sm font-semibold text-[#1e3a5f]">{next.title}</p>
              </div>
              <svg className="w-5 h-5 text-[#94a3b8] group-hover:text-[#0891b2] flex-shrink-0 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ) : <div />}
        </div>
      </section>
    </>
  );
}
