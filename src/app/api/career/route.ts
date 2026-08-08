
import { NextRequest, NextResponse } from "next/server";
import { transporter } from "@/lib/mail";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const role = formData.get("role") as string;
    const message = formData.get("message") as string;

    const resume = formData.get("resume") as File | null;

    // Validation
    if (!fullName || !email || !phone || !role || !resume) {
      return NextResponse.json(
        {
          message: "Please fill all required fields.",
        },
        {
          status: 400,
        }
      );
    }

    // Maximum 5 MB
    if (resume.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        {
          message: "Resume must be less than 5MB.",
        },
        {
          status: 400,
        }
      );
    }

    // Allowed file types
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(resume.type)) {
      return NextResponse.json(
        {
          message: "Only PDF, DOC and DOCX files are allowed.",
        },
        {
          status: 400,
        }
      );
    }

    // Convert file to Buffer
    const bytes = await resume.arrayBuffer();
    const buffer = Buffer.from(bytes);

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.HR_EMAIL,

      replyTo: email,

      subject: `New Career Application - ${role}`,

      html: `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>

<body style="margin:0;padding:0;background:#f5f7fb;font-family:Arial,Helvetica,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f7fb;padding:40px 20px;">
<tr>
<td align="center">

<table width="650" cellpadding="0" cellspacing="0"
style="
background:#ffffff;
border-radius:18px;
overflow:hidden;
box-shadow:0 12px 40px rgba(0,0,0,.08);
">

<!-- Header -->
<tr>
<td
style="
background:linear-gradient(135deg,#2563eb,#4f46e5);
padding:40px;
text-align:center;
">

<h1
style="
margin:0;
color:#fff;
font-size:32px;
font-weight:700;
">
 New Job Application
</h1>

<p
style="
margin-top:10px;
color:#dbeafe;
font-size:15px;
">
A candidate has submitted an application through your Careers page.
</p>

</td>
</tr>

<!-- Candidate Details -->
<tr>
<td style="padding:35px;">

<h2
style="
margin:0 0 25px;
color:#111827;
font-size:22px;
">
Applicant Information
</h2>

<table
width="100%"
cellpadding="12"
style="
border-collapse:collapse;
border:1px solid #e5e7eb;
border-radius:10px;
overflow:hidden;
">

<tr style="background:#f8fafc;">
<td width="35%"><b>Full Name</b></td>
<td>${fullName}</td>
</tr>

<tr>
<td><b>Email</b></td>
<td>
<a href="mailto:${email}" style="color:#2563eb;text-decoration:none;">
${email}
</a>
</td>
</tr>

<tr style="background:#f8fafc;">
<td><b>Phone</b></td>
<td>${phone}</td>
</tr>

<tr>
<td><b>Applied Role</b></td>
<td>${role}</td>
</tr>

<tr style="background:#f8fafc;">
<td><b>Submitted On</b></td>
<td>${new Date().toLocaleString()}</td>
</tr>

</table>

<!-- Message -->

<div
style="
margin-top:35px;
padding:25px;
background:#f8fafc;
border-left:5px solid #2563eb;
border-radius:10px;
">

<h3
style="
margin:0 0 15px;
font-size:18px;
color:#111827;
">
Message / Portfolio
</h3>

<p
style="
margin:0;
font-size:15px;
line-height:1.8;
color:#4b5563;
white-space:pre-line;
">
${message || "No message provided."}
</p>

</div>

<!-- Resume -->

<div
style="
margin-top:35px;
padding:20px;
background:#eff6ff;
border-radius:12px;
border:1px solid #bfdbfe;
">

<h3
style="
margin:0;
color:#1d4ed8;
font-size:18px;
">
 Resume Attached
</h3>

<p
style="
margin:10px 0 0;
color:#4b5563;
line-height:1.6;
">
The applicant's resume has been attached with this email.
</p>

</div>

<!-- CTA -->

<div
style="
margin-top:35px;
text-align:center;
">

<a
href="mailto:${email}"
style="
display:inline-block;
padding:14px 28px;
background:#2563eb;
color:#fff;
text-decoration:none;
border-radius:8px;
font-weight:bold;
font-size:15px;
">
Reply to Candidate
</a>

</div>

</td>
</tr>

<!-- Footer -->

<tr>
<td
style="
padding:25px;
background:#111827;
text-align:center;
">

<p
style="
margin:0;
color:#d1d5db;
font-size:14px;
">
EZ Soft Tech Careers Portal
</p>

<p
style="
margin-top:8px;
color:#9ca3af;
font-size:12px;
">
This email was generated automatically from the Careers application form.
</p>

</td>
</tr>

</table>

</td>
</tr>
</table>

</body>
</html>
`,

      attachments: [
        {
          filename: resume.name,
          content: buffer,
          contentType: resume.type,
        },
      ],
    });

    return NextResponse.json({
      success: true,
      message: "Application submitted successfully.",
    });
  } catch (error) {
    console.error(error);

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