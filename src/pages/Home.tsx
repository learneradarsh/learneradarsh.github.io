import TechRadar from "../components/TechRadar";
import ImpactMetrics from "../components/ImpactMetrics";

import Header from "../components/Header";
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
          <div className="max-w-7xl mx-auto px-6 pt-36 pb-28 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-emerald-400 text-sm tracking-wide uppercase font-semibold mb-4">
                Senior Full-Stack Engineer · Tech Lead · AI-Driven
              </p>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-8">
                I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">scalable</span> systems.
              </h1>

              <p className="text-gray-300 max-w-xl text-lg leading-relaxed mb-10">
                Senior Tech Lead with 7+ years of experience. I don't just write code; 
                I design resilient architectures, lead high-performing teams, and deliver 
                business value for 100M+ users.
              </p>

              <div className="flex flex-wrap gap-4 mb-14">
                <a
                  href="#experience"
                  className="px-8 py-4 rounded-full bg-emerald-500 text-black font-bold hover:bg-emerald-400 transition shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                >
                  View Experience
                </a>

                <a
                  href="https://drive.google.com/file/d/1YYKPxAXHBIP_GBwjLSXs098mdNsa4cFS/view"
                  target="_blank"
                  rel="noreferrer"
                  className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/5 transition font-medium"
                >
                  Download Resume
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-6 mb-10">
                <a href="https://github.com/learneradarsh" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition transform hover:scale-110">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" className="w-8 h-8 invert" alt="GitHub" />
                </a>
                <a href="https://linkedin.com/in/learneradarsh" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition transform hover:scale-110">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" className="w-8 h-8" alt="LinkedIn" />
                </a>
                <a href="https://leetcode.com/learneradarsh" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition transform hover:scale-110">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" className="w-8 h-8 invert opacity-80" alt="LeetCode" />
                </a>
              </div>

              <ImpactMetrics />
            </div>

            <div className="relative hidden lg:flex flex-col items-center justify-center gap-10">
               {/* Tech Radar */}
               <div className="scale-110">
                 <TechRadar />
               </div>


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

        {/* ================= SKILLS ================= */}
        <Section title="Technical Expertise">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
             {/* Text Skills */}
             <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
                <SkillCard title="Frontend Architecture" skills="Angular, React, Next.js, Micro-frontends, Nx Monorepos" />
                <SkillCard title="Backend & Cloud" skills="Node.js, AWS (Lambda, S3, DynamoDB), Redis, API Gateway" />
                <SkillCard title="Leadership & Process" skills="CI/CD, Agile, Mentoring, Code Reviews, System Design" />
             </div>
           </div>
        </Section>

        {/* ================= AI TOOLS ================= */}
<Section title="AI Tools & Innovation">
  <p className="text-gray-400 max-w-2xl mb-10">
    Practical use of AI tools to improve developer productivity, internal platforms,
    and customer experience — not demos or hype.
  </p>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    <AIToolCard name="Kiro" />
    <AIToolCard name="Amazon Q" />
    <AIToolCard name="ChatGPT" />
    <AIToolCard name="Deep Seek" />
    <AIToolCard name="Antigravity" />
    <AIToolCard name="LangChain" />
    <AIToolCard name="HuggingFace" />
    <AIToolCard name="Prompt Eng." />
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

  <div className="relative border-l border-white/10 md:border-none ml-4 md:ml-0 pl-6 md:pl-0 space-y-8">


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
  </div>
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
