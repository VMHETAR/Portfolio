import type { PlaygroundDemo } from "@/lib/types";

export const playgroundDemos: PlaygroundDemo[] = [
  {
    id: "sorting-visualizer",
    title: "Sorting Visualizer",
    description:
      "Interactive visualization of sorting algorithms with step-by-step execution, complexity analysis, and custom array input.",
    icon: "BarChart3",
    status: "coming-soon",
  },
  {
    id: "pathfinding",
    title: "Pathfinding",
    description:
      "Compare A*, Dijkstra, and BFS on customizable grids with obstacle placement and heuristic tuning.",
    icon: "Route",
    status: "coming-soon",
  },
  {
    id: "neural-network",
    title: "Neural Network Demo",
    description:
      "Train a small feedforward network in the browser and watch decision boundaries evolve in real time.",
    icon: "Network",
    status: "coming-soon",
  },
];
