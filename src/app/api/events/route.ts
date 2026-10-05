import { NextResponse } from "next/server";
import { events } from "@/data/events";

// GET /api/events — list all events
export async function GET() {
  const sorted = [...events].sort(
    (a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime(),
  );
  return NextResponse.json(sorted);
}
