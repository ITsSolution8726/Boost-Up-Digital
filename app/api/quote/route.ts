import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { generateQuotePdf } from "@/lib/generateQuotePdf";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const selectedPackage = formData.get("package")?.toString() || "";

        const companyName = formData.get("businessName")?.toString() || "";
        const contactPerson = formData.get("ownerName")?.toString() || "";
        const email = formData.get("email")?.toString() || "";
        const phone = formData.get("phone")?.toString() || "";

        const website = formData.get("website")?.toString() || "";
        const address = formData.get("address")?.toString() || "";

        const industry = formData.get("industry")?.toString() || "";
        const businessAge = formData.get("businessAge")?.toString() || "";
        const revenue = formData.get("revenue")?.toString() || "";
        const targetLocation = formData.get("targetLocation")?.toString() || "";

        const businessDescription =
            formData.get("businessDescription")?.toString() || "";

        const budget = formData.get("budget")?.toString() || "";
        const timeline = formData.get("timeline")?.toString() || "";

        const facebook = formData.get("facebook")?.toString() || "";
        const instagram = formData.get("instagram")?.toString() || "";
        const linkedin = formData.get("linkedin")?.toString() || "";
        const currentWebsite =
            formData.get("currentWebsite")?.toString() || "";

        const currentMarketing =
            formData.get("currentMarketing")?.toString() || "";

        const competitor1 =
            formData.get("competitor1")?.toString() || "";

        const competitor2 =
            formData.get("competitor2")?.toString() || "";

        const notes = formData.get("notes")?.toString() || "";

        const services = JSON.parse(
            formData.get("services")?.toString() || "[]"
        );

        const goals = JSON.parse(
            formData.get("goals")?.toString() || "[]"
        );

        const pdfBuffer = await generateQuotePdf({
            selectedPackage,

            companyName,
            contactPerson,
            email,
            phone,

            website,
            address,

            industry,
            businessAge,
            revenue,
            targetLocation,

            businessDescription,

            services,
            goals,

            budget,
            timeline,

            facebook,
            instagram,
            linkedin,
            currentWebsite,

            currentMarketing,

            competitor1,
            competitor2,

            notes,
        });
        // Basic Validation
        if (
            !companyName ||
            !contactPerson ||
            !email ||
            !phone
        ) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Required fields are missing.",
                },
                {
                    status: 400,
                }
            );
        }

        const html = `
<!DOCTYPE html>
<html>
<head>

<meta charset="UTF-8">

</head>

<body style="
margin:0;
padding:0;
background:#f4f6fb;
font-family:Arial,Helvetica,sans-serif;
">

<table
width="100%"
cellpadding="0"
cellspacing="0"
style="background:#f4f6fb;padding:35px;"
>

<tr>

<td align="center">

<table
width="820"
cellpadding="0"
cellspacing="0"
style="
background:white;
border-radius:18px;
overflow:hidden;
box-shadow:0 12px 35px rgba(0,0,0,.08);
">

<!-- HEADER -->

<tr>

<td
style="
background:linear-gradient(135deg,#4f46e5,#7c3aed,#ec4899,#ff7b00);
padding:45px;
text-align:center;
">

<h1
style="
margin:0;
font-size:34px;
color:white;
">

BOOST UP DIGITAL

</h1>

<p
style="
margin-top:10px;
color:#f5f5f5;
font-size:18px;
">

🚀 New Client Requirement Received

</p>

</td>

</tr>

<!-- BODY -->

<tr>

<td style="padding:40px;">

<h2
style="
margin:0 0 30px;
color:#111827;
">

Executive Summary

</h2>

<table
width="100%"
style="
border-collapse:collapse;
margin-bottom:35px;
">

<tr>

<td style="padding:15px;background:#fafafa;border:1px solid #ececec;font-weight:bold;width:220px;">
Selected Package
</td>

<td style="padding:15px;border:1px solid #ececec;">
${selectedPackage}
</td>

</tr>

<tr>

<td style="padding:15px;background:#fafafa;border:1px solid #ececec;font-weight:bold;">
Business Name
</td>

<td style="padding:15px;border:1px solid #ececec;">
${companyName}
</td>

</tr>

<tr>

<td style="padding:15px;background:#fafafa;border:1px solid #ececec;font-weight:bold;">
Owner
</td>

<td style="padding:15px;border:1px solid #ececec;">
${contactPerson}
</td>

</tr>

<tr>

<td style="padding:15px;background:#fafafa;border:1px solid #ececec;font-weight:bold;">
Email
</td>

<td style="padding:15px;border:1px solid #ececec;">
${email}
</td>

</tr>

<tr>

<td style="padding:15px;background:#fafafa;border:1px solid #ececec;font-weight:bold;">
Phone
</td>

<td style="padding:15px;border:1px solid #ececec;">
${phone}
</td>

</tr>

</table>

<!-- BUSINESS -->

<div
style="
background:#fafbff;
border-left:5px solid #7c3aed;
padding:25px;
border-radius:12px;
margin-bottom:25px;
">

<h2 style="margin-top:0;color:#7c3aed;">
Business Details
</h2>

<p><strong>Industry:</strong> ${industry}</p>

<p><strong>Business Age:</strong> ${businessAge}</p>

<p><strong>Revenue:</strong> ${revenue}</p>

<p><strong>Target Location:</strong> ${targetLocation}</p>

<p><strong>Website:</strong> ${website || "-"}</p>

<p><strong>Address:</strong> ${address || "-"}</p>

<p><strong>Description</strong></p>

<p style="line-height:1.8;">
${businessDescription || "-"}
</p>

</div>

<!-- SERVICES -->

<div
style="
background:#fff8f3;
border-left:5px solid #ff7b00;
padding:25px;
border-radius:12px;
margin-bottom:25px;
">

<h2 style="margin-top:0;color:#ff7b00;">
Requested Services
</h2>

<ul style="padding-left:22px;line-height:2;">

${services
                .map((item: string) => `<li>✅ ${item}</li>`)
                .join("")}

</ul>

</div>

<!-- GOALS -->

<div
style="
background:#f7f8ff;
border-left:5px solid #4f46e5;
padding:25px;
border-radius:12px;
margin-bottom:25px;
">

<h2 style="margin-top:0;color:#4f46e5;">
Marketing Goals
</h2>

<ul style="padding-left:22px;line-height:2;">

${goals
                .map((item: string) => `<li>🎯 ${item}</li>`)
                .join("")}

</ul>

</div>

<!-- PROJECT -->

<div
style="
background:#fcfcfc;
padding:25px;
border-radius:12px;
border:1px solid #ececec;
margin-bottom:25px;
">

<h2 style="margin-top:0;">
Project Information
</h2>

<p><strong>Budget:</strong> ${budget}</p>

<p><strong>Timeline:</strong> ${timeline}</p>

</div>

<!-- CURRENT MARKETING -->

<div
style="
background:#f8fbff;
padding:25px;
border-radius:12px;
border:1px solid #e8eefc;
margin-bottom:25px;
">

<h2 style="margin-top:0;">
Current Marketing
</h2>

<p><strong>Facebook:</strong> ${facebook || "-"}</p>

<p><strong>Instagram:</strong> ${instagram || "-"}</p>

<p><strong>LinkedIn:</strong> ${linkedin || "-"}</p>

<p><strong>Website:</strong> ${currentWebsite || "-"}</p>

<p><strong>Current Marketing</strong></p>

<p>

${currentMarketing || "-"}

</p>

</div>

<!-- COMPETITORS -->

<div
style="
background:#fafafa;
padding:25px;
border-radius:12px;
border:1px solid #ececec;
margin-bottom:25px;
">

<h2 style="margin-top:0;">
Competitors
</h2>

<p>${competitor1 || "-"}</p>

<p>${competitor2 || "-"}</p>

</div>

<!-- NOTES -->

<div
style="
background:#fffef5;
padding:25px;
border-radius:12px;
border:1px solid #ffe7a8;
">

<h2 style="margin-top:0;">
Additional Notes
</h2>

<p style="line-height:1.8;">

${notes || "-"}

</p>

</div>

<!-- PDF -->

<div
style="
margin-top:40px;
padding:25px;
background:#111827;
color:white;
border-radius:14px;
text-align:center;
">

<h2 style="margin-top:0;">
📄 Requirement PDF Attached
</h2>

<p>

A professionally formatted Requirement Form PDF has been attached with this email.

</p>

</div>

</td>

</tr>

<!-- FOOTER -->

<tr>

<td
style="
padding:30px;
text-align:center;
background:#f5f5f5;
font-size:13px;
color:#777;
">

Generated automatically from the
<strong>Boost Up Digital Website</strong>

</td>

</tr>

</table>

</td>

</tr>

</table>

</body>

</html>
`;

        // Send to Agency
        await transporter.sendMail({
            from: `"Boost Up Digital Website" <${process.env.EMAIL_USER}>`,

            to: "boostupdigital.official03@gmail.com",

            replyTo: email,

            subject: `🚀 New Quote Request • ${companyName}`,

            html,

            attachments: [
                {
                    filename: `${companyName
                        .replace(/\s+/g, "-")
                        .toLowerCase()}-requirement-form.pdf`,

                    content: pdfBuffer,

                    contentType: "application/pdf",
                },
            ],
        });

        // Send Confirmation to Client
        await transporter.sendMail({
            from: `"Boost Up Digital" <${process.env.EMAIL_USER}>`,

            to: email,

            subject: "Your Requirement Form has been received",

            attachments: [
                {
                    filename: "Boost-Up-Requirement.pdf",
                    content: pdfBuffer,
                    contentType: "application/pdf",
                },
            ],

            html: `
<!DOCTYPE html>

<html>

<head>

<meta charset="UTF-8">

</head>

<body style="margin:0;background:#f4f4f4;font-family:Arial">

<table
width="100%"
cellpadding="0"
cellspacing="0"
>

<tr>

<td align="center">

<table
width="650"
style="
background:white;
margin:40px 0;
border-radius:16px;
overflow:hidden;
">

<tr>

<td
style="
background:#111827;
padding:45px;
text-align:center;
">

<h1
style="
margin:0;
color:white;
font-size:34px;
"
>

BOOST UP DIGITAL

</h1>

<p
style="
color:#d1d5db;
margin-top:10px;
font-size:16px;
"
>

Thank you for choosing us.

</p>

</td>

</tr>

<tr>

<td
style="
padding:45px;
color:#333;
line-height:1.8;
"
>

<h2>

Hi ${contactPerson},

</h2>

<p>

We have successfully received your business requirement form.

</p>

<p>

Our strategy team is now analysing your requirements.

</p>

<table
width="100%"
style="
margin:30px 0;
border-collapse:collapse;
">

<tr>

<td
style="
padding:16px;
background:#fafafa;
border:1px solid #eee;
font-weight:bold;
width:220px;
">

Selected Package

</td>

<td
style="
padding:16px;
border:1px solid #eee;
">

${selectedPackage}

</td>

</tr>

<tr>

<td
style="
padding:16px;
background:#fafafa;
border:1px solid #eee;
font-weight:bold;
">

Business Name

</td>

<td
style="
padding:16px;
border:1px solid #eee;
">

${companyName}

</td>

</tr>

<tr>

<td
style="
padding:16px;
background:#fafafa;
border:1px solid #eee;
font-weight:bold;
">

Services

</td>

<td
style="
padding:16px;
border:1px solid #eee;
">

${services.join(", ")}

</td>

</tr>

</table>

<div
style="
margin-top:35px;
background:#f9fafb;
padding:30px;
border-radius:12px;
">

<h3 style="margin-top:0">

What happens next?

</h3>

<p>

✅ Requirement Review

</p>

<p>

✅ Competitor Analysis

</p>

<p>

✅ Strategy Planning

</p>

<p>

✅ Proposal Preparation

</p>

<p>

One of our consultants will contact you within
<strong>24 Hours.</strong>

</p>

</div>

<p
style="
margin-top:35px;
">

We've attached a PDF copy of your submitted requirement form for your records.

</p>

<p>

Regards,

<br><br>

<strong>

Boost Up Digital

</strong>

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
        });

        return NextResponse.json({
            success: true,
            message: "Quote submitted successfully.",
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