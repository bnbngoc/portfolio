import type { Project } from "@/data/projects";

export function ProjectVisual({ project, variant = "hero" }: { project: Project; variant?: "hero" | "archive" }) {
  return <div className={`project-visual visual-${project.visualKind} visual-${variant}`} role="img" aria-label={`${project.name}: ${project.visualLabel}`}>
    <div className="visual-mark"><span>Documentation slot</span><strong>{project.visualLabel}</strong></div>
    <span className="visual-project-name">{project.name}</span>
    <span className="visual-corner">Evidence, when available</span>
  </div>;
}
