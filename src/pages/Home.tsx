import Header from "../components/Header";
import AbstractVisual from "../components/AbstractVisual";
import MetricCard from "../components/MetricCard";

import SkillCard from "../components/SkillCard";
import ProjectCard from "../components/ProjectCard";
import WhyCard from "../components/WhyCard";
import ValueCard from "../components/ValueCard";
import AIToolCard from "../components/AIToolCard";
import AwardCard from "../components/AwardCard";
import ExperienceCard from "../components/ExperienceCard";
import BarGraph from "../components/BarGraph";

export default function Home() {
  return (
    <>
      <Header />

      <main className="bg-neutral-950 text-white min-h-screen">
        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 pt-36 pb-28 grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <p className="text-emerald-400 text-sm tracking-wide">
                Senior Full-Stack Engineer · Tech Lead · AI-Driven
              </p>

              <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-tight">
                I build scalable,
                <br />
                high-impact systems
                <br />
                used by millions.
              </h1>

              <p className="mt-6 text-gray-300 max-w-xl text-lg">
                Senior Full-Stack Engineer and Tech Lead with 7+ years of
                experience across frontend, backend, cloud, and AI systems.
                I lead teams, own architecture, and ship under real-world
                constraints for 100M+ users.
              </p>

              <div className="mt-10 flex flex-wrap gap-6">
                <a
                  href="#experience"
                  className="px-6 py-3 rounded-lg bg-emerald-400 text-black font-medium hover:bg-emerald-300 transition"
                >
                  View Experience
                </a>

                <a
                  href="https://drive.google.com/file/d/1YYKPxAXHBIP_GBwjLSXs098mdNsa4cFS/view"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-lg border border-white/20 hover:border-white/40 transition"
                >
                  Download Resume
                </a>
              </div>

              <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4">
                <MetricCard value="100M+" label="Users Impacted" />
                <MetricCard value="7+" label="Years Experience" />
                <MetricCard value="4–10" label="Engineers Led" />
                <MetricCard value="38%" label="Regression Reduction" />
              </div>
            </div>

            <div className="relative h-[520px] hidden lg:block">
              <AbstractVisual />
            </div>
          </div>
        </section>

        {/* ================= QUICK VALUE ================= */}
        <Section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard
              title="Built for scale"
              desc="Worked on systems used by 100M+ users with strict performance and reliability requirements."
            />
            <ValueCard
              title="Leadership & ownership"
              desc="Led teams, migrations, hiring, mentoring, and release planning."
            />
            <ValueCard
              title="AI with purpose"
              desc="Built AI POCs using OpenAI & LangChain that solved real business problems."
            />
          </div>
        </Section>

        {/* ================= WHY HIRE ME ================= */}
        <Section title="Why you should hire me">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <WhyCard
              title="I think in systems"
              desc="I optimize architecture, performance, and maintainability — not just features."
            />
            <WhyCard
              title="I deliver under constraints"
              desc="Inflight connectivity, tight timelines, and enterprise scale are my daily environment."
            />
            <WhyCard
              title="I raise engineering standards"
              desc="Improved coverage, eliminated lint debt, enforced clean code and CI discipline."
            />
            <WhyCard
              title="Full-stack ownership"
              desc="Comfortable owning UI, APIs, cloud, CI/CD, and AI workflows end-to-end."
            />
          </div>
        </Section>

        {/* ================= SKILLS ================= */}
        <Section title="Skills">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkillCard title="Frontend Frameworks" skills="Angular, React, Next.js" />
            <SkillCard title="Backend" skills="Node.js, Express.js, Redis, CDN strategies, API rate limiting" />
            <SkillCard title="Cloud & DevOps" skills="AWS Lambda, S3, DynamoDB, API Gateway" />
            <SkillCard title="Programming & Others" skills="TypeScript, Python, Jest, Lighthouse, NgRx, Redux, CI/CD" />
            <SkillCard title="Performance Optimization" skills="Web Performance, Accessibility, SEO, Nx Monorepos" />
            <SkillCard title="AI & ML Tools" skills="OpenAI API, LangChain, HuggingFace, Prompt Engineering" />
          </div>
        </Section>

        {/* ================= AI TOOLS ================= */}
<Section title="AI Tools & Innovation">
  <p className="text-gray-400 max-w-2xl mb-10">
    Practical use of AI tools to improve developer productivity, internal platforms,
    and customer experience — not demos or hype.
  </p>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    <AIToolCard name="OpenAI API" />
    <AIToolCard name="LangChain" />
    <AIToolCard name="HuggingFace" />
    <AIToolCard name="Prompt Engineering" />
  </div>
</Section>


        {/* ================= EXPERIENCE ================= */}
        {/* ================= PROFESSIONAL EXPERIENCE ================= */}
<Section id="experience" title="Professional Experience">

  {/* ===== EXPERIENCE OVERVIEW ===== */}
  <div className="mb-16 space-y-3">
    <BarGraph label="Delta Airlines" value={3.1} />
    <BarGraph label="Publicis Sapient" value={1.9} />
    <BarGraph label="ThoughtWorks" value={1.0} />
    <BarGraph label="Moonraft Innovation Labs" value={1.0} />
    <BarGraph label="LearnShiz Techies" value={0.7} />
  </div>

  {/* ===== DELTA AIRLINES ===== */}
  <ExperienceCard
    company="Delta Airlines"
    role="Senior Developer 2 · Delta Sync WiFi"
    period="Dec 2022 — Present"
    location="Bengaluru, India"
    highlights={[
      "Led a team of 4 engineers for Nx migration and Angular upgrade, improving code coverage from 68% → 90%, eliminating 580 lint errors, and reducing cyclomatic complexity from 12 → 4.",
      "Reduced regression issues by 38% and WiFi failures by 3.5% through architectural and quality improvements.",
      "Delivered MVP for Free WiFi on Delta Regional Flights in 2.5 months, contributing to CSAT increase.",
      "Architected Service Worker–based caching system, reducing server bandwidth by 18% and improving inflight reliability for 100M+ users.",
      "Reduced frontend bundle size from 22MB → 5MB via content-split strategy, accelerating deployments and cutting regression testing time by 20%.",
      "Led re-login flow optimization, increasing user engagement by 26.3% MoM.",
      "Contributed reusable components to Delta’s internal design system (Aura), adopted across teams.",
      "Spearheaded Project Omega, an internal idea-submission and innovation tracking platform.",
      "Mentored engineers, conducted interviews, onboarding, and led Angular & clean-code training.",
      "Implemented label-driven deployments via MRs, removing manual release steps.",
      "Delivered Dark Flight module within the first month, improving customer experience by 55%.",
      "Introduced centralized documentation using Docusaurus to reduce information loss and support overhead."
    ]}
  />

  {/* ===== PUBLICIS SAPIENT ===== */}
  <ExperienceCard
    company="Publicis Sapient"
    role="Senior Associate XT L1 · Verizon B360"
    period="Jan 2021 — Nov 2022"
    location="Bengaluru, India"
    highlights={[
      "Handled two UI tracks independently, earning One Man Army Appreciation from Senior Manager.",
      "Contributed to Knowhow (PS Innersource Product), enhancing dashboards and optimizing API calls, reducing infrastructure load by 8%.",
      "Implemented fallout-reason feature on sales rep dashboard, increasing retail channel revenue by 1.8%.",
      "Built shared-cart feature that reduced a 2-day sales process to a few minutes."
    ]}
  />

  {/* ===== THOUGHTWORKS ===== */}
  <ExperienceCard
    company="ThoughtWorks"
    role="Consultant · IDeaS Optics SaaS"
    period="Feb 2020 — Jan 2021"
    location="Pune, India"
    highlights={[
      "Developed MVP from scratch in a 7-member team, delivering key features ahead of schedule.",
      "Served as Security Champion, enforcing secure coding practices and application security standards.",
      "Contributed to ThoughtWorks open-source initiatives and internal engineering practices."
    ]}
  />

  {/* ===== MOONRAFT ===== */}
  <ExperienceCard
    company="Moonraft Innovation Labs"
    role="Software Engineer · Vanguard Charitable (Global Charitable Trust)"
    period="Feb 2019 — Jan 2020"
    location="Bengaluru, India"
    highlights={[
      "Worked as module lead for critical deliverables and mentored a junior UI developer.",
      "Improved performance and code quality for Login, Forgot User ID, Forgot Password, and TIFF exchange flows.",
      "Achieved 34% page-load improvement using React, JavaScript, and SonarQube (Lighthouse-measured)."
    ]}
  />

  {/* ===== LEARNSHIZ ===== */}
  <ExperienceCard
    company="LearnShiz Techies"
    role="Co-Founder"
    period="Jun 2018 — Feb 2019"
    location="New Delhi, India"
    highlights={[
      "Led a team of 5 engineers delivering projects across Israel, UAE, USA, and Canada.",
      "Delivered SDKs, WooCommerce solutions, and open-source SaaS generating $10,000+ revenue per quarter.",
      "Created RAPID modules to deliver fast POCs for business meetings and early validation."
    ]}
  />
</Section>


        {/* ================= PROJECTS ================= */}
        <Section title="Projects">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Driftless"
              year="2025"
              tag="Offline Sync"
              desc="Framework-agnostic offline-first sync library."
              link="https://www.npmjs.com/package/driftless-sync"
            />
            <ProjectCard
              title="FOUT"
              year="2024"
              tag="Web Performance"
              desc="Font loading optimization library."
              link="https://github.com/learneradarsh/FOUT"
            />
            <ProjectCard
              title="WebVitals"
              year="2024"
              tag="Observability"
              desc="Core Web Vitals tracking SDK."
              link="https://github.com/learneradarsh/WebVitals"
            />
            <ProjectCard
              title="WalkieTalkie"
              year="2024"
              tag="Realtime"
              desc="Secure intranet chat app."
              link="https://github.com/learneradarsh/WalkieTakie"
            />
            <ProjectCard
              title="Vibein.me"
              year="2022"
              tag="Product Design"
              desc="Influencer & affiliate marketing platform."
              link="https://www.figma.com/design/sVV9T1NaQHfF721pAj9ROY"
            />
          </div>
        </Section>

        {/* ================= ACHIEVEMENTS ================= */}
<Section title="Achievements">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <AwardCard
      highlight
      text="Above & Beyond Year End Award — Delta Airlines (2023)"
    />
    <AwardCard
      text="Core Value Award — Publicis Sapient (2022)"
    />
    <AwardCard
      text="Learning Mindset Award — Publicis Sapient (2022)"
    />
    <AwardCard
      text="GSSOC’21 Mentor — Led open source contributors for RocketCP (2021)"
    />
    <AwardCard
      text="Mozilla Campus Ignitor — Led UICap open source submission (2018)"
    />
  </div>
</Section>

{/* ================= CERTIFICATIONS ================= */}
<Section title="Certifications & Trainings">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <AwardCard
      highlight
      text="AWS Solutions Architect — Certified (2025)"
    />
    <AwardCard
      text="Cloud Accelerator Program — Pluralsight (2024)"
    />
    <AwardCard
      text="Developing on AWS — Instructor Led (Delta IT, 2023)"
    />
    <AwardCard
      text="Security Learning Program — L&TD Publicis Sapient (2022)"
    />
  </div>
</Section>

{/* ================= EDUCATION ================= */}
<Section title="Education">
  <div className="border border-white/10 rounded-xl p-6 bg-white/5 max-w-3xl">
    <h3 className="text-lg font-medium">
      Bachelor of Technology (B.Tech) — Computer Science & Engineering
    </h3>

    <p className="text-gray-400 mt-2 text-sm">
      Kamla Nehru Institute of Technology (KNIT), Sultanpur
    </p>

    <div className="flex justify-between mt-4 text-gray-300 text-sm">
      <span>CGPA: 8.1</span>
      <span>June 2018</span>
    </div>
  </div>
</Section>


        {/* ================= FOOTER ================= */}
        <footer className="border-t border-white/10 py-16 text-center text-gray-500">
          Bengaluru, India · learner.adarsh@gmail.com ·{" "}
          <a className="text-emerald-400" href="https://github.com/learneradarsh">GitHub</a> ·{" "}
          <a className="text-emerald-400" href="https://linkedin.com/in/learneradarsh">LinkedIn</a> ·{" "}
          <a className="text-emerald-400" href="https://leetcode.com/learneradarsh">LeetCode</a>
        </footer>
      </main>
    </>
  );
}

/* ================= SECTION ================= */

function Section({
  title,
  children,
  id,
}: {
  title?: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-24">
        {title && (
          <h2 className="text-3xl md:text-4xl font-semibold mb-12">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}
