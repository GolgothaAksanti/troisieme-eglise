import { NextResponse } from "next/server";
import { elders } from "@/data/elders";

// GET /api/elders — list all 24 vieillards
export async function GET() {
  const sorted = [...elders].sort((a, b) => a.order - b.order);
  return NextResponse.json(sorted);
}
