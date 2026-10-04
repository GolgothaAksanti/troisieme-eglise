import { NextResponse } from "next/server";
import { stories } from "@/data/stories";

// GET /api/stories — list all stories
export async function GET() {
  const sorted = [...stories].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  return NextResponse.json(sorted);
}

// POST /api/stories — create a new story (called by CMS dashboard)
// When the CMS is ready, this will write to a database instead of local data.
