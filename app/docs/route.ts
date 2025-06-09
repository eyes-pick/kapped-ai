import { NextResponse } from "next/server";
import { getDocs } from "@/lib/docs";

export async function GET() {
  try {
    const docs = await getDocs();
    return NextResponse.json(docs);
  } catch (error) {
    return NextResponse.json({ error: "Failed to load docs" }, { status: 500 });
  }
}
