import {
    PDFDocument,
    StandardFonts,
    rgb,
    PDFPage,
    PDFFont,
} from "pdf-lib";
import fs from "fs";
import path from "path";

type QuoteData = {
    selectedPackage: string;
    companyName: string;
    contactPerson: string;
    email: string;
    phone: string;
    website: string;
    address: string;

    industry: string;
    businessAge: string;
    revenue: string;
    targetLocation: string;
    businessDescription: string;

    services: string[];
    goals: string[];

    budget: string;
    timeline: string;

    facebook: string;
    instagram: string;
    linkedin: string;
    currentWebsite: string;
    currentMarketing: string;

    competitor1: string;
    competitor2: string;

    notes: string;
};

export async function generateQuotePdf(data: QuoteData) {
    const pdfDoc = await PDFDocument.create();

    const regular = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const bold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
    const logoPath = path.join(process.cwd(), "public", "logo.png");

    let logo;

    if (fs.existsSync(logoPath)) {
        const logoBytes = fs.readFileSync(logoPath);
        logo = await pdfDoc.embedPng(logoBytes);
    }

    const pageWidth = 595;
    const pageHeight = 842;

    let page = pdfDoc.addPage([pageWidth, pageHeight]);

    let y = pageHeight - 45;

    //-----------------------------------------------------
    // COLORS
    //-----------------------------------------------------

    const purple = rgb(0.48, 0.23, 0.92);
    const orange = rgb(1, 0.42, 0);
    const dark = rgb(0.08, 0.1, 0.16);
    const gray = rgb(0.35, 0.35, 0.35);
    const light = rgb(0.96, 0.96, 0.97);

    //-----------------------------------------------------
    // PAGE BREAK
    //-----------------------------------------------------

    const checkPage = (space = 35) => {
        if (y < space) {
            page = pdfDoc.addPage([pageWidth, pageHeight]);
            y = pageHeight - 45;
        }
    };

    //-----------------------------------------------------
    // HEADER
    //-----------------------------------------------------

    page.drawRectangle({
        x: 0,
        y: pageHeight - 120,
        width: pageWidth,
        height: 120,
        color: dark,
    });

    page.drawRectangle({
        x: 0,
        y: pageHeight - 120,
        width: 8,
        height: 120,
        color: orange,
    });

    page.drawText("CLIENT REQUIREMENT FORM", {
        x: 40,
        y: pageHeight - 42,
        size: 23,
        font: bold,
        color: rgb(1, 1, 1),
    });

    page.drawText("Boost Up Digital", {
        x: 40,
        y: pageHeight - 68,
        size: 14,
        font: bold,
        color: orange,
    });

    page.drawText(
        "Digital Marketing • Branding • Websites • Ads",
        {
            x: 40,
            y: pageHeight - 88,
            size: 10,
            font: regular,
            color: rgb(.85, .85, .85)
        });

    if (logo) {
        page.drawImage(logo, {
            x: 430,
            y: pageHeight - 95,
            width: 110,
            height: 110,
        });
    }

    y = pageHeight - 150;
    //-----------------------------------------------------
    // SECTION
    //-----------------------------------------------------

    const section = (title: string) => {

        checkPage();

        page.drawRectangle({
            x: 40,
            y: y - 7,
            width: 515,
            height: 26,
            color: purple,
        });

        page.drawText(title, {
            x: 50,
            y: y,
            size: 12,
            font: bold,
            color: rgb(1, 1, 1),
        });

        y -= 38;
    };
    const safe = (text: any) =>
        String(text ?? "-")
            .replaceAll("₹", "Rs.")
            .replaceAll("✓", "-")
            .replaceAll("•", "-")
            .replaceAll("—", "-");

    //-----------------------------------------------------
    // ROW
    //-----------------------------------------------------

    const row = (label: string, value: any) => {

        checkPage();

        page.drawRectangle({
            x: 40,
            y: y - 4,
            width: 515,
            height: 24,
            color: light,
        });

        page.drawText(label, {
            x: 50,
            y: y + 3,
            font: bold,
            size: 10,
            color: purple,
        });

        page.drawText(safe(value), {
            x: 210,
            y: y + 3,
            font: regular,
            size: 10,
            color: dark,
            maxWidth: 320,
        });

        y -= 28;

    };
    //-----------------------------------------------------
    // CLIENT INFORMATION
    //-----------------------------------------------------

    section("CLIENT INFORMATION");

    row("Selected Package", data.selectedPackage);
    row("Business Name", data.companyName);
    row("Owner Name", data.contactPerson);
    row("Email", data.email);
    row("Phone", data.phone);
    row("Website", data.website);
    row("Business Address", data.address);

    //-----------------------------------------------------
    // BUSINESS DETAILS
    //-----------------------------------------------------

    section("BUSINESS DETAILS");

    row("Industry", data.industry);
    row("Business Age", data.businessAge);
    row("Monthly Revenue", data.revenue);
    row("Target Location", data.targetLocation);
    row("Business Description", data.businessDescription);

    //-----------------------------------------------------
    // SERVICES REQUIRED
    //-----------------------------------------------------

    section("SERVICES REQUIRED");

    if (data.services.length === 0) {
        row("Services", "-");
    } else {
        data.services.forEach((service) => {
            row("-", service);
        });
    }

    //-----------------------------------------------------
    // MARKETING GOALS
    //-----------------------------------------------------

    section("MARKETING GOALS");

    if (data.goals.length === 0) {
        row("Goals", "-");
    } else {
        data.goals.forEach((goal) => {
            row("-", goal);
        });
    }

    //-----------------------------------------------------
    // PROJECT DETAILS
    //-----------------------------------------------------

    section("PROJECT DETAILS");

    row("Monthly Budget", data.budget);
    row("Timeline", data.timeline);

    //-----------------------------------------------------
    // CURRENT MARKETING
    //-----------------------------------------------------

    section("CURRENT MARKETING");

    row("Facebook", data.facebook);
    row("Instagram", data.instagram);
    row("LinkedIn", data.linkedin);
    row("Current Website", data.currentWebsite);
    row("Current Marketing", data.currentMarketing);

    //-----------------------------------------------------
    // COMPETITORS
    //-----------------------------------------------------

    section("COMPETITOR ANALYSIS");

    row("Competitor 1", data.competitor1);
    row("Competitor 2", data.competitor2);

    //-----------------------------------------------------
    // NOTES
    //-----------------------------------------------------

    section("ADDITIONAL NOTES");

    page.drawRectangle({
        x: 40,
        y: y - 85,
        width: 515,
        height: 85,
        color: light,
    });

    page.drawText(data.notes || "-", {
        x: 50,
        y: y - 20,
        font: regular,
        size: 10,
        color: dark,
        maxWidth: 490,
        lineHeight: 15,
    });

    y -= 110;

    //-----------------------------------------------------
    // FOOTER
    //-----------------------------------------------------

    checkPage(80);

    page.drawLine({
        start: { x: 40, y: 60 },
        end: { x: 555, y: 60 },
        thickness: 1,
        color: rgb(0.85, 0.85, 0.85),
    });

    page.drawText(
        "Generated automatically by Boost Up Digital • www.boostupdigital.com",
        {
            x: 40,
            y: 40,
            size: 9,
            font: regular,
            color: gray,
        }
    );

    const pdfBytes = await pdfDoc.save();

    return Buffer.from(pdfBytes);
}