import type { Project } from "@/data/projects";
import styles from "./project-visual.module.css";

export function ProjectVisual({ project, variant = "hero" }: { project: Project; variant?: "hero" | "archive" | "featured" }) {
  return <div className={`project-visual visual-${project.visualKind} visual-${variant}${project.image ? " has-project-image" : ""}`} role={project.image ? undefined : "img"} aria-label={project.image ? undefined : `${project.name}: ${project.visualLabel}`}>
    {project.image && <img className={styles.image} src={project.image.src} alt={project.image.alt} />}
    <div className="visual-mark"><span>{project.image ? "Selected visual" : "Documentation slot"}</span><strong>{project.visualLabel}</strong></div>
    <span className="visual-project-name">{project.name}</span>
    <span className="visual-corner">{project.image ? "Project evidence" : "Evidence, when available"}</span>
  </div>;
}
