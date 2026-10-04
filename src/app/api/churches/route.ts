import { NextResponse } from "next/server";
import { churches, maheloLeaders } from "@/data/churches";

// GET /api/churches — list all churches with their leaders
export async function GET() {
  const withLeaders = churches.map((c) => ({
    ...c,
    leaderName: c.leaderId ? maheloLeaders[c.leaderId] ?? null : null,
  }));
  return NextResponse.json(withLeaders);
}
