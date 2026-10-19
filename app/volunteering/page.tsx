import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import BeyondCard from "../../components/BeyondCard";
import { beyondExperiences } from "../../data/beyond";

export const metadata: Metadata = {
  title: "Beyond the Code — İrem Özbilgin",
  description:
    "Leadership, collaboration and international experiences that shaped how İrem works with people and technology.",
};

export default function VolunteeringPage() {
  return (
    <main className="beyond-page">
      <header className="beyond-page-nav shell">
        <Link href="/" className="brand">
          İrem <span>Özbilgin</span>
          <i>.</i>
        </Link>
        <Link href="/#experience" className="back-link">
          <ArrowLeft size={15} /> Back to portfolio
        </Link>
      </header>
      <section className="beyond-hero shell">
        <span className="beyond-kicker">
          Leadership · Community · Perspective
        </span>
        <h1>
          Beyond <em>the Code.</em>
        </h1>
        <p>
          Leadership, collaboration and experiences that shaped how I work with
          people and technology.
        </p>
      </section>
      <section
        className="beyond-grid shell"
        aria-label="Leadership and international experiences"
      >
        {beyondExperiences.map((experience, index) => (
          <BeyondCard
            experience={experience}
            index={index}
            key={experience.id}
          />
        ))}
      </section>
      <footer className="beyond-page-footer shell">
        <span>Leadership, collaboration and international perspective.</span>
        <Link href="/">Return home ↑</Link>
      </footer>
    </main>
  );
}
