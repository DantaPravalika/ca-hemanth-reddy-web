import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const BASE_URL = "https://ca-hemanth-reddy-web.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "CA Hemanth Reddy & Co | Chartered Accountants – Hyderabad",
    template: "%s | CA Hemanth Reddy & Co",
  },
  description:
    "CA Hemanth Reddy & Co offers expert audit, taxation, GST, company law and financial advisory services for businesses and individuals in Hyderabad, India.",
  keywords: [
    "Chartered Accountant Hyderabad",
    "CA Hemanth Reddy",
    "GST filing Hyderabad",
    "Income Tax filing",
    "Audit services Hyderabad",
    "Company registration Hyderabad",
    "Tax consultant LB Nagar",
    "CA firm Hyderabad",
    "ITR filing",
    "Business advisory Hyderabad",
  ],
  authors: [{ name: "CA Hemanth Reddy & Co" }],
  openGraph: {
    siteName: "CA Hemanth Reddy & Co",
    locale: "en_IN",
    type: "website",
    url: BASE_URL,
    title: "CA Hemanth Reddy & Co | Chartered Accountants – Hyderabad",
    description:
      "Trusted audit, taxation, GST, and financial advisory services by CA Hemanth Reddy & Co, Hyderabad.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CA Hemanth Reddy & Co | Chartered Accountants – Hyderabad",
    description:
      "Trusted audit, taxation, GST, and financial advisory services by CA Hemanth Reddy & Co, Hyderabad.",
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: "CA Hemanth Reddy & Co",
    description:
      "Chartered Accountants offering audit, taxation, GST, company law and financial advisory services in Hyderabad.",
    url: BASE_URL,
    telephone: "+91-81849-12955",
    email: "cahemanthreddy17@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Plot No 83, Siri Nagar Colony, Sri Sai Tarun Enclave, Siris Road, LB Nagar",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500074",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 17.3457,
      longitude: 78.5522,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:30",
      closes: "18:30",
    },
    priceRange: "$$",
    areaServed: {
      "@type": "City",
      name: "Hyderabad",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "CA Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Audit & Assurance" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "GST Services" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Income Tax & Advisory" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Startup & Registrations" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Business Support Services" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Project Finance" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "RERA Services" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Valuations" } },
      ],
    },
  };

  return (
    <html lang="en" className={`${geistSans.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
