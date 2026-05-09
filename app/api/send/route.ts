import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: body.email,
      subject: "Your SpendPilot Audit",
      html: `
        <h1>Audit Complete</h1>
        <p>You could save $${body.savings}/month.</p>
      `,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { error: "Email failed" },
      { status: 500 }
    );
  }
}