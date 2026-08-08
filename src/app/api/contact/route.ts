import { transporter } from "@/lib/mail";
import { NextRequest, NextResponse } from "next/server";

/**
 * Escapes values before interpolating them into the notification email.
 * Without this, an enquiry body containing markup would be rendered as HTML
 * in the recipient's mail client.
 */
function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      fullName,
      email,
      phone,
      company,
      service,
      budget,
      timeline,
      message,
      website,
    } = body;

    // Honeypot: real visitors never see this field, so a filled value means a
    // bot. Return a success shape so the bot learns nothing from the response.
    if (website) {
      return NextResponse.json({
        success: true,
        message: "Message sent successfully.",
      });
    }

    if (!fullName || !email || !phone || !message) {
      return NextResponse.json(
        {
          message: "Please fill all required fields.",
        },
        {
          status: 400,
        }
      );
    }

    const rows: [string, string][] = [
      ["Full Name", escapeHtml(fullName)],
      ["Email", escapeHtml(email)],
      ["Phone", escapeHtml(phone)],
      ["Company", escapeHtml(company) || "—"],
      ["Service required", escapeHtml(service) || "—"],
      ["Indicative budget", escapeHtml(budget) || "—"],
      ["Preferred timeline", escapeHtml(timeline) || "—"],
      ["Submitted", escapeHtml(new Date().toLocaleString())],
    ];

    const rowsHtml = rows
      .map(
        ([label, value], index) => `
      <tr${index % 2 === 1 ? ' style="background:#f8fafc;"' : ""}>
      <td><strong>${label}</strong></td>
      <td>${value}</td>
      </tr>`
      )
      .join("");

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.HR_EMAIL,
      replyTo: email,

      subject: `📩 New Contact Enquiry from ${fullName}`,

      html: `
      <!DOCTYPE html>
      <html>
      <body style="margin:0;padding:40px;background:#f5f7fb;font-family:Arial,sans-serif;">

      <table width="650" align="center" cellpadding="0" cellspacing="0"
      style="background:#fff;border-radius:18px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,.08);">

      <tr>
      <td style="background:#2563eb;padding:35px;text-align:center;">
      <h1 style="color:white;margin:0;">📨 New Contact Request</h1>
      <p style="color:#dbeafe;margin-top:10px;">
      Someone submitted your Contact Form.
      </p>
      </td>
      </tr>

      <tr>
      <td style="padding:35px;">

      <table width="100%" cellpadding="12" style="border-collapse:collapse;">
      ${rowsHtml}
      </table>

      <div style="margin-top:30px;background:#f8fafc;padding:20px;border-left:4px solid #2563eb;border-radius:10px;">

      <h3>Project details</h3>

      <p style="line-height:1.8;color:#444;white-space:pre-wrap;">
      ${escapeHtml(message)}
      </p>

      </div>

      <div style="margin-top:35px;text-align:center;">

      <a
      href="mailto:${escapeHtml(email)}"
      style="display:inline-block;padding:14px 30px;background:#2563eb;color:white;text-decoration:none;border-radius:8px;font-weight:bold;">
      Reply to Customer
      </a>

      </div>

      </td>
      </tr>

      <tr>
      <td style="padding:20px;background:#111827;text-align:center;color:#9ca3af;font-size:13px;">
      EZGlobal • Contact Form
      </td>
      </tr>

      </table>

      </body>
      </html>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      {
        status: 500,
      }
    );
  }
}
