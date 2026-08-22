// Everything on the page lives here. Editing this one file covers almost every
// visible content change; components in src/components/ only lay it out.
//
// Fields that need inline links, bold or italics are HTML snippets rendered
// with Astro's `set:html`.
import photo from "./assets/photo.jpg";
import dlmuLogo from "./assets/logos/dlmu.svg";
import prscdImage from "./assets/projects/prscd.png";
import mapSamImage from "./assets/projects/map-sam.png";
import unicodImage from "./assets/projects/unicod.png";

export const CV_URL = "";

export const profile = {
  nameEn: "Hao Wang",
  nameCn: "王昊",
  role: ["Undergraduate Student", "Dalian Maritime University"],
  location: "Dalian, China",
  photo,
  links: [
    { label: "Email", href: "mailto:King.Whao@outlook.com" },
    {
      label: "GitHub",
      href: "https://github.com/hao-wang1216?tab=repositories",
      newTab: true,
    },
  ],
};

export const about = [
  `I am currently an undergraduate student at Dalian Maritime University.
   During my undergraduate studies, I have primarily carried out research
   training under the guidance of
   <a href="https://ist.dlmu.edu.cn/info/1287/7408.htm" target="_blank" rel="noopener noreferrer">Prof. Jiqing Zhang</a>.`,
  `Beyond research, I also enjoy programming, writing, and exploring delicious
   food.`,
];

export const news = [
  {
    date: "2024",
    text: "National Scholarship for Undergraduate Students.",
  },
];

export const education = [
  {
    org: "Dalian Maritime University",
    role: "Undergraduate Student",
    date: "2023 - Present",
    logo: dlmuLogo,
    url: "https://www.dlmu.edu.cn/",
  },
];

export const publications = [];

export const workingPapers = [
  {
    title:
      "Progressive Pseudo-Label Optimization for Point-Supervised Remote Sensing Change Detection",
    authors: "Hailong Ning, <strong>Hao Wang</strong>",
    meta: "Under review",
    image: prscdImage,
    imageAlt:
      "Overview of the proposed two-stage point-supervised change detection framework.",
    links: [],
  },
  {
    title:
      "Modality-Agnostic Prompt Learning for Multi-Modal Camouflaged Object Detection",
    authors: "<strong>Hao Wang</strong>, Jiqing Zhang",
    meta: "Under review",
    image: mapSamImage,
    imageAlt:
      "Overview of Modality-Agnostic Prompt Learning for Multi-Modal Camouflaged Object Detection.",
    links: [
      { label: "Paper", href: "https://arxiv.org/pdf/2604.12380v1" },
      { label: "Code", href: "https://github.com/hao-wang1216/MAP-SAM" },
    ],
  },
  {
    title: "Toward Unified Cross-Modal Camouflaged Object Detection",
    authors: "Jiqing Zhang, <strong>Hao Wang</strong>",
    meta: "Under review",
    image: unicodImage,
    imageAlt: "Overview of Toward Unified Cross-Modal Camouflaged Object Detection.",
    links: [],
  },
];

export const experience = [];

export const projects = [
  {
    org: "Research Training",
    desc:
      "Carried out undergraduate research training on deep learning, computer vision, camouflaged object detection, multimodal perception, and remote sensing change detection.",
    role: "Advised by Prof. Jiqing Zhang, Dalian Maritime University",
    date: "2023 - Present",
  },
];

export const awards = [
  {
    org: "National Scholarship for Undergraduate Students",
    date: "2024",
  },
];

export const teaching = [];

export const lastUpdated = "August 2026";
