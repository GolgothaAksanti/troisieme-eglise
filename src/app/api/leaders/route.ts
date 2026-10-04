import { NextResponse } from "next/server";
import { leaders } from "@/data/leaders";

// GET /api/leaders — list all leaders
export async function GET() {
  const sorted = [...leaders].sort((a, b) => a.order - b.order);
  return NextResponse.json(sorted);
}
