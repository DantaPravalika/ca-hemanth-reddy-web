"use client";

import { useCallback, useEffect, useState } from "react";

type Review = {
  id: string;
  name: string;
  role: string | null;
  text: string;
  rating: number;
  status: string;
  created_at: string;
};

type Tab = "pending" | "approved" | "rejected";

export default function AdminReviewsPage() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [tab, setTab] = useState<Tab>("pending");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [updating, setUpdating] = useState<string | null>(null);

  const fetchReviews = useCallback(async (status: Tab) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`/api/admin/reviews?status=${status}`, {
        headers: { Authorization: `Bearer ${password}` },
      });
      if (!res.ok) {
        if (res.status === 401) { setAuthed(false); setError("Invalid password."); return; }
        throw new Error(await res.text());
      }
      setReviews(await res.json());
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Failed to load reviews");
    } finally {
      setLoading(false);
    }
  }, [password]);

  useEffect(() => {
    if (authed) fetchReviews(tab);
  }, [authed, tab, fetchReviews]);

  async function handleAction(id: string, status: "approved" | "rejected") {
    setUpdating(id);
    try {
      const res = await fetch("/api/admin/reviews", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${password}`,
        },
        body: JSON.stringify({ id, status }),
      });
      if (!res.ok) throw new Error(await res.text());
      setReviews((prev) => prev.filter((r) => r.id !== id));
    } catch {
      setError("Failed to update review");
    } finally {
      setUpdating(null);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Are you sure you want to permanently delete this review?")) return;
    setUpdating(id);
    try {
      const res = await fetch("/api/admin/reviews", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${password}`,
        },
        body: JSON.stringify({ id }),
      });
      if (!res.ok) throw new Error(await res.text());
      setReviews((prev) => prev.filter((r) => r.id !== id));
    } catch {
      setError("Failed to delete review");
    } finally {
      setUpdating(null);
    }
  }

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (!password.trim()) return;
    setAuthed(true);
  }

  if (!authed) {
    return (
      <div className="min-h-screen bg-[#f5f7fa] flex items-center justify-center p-4">
        <form
          onSubmit={handleLogin}
          className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm"
        >
          <h1 className="text-xl font-bold text-[#1e3a5f] mb-6 text-center">Admin Login</h1>
          {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
          <label className="block text-sm font-medium text-[#374151] mb-1.5">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2.5 border border-[#e2e8f0] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/20 focus:border-[#1e3a5f] mb-5"
            autoFocus
          />
          <button
            type="submit"
            className="w-full py-3 bg-[#1e3a5f] hover:bg-[#2e5490] text-white font-bold text-sm rounded-xl transition-colors"
          >
            Sign In
          </button>
        </form>
      </div>
    );
  }

  const tabs: { key: Tab; label: string }[] = [
    { key: "pending", label: "Pending" },
    { key: "approved", label: "Approved" },
    { key: "rejected", label: "Rejected" },
  ];

  return (
    <div className="min-h-screen bg-[#f5f7fa]">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-[#1e3a5f]">Review Moderation</h1>
          <button
            onClick={() => { setAuthed(false); setPassword(""); }}
            className="text-sm text-[#64748b] hover:text-[#1e3a5f] transition-colors"
          >
            Logout
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 bg-white rounded-xl p-1 border border-[#e2e8f0] mb-8 w-fit">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`px-5 py-2 text-sm font-medium rounded-lg transition-colors ${
                tab === t.key
                  ? "bg-[#1e3a5f] text-white"
                  : "text-[#64748b] hover:text-[#1e3a5f] hover:bg-[#f5f7fa]"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        {loading ? (
          <p className="text-[#64748b] text-sm">Loading...</p>
        ) : reviews.length === 0 ? (
          <p className="text-[#64748b] text-sm">No {tab} reviews.</p>
        ) : (
          <div className="space-y-4">
            {reviews.map((r) => (
              <div
                key={r.id}
                className="bg-white border border-[#e2e8f0] rounded-xl p-6 shadow-sm"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="font-semibold text-[#1e3a5f] text-sm">{r.name}</span>
                    {r.role && (
                      <span className="text-[#64748b] text-xs">{r.role}</span>
                    )}
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-3.5 h-3.5 ${i < r.rating ? "text-[#f59e0b]" : "text-[#e2e8f0]"}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-[#374151] text-sm leading-relaxed">{r.text}</p>
                  <p className="text-[#94a3b8] text-xs mt-2">
                    {new Date(r.created_at).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>

                  <div style={{ display: "flex", gap: "12px", marginTop: "16px", paddingTop: "16px", borderTop: "1px solid #e2e8f0" }}>
                    {tab === "pending" && (
                      <>
                        <button
                          onClick={() => handleAction(r.id, "approved")}
                          disabled={updating === r.id}
                          style={{ padding: "10px 20px", backgroundColor: "#16a34a", color: "#fff", fontSize: "14px", fontWeight: 600, borderRadius: "8px", border: "none", cursor: "pointer", opacity: updating === r.id ? 0.5 : 1 }}
                        >
                          {updating === r.id ? "Updating..." : "Approve"}
                        </button>
                        <button
                          onClick={() => handleAction(r.id, "rejected")}
                          disabled={updating === r.id}
                          style={{ padding: "10px 20px", backgroundColor: "#ef4444", color: "#fff", fontSize: "14px", fontWeight: 600, borderRadius: "8px", border: "none", cursor: "pointer", opacity: updating === r.id ? 0.5 : 1 }}
                        >
                          Reject
                        </button>
                      </>
                    )}
                    <button
                      onClick={() => handleDelete(r.id)}
                      disabled={updating === r.id}
                      style={{ padding: "10px 20px", backgroundColor: "#fff", color: "#ef4444", fontSize: "14px", fontWeight: 600, borderRadius: "8px", border: "2px solid #ef4444", cursor: "pointer", opacity: updating === r.id ? 0.5 : 1, marginLeft: tab === "pending" ? "auto" : "0" }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
