export type ProjectTone = "lilac" | "peach" | "blue" | "sand" | "mint";

export type Project = {
  number: string;
  name: string;
  category: string;
  summary: string;
  tags: string[];
  tone: ProjectTone;
  overview: string;
  problem?: string;
  solution?: string;
  features?: string[];
  architecture?: string;
  challenges?: string[];
  contributions?: string[];
  repository?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    number: "01",
    name: "Privacy-Aware Smart Glasses",
    category: "Computer Vision / Privacy",
    summary:
      "Privacy-first smart glasses with consent-aware capture protection.",
    tags: ["Python", "OpenCV", "YuNet", "AES-256-GCM"],
    tone: "lilac",
    overview:
      "A capstone exploration of privacy-preserving wearable computing and responsible visual capture.",
    problem:
      "Wearable cameras can record people without meaningful awareness, consent or control.",
    solution:
      "A real-time vision workflow that detects faces, checks authorization and applies protective capture behavior by default.",
    features: [
      "Real-time face detection",
      "Consent and authorization checks",
      "Selective anonymization",
      "Fail-safe recording control",
    ],
    architecture:
      "Camera input → YuNet face detection → consent and authorization policy → protected recording pipeline → encrypted storage.",
    challenges: [
      "Maintaining responsive detection on constrained hardware",
      "Designing privacy-safe failure states",
    ],
    contributions: [
      "Privacy-first system design",
      "Computer-vision integration",
      "Recording controls and test-driven validation",
    ],
  },
  {
    number: "02",
    name: "Sensitive Scan AI",
    category: "Applied AI / Security",
    summary:
      "A document intelligence pipeline for detecting sensitive information.",
    tags: ["FastAPI", "PostgreSQL", "NLP"],
    tone: "peach",
    overview:
      "A full-stack sensitive-data detection application for document and data-protection workflows.",
    problem:
      "Sensitive entities can remain hidden inside large volumes of unstructured content.",
    solution:
      "A protected API pipeline that processes documents, extracts named entities and persists structured findings.",
    features: [
      "Named-entity extraction",
      "Protected API access",
      "Persistent findings",
      "Streaming processing workflow",
    ],
    architecture:
      "Client upload → FastAPI processing layer → transformer-based extraction → PostgreSQL persistence.",
    contributions: [
      "API and processing workflow",
      "Data persistence",
      "Full-stack integration",
    ],
  },
  {
    number: "03",
    name: "BeeMonitor AI Assistant",
    category: "AI / IoT",
    summary:
      "Hive telemetry paired with retrieval-based conversational assistance.",
    tags: ["Python", "ChromaDB", "FastAPI", "ESP32"],
    tone: "blue",
    overview:
      "An IoT-supported beehive monitoring concept that makes sensor data easier to explore through an AI assistant.",
    problem:
      "Raw hive telemetry can be difficult to interpret without context or an accessible interface.",
    solution:
      "Combine ESP32 sensor data with retrieval, vector embeddings and an API-based question-answering layer.",
    features: [
      "Hive telemetry ingestion",
      "Retrieval-based assistance",
      "Vector search",
      "Natural-language queries",
    ],
    architecture:
      "ESP32 sensors → telemetry pipeline → FastAPI → ChromaDB retrieval → assistant response.",
    contributions: [
      "IoT and API integration",
      "Retrieval workflow",
      "Assistant experience design",
    ],
  },
  {
    number: "04",
    name: "Exam Security System",
    category: "Computer Vision / Web",
    summary:
      "Identity, seating and examination workflows in one secure interface.",
    tags: ["Next.js", "FastAPI", "JWT"],
    tone: "sand",
    overview:
      "An integrated examination-management experience combining authenticated workflows, seating plans and face capture.",
    problem:
      "Identity verification and room organization often live in disconnected manual processes.",
    solution:
      "A responsive interface backed by authenticated APIs for identity capture, seating maps and exam workflows.",
    features: [
      "Authenticated access",
      "Seating-map management",
      "Face capture",
      "Responsive administration UI",
    ],
    architecture:
      "Next.js interface → JWT-authenticated FastAPI endpoints → examination and seating data.",
    contributions: [
      "Frontend component system",
      "API integration",
      "Responsive workflow design",
    ],
  },
  {
    number: "05",
    name: "Local LLM Lab",
    category: "AI Infrastructure",
    summary: "Experiments in private, self-hosted language-model inference.",
    tags: ["Ollama", "Open WebUI", "Linux", "Docker"],
    tone: "mint",
    overview:
      "Hands-on research into self-hosted Qwen-family models and enterprise-friendly local AI interfaces.",
    problem:
      "Cloud inference is not always appropriate for private data, constrained environments or controlled experimentation.",
    solution:
      "A containerized local model environment for comparing inference behavior and tuning runtime configuration.",
    features: [
      "Local model hosting",
      "Sampling and context tuning",
      "Latency observation",
      "Containerized deployment",
    ],
    architecture:
      "Linux host → Docker services → Ollama inference → Open WebUI client.",
    challenges: [
      "Balancing model capability with CPU constraints",
      "Managing context size and response latency",
    ],
    contributions: [
      "Environment deployment",
      "Inference experimentation",
      "Configuration analysis",
    ],
  },
  {
    number: "06",
    name: "Campus Collaboration",
    category: "Full-stack / Product",
    summary: "A student-centered platform for clearer campus collaboration.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    tone: "lilac",
    overview:
      "A full-stack campus collaboration concept organized around reusable components and clear product workflows.",
    problem:
      "Student coordination can become fragmented across unrelated channels and inconsistent processes.",
    solution:
      "A focused collaborative interface that brings common campus activities into understandable workflows.",
    features: [
      "Reusable interface components",
      "Responsive product flows",
      "Student-centered information hierarchy",
    ],
    contributions: [
      "Product structure",
      "Frontend implementation",
      "Reusable component design",
    ],
  },
];
