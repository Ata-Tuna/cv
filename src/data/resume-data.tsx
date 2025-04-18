import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Ata Tuna",
  initials: "AT",
  location: "London, UK",
  about: "",
  summary: (
    <>
      MRes graduate in Artificial Intelligence & Machine Learning from Imperial College London, with a focus on generative models and topological data analysis. I’m especially interested in using advanced AI methods to understand and counter the spread of misinformation, with the goal of supporting democratic institutions and social cohesion. I bring a strong foundation in mathematics, programming, and statistical modelling, alongside practical experience in developing scalable, interpretable data systems for real-world applications. The most up-to-date version of this resume is available at: {" "}
      <a href="https://ata-tuna.github.io/cv/" target="_blank" rel="noopener noreferrer">
        ata-tuna.github.io/cv
      </a>
      .
    </>
  ),
  summaryPlainText: "MRes graduate in Artificial Intelligence & Machine Learning from Imperial College London, with a focus on generative models and topological data analysis. I’m especially interested in using advanced AI methods to understand and counter the spread of misinformation, with the goal of supporting democratic institutions and social cohesion. I bring a strong foundation in mathematics, programming, and statistical modelling, alongside practical experience in developing scalable, interpretable data systems for real-world applications. The most up-to-date version of this resume is available at ata-tuna.github.io/cv.",
  // ... other data
  contact: {
    email: "ata.tuna.work@gmail.com",
    tel: "+44 739 253 0859",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Ata-Tuna",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ata-tuna/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Imperial College London",
      degree: "Master of Research (MRes) in Artificial Intelligence & Machine Learning.",
      start: "Oct 2023",
      end: "Oct 2024",
      description: "2.i",
    },

    {
      school: "University of Edinburgh",
      degree: "Bachelor of Science (BSc) in Mathematics & Statistics",
      start: "Sep 2018",
      end: "May 2023",
      description: "2.i, in second year I transferred from mechanical engineering.",
    },
  ],
  work: [
    {
      company: "REEF Technology",
      link: "https://reeftechnology.com/",
      badges: ["Remote", "R", "Excel"],
      title: "Data Intern",
      start: "Jul 2023",
      end: "Aug 2023",
      descriptions: [
        "⦿ Optimised and cleaned datasets collected on the field such as vessels and warehouses.",
        "⦿ Reviewed and interpreted simple financial contracts and corrected errors.",
        // "⦿ Organized and facilitated brainstorming sessions and technical workshops with software engineers to foster innovation and share the latest advancements in Generative AI.",
      ],
    },
  ],
  publications: [
    '⦿ A. Tuna, "A Deep Autoregressive Model for Dynamic Combinatorial Complexes," arXiv preprint, 2025. DOI: 10.48550/arXiv.2503.01999.',
  ],
  skills: [
    "Statistical Modelling and Evaluation",
    "Stochastic Calculus",
    "Topological Data Analysis",
    "Generative Models",
    "Graph Neural Networks",  
    "Deep Learning",

  ],
  projects: [
    {
      title: "DAMCC",
      techStack: ["PyTorch", "Scikit-Learn", "NetworkX", "Torch-Geometric", "Docker"],
      description:
        "The first deep learning model designed to generate dynamic combinatorial complexes (CCs). This is the model I developed for my MRes thesis.",
      link: {
        label: "DAMCC",
        href: "https://github.com/Ata-Tuna/DAMCC_1.2.git",
      },
    },
    {
      title: "TaxOff",
      techStack: [
        "Web Scraping",
        "Scikit-Learn",
        "PyTorch",
      ],
      award: "",
      description:
        "LLM based tax management system developed at the finals of Imperial's Business School AI Ventures Hackathon. I was responsible for web-scraping UK law for fine tuning.",
    },
    {
      title: "HYPED",
      techStack: [
        "SolidWorks",
        "MATLAB",
        "COMSOL",
      ],
      award: "UK Winner",
      description:
        "In my year, we were the top Hyperloop team in the UK and received awards from SpaceX, Virgin Hyperloop One, and the Institution of Civil Engineers. Participated in the finals at SpaceX, California.",
      link: {
        label: "hyped",
        href: "https://www.hyp-ed.com/",
      },
      },

  ],

  volunteering: [
    {
      title: "MathClans Leader",
      organization: "University of Edinburgh, School of Mathematics",
      start: "Sep 2021",
      end: "Aug 2022",
      descriptions: [
        "⦿ Created a sense of community within the School of Mathematics, integrating new students.",
        "⦿ Organized events and promoted activities related to MathClans throughout the year.",
      ],
    },
    {
      title: "Programme Representative",
      organization: "Edinburgh University Students' Association",
      start: "Sep 2021",
      end: "Aug 2022",
      descriptions: [
        "⦿ Represented School of Mathematics 3'rd years at the Students' Association.",
        "⦿ Gathered feedback from students and communicated it to Student Staff Liaison Committee.",
      ],
    },
    {
      title: "Academic Societies Representative",
      organization: "Edinburgh University Students' Association",
      start: "Oct 2019",
      end: "May 2020",
      descriptions: [
        "⦿ Conveyed ideas and concerns regarding all the academic societies of the university.",
        "⦿ Participated in decision-making processes, including motions, proposals, and council voting.",
      ],
    },
  ],
} as const;
