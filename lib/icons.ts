import {
  BarChart3,
  Bot,
  Brain,
  ChartScatter,
  Code,
  Dice5,
  GraduationCap,
  Link,
  Mail,
  Network,
  Route,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Brain,
  Users,
  Zap,
  ChartScatter,
  Github: Code,
  Linkedin: Link,
  Mail,
  GraduationCap,
  BarChart3,
  Route,
  Network,
  Bot,
  Dice5,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Brain;
}
