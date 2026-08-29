"use client";

import { useEffect, useState } from "react";
import type { EvidenceItem, Project } from "@/data/projects";

export function Gallery({ project }: { project: Project }) {
  const [active, setActive] = useState<number | null>(null);
  const current: EvidenceItem | undefined = active === null ? undefined : project.evidence[active];
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (active === null) return;
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") setActive((i) => i === null ? null : (i + 1) % project.evidence.length);
      if (event.key === "ArrowLeft") setActive((i) => i === null ? null : (i - 1 + project.evidence.length) % project.evidence.length);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active, project.evidence.length]);

  return <>
    <section className="gallery" aria-labelledby="evidence-title"><div className="section-heading"><p className="eyebrow">Evidence</p><h2 id="evidence-title">Project documentation</h2></div>
      <div className="gallery-row">{project.evidence.map((item, index) => <button className="evidence-slot" type="button" key={item.label} onClick={() => setActive(index)} aria-label={`Open ${item.label}`}><span>{item.available ? "Available evidence" : "Image slot"}</span><strong>{item.label}</strong><small>{item.detail}</small></button>)}</div>
    </section>
    {active !== null && current && <div className="lightbox" role="dialog" aria-modal="true" aria-label={current.label} onClick={() => setActive(null)}>
      <div className="lightbox-content" onClick={(event) => event.stopPropagation()}>
        <button className="lightbox-close" onClick={() => setActive(null)} autoFocus>Close <span aria-hidden="true">×</span></button>
        <div className="lightbox-placeholder"><span>{current.available ? "Evidence awaiting insertion" : "Image slot"}</span><strong>{current.label}</strong><p>{current.detail}</p></div>
        {project.evidence.length > 1 && <div className="lightbox-controls"><button onClick={() => setActive((active - 1 + project.evidence.length) % project.evidence.length)}>← Previous</button><button onClick={() => setActive((active + 1) % project.evidence.length)}>Next →</button></div>}
      </div>
    </div>}
  </>;
}
