"use client";

import { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import type { Project } from "../data/projects";
import ProjectPreview from "./ProjectPreview";

type ProjectDetailProps = {
  project: Project;
  projectIndex: number;
  onClose: () => void;
};

export default function ProjectDetail({
  project,
  projectIndex,
  onClose,
}: ProjectDetailProps) {
  const reduced = useReducedMotion();
  const requestClose = () => {
    document.body.style.overflow = "";
    onClose();
  };

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        document.body.style.overflow = previousOverflow;
        onClose();
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const sections = [
    ["Overview", project.overview],
    ["Problem", project.problem],
    ["Proposed solution", project.solution],
    ["System architecture", project.architecture],
  ].filter((section): section is [string, string] => Boolean(section[1]));

  const lists = [
    ["Key features", project.features],
    ["Engineering challenges", project.challenges],
    ["My contributions", project.contributions],
  ].filter((section): section is [string, string[]] =>
    Boolean(section[1]?.length),
  );

  return (
    <motion.div
      className="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      onClick={requestClose}
    >
      <motion.article
        className="project-detail"
        initial={reduced ? { opacity: 0 } : { opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={reduced ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.98 }}
        transition={
          reduced
            ? { duration: 0.15 }
            : { type: "spring", stiffness: 220, damping: 27 }
        }
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`project-title-${project.number}`}
      >
        <button
          className="modal-close"
          onClick={requestClose}
          aria-label="Close project details"
          autoFocus
        >
          <X size={20} />
        </button>
        <div className={`detail-hero ${project.tone}`}>
          <ProjectPreview index={projectIndex} />
          <span>
            {project.number} / {project.category}
          </span>
        </div>
        <div className="detail-content">
          <header className="detail-heading">
            <div>
              <span className="detail-eyebrow">Selected project</span>
              <h2 id={`project-title-${project.number}`}>{project.name}</h2>
            </div>
            <div className="tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </header>
          <nav className="detail-nav" aria-label="Project detail sections">
            {sections.map(([title]) => (
              <a
                href={`#detail-${project.number}-${title.toLowerCase().replaceAll(" ", "-")}`}
                key={title}
              >
                {title}
              </a>
            ))}
          </nav>
          <div className="detail-sections">
            {sections.map(([title, content]) => (
              <section
                id={`detail-${project.number}-${title.toLowerCase().replaceAll(" ", "-")}`}
                key={title}
              >
                <h3>{title}</h3>
                <p>{content}</p>
              </section>
            ))}
            {lists.map(([title, items]) => (
              <section key={title}>
                <h3>{title}</h3>
                <ul>
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ))}
            <section>
              <h3>Technologies used</h3>
              <div className="tags detail-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </section>
          </div>
          {(project.repository || project.demo) && (
            <div className="detail-links">
              {project.repository && (
                <a href={project.repository} target="_blank" rel="noreferrer">
                  <Github size={17} /> Repository
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer">
                  <ExternalLink size={17} /> Live demo
                </a>
              )}
            </div>
          )}
        </div>
      </motion.article>
    </motion.div>
  );
}
