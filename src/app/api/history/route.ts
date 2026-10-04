import { NextResponse } from "next/server";
import { historyEvents } from "@/data/history";

// GET /api/history — list all history events
export async function GET() {
  const sorted = [...historyEvents].sort((a, b) => a.year - b.year);
  return NextResponse.json(sorted);
}
