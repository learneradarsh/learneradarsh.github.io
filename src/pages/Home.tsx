import TechRadar from "../components/TechRadar";
import ImpactMetrics from "../components/ImpactMetrics";
import TechCategory from "../components/TechCategory";

import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";
import WhyCard from "../components/WhyCard";

import AIToolCard from "../components/AIToolCard";
import AwardCard from "../components/AwardCard";
import ExperienceCard from "../components/ExperienceCard";
import BarGraph from "../components/BarGraph";
import ImpactDashboard from "../components/ImpactDashboard";
import PremiumCTA from "../components/PremiumCTA";
import Testimonials from "../components/Testimonials";
import PressSection from "../components/PressSection";
import TopmateCard from "../components/TopmateCard";

export default function Home() {
  return (
    <>
      <Header />

      <main className="bg-neutral-950 text-white min-h-screen">
        {/* ================= HERO ================= */}
        <section id="home" className="relative overflow-hidden scroll-mt-28">
          <div className="max-w-7xl mx-auto px-6 pt-28 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-emerald-400 text-sm tracking-wide">
                Lead Developer 1 · Delta Airlines · AI-Driven
              </p>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-8">
                I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">scalable</span> systems.
              </h1>

              <p className="mt-6 text-gray-300 max-w-xl text-lg">
                Promoted to Lead Developer 1 at Delta Airlines in May, with 7+ years of experience across frontend, backend, cloud, and AI systems.
                I lead teams, own architecture, and ship under real-world constraints for 100M+ users.
              </p>

              <div className="flex flex-wrap gap-8 mb-14">
                <a
                  href="https://drive.google.com/file/d/1TFvgNOAvS07SrYDtZ0MjaqoErtyMIpYz/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="px-8 py-4 m-4 rounded-full border border-white/20 hover:bg-white/5 transition font-medium"
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

        {/* ================= FEATURED VIDEO ================= */}
        <section id="workshop" className="border-t border-white/10 scroll-mt-28">
          <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
            <div className="mb-8 text-center">
              <p className="text-emerald-400 text-sm tracking-wide mb-2">FEATURED WORKSHOP</p>
              <h2 className="text-3xl md:text-4xl font-semibold mb-3">
                Watch a live workshop session
              </h2>
              <p className="text-gray-400 max-w-3xl mx-auto">
                Interested in booking a college workshop session? Reach out directly to learner.adarsh@gmail.com to schedule a customised talk on software engineering, cloud, or AI.
              </p>
            </div>

            <div className="mx-auto max-w-5xl rounded-3xl overflow-hidden border border-white/10 bg-black shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
              <div className="relative aspect-video">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/Z0q8uG_jEi8"
                  title="From Startup to Delta Airlines: Adarsh Pandey on Tech Careers"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>

            <div className="mt-4 text-center text-gray-400 text-sm max-w-3xl mx-auto">
              If the embedded player does not work, <a href="https://www.youtube.com/watch?v=Z0q8uG_jEi8" target="_blank" rel="noreferrer" className="text-emerald-400 hover:text-emerald-300 transition">watch the workshop directly on YouTube</a>.
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:learner.adarsh@gmail.com?subject=Workshop%20Booking%20Inquiry"
                className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-8 py-4 text-black font-semibold hover:bg-emerald-400 transition"
              >
                Book a workshop session
              </a>
              <p className="text-gray-400 text-sm max-w-2xl text-center">
                Want me to present at your college or event? Reach out to book a customised workshop on software engineering, cloud, or AI.
              </p>
            </div>
          </div>
        </section>

        <section id="impact" className="border-t border-white/10 scroll-mt-28">
          <div className="max-w-7xl mx-auto px-6 py-12 md:py-24">
            <div className="mb-8">
              <p className="text-emerald-400 text-sm tracking-wide mb-2">REAL-WORLD IMPACT</p>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                Quantified Results at Scale
              </h2>
              <p className="text-gray-400 max-w-3xl">
                Beyond code — these are tangible outcomes from my work. From optimizing systems for 100M+ users to leading teams and shipping impactful features that drive business metrics.
              </p>
            </div>
            <ImpactDashboard />
          </div>
        </section>

        {/* ================= QUICK FACTS (HR FOCUS) ================= */}
        <Section>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="border border-emerald-400/30 rounded-lg p-4 bg-emerald-400/5">
              <p className="text-emerald-400 text-sm font-semibold">Years Experience</p>
              <p className="text-2xl font-bold mt-2">7+</p>
              <p className="text-gray-500 text-xs mt-1">Senior Level</p>
            </div>
            <div className="border border-cyan-400/30 rounded-lg p-4 bg-cyan-400/5">
              <p className="text-cyan-400 text-sm font-semibold">Companies</p>
              <p className="text-2xl font-bold mt-2">5</p>
              <p className="text-gray-500 text-xs mt-1">Scale-ups to Fortune</p>
            </div>
            <div className="border border-emerald-400/30 rounded-lg p-4 bg-emerald-400/5">
              <p className="text-emerald-400 text-sm font-semibold">Users Impacted</p>
              <p className="text-2xl font-bold mt-2">100M+</p>
              <p className="text-gray-500 text-xs mt-1">Delta Airlines</p>
            </div>
            <div className="border border-cyan-400/30 rounded-lg p-4 bg-cyan-400/5">
              <p className="text-cyan-400 text-sm font-semibold">Certifications</p>
              <p className="text-2xl font-bold mt-2">4</p>
              <p className="text-gray-500 text-xs mt-1">AWS, Cloud, Security</p>
            </div>
          </div>
        </Section>

        {/* ================= SOCIAL PROOF (TESTIMONIALS EARLY) ================= */}
        <Testimonials />

        {/* ================= WHY HIRE ME ================= */}
        <Section id="why" title="Why Hire Me?">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <WhyCard
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93"/></svg>}
              title="Scale & Performance"
              desc="Architecting resilient systems for 100M+ users. I optimize bundles, reduce latency, and ensure high availability."
            />
            <WhyCard
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>}
              title="Engineering Leadership"
              desc="Leading teams, mentoring engineers, and driving best practices (CI/CD, Nx) to elevate developer experience."
            />
            <WhyCard
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>}
              title="0 to 1 Product Building"
              desc="Thriving in ambiguity to build MVPs and align technical decisions with business goals for real user value."
            />
            <WhyCard
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>}
              title="Applied AI & Innovation"
              desc="Building practical AI solutions using OpenAI & LangChain that go beyond hype to solve business needs."
            />
          </div>
        </Section>

        {/* ================= EXPERTISE AREAS (TRUST SIGNALS) ================= */}
        <PressSection />

        {/* ================= SKILLS ================= */}
        <Section id="skills" title="Technical Expertise">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {/* Frontend */}
             <TechCategory 
               title="Frontend Ecosystem"
               icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></svg>}
               skills={["React", "Angular", "Next.js", "TypeScript", "Tailwind CSS", "Micro-frontends", "Nx Monorepos", "Redux/NgRx"]}
             />

             {/* Backend */}
             <TechCategory 
               title="Backend & Cloud"
               icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>}
               skills={["Node.js", "Express", "AWS Lambda", "DynamoDB", "API Gateway", "Redis", "System Design", "Microservices"]}
             />

             {/* DSA */}
             <TechCategory 
               title="Data Structures & Algorithms"
               icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>}
               skills={["Graph Algorithms", "Dynamic Programming", "Tree Traversals", "Hash Maps & Sets", "Time Complexity Analysis", "LeetCode Solved"]}
             />

             {/* Performance */}
             <TechCategory 
               title="Performance & Engineering"
               icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4"/><path d="M12 18v4"/><path d="M4.93 4.93l2.83 2.83"/><path d="M16.24 16.24l2.83 2.83"/><path d="M2 12h4"/><path d="M18 12h4"/><path d="M4.93 19.07l2.83-2.83"/><path d="M16.24 7.76l2.83-2.83"/></svg>}
               skills={["Core Web Vitals", "Code Splitting", "Lazy Loading", "Server-Side Rendering", "CI/CD Pipelines", "Unit Testing (Jest)", "Lighthouse"]}
             />
           </div>
        </Section>

        {/* ================= AI TOOLS ================= */}
<Section id="ai-tools" title="AI Tools & Innovation">
  <p className="text-gray-400 max-w-2xl mb-8 text-sm">
    Practical AI tools for developer productivity and customer experience.
  </p>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
    <AIToolCard name="Kiro" />
    <AIToolCard name="Amazon Q" />
    <AIToolCard name="Antigravity" />
    <AIToolCard name="LangChain" />
    <AIToolCard name="Cursor" />
    <AIToolCard name="Prompt Eng." />
    <AIToolCard name="ChatGPT" />
    <AIToolCard name="Deep Seek" />
  </div>
</Section>

        {/* ================= FEATURED BOOKS WIDGET ================= */}
        <section id="books" className="border-t border-white/10 scroll-mt-28">
          <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-950/90 via-slate-900/90 to-slate-950/95 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
              <div className="flex flex-col lg:flex-row gap-8 lg:items-end justify-between mb-8">
                <div className="max-w-2xl">
                  <p className="text-emerald-400 text-sm uppercase tracking-[0.3em] mb-3">Featured Reads</p>
                  <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
                    Published books by Adarsh Pandey
                  </h2>
                  <p className="mt-4 text-gray-300 max-w-xl leading-7">
                    Two bold fiction releases now available on Amazon India — crafted for readers who love immersive stories with emotional depth and mythic energy.
                  </p>
                </div>
              </div>

              <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
                <div className="grid gap-6 sm:grid-cols-2">
                  <article className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-5 shadow-[0_30px_60px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_35px_90px_rgba(14,165,233,0.2)]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.2),_transparent_35%)] pointer-events-none" />
                    <div className="relative flex flex-col h-full">
                      <div className="mb-5 overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950">
                        <a href="https://www.amazon.in/Soul-Transit-Adarsh-Pandey/dp/B0GQ96P99G" target="_blank" rel="noreferrer" className="block aspect-[3/4] overflow-hidden transition duration-300 group-hover:scale-105">
                          <img
                            src="https://m.media-amazon.com/images/P/B0GQ96P99G._SX300_.jpg"
                            alt="Soul in Transit book cover"
                            className="h-full w-full object-cover"
                          />
                        </a>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <p className="text-cyan-300 text-xs uppercase tracking-[0.3em] mb-2">Soul in Transit</p>
                          <h3 className="text-2xl font-semibold text-white leading-tight">A personal voyage through change</h3>
                        </div>
                        <p className="text-gray-300 leading-7">
                          A contemporary fiction journey that explores identity, transformation, and the power of personal renewal.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-gray-300">Fiction</span>
                          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-gray-300">Amazon India</span>
                        </div>
                        <a
                          href="https://www.amazon.in/Soul-Transit-Adarsh-Pandey/dp/B0GQ96P99G"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-black hover:bg-emerald-400 transition"
                        >
                          Read on Amazon
                          <span aria-hidden="true">→</span>
                        </a>
                      </div>
                    </div>
                  </article>

                  <article className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-5 shadow-[0_30px_60px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_35px_90px_rgba(6,182,212,0.2)]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(6,182,212,0.16),_transparent_30%)] pointer-events-none" />
                    <div className="relative flex flex-col h-full">
                      <div className="mb-5 overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950">
                        <a href="https://www.amazon.in/Kalyuga-Last-Echo-Adarsh-Pandey/dp/B0DFLGPJJ7" target="_blank" rel="noreferrer" className="block aspect-[3/4] overflow-hidden transition duration-300 group-hover:scale-105">
                          <img
                            src="https://m.media-amazon.com/images/P/B0DFLGPJJ7._SX300_.jpg"
                            alt="Kalyuga: Last Echo book cover"
                            className="h-full w-full object-cover"
                          />
                        </a>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <p className="text-cyan-300 text-xs uppercase tracking-[0.3em] mb-2">Kalyuga: Last Echo</p>
                          <h3 className="text-2xl font-semibold text-white leading-tight">A modern myth for today’s readers</h3>
                        </div>
                        <p className="text-gray-300 leading-7">
                          A thrilling fusion of myth, mystery, and emotional resonance designed for readers who love immersive fiction.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-gray-300">Thriller</span>
                          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-gray-300">Amazon India</span>
                        </div>
                        <a
                          href="https://www.amazon.in/Kalyuga-Last-Echo-Adarsh-Pandey/dp/B0DFLGPJJ7"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-black hover:bg-cyan-300 transition"
                        >
                          View on Amazon
                          <span aria-hidden="true">→</span>
                        </a>
                      </div>
                    </div>
                  </article>
                </div>

                <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/90 p-6 shadow-[0_25px_60px_rgba(0,0,0,0.22)]">
                  <p className="text-emerald-400 text-sm uppercase tracking-[0.24em] mb-4">Author Spotlight</p>
                  <h3 className="text-2xl font-semibold text-white mb-4">Published fiction with cinematic appeal</h3>
                  <p className="text-gray-300 leading-7">
                    Both books are written for readers who want rich characters, vivid storytelling, and a fresh voice in contemporary fiction.
                  </p>
                  <div className="mt-6 space-y-3 text-sm text-gray-400">
                    <p>• A modern narrative exploring identity, hope, and redemption.</p>
                    <p>• A mythic thriller that blends suspense with emotional drama.</p>
                    <p>• Available now on Amazon India with international accessibility.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= EXPERIENCE ================= */}
        {/* ================= PROFESSIONAL EXPERIENCE ================= */}
<Section id="experience" title="Professional Experience">

  {/* ===== EXPERIENCE OVERVIEW ===== */}
  <div className="mb-12 space-y-2">
    <BarGraph label="Delta Airlines" value={3.1} />
    <BarGraph label="Publicis Sapient" value={1.9} />
    <BarGraph label="ThoughtWorks" value={1.0} />
    <BarGraph label="Moonraft Innovation Labs" value={1.0} />
    <BarGraph label="LearnShiz Techies" value={0.7} />
  </div>

  <div className="relative border-l border-white/10 md:border-none ml-4 md:ml-0 pl-6 md:pl-0 space-y-6">


  {/* ===== DELTA AIRLINES ===== */}
  <ExperienceCard
    company="Delta Airlines"
    role="Lead Developer 1 · Delta Sync WiFi"
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
        <Section id="projects" title="Projects">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

        {/* ================= MENTORSHIP ================= */}
        <Section title="Mentorship & Consulting">
          <TopmateCard />
        </Section>

        {/* ================= ACHIEVEMENTS ================= */}
<Section id="achievements" title="Achievements">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
     <AwardCard
      highlight
      text="Above & Beyond Year End Award — Delta Airlines (2025)"
    />
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
<Section id="certifications" title="Certifications & Trainings">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
<Section id="education" title="Education">
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

{/* ================= PREMIUM CTA ================= */}
<div className="border-t border-white/10">
  <PremiumCTA />
</div>

        {/* ================= FOOTER ================= */}
        <footer className="border-t border-white/10 bg-neutral-900/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
              {/* Brand */}
              <div>
                <h3 className="text-white font-semibold mb-4">Adarsh</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Senior Software Engineer & Tech Lead. Building scalable systems for 100M+ users.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><a href="#experience" className="hover:text-emerald-400 transition">Experience</a></li>
                  <li><a href="https://github.com/learneradarsh" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition">GitHub</a></li>
                  <li><a href="https://linkedin.com/in/learneradarsh" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition">LinkedIn</a></li>
                  <li><a href="https://leetcode.com/learneradarsh" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition">LeetCode</a></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-white font-semibold mb-4">Get In Touch</h4>
                <p className="text-gray-400 text-sm mb-3">
                  Open to exciting opportunities and collaborations.
                </p>
                <a href="mailto:learner.adarsh@gmail.com" className="inline-block px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-400/50 text-emerald-400 text-sm hover:bg-emerald-500/30 transition">
                  Email Me
                </a>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-white/10 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
                <p>Bengaluru, India</p>
                <p>© 2026 Adarsh. All rights reserved.</p>
                <div className="flex gap-4">
                  <a href="https://github.com/learneradarsh" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition">GitHub</a>
                  <a href="https://linkedin.com/in/learneradarsh" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>
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
    <section id={id} className="border-t border-white/10 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6 py-10 md:py-16">
        {title && (
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 md:mb-8">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}
