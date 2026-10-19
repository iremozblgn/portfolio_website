"use client";

import type { CSSProperties, ComponentType } from "react";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  SiDocker,
  SiFastapi,
  SiFigma,
  SiHuggingface,
  SiNextdotjs,
  SiOllama,
  SiOpencv,
  SiPostgresql,
  SiPytorch,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { projects } from "../data/projects";

type Technology = {
  name: string;
  Icon?: ComponentType<{ "aria-hidden"?: boolean }>;
  symbol?: string;
  useCases: string;
  projectTag?: string;
};

type Orbit = {
  id: string;
  label: string;
  duration: number;
  direction: "normal" | "reverse";
  technologies: Technology[];
};

const orbits: Orbit[] = [
  {
    id: "design",
    label: "Design",
    duration: 48,
    direction: "normal",
    technologies: [
      {
        name: "Figma",
        Icon: SiFigma,
        useCases: "Interface design, component exploration and visual handoff.",
      },
      {
        name: "UI/UX",
        symbol: "UI",
        useCases:
          "Information hierarchy, interaction flows and accessible interface decisions.",
      },
      {
        name: "Prototyping",
        symbol: "PX",
        useCases:
          "Testing product structure and interaction ideas before implementation.",
      },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    duration: 64,
    direction: "reverse",
    technologies: [
      {
        name: "React",
        Icon: SiReact,
        useCases:
          "Reusable, stateful interfaces and interaction-rich experiences.",
        projectTag: "React",
      },
      {
        name: "Next.js",
        Icon: SiNextdotjs,
        useCases:
          "Production React applications, routing and server-rendered experiences.",
        projectTag: "Next.js",
      },
      {
        name: "TypeScript",
        Icon: SiTypescript,
        useCases:
          "Type-safe application architecture and maintainable component APIs.",
        projectTag: "TypeScript",
      },
      {
        name: "Tailwind CSS",
        Icon: SiTailwindcss,
        useCases: "Responsive utility-driven interface styling.",
        projectTag: "Tailwind",
      },
    ],
  },
  {
    id: "backend",
    label: "Backend & Infrastructure",
    duration: 78,
    direction: "normal",
    technologies: [
      {
        name: "Python",
        Icon: SiPython,
        useCases: "AI workflows, computer vision, services and automation.",
        projectTag: "Python",
      },
      {
        name: "FastAPI",
        Icon: SiFastapi,
        useCases: "Typed Python APIs and asynchronous service layers.",
        projectTag: "FastAPI",
      },
      {
        name: "PostgreSQL",
        Icon: SiPostgresql,
        useCases: "Relational persistence and structured application data.",
        projectTag: "PostgreSQL",
      },
      {
        name: "Docker",
        Icon: SiDocker,
        useCases: "Reproducible local services and containerized deployment.",
        projectTag: "Docker",
      },
    ],
  },
  {
    id: "ai",
    label: "AI / LLM",
    duration: 94,
    direction: "reverse",
    technologies: [
      {
        name: "PyTorch",
        Icon: SiPytorch,
        useCases: "Deep-learning experimentation and model development.",
        projectTag: "PyTorch",
      },
      {
        name: "OpenCV",
        Icon: SiOpencv,
        useCases:
          "Image processing, face detection and computer-vision pipelines.",
        projectTag: "OpenCV",
      },
      {
        name: "Hugging Face",
        Icon: SiHuggingface,
        useCases: "Transformer models and applied natural-language workflows.",
        projectTag: "Hugging Face",
      },
      {
        name: "Ollama",
        Icon: SiOllama,
        useCases:
          "Local language-model serving and private inference experiments.",
        projectTag: "Ollama",
      },
      {
        name: "NLP",
        symbol: "NLP",
        useCases:
          "Entity extraction, language understanding and retrieval workflows.",
        projectTag: "NLP",
      },
    ],
  },
];

function linkedProjects(technology: Technology) {
  if (!technology.projectTag) return [];
  return projects.filter((project) =>
    project.tags.includes(technology.projectTag!),
  );
}

export default function SkillsOrbit() {
  const reduced = useReducedMotion();
  const [pausedOrbit, setPausedOrbit] = useState<string | null>(null);
  const [selected, setSelected] = useState<{
    technology: Technology;
    orbit: Orbit;
  } | null>(null);

  return (
    <div className="technology-ecosystem">
      <div className="orbit-legend" aria-label="Technology categories">
        {orbits.map((orbit) => (
          <button
            key={orbit.id}
            className={`legend-item ${orbit.id}${pausedOrbit === orbit.id || selected?.orbit.id === orbit.id ? " is-active" : ""}`}
            onClick={() =>
              setPausedOrbit((current) =>
                current === orbit.id ? null : orbit.id,
              )
            }
            aria-pressed={pausedOrbit === orbit.id}
          >
            <span />
            {orbit.label}
          </button>
        ))}
      </div>

      <div
        className="skills-orbit"
        aria-label="Interactive technology ecosystem"
      >
        <motion.div
          className="skills-core"
          animate={reduced ? undefined : { y: [0, -6, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        ></motion.div>

        {orbits.map((orbit, orbitIndex) => {
          const paused = Boolean(reduced) || pausedOrbit === orbit.id;
          return (
            <div
              className={`technology-orbit orbit-${orbitIndex + 1} ${orbit.id}${pausedOrbit === orbit.id || selected?.orbit.id === orbit.id ? " is-active" : ""}`}
              key={orbit.id}
              style={
                {
                  "--orbit-duration": `${orbit.duration}s`,
                  "--orbit-direction": orbit.direction,
                  "--orbit-state": paused ? "paused" : "running",
                } as CSSProperties
              }
              onPointerEnter={() => setPausedOrbit(orbit.id)}
              onPointerLeave={() => setPausedOrbit(null)}
              onFocusCapture={() => setPausedOrbit(orbit.id)}
              onBlurCapture={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget))
                  setPausedOrbit(null);
              }}
            >
              <div className="orbit-track" aria-hidden="true" />
              <div className="orbit-rotator">
                {orbit.technologies.map((technology, index) => {
                  const Icon = technology.Icon;
                  return (
                    <div
                      className="technology-node-position"
                      style={
                        {
                          "--node-angle": `${(360 / orbit.technologies.length) * index}deg`,
                        } as CSSProperties
                      }
                      key={technology.name}
                    >
                      <motion.button
                        className={`technology-node ${selected?.technology.name === technology.name ? "is-selected" : ""}`}
                        onClick={() => setSelected({ technology, orbit })}
                        whileHover={reduced ? undefined : { scale: 1.1 }}
                        whileTap={{ scale: 0.96 }}
                        transition={{
                          type: "spring",
                          stiffness: 330,
                          damping: 22,
                        }}
                        aria-label={`Learn about ${technology.name}`}
                      >
                        <span className="technology-badge">
                          {Icon ? (
                            <Icon aria-hidden={true} />
                          ) : (
                            <b>{technology.symbol}</b>
                          )}
                        </span>
                        <strong>{technology.name}</strong>
                      </motion.button>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        {selected && (
          <motion.aside
            className={`technology-panel ${selected.orbit.id}`}
            key={selected.technology.name}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            aria-live="polite"
          >
            <div>
              <span>{selected.orbit.label}</span>
              <h3>{selected.technology.name}</h3>
              <p>{selected.technology.useCases}</p>
            </div>
            <div className="technology-projects">
              <strong>Associated portfolio projects</strong>
              {linkedProjects(selected.technology).length ? (
                <ul>
                  {linkedProjects(selected.technology).map((project) => (
                    <li key={project.number}>{project.name}</li>
                  ))}
                </ul>
              ) : (
                <p>
                  No project association is documented in the current portfolio
                  data.
                </p>
              )}
            </div>
            <button
              onClick={() => setSelected(null)}
              aria-label="Close technology information"
            >
              Close
            </button>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
}
