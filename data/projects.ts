import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "research-pilot",
    title: "ResearchPilot: Autonomous AI Research Scientist An MCP-Powered Multi-Agent System for Scientific Literature Analysis and Research Assistance",
    description:
      "ResearchPilot is an AI-powered autonomous research assistant that performs the complete scientific literature review workflow using Model Context Protocol (MCP).",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=500&fit=crop",
    technologies: ["PyTorch", "MCP"],
    githubUrl: "https://github.com/VMHETAR/ResearchPilot",
    challenges: [
      "Finding relevant api keys and handling them securely",
      "Ensuring the agents can effectively communicate and collaborate to achieve research goals",
      "Designing a robust evaluation framework to assess the quality and relevance of the research output",
    ],
    learnings: [
      "MCP is a powerful tool for creating multi-agent systems that can perform complex tasks",
      "The agents can effectively communicate and collaborate to achieve research goals",
      "The evaluation framework is critical for assessing the quality and relevance of the research output",
    ],
    featured: true,
  },
  {
    id: "auto-data-check",
    title: "Autonomous Data Reality Engine(ADRE):Self-improving intelligence infrastructure Focus: Epistemic data validation for LLM training and reasoning",
    description:
      "ADRE is an autonomous data reality engine that performs epistemic data validation for LLM training and reasoning. It is designed to be a self-improving intelligence infrastructure that can learn from its own mistakes and improve its performance over time.",
    image:
      "https://images.unsplash.com/photo-1597733336794-12d05021d510?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Python"],
    githubUrl: "https://github.com/VMHETAR/AutoDataCheck",
    challenges: [
      "Ensuring the engine can effectively validate data for LLM training and reasoning",
      "Designing a robust evaluation framework to assess the quality and relevance of the data validation output",
      "Ensuring the engine can learn from its own mistakes and improve its performance over time",
    ],
    learnings: [
      "The engine can effectively validate data for LLM training and reasoning",
      "The evaluation framework is critical for assessing the quality and relevance of the data validation output",
      "The engine can learn from its own mistakes and improve its performance over time",
    ],
    featured: true,
  },
  {
    id: "mosaic",
    title: "MoSAIC: Memory-Optimized Sparse Adaptive Intelligent Computation",
    description:
      "MoSAIC is a novel neural network prototype designed to mimic certain aspects of the human brain, emphasizing sparse activation, adaptive growth and pruning of neurons, and resource efficiency. The architecture is capable of dynamically adjusting active connections during training to optimize computation and memory usage, making it energy-efficient and CPU-friendly compared to conventional dense networks.",
    image:
      "https://images.unsplash.com/photo-1647356191320-d7a1f80ca777?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5ldXJhbCUyMG5ldHdvcmt8ZW58MHx8MHx8fDA%3D",
    technologies: ["PyTorch", "Python"],
    githubUrl: "https://github.com/VMHETAR/MoSAIC",
    challenges: [
      "Implementing dynamic sparse activation and pruning mechanisms in a neural network architecture",
      "Implementing a neural network which understands the calculation and grows concrete neural connections based on the input data and task requirements",
      "Ensuring the architecture is energy-efficient and CPU-friendly compared to conventional dense networks",
    ],
    learnings: [
      "Dynamic sparse activation and pruning mechanisms can significantly reduce memory usage and computation time in neural networks",
      "The architecture can dynamically adjust active connections during training to optimize computation and memory usage",
      "The architecture is energy-efficient and CPU-friendly compared to conventional dense networks",
    ],
    featured: true,
  },
  {
    id: "world-model",
    title: "World Model -- An experimental case study.",
    description:
      "This is an experimental case study on world models and is not a complete project.",
    image:
      "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?q=80&w=996&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Python"],
    githubUrl: "https://github.com/VMHETAR/World-Model",
    challenges: [
      "Implementing world models for complex environments and ensuring they can effectively learn and represent the underlying dynamics",
    ],
    learnings: [
      "JEPAs (Joint Embedding Predictive Architectures) can be used to learn world models for complex environments",
      "World models can be used to generate realistic simulations of complex environments and can be used for planning and decision-making",
    ],
    featured: false,
  },
];
