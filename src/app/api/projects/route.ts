import { NextRequest, NextResponse } from "next/server";
import { getProjects } from "@/backend/controllers";

export async function GET(req: NextRequest) {
  try {
    
    await getProjects();

  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
