export type BeyondCategory =
  | "Community Leadership"
  | "Technical Teamwork"
  | "Student Community"
  | "Campus Engagement"
  | "International Experience";

export type BeyondExperience = {
  id: string;
  category: BeyondCategory;
  organization: string;
  roleLabel: "Role" | "Experience";
  role: string;
  dates: string;
  description: string;
  headline?: string;
  location?: string;
  skills: string[];
  responsibilities: string[];
  kind: "leadership" | "international";
};

const beyondRecords: BeyondExperience[] = [
  {
    id: "gdg-maltepe",
    category: "Community Leadership",
    organization: "GDG on Campus Maltepe",
    roleLabel: "Role",
    role: "Lead (Organizer)",
    dates: "July 2025 – July 2026",
    description:
      "Led developer community initiatives, supported technical events, workshops and knowledge-sharing activities, and collaborated with student developer communities.",
    headline: "Building developer communities.",
    skills: [
      "Community leadership",
      "Event support",
      "Knowledge sharing",
      "Collaboration",
    ],
    responsibilities: [
      "Led developer community initiatives.",
      "Supported technical events, workshops and knowledge-sharing activities.",
      "Collaborated with student developer communities.",
    ],
    kind: "leadership",
  },
  {
    id: "swarm-uav",
    category: "Technical Teamwork",
    organization: "Swarm UAV Team",
    roleLabel: "Role",
    role: "Co-Lead",
    dates: "March 2024 – March 2025",
    description:
      "Contributed to interdisciplinary UAV initiatives, team coordination and collaboration across technical disciplines.",
    skills: [
      "Team coordination",
      "Interdisciplinary collaboration",
      "UAV initiatives",
    ],
    responsibilities: [
      "Contributed to interdisciplinary UAV initiatives.",
      "Supported team coordination and collaboration across technical disciplines.",
    ],
    kind: "leadership",
  },
  {
    id: "anka-software",
    category: "Student Community",
    organization: "Anka Yazılım Kulübü",
    roleLabel: "Role",
    role: "Lead",
    dates: "October 2024 – May 2025",
    description:
      "Supported student-led software initiatives, technical learning activities and community collaboration.",
    skills: [
      "Student leadership",
      "Technical learning",
      "Community collaboration",
    ],
    responsibilities: [
      "Supported student-led software initiatives.",
      "Supported technical learning activities and community collaboration.",
    ],
    kind: "leadership",
  },
  {
    id: "etkin-kampus",
    category: "Campus Engagement",
    organization: "Etkin Kampüs",
    roleLabel: "Role",
    role: "Representative",
    dates: "September 2023 – August 2025",
    description:
      "Supported campus representation, outreach and student engagement activities.",
    skills: ["Campus representation", "Outreach", "Student engagement"],
    responsibilities: [
      "Supported campus representation and outreach.",
      "Supported student engagement activities.",
    ],
    kind: "leadership",
  },
  {
    id: "landrys-work-travel",
    category: "International Experience",
    organization: "Landry's",
    roleLabel: "Experience",
    role: "Work & Travel",
    dates: "June 2025 – September 2025",
    location: "Galveston, Texas, USA",
    description:
      "Participated in the Work & Travel program in the United States, developing communication, teamwork and adaptability skills in a multicultural customer-service environment.",
    skills: [
      "Communication",
      "Teamwork",
      "Adaptability",
      "Multicultural customer service",
    ],
    responsibilities: [
      "Participated in a multicultural customer-service environment.",
      "Developed communication, teamwork and adaptability through the Work & Travel experience.",
    ],
    kind: "international",
  },
  {
    id: "teknopark-istanbul",
    category: "Campus Engagement",
    organization: "Teknopark İstanbul",
    roleLabel: "Role",
    role: "Volunteer Brand Ambassador",
    dates: "8 months · Present",
    location: "Istanbul, Türkiye",
    description:
      "Volunteering as a Brand Ambassador for Teknopark İstanbul and representing its innovation ecosystem within the university community.",
    skills: ["Brand representation", "Community engagement", "Volunteering"],
    responsibilities: [
      "Representing the Teknopark İstanbul innovation ecosystem within the university community.",
      "Supporting awareness of entrepreneurship and technology opportunities.",
    ],
    kind: "leadership",
  },
];

export const beyondExperiences: BeyondExperience[] = [
  beyondRecords[0],
  beyondRecords[1],
  beyondRecords[4],
  beyondRecords[2],
  beyondRecords[3],
  beyondRecords[5],
];

export const beyondPreview = beyondExperiences;
