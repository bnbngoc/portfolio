"use client";

import { useEffect, useState } from "react";
import type { EvidenceItem, Project } from "@/data/projects";
import styles from "./gallery.module.css";

export function Gallery({ project }: { project: Project }) {
  const evidence = project.evidence.filter((item) => item.image || item.video);
  const [active, setActive] = useState<number | null>(null);
  const current: EvidenceItem | undefined = active === null ? undefined : evidence[active];
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (active === null) return;
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") setActive((i) => i === null ? null : (i + 1) % evidence.length);
      if (event.key === "ArrowLeft") setActive((i) => i === null ? null : (i - 1 + evidence.length) % evidence.length);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active, evidence.length]);

  if (evidence.length === 0) return null;

  return <>
    <section className="gallery" aria-labelledby="evidence-title"><div className="section-heading"><p className="eyebrow">Evidence</p><h2 id="evidence-title">Project documentation</h2></div>
      <div className="gallery-row">{evidence.map((item, index) => <button className="evidence-slot" type="button" key={item.label} onClick={() => setActive(index)} aria-label={`Open ${item.label}`}>{item.image ? <img className={styles.thumbnail} src={item.image.src} alt="" /> : <video className={styles.thumbnail} src={item.video!.src} muted preload="metadata" aria-hidden="true" />}<span>Supporting evidence</span><strong>{item.label}</strong><small>{item.detail}</small></button>)}</div>
    </section>
    {active !== null && current && <div className="lightbox" role="dialog" aria-modal="true" aria-label={current.label} onClick={() => setActive(null)}>
      <div className="lightbox-content" onClick={(event) => event.stopPropagation()}>
        <button className="lightbox-close" onClick={() => setActive(null)} autoFocus>Close <span aria-hidden="true">×</span></button>
        <div className="lightbox-placeholder">{current.image ? <img className={styles.lightboxImage} src={current.image.src} alt={current.image.alt} /> : <video className={styles.lightboxImage} src={current.video!.src} controls title={current.video!.title} />}<strong>{current.label}</strong><p>{current.detail}</p></div>
        {evidence.length > 1 && <div className="lightbox-controls"><button onClick={() => setActive((active - 1 + evidence.length) % evidence.length)}>← Previous</button><button onClick={() => setActive((active + 1) % evidence.length)}>Next →</button></div>}
      </div>
    </div>}
  </>;
}
