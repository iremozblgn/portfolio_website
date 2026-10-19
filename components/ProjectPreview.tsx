"use client";

import { useId } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

type ProjectPreviewProps = { index: number };
type VisualProps = { id: string };

const panel = "rgba(255,255,255,.72)";
const ink = "#554d5b";
const muted = "#8b8290";

function SmartGlassesVisual({ id }: VisualProps) {
  return (
    <svg viewBox="0 0 640 400" role="presentation">
      <defs>
        <linearGradient id={`${id}-metal`} x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#403a48" />
          <stop offset=".5" stopColor="#8d8296" />
          <stop offset="1" stopColor="#38333f" />
        </linearGradient>
        <linearGradient id={`${id}-lens`} x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#fff" stopOpacity=".82" />
          <stop offset=".55" stopColor="#d9d8ea" stopOpacity=".36" />
          <stop offset="1" stopColor="#afa7c4" stopOpacity=".2" />
        </linearGradient>
      </defs>
      <ellipse cx="320" cy="294" rx="205" ry="27" fill="#73657e" opacity=".1" />
      <path
        d="M191 161 71 136c-21-4-33 5-37 25l-3 17"
        fill="none"
        stroke={`url(#${id}-metal)`}
        strokeWidth="14"
        strokeLinecap="round"
      />
      <path
        d="m449 161 120-25c21-4 33 5 37 25l3 17"
        fill="none"
        stroke={`url(#${id}-metal)`}
        strokeWidth="14"
        strokeLinecap="round"
      />
      <path
        d="M196 144c-39 0-67 16-70 51-4 48 26 91 78 94 62 3 89-32 93-84 3-42-34-61-101-61Z"
        fill={`url(#${id}-lens)`}
        stroke={`url(#${id}-metal)`}
        strokeWidth="10"
      />
      <path
        d="M444 144c39 0 67 16 70 51 4 48-26 91-78 94-62 3-89-32-93-84-3-42 34-61 101-61Z"
        fill={`url(#${id}-lens)`}
        stroke={`url(#${id}-metal)`}
        strokeWidth="10"
      />
      <path
        d="M296 180c14-13 34-13 48 0"
        fill="none"
        stroke={`url(#${id}-metal)`}
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path
        d="M150 171c28-14 82-19 126-2M364 169c44-17 98-12 126 2"
        fill="none"
        stroke="#fff"
        strokeOpacity=".55"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <g transform="translate(465 137)">
        <rect width="47" height="31" rx="12" fill="#4d4655" />
        <circle cx="32" cy="15.5" r="8" fill="#b5a8cb" />
        <circle cx="32" cy="15.5" r="3" fill="#fff" opacity=".8" />
        <rect x="7" y="11" width="12" height="9" rx="4.5" fill="#7c7187" />
      </g>
      <g transform="translate(200 326)">
        <rect width="240" height="34" rx="17" fill={panel} />
        <circle cx="20" cy="17" r="5" fill="#9988ad" />
        <text
          x="35"
          y="21"
          fill={ink}
          fontSize="10"
          fontWeight="700"
          letterSpacing="1.2"
        >
          PRIVACY-AWARE VISION
        </text>
      </g>
    </svg>
  );
}

function SensitiveScanVisual(_: VisualProps) {
  return (
    <svg viewBox="0 0 640 400" role="presentation">
      <rect x="55" y="49" width="530" height="303" rx="24" fill={panel} />
      <rect
        x="55"
        y="49"
        width="530"
        height="48"
        rx="24"
        fill="#fff"
        opacity=".62"
      />
      <circle cx="82" cy="73" r="5" fill="#d6a99e" />
      <circle cx="99" cy="73" r="5" fill="#d9c7b2" />
      <circle cx="116" cy="73" r="5" fill="#b7a9c8" />
      <rect
        x="82"
        y="122"
        width="102"
        height="204"
        rx="15"
        fill="#eadfdc"
        opacity=".75"
      />
      <rect
        x="101"
        y="146"
        width="64"
        height="8"
        rx="4"
        fill="#ac9298"
        opacity=".55"
      />
      {[174, 201, 228].map((y) => (
        <rect
          key={y}
          x="101"
          y={y}
          width="48"
          height="7"
          rx="3.5"
          fill="#fff"
          opacity=".8"
        />
      ))}
      <rect
        x="207"
        y="121"
        width="229"
        height="205"
        rx="15"
        fill="#fff"
        opacity=".76"
      />
      <text x="230" y="151" fill={ink} fontSize="13" fontWeight="700">
        Document review
      </text>
      <rect x="230" y="174" width="171" height="7" rx="3.5" fill="#c5bbc7" />
      <rect x="230" y="194" width="134" height="7" rx="3.5" fill="#d3cad3" />
      <rect
        x="230"
        y="219"
        width="118"
        height="16"
        rx="5"
        fill="#594f5d"
        opacity=".85"
      />
      <rect x="355" y="219" width="46" height="16" rx="5" fill="#e6b7ae" />
      <rect
        x="230"
        y="251"
        width="80"
        height="16"
        rx="5"
        fill="#594f5d"
        opacity=".85"
      />
      <rect x="318" y="251" width="83" height="16" rx="5" fill="#e6b7ae" />
      <rect x="230" y="287" width="145" height="7" rx="3.5" fill="#d3cad3" />
      <rect x="458" y="121" width="99" height="98" rx="15" fill="#f2e4e0" />
      <path
        d="M480 190v-32h10v20h10v-29h10v29h10v-39h10v51Z"
        fill="#b78383"
        opacity=".75"
      />
      <rect x="458" y="234" width="99" height="92" rx="15" fill="#e8e2ed" />
      <circle
        cx="507"
        cy="272"
        r="21"
        fill="none"
        stroke="#aa9ab5"
        strokeWidth="8"
        strokeDasharray="82 50"
      />
      <text x="480" y="310" fill={muted} fontSize="9" letterSpacing="1">
        REDACTED VIEW
      </text>
    </svg>
  );
}

function BeeMonitorVisual(_: VisualProps) {
  return (
    <svg viewBox="0 0 640 400" role="presentation">
      <rect x="45" y="46" width="550" height="308" rx="24" fill={panel} />
      <rect
        x="45"
        y="46"
        width="112"
        height="308"
        rx="24"
        fill="#748d9e"
        opacity=".9"
      />
      <path d="M84 91h34l17 29-17 29H84l-17-29Z" fill="#fff" opacity=".8" />
      <text x="72" y="185" fill="#fff" fontSize="11" fontWeight="700">
        HIVE STATUS
      </text>
      <circle cx="77" cy="211" r="5" fill="#cfdbc2" />
      <text x="90" y="215" fill="#fff" fontSize="10">
        Connected
      </text>
      <text x="184" y="82" fill={ink} fontSize="14" fontWeight="700">
        BeeMonitor overview
      </text>
      <rect x="184" y="105" width="117" height="76" rx="14" fill="#e5eef2" />
      <text x="201" y="128" fill={muted} fontSize="9">
        TEMPERATURE
      </text>
      <path
        d="M202 159c20-18 33 4 51-11 13-11 20 2 30-12"
        fill="none"
        stroke="#7391a5"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <rect x="317" y="105" width="117" height="76" rx="14" fill="#edf1e7" />
      <text x="334" y="128" fill={muted} fontSize="9">
        HUMIDITY
      </text>
      <path
        d="M336 157c15-5 26-28 43-14 17 14 24-10 38-14"
        fill="none"
        stroke="#8da28b"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <rect x="450" y="105" width="117" height="76" rx="14" fill="#f2e7df" />
      <text x="467" y="128" fill={muted} fontSize="9">
        ACTIVITY
      </text>
      <rect x="467" y="145" width="77" height="7" rx="3.5" fill="#c89f8d" />
      <rect x="467" y="160" width="52" height="7" rx="3.5" fill="#ddc5ba" />
      <rect
        x="184"
        y="199"
        width="250"
        height="127"
        rx="14"
        fill="#fff"
        opacity=".72"
      />
      <text x="201" y="224" fill={muted} fontSize="9">
        TELEMETRY
      </text>
      <path
        d="M201 290c28-19 44 5 70-17s45-47 70-22 42 4 76-25"
        fill="none"
        stroke="#7896aa"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M201 307h216M201 268h216M201 241h216"
        stroke="#82919b"
        strokeOpacity=".13"
      />
      <rect x="450" y="199" width="117" height="127" rx="14" fill="#e8edf4" />
      <text x="468" y="224" fill={muted} fontSize="9">
        ASSISTANT
      </text>
      <rect x="468" y="241" width="80" height="22" rx="9" fill="#fff" />
      <rect x="482" y="274" width="66" height="22" rx="9" fill="#b9cad5" />
    </svg>
  );
}

function ExamSecurityVisual(_: VisualProps) {
  return (
    <svg viewBox="0 0 640 400" role="presentation">
      <rect x="48" y="50" width="544" height="300" rx="24" fill={panel} />
      <rect
        x="48"
        y="50"
        width="544"
        height="48"
        rx="24"
        fill="#fff"
        opacity=".64"
      />
      <text x="77" y="80" fill={ink} fontSize="12" fontWeight="700">
        Exam administration
      </text>
      <rect x="75" y="119" width="155" height="203" rx="15" fill="#eee6db" />
      <circle cx="152" cy="169" r="30" fill="#fff" opacity=".85" />
      <path
        d="M136 173c8 13 24 13 32 0M142 159h1M161 159h1"
        stroke="#9b897b"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <text x="105" y="220" fill={ink} fontSize="11" fontWeight="700">
        Identity check
      </text>
      <rect x="102" y="239" width="101" height="27" rx="13.5" fill="#8aa394" />
      <text x="124" y="256" fill="#fff" fontSize="9" fontWeight="700">
        VERIFIED
      </text>
      <rect
        x="257"
        y="119"
        width="306"
        height="203"
        rx="15"
        fill="#fff"
        opacity=".72"
      />
      <text x="280" y="145" fill={muted} fontSize="9" letterSpacing="1">
        ROOM LAYOUT
      </text>
      {[0, 1, 2].map((row) =>
        [0, 1, 2, 3].map((col) => (
          <g
            key={`${row}-${col}`}
            transform={`translate(${280 + col * 62} ${166 + row * 45})`}
          >
            <rect
              width="44"
              height="28"
              rx="7"
              fill={row === 1 && col === 2 ? "#d9c3bb" : "#e8e0d5"}
            />
            <circle cx="22" cy="10" r="4" fill="#948578" opacity=".6" />
          </g>
        )),
      )}
      <rect x="280" y="298" width="258" height="7" rx="3.5" fill="#ddd3c5" />
    </svg>
  );
}

function LocalLlmVisual(_: VisualProps) {
  return (
    <svg viewBox="0 0 640 400" role="presentation">
      <rect x="44" y="48" width="552" height="304" rx="24" fill="#373b40" />
      <rect x="44" y="48" width="552" height="46" rx="24" fill="#454b50" />
      <circle cx="72" cy="71" r="5" fill="#dbb0aa" />
      <circle cx="89" cy="71" r="5" fill="#dfc79c" />
      <circle cx="106" cy="71" r="5" fill="#9cbcae" />
      <rect x="66" y="116" width="144" height="211" rx="15" fill="#454c50" />
      <text x="87" y="144" fill="#dce8e1" fontSize="10" fontWeight="700">
        LOCAL MODELS
      </text>
      {[169, 207, 245].map((y, i) => (
        <g key={y}>
          <circle cx="89" cy={y} r="5" fill={i === 0 ? "#9fc6af" : "#75857d"} />
          <rect
            x="104"
            y={y - 4}
            width={i === 0 ? 72 : 58}
            height="8"
            rx="4"
            fill="#a9b6af"
            opacity={i === 0 ? 0.9 : 0.5}
          />
        </g>
      ))}
      <rect x="230" y="116" width="344" height="211" rx="15" fill="#f3f6f4" />
      <text x="254" y="145" fill={ink} fontSize="11" fontWeight="700">
        Private inference
      </text>
      <rect x="254" y="165" width="273" height="45" rx="13" fill="#e2ebe6" />
      <rect x="270" y="180" width="177" height="7" rx="3.5" fill="#91a69b" />
      <rect x="270" y="194" width="115" height="6" rx="3" fill="#bccac3" />
      <rect x="301" y="226" width="226" height="53" rx="13" fill="#dad4e2" />
      <circle cx="322" cy="246" r="8" fill="#8e819b" />
      <rect x="339" y="239" width="151" height="7" rx="3.5" fill="#958b9d" />
      <rect x="339" y="254" width="109" height="6" rx="3" fill="#b6adb9" />
      <rect x="254" y="294" width="273" height="12" rx="6" fill="#dfe5e1" />
      <rect x="254" y="294" width="168" height="12" rx="6" fill="#90ab9d" />
      <circle cx="549" cy="300" r="6" fill="#8fac9d" />
    </svg>
  );
}

function CampusVisual(_: VisualProps) {
  return (
    <svg viewBox="0 0 640 400" role="presentation">
      <rect x="46" y="48" width="548" height="304" rx="24" fill={panel} />
      <rect
        x="46"
        y="48"
        width="135"
        height="304"
        rx="24"
        fill="#8c819b"
        opacity=".9"
      />
      <circle cx="81" cy="84" r="16" fill="#fff" opacity=".84" />
      <path
        d="M75 84h12M81 78v12"
        stroke="#8c819b"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <text x="70" y="126" fill="#fff" fontSize="10" fontWeight="700">
        CAMPUS SPACE
      </text>
      {[158, 190, 222, 254].map((y, i) => (
        <rect
          key={y}
          x="70"
          y={y}
          width={i === 1 ? 82 : 68}
          height="8"
          rx="4"
          fill="#fff"
          opacity={i === 1 ? 0.9 : 0.42}
        />
      ))}
      <text x="209" y="82" fill={ink} fontSize="14" fontWeight="700">
        Collaboration board
      </text>
      <rect x="209" y="109" width="103" height="196" rx="15" fill="#e9e2ee" />
      <rect x="327" y="109" width="103" height="196" rx="15" fill="#efe1df" />
      <rect x="445" y="109" width="103" height="196" rx="15" fill="#dfe9e8" />
      {[
        [226, 132],
        [226, 189],
        [344, 132],
        [344, 213],
        [462, 132],
        [462, 178],
        [462, 241],
      ].map(([x, y], i) => (
        <g key={`${x}-${y}`}>
          <rect
            x={x}
            y={y}
            width="69"
            height={i % 3 === 0 ? 43 : 31}
            rx="9"
            fill="#fff"
            opacity=".82"
          />
          <circle
            cx={x + 12}
            cy={y + 12}
            r="5"
            fill={i % 3 === 0 ? "#a48dad" : "#c2a49e"}
          />
          <rect
            x={x + 23}
            y={y + 9}
            width="34"
            height="6"
            rx="3"
            fill="#b8afb9"
          />
        </g>
      ))}
      <g transform="translate(478 326)">
        <circle r="15" fill="#b59db8" />
        <circle cx="22" r="15" fill="#9aafad" />
        <circle cx="44" r="15" fill="#d0afa7" />
      </g>
    </svg>
  );
}

const visuals = [
  SmartGlassesVisual,
  SensitiveScanVisual,
  BeeMonitorVisual,
  ExamSecurityVisual,
  LocalLlmVisual,
  CampusVisual,
];

export default function ProjectPreview({ index }: ProjectPreviewProps) {
  const variant = index % visuals.length;
  const Visual = visuals[variant];
  const reduced = useReducedMotion();
  const rawId = useId();
  const id = `project-${variant}-${rawId.replaceAll(":", "")}`;
  const x = useSpring(useMotionValue(0), { stiffness: 150, damping: 22 });
  const y = useSpring(useMotionValue(0), { stiffness: 150, damping: 22 });

  return (
    <motion.div
      className={`project-preview preview-${variant}`}
      aria-hidden="true"
      onPointerMove={(event) => {
        if (reduced || event.pointerType === "touch") return;
        const rect = event.currentTarget.getBoundingClientRect();
        x.set(((event.clientX - rect.left) / rect.width - 0.5) * 8);
        y.set(((event.clientY - rect.top) / rect.height - 0.5) * 6);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      <div className="preview-grid" />
      <div className="preview-ambient ambient-one" />
      <div className="preview-ambient ambient-two" />
      <motion.div
        className="project-visual"
        style={reduced ? undefined : { x, y }}
      >
        <Visual id={id} />
      </motion.div>
      <span className="preview-index">0{variant + 1}</span>
      <div className="preview-shine" />
      <div className="preview-glass" />
    </motion.div>
  );
}
