"use client";

import { useState, FormEvent } from "react";

interface FormState {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  honeypot: string;
}

const serviceOptions = [
  "Audit & Assurance",
  "Direct & Indirect Taxation",
  "GST Compliance",
  "Company Law & ROC Filings",
  "Business Advisory",
  "Accounting & Bookkeeping",
  "Other / Not sure",
];

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    honeypot: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (form.honeypot) return;

    setStatus("submitting");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "c0948b76-cba7-4e33-bfae-77c2c2b46b35",
          subject: `New enquiry from ${form.name} — CA Hemanth Reddy & Co`,
          from_name: "CA Hemanth Reddy Website",
          name: form.name,
          email: form.email,
          phone: form.phone || "Not provided",
          service: form.service || "Not selected",
          message: form.message,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", service: "", message: "", honeypot: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="bg-white border border-[#e2e8f0] rounded-2xl shadow-sm p-8">
      {status === "success" ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">Message Sent!</h3>
          <p className="text-[#64748b] mb-6">
            Thank you for reaching out. We will get back to you within one business day.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="px-6 py-2 bg-[#1e3a5f] text-white rounded-lg text-sm font-semibold hover:bg-[#2e5490] transition-colors"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#374151] mb-1.5">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg border border-[#e2e8f0] text-[#374151] placeholder-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/20 focus:border-[#1e3a5f] transition-colors text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#374151] mb-1.5">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg border border-[#e2e8f0] text-[#374151] placeholder-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/20 focus:border-[#1e3a5f] transition-colors text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-[#374151] mb-1.5">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="w-full px-4 py-3 rounded-lg border border-[#e2e8f0] text-[#374151] placeholder-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/20 focus:border-[#1e3a5f] transition-colors text-sm"
              />
            </div>
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-[#374151] mb-1.5">
                Service Required
              </label>
              <select
                id="service"
                name="service"
                value={form.service}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-[#e2e8f0] text-[#374151] focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/20 focus:border-[#1e3a5f] transition-colors text-sm bg-white appearance-none"
              >
                <option value="">Select a service…</option>
                {serviceOptions.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="mb-5">
            <label htmlFor="message" className="block text-sm font-medium text-[#374151] mb-1.5">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={form.message}
              onChange={handleChange}
              placeholder="Briefly describe your requirement or question…"
              className="w-full px-4 py-3 rounded-lg border border-[#e2e8f0] text-[#374151] placeholder-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/20 focus:border-[#1e3a5f] transition-colors text-sm resize-none"
            />
          </div>

          {/* Honeypot - hidden from humans */}
          <input
            type="text"
            name="honeypot"
            value={form.honeypot}
            onChange={handleChange}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          {status === "error" && (
            <p className="text-red-600 text-sm mb-4">
              Something went wrong. Please try again or email us directly.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full py-3.5 bg-[#1e3a5f] hover:bg-[#2e5490] disabled:opacity-60 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            {status === "submitting" ? (
              <>
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Sending…
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      )}
    </div>
  );
}
