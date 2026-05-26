import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email } = body as { name?: string; email?: string };

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "A valid email address is required." }, { status: 422 });
  }

  const to = process.env.RESEND_TO_EMAIL;
  const from = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";

  if (!to) {
    console.error("RESEND_TO_EMAIL is not set.");
    return NextResponse.json({ error: "Server misconfiguration." }, { status: 500 });
  }

  const displayName = name?.trim() || "Someone";
  const submittedAt = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const { error } = await resend.emails.send({
    from,
    to,
    subject: `New signup: ${displayName} (${email})`,
    html: `
      <div style="font-family:sans-serif;max-width:520px;margin:0 auto;padding:32px 24px;background:#0f0f18;color:#f0f0f0;border-radius:12px;">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:28px;">
          <div style="width:32px;height:32px;background:linear-gradient(135deg,#7c3aed,#9333ea);border-radius:8px;display:flex;align-items:center;justify-content:center;">
            <span style="color:#fff;font-size:16px;">⚡</span>
          </div>
          <span style="font-size:18px;font-weight:700;color:#fff;">Slyte <span style="background:linear-gradient(90deg,#a78bfa,#c084fc);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">AI</span></span>
        </div>

        <h2 style="font-size:20px;font-weight:700;color:#fff;margin:0 0 8px;">New early access signup</h2>
        <p style="color:#9ca3af;font-size:14px;margin:0 0 24px;">Submitted ${submittedAt} ET</p>

        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          <tr>
            <td style="padding:10px 0;color:#9ca3af;width:80px;vertical-align:top;">Name</td>
            <td style="padding:10px 0;color:#f0f0f0;font-weight:600;">${displayName}</td>
          </tr>
          <tr style="border-top:1px solid #1f1f30;">
            <td style="padding:10px 0;color:#9ca3af;vertical-align:top;">Email</td>
            <td style="padding:10px 0;">
              <a href="mailto:${email}" style="color:#a78bfa;text-decoration:none;">${email}</a>
            </td>
          </tr>
          <tr style="border-top:1px solid #1f1f30;">
            <td style="padding:10px 0;color:#9ca3af;vertical-align:top;">Source</td>
            <td style="padding:10px 0;color:#f0f0f0;">Homepage email capture</td>
          </tr>
        </table>

        <div style="margin-top:28px;padding:16px;background:#1a1a2e;border-radius:8px;border-left:3px solid #7c3aed;">
          <p style="margin:0;font-size:13px;color:#9ca3af;">
            Reply directly to this email to follow up with ${displayName}.
          </p>
        </div>
      </div>
    `,
    replyTo: email,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
