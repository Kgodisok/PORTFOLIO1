from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import BaseDocTemplate, Frame, PageTemplate, Paragraph, Spacer

ROOT = Path(__file__).resolve().parent
OUTPUT = ROOT / "public" / "myDocuments" / "Kgodiso_Matsepe_Resume.pdf"
ACCENT = colors.HexColor("#0D6B6E")
INK = colors.HexColor("#17202A")
MUTED = colors.HexColor("#53606B")

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name="Name", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=24, leading=28, textColor=INK, spaceAfter=3))
styles.add(ParagraphStyle(name="Role", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=12, leading=15, textColor=ACCENT, spaceAfter=7))
styles.add(ParagraphStyle(name="Contact", parent=styles["Normal"], fontSize=8.5, leading=12, textColor=MUTED))
styles.add(ParagraphStyle(name="Heading", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=10, leading=12, textColor=ACCENT, spaceBefore=10, spaceAfter=5))
styles.add(ParagraphStyle(name="Body", parent=styles["Normal"], fontSize=9.2, leading=12.5, textColor=INK, spaceAfter=3))
styles.add(ParagraphStyle(name="Job", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=10.5, leading=13, textColor=INK))
styles.add(ParagraphStyle(name="Meta", parent=styles["Normal"], fontSize=8.5, leading=11, textColor=MUTED, spaceAfter=4))
styles.add(ParagraphStyle(name="BulletItem", parent=styles["Normal"], fontSize=8.8, leading=11.5, leftIndent=12, firstLineIndent=-7, textColor=INK, spaceAfter=3))
styles.add(ParagraphStyle(name="Skill", parent=styles["Normal"], fontSize=8.8, leading=12, textColor=INK))
styles.add(ParagraphStyle(name="Cert", parent=styles["Normal"], fontSize=8.7, leading=11, textColor=INK, spaceAfter=2))


def p(text, style):
    return Paragraph(text, styles[style])


def draw_header(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(ACCENT)
    canvas.setLineWidth(1.5)
    canvas.line(doc.leftMargin, A4[1] - 42 * mm, A4[0] - doc.rightMargin, A4[1] - 42 * mm)
    canvas.restoreState()


def build():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    doc = BaseDocTemplate(str(OUTPUT), pagesize=A4, leftMargin=20 * mm, rightMargin=20 * mm, topMargin=16 * mm, bottomMargin=15 * mm)
    frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height - 12 * mm, id="normal")
    doc.addPageTemplates([PageTemplate(id="resume", frames=frame, onPage=draw_header)])

    story = [
        p("Matsepe Kgodiso", "Name"),
        p("Junior Software Developer", "Role"),
        p("kgodisomatsepe474@gmail.com &nbsp;&nbsp; | &nbsp;&nbsp; +27 79 633 8442 &nbsp;&nbsp; | &nbsp;&nbsp; Pretoria, Gauteng, South Africa<br/>LinkedIn: linkedin.com/in/kgodiso-matsepe-86050627 &nbsp;&nbsp; | &nbsp;&nbsp; GitHub: github.com/Kgodisok", "Contact"),
        Spacer(1, 7 * mm),
        p("PROFESSIONAL SUMMARY", "Heading"),
        p("Software development student and founder of FindRooms, an accommodation platform. Experienced in building full-stack applications with Python, JavaScript, React, Node.js, and Express. Seeking a junior developer or internship opportunity to contribute to real-world software while continuing to grow technically.", "Body"),
        p("TECHNICAL SKILLS", "Heading"),
        p("Programming: Python, JavaScript, Java, C#<br/>Frontend: React, HTML5, CSS3, TypeScript<br/>Backend: Node.js, Express.js, Flask API, Spring Boot<br/>Databases: MySQL, PostgreSQL, SQL, JSON<br/>Cloud and Tools: AWS, Git, GitHub, VS Code", "Skill"),
        p("PROJECT EXPERIENCE", "Heading"),
        p("FindRooms | Portmat - Accommodation Marketplace", "Job"),
        p("Founder and Developer | findrooms.co.za", "Meta"),
        p("- Founded, developed, and deployed a live full-stack accommodation platform.", "BulletItem"),
        p("- Built dynamic accommodation listings, search, and filtering with React, Node.js, Express, and MySQL.", "BulletItem"),
        p("- Integrated RESTful APIs and used React lazy loading and Suspense to improve the user experience.", "BulletItem"),
        p("- Managed the product from concept and development through deployment and production hosting.", "BulletItem"),
        p("CERTIFICATIONS", "Heading"),
        p("Meta Frontend Development", "Job"),
        p("- Introduction to Front-End Development", "Cert"),
        p("- HTML and CSS in Depth", "Cert"),
        p("- React Basics", "Cert"),
        p("- Programming with JavaScript", "Cert"),
        p("- Version Control", "Cert"),
        p("- Advanced React", "Cert"),
        p("- Principles of UI/UX Design", "Cert"),
        p("- Front-End Developer Capstone", "Cert"),
        p("- Coding Interview Preparation", "Cert"),
        p("Professional Certifications", "Job"),
        p("- Microsoft Introduction to AI", "Cert"),
        p("- IoT Wireless and Cloud Computing", "Cert"),
        p("- Excel Fundamentals for Data Analysis", "Cert"),
        p("- GSMA Digital Skills: Apps and Internet Essentials", "Cert"),
        p("- Basic Information Literacy", "Cert"),
        p("- Microsoft Word", "Cert"),
        p("LANGUAGES", "Heading"),
        p("Southern Sotho (Segakopa), English", "Body"),
    ]
    doc.build(story)


if __name__ == "__main__":
    build()
    print(OUTPUT)
