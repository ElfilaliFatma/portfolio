import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as ContactPayload;
  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { message: "Please complete all fields before sending your message." },
      { status: 400 },
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    return NextResponse.json(
      { message: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  // Provider-ready placeholder:
  // Replace this block with Resend, SendGrid, Postmark, or your preferred email service.
  console.info("New portfolio inquiry received", {
    name,
    email,
    message,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json(
    {
      message:
        "Message received. The API route is ready for an email provider integration.",
    },
    { status: 200 },
  );
}
