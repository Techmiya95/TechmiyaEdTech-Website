import { jsPDF } from "jspdf";

export interface CertificateData {
  studentName: string;
  studentEmail?: string;
  courseTitle: string;
  score: number;
  maxScore: number;
  percentage: number;
  grade: string;
  issueDate: string;
  certificateId: string;
}

export const certificateService = {
  /**
   * Generates a high-resolution, vector PDF certificate directly in the browser using jsPDF.
   */
  generateCertificatePdf(data: CertificateData): jsPDF {
    // A4 landscape: 297mm x 210mm
    const doc = new jsPDF({
      orientation: "landscape",
      unit: "mm",
      format: "a4",
    });

    const pageWidth = 297;
    const pageHeight = 210;

    // --- Background & Borders ---
    // Soft cream / warm white background
    doc.setFillColor(254, 253, 250);
    doc.rect(0, 0, pageWidth, pageHeight, "F");

    // Primary Amber Border (outer)
    doc.setDrawColor(217, 119, 6); // #d97706
    doc.setLineWidth(1.8);
    doc.rect(10, 10, pageWidth - 20, pageHeight - 20);

    // Inner Elegant Gold Border
    doc.setDrawColor(245, 158, 11); // #f59e0b
    doc.setLineWidth(0.6);
    doc.rect(13, 13, pageWidth - 26, pageHeight - 26);

    // Corner Ornaments (Classic geometric accent corners)
    const cornerSize = 7;
    doc.setDrawColor(180, 83, 9); // #b45309
    doc.setLineWidth(1);
    // Top-Left
    doc.line(13, 13 + cornerSize, 13 + cornerSize, 13);
    // Top-Right
    doc.line(pageWidth - 13 - cornerSize, 13, pageWidth - 13, 13 + cornerSize);
    // Bottom-Left
    doc.line(13, pageHeight - 13 - cornerSize, 13 + cornerSize, pageHeight - 13);
    // Bottom-Right
    doc.line(pageWidth - 13 - cornerSize, pageHeight - 13, pageWidth - 13, pageHeight - 13 - cornerSize);

    // --- Top Institution Header ---
    doc.setTextColor(217, 119, 6); // Brand amber
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("TECHMIYA TUTORIALS", pageWidth / 2, 28, { align: "center" });

    doc.setTextColor(100, 116, 139); // Slate-500
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.text("EXCELLENCE IN SOFTWARE ENGINEERING EDUCATION", pageWidth / 2, 33, { align: "center" });

    // Decorative Horizontal Divider with Center Diamond
    doc.setDrawColor(245, 158, 11);
    doc.setLineWidth(0.4);
    doc.line(pageWidth / 2 - 50, 37, pageWidth / 2 + 50, 37);

    // --- Certificate Title ---
    doc.setTextColor(30, 41, 59); // Slate-800
    doc.setFont("helvetica", "bold");
    doc.setFontSize(24);
    doc.text("CERTIFICATE OF COMPLETION", pageWidth / 2, 48, { align: "center" });

    // Sub-statement
    doc.setTextColor(71, 85, 105); // Slate-600
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.text("This is to proudly certify that", pageWidth / 2, 57, { align: "center" });

    // --- Student Name (Auto-scale for long names) ---
    doc.setTextColor(15, 23, 42); // Slate-900
    doc.setFont("helvetica", "bold");
    const studentName = data.studentName || "Student";
    if (studentName.length > 30) {
      doc.setFontSize(20);
    } else if (studentName.length > 20) {
      doc.setFontSize(23);
    } else {
      doc.setFontSize(27);
    }
    doc.text(studentName, pageWidth / 2, 70, { align: "center" });

    // Underline beneath student name
    doc.setDrawColor(217, 119, 6);
    doc.setLineWidth(0.8);
    const nameWidth = doc.getTextWidth(studentName);
    const lineMargin = 6;
    doc.line(
      pageWidth / 2 - Math.max(nameWidth / 2 + lineMargin, 40),
      73,
      pageWidth / 2 + Math.max(nameWidth / 2 + lineMargin, 40),
      73
    );

    // --- Course Details Statement ---
    doc.setTextColor(71, 85, 105);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.text(
      "has successfully completed all 100 curriculum units, mandatory practical labs, and passed the official final assessment in",
      pageWidth / 2,
      83,
      { align: "center" }
    );

    // Course Title
    doc.setTextColor(217, 119, 6); // Brand amber
    doc.setFont("helvetica", "bold");
    doc.setFontSize(17);
    doc.text("Git & GitHub: Beginner to Advanced", pageWidth / 2, 92, { align: "center" });

    // Curriculum Description
    doc.setTextColor(100, 116, 139);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.5);
    const curriculumDesc =
      "Demonstrating certified competence in Version Control Fundamentals, Branching & 3-Way Merge Resolution, " +
      "GitHub Flow, Remote Team Collaboration, GitHub Actions CI/CD Automation, and Repository Security.";
    doc.text(curriculumDesc, pageWidth / 2, 101, {
      align: "center",
      maxWidth: 220,
    });

    // --- Performance Badges & Score Box ---
    const boxY = 114;
    const boxWidth = 200;
    const boxHeight = 22;
    const boxX = (pageWidth - boxWidth) / 2;

    doc.setFillColor(248, 250, 252); // Slate-50
    doc.setDrawColor(226, 232, 240); // Slate-200
    doc.setLineWidth(0.4);
    doc.roundedRect(boxX, boxY, boxWidth, boxHeight, 3, 3, "FD");

    // Grid Columns inside Box: Score | Percentage | Grade | Status
    const colWidth = boxWidth / 4;

    // Col 1: Score
    doc.setTextColor(100, 116, 139);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.text("FINAL SCORE", boxX + colWidth * 0.5, boxY + 7, { align: "center" });
    doc.setTextColor(15, 23, 42);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text(`${data.score} / ${data.maxScore}`, boxX + colWidth * 0.5, boxY + 16, { align: "center" });

    // Divider
    doc.line(boxX + colWidth, boxY + 4, boxX + colWidth, boxY + boxHeight - 4);

    // Col 2: Percentage
    doc.setTextColor(100, 116, 139);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.text("PERCENTAGE", boxX + colWidth * 1.5, boxY + 7, { align: "center" });
    doc.setTextColor(15, 23, 42);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text(`${data.percentage}%`, boxX + colWidth * 1.5, boxY + 16, { align: "center" });

    // Divider
    doc.line(boxX + colWidth * 2, boxY + 4, boxX + colWidth * 2, boxY + boxHeight - 4);

    // Col 3: Grade
    doc.setTextColor(100, 116, 139);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.text("GRADE EARNED", boxX + colWidth * 2.5, boxY + 7, { align: "center" });
    doc.setTextColor(217, 119, 6);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.text(data.grade, boxX + colWidth * 2.5, boxY + 16, { align: "center" });

    // Divider
    doc.line(boxX + colWidth * 3, boxY + 4, boxX + colWidth * 3, boxY + boxHeight - 4);

    // Col 4: Status
    doc.setTextColor(100, 116, 139);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.text("COURSE STATUS", boxX + colWidth * 3.5, boxY + 7, { align: "center" });
    doc.setTextColor(22, 101, 52); // Green-800
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text("PASSED", boxX + colWidth * 3.5, boxY + 16, { align: "center" });

    // --- Footer Section: Identification & Issuance ---
    const footerY = 158;

    // Left Column: Issue Date & Unique ID
    doc.setTextColor(71, 85, 105);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.text(`Issue Date: ${data.issueDate}`, 35, footerY);
    doc.setFont("helvetica", "bold");
    doc.text(`Certificate ID: ${data.certificateId}`, 35, footerY + 6);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(148, 163, 184);
    doc.text("Browser-verified educational credential", 35, footerY + 11);

    // Center: Techmiya Stamp / Crest outline
    doc.setDrawColor(245, 158, 11);
    doc.setLineWidth(0.8);
    doc.circle(pageWidth / 2, footerY + 5, 11);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7.5);
    doc.setTextColor(217, 119, 6);
    doc.text("TECHMIYA", pageWidth / 2, footerY + 3.5, { align: "center" });
    doc.setFontSize(6.5);
    doc.text("VERIFIED", pageWidth / 2, footerY + 7.5, { align: "center" });

    // Right Column: Organization Issuing Authority
    doc.setDrawColor(148, 163, 184);
    doc.setLineWidth(0.5);
    doc.line(pageWidth - 95, footerY + 4, pageWidth - 35, footerY + 4);

    doc.setTextColor(15, 23, 42);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.text("Techmiya Tutorials", pageWidth - 65, footerY + 9, { align: "center" });
    doc.setTextColor(100, 116, 139);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.text("Online Technical Learning Division", pageWidth - 65, footerY + 13, { align: "center" });

    // Disclaimer at bottom center
    doc.setTextColor(148, 163, 184);
    doc.setFont("helvetica", "italic");
    doc.setFontSize(7);
    doc.text(
      "Issued by Techmiya Tutorials (tutorials.techmiyaedtech.com). Validated based on curriculum completion and assessment performance.",
      pageWidth / 2,
      pageHeight - 15,
      { align: "center" }
    );

    return doc;
  },

  /**
   * Directly triggers download of PDF in user's browser.
   */
  downloadPdf(data: CertificateData): void {
    const doc = this.generateCertificatePdf(data);
    const sanitizedName = (data.studentName || "student")
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "_");
    const fileName = `Techmiya_Certificate_Git_GitHub_${sanitizedName}.pdf`;
    doc.save(fileName);
  }
};
