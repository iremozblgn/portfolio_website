"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  MousePointer2,
} from "lucide-react";
import ProjectDetail from "../components/ProjectDetail";
import ProjectPreview from "../components/ProjectPreview";
import SkillsOrbit from "../components/SkillsOrbit";
import BeyondCard from "../components/BeyondCard";
import { beyondPreview } from "../data/beyond";
import { projects, type Project } from "../data/projects";

const PlanetScene = dynamic(() => import("../components/PlanetScene"), {
  ssr: false,
  loading: () => <div className="planet-fallback" aria-hidden="true" />,
});

type ExperienceItem = {
  date: string;
  title: string;
  org: string;
  description?: string;
  employmentType?: string;
  location?: string;
  responsibilities?: string[];
};

const experience: ExperienceItem[] = [
  {
    date: "March 2026 – Present",
    title: "Brand Representative",
    org: "Teknopark İstanbul",
    employmentType: "Part-time",
    location: "Istanbul, Türkiye",
    description:
      "Representing the Teknopark İstanbul innovation ecosystem within the university community. Supporting collaboration between students, startups and technology initiatives while promoting entrepreneurship and technology opportunities.",
  },
  {
    date: "January 2026 – Present",
    title: "Information Security",
    org: "InfoSEC",
    employmentType: "Part-time",
    location: "Istanbul, Türkiye · On-site",
    description:
      "Working on local AI/LLM infrastructure, secure deployment, Open WebUI, Ollama, Ubuntu Linux, model configuration, inference optimization and internal AI workflows.",
  },
  {
    date: "December 2025 – February 2026",
    title: "Spark Fellow",
    org: "Fab Technologies Inc.",
    employmentType: "Internship",
    location: "United States · Remote",
    description: "Spark Fellowship at Fab Technologies Inc.",
  },
  {
    date: "November 2025 – October 2026",
    title: "Student Assistant",
    org: "Maltepe University",
    employmentType: "Part-time",
    description:
      "Supporting programming education, Object-Oriented Programming coursework, debugging and student learning.",
  },
  {
    date: "October 2025 – November 2025",
    title: "IT Intern",
    org: "TNC Group",
    employmentType: "Internship",
  },
  {
    date: "October 2024 – June 2025",
    title: "Software Engineering Intern",
    org: "Intelliate",
    employmentType: "Internship",
    location: "London, United Kingdom · Remote",
    description:
      "Worked on NLP and emotion-recognition models using Python, Transformers and Hugging Face. Developed React-based interfaces for model-result visualization and collaborated on model evaluation and validation.",
  },
  {
    date: "July 2021 – September 2021",
    title: "Software Engineering Intern",
    org: "Infinite People",
    employmentType: "Internship",
    location: "Mönchengladbach, Germany · Remote",
    description:
      "Supported software development workflows, technical requirements and collaboration with an international team.",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

function Brand() {
  return (
    <a href="#home" aria-label="Home" className="brand">
      İrem <span>Özbilgin</span>
      <i>.</i>
    </a>
  );
}
function SectionLabel({
  n,
  children,
}: {
  n: string;
  children: React.ReactNode;
}) {
  return (
    <div className="section-label">
      <span className="tiny-dot" />
      {n} / {children}
    </div>
  );
}
function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header shell">
      <Brand />
      <nav
        className={open ? "nav is-open" : "nav"}
        aria-label="Main navigation"
      >
        {[
          ["Home", "#home"],
          ["About", "#about"],
          ["Projects", "#projects"],
          ["Experience", "#experience"],
          ["Beyond the Code", "/volunteering"],
          ["Skills", "#skills"],
          ["Contact", "#contact"],
        ].map(([label, url]) => (
          <a key={label} href={url} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
      <a className="header-action" href="mailto:ozblgn.irem@gmail.com">
        Let’s Talk <ArrowUpRight size={15} />
      </a>
      <button
        className="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}
function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
function Orb() {
  const reduced = useReducedMotion() ?? false;
  const chipMotion = [
    {
      motion: { x: [0, 8, -3, 0], y: [0, -9, 4, 0], rotate: [0, 2, -1, 0] },
      duration: 8,
    },
    {
      motion: { x: [0, -7, 4, 0], y: [0, 7, -5, 0], rotate: [0, -2, 1, 0] },
      duration: 9.5,
    },
    {
      motion: { x: [0, 6, -4, 0], y: [0, -6, 5, 0], rotate: [0, 1.5, -1.5, 0] },
      duration: 10.5,
    },
  ];
  return (
    <div className="orb-stage">
      <div className="orb-glow" />
      <PlanetScene reducedMotion={reduced} />
      {["AI / ML", "RESEARCH", "DESIGN"].map((label, index) => (
        <motion.span
          className={`orbit-chip chip-${["one", "two", "three"][index]}`}
          key={label}
          animate={reduced ? undefined : chipMotion[index].motion}
          transition={{
            duration: chipMotion[index].duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <i />
          {label}
        </motion.span>
      ))}
    </div>
  );
}
function Hero() {
  return (
    <section id="home" className="hero panel">
      <Header />
      <div className="hero-inner shell">
        <Reveal className="hero-copy">
          <SectionLabel n="01">
            Software engineering · AI · Product
          </SectionLabel>
          <h1>
            Building technology
            <br />
            for a more <em>curious</em>
            <br />
            world<span className="period">.</span>
          </h1>
          <p>
            I’m İrem Özbilgin — a software engineer in the making, exploring the
            intersection of applied AI, privacy and human-centered digital
            products.
          </p>
          <div className="actions">
            <a href="#projects" className="button button-dark">
              Explore My Work <ArrowUpRight size={17} />
            </a>
            <a href="#about" className="button button-light">
              Discover More <ArrowRight size={16} />
            </a>
          </div>
        </Reveal>
        <Orb />
      </div>
      <div className="hero-bottom shell">
        <a href="#projects" className="scroll-hint">
          SCROLL TO EXPLORE <ArrowDown size={14} />
        </a>
        <div className="micro-copy">THINK. BUILD. REFINE. REPEAT.</div>
      </div>
    </section>
  );
}
const offsetFor = (diff: number) => {
  const abs = Math.abs(diff);
  return {
    x: diff * 225,
    y: abs * 26,
    scale: Math.max(0.61, 1 - abs * 0.145),
    rotateY: -diff * 13,
    rotateZ: diff * -1.6,
    opacity: abs > 2 ? 0.28 : 1,
    zIndex: 10 - abs,
    filter: `blur(${abs > 2 ? 1.5 : 0}px)`,
  };
};
function ProjectCards() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [detail, setDetail] = useState<Project | null>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const reduced = useReducedMotion();
  const startX = useRef<number | null>(null);
  const next = () => setActive((i) => (i + 1) % projects.length);
  const prev = () =>
    setActive((i) => (i - 1 + projects.length) % projects.length);
  useEffect(() => {
    if (paused || detail || reduced) return;
    const t = setInterval(
      () => setActive((i) => (i + 1) % projects.length),
      5600,
    );
    return () => clearInterval(t);
  }, [paused, detail, reduced]);
  return (
    <section id="projects" className="projects panel">
      <div className="section-head shell">
        <div>
          <SectionLabel n="02">Featured projects</SectionLabel>
          <Reveal>
            <h2>
              Ideas turned into
              <br />
              <em>real-world impact.</em>
            </h2>
          </Reveal>
        </div>
        <div className="section-head-side">
          <p>
            A selection of things I’ve researched, engineered and brought to
            life.
          </p>
          <span className="text-link">
            DRAG TO EXPLORE <MousePointer2 size={14} />
          </span>
        </div>
      </div>
      <div
        className="cards-stage"
        role="region"
        aria-label="Project gallery"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") prev();
          if (e.key === "ArrowRight") next();
        }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={(e) => {
          startX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (startX.current !== null) {
            const d = e.changedTouches[0].clientX - startX.current;
            if (Math.abs(d) > 45) {
              d < 0 ? next() : prev();
            }
            startX.current = null;
          }
        }}
        onPointerDown={(e) => {
          if (e.pointerType === "mouse") startX.current = e.clientX;
        }}
        onPointerUp={(e) => {
          if (e.pointerType === "mouse" && startX.current !== null) {
            const d = e.clientX - startX.current;
            if (Math.abs(d) > 60) d < 0 ? next() : prev();
            startX.current = null;
          }
        }}
      >
        {projects.map((p, index) => {
          let diff = index - active;
          if (diff > projects.length / 2) diff -= projects.length;
          if (diff < -projects.length / 2) diff += projects.length;
          return (
            <motion.article
              key={p.number}
              className={
                "project-card " + p.tone + (diff === 0 ? " active" : "")
              }
              animate={{
                ...offsetFor(diff),
                rotateX: diff === 0 && !reduced ? tilt.y : 0,
                rotateY:
                  offsetFor(diff).rotateY +
                  (diff === 0 && !reduced ? tilt.x : 0),
              }}
              initial={false}
              transition={{
                type: "spring",
                stiffness: 170,
                damping: 25,
                mass: 1,
              }}
              onClick={() => {
                if (diff === 0) setDetail(p);
                else setActive(index);
              }}
              onPointerMove={(e) => {
                if (diff !== 0 || reduced) return;
                const rect = e.currentTarget.getBoundingClientRect();
                setTilt({
                  x: ((e.clientX - rect.left) / rect.width - 0.5) * 5,
                  y: -((e.clientY - rect.top) / rect.height - 0.5) * 4,
                });
              }}
              onPointerLeave={() => setTilt({ x: 0, y: 0 })}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter")
                  diff === 0 ? setDetail(p) : setActive(index);
              }}
              aria-label={
                diff === 0
                  ? `View ${p.name} details`
                  : `Bring ${p.name} to front`
              }
            >
              <div className="project-card-top">
                <span>
                  {p.number} / {p.category}
                </span>
                <ArrowUpRight size={17} />
              </div>
              <ProjectPreview index={index} />
              <div className="project-card-bottom">
                <h3>{p.name}</h3>
                <p>{p.summary}</p>
                <div className="card-foot">
                  <div className="tags">
                    {p.tags.slice(0, 3).map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <span className="card-circle">
                    <ArrowUpRight size={17} />
                  </span>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
      <div className="carousel-controls shell">
        <div className="carousel-progress">
          <strong>{String(active + 1).padStart(2, "0")}</strong>
          <div className="progress-track">
            <motion.span
              animate={{ width: `${((active + 1) / projects.length) * 100}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
          <span>{String(projects.length).padStart(2, "0")}</span>
        </div>
        <div className="arrow-buttons">
          <button onClick={prev} aria-label="Previous project">
            <ChevronLeft size={19} />
          </button>
          <button onClick={next} aria-label="Next project">
            <ChevronRight size={19} />
          </button>
        </div>
      </div>
      <AnimatePresence>
        {detail && (
          <ProjectDetail
            project={detail}
            projectIndex={projects.indexOf(detail)}
            onClose={() => setDetail(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
function About() {
  return (
    <section id="about" className="about panel content-panel">
      <div className="shell about-grid">
        <Reveal>
          <SectionLabel n="03">A little about me</SectionLabel>
          <h2>
            A curious mind,
            <br />
            building <em>meaningful</em>
            <br />
            technology.
          </h2>
          <p>
            I'm a software engineering student with an interest in applied
            artificial intelligence, secure systems and thoughtful product
            experiences. I enjoy taking technically complex ideas and making
            them useful in the real world.
          </p>
          <a href="#experience" className="button button-light">
            More About Me <ArrowUpRight size={16} />
          </a>
        </Reveal>
        <div className="about-visual">
          <motion.div
            className="about-blob"
            animate={{ rotate: 360 }}
            transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="glass-note note-one"
            animate={{ y: [0, -14, 0], rotate: [-9, -6, -9] }}
            transition={{ duration: 6.5, repeat: Infinity }}
          >
            01 <strong>Explore</strong>
            <span>with curiosity</span>
          </motion.div>
          <motion.div
            className="glass-note note-two"
            animate={{ y: [0, 13, 0], rotate: [8, 12, 8] }}
            transition={{ duration: 7, repeat: Infinity }}
          >
            02 <strong>Engineer</strong>
            <span>with intention</span>
          </motion.div>
          <motion.div
            className="glass-note note-three"
            animate={{ y: [0, -9, 0], rotate: [-4, -8, -4] }}
            transition={{ duration: 5.5, repeat: Infinity }}
          >
            03 <strong>Improve</strong>
            <span>with evidence</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
function Skills() {
  return (
    <section id="skills" className="skills panel content-panel">
      <div className="shell">
        <SectionLabel n="04">Toolbox</SectionLabel>
        <div className="skills-head">
          <h2>
            Technologies I<br />
            <em>work with.</em>
          </h2>
          <p>Tools are a means to an end: solving meaningful problems.</p>
        </div>
        <SkillsOrbit />
      </div>
    </section>
  );
}
function Experience() {
  return (
    <section id="experience" className="experience panel content-panel">
      <div className="shell">
        <SectionLabel n="05">Experience & community</SectionLabel>
        <h2>
          My journey <em>so far.</em>
        </h2>
        <div className="timeline">
          {experience.map((e, i) => (
            <motion.div
              className="timeline-item"
              key={e.org}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
            >
              <div className="date">{e.date}</div>
              <div className="timeline-marker" />
              <div className="experience-info">
                <h3>{e.title}</h3>
                <div className="experience-meta">
                  <strong>{e.org}</strong>
                  {e.employmentType && (
                    <span className="employment-type">{e.employmentType}</span>
                  )}
                  {e.location && <span>{e.location}</span>}
                </div>
                {e.description && <p>{e.description}</p>}
                {e.responsibilities && (
                  <ul className="experience-responsibilities">
                    {e.responsibilities.map((responsibility) => (
                      <li key={responsibility}>{responsibility}</li>
                    ))}
                  </ul>
                )}
              </div>
              <ArrowUpRight className="timeline-arrow" size={18} />
            </motion.div>
          ))}
        </div>
        <div className="volunteering-block">
          <div className="beyond-preview-heading">
            <div>
              <span>Leadership &amp; collaboration</span>
              <h3>Beyond the Code</h3>
            </div>
            <p>
              Leadership, collaboration and experiences that shaped how I work
              with people and technology.
            </p>
          </div>
          <div className="beyond-preview-grid">
            {beyondPreview.map((item, index) => (
              <BeyondCard
                experience={item}
                index={index}
                compact
                key={item.id}
              />
            ))}
          </div>
          <a className="beyond-preview-link" href="/volunteering">
            Explore Beyond the Code <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
function Contact() {
  return (
    <section id="contact" className="contact panel">
      <div className="shell contact-inner">
        <div>
          <SectionLabel n="06">Get in touch</SectionLabel>
          <h2>
            Let’s build something
            <br />
            <em>great together.</em>
          </h2>
          <p>
            For opportunities, collaborations or conversations about software
            engineering and AI.
          </p>
          <a
            className="button button-dark"
            href="mailto:ozblgn.irem@gmail.com"
          >
            Say hello <ArrowUpRight size={17} />
          </a>
        </div>
        <div className="contact-links">
          <a href="mailto:ozblgn.irem@gmail.com">
            <Mail size={20} />
            Email <ArrowUpRight size={17} />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            <Linkedin size={20} />
            LinkedIn <ArrowUpRight size={17} />
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <Github size={20} />
            GitHub <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
      <div className="footer shell">
        <Brand />
        <span>
          © {new Date().getFullYear()} İrem Özbilgin · Crafted with curiosity.
        </span>
        <a href="#home">Back to top ↑</a>
      </div>
    </section>
  );
}
export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return (
    <>
      <motion.div className="reading-progress" style={{ scaleX }} />
      <main>
        <Hero />
        <ProjectCards />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
