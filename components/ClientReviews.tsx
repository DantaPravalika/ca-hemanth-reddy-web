"use client";

import { useEffect, useState } from "react";

type Review = {
  id: string;
  name: string;
  role: string | null;
  text: string;
  rating: number;
  created_at: string;
};

const VISIBLE_DEFAULT = 2;

const seedReviews: Review[] = [
  {
    id: "seed-1",
    name: "Rajesh Kumar",
    role: "Director, RK Enterprises",
    text: "CA Hemanth Reddy handled our company incorporation and GST registration seamlessly. Very professional, thorough, and responsive — highly recommend!",
    rating: 5,
    created_at: "2025-12-01T10:00:00.000Z",
  },
  {
    id: "seed-2",
    name: "Sunitha Prasad",
    role: "Proprietor, SP Traders",
    text: "Filing ITR used to be stressful every year. Since we moved to Hemanth Reddy & Co, it's been smooth and on time. They explain everything clearly.",
    rating: 5,
    created_at: "2025-11-15T10:00:00.000Z",
  },
];

function initials(name: string): string {
  return name.split(/\s+/).filter(Boolean).map((w) => w[0]).join("").toUpperCase().slice(0, 2);
}

const avatarColors = [
  "#1e3a5f",
  "#0891b2",
  "#6d28d9",
  "#0d9488",
  "#b45309",
  "#be185d",
];

/* ─── Review Modal (inline) ──────────────────────────────────── */

function ReviewModalInline({ onSubmitted }: { onSubmitted: () => void }) {
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (rating === 0) { setError("Please select a star rating."); return; }
    if (!name.trim()) { setError("Please enter your name."); return; }
    if (!text.trim()) { setError("Please write your review."); return; }
    setError("");
    setSubmitting(true);
    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          role: role.trim(),
          text: text.trim(),
          rating,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to submit");
      }
      setSubmitted(true);
      onSubmitted();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  }

  function handleClose() {
    setOpen(false);
    setTimeout(() => {
      setSubmitted(false);
      setRating(0);
      setHovered(0);
      setName("");
      setRole("");
      setText("");
      setError("");
    }, 300);
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#1e3a5f] hover:bg-[#2e5490] text-white text-sm font-bold rounded-xl transition-colors shadow-md whitespace-nowrap"
      >
        <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        Write a Review
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
        >
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden">
            <div className="h-1.5 bg-gradient-to-r from-[#1e3a5f] via-[#0891b2] to-[#2e5490]" />
            <div className="flex items-center justify-between px-7 pt-6 pb-4">
              <div>
                <h2 className="text-lg font-bold text-[#1e3a5f]">Share Your Experience</h2>
                <p className="text-[#64748b] text-sm mt-0.5">CA Hemanth Reddy &amp; Co</p>
              </div>
              <button
                onClick={handleClose}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#f5f7fa] text-[#94a3b8] hover:text-[#374151] transition-colors"
                aria-label="Close"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="px-7 pb-7">
              {submitted ? (
                <div className="flex flex-col items-center text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">Thank you!</h3>
                  <p className="text-[#64748b] text-sm leading-relaxed mb-6">
                    Your review has been submitted and will appear on the site once approved. We appreciate your feedback!
                  </p>
                  <button
                    onClick={handleClose}
                    className="px-6 py-2.5 bg-[#1e3a5f] text-white text-sm font-semibold rounded-lg hover:bg-[#2e5490] transition-colors"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="mb-5">
                    <p className="text-sm font-semibold text-[#374151] mb-2">Your Rating</p>
                    <div className="flex gap-1.5" onMouseLeave={() => setHovered(0)}>
                      {[1, 2, 3, 4, 5].map((star) => {
                        const active = star <= (hovered || rating);
                        return (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setRating(star)}
                            onMouseEnter={() => setHovered(star)}
                            className={`rounded-md p-0.5 transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a5f]/30 ${active ? "scale-110" : "scale-100 hover:scale-105"}`}
                            aria-label={`${star} star`}
                          >
                            <svg
                              className={`w-8 h-8 transition-colors duration-150 ${
                                active
                                  ? "text-[#f59e0b] drop-shadow-[0_1px_2px_rgba(245,158,11,0.4)]"
                                  : "text-[#cbd5e1]"
                              }`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          </button>
                        );
                      })}
                      {rating > 0 && (
                        <span className="ml-2 self-center text-sm font-medium text-[#f59e0b]">
                          {["", "Poor", "Fair", "Good", "Very Good", "Excellent"][rating]}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-[#374151] mb-1.5">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Rajesh Kumar"
                      className="w-full px-4 py-2.5 border border-[#e2e8f0] rounded-lg text-sm text-[#374151] placeholder-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/20 focus:border-[#1e3a5f] transition-colors"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-[#374151] mb-1.5">
                      Role / Company <span className="text-[#94a3b8] font-normal">(optional)</span>
                    </label>
                    <input
                      type="text"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      placeholder="e.g. Director, ABC Pvt Ltd"
                      className="w-full px-4 py-2.5 border border-[#e2e8f0] rounded-lg text-sm text-[#374151] placeholder-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/20 focus:border-[#1e3a5f] transition-colors"
                    />
                  </div>

                  <div className="mb-5">
                    <label className="block text-sm font-semibold text-[#374151] mb-1.5">
                      Your Review <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      rows={4}
                      placeholder="Tell us about your experience — what did we do well?"
                      className="w-full px-4 py-2.5 border border-[#e2e8f0] rounded-lg text-sm text-[#374151] placeholder-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/20 focus:border-[#1e3a5f] transition-colors resize-none"
                    />
                  </div>

                  {error && (
                    <p className="text-red-500 text-xs mb-4">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3 bg-[#1e3a5f] hover:bg-[#2e5490] disabled:opacity-60 text-white font-bold text-sm rounded-xl transition-colors"
                  >
                    {submitting ? "Submitting..." : "Submit Review"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* ─── Main Component ─────────────────────────────────────────── */

export default function ClientReviews() {
  const [dbReviews, setDbReviews] = useState<Review[]>([]);
  const [expanded, setExpanded] = useState(false);
  const [loaded, setLoaded] = useState(false);

  async function fetchApproved() {
    try {
      const res = await fetch("/api/reviews");
      if (res.ok) {
        const data: Review[] = await res.json();
        setDbReviews(data);
      }
    } catch { /* API unreachable — fall back to seeds only */ }
    setLoaded(true);
  }

  useEffect(() => {
    fetchApproved();
  }, []);

  const allReviews = loaded
    ? [...dbReviews, ...seedReviews.filter(
        (s) => !dbReviews.some((d) => d.id === s.id)
      )]
    : seedReviews;

  const sorted = [...allReviews].sort((a, b) => {
    if (b.rating !== a.rating) return b.rating - a.rating;
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
  });

  const visible = expanded ? sorted : sorted.slice(0, VISIBLE_DEFAULT);
  const hasMore = sorted.length > VISIBLE_DEFAULT;

  const gridCols =
    visible.length <= 2
      ? "md:grid-cols-2 max-w-3xl mx-auto"
      : "md:grid-cols-2 lg:grid-cols-3";

  return (
    <>
      {/* Reviews grid */}
      <div style={{ marginBottom: "3rem" }}>
        <div className={`grid grid-cols-1 gap-6 ${gridCols}`}>
          {visible.map((t, i) => (
            <div
              key={t.id}
              className="bg-white border border-[#e2e8f0] rounded-2xl p-8 shadow-sm flex flex-col"
            >
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, s) => (
                  <svg
                    key={s}
                    className={`w-4 h-4 ${s < t.rating ? "text-[#f59e0b]" : "text-[#e2e8f0]"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-[#374151] text-sm leading-relaxed flex-1 mb-6">
                {t.text}
              </p>

              <div className="flex items-center gap-3 pt-5 mt-auto border-t-2 border-[#e2e8f0]">
                <div
                  style={{ backgroundColor: avatarColors[i % avatarColors.length], width: 40, height: 40, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: 12, flexShrink: 0 }}
                >
                  {initials(t.name)}
                </div>
                <div>
                  <p className="font-semibold text-[#1e3a5f] text-sm">{t.name}</p>
                  {t.role && <p className="text-[#64748b] text-xs mt-0.5">{t.role}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>

        {hasMore && (
          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#1e3a5f] text-[#1e3a5f] text-sm font-semibold rounded-xl hover:bg-[#1e3a5f] hover:text-white transition-colors"
            >
              {expanded ? "Show less" : `Show all ${sorted.length} reviews`}
              <svg
                className={`w-4 h-4 transition-transform ${expanded ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* CTA card with review modal */}
      <div className="rounded-2xl border border-[#e2e8f0] bg-white shadow-sm overflow-hidden">
        <div className="h-1.5 bg-gradient-to-r from-[#1e3a5f] via-[#0891b2] to-[#2e5490]" />
        <div className="px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-10 flex flex-col items-center gap-8 sm:flex-row sm:items-center sm:gap-8">
          <div className="flex-shrink-0 flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-[#f5f7fa] flex items-center justify-center border border-[#e2e8f0]">
              <svg className="w-8 h-8" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </div>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>

          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-[#1e3a5f] mb-2">
              Loved working with us? Share your experience.
            </h3>
            <p className="text-[#64748b] text-sm leading-relaxed max-w-lg">
              Your honest review helps other businesses and individuals find a CA they can trust.
              It takes less than 30 seconds — and it means the world to a growing practice.
            </p>
          </div>

          <div className="flex-shrink-0">
            <ReviewModalInline onSubmitted={fetchApproved} />
          </div>
        </div>
      </div>
    </>
  );
}
