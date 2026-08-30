import type { Metadata } from "next";
import "../../project-links.css";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Gallery } from "@/components/gallery";
import { ProjectVisual } from "@/components/project-visual";
import { getProject, projects } from "@/data/projects";

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => { const project = getProject(slug); return project ? { title: `${project.name} | Portfolio`, description: project.shortDescription, openGraph: { title: `${project.name} | Portfolio`, description: project.shortDescription } } : {}; });
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProject((await params).slug); if (!project) notFound();
  const index = projects.indexOf(project); const previous = projects[index - 1]; const next = projects[index + 1];
  const phase = project.status === "Ongoing" ? "Built → Tested → Learned → Iterating" : project.status === "Deprioritized" ? "Built → Tested → Learned → Deprioritized" : project.status === "Completed" ? "Built → Tested → Completed" : "Built → Tested → Learned → Stopped";
  return <main className="project-page wrap">
    <header className="project-header"><p className="eyebrow">{project.date}</p><div className="project-title-row"><h1>{project.name}</h1><span className={`status status-${project.status.toLowerCase()}`}>{project.status}</span></div><p className="project-role">{project.role}</p>{project.skills.length > 0 && <p className="metadata">{project.skills.join(" · ")}</p>}</header>
    <ProjectVisual project={project} />
    {project.links && project.links.length > 0 && <section className="project-links project-links-top" aria-label="Important links"><p className="eyebrow">Important links</p><div>{project.links.map((link) => <a key={link.href} className="text-link" href={link.href} target="_blank" rel="noreferrer">{link.label} <span aria-hidden="true">↗</span></a>)}</div></section>}
    <div className="phase" aria-label={`Project status: ${phase}`}>{phase.split(" → ").map((item, i) => <span key={item}>{item}{i < phase.split(" → ").length - 1 && <i aria-hidden="true">→</i>}</span>)}</div>
    <section className="project-summary"><p>{project.shortDescription}</p></section>
    <div className="detail-grid">
      {project.problem && <DetailSection title="The problem"><p>{project.problem}</p></DetailSection>}
      <DetailSection title="What I worked on"><p>{project.whatIBuilt}</p></DetailSection>
      <DetailSection title="Contribution"><List items={project.contribution} /></DetailSection>
    </div>
    {project.traction && <section className="metrics" aria-labelledby="traction-title"><p className="eyebrow">Traction / evidence</p><h2 id="traction-title">The record</h2><div className="metrics-grid">{project.traction.map((metric) => <div key={`${metric.value}-${metric.label}`}><strong>{metric.value}</strong><span>{metric.label}</span>{metric.note && <small>{metric.note}</small>}</div>)}</div></section>}
    <Gallery project={project} />
    <section className="learning"><p className="eyebrow">Reflection</p><h2>What stayed with me</h2><List items={project.learning} /></section>
    <section className="decision"><p className="eyebrow">Outcome</p><p>{project.decision}</p></section>
    {project.nextProject && <section className="next-connection"><p className="eyebrow">What came next</p><p>{project.nextProject.connection}</p><Link href={`/work/${project.nextProject.slug}`} className="text-link">{project.nextProject.name} <span aria-hidden="true">↗</span></Link></section>}
    <nav className="project-nav" aria-label="Project navigation">{previous ? <Link href={`/work/${previous.slug}`}><span>Previous</span>{previous.name}</Link> : <span />}{next ? <Link href={`/work/${next.slug}`} className="next"><span>Next</span>{next.name}</Link> : <span />}</nav>
  </main>;
}
function DetailSection({ title, children }: { title: string; children: React.ReactNode }) { return <section><p className="eyebrow">{title}</p>{children}</section>; }
function List({ items }: { items: string[] }) { return <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>; }
