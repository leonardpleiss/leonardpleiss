export interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export const education: Education[] = [
  {
    degree: "Visiting Researcher",
    institution: "MIT - Massachusetts Institute of Technology",
    period: "2026 — 2027",
    description:
      'Focused on reinforcement learning methods. Supervisor: Gioele Zardini.',
  },
  {
    degree: "Visiting Researcher",
    institution: "University of Cambridge",
    period: "2026",
    description:
      'Focused on reinforcement learning and co-design. Supervisor: Rika Antonova.',
  },
  {
    degree: "Ph.D. in Machine Learning",
    institution: "TUM - Technical University Munich",
    period: "2024 — 2027",
    description:
      'Focused on reinforcement learning methods and generalization within large language models. Advisor: Maximilian Schiffer.',
  },
  {
    degree: "M.Sc. in Human Factors Engineering",
    institution: "Technical University Berlin",
    period: "2019 - 2022",
    description:
      "",
  },
  {
    degree: "B.Sc. in Psychology",
    institution: "University of Potsdam",
    period: "2016 — 2019",
    description:
      "",
  },
];
