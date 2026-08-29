import Link from "next/link";
import { projects } from "@/data/projects";
import { ProjectVisual } from "@/components/project-visual";

export default function HomePage() {
  return (
    <main>
      <section className="intro wrap" aria-labelledby="intro-title">
        <p className="eyebrow">Entrepreneurship / Product archive</p>
        <h1 id="intro-title">Build.<br />Test. Learn.<br />Build again.</h1>
        <p className="intro-copy">A record of products, experiments, research, and the decisions that followed.</p>
      </section>

      <section id="work" className="work wrap" aria-labelledby="work-title">
        <div className="section-heading"><p className="eyebrow">Selected work</p><h2 id="work-title">The work</h2></div>
        <div className="project-list">
          {projects.map((project, index) => (
            <article className={`project-preview preview-${index % 4}`} key={project.slug}>
              <Link href={`/work/${project.slug}`} className="project-image-link" aria-label={`Read ${project.name}`}>
                <ProjectVisual project={project} variant="archive" />
              </Link>
              <div className="project-preview-copy">
                <p className="project-index">{String(index + 1).padStart(2, "0")} / {project.date}</p>
                <h3><Link href={`/work/${project.slug}`}>{project.name}</Link></h3>
                <p className="metadata">{project.role}{project.skills.length ? ` · ${project.skills.join(" · ")}` : ""}</p>
                <p>{project.shortDescription}</p>
                <Link className="text-link" href={`/work/${project.slug}`}>View project <span aria-hidden="true">↗</span></Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="synthesis wrap" aria-labelledby="synthesis-title">
        <p className="eyebrow">What has accumulated</p>
        <h2 id="synthesis-title">A practice of putting ideas into motion.</h2>
        <div className="synthesis-grid">
          <p><b>Product</b>Research → Validation → MVP → Launch</p>
          <p><b>Business</b>Market → Pricing → Economics → GTM</p>
          <p><b>Growth</b>Content → Acquisition → Funnel → Conversion</p>
          <p><b>Leadership</b>Teams → Projects → Execution</p>
          <p><b>Research</b>Users → Markets → Competitors → Evidence</p>
        </div>
      </section>
    </main>
  );
}
