import Link from "next/link";
import "./home.css";
import { projects } from "@/data/projects";
import { ProjectVisual } from "@/components/project-visual";

const featuredSlugs = ["seeforme", "stickerwords", "actionlock", "international-ielts", "organizational-culture"];
const featuredProjects = featuredSlugs.map((slug) => projects.find((project) => project.slug === slug)).filter(Boolean);
const otherProjects = projects.filter((project) => !featuredSlugs.includes(project.slug));

export default function HomePage() {
  return (
    <main>
      <section className="intro wrap" aria-labelledby="intro-title">
        <p className="eyebrow">Entrepreneurship / Product archive</p>
        <h1 id="intro-title">Entrepreneurship is about acquiring skills, beliefs, and character traits.</h1>
        <p className="intro-copy">A record of my experiences in business, and the learnings that followed.</p>
        <p className="hero-citation">Alex Hormozi, <i>$100M Offers</i></p>
      </section>

      <section id="work" className="featured-work wrap" aria-labelledby="featured-title">
        <div className="section-heading"><p className="eyebrow">Selected work</p><h2 id="featured-title">Featured projects</h2></div>
        <div className="featured-project-grid">
          {featuredProjects.map((project) => project && <FeaturedProject project={project} key={project.slug} />)}
        </div>
      </section>

      <section className="other-work wrap" aria-labelledby="other-work-title">
        <div className="section-heading"><p className="eyebrow">Archive</p><h2 id="other-work-title">Other works</h2></div>
        <ul className="other-work-list">
          {otherProjects.map((project) => <li key={project.slug}><Link href={`/work/${project.slug}`}><strong>{project.name}</strong><span>{project.shortDescription}</span><i aria-hidden="true">→</i></Link></li>)}
        </ul>
      </section>

      <section className="direction wrap" aria-labelledby="direction-title">
        <div><p className="eyebrow">Direction</p><h2 id="direction-title">Entrepreneurship across disciplines.</h2></div>
        <div className="direction-copy">
          <p>I am an entrepreneur and interdisciplinary student exploring Biology × Neuroscience × Technology × Entrepreneurship.</p>
          <p className="direction-study"><b>Integrated Sciences</b> — Major<br /><b>Computer Science</b> — Minor<br /><b>Engineering</b> — Minor</p>
        </div>
      </section>

      <section className="home-contact wrap" aria-labelledby="home-contact-title">
        <p className="eyebrow">Contact</p><h2 id="home-contact-title">Let&apos;s start with the work.</h2>
        <Link href="/contact" className="text-link">Get in touch <span aria-hidden="true">↗</span></Link>
      </section>
    </main>
  );
}

function FeaturedProject({ project }: { project: (typeof projects)[number] }) {
  const title = project.featuredTitle ?? project.name;
  const description = project.featuredDescription ?? project.shortDescription;
  return <article className="featured-project">
    <Link href={`/work/${project.slug}`} className="project-image-link" aria-label={`Read ${title}`}><ProjectVisual project={project} variant="featured" /></Link>
    <div className="featured-project-copy">{project.context && <p className="eyebrow featured-context">{project.context}</p>}<h3><Link href={`/work/${project.slug}`}>{title}</Link></h3><p>{description}</p><Link className="text-link" href={`/work/${project.slug}`}>View work <span aria-hidden="true">→</span></Link></div>
  </article>;
}
