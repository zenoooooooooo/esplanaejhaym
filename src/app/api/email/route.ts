import { NextRequest, NextResponse } from "next/server";
// import { sendEmail } from "@/backend/controllers/emailController";
export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    console.log("Received email:", { name, email, message });

    if (!name && !email && !message) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // const response = await sendEmail(name, email, message);

    return NextResponse.json(
      { success: true, message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error:", err);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
