import Link from "next/link";
import Image from "next/image";

type LinkItem = { label: string; href: string };
type Project = {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  bullets: string[];
  tech: string[];
  links?: LinkItem[];
  featured?: boolean;
};

const LINKS = {
  email: "mailto:zulhilmi.faiz@outlook.com",
  linkedin: "https://linkedin.com/in/zulhimifaiz",
  github: "https://github.com/faizjazz100", // <- put your GitHub URL
  fypDemo: "https://bachelor-fyp-portfolio.vercel.app",
};

const projects: Project[] = [
  {
    title: "Road Bump Detection for Improved Driver Safety Using Deep Learning (Bachelor FYP)",
    subtitle: "Research-Based Approach for Road Bump Detection",
    period: "Oct 2024 – Jul 2025",
    description:
      "Deep learning-based detection system to improve driver safety and ride comfort, with a prototype web interface for testing and visualization.",
    bullets: [
      "Trained and evaluated YOLOv11, SSD, and Faster R-CNN on a curated COCO-format dataset (single class).",
      "Improved precision/recall/mAP through model tuning and systematic evaluation.",
      "Designed the solution for practical ADAS and intelligent transportation use cases.",
    ],
    tech: ["Python", "PyTorch", "TorchVision", "Ultralytics YOLOv11", "OpenCV", "COCO", "Laravel"],
    links: [
      { label: "Live Demo", href: LINKS.fypDemo },
      /*{ label: "GitHub", href: LINKS.github },*/
    ],
    featured: true,
  },
  {
    title: "Mental Health & Domestic Violence Info System (Diploma FYP)",
    subtitle: "Web information system for accessibility and awareness",
    period: "Mar 2020 – Sep 2020",
    description:
      "Web-based information system improving access to sensitive and important public resources through clear structure and usability.",
    bullets: [
      "Built with HTML, CSS, PHP, and MySQL for structured storage and retrieval.",
      "Focused on usability, content clarity, and user-centered organization.",
      "Delivered social value by providing reliable information access.",
    ],
    tech: ["HTML", "CSS", "PHP", "MySQL"],
    /* Top glow links: [{ label: "GitHub", href: LINKS.github }], */
  },
];

const skills = [
  { title: "Data & Analytics", items: ["Power BI", "Tableau", "Excel", "Data Cleaning", "Data Visualization"] },
  { title: "Programming & Development", items: ["Python", "R", "SQL", "Next.js", "TypeScript", "React", "Node.js", "PHP", "Java", "HTML/CSS", "Tailwind CSS", "Laravel"] },
  { title: "ML & Computer Vision", items: ["PyTorch", "TensorFlow", "TorchVision", "Ultralytics (YOLOv11)", "OpenCV"] },
  { title: "Languages", items: ["Malay (Native)", "English (Professional)"] },
];

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-zinc-200 bg-white/60 px-3 py-1 text-xs text-zinc-700 backdrop-blur">
      {children}
    </span>
  );
}

function SectionTitle({ kicker, title, desc }: { kicker?: string; title: string; desc?: string }) {
  return (
    <div className="flex items-end justify-between gap-6">
      <div>
        {kicker ? <p className="text-xs font-medium tracking-wide text-zinc-500">{kicker}</p> : null}
        <h2 className="mt-2 text-xl font-semibold tracking-tight text-zinc-900">{title}</h2>
        {desc ? <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-600">{desc}</p> : null}
      </div>
    </div>
  );
}

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm backdrop-blur hover:shadow-md transition-shadow ${className}`}
    >
      {children}
    </div>
  );
}

function Button({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-3 py-2 text-sm font-medium transition sm:px-4";
  const styles =
    variant === "primary"
      ? "bg-zinc-900 text-white hover:bg-zinc-800"
      : variant === "secondary"
        ? "border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-900"
        : "text-zinc-700 hover:text-zinc-900 hover:bg-zinc-50";
  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}

function Divider() {
  return <div className="my-10 h-px w-full bg-zinc-200/70" />;
}

function TimelineItem({
  title,
  org,
  period,
  bullets,
}: {
  title: string;
  org: string;
  period: string;
  bullets: string[];
}) {
  return (
    <div className="relative pl-6">
      <div className="absolute left-0 top-2 h-2.5 w-2.5 rounded-full bg-zinc-900" />
      <div className="flex flex-col gap-1">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-base font-semibold text-zinc-900">{title}</h3>
          <p className="text-xs text-zinc-500">{period}</p>
        </div>
        <p className="text-sm text-zinc-600">{org}</p>
      </div>
      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-700">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Page() {
  return (
    <main className="relative min-h-screen bg-zinc-100 text-zinc-900 overflow-x-hidden">
      {/* Top glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.10),transparent_60%)] blur-2xl" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Sticky Nav */}
        <header className="sticky top-0 z-50 -mx-4 sm:-mx-6 border-b border-zinc-200/60 bg-white px-4 sm:px-6 py-3 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-zinc-900 text-white text-sm font-semibold">
                ZF
              </div>
              <div className="leading-tight">
                <p className="text-sm font-semibold">Zulhilmi Faiz</p>
                <p className="text-xs text-zinc-500">Data Science</p>
              </div>
            </div>

            <nav className="hidden items-center gap-1 md:flex">
              {[
                ["Projects", "#projects"],
                ["Skills", "#skills"],
                ["Experience", "#experience"],
                ["Education", "#education"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="rounded-lg px-3 py-2 text-sm text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900"
                >
                  {label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <Button href="/resume.pdf" variant="secondary">
                Resume
              </Button>
              <Button href={LINKS.linkedin} variant="primary">
                LinkedIn
              </Button>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className="mx-auto max-w-6xl py-6 sm:py-10">
          <div className="grid gap-6 md:grid-cols-12 md:items-start">
            {/* LEFT */}
            <div className="md:col-span-7">
              {/* Name row (compact + photo on the left) */}
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:gap-4">

                <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm sm:h-28 sm:w-28">
                  <Image
                    src="/profile.jpg"
                    alt="Zulhilmi Faiz"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="min-w-0 text-center sm:text-left">
                  <p className="font-semibold text-zinc-900 truncate">Zulhilmi Faiz Bin Zainal Alam</p>
                  <p className="text-sm text-zinc-600 leading-snug">
                    Computer Science • Data Science • Analytics • Computer Vision • Web Application • Cyber Security
                  </p>
                  <div className="mt-2 flex justify-center sm:justify-start">
                    <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700 backdrop-blur">
                      <span className="h-2 w-2 rounded-full bg-emerald-500" />
                      Available for roles • Data / Analytics
                    </div>
                  </div>
                </div>
              </div>

              <h1 className="mt-4 text-center text-2xl font-semibold tracking-tight text-zinc-900 sm:text-left sm:text-3xl md:text-4xl">
                Bachelor of Computer Science (Data Science)
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-justify text-zinc-600">
                Computer Science graduate (Data Science) with internship experience in analytics and reporting, plus hands-on
                work in computer vision and web development.
              </p>

              {/* Compact pills */}
              <div className="mt-4 flex flex-wrap gap-2">
                <Pill>Power BI</Pill>
                <Pill>Python</Pill>
                <Pill>SQL</Pill>
                <Pill>PyTorch</Pill>
                <Pill>Next.js</Pill>
                <Pill>PHP</Pill>
                <Pill>Excel</Pill>
                <Pill>Laravel</Pill>
              </div>
            </div>
            {/* RIGHT (single compact card) */}
            <div className="md:col-span-5">
              <Card className="p-4 sm:p-5">
                <div className="flex items-start justify-between gap-3">
                  <p className="text-sm font-semibold text-zinc-900">Highlights</p>
                  <span className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700">
                    Quick summary
                  </span>
                </div>

                <div className="mt-3 grid gap-3">
                  <div className="rounded-xl border border-zinc-200 bg-white p-4">
                    <p className="text-xs text-zinc-500">Internship</p>
                    <p className="mt-1 text-sm font-semibold text-zinc-900">Malaysia Aviation Group (MAG)</p>
                    <p className="mt-1 text-sm text-zinc-600">
                      Power BI dashboards + Excel/SQL dataflows for reporting reliability.
                    </p>
                  </div>

                  <div className="rounded-xl border border-zinc-200 bg-white p-4">
                    <p className="text-xs text-zinc-500">FYP</p>
                    <p className="mt-1 text-sm font-semibold text-zinc-900">Road Bump Detection</p>
                    <p className="mt-1 text-sm text-zinc-600">
                      Compared YOLOv11, SSD, Faster R-CNN with tuning for precision/recall/mAP.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mx-auto max-w-6xl">
          <SectionTitle
            title="About Me"
            desc="Background, interests, and the kind of problems I enjoy working on."
          />

          <div className="mt-6">
            <Card>
              <p className="text-sm leading-relaxed text-justify text-zinc-600">
                I am a Computer Science graduate specializing in Data Science,
                with hands-on experience in data analytics, IT support, and
                software development. I have completed internships in both technical
                and analytical roles, including as a Data Analyst Intern at Malaysia Aviation Group
                (MAG) and an Engineering IT Intern at Daikin Research & Development.
                I enjoy working at the intersection of data, engineering, and real-world
                problem solving.
              </p>

              <p className="mt-3 text-sm leading-relaxed text-justify text-zinc-600">
                At MAG, I worked on building Power BI dashboards, preparing and validating data, and collaborating with internal
                stakeholders to ensure accurate and meaningful reporting aligned with business goals.
                My experience strengthened my ability to translate raw data into actionable insights for decision-making.
              </p>

              <p className="mt-3 text-sm leading-relaxed text-justify text-zinc-600">
                In addition, my technical background includes developing web-based systems, troubleshooting hardware and software issues,
                and managing IT resources. For my Final Year Project, I implemented deep learning models for road bump detection using PyTorch and Ultralytics, and developed a Laravel-based
                web prototype to visualize real-time prediction results, with potential application in ADAS systems.
              </p>

              <p className="mt-3 text-sm leading-relaxed text-justify text-zinc-600">
                I am a fast learner with strong analytical thinking, comfortable working with data, technology, and cross-functional teams.
                I am currently seeking opportunities
                where I can apply my skills in data analysis, technology, and problem-solving while continuing to grow professionally.
              </p>
            </Card>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mx-auto max-w-6xl py-6">
          <SectionTitle title="Skills" desc="A focused skill set developed through academic and applied work." />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {skills.map((s) => (
              <Card key={s.title}>
                <h3 className="text-sm font-semibold text-zinc-900">{s.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.items.map((it) => (
                    <Pill key={it}>{it}</Pill>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>


        {/* Projects */}
        <section id="projects" className="mx-auto max-w-6xl py-6">
          <SectionTitle
            title="Projects"
            desc="Clean, measurable projects that map directly to real job requirements."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {projects.map((p) => (
              <div
                key={p.title}
                className={`rounded-2xl border ${p.featured ? "border-zinc-900/30" : "border-zinc-200"
                  } bg-white p-6 shadow-sm backdrop-blur hover:shadow-md transition-shadow`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
                    <p className="mt-1 text-sm text-zinc-500">{p.subtitle}</p>
                  </div>
                  <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700">
                    {p.period}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-zinc-600">{p.description}</p>

                <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-zinc-700">
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <Pill key={t}>{t}</Pill>
                  ))}
                </div>

                {p.links?.length ? (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.links.map((l) => (
                      <Button key={l.label} href={l.href} variant="primary">
                        {l.label}
                      </Button>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="mx-auto max-w-6xl py-6">
          <SectionTitle title="Experience" desc="Internship Experience in Real-World and Business Environments" />

          <div className="mt-8 grid gap-5">
            <Card>
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div className="flex items-start gap-3">
                  {/* MAG Logo */}
                  <div className="relative h-10 w-16 shrink-0">
                    <Image
                      src="/mag.png"
                      alt="Malaysia Aviation Group"
                      fill
                      className="object-contain"
                    />
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-zinc-900">
                      Data Analyst Intern
                    </h3>
                    <p className="text-sm text-zinc-600">
                      Malaysia Aviation Group · Internship
                    </p>
                  </div>
                </div>

                <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700">
                  Aug 2024 – Oct 2024 · 3 mos
                </span>
              </div>

              {/* Meta */}
              <p className="mt-1 text-xs text-zinc-500">
                Sepang, Selangor, Malaysia · Hybrid
              </p>

              {/* Summary */}
              <p className="mt-4 text-sm leading-relaxed text-zinc-600">
                Supported data-driven decision-making by developing dashboards, preparing
                high-quality datasets, and collaborating with stakeholders to ensure
                reporting aligned with business objectives.
              </p>

              {/* Responsibilities */}
              <div className="mt-5 space-y-4">
                <div>
                  <p className="text-sm font-semibold text-zinc-900">
                    Data Visualization & Reporting
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700">
                    <li>Designed and developed interactive Power BI dashboards to visualize KPIs and operational trends.</li>
                    <li>Translated complex datasets into clear, actionable insights for cross-functional teams.</li>
                    <li>Ensured dashboards were user-friendly, accurate, and aligned with reporting standards.</li>
                  </ul>
                </div>

                <div>
                  <p className="text-sm font-semibold text-zinc-900">
                    Data Preparation & Management
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700">
                    <li>Cleaned, structured, and organized raw data from multiple sources.</li>
                    <li>Performed data validation and quality checks to ensure reporting reliability.</li>
                    <li>Documented data preparation workflows to support repeatable analysis.</li>
                  </ul>
                </div>

                <div>
                  <p className="text-sm font-semibold text-zinc-900">
                    Data Issue Troubleshooting & Collaboration
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700">
                    <li>Identified and resolved data inconsistencies and reporting errors.</li>
                    <li>Collaborated with stakeholders to align insights with business needs.</li>
                    <li>Supported ongoing report maintenance to keep data accurate and up to date.</li>
                  </ul>
                </div>
              </div>

              {/* Skills */}
              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "Power BI",
                  "Data Visualization",
                  "Data Cleaning",
                  "Excel",
                  "SQL",
                  "Data Validation",
                  "Reporting",
                  "Stakeholder Communication",
                  "Business Analytics",
                ].map((skill) => (
                  <Pill key={skill}>{skill}</Pill>
                ))}
              </div>
            </Card>


            <Card>
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  {/* Company Logo */}
                  <div className="relative h-10 w-16 shrink-0">
                    <Image
                      src="/daikin.png"
                      alt="Daikin Malaysia Sdn Bhd"
                      fill
                      className="object-contain"
                    />
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-zinc-900">
                      Engineering IT Intern
                    </h3>
                    <p className="text-sm text-zinc-600">
                      Daikin Malaysia Sdn Bhd · Internship
                    </p>
                  </div>
                </div>

                <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700">
                  Oct 2020 – Jan 2021 · 4 mos
                </span>
              </div>

              {/* Meta */}
              <p className="mt-1 text-xs text-zinc-500">
                Sungai Buloh, Selangor, Malaysia · On-site
              </p>

              {/* Summary */}
              <p className="mt-4 text-sm leading-relaxed text-zinc-600">
                Supported the organization’s technology operations by providing hands-on
                technical assistance, managing IT resources, and developing targeted
                software solutions to improve operational efficiency.
              </p>

              {/* Responsibilities */}
              <div className="mt-5 space-y-4">
                <div>
                  <p className="text-sm font-semibold text-zinc-900">
                    Technical Support & Troubleshooting
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700">
                    <li>Provided on-site and remote technical support for hardware, software, and network-related issues.</li>
                    <li>Diagnosed and resolved system problems involving desktops, laptops, printers, and productivity tools.</li>
                    <li>Assisted end-users with software installation, upgrades, and configuration to improve user experience.</li>
                  </ul>
                </div>

                <div>
                  <p className="text-sm font-semibold text-zinc-900">
                    IT Resource & Asset Management
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700">
                    <li>Maintained and organized IT hardware inventory, labeling, and asset lifecycle documentation.</li>
                    <li>Supported deployment, setup, and maintenance of workplace technology and systems.</li>
                    <li>Assisted with scheduled system updates and preventive maintenance activities.</li>
                  </ul>
                </div>

                <div>
                  <p className="text-sm font-semibold text-zinc-900">
                    Web-Based System Development
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700">
                    <li>Designed and developed a custom web-based system to support departmental workflows.</li>
                    <li>Gathered requirements from stakeholders and translated them into functional system designs.</li>
                    <li>Implemented front-end and back-end features using PHP, JavaScript, HTML, CSS, and MySQL.</li>
                    <li>Tested, debugged, and refined the system to ensure reliability and usability.</li>
                    <li>Trained end-users on system usage, reducing manual workload and improving efficiency.</li>
                  </ul>
                </div>
              </div>

              {/* Skills */}
              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "Hardware Troubleshooting",
                  "Software Installation",
                  "User Support",
                  "IT Asset Management",
                  "Web Development",
                  "System Design",
                  "Database Management",
                  "Technical Documentation",
                  "Stakeholder Communication",
                ].map((skill) => (
                  <Pill key={skill}>{skill}</Pill>
                ))}
              </div>
            </Card>

          </div>
        </section>

        {/* Education */}
        <section id="education" className="mx-auto max-w-6xl py-6">
          <SectionTitle title="Education" desc="Academic foundation in Data Science + Cyber Security fundamentals." />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <Card>
              <p className="text-xs font-medium text-zinc-500">Bachelor</p>
              <h3 className="mt-2 text-base font-semibold">Bachelor of Computer Science (Honours)</h3>
              <p className="mt-1 text-sm text-zinc-600">Multimedia University (MMU) • Data Science</p>
              <p className="mt-2 text-sm text-zinc-700">CGPA: 3.10</p>
              <p className="mt-1 text-xs text-zinc-500">Apr 2021 – Aug 2025</p>
            </Card>

            <Card>
              <p className="text-xs font-medium text-zinc-500">Diploma</p>
              <h3 className="mt-2 text-base font-semibold">Diploma in Information Technology</h3>
              <p className="mt-1 text-sm text-zinc-600">UNIMY • Cyber Security</p>
              <p className="mt-2 text-sm text-zinc-700">CGPA: 3.23</p>
              <p className="mt-1 text-xs text-zinc-500">May 2018 – Jan 2021</p>
            </Card>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-6xl py-10">
          <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm backdrop-blur">
            <div className="grid gap-8 md:grid-cols-12 md:items-center">
              <div className="md:col-span-7">
                <h2 className="text-2xl font-semibold tracking-tight">Let’s connect.</h2>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                  If you are hiring for data/analytics, BI reporting, or computer vision roles, I would love to chat.
                  The best way to reach me is by email.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Button href={LINKS.email} variant="primary">Email</Button>
                  <Button href={LINKS.linkedin} variant="secondary">LinkedIn</Button>
                  <Button href={LINKS.github} variant="secondary">GitHub</Button>
                  <Button href="/resume.pdf" variant="secondary">Download Resume</Button>
                </div>
              </div>

              <div className="md:col-span-5">
                <div className="rounded-2xl border border-zinc-200 bg-white p-5">
                  <p className="text-xs text-zinc-500">Location</p>
                  <p className="mt-1 text-sm font-semibold text-zinc-900">Cyberjaya, Selangor</p>

                  <div className="mt-4 grid gap-3">
                    <div>
                      <p className="text-xs text-zinc-500">Email</p>
                      <p className="text-sm text-zinc-800">zulhilmi.faiz@outlook.com</p>
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500">Phone</p>
                      <p className="text-sm text-zinc-800">019-211 1455</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-8 text-center text-xs text-zinc-500">
              © {new Date().getFullYear()} Zulhilmi Faiz • Built with Next.js
            </p>
          </div>
        </section>

        <div className="h-10" />
      </div>
    </main>
  );
}
