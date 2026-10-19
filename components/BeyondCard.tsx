"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Globe2,
  GraduationCap,
  MapPin,
  Megaphone,
  Users,
  Wrench,
  X,
} from "lucide-react";
import type { BeyondCategory, BeyondExperience } from "../data/beyond";

const icons: Record<BeyondCategory, typeof Users> = {
  "Community Leadership": Users,
  "Technical Teamwork": Wrench,
  "Student Community": GraduationCap,
  "Campus Engagement": Megaphone,
  "International Experience": Globe2,
};

function CardMotif({ id }: { id: string }) {
  return (
    <div className={`beyond-motif motif-${id}`} aria-hidden="true">
      {id === "gdg-maltepe" && (
        <>
          <i className="connection c1" />
          <i className="connection c2" />
          <i className="connection c3" />
          <span className="connection-line l1" />
          <span className="connection-line l2" />
        </>
      )}
      {id === "swarm-uav" && (
        <>
          <i className="flight-path path-one" />
          <i className="flight-path path-two" />
          <span className="coordinate">41.0° N · 29.0° E</span>
          <b className="flight-node" />
        </>
      )}
      {id === "anka-software" && (
        <>
          <i className="code-block block-one" />
          <i className="code-block block-two" />
          <i className="code-block block-three" />
          <span className="code-mark">{`{ }`}</span>
        </>
      )}
      {(id === "etkin-kampus" || id === "teknopark-istanbul") && (
        <>
          <i className="campus-arch" />
          <i className="campus-step step-one" />
          <i className="campus-step step-two" />
          <span className="campus-sun" />
        </>
      )}
      {id === "landrys-work-travel" && (
        <>
          <i className="travel-route" />
          <span className="travel-origin" />
          <span className="travel-destination" />
          <b className="travel-coordinates">29.3° N · 94.8° W</b>
        </>
      )}
    </div>
  );
}

type BeyondCardProps = {
  experience: BeyondExperience;
  index: number;
  compact?: boolean;
};

export default function BeyondCard({
  experience,
  index,
  compact = false,
}: BeyondCardProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const reduced = useReducedMotion();
  const Icon = icons[experience.category];

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) =>
      event.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const detail =
    mounted && typeof document !== "undefined"
      ? createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                className="beyond-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpen(false)}
              >
                <motion.article
                  className={`beyond-detail-panel ${experience.kind} category-${experience.id}`}
                  initial={{ opacity: 0, y: 34, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 230, damping: 27 }}
                  onClick={(event) => event.stopPropagation()}
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby={`beyond-title-${experience.id}`}
                >
                  <button
                    className="beyond-detail-close"
                    onClick={() => setOpen(false)}
                    aria-label="Close experience details"
                    autoFocus
                  >
                    <X size={19} />
                  </button>
                  <div className="beyond-detail-visual">
                    <CardMotif id={experience.id} />
                    <span>
                      <Icon size={23} />
                    </span>
                  </div>
                  <div className="beyond-detail-copy">
                    <span className="beyond-category">
                      {experience.category}
                    </span>
                    <h2 id={`beyond-title-${experience.id}`}>
                      {experience.organization}
                    </h2>
                    {experience.location && (
                      <span className="beyond-location">
                        <MapPin size={13} />
                        {experience.location}
                      </span>
                    )}
                    <div className="beyond-detail-meta">
                      <span>
                        <b>{experience.roleLabel}</b>
                        {experience.role}
                      </span>
                      <span>
                        <b>Dates</b>
                        {experience.dates}
                      </span>
                    </div>
                    <p>{experience.description}</p>
                    <div className="beyond-detail-columns">
                      <section>
                        <h3>Relevant skills</h3>
                        <div className="beyond-skill-list">
                          {experience.skills.map((skill) => (
                            <span key={skill}>{skill}</span>
                          ))}
                        </div>
                      </section>
                      <section>
                        <h3>Responsibilities</h3>
                        <ul>
                          {experience.responsibilities.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </section>
                    </div>
                  </div>
                </motion.article>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )
      : null;

  return (
    <>
      <motion.article
        className={`beyond-card ${experience.kind} category-${experience.id}${compact ? " is-compact" : ""}`}
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.16 }}
        animate={reduced ? undefined : { rotateX: tilt.y, rotateY: tilt.x }}
        transition={{
          duration: 0.6,
          delay: index * 0.08,
          rotateX: { type: "spring", stiffness: 210, damping: 24 },
          rotateY: { type: "spring", stiffness: 210, damping: 24 },
        }}
        onPointerMove={(event) => {
          if (reduced || event.pointerType === "touch") return;
          const rect = event.currentTarget.getBoundingClientRect();
          setTilt({
            x: ((event.clientX - rect.left) / rect.width - 0.5) * 3.5,
            y: -((event.clientY - rect.top) / rect.height - 0.5) * 3,
          });
        }}
        onPointerLeave={() => setTilt({ x: 0, y: 0 })}
        whileHover={reduced ? undefined : { y: -7, scale: 1.008 }}
      >
        <button
          className="beyond-card-trigger"
          onClick={() => setOpen(true)}
          aria-haspopup="dialog"
        >
          <CardMotif id={experience.id} />
          <span className="beyond-card-icon">
            <Icon size={20} aria-hidden="true" />
          </span>
          <span className="beyond-category">{experience.category}</span>
          {experience.kind === "international" && (
            <span className="international-label">
              International work experience
            </span>
          )}
          <span className="beyond-dates">{experience.dates}</span>
          <span className="beyond-card-copy">
            {experience.headline ? (
              <strong className="beyond-headline">{experience.headline}</strong>
            ) : (
              <strong>{experience.organization}</strong>
            )}
            <span className="beyond-role">
              <b>{experience.roleLabel}</b> · {experience.role}
            </span>
            {experience.location && (
              <span className="beyond-card-location">
                <MapPin size={12} />
                {experience.location}
              </span>
            )}
          </span>
          <span className="beyond-open">
            Open story <ArrowUpRight size={15} />
          </span>
        </button>
      </motion.article>
      {detail}
    </>
  );
}
