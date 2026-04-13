import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const { data, error } = await supabase()
      .from("reviews")
      .select("id, name, role, text, rating, created_at")
      .eq("status", "approved")
      .order("rating", { ascending: false })
      .order("created_at", { ascending: false });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (err: unknown) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Server error" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const role = typeof body.role === "string" ? body.role.trim() : "";
  const text = typeof body.text === "string" ? body.text.trim() : "";
  const rating = typeof body.rating === "number" ? body.rating : 0;

  if (!name || !text || rating < 1 || rating > 5) {
    return NextResponse.json(
      { error: "name, text (non-empty strings) and rating (1-5) are required" },
      { status: 400 }
    );
  }

  try {
    const { error } = await supabase()
      .from("reviews")
      .insert({ name, role: role || null, text, rating });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true, message: "Review submitted and pending approval." });
  } catch (err: unknown) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Server error" },
      { status: 500 }
    );
  }
}
